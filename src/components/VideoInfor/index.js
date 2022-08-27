import classNames from "classnames/bind";
import styles from "./VideoInfor.module.scss";

import FrameRecommendVideo from "../../components/common/FrameRecommendVideo";
import Button from "../../components/common/Button";

import music from "../../assets/image/sidebar/music.svg";
import black_heart from "../../assets/image/content/black_heart.svg";
import pink_heart from "../../assets/image/content/pink_heart.svg";
import comment from "../../assets/image/content/comment.svg";
import share from "../../assets/image/content/share.svg";
import { useState } from "react";

const cn = classNames.bind(styles);

function VideoInfor() {
    const [isUnderlineUsername, setIsUnderlineUsername] = useState(false);

    function handleMouseHoverAvt() {
        setIsUnderlineUsername(true);
    }

    function handleMouseLeaveAvt() {
        setIsUnderlineUsername(false);
    }

    return (
        <FrameRecommendVideo className={cn("wrapper")}>
            <img
                className={cn("avatar")}
                alt="avt"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/01d8d4475876db565c7990edf21443e8~c5_100x100.jpeg?x-expires=1661673600&x-signature=do9fzuXbpVXoMpCF%2Fe0O6weT3Wk%3D"
                onMouseEnter={handleMouseHoverAvt}
                onMouseLeave={handleMouseLeaveAvt}
            />

            <div className={cn("details")}>
                <div className={cn("author")}>
                    <h3
                        className={cn("username", {
                            active: isUnderlineUsername
                        })}
                    >
                        thanlanoscarr
                    </h3>
                    <h4
                        className={cn("name")}
                        onMouseEnter={handleMouseHoverAvt}
                        onMouseLeave={handleMouseLeaveAvt}
                    >
                        𝓣𝓪̀𝓲❤️𝓦𝓲𝓷𝓽𝓮𝓪𝓶
                    </h4>
                </div>
                <div className={cn("video-des")}>
                    <span className={cn("cap")}>
                        Nhận ra mình làm gì có ny 😂{" "}
                    </span>
                    <Button className={cn("hashtag")}>#lyrics</Button>
                    <Button className={cn("hashtag")}>#sad</Button>
                    <Button className={cn("hashtag")}>#nhachaymoingay</Button>
                    <Button className={cn("hashtag")}>#tinhyeu</Button>
                    <Button className={cn("hashtag")}>#tamtrang</Button>
                    <Button className={cn("hashtag")}>#tinhyeu</Button>
                    <Button className={cn("hashtag")}>#haihuoc</Button>
                    <Button className={cn("hashtag")}>
                        #voiceeffectsforyou
                    </Button>
                </div>
                <Button className={cn("hashtag", "music")} leftIcon={music}>
                    Timber LHT - 𝐿𝑒 𝐻𝑢𝑦𝑒𝑛 𝑇𝑟𝑎𝑛𝑔🐰
                </Button>
                <div className={cn("video-container")}>
                    <video
                        className={cn("video")}
                        controls
                        src="https://v16-webapp.tiktok.com/a2175bb1c3568bc772b1517c8c384e88/630a1e56/video/tos/maliva/tos-maliva-ve-0068c799-us/876669a8eaa0469986257874d0ade71e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1388&bt=694&cs=0&ds=3&ft=eXd.6Hk_Myq8ZMAv0he2NuXQml7Gb&mime_type=video_mp4&qs=0&rc=ZWQ7NGg3O2c2aTkzPGY0Z0BpMzZnOzU6ZmtlZTMzZzczNEBhXjMzXzNjNl4xYF5fYC1jYSMva2xfcjQwM2xgLS1kMS9zcw%3D%3D&l=2022082707382201024502503217247D03&btag=80000"
                    />
                    <div className={cn("actions")}>
                        <div className={cn("action")}>
                            <div className={cn("act-btn")}>
                                <img alt="img" src={black_heart} />
                            </div>
                            <span className={cn("act-text")}>130K</span>
                        </div>
                        <div className={cn("action")}>
                            <div className={cn("act-btn")}>
                                <img alt="img" src={comment} />
                            </div>
                            <span className={cn("act-text")}>2602</span>
                        </div>
                        <div className={cn("action")}>
                            <div className={cn("act-btn")}>
                                <img alt="img" src={share} />
                            </div>
                            <span className={cn("act-text")}>20K</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button className={cn("follow")} outline>
                <p className={cn("fl-text")}>Follow</p>
            </Button>
        </FrameRecommendVideo>
    );
}

export default VideoInfor;
