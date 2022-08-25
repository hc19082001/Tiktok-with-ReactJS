import classNames from "classnames/bind";
import AccountItem from "../../AccountItem";
import Button from "../Button";
import Sidebar_DivSecondary from "./Sidebar_FrameSecondary";
import MainBar from "./MainBar";
import styles from "./Sidebar.module.scss";

import { DICOVER_SECTION } from "../../../Default/constant";
import Sidebar_Footer from "./Sidebar_Footer";

const cn = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cn("sidebar")}>
            <MainBar />
            <Sidebar_DivSecondary title="Suggested accounts" seeall>
                <AccountItem bold smdes />
                <AccountItem bold smdes />
                <AccountItem bold smdes />
            </Sidebar_DivSecondary>
            <Sidebar_DivSecondary title="Following accounts" seeall>
                <AccountItem bold smdes />
                <AccountItem bold smdes />
                <AccountItem bold smdes />
            </Sidebar_DivSecondary>
            <Sidebar_DivSecondary title="Discover">
                <div className={cn("tag")}>
                    {DICOVER_SECTION.map(({ title, icon }, index) => (
                        <Button
                            key={index}
                            outline
                            leftIcon={icon}
                            className={cn("tag-btn")}
                        >
                            <p className={cn("text-hidden-overflow")}>
                                {title}
                            </p>
                        </Button>
                    ))}
                </div>
            </Sidebar_DivSecondary>
            <Sidebar_DivSecondary>
                <Sidebar_Footer />
            </Sidebar_DivSecondary>
        </aside>
    );
}

export default Sidebar;
