"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import IosIconMask from "@/components/phone/IosIconMask";
import { dockIcons, homeIcons } from "@/data/iosHomeIcons";

interface HomeScreenProps {
  onHexaTap: () => void;
}

const SF_FONT =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif";
const SF_ROUNDED =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Rounded', 'SF Pro Text', sans-serif";

export default function HomeScreen({ onHexaTap }: HomeScreenProps) {
  const iconSize = 46;
  const dockIconSize = 46;

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/wallpapers/sonoma.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div style={{ height: 50, flexShrink: 0 }} />

        {/* Weather Widget */}
        <div className="mx-[18px] mb-[14px] overflow-hidden rounded-[16px] border border-white/24 bg-[#5ca4e8]/40 shadow-[0_8px_18px_rgba(10,20,40,0.18)] backdrop-blur-[25px]">
          <div
            className="bg-[linear-gradient(180deg,rgba(83,161,235,0.8)_0%,rgba(73,143,213,0.74)_100%)] px-[14px] py-[12px]"
          >
            <p
              className="text-center text-[10px] leading-[1.38] text-white/88"
              style={{ fontFamily: SF_ROUNDED, fontWeight: 500 }}
            >
              Location access is needed to show
              <br />
              weather near you.
            </p>
          </div>
          <div
            className="border-t border-white/26 bg-black/10 py-[3px] text-center text-[9.5px] text-white/70"
            style={{ fontFamily: SF_ROUNDED }}
          >
            Weather
          </div>
        </div>

        {/* App Icon Grid */}
        <div className="flex flex-1 flex-col px-[18px] pt-[2px]">
          <div className="grid grid-cols-4 justify-items-center gap-y-[16px] gap-x-[16px]">
            {homeIcons.map((app) => (
              <div key={app.name} className="flex flex-col items-center gap-[4px]">
                {app.isHexa ? (
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(99,102,241,0)",
                        "0 0 16px rgba(99,102,241,0.5)",
                        "0 0 0px rgba(99,102,241,0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    onClick={onHexaTap}
                    className="cursor-pointer"
                  >
                    <IosIconMask
                      src="/icons/hexa.png"
                      alt="Hexa"
                      size={iconSize}
                      backgroundColor="#ffffff"
                    />
                  </motion.div>
                ) : (
                  <IosIconMask
                    src={app.src}
                    alt={app.name}
                    size={iconSize}
                  />
                )}
                <span
                  className="w-full truncate text-center text-white/95 [text-shadow:0_1px_1px_rgba(0,0,0,0.34)]"
                  style={{
                    fontFamily: SF_FONT,
                    fontWeight: 500,
                    fontSize: 10,
                    lineHeight: 1.05,
                    letterSpacing: 0.02,
                  }}
                >
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Pill */}
        <div className="mb-[10px] flex justify-center">
          <div className="flex items-center justify-center gap-1 rounded-full border border-white/22 bg-white/15 px-[12px] py-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[22px]">
            <Search size={10} className="text-white/62" />
            <span
              className="text-white/76"
              style={{ fontFamily: SF_FONT, fontWeight: 500, fontSize: 10 }}
            >
              Search
            </span>
          </div>
        </div>

        {/* Dock */}
        <div className="mx-[12px] mb-[3px] flex items-center justify-around rounded-[24px] border border-white/18 bg-white/17 px-[10px] py-[6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[30px]">
          {dockIcons.map((app) => (
            <div key={app.name} className="flex flex-col items-center">
              <IosIconMask
                src={app.src}
                alt={app.name}
                size={dockIconSize}
              />
            </div>
          ))}
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center" style={{ paddingBottom: 4, paddingTop: 1 }}>
          <div
            style={{
              width: 100,
              height: 4,
              borderRadius: 3,
              background: "rgba(255,255,255,0.34)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
