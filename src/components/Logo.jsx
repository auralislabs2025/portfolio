export default function Logo({ className = '', size = 32 }) {
  const aspectRatio = 735 / 593;
  const width = Math.round(size * aspectRatio);

  return (
    <img
      src="/logo.svg"
      alt="Auralis Labs"
      width={width}
      height={size}
      className={`logo-glow ${className}`.trim()}
      style={{ background: 'transparent' }}
    />
  );
}
