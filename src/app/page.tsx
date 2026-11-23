import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-4 py-6 sm:py-12">
      {/* 와이어프레임의 둥근 테두리 카드 */}
      <div className="flex w-full max-w-md flex-col rounded-3xl border-2 border-foreground/80 px-6 pt-12 pb-16 sm:px-10">
        <Profile name={profile.name} bio={profile.bio} image={profile.image} />

        <ul className="mt-16 flex flex-col gap-7">
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
