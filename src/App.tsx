import Hero from "./components/Hero";
import WorldSection from "./components/WorldSection";
import CharacterSection from "./components/CharacterSection";
import CoreGameplaySection from "./components/CoreGameplaySection";
import CoreLoopSection from "./components/CoreLoopSection";
import ValueSystemSection from "./components/ValueSystemSection";
import DifferentiationSection from "./components/DifferentiationSection";
import TargetSection from "./components/TargetSection";

function App() {
  return (
    <div className="bg-space-900 min-h-screen text-white">
      <Hero />
      <WorldSection />
      <CharacterSection />
      <CoreGameplaySection />
      <CoreLoopSection />
      <ValueSystemSection />
      <DifferentiationSection />
      <TargetSection />
    </div>
  );
}

export default App;
