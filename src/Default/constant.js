import keyboard from "../assets/image/header/keyboard.svg";
import lang from "../assets/image/header/lang.svg";
import question from "../assets/image/header/question.svg";
import profile from "../assets/image/header/profile.svg";
import coin from "../assets/image/header/coin.svg";
import setting from "../assets/image/header/setting.svg";

import difference from "../assets/image/sidebar/difference.svg";
import music from "../assets/image/sidebar/music.svg";

import { Follow, Live, Home } from "../assets/image/sidebar/SideBarIcon";

export const MENU_SETTING = [
    {
        option: "English",
        icon: lang,
        sub_menu: {
            title: "Language",
            list: [
                {
                    option: "English",
                    to: "/",
                    href: ""
                },
                {
                    option: "العربية",
                    to: "/",
                    href: ""
                },
                {
                    option: "বাঙ্গালি (ভারত)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Cebuano (Pilipinas)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Čeština (Česká republika)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Deutsch",
                    to: "/",
                    href: ""
                },
                {
                    option: "Ελληνικά (Ελλάδα)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Suomi (Suomi)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Français",
                    to: "/",
                    href: ""
                },
                {
                    option: "Suomi (Suomi)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Filipino (Pilipinas)",
                    to: "/",
                    href: ""
                },
                {
                    option: "עברית (ישראל)",
                    to: "/",
                    href: ""
                },
                {
                    option: "हिंदी",
                    to: "/",
                    href: ""
                },
                {
                    option: "Magyar (Magyarország)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Bahasa Indonesia (Indonesia)",
                    to: "/",
                    href: ""
                },
                {
                    option: "Italiano (Italia)",
                    to: "/",
                    href: ""
                },
                {
                    option: "日本語（日本）",
                    to: "/",
                    href: ""
                },
                {
                    option: "မြန်မာ (မြန်မာ)",
                    to: "/",
                    href: ""
                }
            ]
        }
    },
    {
        option: "Feedback and help",
        href: "",
        icon: question,
        to: "/feedback"
    },
    {
        option: "Keyboard shortcuts",
        href: "",
        icon: keyboard,
        to: "/"
    }
];

export const MENU_SETTING_USER = [
    {
        option: "View Profile",
        href: "",
        icon: profile,
        to: "/"
    },
    {
        option: "Get coins",
        href: "",
        icon: coin,
        to: "/"
    },
    {
        option: "Settings",
        href: "",
        icon: setting,
        to: "/"
    }
];

export const MAIN_NAV_SIDEBAR = [
    {
        title: "For You",
        icon: Home
    },
    {
        title: "Following",
        icon: Follow
    },
    {
        title: "LIVE",
        icon: Live
    }
];

export const DICOVER_SECTION = [
    {
        title: "suthatla",
        icon: difference
    },
    {
        title: "mackedoi",
        icon: difference
    },
    {
        title: "sansangthaydoi",
        icon: difference
    },
    {
        title: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n",
        icon: music
    },
    {
        title: "Nghe lời mẹ ru - NSND Bạch Tuyết & Hứa Kim Tuyền",
        icon: music
    },
    {
        title: "Thiên Thần Tình Yêu - RICKY STAR",
        icon: music
    },
    {
        title: "7749hieuung",
        icon: difference
    },
    {
        title: "genzlife",
        icon: difference
    },
    {
        title: "Tình Đã Đầy Một Tim - Huyền Tâm Môn",
        icon: music
    },
    {
        title: "Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham",
        icon: music
    }
];

export const FOOTER = [
    [
        {
            title: "About",
            href: "",
            to: ""
        },
        {
            title: "Tiktok Browse",
            href: "",
            to: ""
        },
        {
            title: "Newsroom",
            href: "",
            to: ""
        },
        {
            title: "Contact",
            href: "",
            to: ""
        },
        {
            title: "Careers",
            href: "",
            to: ""
        },
        {
            title: "ByteDance",
            href: "",
            to: ""
        }
    ],
    [
        {
            title: "TikTok for Good",
            href: "",
            to: ""
        },
        {
            title: "Advertise",
            href: "",
            to: ""
        },
        {
            title: "Developers",
            href: "",
            to: ""
        },
        {
            title: "Transparency",
            href: "",
            to: ""
        },
        {
            title: "TikTok Rewards",
            href: "",
            to: ""
        }
    ],
    [
        {
            title: "Help",
            href: "",
            to: ""
        },
        {
            title: "Safety",
            href: "",
            to: ""
        },
        {
            title: "Terms",
            href: "",
            to: ""
        },
        {
            title: "Privacy",
            href: "",
            to: ""
        },
        {
            title: "Creator Portal",
            href: "",
            to: ""
        },
        {
            title: "Community Guidelines",
            href: "",
            to: ""
        }
    ]
];

export const USERS = [
    {
        username: "mot.ban.tinh.ca",
        name: "Một Bản Tình Ca 🎼",
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/59209962d93e20c7424ea5c42b18381b~c5_100x100.jpeg?x-expires=1660795200&x-signature=fwJHNBmYuiVJpXQAXYuhKlgDiuM%3D",
        followers: "3.3M",
        badge: true,
        likes: "205M"
    },
    {
        username: "Theanh28entertainment",
        name: "Theanh28 Entertainment",
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661605200&x-signature=WYqFulYHMmf8%2F3RjkrmuxMRmV4Q%3D",
        badge: true,
        followers: "7M",
        likes: "452.7M"
    },
    {
        username: "Superenglish294",
        name: "SuperEnglish",
        avatar: "https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c864608d5479e28da5d4473858662ed5.jpeg?x-expires=1661605200&x-signature=%2Bs70gAQSx1W2%2FjRM113eFdtt%2BK8%3D",
        badge: true,
        followers: "2M",
        likes: "97M"
    },
    {
        username: "dkawn.me",
        name: "𝘿𝙆𝙖𝙬𝙣ッ",
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1661605200&x-signature=ejFcO%2FRCvLpqPuN0%2F90kGOnk7G4%3D",
        followers: "7K",
        badge: true,
        likes: "400K"
    },
    {
        username: "kienreview90",
        name: "Kien Review",
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9feca543a0a96156cd995c0f3f2a1cb~c5_100x100.jpeg?x-expires=1661605200&x-signature=IsLvDKkMQI%2FfMAt6XTyRk1YpFwY%3D",
        badge: true,
        followers: "10M",
        likes: "196.1M"
    }
];
