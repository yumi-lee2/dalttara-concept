import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const star01 = `${assetBase}assets/artifacts/star01.png`;
const star02 = `${assetBase}assets/artifacts/star02.png`;
const star03 = `${assetBase}assets/artifacts/star03.png`;
const sparkle1 = `${assetBase}assets/artifacts/sparkle1.png`;
const sparkle2 = `${assetBase}assets/artifacts/sparkle2.png`;
const sparkle3 = `${assetBase}assets/artifacts/sparkle3.png`;
const sparkle5 = `${assetBase}assets/artifacts/sparkle5.png`;
const sparkle6 = `${assetBase}assets/artifacts/sparkle6.png`;

const targets = [
  "감정적 교감을 중심으로 한 육성 게임을 좋아하는 유저",
  "자신만의 캐릭터를 만들고 싶은 플레이어",
  "수집과 이야기를 동시에 즐기는 유저",
];

const TargetSection = () => {
  return (
    <section
      id="target"
      className="px-6 md:px-10 py-28 relative overflow-hidden"
    >
      {/* Ambient center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[480px] h-[480px] rounded-full bg-periwinkle/[0.06] blur-[130px]" />
      </div>

      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        07
      </span>

      {/* Artifacts – scattered around the closing quote */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-16 left-6 md:left-16 w-14 md:w-16 pointer-events-none select-none opacity-20 md:opacity-90"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute top-20 right-8 md:right-20 w-12 pointer-events-none select-none opacity-20 md:opacity-80"
        animate={{ y: [0, -8, 0], rotate: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.img
        src={star03}
        alt=""
        aria-hidden
        className="absolute bottom-28 left-8 md:left-20 w-10 md:w-12 pointer-events-none select-none opacity-20 md:opacity-80"
        animate={{ y: [0, -7, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute bottom-20 right-10 md:right-24 w-10 pointer-events-none select-none opacity-20 md:opacity-80"
        animate={{ y: [0, -9, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      {/* Blue sparkles */}
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute top-1/3 left-4 md:left-12 w-16 md:w-20 pointer-events-none select-none"
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.88, 1.06, 0.88] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-1/3 right-4 md:right-12 w-14 md:w-18 pointer-events-none select-none"
        animate={{ opacity: [0.35, 0.85, 0.35], scale: [0.85, 1.08, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />

      {/* White cross sparkles */}
      <motion.img
        src={sparkle3}
        alt=""
        aria-hidden
        className="absolute top-[45%] left-[10%] w-7 pointer-events-none select-none opacity-55"
        animate={{ rotate: [0, 45, 0], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.img
        src={sparkle5}
        alt=""
        aria-hidden
        className="absolute top-[55%] right-[12%] w-7 pointer-events-none select-none opacity-50"
        animate={{ rotate: [0, -45, 0], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />

      {/* Large background star */}
      <motion.img
        src={sparkle6}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] pointer-events-none select-none opacity-[0.04]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-3xl mx-auto text-center space-y-20 relative">
        {/* Audience */}
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">
            Target Audience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-tight">
            이런 플레이어라면 딱이에요!
          </h2>
          <div className="flex flex-col items-center gap-3">
            {targets.map((t) => (
              <div key={t} className="w-full max-w-sm rounded-xl bg-white/[0.04] backdrop-blur-md py-3 px-4 text-center text-ivory/55 text-sm md:text-base">
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing quote */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory leading-snug">
            "저 달생이… 어디서 키워?"
          </p>
          <p className="text-ivory/45 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            언젠가 모두가 이렇게 질문하고 있을거에요.
            <br />
            지금 달따라를 경험해보세요.
          </p>
          <motion.div className="pt-10 flex justify-center">
            <motion.img
              src={star02}
              alt=""
              aria-hidden
              className="w-10 md:w-12 object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetSection;
