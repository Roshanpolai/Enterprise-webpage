const lineProps = {
  fill: "none",
  stroke: "#f0bd8a",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function CashewAppleSketch({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 180" {...lineProps}>
      {/* fruit */}
      <path d="M44 0C20 22 6 62 20 96c12 28 44 38 70 30 34-10 52-44 44-82-3-18-10-32-18-44" />
      {/* soft ribs */}
      <path d="M64 6C48 34 44 70 56 100M92 2c-10 30-10 62 0 96" />
      {/* dotted edge */}
      <path d="M122 14c10 28 8 58-6 82" strokeDasharray="1 6" strokeWidth="3" />
      {/* nut hanging from the fruit */}
      <path d="M96 122c6-10 22-14 36-8 18 8 28 28 22 44-6 14-22 20-34 12-10-6-8-18 2-22 8-4 8-12 2-18-8-6-18-4-28-8z" />
      <path d="M108 128c8 2 16 8 20 16" strokeDasharray="1 6" strokeWidth="3" />
    </svg>
  );
}

export function LeafSketch({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 140" {...lineProps}>
      <path d="M4 136C10 60 70 8 214 10c-2 76-62 126-210 126z" />
      <path d="M8 132C80 92 150 54 210 14" />
      <path
        d="M38 112l-4-30M62 100l-2-34M88 84l2-34M114 68l8-30M142 52l16-24M50 106l24 8M78 92l26 10M106 76l26 10M134 60l26 8"
        strokeWidth="1.4"
      />
    </svg>
  );
}