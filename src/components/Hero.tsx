import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const mainIllustration = `${assetBase}assets/main.png`;
const titleDalttara = `${assetBase}assets/character/title_dalttara.png`;
const titleRibbon = `${assetBase}assets/character/title_ribbon.png`;
const titleStar = `${assetBase}assets/character/title_star.png`;
const titleSwirl = `${assetBase}assets/character/title_swirl.png`;
const ch01 = `${assetBase}assets/character/ch01.png`;
const ch02 = `${assetBase}assets/character/ch02.png`;
const ch03 = `${assetBase}assets/character/ch03.png`;
const bgGrid = `${assetBase}assets/character/bg_grid.png`;
const bgGlow1 = `${assetBase}assets/character/bg_glow1.png`;
const bgGlow2 = `${assetBase}assets/character/bg_glow2.png`;

// artifacts
const star01 = `${assetBase}assets/artifacts/star01.png`;
const star02 = `${assetBase}assets/artifacts/star02.png`;
const star03 = `${assetBase}assets/artifacts/star03.png`;
const sparkle1 = `${assetBase}assets/artifacts/sparkle1.png`;
const sparkle2 = `${assetBase}assets/artifacts/sparkle2.png`;

const tags = ["AI 대화 기반 성장 게임", "10년 성장 사이클", "세상에 단 하나뿐인 달생이"];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 md:pt-0 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-b after:from-transparent after:to-space-900 after:pointer-events-none after:z-10">
      {/* bg_grid – 제일 뒤 배경 */}
      <img
        src={bgGrid}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none -z-10 opacity-100"
      />
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-periwinkle/[0.05] blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/5 w-[320px] h-[320px] rounded-full bg-moonmint/[0.03] blur-[100px]" />
      </div>

      {/* ── Artifact decorations ── */}
      {/* star02 (yellow) – top left */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-10 left-[40%] w-14 md:w-16 pointer-events-none select-none opacity-30 blur-[1px] md:opacity-100 md:blur-0"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* star01 (pink) – bottom left */}
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute bottom-24 left-8 w-10 md:w-12 pointer-events-none select-none opacity-30 blur-[1px] md:opacity-100 md:blur-0"
        animate={{ y: [0, -7, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* star03 (blue) – top right */}
      <motion.img
        src={star03}
        alt=""
        aria-hidden
        className="absolute top-20 right-6 md:right-32 w-12 md:w-14 pointer-events-none select-none opacity-30 blur-[1px] md:opacity-100 md:blur-0"
        animate={{ y: [0, -9, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* sparkle1 (blue sparkle) – left middle */}
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-4 w-16 md:w-20 pointer-events-none select-none opacity-30 blur-[1px] md:opacity-100 md:blur-0"
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* sparkle2 (blue sparkle) – bottom right */}
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-20 right-6 md:right-20 w-14 md:w-18 pointer-events-none select-none opacity-30 blur-[1px] md:opacity-100 md:blur-0"
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
      />


      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-12">
        {/* Text side */}
        <div className="space-y-8">
          <motion.h1
            className="relative inline-flex flex-col items-start z-10"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.34, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ribbon – 달따라 로고 바로 위 */}
            <img
              src={titleRibbon}
              alt="달의 뒷면엔 어떤 생명체가 있을까?"
              className="w-[clamp(12rem,32vw,20rem)] pointer-events-none select-none -mb-4 md:-ml-14 -ml-[2px]"
            />

            {/* 달따라 로고 + 장식 */}
            <span className="relative inline-block -translate-y-4">
              <img
                src={titleStar}
                alt=""
                aria-hidden
                className="absolute -top-11 -right-8 w-[100px] pointer-events-none select-none"
              />
              <img
                src={titleSwirl}
                alt=""
                aria-hidden
                className="absolute -bottom-6 right-1 pointer-events-none select-none"
              />
              <img
                src={titleDalttara}
                alt="달따라"
                className="relative z-10 w-[clamp(14rem,40vw,22rem)] pointer-events-none select-none"
              />
            </span>
          </motion.h1>

          <p className="text-ivory/65 text-lg leading-relaxed max-w-[22rem]">
            오늘 건넨 한마디가 달생이의 성향과 외형으로!
            <br />
            이 세상에 같은 달생이는 단 한 명도 없어요.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] text-ivory/45 border border-ivory/25 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Scroll indicator */}
        </div>

        {/* Illustration side */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25 }}
        >
          {/* bg_glow1 – 메인 일러 뒤 좌측 글로우 */}
          <img
            src={bgGlow1}
            alt=""
            aria-hidden
            className="absolute w-[160%] max-w-none -z-9 pointer-events-none select-none -translate-x-1/3 -translate-y-1/2 top-1/4 opacity-50"
          />

          {/* bg_glow2 – 메인 일러 뒤 우측 글로우 */}
          <img
            src={bgGlow2}
            alt=""
            aria-hidden
            className="absolute w-[160%] max-w-none -z-9 pointer-events-none select-none opacity-50 translate-y-1/2 translate-x-1/4"
          />

          {/* 메인 일러스트 (배경) */}
          <motion.img
            src={mainIllustration}
            alt="달따라 메인 일러스트"
            className="relative w-full max-w-[500px] mx-auto drop-shadow-glow"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 캐릭터들 (메인 일러 앞) */}
          {/* ch01 – 왼쪽 하단 */}
          <motion.img
            src={ch01}
            alt="달생이 ch01"
            className="absolute right-[12%] translate-x-1/2 bottom-1/3 -translate-y-1/2 w-32 md:w-36 z-10 drop-shadow-glow pointer-events-none select-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />

          {/* ch02 – 중앙 하단 */}
          <motion.img
            src={ch02}
            alt="달생이 ch02"
            className="absolute left-[5%] bottom-1/4 -translate-y-1/2 w-32 md:w-36 z-10 drop-shadow-glow pointer-events-none select-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />

          {/* ch03 – 오른쪽 하단 */}
          <motion.img
            src={ch03}
            alt="달생이 ch03"
            className="absolute left-[45%] -translate-x-1/2 bottom-[62%] w-24 md:w-28 z-10 drop-shadow-glow pointer-events-none select-none"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
