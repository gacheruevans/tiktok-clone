import React from 'react';
import './VideoFooter.css';

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@crazycat</h3>
                <p> I am a description</p>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/3488480-200.png"
                alt="spining_record"
            />
        </div>
        
    );
}

export default VideoFooter;
