"use client";

import React from "react";
import Image from "next/image";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function PhoneFrame({ children, className = "", style }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`} style={style}>
      <div
        className="relative"
        style={{
          width: 340,
          maxHeight: "88vh",
          aspectRatio: "70.6/146.6",
          boxShadow: "0 44px 90px -30px rgba(0,0,0,0.82), 0 0 65px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="absolute z-10 overflow-hidden bg-black"
          style={{
            left: "9.2%",
            right: "9.2%",
            top: "3.45%",
            bottom: "5.25%",
            borderRadius: 44,
          }}
        >
          <div
            className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between"
            style={{ height: 49, paddingLeft: 26, paddingRight: 23, paddingTop: 12 }}
          >
            <span
              className="text-[14px] font-semibold text-white"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
            >
              2:06
            </span>
            <div className="flex items-center gap-[4px]">
              <svg width="15" height="11" viewBox="0 0 17 12" fill="none" aria-hidden>
                <rect x="0" y="6.5" width="2.6" height="5.5" rx="0.7" fill="white" opacity="0.45" />
                <rect x="3.6" y="4.8" width="2.6" height="7.2" rx="0.7" fill="white" opacity="0.62" />
                <rect x="7.2" y="2.8" width="2.6" height="9.2" rx="0.7" fill="white" opacity="0.78" />
                <rect x="10.8" y="0.8" width="2.6" height="11.2" rx="0.7" fill="white" />
              </svg>
              <span
                className="ml-px text-[11px] font-bold text-white"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
              >
                5G
              </span>
              <svg width="24" height="12" viewBox="0 0 27 13" fill="none" className="ml-[2px]" aria-hidden>
                <rect x="0.5" y="0.5" width="22" height="12" rx="3" stroke="white" strokeOpacity="0.55" />
                <rect x="2.1" y="2.1" width="15.6" height="8.8" rx="1.8" fill="white" />
                <path d="M24 4.6V8.4C24.95 8.05 26 7.05 26 6.5C26 5.95 24.95 4.95 24 4.6Z" fill="white" opacity="0.55" />
              </svg>
            </div>
          </div>

          {children}
        </div>

        <Image
          src="/device/iphone15pro-frame.svg"
          alt="iPhone 15 Pro frame"
          fill
          priority
          className="pointer-events-none select-none"
          sizes="340px"
        />
      </div>
    </div>
  );
}
