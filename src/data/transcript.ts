export interface TranscriptMessage {
  speaker: string;
  role: "customer" | "sales";
  text: string;
  appearAfterSeconds: number;
  highlights?: string[];
}

export const transcript: TranscriptMessage[] = [
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Hi James, it's David from Sheffield Precision. How are you doing?",
    appearAfterSeconds: 0,
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "David! Good to hear from you. Doing well, thanks. What can I help you with today?",
    appearAfterSeconds: 3,
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Right, so we've got a couple of new jobs coming in and I need to sort out some materials. First thing — we need about 500 units of your M8 stainless steel hex bolts, the A2-70 grade ones.",
    appearAfterSeconds: 7,
    highlights: ["500 units", "M8 stainless steel hex bolts", "A2-70 grade"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Sure, the M8 A2-70s. 500 units. What's your timeline looking like on those?",
    appearAfterSeconds: 12,
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "We'd need those by March 14th ideally. Can you do that?",
    appearAfterSeconds: 15,
    highlights: ["March 14th"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Let me check... yes, we should be able to manage that. Our current pricing on the M8 A2-70 is around £0.42 per unit for that volume. I might be able to do £0.38 if you're ordering more across the board.",
    appearAfterSeconds: 18,
    highlights: ["£0.42 per unit", "£0.38"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "That works. The other thing — we're quoting for a job that needs precision-ground EN24T steel bar, 50mm diameter. Probably 200 metres of it. What are you looking at for that?",
    appearAfterSeconds: 23,
    highlights: ["EN24T steel bar", "50mm diameter", "200 metres"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "EN24T 50mm round bar. 200 metres is a decent run. We're currently at about £28.50 per metre, but I'd want to confirm exact stock. When would you need it?",
    appearAfterSeconds: 28,
    highlights: ["£28.50 per metre"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "That one's a bit further out — end of March, let's say the 28th. But we'd also need test certificates with it. BS EN 10204 3.1 certs.",
    appearAfterSeconds: 33,
    highlights: ["the 28th", "BS EN 10204 3.1 certs"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Noted, 3.1 certs included. Now is that delivery to your usual Attercliffe site or the new Rotherham unit?",
    appearAfterSeconds: 37,
    highlights: ["Attercliffe", "Rotherham"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Rotherham for the steel bar, and Attercliffe for the bolts.",
    appearAfterSeconds: 41,
    highlights: ["Rotherham", "Attercliffe"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Got it. Anything else?",
    appearAfterSeconds: 44,
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Actually yes — we need a batch of PTFE gaskets, DN50 PN16 spec. About 150 pieces. These are for a valve overhaul job.",
    appearAfterSeconds: 47,
    highlights: ["PTFE gaskets", "DN50 PN16", "150 pieces"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "DN50 PN16 PTFE gaskets. 150 units. Those we usually run about £3.20 each. Delivery within two weeks normally. So mid-March should be fine.",
    appearAfterSeconds: 52,
    highlights: ["£3.20 each"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Perfect. And one last thing — can you check if you still carry the Dormer A002 HSS drill bits? We need a set of 10mm ones, probably 50 pieces.",
    appearAfterSeconds: 56,
    highlights: ["Dormer A002 HSS drill bits", "10mm", "50 pieces"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Yes, we do stock the Dormer A002 range. For 10mm, it's roughly £4.85 per bit. 50 units — I can definitely do that.",
    appearAfterSeconds: 60,
    highlights: ["£4.85 per bit"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "Great. We'd need the gaskets and drill bits by March 14th as well, same as the bolts. Can you send me a formal quote for all of this? Net 30 terms as usual?",
    appearAfterSeconds: 64,
    highlights: ["March 14th", "Net 30"],
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Absolutely. I'll get that quote over to you by end of day. Net 30, no problem. Anything else, David?",
    appearAfterSeconds: 68,
    highlights: ["Net 30"],
  },
  {
    speaker: "David Patterson",
    role: "customer",
    text: "That's everything for now. Cheers, James. Speak soon.",
    appearAfterSeconds: 72,
  },
  {
    speaker: "James Morrison",
    role: "sales",
    text: "Cheers, David. Talk soon.",
    appearAfterSeconds: 75,
  },
];
