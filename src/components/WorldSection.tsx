import { motion } from "framer-motion";

const WorldSection = () => {
  return (
    <section
      id="world"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-gradient-to-b from-space-900 to-space-800"
    >
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-sky-300"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          World
        </motion.p>

        <motion.h2
          className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          달의 뒷면,
          <br className="hidden md:block" />
          지구를 동경하는 작은 생명체들의 세계
        </motion.h2>

        <motion.div
          className="mt-6 space-y-4 text-slate-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            달의 뒷면에는 태어날 때부터{" "}
            <span className="font-semibold text-sky-200">
              지구를 동경하는 생명체들
            </span>
            이 살고 있습니다.
          </p>

          <p>
            그들이 언젠가 지구에 발을 디디기 위해 충족해야 할 조건은 단 하나,{" "}
            <span className="font-semibold text-sky-200">직업을 갖는 것</span>
            입니다.
          </p>

          <p>
            이를 위해 달의 뒷면에는 특별한{" "}
            <span className="font-semibold text-sky-200">육성 기관</span>
            이 세워져 있습니다. 이곳에서 달생이들은 플레이어와의 대화를 통해
            배우고 성장하며, 자신만의 정체성을 만들어 갑니다.
          </p>

          <p>
            그리고 마침내 직업을 얻은 달생이는, 오래 꿈꿔온 지구를 향해 떠납니다.
            그 순간이 바로 한 달생이의 이야기가 완성되는{" "}
            <span className="font-semibold text-sky-200">엔딩</span>입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldSection;

