import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current || shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const Comp = Tag as any;
  return (
    <Comp ref={ref as any} className={`reveal ${delayClass} ${shown ? "in" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
