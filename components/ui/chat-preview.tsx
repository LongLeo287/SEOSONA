"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Message {
  avatar?: string;
  avatarBackground?: string;
  username: string;
  content: string;
  color?: string;
  duration: number;
  timestamp?: number;
}

interface Channel {
  name: string;
  description: string;
}

type Variations = "default" | "compact" | "expanded";

interface ChatPreviewProps {
  messages?: Message[];
  channel?: Channel;
  maxMessages?: number;
  className?: string;
  gradientBackground?: boolean;
  variation?: Variations;
  removeShadow?: boolean;
  theme?: {
    background?: string;
    border?: string;
    textColor?: string;
    avatarSize?: string;
  };
}

const defaultTheme = {
  background: "bg-white",
  border: "border border-slate-200/60",
  textColor: "text-slate-600",
  avatarSize: "w-8 h-8 sm:w-10 sm:h-10",
};

const defaultChannel: Channel = {
  name: "khach-hang-seosona",
  description: "Real-time feedback từ đối tác",
};

const defaultMessages: Message[] = [];

export function ChatPreview({
  messages = defaultMessages,
  channel = defaultChannel,
  maxMessages = 3,
  className,
  gradientBackground = false,
  variation = "expanded",
  removeShadow = false,
  theme = defaultTheme,
}: ChatPreviewProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!messages || messages.length === 0) return;
    
    const addMessage = () => {
      const newMessage = {
        ...messages[currentIndexRef.current],
        timestamp: Date.now(),
      };
      currentIndexRef.current = (currentIndexRef.current + 1) % messages.length;

      setVisibleMessages((prev) => [...prev, newMessage].slice(-maxMessages));

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(addMessage, newMessage.duration);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentIndexRef.current = 0;
          setVisibleMessages([]);
          addMessage();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setVisibleMessages([]);
        }
      },
      { threshold: 0.1 } // changed threshold to trigger earlier
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [messages, maxMessages]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full",
        variation === "compact" && "max-w-[400px]",
        variation === "expanded" && "max-w-[800px]",
        className
      )}
    >
      {gradientBackground && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-50" />
      )}

      <div
        className={cn(
          "relative rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col",
          !removeShadow && "shadow-xl shadow-blue-900/5",
          theme.border,
          theme.background
        )}
      >
        <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="font-bold text-[14px] sm:text-[15px] text-[#04091A] ml-2">
              #{channel.name}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 truncate flex-1 text-[13px] sm:text-[14px]">
              {channel.description}
            </span>
          </div>
        </div>

        <div className="p-4 pt-0 sm:p-6 sm:pt-0 flex flex-col justify-end relative h-[400px] sm:h-[450px] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          <div className="flex flex-col justify-end gap-4 sm:gap-5 overflow-hidden">
            {visibleMessages.map((message) => (
              <div
                key={message.timestamp}
                className={cn(
                  "flex items-start gap-3 sm:gap-4",
                  message === visibleMessages[visibleMessages.length - 1] &&
                    "animate-message-appear"
                )}
              >
                <div
                  className={cn(
                    "rounded-full flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200",
                    theme.avatarSize,
                    !message.avatar &&
                      (message.avatarBackground ?? "bg-slate-200")
                  )}
                >
                  {message.avatar && (
                    <Image
                      src={message.avatar}
                      alt={message.username}
                      fill
                      className="object-cover"
                    />
                  )}
                  {!message.avatar && (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                      {message.username.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1 bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-none p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={cn(
                        "font-bold text-[14px] sm:text-[15px]",
                        message.color ?? "text-[#04091A]"
                      )}
                    >
                      {message.username}
                    </span>
                    <span className="text-slate-400 shrink-0 text-[11px] sm:text-xs font-medium">
                      just now
                    </span>
                  </div>
                  <p className={cn(theme.textColor, "text-[14px] sm:text-[15px] font-medium leading-relaxed")}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
