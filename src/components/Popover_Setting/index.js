import classNames from "classnames/bind";
import styles from "./Popover_Setting.module.scss";

import Button from "../common/Button";
import Popover from "../common/Popover";

import { useState } from "react";

import Header_Popover_Setting from "./Header_Popover_Setting";
import { MENU_SETTING } from "../../Default/constant";

const cn = classNames.bind(styles);

function Popover_Setting() {
    const [StandIn, setStandIn] = useState([{ list: MENU_SETTING }]);
    const current = StandIn[StandIn.length - 1];

    const handleClick = (item) => {
        if (item.sub_menu) {
            setStandIn([...StandIn, item.sub_menu]);
        }
    };
    const handleBack = () => {
        setStandIn((pre) => {
            return pre.slice(0, pre.length - 1);
        });
    };

    return (
        <div className={cn("wrapper")}>
            <Popover className={cn("pop-item")}>
                {StandIn.length > 1 && (
                    <Header_Popover_Setting
                        title={current.title}
                        onClick={handleBack}
                    />
                )}
                {current.list.map((item, index) => (
                    <Button
                        key={index}
                        className={cn("but-item")}
                        leftIcon={item.icon}
                        to={item.to}
                        href={item.href}
                        onClick={() => handleClick(item)}
                    >
                        {item.option}
                    </Button>
                ))}
            </Popover>
        </div>
    );
}

export default Popover_Setting;
