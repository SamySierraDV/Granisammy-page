import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface MetricsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  format?: (val: number) => string;
}

export default function MetricsCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  format = (val) => val.toLocaleString('es-CO'),
}: MetricsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [currentValue, setCurrentValue] = useState(0);

  // Motion values
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.5,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentValue(value);
      return;
    }

    if (isInView) {
      // Set value so the spring animates towards it
      count.set(value);
    }
  }, [isInView, value, count, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Listen to spring updates and synchronize with React state
    const unsubscribe = springValue.on('change', (latest) => {
      setCurrentValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue, shouldReduceMotion]);

  return (
    <div
      ref={ref}
      id={`metric-${label.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-center p-6 border-b lg:border-b-0 lg:border-r border-gold/20 last:border-0"
    >
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold font-bold mb-2">
        <span>{prefix}</span>
        <span aria-live="polite">
          {format(currentValue)}
        </span>
        <span>{suffix}</span>
      </div>
      <p className="text-stone-400 font-sans tracking-wide text-sm uppercase">{label}</p>
    </div>
  );
}
