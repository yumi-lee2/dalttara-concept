import { motion } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";
const star02 = `${assetBase}assets/artifacts/star02.png`;
const sparkle5 = `${assetBase}assets/artifacts/sparkle5.png`;
const sparkle7 = `${assetBase}assets/artifacts/sparkle7.png`;

const worldPoints = [
  {
    title: "지구를 꿈꾸는 작은 세계",
  },
  {
    title: "단 하나의 조건, 직업",
  },
  {
    title: "대화로 성장하는 육성 기관",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 as const },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const WorldSection = () => {
  return (
    <section id="world" className="px-6 md:px-10 py-28 relative overflow-hidden">
      {/* Decorative section number */}
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        01
      </span>

      {/* Artifacts */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-16 right-10 md:right-48 w-12 md:w-16 pointer-events-none select-none"
        animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={sparkle5}
        alt=""
        aria-hidden
        className="absolute bottom-16 left-6 w-10 pointer-events-none select-none opacity-55"
        animate={{ rotate: [0, 45, 0], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img
        src={sparkle7}
        alt=""
        aria-hidden
        className="absolute bottom-24 right-8 w-16 md:w-20 pointer-events-none select-none opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-[11px] tracking-[0.3em] uppercase text-periwinkle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          World
        </motion.p>

        <motion.h2
          className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight"
          {...fadeUp(0.08)}
        >
          달의 뒷면,
          <br />
          지구를 동경하는
          <br />
          작은 생명체들의 세계
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-12 md:gap-20">
          {/* Left: prose */}
          <motion.div className="space-y-5 md:col-span-2" {...fadeUp(0.18)}>
            <p className="text-ivory/70 leading-relaxed text-base md:text-lg">
              달의 뒷면에는 태어날 때부터{" "}
              <span className="text-ivory font-medium">지구를 동경하는 생명체들</span>이 살고
              있습니다.
            </p>
            <p className="text-ivory/55 leading-relaxed">
              그들이 지구에 가기 위해 충족해야 할 단 하나의 조건은{" "}
              <span className="text-moonmint">직업을 갖는 것</span>입니다.
            </p>
            <p className="text-ivory/55 leading-relaxed">
              달의 뒷면에는 이를 돕기 위한 육성 기관이 존재하며, 달생이들은 대화를 통해 배우고
              성장하며 자신만의 정체성을 만들어 갑니다. 직업을 얻은 달생이는 지구로 향합니다.
            </p>
          </motion.div>

          {/* Right: connected bullet points */}
          <motion.div className="space-y-0" {...fadeUp(0.28)}>
            {worldPoints.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center pt-[6px] shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-periwinkle/50" />
                  {i < worldPoints.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem] bg-periwinkle/12 mt-2" />
                  )}
                </div>
                <div className={i < worldPoints.length - 1 ? "pb-7" : ""}>
                  <p className="text-sm font-medium text-ivory/85">{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
