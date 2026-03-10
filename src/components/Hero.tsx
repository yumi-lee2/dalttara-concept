import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const mainIllustration = `${assetBase}assets/main.png`;

// artifacts
const star01 = `${assetBase}assets/artifacts/star01.png`;
const star02 = `${assetBase}assets/artifacts/star02.png`;
const star03 = `${assetBase}assets/artifacts/star03.png`;
const sparkle1 = `${assetBase}assets/artifacts/sparkle1.png`;
const sparkle2 = `${assetBase}assets/artifacts/sparkle2.png`;
const sparkle3 = `${assetBase}assets/artifacts/sparkle3.png`;
const sparkle6 = `${assetBase}assets/artifacts/sparkle6.png`;

const tags = ["AI 대화 기반 성장", "10년 성장 사이클", "대화 = 가치 데이터"];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-periwinkle/10 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/5 w-[320px] h-[320px] rounded-full bg-moonmint/[0.06] blur-[100px]" />
      </div>

      {/* ── Artifact decorations ── */}
      {/* star02 (yellow) – top left */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-24 left-6 w-14 md:w-16 pointer-events-none select-none"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* star01 (pink) – bottom left */}
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute bottom-24 left-8 w-10 md:w-12 pointer-events-none select-none"
        animate={{ y: [0, -7, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* star03 (blue) – top right */}
      <motion.img
        src={star03}
        alt=""
        aria-hidden
        className="absolute top-20 right-6 md:right-32 w-12 md:w-14 pointer-events-none select-none"
        animate={{ y: [0, -9, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* sparkle1 (blue sparkle) – left middle */}
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-4 w-16 md:w-20 pointer-events-none select-none"
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* sparkle2 (blue sparkle) – bottom right */}
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-20 right-6 md:right-20 w-14 md:w-18 pointer-events-none select-none"
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
      />

      {/* sparkle3 (white cross) – center-ish */}
      <motion.img
        src={sparkle3}
        alt=""
        aria-hidden
        className="absolute top-[38%] left-[46%] w-8 pointer-events-none select-none opacity-60"
        animate={{ rotate: [0, 45, 0], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* sparkle6 (gray 8-star) – large bg element top right */}
      <motion.img
        src={sparkle6}
        alt=""
        aria-hidden
        className="absolute -top-6 right-8 md:right-40 w-32 md:w-44 pointer-events-none select-none opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-20 md:pt-0">
        {/* Text side */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-sm text-periwinkle/75 leading-none">
            달의 뒷면에서 오는 이야기
          </p>

          <h1
            className="text-ivory leading-[0.92] tracking-tight text-[clamp(4rem,12vw,6.5rem)] font-black"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            달따라
          </h1>

          <p className="text-ivory/55 leading-relaxed max-w-[22rem]">
            AI 대화로 성격과 직업이 결정되는,
            <br />
            단 한 번뿐인 달생이의 성장 서사형 육성 게임.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-ivory/45 border border-ivory/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Illustration side */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25 }}
        >
          <div className="absolute w-[280px] h-[280px] rounded-full bg-periwinkle/15 blur-[70px]" />
          <motion.img
            src={mainIllustration}
            alt="달따라 메인 일러스트"
            className="relative w-full max-w-md mx-auto drop-shadow-glow"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
