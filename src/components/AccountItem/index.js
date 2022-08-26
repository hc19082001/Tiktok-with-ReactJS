import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import check from "../../assets/image/header/check.svg";

const cn = classNames.bind(styles);

function AccountItem({ bold, smdes, userInfor, onMouseEnter, onMouseLeave }) {
    return (
        <div
            className={cn("account")}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img src={userInfor.avatar} alt="account" className={cn("avt")} />
            <div className={cn("infor")}>
                <h4 className={cn({ bold })}>
                    {userInfor.username}
                    {userInfor.badge && <img src={check} alt="img" />}
                </h4>
                <p className={cn({ smdes })}>{userInfor.name}</p>
            </div>
        </div>
    );
}

export default AccountItem;
