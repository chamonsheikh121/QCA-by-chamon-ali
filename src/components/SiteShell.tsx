import { type ReactNode, useEffect, useState } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Link } from "@tanstack/react-router";

export function SiteShell({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] gradient-gold-bg transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
        <Link to="/contact" className="btn-gold w-full shadow-2xl">
          Schedule Alignment Call
        </Link>
      </div>
    </div>
  );
}
