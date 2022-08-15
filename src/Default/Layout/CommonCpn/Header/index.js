import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import logo from "../../../../assets/image/logo.svg";

const cn = classNames.bind(styles);

function Header() {
    return (
        <header className={cn("header")}>
            <div className={cn("content")}>
                <img src={logo} alt="Tiktok" />
                <div className={cn("search")}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    <button className={cn("clear-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cn("load")} icon={faSpinner} />
                    <button className={cn("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cn("actions")}></div>
            </div>
        </header>
    );
}

export default Header;
