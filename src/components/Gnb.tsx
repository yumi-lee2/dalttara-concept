import { useEffect, useState } from "react";

const assetBase = import.meta.env.BASE_URL || "/";
const star02 = `${assetBase}assets/artifacts/star02.png`;

const sections = [
  { id: "world", label: "세계관" },
  { id: "character", label: "달생이" },
  { id: "core-gameplay", label: "플레이" },
  { id: "core-loop", label: "루프" },
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
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:pr-5 md:px-0 py-3.5">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={star02}
            alt=""
            aria-hidden
            className="h-6 w-auto object-contain absolute left-2 sm:relative sm:left-4 lg:left-0"
          />
        </a>

        {/* 모바일: 전체 항목 가로 스크롤 */}
        <nav className="flex gap-3 text-[12px] text-ivory/40 md:hidden overflow-x-auto scrollbar-none">
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

        {/* 데스크톱: 전체 항목 */}
        <nav className="hidden md:flex gap-6 text-[13px] text-ivory/40">
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
