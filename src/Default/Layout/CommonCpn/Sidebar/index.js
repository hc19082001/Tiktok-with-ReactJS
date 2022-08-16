import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cn = classNames.bind(styles);

function Sidebar() {
    return <aside className={cn("sidebar")}></aside>;
}

export default Sidebar;
