import Gnb from "./components/Gnb";
import Hero from "./components/Hero";
import WorldSection from "./components/WorldSection";
import CharacterSection from "./components/CharacterSection";
import CoreGameplaySection from "./components/CoreGameplaySection";
import CoreLoopSection from "./components/CoreLoopSection";
import DifferentiationSection from "./components/DifferentiationSection";
import TargetSection from "./components/TargetSection";

function App() {
  return (
    <div id="top" className="bg-space-900 min-h-screen text-ivory relative">
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
