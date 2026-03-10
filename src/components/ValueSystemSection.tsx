import { motion } from "framer-motion";

const ValueSystemSection = () => {
  return (
    <section
      id="value-system"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-space-900"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Core System
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            대화가 &apos;가치 데이터&apos;가 되는 구조
          </h2>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            달따라에서 대화는 단순한 상호작용이 아니라 가치 생산 활동입니다. 플레이어와
            달생이가 함께 만든 이야기가 그대로 데이터가 됩니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">대화 기록</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              플레이어가 달생이와 나눈 대화는 감정, 선택, 관계의 기록으로 축적됩니다.
              어떤 이야기들이 오갔는지가 그대로 남습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">가치 데이터</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              이 기록은 단순한 포인트가 아니라, 플레이어와 달생이가 함께 만든 고유한
              가치 데이터입니다. 성장과 관계의 궤적이 수치로 환산됩니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">디지털 자산으로 확장</p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              이 데이터는 NFT 형태로 확장 가능하며, 달생이의 이야기와 성장 기록을
              디지털 자산으로 보존할 수 있습니다.
            </p>
          </div>
        </motion.div>

        <p className="text-xs md:text-sm text-slate-300 max-w-3xl">
          우리는 플레이 시간이나 과금 이력이 아니라, 플레이어와 캐릭터가 함께 만든
          이야기 그 자체에 가치를 부여합니다.
        </p>
      </div>
    </section>
  );
};

export default ValueSystemSection;

