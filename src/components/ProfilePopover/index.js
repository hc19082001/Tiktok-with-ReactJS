import classNames from "classnames/bind";

import styles from "./ProfilePopover.module.scss";
import Popover from "../common/Popover";
import Button from "../common/Button";

import check from "../../assets/image/header/check.svg";

const cn = classNames.bind(styles);

function ProfilePopover({ className, userInfor }) {
    return (
        <Popover className={cn("wrapper", { [className]: className })}>
            <div className={cn("header")}>
                <img className={cn("avt")} alt="img" src={userInfor.avatar} />
                <Button className={cn("follow")} primary>
                    Follow
                </Button>
            </div>
            <Button className={cn("username")}>
                {userInfor.username}
                {userInfor.badge && (
                    <img className={cn("check")} src={check} alt="img" />
                )}
            </Button>
            <p className={cn("name")}>{userInfor.name}</p>
            <div className={cn("number-des")}>
                <span className={cn("num")}>{userInfor.followers}</span>
                <span className={cn("label")}>Followers</span>
                <span className={cn("num")}>{userInfor.likes}</span>
                <span className={cn("label")}>Likes</span>
            </div>
        </Popover>
    );
}

export default ProfilePopover;
