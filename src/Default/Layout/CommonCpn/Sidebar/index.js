import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cn = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cn("sidebar")}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;
