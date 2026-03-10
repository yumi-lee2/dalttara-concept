import { motion } from "framer-motion";

const star01 = "/assets/artifacts/star01.png";
const star03 = "/assets/artifacts/star03.png";
const sparkle3 = "/assets/artifacts/sparkle3.png";

const steps = [
  "알 선택",
  "달생이 부화",
  "대화 및 상호작용",
  "성향 형성",
  "이벤트 발생",
  "성장 및 가치 축적",
  "직업 획득",
  "지구로 떠남",
  "새로운 달생이 시작",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

const CoreLoopSection = () => {
  return (
    <section
      id="core-loop"
      className="px-6 md:px-10 py-28 relative overflow-hidden bg-space-800/40"
    >
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        04
      </span>

      {/* Artifacts */}
      <motion.img
        src={star01} alt="" aria-hidden
        className="absolute top-12 left-6 w-11 pointer-events-none select-none"
        animate={{ y: [0, -8, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={star03} alt="" aria-hidden
        className="absolute bottom-16 right-6 md:right-44 w-10 pointer-events-none select-none"
        animate={{ y: [0, -7, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
      <motion.img
        src={sparkle3} alt="" aria-hidden
        className="absolute top-2/3 right-4 w-8 pointer-events-none select-none opacity-50"
        animate={{ rotate: [0, 45, 0], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="space-y-4 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">Core Loop</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            한 달생이의 이야기 루프
          </h2>
          <p className="text-ivory/60 leading-relaxed">
            달따라의 플레이는 하나의 알에서 시작해, 지구로 떠나는 엔딩을 거쳐 새로운 알로 이어지는
            반복 가능한 이야기 구조를 가지고 있습니다.
          </p>
        </motion.div>

        {/* Inline flow */}
        <motion.div
          className="flex flex-wrap items-center gap-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, i) => (
            <motion.div key={step} variants={itemVariants} className="flex items-center">
              {/* Step chip */}
              <div className={`flex items-center gap-2 px-3.5 py-2 rounded-full border transition-colors ${
                i === 0
                  ? "border-periwinkle/40 bg-periwinkle/10"
                  : "border-ivory/[0.08] bg-ivory/[0.02]"
              }`}>
                <span className={`text-[10px] tabular-nums font-sans leading-none ${
                  i === 0 ? "text-periwinkle/80" : "text-ivory/30"
                }`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm leading-none ${
                  i === 0 ? "text-periwinkle/90" : "text-ivory/65"
                }`}>
                  {step}
                </span>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <span className="text-ivory/15 text-xs mx-2 shrink-0">→</span>
              )}
            </motion.div>
          ))}

        </motion.div>

        <p className="text-xs md:text-sm text-ivory/35 max-w-3xl">
          한 달생이의 이야기가 지구에서 끝나면, 플레이어는 새로운 알을 만나 전혀 다른 성향과 이야기를
          가진 달생이를 키우며 루프를 다시 시작합니다.
        </p>
      </div>
    </section>
  );
};

export default CoreLoopSection;
