import styles from "./Popover.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

function Popover({ children }) {
    return <div className={cn("wrapper")}>{children}</div>;
}

export default Popover;
