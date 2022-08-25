import classNames from "classnames/bind";
import styles from "./Header_Popover_Setting.module.scss";

import back from "../../../assets/image/header/back.svg";
const cn = classNames.bind(styles);

function Header_Popover_Setting({ title, onClick }) {
    return (
        <div className={cn("popover-hd")}>
            <img className={cn("popover-img")} src={back} onClick={onClick} />
            <p className={cn("popover-title")}>{title}</p>
        </div>
    );
}

export default Header_Popover_Setting;
