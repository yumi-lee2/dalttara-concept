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

const textVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 md:pt-0 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-b after:from-transparent after:to-space-900 after:pointer-events-none after:z-10">
      {/* bg_grid – 제일 뒤 배경 */}
      <img
        src={bgGrid}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none -z-9 opacity-100"
      />

      {/* ── 스포트라이트 빔 ── */}
      {/* 빔 중심부 – 더 밝은 코어 */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          left: "42%",
          top: "50%",
          width: "45vw",
          height: "40vh",
          transformOrigin: "0% 50%",
          transform: "translateY(-50%)",
          background:
            "conic-gradient(from -10deg at 0% 50%, transparent 0deg, rgba(255,248,210,0.05) 14deg, rgba(255,244,190,0.09) 18deg, rgba(255,248,210,0.05) 22deg, transparent 32deg)",
          filter: "blur(8px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-periwinkle/[0.05] blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/5 w-[320px] h-[320px] rounded-full bg-moonmint/[0.03] blur-[100px]" />
      </div>

      {/* ── Artifact decorations ── */}
      {/* star02 (yellow) – top center */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-10 left-[40%] w-14 md:w-16 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [null, 1], scale: [null, 1], y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.2 },
          scale: { duration: 0.6, delay: 1.2 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
        }}
      />

      {/* star01 (pink) – bottom left */}
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute bottom-24 left-8 w-10 md:w-12 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [null, 1], scale: [null, 1], y: [0, -7, 0], rotate: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.5 },
          scale: { duration: 0.6, delay: 1.5 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
          rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
        }}
      />

      {/* star03 (blue) – top right */}
      <motion.img
        src={star03}
        alt=""
        aria-hidden
        className="absolute top-20 right-6 md:right-32 w-12 md:w-14 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [null, 1], scale: [null, 1], y: [0, -9, 0], rotate: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.0 },
          scale: { duration: 0.6, delay: 1.0 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
          rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
        }}
      />

      {/* sparkle1 – left middle */}
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-4 w-16 md:w-20 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      {/* sparkle2 – bottom right */}
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-20 right-6 md:right-20 w-14 md:w-18 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.4, 0.9, 0.4], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-12">
        {/* ── Text side – 입장 애니메이션 ── */}
        <div className="space-y-8">
          <motion.h1
            className="relative inline-flex flex-col items-start z-10"
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ribbon */}
            <img
              src={titleRibbon}
              alt="달의 뒷면엔 어떤 생명체가 있을까?"
              className="w-[clamp(12rem,32vw,20rem)] pointer-events-none select-none -mb-4 md:-ml-14 -ml-[2px]"
            />

            {/* 달따라 로고 + 장식 */}
            <span className="relative inline-block -translate-y-4">
              <motion.img
                src={titleStar}
                alt=""
                aria-hidden
                className="absolute -top-11 -right-8 w-[100px] pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.9, type: "spring", stiffness: 200 }}
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

          <motion.p
            className="text-ivory/65 text-lg leading-relaxed max-w-[22rem]"
            custom={0.45}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            오늘 건넨 한마디가 달생이의 성향과 외형으로!
            <br />
            이 세상에 같은 달생이는 단 한 명도 없어요.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 pt-1"
            custom={0.65}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] text-ivory/45 border border-ivory/25 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Illustration side – 순차 입장 애니메이션 ── */}
        <div className="relative flex items-center justify-center">
          {/* bg_glow1 */}
          <motion.img
            src={bgGlow1}
            alt=""
            aria-hidden
            className="absolute w-[160%] max-w-none -z-9 pointer-events-none select-none -translate-x-1/3 -translate-y-1/2 top-1/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
          />
          {/* bg_glow2 */}
          <motion.img
            src={bgGlow2}
            alt=""
            aria-hidden
            className="absolute w-[160%] max-w-none -z-9 pointer-events-none select-none translate-y-1/2 translate-x-1/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
          />

          {/* 일러스트 + 캐릭터 컨테이너 */}
          <div className="relative w-full max-w-[500px] mx-auto">
            {/* 메인 일러스트 – 외부: 입장, 내부: 루프 */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.img
                src={mainIllustration}
                alt="달따라 메인 일러스트"
                className="w-full drop-shadow-glow"
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              />
            </motion.div>

            {/* ch01 – 외부: 입장(오른쪽), 내부: 루프 */}
            <motion.div
              className="absolute right-[12%] translate-x-1/2 bottom-1/3 -translate-y-1/2 w-[26%] z-10 pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.0, type: "spring", stiffness: 180 }}
            >
              <motion.img
                src={ch01}
                alt="달생이 ch01"
                className="w-full drop-shadow-glow"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>

            {/* ch02 – 외부: 입장(왼쪽), 내부: 루프 */}
            <motion.div
              className="absolute left-[5%] bottom-1/4 -translate-y-1/2 w-[26%] z-10 pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.15, type: "spring", stiffness: 180 }}
            >
              <motion.img
                src={ch02}
                alt="달생이 ch02"
                className="w-full drop-shadow-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.65 }}
              />
            </motion.div>

            {/* ch03 – 외부: 입장(중앙 상단), 내부: 루프 */}
            <motion.div
              className="absolute left-[45%] -translate-x-1/2 bottom-[62%] w-[21%] z-10 pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.6, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.3, type: "spring", stiffness: 180 }}
            >
              <motion.img
                src={ch03}
                alt="달생이 ch03"
                className="w-full drop-shadow-glow"
                animate={{ y: [0, -4, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.85 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
