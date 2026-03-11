import { useEffect, useState } from "react";

const assetBase = import.meta.env.BASE_URL || "/";
const icon = `${assetBase}assets/artifacts/icon.png`;

const sections = [
  { id: "world", label: "세계관" },
  { id: "character", label: "달생이" },
  { id: "core-gameplay", label: "플레이" },
  { id: "core-loop", label: "루프" },
  { id: "differentiation", label: "차별화" },
  { id: "target", label: "타겟" },
];

// 사운드 상태와 제어 함수를 부모(App.tsx)로부터 받기 위한 설정
interface GnbProps {
  isSoundOn: boolean;
  onToggleSound: () => void;
}

const Gnb = ({ isSoundOn, onToggleSound }: GnbProps) => {
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
            src={icon}
            alt="Logo"
            className="h-6 w-auto object-contain absolute left-2 sm:relative sm:left-4 lg:left-0"
          />
        </a>

        {/* 모바일: 가로 스크롤 메뉴 + 사운드 아이콘 */}
        <nav className="flex gap-4 text-[12px] text-ivory/40 md:hidden overflow-x-auto scrollbar-none items-center">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`transition-colors shrink-0 ${
                activeId === s.id ? "text-periwinkle" : "hover:text-ivory/70"
              }`}
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={onToggleSound}
            className="flex items-center justify-center shrink-0 text-[16px] text-ivory/60 hover:text-periwinkle transition-colors ml-1"
            aria-label={isSoundOn ? "사운드 끄기" : "사운드 켜기"}
          >
            {isSoundOn ? "🔊" : "🔇"}
          </button>
        </nav>

        {/* 데스크톱: 전체 메뉴 + 사운드 아이콘 */}
        <nav className="hidden md:flex gap-6 text-[13px] text-ivory/40 items-center">
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
          <button
            onClick={onToggleSound}
            className="flex items-center justify-center text-[18px] text-ivory/60 hover:text-periwinkle transition-colors ml-2"
            aria-label={isSoundOn ? "사운드 끄기" : "사운드 켜기"}
          >
            {isSoundOn ? "🔊" : "🔇"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
