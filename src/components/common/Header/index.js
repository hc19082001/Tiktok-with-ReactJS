import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import logo from "../../../assets/image/header/logo.svg";
import plus from "../../../assets/image/header/plus.svg";
import more from "../../../assets/image/header/more.svg";
import search from "../../../assets/image/header/search.svg";
import send from "../../../assets/image/header/send.svg";
import message from "../../../assets/image/header/message.svg";

import { useState, useRef } from "react";

import Popover_Search from "../../Popover_Search";
import Button from "../Button";
import Popover_Setting from "../../Popover_Setting";
import { MENU_SETTING, MENU_SETTING_USER } from "../../../Default/constant";
import PopUpNotification from "../PopUpNotification";
import Tooltip from "../Tooltip";

const cn = classNames.bind(styles);

function Header() {
    const [popover_search, setPopover_search] = useState(false);
    const [isLogIn, setIsLogIn] = useState(true);
    const [isAppear, setIsAppear] = useState(false);
    const [clearBtn, setClearBtn] = useState(false);

    const id = useRef();
    const input = useRef();

    const handleChangeText = (e) => {
        if (e.target.value) {
            setPopover_search(true);
            setClearBtn(true);
        } else {
            setPopover_search(false);
            setClearBtn(false);
        }
    };

    const handleDeleteText = () => {
        input.current.value = "";
        setClearBtn(false);
        setPopover_search(false);
    };

    const handleLogOut = () => {
        setIsLogIn(false);
        setIsAppear(false);
    };

    const handleLogIn = () => {
        setIsLogIn(true);
    };

    const handleMouseEnter = () => {
        setIsAppear(true);
    };

    const handleMouseLeave = () => {
        id.current = setTimeout(() => {
            setIsAppear(false);
        }, 700);
    };

    const handleMouseBack = () => {
        clearTimeout(id.current);
    };

    console.log([...MENU_SETTING_USER, ...MENU_SETTING]);

    return (
        <header className={cn("header")}>
            <div className={cn("content")}>
                <img src={logo} alt="Tiktok" />
                <div className={cn("search")}>
                    <input
                        ref={input}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChangeText}
                    />
                    {clearBtn && (
                        <button
                            className={cn("clear-btn")}
                            onClick={handleDeleteText}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className={cn("load")} icon={faSpinner} /> */}
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
                                <div className={cn("tooltip-messages")}>
                                    <Tooltip>Messages</Tooltip>
                                </div>
                            </div>
                            <div className={cn("send-icon")}>
                                <img src={message}></img>
                                <PopUpNotification
                                    className={cn("number-notifi")}
                                >
                                    99+
                                </PopUpNotification>
                                <div className={cn("tooltip-inbox")}>
                                    <Tooltip>Inbox</Tooltip>
                                </div>
                            </div>

                            <div
                                className={cn("setting")}
                                onMouseLeave={handleMouseLeave}
                                onMouseEnter={handleMouseEnter}
                            >
                                <img
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/f0a142d7c5d563cbefbedaf71546e039.jpeg?x-expires=1661752800&x-signature=TKGQbnQcVBim1DyC3jCXcpg3yvo%3D"
                                    className={cn("avt")}
                                />

                                <div
                                    className={cn("setting-popover")}
                                    onMouseEnter={handleMouseBack}
                                >
                                    {isAppear && (
                                        // eslint-disable-next-line react/jsx-pascal-case
                                        <Popover_Setting
                                            menu={[
                                                ...MENU_SETTING_USER,
                                                ...MENU_SETTING
                                            ]}
                                            logIn
                                            onHandleLogOut={handleLogOut}
                                        />
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleLogIn} primary to="/">
                                Log in
                            </Button>

                            <div
                                className={cn("setting")}
                                onMouseLeave={handleMouseLeave}
                                onMouseEnter={handleMouseEnter}
                            >
                                <img src={more} className={cn("more-btn")} />

                                <div
                                    className={cn("setting-popover")}
                                    onMouseEnter={handleMouseBack}
                                >
                                    {isAppear && (
                                        <Popover_Setting menu={MENU_SETTING} />
                                    )}
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
