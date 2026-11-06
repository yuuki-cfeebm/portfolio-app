import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { profile, stack } from "@/data/portfolio";

export default function TerminalTyping() {
  return (
    <Terminal className="justify-self-center">
      <TypingAnimation className="text-primary">$ whoami</TypingAnimation>
      <AnimatedSpan>
        {profile.name} · {profile.role}
      </AnimatedSpan>
      <TypingAnimation className="text-primary">$ cat stack.txt</TypingAnimation>
      <AnimatedSpan>{stack.slice(0, 4).join(", ")}</AnimatedSpan>
      <AnimatedSpan>{stack.slice(4, 8).join(", ")}</AnimatedSpan>
      <TypingAnimation className="text-primary">$ status</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ {profile.status}</AnimatedSpan>
    </Terminal>
  );
}
