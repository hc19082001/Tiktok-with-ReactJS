import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import logo from "../../../assets/image/logo.svg";
import plus from "../../../assets/image/plus.svg";
import more from "../../../assets/image/more.svg";
import search from "../../../assets/image/search.svg";

import { useState } from "react";

import Popover_Search from "../../Popover_Search";
import Button from "../Button";
import Popover_Setting from "../../Popover_Setting";

const cn = classNames.bind(styles);

function Header() {
    const [popover_search, setPopover_search] = useState(false);

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
                    <Button primary to="/">
                        Log in
                    </Button>

                    <div className={cn("setting")}>
                        <img src={more} className={cn("more-btn")} />
                        <div className={cn("setting-popover")}>
                            <Popover_Setting />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
