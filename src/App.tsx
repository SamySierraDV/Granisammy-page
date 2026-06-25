import { lazy, Suspense, startTransition, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Configure TanStack Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Lazy-loaded visual sections for B2B performance profiling & code splitting
const HeroSection = lazy(() => import('./features/hero/HeroSection'));
const QuienesSomosSection = lazy(() => import('./features/about/QuienesSomosSection'));
const ServicesSection = lazy(() => import('./features/services/ServicesSection'));
const ProjectsSection = lazy(() => import('./features/projects/ProjectsSection'));
const AliadosSection = lazy(() => import('./features/aliados/AliadosSection'));
const ProcesoTrabajoSection = lazy(() => import('./features/services/ProcesoTrabajoSection'));
const ContactSection = lazy(() => import('./features/contact/ContactSection'));

// Premium, skeletal loading state for Suspense transitions
function SectionPlaceholder() {
  return (
    <div className="w-full min-h-[300px] bg-crema flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A84C]">
          Cargando Espacio de Lujo...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  // Prime transitions correctly
  useEffect(() => {
    // Ensuring smooth and consistent paint cycles
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-crema text-onyx selection:bg-gold/30 flex flex-col justify-between">
        
        {/* Navigation Layer (Synchronous for content paint safety) */}
        <Navbar />

        {/* Major app sections with Lazy Suspense splitting */}
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<SectionPlaceholder />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <QuienesSomosSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <ServicesSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <AliadosSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <ProcesoTrabajoSection />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder />}>
            <ContactSection />
          </Suspense>
        </main>

        {/* Global Footer (Synchronous) */}
        <Footer />

      </div>
    </QueryClientProvider>
  );
}
