import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import logo from "../../../../assets/image/logo.svg";
import Popover from "../Popover";
import AccountItem from "../AccountItem";
import { useState, useRef } from "react";
import Button from "../Button";
import plus from "../../../../assets/image/plus.svg";

const cn = classNames.bind(styles);

function Header() {
    const [Appear, setAppear] = useState(false);

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
                                ? setAppear(true)
                                : setAppear(false)
                        }
                    />
                    <button className={cn("clear-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cn("load")} icon={faSpinner} />
                    <button className={cn("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    {Appear && (
                        <div className={cn("popover")}>
                            <Popover>
                                <p className={cn("pop-label")}>Accounts</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Popover>
                        </div>
                    )}
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
                </div>
            </div>
        </header>
    );
}

export default Header;
