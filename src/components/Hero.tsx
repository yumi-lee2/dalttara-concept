import { motion } from "framer-motion";
import mainIllustration from "/public/assets/메인일러.png";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="show"
          variants={textVariants}
        >
          <p className="text-xs md:text-sm tracking-[0.25em] text-sky-300 uppercase">
            달의 뒷면, 지구를 동경하는 작은 친구들
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            달따라
          </h1>
          <p className="text-base md:text-lg text-slate-200">
            AI 대화를 통해 자라나는, 단 한 번뿐인 달생이의 이야기.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="show"
          variants={imageVariants}
        >
          <motion.img
            src={mainIllustration}
            alt="달따라 메인 일러스트"
            className="w-full max-w-xl mx-auto drop-shadow-glow"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          />
          <motion.div
            className="absolute -top-6 -right-4 w-6 h-6 rounded-full bg-yellow-300 shadow-glow"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
