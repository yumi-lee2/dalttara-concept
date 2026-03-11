import { useEffect, useRef } from "react"; // 1. 볼륨 조절
import Gnb from "./components/Gnb";
import Hero from "./components/Hero";
import WorldSection from "./components/WorldSection";
import CharacterSection from "./components/CharacterSection";
import CoreGameplaySection from "./components/CoreGameplaySection";
import CoreLoopSection from "./components/CoreLoopSection";
import DifferentiationSection from "./components/DifferentiationSection";
import TargetSection from "./components/TargetSection";
import StarCursor from "./components/StarCursor";

function App() {
  // 2. 오디오 제어 리모컨
  const audioRef = useRef<HTMLAudioElement>(null);

  // 3. 사이트 켜질 때 볼륨 자동으로 설정
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; 
    }
  }, []);

  return (
    <div id="top" className="bg-space-900 min-h-screen text-ivory relative">
      {/* 4. 배경음악 설정 */}
      <audio 
        ref={audioRef}
        src="/assets/Starlight_Village_Wanderer.mp3"
        autoPlay 
        loop 
      />

      <StarCursor />
      <Gnb />
      <Hero />
      <WorldSection />
      <CharacterSection />
      <CoreGameplaySection />
      <CoreLoopSection />
      <DifferentiationSection />
      <TargetSection />
    </div>
  );
}

export default App;