import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { profile, stack } from "@/data/portfolio";

export default function TerminalTyping() {
  return (
    <Terminal className="max-w-none max-h-130 justify-self-center lg:col-span-2">
      <TypingAnimation className="text-primary">$ whoami</TypingAnimation>
      <AnimatedSpan className="whitespace-pre-wrap wrap-break-words inline-block">
        {profile.name} · {profile.age} · {profile.role}
      </AnimatedSpan>
      <TypingAnimation className="text-primary">$ cat sobre.txt</TypingAnimation>
      <AnimatedSpan className="whitespace-pre-wrap wrap-break-words inline-block">
        {profile.bio}
      </AnimatedSpan>
      <TypingAnimation className="text-primary">$ cat hobbies.txt</TypingAnimation>
      <AnimatedSpan className="whitespace-pre-wrap wrap-break-words inline-block">
        {profile.hobbies}
      </AnimatedSpan>
      <TypingAnimation className="text-primary">$ cat stack.txt</TypingAnimation>
      <AnimatedSpan>{stack.slice(3, 5).join(", ")}</AnimatedSpan>
      <AnimatedSpan>{stack.slice(5, 8).join(", ")}</AnimatedSpan>
      <TypingAnimation className="text-primary">$ status</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ {profile.status}</AnimatedSpan>
    </Terminal>
  );
}
