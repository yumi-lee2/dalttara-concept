import { useEffect, useState } from "react";

const assetBase = import.meta.env.BASE_URL || "/";
const star02 = `${assetBase}assets/artifacts/star02.png`;

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
    <header className="fixed inset-x-0 top-0 z-30 border-b border-ivory/5 bg-space-900/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center">
          <img
            src={star02}
            alt="달따라"
            className="h-7 w-auto object-contain"
          />
        </a>

        {/* 모바일: 일부 항목만 */}
        <nav className="flex gap-4 text-[11px] text-ivory/40 md:hidden">
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

        {/* 데스크톱: 전체 항목 */}
        <nav className="hidden md:flex gap-6 text-[12px] text-ivory/40">
          {sections.map((s) => (
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
  );
};

export default Gnb;
