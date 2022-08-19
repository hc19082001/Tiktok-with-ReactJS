import keyboard from "../assets/image/keyboard.svg";
import lang from "../assets/image/lang.svg";
import question from "../assets/image/question.svg";
import profile from "../assets/image/profile.svg";
import coin from "../assets/image/coin.svg";
import setting from "../assets/image/setting.svg";

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
