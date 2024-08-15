"use client";
import { FlipWords } from "./ui/flip-words";
import './styles/hero.scss'; // Adjust the path if needed

const Hero = () => {
  const words = ["Торговый", "центр", "Добрыня"];

  // Define styles for specific letters
  const letterStyles = {
    "Добрыня": {
      3: { color: 'red' } // Index of "р" in "Добрыня" (0-based index)
    }
  };

  // Define style for the whole word
  const wordStyle = {
    color: 'green'
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="fixed inset-0 w-full h-full object-cover blur-sm"
        src="/Dobrynya.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="fixed inset-0 flex items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold max-w-2xl leading-tight tracking-wider space-y-2 old-russian-style">
          <FlipWords 
            words={words} 
            letterStyles={letterStyles} 
            wordStyle={wordStyle} 
            animationType="none" // Custom prop to disable animation
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
