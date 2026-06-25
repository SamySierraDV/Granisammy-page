import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from '../features/contact/ContactSection';

describe('ContactForm / ContactSection Component', () => {
  it('muestra error si se envía vacío; muestra éxito al completar', async () => {
    render(<ContactSection />);

    // 1. Trigger submit with empty fields
    const submitBtn = screen.getByRole('button', { name: /solicitar cotización/i });
    fireEvent.click(submitBtn);

    // Assert that validation errors are rendered on screen
    expect(await screen.findByText(/el nombre debe tener al menos/i)).toBeInTheDocument();
    expect(screen.getByText(/la ciudad es requerida/i)).toBeInTheDocument();
    expect(screen.getByText(/ingrese un número telefónico/i)).toBeInTheDocument();
    expect(screen.getByText(/seleccione un tipo de proyecto/i)).toBeInTheDocument();
    expect(screen.getByText(/el mensaje debe tener al menos/i)).toBeInTheDocument();

    // 2. Fill the form correctly to satisfy Zod
    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: 'Samuel Sierra Moreno' },
    });
    fireEvent.change(screen.getByLabelText(/ciudad proyecto/i), {
      target: { value: 'Barranquilla' },
    });
    fireEvent.change(screen.getByLabelText(/teléfono de contacto/i), {
      target: { value: '3112681041' },
    });
    fireEvent.change(screen.getByLabelText(/tipo de proyecto/i), {
      target: { value: 'Hotelero' },
    });
    fireEvent.change(screen.getByLabelText(/detalles y alcance de la obra/i), {
      target: { value: 'Necesitamos instalación de pisos de gran formato de mármol de alta pureza.' },
    });

    // Submit form again
    fireEvent.click(submitBtn);

    // 3. Wait for the success state view (releasing mock submission delay)
    await waitFor(
      () => {
        expect(screen.getByText(/¡Solicitud Enviada!/i)).toBeInTheDocument();
        expect(screen.getByText(/recibido los detalles de tu proyecto/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
