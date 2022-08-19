import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import logo from "../../../assets/image/logo.svg";
import plus from "../../../assets/image/plus.svg";
import more from "../../../assets/image/more.svg";
import search from "../../../assets/image/search.svg";
import send from "../../../assets/image/send.svg";
import message from "../../../assets/image/message.svg";

import { useState } from "react";

import Popover_Search from "../../Popover_Search";
import Button from "../Button";
import Popover_Setting from "../../Popover_Setting";
import { MENU_SETTING, MENU_SETTING_USER } from "../../../Default/constant";
import PopUpNotification from "../PopUpNotification";

const cn = classNames.bind(styles);

function Header() {
    const [popover_search, setPopover_search] = useState(false);
    const [isLogIn, setIsLogIn] = useState(true);

    const handleLogOut = () => {
        setIsLogIn(false);
    };

    const handleLogIn = () => {
        setIsLogIn(true);
    };

    console.log([...MENU_SETTING_USER, ...MENU_SETTING]);

    return (
        <header className={cn("header")}>
            <div className={cn("content")}>
                <img src={logo} alt="Tiktok" />
                <div className={cn("search")}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) =>
                            e.target.value !== ""
                                ? setPopover_search(true)
                                : setPopover_search(false)
                        }
                    />
                    <button className={cn("clear-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cn("load")} icon={faSpinner} />
                    <button className={cn("search-btn")}>
                        <img src={search} />
                    </button>
                    {popover_search && <Popover_Search />}
                </div>

                <div className={cn("actions")}>
                    <Button
                        outline
                        className={cn("size-upload-btn")}
                        leftIcon={plus}
                        to="/"
                    >
                        Upload
                    </Button>

                    {isLogIn ? (
                        <>
                            <div className={cn("message-icon")}>
                                <img src={send}></img>
                                <PopUpNotification
                                    className={cn("number-notifi")}
                                >
                                    9
                                </PopUpNotification>
                            </div>
                            <div className={cn("send-icon")}>
                                <img src={message}></img>
                                <PopUpNotification
                                    className={cn("number-notifi")}
                                >
                                    5
                                </PopUpNotification>
                            </div>
                            <div className={cn("setting")}>
                                <img
                                    src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/f0a142d7c5d563cbefbedaf71546e039.jpeg?x-expires=1661058000&x-signature=Z95oKTocZeWDwvc7gAuFYg2xyVk%3D"
                                    className={cn("avt")}
                                />
                                <div className={cn("setting-popover")}>
                                    <Popover_Setting
                                        menu={[
                                            ...MENU_SETTING_USER,
                                            ...MENU_SETTING
                                        ]}
                                        logIn
                                        onHandleLogOut={handleLogOut}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleLogIn} primary to="/">
                                Log in
                            </Button>

                            <div className={cn("setting")}>
                                <img src={more} className={cn("more-btn")} />
                                <div className={cn("setting-popover")}>
                                    <Popover_Setting menu={MENU_SETTING} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
