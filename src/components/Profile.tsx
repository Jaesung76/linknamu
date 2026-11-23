import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative size-52 overflow-hidden rounded-full border-2 border-foreground/80 sm:size-60">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          fill
          sizes="240px"
          className="object-cover"
          unoptimized={image.endsWith(".svg")}
          priority
        />
      </div>
      <h1 className="mt-8 text-lg font-semibold sm:text-xl">{name}</h1>
      <p className="mt-2 text-sm text-foreground/70 sm:text-base">{bio}</p>
    </section>
  );
}
