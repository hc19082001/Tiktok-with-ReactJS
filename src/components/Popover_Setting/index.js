import classNames from "classnames/bind";
import styles from "./Popover_Setting.module.scss";

import Button from "../common/Button";
import Popover from "../common/Popover";

import lang from "../../assets/image/lang.svg";
import question from "../../assets/image/question.svg";
import keyboard from "../../assets/image/keyboard.svg";

const cn = classNames.bind(styles);

function Popover_Setting() {
    return (
        <div className={cn("wrapper")}>
            <Popover className={cn("pop-item")}>
                <Button className={cn("but-item")} leftIcon={lang}>
                    English
                </Button>
                <Button
                    to="/feedback"
                    className={cn("but-item")}
                    leftIcon={question}
                >
                    Feedback and help
                </Button>
                <Button className={cn("but-item")} leftIcon={keyboard}>
                    Keyboard shortcuts
                </Button>
            </Popover>
        </div>
    );
}

export default Popover_Setting;
