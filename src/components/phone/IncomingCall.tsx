"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Loader2 } from "lucide-react";
import Timer from "@/components/shared/Timer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface IncomingCallProps {
  callAccepted: boolean;
  hexaToggled: boolean;
  timerFormatted: string;
  onAccept: () => void;
  onToggleHexa: () => void;
}

export default function IncomingCall({
  callAccepted, hexaToggled, timerFormatted, onAccept, onToggleHexa,
}: IncomingCallProps) {
  const showButtons = !callAccepted;

  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      style={{ background: "linear-gradient(180deg, rgba(5,65,27,0.9) 0%, rgba(2,10,5,0.97) 45%, #000 100%)", backdropFilter: "blur(40px)" }}
    >
      <div style={{ height: 47, flexShrink: 0 }} />

      <div className="flex flex-1 flex-col items-center pt-11">
        <Avatar className="mb-4 h-[66px] w-[66px]">
          <AvatarFallback className="text-[20px] font-semibold text-white [background:linear-gradient(135deg,#4B5563,#1F2937)]">DP</AvatarFallback>
        </Avatar>

        <h2 className="text-[18px] font-semibold text-white tracking-tight">David Patterson</h2>
        <p className="mt-1 text-[11px] text-white/35">+44 114 275 8300</p>
        <p className="mt-0.5 text-[10px] text-white/20">Sheffield Precision Manufacturing</p>

        <div className="mt-3 flex items-center gap-2">
          {!callAccepted ? (
            <motion.p className="text-[11px] text-green-400/70"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >incoming call...</motion.p>
          ) : (
            <div className="flex items-center gap-2">
              <motion.div className="h-[6px] w-[6px] rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <Timer formatted={timerFormatted} className="text-[12px] text-white font-medium" />
            </div>
          )}
        </div>
      </div>

      <div className="px-5 mb-6">
        <motion.div
          className="relative"
          animate={hexaToggled ? { borderColor: ["rgba(34,197,94,0.4)", "rgba(255,255,255,0.06)"] } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden rounded-2xl border-border bg-card/30 px-4 py-3">
          {!hexaToggled && (
            <motion.div className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(60deg, transparent 30%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 52%, transparent 70%)", backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4F46E5]">
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-medium text-white">{hexaToggled ? "Tracking active" : "Track this call with Hexa"}</p>
                <p className="text-[9px] text-white/25 mt-px">
                  {hexaToggled
                    ? <span className="flex items-center gap-1 text-white/35"><Loader2 size={8} className="animate-spin" />Capturing call data</span>
                    : "Auto-capture items, pricing & delivery dates"
                  }
                </p>
              </div>
            </div>
            <button onClick={onToggleHexa} disabled={hexaToggled}
              className="transition-colors"
            >
              <Switch checked={hexaToggled} />
            </button>
          </div>
          </Card>
        </motion.div>
      </div>

      <AnimatePresence>
        {showButtons && (
          <motion.div className="flex items-center justify-center gap-14 pb-11"
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-red-500"
                style={{ width: 56, height: 56 }}
              ><PhoneOff size={22} color="white" /></div>
              <span className="text-[9px] text-white/40">Decline</span>
            </button>
            <button onClick={onAccept} className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-green-500"
                style={{ width: 56, height: 56 }}
              ><Phone size={22} color="white" /></div>
              <span className="text-[9px] text-white/40">Accept</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {callAccepted && !showButtons && <div className="pb-11" />}

      <div className="flex justify-center" style={{ paddingBottom: 5, paddingTop: 2 }}>
        <div style={{ width: 118, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.12)" }} />
      </div>
    </motion.div>
  );
}
