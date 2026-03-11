import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const assetBase = import.meta.env.BASE_URL || "/";

const star01 = `${assetBase}assets/artifacts/star01.png`;
const star03 = `${assetBase}assets/artifacts/star03.png`;
const sparkle2 = `${assetBase}assets/artifacts/sparkle2.png`;
const sparkle3 = `${assetBase}assets/artifacts/sparkle3.png`;

const popo1 = `${assetBase}assets/character/popo_1.png`;
const popo2 = `${assetBase}assets/character/popo_2.png`;
const popo3 = `${assetBase}assets/character/popo_3.png`;
const popo4 = `${assetBase}assets/character/popo_4.png`;
const huhu1 = `${assetBase}assets/character/huhu_1.png`;
const huhu2 = `${assetBase}assets/character/huhu_2.png`;
const huhu3 = `${assetBase}assets/character/huhu_3.png`;
const huhu4 = `${assetBase}assets/character/huhu_4.png`;
const bogle1 = `${assetBase}assets/character/bogle_1.png`;
const bogle2 = `${assetBase}assets/character/bogle_2.png`;
const bogle3 = `${assetBase}assets/character/bogle_3.png`;
const bogle4 = `${assetBase}assets/character/bogle_4.png`;

const traits = [
  "대화할수록 고유한 성향 형성",
  "성향에 따라 생김새와 말투에 변화",
  "나이가 들수록 더욱 뚜렷한 자아로 성장",
];

type RaceKey = "포포" | "후후" | "보글";

const raceCards: {
  key: RaceKey;
  group: string;
  name: string;
  desc: string;
  preview: string;
}[] = [
  { key: "포포", group: "숲의 종족", name: "포포", desc: "엉뚱하고 호기심이 많음", preview: popo4 },
  { key: "후후", group: "구름 종족", name: "후후", desc: "느긋하고 나른함", preview: huhu4 },
  { key: "보글", group: "해양 종족", name: "보글", desc: "감정이 풍부하고 다혈질", preview: bogle4 },
];

const growthByRace: Record<RaceKey, { stage: string; age: string; image: string; body: string }[]> =
  {
    포포: [
      { stage: "알", age: "0세", image: popo1, body: "첫 대화로 초기 형태가 결정됩니다." },
      {
        stage: "자아 형성기",
        age: "1–3세",
        image: popo2,
        body: "대화를 통해 성향이 형성됩니다.",
      },
      {
        stage: "사회적 확장기",
        age: "4–9세",
        image: popo3,
        body: "다양한 사건과 경험을 만납니다.",
      },
      {
        stage: "졸업",
        age: "10세",
        image: popo4,
        body: "직업이 확정되고 지구로 떠납니다.",
      },
    ],
    후후: [
      { stage: "알", age: "0세", image: huhu1, body: "첫 대화로 초기 형태가 결정됩니다." },
      {
        stage: "자아 형성기",
        age: "1–3세",
        image: huhu2,
        body: "대화를 통해 성향이 형성됩니다.",
      },
      {
        stage: "사회적 확장기",
        age: "4–9세",
        image: huhu3,
        body: "다양한 사건과 경험을 만납니다.",
      },
      {
        stage: "졸업",
        age: "10세",
        image: huhu4,
        body: "직업이 확정되고 지구로 떠납니다.",
      },
    ],
    보글: [
      { stage: "알", age: "0세", image: bogle1, body: "첫 대화로 초기 형태가 결정됩니다." },
      {
        stage: "자아 형성기",
        age: "1–3세",
        image: bogle2,
        body: "대화를 통해 성향이 형성됩니다.",
      },
      {
        stage: "사회적 확장기",
        age: "4–9세",
        image: bogle3,
        body: "다양한 사건과 경험을 만납니다.",
      },
      {
        stage: "졸업",
        age: "10세",
        image: bogle4,
        body: "직업이 확정되고 지구로 떠납니다.",
      },
    ],
  };

const CharacterSection = () => {
  const [selectedRace, setSelectedRace] = useState<RaceKey>("보글");
  const growth = growthByRace[selectedRace];
  const selectedCard = raceCards.find((r) => r.key === selectedRace)!;

  return (
    <section
      id="character"
      className="px-6 md:px-10 py-28 relative overflow-hidden bg-space-800/40"
    >
      <span className="absolute top-10 right-6 md:right-14 text-[8rem] md:text-[11rem] font-bold text-periwinkle/5 select-none leading-none pointer-events-none font-sans">
        02
      </span>

      {/* Artifacts */}
      <motion.img
        src={star01}
        alt=""
        aria-hidden
        className="absolute top-14 -z-2 right-8 md:right-52 w-10 md:w-12 pointer-events-none select-none opacity-40"
        animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.img
        src={star03}
        alt=""
        aria-hidden
        className="absolute bottom-12 left-4 w-10 pointer-events-none select-none opacity-40"
        animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src={sparkle2}
        alt=""
        aria-hidden
        className="absolute bottom-20 right-6 w-14 md:w-16 pointer-events-none select-none opacity-50"
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.img
        src={sparkle3}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-3 w-7 pointer-events-none select-none opacity-50"
        animate={{ rotate: [0, 45, 0], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">Character</p>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            달생이, 대화로 자라는
            <br />
            단 하나뿐인 존재
          </h2>
          <p className="mt-5 text-ivory/60 leading-relaxed">
            달생이는 플레이어와의 대화를 통해 성장하는 생명체입니다. 어떤 말을 건네느냐에 따라
            성향도, 생김새도, 미래도 달라집니다.
          </p>
          <ul className="mt-5 space-y-2">
            {traits.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-ivory/55">
                <span className="text-periwinkle/50 text-xs leading-none">◦</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Race selector + Growth – glass card */}
        <div className="rounded-3xl border border-ivory/[0.08] bg-white/[0.03] backdrop-blur-md px-6 pt-7 pb-3 md:px-10 md:pt-11 md:pb-5 space-y-16">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 justify-center">
            <p className="text-[10px] tracking-[0] uppercase text-ivory/30 flex-shrink-0">종족 선택</p>
            <p className="text-xs text-periwinkle/60 font-serif">아직 만나지 못한 더 많은 달생이들이 당신을 기다리고 있습니다.</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {raceCards.map((race) => (
              <button
                key={race.key}
                type="button"
                onClick={() => setSelectedRace(race.key)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm transition-all duration-200 ${
                  selectedRace === race.key
                    ? "bg-periwinkle/15 border border-periwinkle/40 text-periwinkle"
                    : "border border-ivory/10 text-ivory/45 hover:border-ivory/20 hover:text-ivory/70"
                }`}
              >
                <img src={race.preview} className="w-5 h-5 object-contain" alt="" />
                <span className="font-medium">{race.name}</span>
                <span className="text-[11px] opacity-55">{race.group}</span>
              </button>
            ))}

            <span
              className="h-[42px] px-4 rounded-full bg-ivory/[0.04] border border-ivory/[0.06] animate-pulse cursor-not-allowed select-none flex items-center justify-center text-[11px] text-ivory/30"
            >
              더 다양한 종족 준비중
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={selectedRace + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="text-sm text-ivory/70 font-serif text-center"
            >
              {selectedCard.desc}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Growth timeline */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-periwinkle">Growth</p>
            <h3 className="mt-2 font-serif text-xl md:text-2xl text-ivory">
              {selectedRace}의 10년 성장 사이클
            </h3>
            <p className="mt-3 text-sm text-ivory/55 font-serif">
              동일한 성장 구조지만, 플레이어의 대화와 순간의 선택이 쌓여 전혀 다른 달생이가
              탄생합니다. 물론 달생이의 삶도 다 달라요.
            </p>
          </div>

          <div className="relative mt-24">
            {/* Dashed connector line – centered on boxes, behind cards */}
            <div className="hidden md:block absolute top-[74px] left-[12.5%] right-[12.5%] border-t border-dashed border-periwinkle/20 pointer-events-none z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRace + "-grid"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
              >
                {growth.map((g, i) => {
                  const stepSizes = ["w-[60px]", "w-[90px]", "w-[100px]", "w-[140px]"];
                  return (
                    <motion.div
                      key={g.stage}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: i * 0.07 }}
                      className="flex flex-col items-center gap-3 text-center relative"
                    >
                      <motion.div
                        className="w-full aspect-square max-w-[160px] mx-auto rounded-2xl overflow-hidden border border-ivory/[0.07] bg-space-900/70 flex items-end justify-center pb-4 relative z-10 cursor-pointer"
                        whileHover={{ y: [0, -6, 0], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" } }}
                      >
                        <img
                          src={g.image}
                          alt={`${selectedRace} ${g.stage}`}
                          className={`${stepSizes[i]} h-auto object-contain transition-all duration-300`}
                        />
                      </motion.div>

                      <div>
                        <p className="text-[10px] text-ivory/35">{g.age}</p>
                        <p className="text-sm font-medium text-ivory/80">{g.stage}</p>
                        <p className="mt-1 text-xs text-ivory/40 leading-relaxed hidden md:block text-balance">
                          {g.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
        <div className="h-[3px]" />
        </div>

      </div>
    </section>
  );
};

export default CharacterSection;
