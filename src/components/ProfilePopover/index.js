import classNames from "classnames/bind";

import styles from "./ProfilePopover.module.scss";
import Popover from "../common/Popover";
import Button from "../common/Button";

import check from "../../assets/image/header/check.svg";

const cn = classNames.bind(styles);

function ProfilePopover() {
    return (
        <Popover className={cn("wrapper")}>
            <div className={cn("header")}>
                <img
                    className={cn("avt")}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/59209962d93e20c7424ea5c42b18381b~c5_100x100.jpeg?x-expires=1660795200&x-signature=fwJHNBmYuiVJpXQAXYuhKlgDiuM%3D"
                />
                <Button className={cn("follow")} primary>
                    Follow
                </Button>
            </div>
            <Button className={cn("username")}>
                cuongnguyen123 <img className={cn("check")} src={check} />
            </Button>
            <p className={cn("name")}>Nguyễn Cường</p>
            <div className={cn("number-des")}>
                <span className={cn("num")}>2.8M</span>
                <span className={cn("label")}>Followers</span>
                <span className={cn("num")}>1.8M</span>
                <span className={cn("label")}>Likes</span>
            </div>
        </Popover>
    );
}

export default ProfilePopover;
