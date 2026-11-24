import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-white/80 p-1.5 shadow-[0_2px_6px_rgba(120,72,40,0.10),0_18px_40px_-12px_rgba(140,80,45,0.35)]">
        <div className="relative size-28 overflow-hidden rounded-full sm:size-32">
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            className="object-cover object-top"
            unoptimized={image.endsWith(".svg")}
            priority
          />
          {/* 안쪽 하이라이트·음영으로 입체감 */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.35),inset_0_-6px_14px_rgba(60,30,10,0.12)]"
          />
        </div>
      </div>

      <h1 className="mt-7 text-[22px] font-semibold tracking-[-0.02em] text-ink">
        {name}
      </h1>
      <p className="mt-2 max-w-[28ch] text-[15px] leading-relaxed text-ink-soft">
        {bio}
      </p>
    </section>
  );
}
