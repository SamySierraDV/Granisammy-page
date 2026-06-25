import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MetricsCounter from '../components/MetricsCounter';

describe('MetricsCounter Component', () => {
  it('el contador llega al valor final', async () => {
    render(<MetricsCounter value={15} label="Años de Trayectoria" suffix="+" />);

    // Assert that the label is rendered correctly
    expect(screen.getByText(/Años de Trayectoria/i)).toBeInTheDocument();

    // Wait for the spring animation to converge and display the final values
    await waitFor(
      () => {
        expect(screen.getByText('15')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
