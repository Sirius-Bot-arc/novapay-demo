export default function Flower({ size = 120, className = "" }: { size?: number; className?: string }) {
  const id = `g${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="50%" cy="20%" r="80%">
          <stop offset="0" stopColor="#f9d3ee" /><stop offset="1" stopColor="#8b7bff" stopOpacity=".55" />
        </radialGradient>
      </defs>
      <g style={{ filter: "drop-shadow(0 0 6px rgba(244,166,215,.55))" }}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="50" cy="28" rx="9" ry="22" fill={`url(#${id})`} transform={`rotate(${r} 50 50)`} opacity=".9" />
        ))}
        <circle cx="50" cy="50" r="7" fill="#fff4c9" />
      </g>
    </svg>
  );
}
