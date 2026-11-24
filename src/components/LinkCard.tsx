type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-[18px] text-center text-[15px] font-medium tracking-[-0.01em] text-ink shadow-[0_1px_2px_rgba(120,72,40,0.05),0_10px_30px_-14px_rgba(120,72,40,0.22),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(120,72,40,0.06),0_14px_34px_-14px_rgba(120,72,40,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b493] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcf0e4] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
