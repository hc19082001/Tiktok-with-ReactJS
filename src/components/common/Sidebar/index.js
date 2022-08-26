/* eslint-disable react/jsx-pascal-case */
import classNames from "classnames/bind";
import AccountItem from "../../AccountItem";
import Button from "../Button";
import Sidebar_DivSecondary from "./Sidebar_FrameSecondary";
import MainBar from "./MainBar";
import styles from "./Sidebar.module.scss";

import { DICOVER_SECTION, USERS } from "../../../Default/constant";
import Sidebar_Footer from "./Sidebar_Footer";
import ProfilePopover from "../../ProfilePopover";
import { createContext, useRef, useState } from "react";

const cn = classNames.bind(styles);
export const TopPosition = createContext();

function Sidebar() {
    let idLeave = useRef();
    let idHover = useRef();

    const [Profile, setProfile] = useState({
        index: -1,
        user: null
    });

    const handleHover = (user, index) => {
        idHover.current = setTimeout(() => {
            setProfile({
                index,
                user
            });
        }, 1000);
    };

    const handleLeave = () => {
        console.log("Bo hover khoi item");
        clearTimeout(idHover.current);
        if (Profile.index !== -1) {
            console.log("Thiet lap 1s sau profile bien mat");
            clearTimeout(idLeave.current);
            idLeave.current = setTimeout(() => {
                setProfile({
                    index: -1,
                    user: null
                });
            }, 1000);
        }
    };

    const handleProfileEnter = () => {
        console.log("Hoveer vào profile, bo thiet lap bien mat");
        clearTimeout(idLeave.current);
    };

    const handleProfileLeave = () => {
        console.log("Roi khoi profile");
        setProfile({
            index: -1,
            user: null
        });
    };
    return (
        <aside className={cn("sidebar")}>
            <MainBar />

            <Sidebar_DivSecondary title="Suggested accounts" seeall>
                <div className={cn("container")}>
                    {USERS.map((user, index) => (
                        <AccountItem
                            onMouseEnter={() => handleHover(user, index)}
                            onMouseLeave={handleLeave}
                            bold
                            smdes
                            userInfor={user}
                            key={index}
                        />
                    ))}

                    {Profile.index === -1 || (
                        <TopPosition.Provider
                            value={{
                                top: `${(Profile.index + 1) * 57}px`,
                                onMouseLeave: handleProfileLeave,
                                onMouseEnter: handleProfileEnter
                            }}
                        >
                            <ProfilePopover
                                className={cn("profile-popover")}
                                userInfor={Profile.user}
                            />
                        </TopPosition.Provider>
                    )}
                </div>
            </Sidebar_DivSecondary>

            <Sidebar_DivSecondary title="Following accounts" seeall>
                {USERS.map((user, index) => (
                    <AccountItem bold smdes userInfor={user} key={index} />
                ))}
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
