import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ========================
 * 💡 QUICK CUSTOMIZATION
 * Edit everything in CONFIG below — no code changes needed elsewhere.
 * ========================
 */
const CONFIG = {
  hero: { dateLabel: "29 October · Happy Birthday", name: "Shivani" },
  timeline: [
    { label: "We met",       desc: "Didn’t know I was meeting my forever person. I still remember seeing you in that yellow dress and wondering damn who is she and then seeing you with your attitude and the stratergy(cheatings) in game. Then the official next time we met during poker night when I entered and there you were in that dress standing near the island/kitchen sink. Had a great time that night and got to know you a little bit more. Then during the party in that pink dress looking pretty in pink lol and caught me staring at them chug jugs hehe. I had a great time and we even took pictures together and thats when it all started." },
    { label: "Garba Night",  desc: "I still remember the car pulling up and noticed you in the car and tought that thats all of you no more haha. My baby was looking so pretty hugging you for the first time and immediately you take my hand and feelng your tits for the first time was amazing. Then inside some cute moments, our first kiss, great dinner, fun night with friends, and both of us losing our virginity to each other. Then great start of the morning waking up next to you, having great breakfast, fun little afternoon quickie and the main garba night where I had so much fun doing garba, dandiya, and dancing with you. Having late night snack and falling asleep in each others arm was amazing." },
    { label: "Quick little moments",      desc: "I was so excited to see you again after so long, seeing your tiny cute ass walking up to my car. I got to hug you, talk to you properly, kiss you and get to drive just you and me. Getting head in the car at a public park was one of the hottest thing we ever did and its still one of my top moments. Then seeing you again during the funeral even if it was for 10 minutes was still amazing as I get to see you, hold you, kiss you, and be with my baby girl again." },
    { label: "My House", desc: " I still can't believe that I snuck you into my room. What a great way to spend my birthday. Baby came bearing gifts literally. Looking so cute and pretty in that pink dress, get to make you sit in my lap and talk and open all those beatiful gifts from you was great. And obivously the great time we had right after was the best thing ever and can't wait to experience more that with you. Hopefully I get to come see you next month and we can create beautiful memories again." },
    { label: "New era",      desc: "I cant wait to build my next stage with you. Both of us graduated with jobs having our automation working and passive income flowing. We can meet whenver go on vacations, nice dinners, drive nice cars and have a beautiful house that we can call home. Do everything we dreamed of and more with you and me always and forever." },
  ],
  letter: {
    body: "My Baby Girl — These past two years with you have been the most beautiful chapter of my life. We’ve shared moments of laughter, moments of silence, and moments that tested us and yet through it all, my love for you has only grown deeper. You’ve been my peace, my chaos, my favorite everything. I love the way you make ordinary days feel special, how your smile makes everything lighter, and how your love has taught me what it truly means to care for someone. No matter what we’ve faced, we always found our way back to each other stronger, closer, and more in love than before. I can’t wait to spend forever with you, to keep learning, growing, and creating memories side by side. You’re my home, my heart, and the person I want in every tomorrow. Happy Birthday, my love. I also want to mention to you that how sexy and hot you are like literally my dream girl. I am so lucky to have you with such an insane body that I can claim as all mine. I still remember my room when you were sitting on top of me in my bed with just your panties and grinding me, seeing that look on your face as you felt my cock made me just wanna throw you on my bed take my cock out and shove inside of you. The moaning when I shove it deep in your pussy and the wayy you take it all in like my good girl, god I want you again and can't wait but for now you can open gift 3 hehehehe😈",
    signature: "— Raj 💖",
  },
  footerNote: "Built with lots of ❤️ for My Beautiful Girl",
};

/* ---------- tiny UI helpers ---------- */
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border bg-white/80 backdrop-blur border-gray-200 ${className}`}>{children}</div>
);

const Button = ({ className = "", children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 active:scale-[.98] transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* ---------- gate + hero ---------- */
const BirthdayGate = ({ onUnlock }) => {
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");

  const check = () => {
    const cleaned = val.trim();
    const ok =
      cleaned === "10/29/2001" ||
      cleaned === "10-29-2001" ||
      cleaned === "10292001" ||
      cleaned === "29/10/2001"; // a few friendly formats
    if (ok) onUnlock();
    else setErr("Try the exact date format: 10/29/2001");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-rose-50 to-white">
      <Card className="p-6 w-[min(92vw,28rem)] text-center">
        <div className="text-2xl font-semibold mb-1">🎂 Birthday Portal</div>
        <p className="text-gray-600 mb-4">Enter your birthday to unlock</p>
        <input
          value={val}
          onChange={(e) => { setVal(e.target.value); setErr(""); }}
          placeholder="10/29/2001"
          className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {err && <div className="mt-2 text-sm text-rose-600">{err}</div>}
        <Button className="mt-4 bg-pink-600 text-white border-pink-600" onClick={check}>Unlock</Button>
      </Card>
    </div>
  );
};

const Hero = () => (
  <Card className="p-6 text-center mb-6 bg-gradient-to-br from-pink-50 to-rose-50">
    <div className="text-sm text-gray-600">{CONFIG.hero.dateLabel}</div>
    <div className="text-3xl md:text-4xl font-bold mt-1">
      Happy Birthday, <span className="text-pink-600">{CONFIG.hero.name}</span> ❤️
    </div>
    <div className="mt-2 text-gray-600">Scroll to explore your surprises ↓</div>
  </Card>
);

/* ---------- Modal shared ---------- */
const Modal = ({ open, onClose, children }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <motion.div
          className="relative w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-xl"
          initial={{ scale: 0.95, y: 12, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 12, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <div className="p-4">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ---------- GiftBox (wrapped colors + custom animations) ---------- */
const WrapperColors = [
  "from-rose-200 to-pink-300",
  "from-fuchsia-200 to-purple-300",
  "from-amber-200 to-yellow-300",
  "from-emerald-200 to-teal-300",
];

/* 1) Bouquet + falling petals */
const RoseGarden = () => {
  // 30–50 petals looks nice. Tweak count for more/less.
  const PETAL_COUNT = 38;

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,       // %
        delay: Math.random() * 2.0,      // s
        dur: 5.5 + Math.random() * 4.0,  // s
        size: 22 + Math.random() * 36,   // px
        sway: 8 + Math.random() * 18,    // px (horizontal drift)
        rotate: Math.random() > 0.5 ? 1 : -1,
      })),
    []
  );

  return (
    <div className="relative rounded-2xl overflow-hidden border border-pink-200 bg-gradient-to-b from-rose-50 via-pink-50 to-white min-h-[360px]">
      <style>{`
        @keyframes fallDown {
          0%   { transform: translate3d(0, -60px, 0) rotate(0deg); opacity: 0; }
          8%   { opacity: 1; }
          100% { transform: translate3d(0, 420px, 0) rotate(180deg); opacity: .95; }
        }
        @keyframes swayX {
          0%   { transform: translateX(0px); }
          50%  { transform: translateX(var(--sway)); }
          100% { transform: translateX(0px); }
        }
      `}</style>

      {/* falling petals */}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((p) => (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.left}%`,
              top: "-60px",
              animation: `fallDown ${p.dur}s linear ${p.delay}s infinite`,
            }}
          >
            <div
              className="will-change-transform"
              style={{
                // extra subtle horizontal drift on top of fall
                animation: `swayX ${3 + Math.random() * 2.2}s ease-in-out ${p.delay}s infinite`,
                // @property used via CSS var
                ["--sway"]: `${p.sway * (Math.random() > 0.5 ? 1 : -1)}px`,
              }}
            >
              <img
                src="/petal.png"
                alt="petal"
                style={{
                  width: `${p.size}px`,
                  height: "auto",
                  transform: `scaleX(${p.rotate})`,
                  filter: "drop-shadow(0 8px 12px rgba(244,63,94,.25))",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* bouquet center */}
      <div className="relative z-10 grid place-items-center py-8">
        <motion.img
          src="/bouquet.png"
          alt="bouquet"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-52 h-auto md:w-64"
          style={{ filter: "drop-shadow(0 12px 18px rgba(244,63,94,.20))" }}
        />
        <div className="mt-3 text-pink-700 font-semibold text-lg">A bouquet of roses for you 🌹</div>
      </div>
    </div>
  );
};


/* 2) Picture gift (drop your photo at /public/us.jpg) */
const PictureGift = ({ src = "/us.jpg" }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
    <img src={src} alt="Us 🥰" className="w-full object-cover max-h-[70vh]" />
  </div>
);

/* 3) Balloon that pops into a WHITE PAINT WATERFALL */
const BalloonWhitePaint = () => {
  const MAX = 24;
  const [clicks, setClicks] = useState(0);
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    if (popped) return;
    if (clicks >= MAX) setPopped(true);
    else setClicks((c) => c + 1);
  };

  const scale = 1 + clicks * 0.05;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-violet-50 p-6 text-center min-h-[320px]">
      <style>{`
        /* main vertical paint streams grow downward */
        @keyframes streamGrow {
          0%   { height: 0px; opacity: .95; }
          80%  { height: 240px; opacity: .95; }
          100% { height: 240px; opacity: .0; }
        }
        /* individual droplets that fall past the streams */
        @keyframes dropFall {
          0%   { transform: translateY(-20px); opacity: .95; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        .paint-stream {
          position: absolute;
          top: 0;
          background: white;
          border-radius: 8px;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,.08));
          animation: streamGrow 900ms ease-out forwards;
        }
        .paint-drop {
          position: absolute;
          top: 0;
          background: white;
          border-radius: 9999px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,.08));
          animation: dropFall 1200ms linear forwards;
        }
      `}</style>

      {!popped ? (
        <>
          <div className="text-sm text-gray-600 mb-2">
          Click me my sexy girl💋 ({clicks}/{MAX})
          </div>
          <motion.div
            onClick={handleClick}
            whileTap={{ scale: 0.97 }}
            animate={{ scale }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="mx-auto select-none cursor-pointer"
            style={{ fontSize: 80 }}
            aria-label="The Boy Toy Junior"
            title="Click me!"
          >
            🍆
          </motion.div>
          <div className="text-xs text-gray-500 mt-2">Grows until you want it all🫦</div>
        </>
      ) : (
        <div className="relative h-[260px]">
          {/* central "pop" flash for 200ms */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-6 -translate-x-1/2 bg-white rounded-full"
            style={{ width: 24, height: 24 }}
          />

          {/* WATERFALL STREAMS */}
          {Array.from({ length: 22 }).map((_, i) => {
            const left = 10 + Math.random() * 80;         // %
            const width = 6 + Math.random() * 14;          // px
            const delay = Math.random() * 0.18;            // s
            const radius = 6 + Math.random() * 10;         // px (rounded ends)
            return (
              <div
                key={`stream-${i}`}
                className="paint-stream"
                style={{
                  left: `calc(${left}% - ${width / 2}px)`,
                  width: `${width}px`,
                  height: 0,
                  borderRadius: `${radius}px`,
                  animationDelay: `${0.18 + delay}s`,
                }}
              />
            );
          })}

          {/* DRIPPING DROPS (some wider for “sheets” of paint) */}
          {Array.from({ length: 44 }).map((_, i) => {
            const left = 8 + Math.random() * 84;           // %
            const size = 6 + Math.random() * 18;           // px
            const delay = 0.25 + Math.random() * 0.5;      // s
            return (
              <div
                key={`drop-${i}`}
                className="paint-drop"
                style={{
                  left: `calc(${left}% - ${size / 2}px)`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}

          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="text-lg font-semibold text-violet-700">You ready to take it all in🤤</div>
          </div>
        </div>
      )}
    </div>
  );
};


/* 4) Cash bundle + falling $100 bills */
const HundredRain = () => {
  const BILL_COUNT = 30;

  const bills = useMemo(
    () =>
      Array.from({ length: BILL_COUNT }).map((_, i) => ({
        id: i,
        left: 6 + Math.random() * 88,         // %
        delay: Math.random() * 1.2,           // s
        dur: 3.0 + Math.random() * 2.2,       // s
        size: 80 + Math.random() * 40,        // px
        tilt: Math.random() * 20 - 10,        // initial angle
        spinDur: 6 + Math.random() * 5,       // s
        spinDir: Math.random() > 0.5 ? 1 : -1,
      })),
    []
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white min-h-[360px]">
      <style>{`
        @keyframes billFall {
          0%   { transform: translate3d(0, -60px, 0) rotate(0deg); opacity: .98; }
          100% { transform: translate3d(0, 460px, 0) rotate(180deg); opacity: .45; }
        }
        @keyframes slowSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* falling bills */}
      <div className="absolute inset-0 pointer-events-none">
        {bills.map((b) => (
          <div
            key={b.id}
            style={{
              position: "absolute",
              left: `${b.left}%`,
              top: "-60px",
              animation: `billFall ${b.dur}s linear ${b.delay}s infinite`,
              transform: `rotate(${b.tilt}deg)`,
            }}
          >
            <img
              src="/bill.png"
              alt="$100 bill"
              style={{
                width: `${b.size}px`,
                height: "auto",
                filter: "drop-shadow(0 10px 16px rgba(16,185,129,.22))",
                animation: `slowSpin ${b.spinDur}s linear infinite`,
                animationDirection: b.spinDir === 1 ? "normal" : "reverse",
              }}
            />
          </div>
        ))}
      </div>

      {/* bundle center */}
      <div className="relative z-10 grid place-items-center py-8">
        <motion.img
          src="/bundle.png"
          alt="cash bundle"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-48 h-auto md:w-56"
          style={{ filter: "drop-shadow(0 14px 20px rgba(16,185,129,.20))" }}
        />
        <div className="mt-3 text-emerald-700 font-semibold text-lg">For your treats, birthday queen 💵</div>
      </div>
    </div>
  );
};


const GiftBox = () => {
  const [active, setActive] = useState(null);

  const wrappers = [
    { title: "Box 1", subtitle: "Open me", grad: WrapperColors[0] }, // Roses
    { title: "Box 2", subtitle: "Open me", grad: WrapperColors[1] }, // Your photo
    { title: "Box 3", subtitle: "Open me", grad: WrapperColors[2] }, // Balloon → white paint
    { title: "Box 4", subtitle: "Open me", grad: WrapperColors[3] }, // $100 shower
  ];

  const renderContent = (i) => {
    switch (i) {
      case 0: return <RoseGarden />;
      case 1: return <PictureGift src={"/us.jpg"} />;
      case 2: return <BalloonWhitePaint />;
      case 3: return <HundredRain />;
      default: return null;
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🎁</span>
        <h3 className="font-semibold text-lg">Baby's Gifts</h3>
      </div>

      {/* Wrapped boxes */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {wrappers.map((w, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${w.grad} h-28 flex flex-col items-center justify-center hover:shadow relative overflow-hidden`}
          >
            {/* ribbon */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-white/70" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-white/70" />
            <div className="relative z-10 text-sm font-medium">{w.title}</div>
            <div className="relative z-10 text-xs opacity-80">{w.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <Modal open={active !== null} onClose={() => setActive(null)}>
        {active !== null && (
          <>
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">Gift {active + 1}</div>
              <Button onClick={() => setActive(null)} className="bg-pink-600 text-white border-pink-600">Close</Button>
            </div>
            {renderContent(active)}
          </>
        )}
      </Modal>
    </Card>
  );
};


/* ---------- 2) Roadmap Timeline ---------- */
const Roadmap = () => {
  const items = CONFIG.timeline;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, items.length - 1));
      if (e.key === "ArrowLeft")  setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🚗</span>
        <h3 className="font-semibold text-lg">Our Journey</h3>
      </div>

      <div className="relative mb-4">
        <div className="h-1.5 rounded-full bg-gray-200" />
        <div
          className="absolute top-0 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"
          style={{ width: `${((idx) / (items.length - 1)) * 100}%` }}
        />
        <div className="mt-3 grid grid-cols-5 text-xs text-center">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`px-2 py-1 rounded-xl border ${i === idx ? "border-pink-500 text-pink-700" : "border-transparent text-gray-500"} hover:border-pink-300`}
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
        className="rounded-2xl border border-pink-200 bg-pink-50/60 p-4"
      >
        <div className="text-sm text-pink-700 font-semibold mb-1">{items[idx].label}</div>
        <div className="text-gray-800">{items[idx].desc}</div>
      </motion.div>

      <div className="mt-4 flex justify-between">
        <Button onClick={() => setIdx((i) => Math.max(i - 1, 0))}>← Prev</Button>
        <Button onClick={() => setIdx((i) => Math.min(i + 1, items.length - 1))}>Next →</Button>
      </div>
    </Card>
  );
};

/* ---------- 3) Harder Mini Game ---------- */
const N = 10; // grid
const OBSTACLES = 15;
const MAX_MOVES = 45;

const useGame = () => {
  const [player, setPlayer] = useState({ r: 0, c: 0 });
  const [target, setTarget] = useState(() => ({ r: Math.floor(Math.random()*N), c: Math.floor(Math.random()*N) }));
  const [rocks, setRocks] = useState(() => {
    const s = new Set();
    while (s.size < OBSTACLES) {
      const r = Math.floor(Math.random()*N), c = Math.floor(Math.random()*N);
      if ((r!==0||c!==0)) s.add(`${r},${c}`);
    }
    return s;
  });
  const [moves, setMoves] = useState(0);
  const [won, setWon]   = useState(false);
  const [lost, setLost] = useState(false);
  const [hint, setHint] = useState("");

  const canMove = (r, c) => r>=0 && r<N && c>=0 && c<N && !rocks.has(`${r},${c}`);

  useEffect(() => {
    const onKey = (e) => {
      if (won || lost) return;
      const dirs = { ArrowUp:[-1,0], ArrowDown:[1,0], ArrowLeft:[0,-1], ArrowRight:[0,1], w:[-1,0], s:[1,0], a:[0,-1], d:[0,1] };
      const d = dirs[e.key];
      if (!d) return;
      const nr = player.r + d[0], nc = player.c + d[1];
      if (canMove(nr, nc)) {
        setPlayer({ r: nr, c: nc });
        setMoves((m) => m + 1);
        const manhattan = Math.abs(nr - target.r) + Math.abs(nc - target.c);
        setHint(manhattan === 0 ? "Found it!" : manhattan <= 2 ? "🔥 Hot" : manhattan <= 4 ? "🌤️ Warm" : "❄️ Cold");
      } else {
        setHint("⛔ Rock!");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [player, target, won, lost, rocks]);

  useEffect(() => {
    if (player.r === target.r && player.c === target.c) setWon(true);
    if (moves >= MAX_MOVES && !won) setLost(true);
  }, [player, target, moves, won]);

  const reset = () => {
    setPlayer({ r: 0, c: 0 });
    setTarget({ r: Math.floor(Math.random()*N), c: Math.floor(Math.random()*N) });
    const s = new Set();
    while (s.size < OBSTACLES) {
      const r = Math.floor(Math.random()*N), c = Math.floor(Math.random()*N);
      if ((r!==0||c!==0)) s.add(`${r},${c}`);
    }
    setRocks(s);
    setMoves(0); setWon(false); setLost(false); setHint("");
  };

  return { player, rocks, moves, won, lost, hint, reset };
};

const HarderMiniGame = () => {
  const { player, rocks, moves, won, lost, hint, reset } = useGame();
  const cells = useMemo(() => Array.from({ length: N*N }, (_, i) => i), []);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🎮</span>
        <h3 className="font-semibold text-lg">Find your way to my Heart</h3>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        Use Arrow Keys or WASD. Avoid rocks ⛔. You have <b>{MAX_MOVES}</b> moves.
      </p>

      <div className="grid grid-cols-10 gap-1 mx-auto w-full max-w-[460px]">
        {cells.map((i) => {
          const r = Math.floor(i / N), c = i % N;
          const isPlayer = r===player.r && c===player.c;
          const isRock = rocks.has(`${r},${c}`);
          return (
            <div
              key={i}
              className={
                "aspect-square rounded-md border flex items-center justify-center text-sm " +
                (isRock ? "bg-gray-300 border-gray-400" : "bg-gray-50 border-gray-200")
              }
            >
              {isPlayer ? "🧑🏻‍💻" : ""}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-700">
          Moves: <span className="font-semibold">{moves}/{MAX_MOVES}</span>
        </div>
        <div className="flex gap-3 items-center">
          {hint && <span className="text-sm">{hint}</span>}
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>

      <AnimatePresence>
        {(won || lost) && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className={`mt-4 p-3 rounded-xl border ${won ? "bg-pink-50 border-pink-200 text-pink-700" : "bg-rose-50 border-rose-200 text-rose-700"}`}>
            {won ? "You found my heart! Good job Bably and Happy Birthday! 💖" : "Out of moves! Try again 💫"}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

/* ---------- 4) Love Letter (envelope -> modal -> type) ---------- */
const Typewriter = ({ text, speed=70 }) => {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setOut(text.slice(0, ++i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return <span className="whitespace-pre-wrap">{out}</span>;
};

const LoveLetterFancy = () => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-6 text-center">
      <div className="mb-3 text-lg font-semibold">A Letter for You</div>
      <button
        onClick={() => setOpen(true)}
        className="mx-auto w-40 h-28 relative group"
        aria-label="Open envelope"
      >
        <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-inner" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-rose-300 rounded-t-lg [clip-path:polygon(0_0,100%_0,50%_100%)] group-hover:-translate-y-0.5 transition" />
        <div className="absolute inset-2 rounded bg-rose-50 flex items-center justify-center text-2xl">💌</div>
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center mb-2 text-lg font-semibold">💌 Happy Birthday, {CONFIG.hero.name}</div>
        <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-left leading-relaxed">
          <Typewriter text={`${CONFIG.letter.body}\n\n${CONFIG.letter.signature}`} />
        </div>
        <div className="mt-4 text-right">
          <Button onClick={() => setOpen(false)} className="bg-pink-600 text-white border-pink-600">Close</Button>
        </div>
      </Modal>
    </Card>
  );
};

/* ---------- MAIN APP (this is what you were missing) ---------- */
export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) return <BirthdayGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pb-16">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Hero />

        <section id="giftbox" className="mb-6">
          <GiftBox />
        </section>

        <section id="timeline" className="mb-6">
          <Roadmap />
        </section>

        <section id="minigame" className="mb-6">
          <HarderMiniGame />
        </section>

        <section id="letter" className="mb-6">
          <LoveLetterFancy />
        </section>

        <div className="text-center text-xs text-gray-500 mt-8">{CONFIG.footerNote}</div>
      </div>
    </div>
  );
}
