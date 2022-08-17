import styles from "./Popover.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

function Popover({ children, className }) {
    return <div className={cn("wrapper", [className])}>{children}</div>;
}

export default Popover;
