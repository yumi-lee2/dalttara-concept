import { motion } from "framer-motion";

const CoreGameplaySection = () => {
  return (
    <section
      id="core-gameplay"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-space-900"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Core Gameplay
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            매일의 대화로 쌓이는
            <br />
            달생이와의 하루
          </h2>
          <p className="text-slate-200 leading-relaxed">
            플레이어는 달생이와 매일 대화를 나누며 성장 과정을 함께합니다. 대화는
            오늘 있었던 일, 고민, 사소한 감정까지 모두 담고 있습니다.
          </p>
          <p className="text-slate-200 leading-relaxed">
            이 대화는 단순한 채팅이 아니라, 달생이의 성향과 미래를 결정하는 중요한
            선택이 됩니다. 같은 말도, 누구에게 어떤 순간에 건네느냐에 따라 전혀
            다른 이야기가 펼쳐집니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid gap-4"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">대화</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              플레이어가 건네는 한마디, 질문 하나가 오늘의 달생이를 만듭니다. 대화는
              감정과 선택의 기록으로 남습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">성향 형성</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              축적된 대화는 달생이의 성향을 바꾸어 갑니다. 어떤 말을 더 자주
              듣느냐에 따라 서로 다른 가치관이 형성됩니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">이벤트와 성장</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              형성된 성향에 따라 만나는 사건과 선택지가 달라집니다. 그 속에서 달생이는
              직업과 지구로 가는 길을 찾아 나갑니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreGameplaySection;

