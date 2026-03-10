import { motion } from "framer-motion";

const DifferentiationSection = () => {
  return (
    <section
      id="differentiation"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-space-900"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Key Differentiation
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            다른 육성 게임과의 차이
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">
              대화가 만드는 캐릭터
            </p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              확률이 아닌 플레이어의 말 한마디가 캐릭터를 만듭니다. 어떤 선택지를
              골랐는지가 아니라, 어떤 말을 건넸는지가 달생이의 성향을 결정합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">
              감정 기반 서사형 육성 게임
            </p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              다마고치처럼 돌보지만, 스토리와 감정이 축적되는 서사형 육성 게임입니다.
              매일의 대화가 이어져 하나의 긴 이야기를 만들어 냅니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-200">
              대화가 자산이 되는 구조
            </p>
            <p className="mt-2 text-sm text-slate-100 leading-relaxed">
              플레이어가 달생이와 나눈 대화는 성장 기록이자 가치 데이터가 됩니다.
              필요하다면 이 데이터를 디지털 자산으로 확장해 보존할 수 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;

