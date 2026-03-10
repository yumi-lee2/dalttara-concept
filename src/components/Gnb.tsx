import { useEffect, useState } from "react";

const sections = [
  { id: "world", label: "세계관" },
  { id: "character", label: "달생이" },
  { id: "core-gameplay", label: "게임플레이" },
  { id: "core-loop", label: "코어 루프" },
  { id: "value-system", label: "가치 시스템" },
  { id: "differentiation", label: "차별화" },
  { id: "target", label: "타겟" },
];

const Gnb = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.25, rootMargin: "-15% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-ivory/5 bg-space-900/85 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="font-serif text-sm text-ivory/90 tracking-wide">
            달따라
          </a>
          <nav className="flex gap-4 text-[11px] text-ivory/40">
            {sections.slice(0, 5).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`transition-colors ${
                  activeId === s.id ? "text-periwinkle" : "hover:text-ivory/70"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Desktop left sidebar */}
      <aside className="pointer-events-none fixed inset-y-0 left-0 z-20 hidden md:flex items-center">
        <div className="pointer-events-auto ml-5 flex flex-col gap-1 rounded-2xl border border-ivory/[0.06] bg-space-900/75 backdrop-blur-md px-4 py-5">
          <a
            href="#top"
            className="mb-4 font-serif text-[11px] text-ivory/70 tracking-widest"
          >
            달따라
          </a>
          <nav className="flex flex-col gap-0.5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-xs transition-all duration-200 ${
                  activeId === s.id
                    ? "text-periwinkle"
                    : "text-ivory/35 hover:text-ivory/65"
                }`}
              >
                <span
                  className={`w-[5px] h-[5px] rounded-full shrink-0 transition-all duration-200 ${
                    activeId === s.id ? "bg-periwinkle" : "bg-ivory/15"
                  }`}
                />
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Gnb;
