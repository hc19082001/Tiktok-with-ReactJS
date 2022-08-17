import classNames from "classnames/bind";
import styles from "./Popover_Search.module.scss";
import AccountItem from "../AccountItem";
import Popover from "../common/Popover";

const cn = classNames.bind(styles);

function Popover_Search() {
    return (
        <div className={cn("popover")}>
            <Popover>
                <p className={cn("pop-label")}>Accounts</p>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </Popover>
        </div>
    );
}

export default Popover_Search;
