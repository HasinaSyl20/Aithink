import { SmokeyBackground } from "@/components/syl20ui/SmokeyBackground";
import { AnimatedAIChat } from "@/components/ui/animated-ai-chat";

export default function Home() {
  return (
    <div className="flex w-screen overflow-x-hidden">
      <SmokeyBackground className="absolute inset-0" />
      <AnimatedAIChat />
    </div>
  );
}
