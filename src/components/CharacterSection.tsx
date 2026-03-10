import { useState } from "react";
import { motion } from "framer-motion";
import popo1 from "/public/assets/character/포포_1.png";
import popo2 from "/public/assets/character/포포_2.png";
import popo3 from "/public/assets/character/포포_3.png";
import popo4 from "/public/assets/character/포포_4.png";
import huhu1 from "/public/assets/character/후후_1.png";
import huhu2 from "/public/assets/character/후후_2.png";
import huhu3 from "/public/assets/character/후후_3.png";
import huhu4 from "/public/assets/character/후후_4.png";
import bogle1 from "/public/assets/character/보글_1.png";
import bogle2 from "/public/assets/character/보글_2.png";
import bogle3 from "/public/assets/character/보글_3.png";
import bogle4 from "/public/assets/character/보글_4.png";
import egg from "/public/assets/알.png";

const traits = [
  "대화할수록 고유한 성향이 형성됩니다",
  "성향에 따라 생김새와 말투가 달라집니다",
  "나이가 들수록 더 뚜렷한 자아를 가지게 됩니다"
];

type RaceKey = "포포" | "후후" | "보글";

const raceCards: {
  key: RaceKey;
  group: string;
  name: string;
  desc: string;
  color: string;
  preview: string;
}[] = [
  {
    key: "포포",
    group: "숲의 종족",
    name: "포포",
    desc: "엉뚱하고 호기심이 많음",
    color: "from-emerald-400/40 to-lime-300/30",
    preview: popo4
  },
  {
    key: "후후",
    group: "구름 종족",
    name: "후후",
    desc: "느긋하고 나른함",
    color: "from-sky-300/40 to-indigo-300/30",
    preview: huhu4
  },
  {
    key: "보글",
    group: "해양 종족",
    name: "보글",
    desc: "감정이 풍부하고 다혈질",
    color: "from-cyan-300/40 to-blue-400/30",
    preview: bogle4
  }
];

const growthByRace: Record<
  RaceKey,
  {
    stage: string;
    age: string;
    image: string;
    body: string;
  }[]
> = {
  포포: [
    {
      stage: "알",
      age: "0세",
      image: popo1,
      body: "첫 대화로 포포의 첫 형태가 결정됩니다."
    },
    {
      stage: "자아 형성기",
      age: "1–3세",
      image: popo2,
      body: "자아 형성기에는 플레이어와의 대화를 통해 달생이의 성향이 형성됩니다."
    },
    {
      stage: "사회적 확장기",
      age: "4–9세",
      image: popo3,
      body: "사회적 확장기에는 다양한 사건과 경험을 만나며 세계가 넓어집니다."
    },
    {
      stage: "졸업",
      age: "10세",
      image: popo4,
      body: "졸업 단계에서는 직업이 확정되고, 지구로 떠날 준비를 마칩니다."
    }
  ],
  후후: [
    {
      stage: "알",
      age: "0세",
      image: huhu1,
      body: "첫 대화로 후후의 첫 형태가 결정됩니다."
    },
    {
      stage: "자아 형성기",
      age: "1–3세",
      image: huhu2,
      body: "자아 형성기에는 플레이어와의 대화를 통해 달생이의 성향이 형성됩니다."
    },
    {
      stage: "사회적 확장기",
      age: "4–9세",
      image: huhu3,
      body: "사회적 확장기에는 다양한 사건과 경험을 만나며 세계가 넓어집니다."
    },
    {
      stage: "졸업",
      age: "10세",
      image: huhu4,
      body: "졸업 단계에서는 직업이 확정되고, 지구로 떠날 준비를 마칩니다."
    }
  ],
  보글: [
    {
      stage: "알",
      age: "0세",
      image: bogle1,
      body: "첫 대화로 보글의 첫 형태가 결정됩니다."
    },
    {
      stage: "자아 형성기",
      age: "1–3세",
      image: bogle2,
      body: "자아 형성기에는 플레이어와의 대화를 통해 달생이의 성향이 형성됩니다."
    },
    {
      stage: "사회적 확장기",
      age: "4–9세",
      image: bogle3,
      body: "사회적 확장기에는 다양한 사건과 경험을 만나며 세계가 넓어집니다."
    },
    {
      stage: "졸업",
      age: "10세",
      image: bogle4,
      body: "졸업 단계에서는 직업이 확정되고, 지구로 떠날 준비를 마칩니다."
    }
  ]
};

const CharacterSection = () => {
  const [selectedRace, setSelectedRace] = useState<RaceKey>("보글");
  const growth = growthByRace[selectedRace];

  return (
    <section
      id="character"
      className="px-6 md:px-10 py-20 border-t border-white/5 bg-space-900"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* 달생이 정의 */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Character
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            달생이, 대화로 자라는 단 하나뿐인 존재
          </h2>
          <p className="mt-4 text-slate-200 leading-relaxed">
            달생이는 플레이어와의 대화를 통해 성장하는, 이 세계만의 특별한 생명체입니다.
            같은 달생이는 세상에 하나도 없습니다.
          </p>

          <ul className="mt-6 space-y-2 text-slate-100">
            {traits.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm md:text-base">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 종족 소개 – 가로 스크롤 레일 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <p className="text-sm font-semibold text-sky-200">
            종족 – 기본 성향이 다른 달생이들
          </p>
          <p className="text-sm text-slate-200">
            숲의 포포, 구름의 후후, 해양의 보글. 종족마다 태어날 때부터 다른 기본
            성향을 가지고 태어납니다.
          </p>

          <div className="mt-4 -mx-4 md:mx-0">
            <div className="overflow-x-auto pb-3">
              <div className="flex gap-4 px-4 md:px-0 min-w-max">
                {raceCards.map((race) => {
                  const isActive = race.key === selectedRace;
                  return (
                    <button
                      key={race.name}
                      type="button"
                      onClick={() => setSelectedRace(race.key)}
                      className={`relative w-56 shrink-0 rounded-3xl border px-4 py-4 text-left transition-all ${
                        isActive
                          ? "border-sky-300 bg-white/10 shadow-glow"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${race.color} opacity-40`}
                      />
                      <div className="relative flex flex-col gap-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-sky-300">
                          {race.group}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {race.name}
                        </p>
                        <p className="text-sm text-slate-100">{race.desc}</p>
                        <div className="mt-1 rounded-2xl bg-space-900/60 border border-white/10 p-2">
                          <img
                            src={race.preview}
                            alt={race.name}
                            className="mx-auto h-24 object-contain"
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-2 text-xs md:text-sm text-slate-300">
            아직 만나지 못한 더 많은 달생이들이 당신을 기다리고 있습니다.
          </p>
        </motion.div>

        {/* 성장 단계 – 선택된 종족에 따른 타임라인 */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
                Growth
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                선택한 달생이의 10년 성장 사이클
              </h3>
            </div>
            <p className="hidden text-xs text-slate-400 md:block">
              성장 구조는 같지만, 대화와 종족에 따라 전혀 다른 이야기가 됩니다.
            </p>
          </div>

          {/* 1행: 단계 이름 & 나이 */}
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4 text-center text-xs md:text-sm text-slate-200">
            {growth.map((g) => (
              <div key={`${g.stage}-header`} className="flex flex-col items-center gap-1">
                <span className="text-[11px] text-slate-400">{g.age}</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                  {g.stage}
                </span>
              </div>
            ))}
          </div>

          {/* 2행: 각 단계별 캐릭터 카드 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {growth.map((g) => (
              <div
                key={`${g.stage}-detail`}
                className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <div className="mb-3 w-full max-w-[180px] aspect-square rounded-2xl bg-space-900/60 overflow-hidden border border-white/10">
                  <img
                    src={g.image}
                    alt={`${selectedRace} ${g.stage}`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs text-slate-300">{g.age}</p>
                <p className="mt-2 text-sm text-slate-100 leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharacterSection;

