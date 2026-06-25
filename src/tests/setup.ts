import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia since jsdom doesn't implement it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver to auto-trigger isIntersecting: true for viewports
class MockIntersectionObserver {
  constructor(public callback: any) {}
  observe(target: Element) {
    // Fire callback after a tick with isIntersecting true to simulate scroll entry
    setTimeout(() => {
      this.callback([{ isIntersecting: true, target }]);
    }, 10);
  }
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver as any;
