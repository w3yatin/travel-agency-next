type TeamItem = {
    img: string;
    name: string;
    position: string;
    description: string;
    slug: string;
    socialLinks: SocialLink[];
};

type SocialLink = {
    href: string;
    icon: string;
};
       