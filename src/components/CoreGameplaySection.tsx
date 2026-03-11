import { motion } from "framer-motion";

const star02 = "/assets/artifacts/star02.png";
const sparkle1 = "/assets/artifacts/sparkle1.png";
const sparkle5 = "/assets/artifacts/sparkle5.png";

const aspects = [
  {
    emoji: "💬",
    title: "대화",
    desc: "플레이어가 건네는 한마디, 질문 하나가 오늘의 달생이를 만들어요. 대화는 감정과 선택의 짧은 로그로 축적됩니다.",
  },
  {
    emoji: "🌱",
    title: "성향 형성",
    desc: "축적된 대화는 달생이의 성향을 조금씩 바꿔가요. 어떤 말을 더 자주 듣는지에 따라 각기 다른 가치관이 형성됩니다.",
  },
  {
    emoji: "✨",
    title: "사건과 성장",
    desc: "형성된 성향에 따라 만나는 사건과 선택지가 달라져요. 그 속에서 달생이는 직업을 부여받고 지구로 가는 길을 찾아갑니다.",
  },
];

const flowSteps = ["대화", "성향 형성", "이벤트", "성장", "직업 & 지구"];

const CoreGameplaySection = () => {
  return (
    <section id="core-gameplay" className="px-6 md:px-10 py-28 relative overflow-hidden">
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        03
      </span>

      {/* Artifacts */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-12 left-6 w-11 pointer-events-none select-none opacity-60"
        animate={{ y: [0, -9, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={sparkle1}
        alt=""
        aria-hidden
        className="absolute bottom-14 left-4 w-16 pointer-events-none select-none"
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.img
        src={sparkle5}
        alt=""
        aria-hidden
        className="absolute top-1/3 right-4 w-8 pointer-events-none select-none opacity-50"
        animate={{ rotate: [0, -45, 0], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: editorial text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">
              Core Gameplay
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
              매일 대화로 만들어가는
              <br />
              달생이와의 일상
            </h2>
            <p className="text-ivory/60 leading-relaxed">
              플레이어는 달생이와 매일 대화를 나누며 성장 과정을 함께합니다.
            </p>
            <p className="text-ivory/55 leading-relaxed">
              오늘 있었던 일, 고민, 사소한 감정까지 모두 기록이 돼요. 단순한 채팅을 넘어
              달생이의 성향과 미래까지 바꿀 수 있어요.
            </p>

            {/* Flow indicator */}
            <div className="flex flex-wrap items-center gap-1.5 text-sm pt-2">
              {flowSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-1.5">
                  <span className={i === 0 ? "text-periwinkle" : "text-ivory/45"}>{step}</span>
                  {i < flowSteps.length - 1 && (
                    <span className="text-ivory/20 text-xs">→</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: aspect cards */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {aspects.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 p-5 rounded-2xl border border-ivory/[0.07] bg-ivory/[0.02] hover:bg-ivory/[0.04] transition-colors"
              >
                <span className="text-2xl mt-0.5 shrink-0 leading-none">{a.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-periwinkle/80">{a.title}</p>
                  <p className="mt-1.5 text-sm text-ivory/55 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreGameplaySection;
