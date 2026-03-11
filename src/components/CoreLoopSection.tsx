import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const star01 = `${assetBase}assets/artifacts/star01.png`;
const star03 = `${assetBase}assets/artifacts/star03.png`;
const sparkle3 = `${assetBase}assets/artifacts/sparkle3.png`;

const stages = [
  {
    label: "만남",
    sub: "알 선택 · 달생이 부화",
    desc: "처음 만나는 순간, 아직 아무것도 결정되지 않은 달생이가 당신 앞에 나타납니다.",
    color: "border-moonmint/30 bg-moonmint/[0.06]",
    labelColor: "text-moonmint/80",
    numColor: "text-moonmint/20",
  },
  {
    label: "성장",
    sub: "대화 · 성향 형성 · 이벤트 · 직업 획득",
    desc: "당신이 건네는 말 한마디가 달생이의 오늘을 만듭니다.",
    color: "border-periwinkle/30 bg-periwinkle/[0.06]",
    labelColor: "text-periwinkle/80",
    numColor: "text-periwinkle/20",
  },
  {
    label: "이별과 새 시작",
    sub: "지구로 떠남 · 새로운 달생이",
    desc: "10살이 되면, 달생이는 지구로 떠납니다. 그리고 새로운 알이 당신을 기다립니다.",
    color: "border-star/30 bg-star/[0.04]",
    labelColor: "text-star/80",
    numColor: "text-star/20",
  },
];

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
          className="space-y-4 max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">Core Loop</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            만남, 성장 그리고 이별
          </h2>
          <p className="text-ivory/60 leading-relaxed">
            달생이와의 시간은 총 3개의 장으로 이루어져 있어요.
            결국엔 이별이 오지만, 이후엔 새로운 만남이 찾아옵니다.
          </p>
        </motion.div>

        {/* 3-stage cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${stage.color}`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-lg font-serif font-medium ${stage.labelColor}`}>
                  {stage.label}
                </span>
                <span className={`text-4xl font-bold font-sans leading-none ${stage.numColor}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[11px] tracking-wide text-ivory/35 uppercase">{stage.sub}</p>
              <p className="text-sm text-ivory/60 leading-relaxed whitespace-pre-line">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreLoopSection;
