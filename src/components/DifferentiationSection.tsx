import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const star01 = `${assetBase}assets/artifacts/star01.png`;
const sparkle1 = `${assetBase}assets/artifacts/sparkle1.png`;
const sparkle4 = `${assetBase}assets/artifacts/sparkle4.png`;

const diffs = [
  {
    number: "01",
    title: "대화가 만드는 캐릭터",
    bold: "확률이 아닌\n플레이어의 말 한마디",
    desc: "어떤 선택지를 고르기 보단 어떤 말을 건넸는지에 따라 달생이의 성향이 결정돼요.",
    numColor: "text-white/10",
  },
  {
    number: "02",
    title: "대화가 재화가 되는 구조",
    bold: "이야기 그 자체가\n소유하고 거래할 수 있는 자산",
    desc: "대화 기록이 곧 고유한 NFT, 플레이어가 만든 이야기 자체가 소유하고 거래할 수 있는 자산이 됩니다.",
    numColor: "text-white/10",
  },
];

const DifferentiationSection = () => {
  return (
    <section
      id="differentiation"
      className="px-6 md:px-10 py-28 relative overflow-hidden bg-space-800/40"
    >
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        05
      </span>

      {/* Artifacts */}
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute top-14 left-6 w-11 pointer-events-none select-none"
        animate={{ y: [0, -8, 0], rotate: [0, -7, 0] }}
        transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute bottom-10 right-4 w-14 pointer-events-none select-none"
        animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.9, 1.07, 0.9] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.img
        src={sparkle4}
        alt=""
        aria-hidden
        className="absolute top-1/2 right-8 w-6 pointer-events-none select-none opacity-40"
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="space-y-4 max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">
            Key Differentiation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            '달따라'만이 할 수 있는 것
          </h2>
          <p className="text-ivory/55 leading-relaxed">
            단순히 수치 성장, 확률 뽑기를 하는 것이 아닌 플레이어와의 대화가 직접 캐릭터를
            만들어요.
          </p>
        </motion.div>

        {/* Magazine-style row layout */}
        <div className="space-y-0">
          {diffs.map((d, i) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-5 md:gap-14 py-8 border-b border-ivory/[0.06] last:border-0"
            >
              <div className="shrink-0 md:w-44">
                <span
                  className={`text-5xl md:text-6xl font-bold ${d.numColor} font-sans leading-none`}
                >
                  {d.number}
                </span>
                <p className="mt-2 text-xs font-medium text-ivory/55 tracking-wide">{d.title}</p>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-xl md:text-2xl text-ivory leading-snug whitespace-pre-line">
                  {d.bold}
                </p>
                <p className="text-sm text-ivory/50 leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DifferentiationSection;
