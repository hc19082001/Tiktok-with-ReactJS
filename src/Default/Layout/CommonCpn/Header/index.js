import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

function Header() {
    return (
        <header className={cn("header")}>
            <div className={cn("content")}>
                <h1>Header</h1>
            </div>
        </header>
    );
}

export default Header;
