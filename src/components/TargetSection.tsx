import { motion } from "framer-motion";

const TargetSection = () => {
  return (
    <section
      id="target"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-gradient-to-b from-space-900 to-black"
    >
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Target Audience
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            이런 플레이어를 위해 만들었습니다
          </h2>
          <ul className="mt-2 space-y-2 text-sm md:text-base text-slate-200 text-left md:text-center md:inline-block">
            <li>· 감정적 교감을 중심으로 한 육성 게임을 좋아하는 유저</li>
            <li>· 자신만의 캐릭터를 만들고 싶은 플레이어</li>
            <li>· 수집과 이야기를 동시에 즐기는 유저</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-50">
            “저 달생이… 어디서 키워?”
          </p>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            언젠가 누군가에게 이렇게 묻고 싶은, 나만의 달생이를 키우는 경험.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetSection;

