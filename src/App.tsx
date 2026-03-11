import { useEffect, useRef, useState } from "react"; // useState 추가
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
  const audioRef = useRef<HTMLAudioElement>(null);
  // 1. 사운드 ON/OFF 상태 관리 (기본값: 꺼짐)
  const [isSoundOn, setIsSoundOn] = useState(false);

  // 2. 볼륨 설정
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; 
    }
  }, []);

  // 3. 사운드 토글 함수
  const handleToggleSound = () => {
    if (audioRef.current) {
      if (isSoundOn) {
        audioRef.current.pause();
      } else {
        // 브라우저 차단을 막기 위해 재생 성공 여부 확인
        audioRef.current.play().catch((err) => console.log("재생 대기 중:", err));
      }
      setIsSoundOn(!isSoundOn); // 상태 업데이트 (Gnb 아이콘이 바뀜)
    }
  };

  return (
    <div id="top" className="bg-space-900 min-h-screen text-ivory relative">
      <audio 
        ref={audioRef}
        src="/assets/Starlight_Village_Wanderer.mp3"
        loop 
      />

      <StarCursor />
      
      {/* 4. 핵심! Gnb에 상태와 함수를 전달합니다 */}
      <Gnb isSoundOn={isSoundOn} onToggleSound={handleToggleSound} />
      
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