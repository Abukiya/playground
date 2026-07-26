import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

const COLS = 30;
const ROWS = 20;
const CELL_SIZE = 32;

export default function MetalFilings() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const scaleX = (COLS * CELL_SIZE) / rect.width;
      const scaleY = (ROWS * CELL_SIZE) / rect.height;
      setMousePos({
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      });
    });
  }, []);

  const filings = useMemo(() => {
    const items: { x: number; y: number; row: number; col: number }[] = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        items.push({
          x: col * CELL_SIZE + CELL_SIZE / 2,
          y: row * CELL_SIZE + CELL_SIZE / 2,
          row,
          col,
        });
      }
    }
    return items;
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-zinc-950 flex items-center justify-center"
      onMouseMove={onMove}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-zinc-500 text-sm font-mono pointer-events-none z-10">
        move your cursor
      </div>
      <svg
        ref={svgRef}
        width={COLS * CELL_SIZE}
        height={ROWS * CELL_SIZE}
        viewBox={`0 0 ${COLS * CELL_SIZE} ${ROWS * CELL_SIZE}`}
      >
        {filings.map((f) => (
          <MetalFiling key={`${f.row}-${f.col}`} filing={f} mousePos={mousePos} />
        ))}
      </svg>
    </div>
  );
}

function MetalFiling({
  filing,
  mousePos,
}: {
  filing: { x: number; y: number };
  mousePos: { x: number; y: number };
}) {
  const angle = useMemo(() => {
    const dx = mousePos.x - filing.x;
    const dy = mousePos.y - filing.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }, [mousePos.x, mousePos.y, filing.x, filing.y]);

  const dist = useMemo(() => {
    const dx = mousePos.x - filing.x;
    const dy = mousePos.y - filing.y;
    return Math.sqrt(dx * dx + dy * dy);
  }, [mousePos.x, mousePos.y, filing.x, filing.y]);

  const opacity = useMemo(() => {
    const maxDist = 500;
    return Math.max(0.15, 1 - dist / maxDist);
  }, [dist]);

  const scale = useMemo(() => {
    const minScale = 0.6;
    const maxScale = 1.2;
    const maxDist = 500;
    const t = Math.max(0, 1 - dist / maxDist);
    return minScale + t * (maxScale - minScale);
  }, [dist]);

  return (
    <motion.line
      x1={filing.x - 10}
      y1={filing.y}
      x2={filing.x + 10}
      y2={filing.y}
      stroke={`rgba(180, 200, 220, ${opacity})`}
      strokeWidth={1.5}
      strokeLinecap="round"
      animate={{
        rotate: angle,
        scaleX: scale,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      style={{
        transformBox: "fill-box",
        originX: "50%",
        originY: "50%",
      }}
    />
  );
}
