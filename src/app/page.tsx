import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative flex flex-1 justify-center overflow-hidden px-6 pt-20 pb-24 sm:pt-28">
      {/* 글래스 카드 뒤로 은은하게 비치는 빛 번짐 (장식) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-[#ffe3cc]/70 blur-3xl" />
        <div className="absolute top-[55%] -right-32 size-80 rounded-full bg-[#f8c9ad]/40 blur-3xl" />
        <div className="absolute top-[40%] -left-32 size-72 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="flex w-full max-w-[400px] flex-col">
        <Profile name={profile.name} bio={profile.bio} image={profile.image} />

        <ul className="mt-12 flex flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
