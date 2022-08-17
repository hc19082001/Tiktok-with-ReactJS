import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import check from "../../assets/image/check.svg";

const cn = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cn("account")}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/59209962d93e20c7424ea5c42b18381b~c5_100x100.jpeg?x-expires=1660795200&x-signature=fwJHNBmYuiVJpXQAXYuhKlgDiuM%3D"
                alt="account"
                className={cn("avt")}
            />
            <div className={cn("infor")}>
                <h4>
                    cuongnguyen123
                    <img src={check} />
                </h4>
                <p>Nguyễn Cường</p>
            </div>
        </div>
    );
}

export default AccountItem;
