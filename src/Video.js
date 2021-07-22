import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import './Video.css';

const Video = () => {
    const [play, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoTap = () => {
        if(play) {
            videoRef.current.pause(); 
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }  
    }
    return (
        <div className="video">
           <video 
            className="video__player"
            loop
            onClick={onVideoTap}
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/be0a6854a96684e0ec7767ff98e20407/60fa1929/video/tos/alisg/tos-alisg-pve-0037/18a6d6dc576648bd8fd3b5ec2fd1c8ec/?a=1180&br=4334&bt=2167&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=Qq8CsEHM_4ka&l=20210722191926010245070135044F5EAA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amRtMzk6ZmVvNjMzODgzNEApNjs1aGhlNGU1Nzo5aGc0aWcubzE2cjQwcW9gLS1kLy1zc2FeNC0zMGAzLTU2Ml9fMy06Yw%3D%3D&vl=&vr="
            ></video>
            <VideoFooter />
            {/* <VideoSideBar /> */}
        </div>
    );
}

export default Video;
