/**
 * Same soft mesh as the home hero (lavender / pink / cyan blurs).
 * Use behind nav + main content for consistent landing branding.
 */
export default function MeshGradient({
  className = "opacity-100",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    >
      <div
        className="absolute -top-32 left-[10%] h-[420px] w-[520px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(165, 155, 240, 0.72) 0%, transparent 72%)",
        }}
      />
      <div
        className="absolute -top-24 right-[5%] h-[380px] w-[480px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 185, 215, 0.66) 0%, transparent 72%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(140, 205, 235, 0.62) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
