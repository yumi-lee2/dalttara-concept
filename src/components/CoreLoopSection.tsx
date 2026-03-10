import { motion } from "framer-motion";

const steps = [
  "알 선택",
  "달생이 부화",
  "대화 및 상호작용",
  "성향 형성",
  "이벤트 발생",
  "성장 및 가치 축적",
  "직업 획득",
  "지구로 떠남",
  "새로운 달생이 시작"
];

const CoreLoopSection = () => {
  return (
    <section
      id="core-loop"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-gradient-to-b from-space-900 to-space-800"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Core Loop
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            한 달생이의 이야기 루프
          </h2>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl">
            달따라의 플레이는 하나의 알에서 시작해, 지구로 떠나는 엔딩을 거쳐 새로운
            알로 이어지는 순환 구조를 가지고 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative overflow-x-auto"
        >
          <div className="min-w-max">
            <div className="flex items-center gap-4 md:gap-6">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 border border-sky-300/60 text-[11px] text-sky-100">
                      {index + 1}
                    </div>
                    <p className="whitespace-nowrap text-xs md:text-sm text-slate-100">
                      {step}
                    </p>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="h-px w-10 md:w-16 bg-gradient-to-r from-sky-300/40 to-sky-300/0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="text-xs md:text-sm text-slate-300 max-w-3xl">
          한 달생이의 이야기가 지구에서 끝나면, 플레이어는 새로운 알을 만나 또 다른
          성향과 이야기를 가진 달생이를 키울 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default CoreLoopSection;

