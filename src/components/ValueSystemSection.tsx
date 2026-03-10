import { motion } from "framer-motion";

const star02 = "/assets/artifacts/star02.png";
const sparkle2 = "/assets/artifacts/sparkle2.png";
const sparkle6 = "/assets/artifacts/sparkle6.png";

const ValueSystemSection = () => {
  return (
    <section id="value-system" className="px-6 md:px-10 py-28 relative overflow-hidden">
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        05
      </span>

      {/* Artifacts */}
      <motion.img
        src={star02}
        alt=""
        aria-hidden
        className="absolute top-14 left-8 w-12 pointer-events-none select-none"
        animate={{ y: [0, -9, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-12 right-6 w-14 pointer-events-none select-none"
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.88, 1.08, 0.88] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src={sparkle6}
        alt=""
        aria-hidden
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 md:w-40 pointer-events-none select-none opacity-[0.07]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="space-y-4 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">Core System</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            대화가 &lsquo;가치 데이터&rsquo;로
            <br />
            쌓이는 구조
          </h2>
          <p className="text-ivory/60 leading-relaxed">
            달따라에서 대화는 단순한 상호작용이 아니라 가치 생산 활동입니다. 플레이어와 달생이가
            함께 만든 이야기가 그대로 데이터가 됩니다.
          </p>
        </motion.div>

        {/* 3-column equal cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-6 rounded-2xl border border-periwinkle/20 bg-periwinkle/[0.06] flex flex-col gap-4">
            <span className="text-4xl font-bold text-periwinkle/20 font-sans leading-none">01</span>
            <div>
              <p className="text-sm font-medium text-periwinkle/80">대화 기록</p>
              <p className="mt-2 text-sm text-ivory/55 leading-relaxed">
                플레이어가 달생이와 나눈 대화는 감정, 선택, 관계의 기록으로 축적됩니다. 어떤
                이야기들이 오갔는지가 그대로 남습니다.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-ivory/[0.07] bg-ivory/[0.02] flex flex-col gap-4">
            <span className="text-4xl font-bold text-moonmint/20 font-sans leading-none">02</span>
            <div>
              <p className="text-sm font-medium text-ivory/80">가치 데이터</p>
              <p className="mt-2 text-sm text-ivory/50 leading-relaxed">
                이 기록은 단순한 포인트가 아니라, 플레이어와 달생이가 함께 만든 고유한 가치
                데이터입니다. 플레이 시간보다 &lsquo;이야기 자체&rsquo;에 가치를 부여합니다.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-ivory/[0.07] bg-ivory/[0.02] flex flex-col gap-4">
            <span className="text-4xl font-bold text-star/20 font-sans leading-none">03</span>
            <div>
              <p className="text-sm font-medium text-ivory/80">디지털 자산으로 확장</p>
              <p className="mt-2 text-sm text-ivory/50 leading-relaxed">
                이 데이터는 NFT 형태로 확장 가능하며, 달생이의 이야기와 성장 기록을 디지털
                자산으로 보존할 수 있습니다.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-xs md:text-sm text-ivory/35 max-w-3xl">
          우리는 플레이 시간이나 과금 이력이 아니라, 플레이어와 캐릭터가 함께 만든 이야기 그 자체에
          가치를 부여합니다.
        </p>
      </div>
    </section>
  );
};

export default ValueSystemSection;
