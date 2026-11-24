export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 (예: "/profile.jpg") */
  image: string;
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값입니다. 나중에 실제 내용으로 교체하세요.
export const profile: ProfileData = {
  name: "이재성",
  bio: "놀고 싶어요",
  image: "/leejaesung.jpg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
