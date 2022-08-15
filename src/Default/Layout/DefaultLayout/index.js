import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../CommonCpn/Header";
import Sidebar from "../CommonCpn/Sidebar";

const cn = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cn("wrapper")}>
            <Header />
            <div className={cn("container")}>
                <Sidebar />
                <div className={cn("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
