"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedProvider, useSpeed } from "@/hooks/useSpeedControl";
import { useCallTimer } from "@/hooks/useCallTimer";
import { useDemoFlow } from "@/hooks/useDemoFlow";
import SpeedControl from "@/components/shared/SpeedControl";
import PhoneFrame from "@/components/phone/PhoneFrame";
import HomeScreen from "@/components/phone/HomeScreen";
import HexaApp from "@/components/phone/HexaApp";
import IncomingCall from "@/components/phone/IncomingCall";
import MiniPhone from "@/components/phone/MiniPhone";
import BrowserChrome from "@/components/webapp/BrowserChrome";
import Sidebar from "@/components/webapp/Sidebar";
import CallList from "@/components/webapp/CallList";
import CallDetail from "@/components/webapp/CallDetail";

function useWindowSize() {
  const [size, setSize] = useState({ width: 1280, height: 800 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function DemoApp() {
  const {
    screen, goToScreen,
    callAccepted, setCallAccepted,
    hexaToggled, setHexaToggled,
    screen5State, setScreen5State,
    callCompleted, setCallCompleted,
  } = useDemoFlow();

  const timer = useCallTimer();
  const { speed } = useSpeed();
  const windowSize = useWindowSize();
  const [showIncomingCall, setShowIncomingCall] = useState(false);
  const [phonePhase, setPhonePhase] = useState<"centered" | "shrinking" | "mini">("centered");
  const [showWebApp, setShowWebApp] = useState(false);
  const [webAppView, setWebAppView] = useState<"list" | "detail">("list");
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (screen === 2) {
      autoRef.current = setTimeout(() => {
        setShowIncomingCall(true);
        goToScreen(3);
      }, 3000 / speed);
      return () => { if (autoRef.current) clearTimeout(autoRef.current); };
    }
  }, [screen, speed, goToScreen]);

  const handleHexaTap = useCallback(() => goToScreen(2), [goToScreen]);

  const handleSkip = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    setShowIncomingCall(true);
    goToScreen(3);
  }, [goToScreen]);

  const handleAccept = useCallback(() => {
    setCallAccepted(true);
    timer.start();
  }, [setCallAccepted, timer]);

  const handleToggleHexa = useCallback(() => {
    setHexaToggled(true);
    setTimeout(() => {
      setPhonePhase("shrinking");
      setShowWebApp(true);
      setTimeout(() => {
        setPhonePhase("mini");
        goToScreen(4);
      }, 1000 / speed);
    }, 1500 / speed);
  }, [setHexaToggled, goToScreen, speed]);

  const handleSelectLive = useCallback(() => {
    setWebAppView("detail");
    goToScreen(5);
  }, [goToScreen]);

  const handleBackToList = useCallback(() => {
    setWebAppView("list");
    setCallCompleted(true);
    goToScreen(4);
  }, [goToScreen, setCallCompleted]);

  const handleCallEnd = useCallback(() => timer.stop(), [timer]);

  const targetX = -(windowSize.width / 2 - 100 - 24);
  const targetY = windowSize.height / 2 - 180 - 24;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)",
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 35% at 50% 45%, rgba(194,155,101,0.08) 0%, transparent 100%)",
      }} />

      <SpeedControl />

      {screen === 2 && !showIncomingCall && (
        <button
          onClick={handleSkip}
          className="fixed bottom-6 right-6 z-50 border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Skip →
        </button>
      )}

      {phonePhase !== "mini" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: phonePhase === "shrinking" ? 60 : 10 }}
          animate={
            phonePhase === "shrinking"
              ? { scale: 0.4, x: targetX, y: targetY, opacity: 0 }
              : { scale: 1, x: 0, y: 0, opacity: 1 }
          }
          transition={
            phonePhase === "shrinking"
              ? { type: "spring", stiffness: 180, damping: 22 }
              : { duration: 0 }
          }
        >
          <PhoneFrame>
            <AnimatePresence mode="wait">
              {screen === 1 && (
                <motion.div key="home" className="h-full"
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <HomeScreen onHexaTap={handleHexaTap} />
                </motion.div>
              )}
              {screen >= 2 && (
                <motion.div key="app" className="h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <HexaApp />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showIncomingCall && screen >= 3 && (
                <IncomingCall
                  callAccepted={callAccepted}
                  hexaToggled={hexaToggled}
                  timerFormatted={timer.formatted}
                  onAccept={handleAccept}
                  onToggleHexa={handleToggleHexa}
                />
              )}
            </AnimatePresence>
          </PhoneFrame>
        </motion.div>
      )}

      <AnimatePresence>
        {showWebApp && (
          <motion.div key="webapp" className="absolute inset-0 p-3" style={{ zIndex: 20 }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          >
            <BrowserChrome>
              <Sidebar />
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {webAppView === "list" && (
                    <motion.div key="list" className="h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <CallList
                        timerFormatted={timer.formatted}
                        onSelectLiveCall={handleSelectLive}
                        callCompleted={callCompleted}
                      />
                    </motion.div>
                  )}
                  {webAppView === "detail" && (
                    <motion.div key="detail" className="h-full"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CallDetail
                        timerFormatted={timer.formatted}
                        elapsedSeconds={timer.elapsedSeconds}
                        isTimerRunning={timer.isRunning}
                        onBack={handleBackToList}
                        screen5State={screen5State}
                        setScreen5State={setScreen5State}
                        onCallEnd={handleCallEnd}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BrowserChrome>
          </motion.div>
        )}
      </AnimatePresence>

      {phonePhase === "mini" && (
        <MiniPhone
          timerFormatted={timer.formatted}
          callEnded={!timer.isRunning && callAccepted}
          visible={!callCompleted}
        />
      )}
    </div>
  );
}

export default function Page() {
  return (
    <SpeedProvider>
      <DemoApp />
    </SpeedProvider>
  );
}
