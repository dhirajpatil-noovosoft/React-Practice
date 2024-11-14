import React, {useEffect, useRef, useState} from "react";
function VideoPlay({ src, isPlaying }) {
    const ref = useRef(null);
    useEffect( () => {
        if (isPlaying) {
            ref.current.play();  // Calling these while rendering isn't allowed.
        } else {
            ref.current.pause(); // Also, this crashes.
        }
    })

    return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlay
                isPlaying={isPlaying}
                src="/videos/istockphoto-463220282-640_adpp_is.mp4"
            />
        </>
    );
}