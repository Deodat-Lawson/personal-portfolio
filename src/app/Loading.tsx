"use client"; // if you’re in the Next.js App Router

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/home.module.css";

interface LoadingScreenProps {
    onFinish: () => void; // callback to signal loading is done
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // Fallback timer in case the video fails to load or is too long
        const fallbackTimer = setTimeout(() => {
            onFinish();
        }, 6000); // 6 seconds maximum wait time

        return () => clearTimeout(fallbackTimer);
    }, [onFinish]);

    const handleVideoEnd = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Add .fadeOut class to trigger CSS transitions
            videoElement.parentElement?.classList.add(styles.fadeOut);
            setTimeout(() => onFinish(), 1000); // Wait for fade-out animation
        }
    };

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const skipIntro = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.parentElement?.classList.add(styles.fadeOut);
            setTimeout(() => onFinish(), 1000);
        }
    };

    return (
        <div className={styles.loadingScreen}>
            <video
                ref={videoRef}
                className={styles.loadingVideo}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                onLoadedData={handleVideoLoad}
            >
                <source src="/loading-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {isVideoLoaded && (
                <button className={styles.skipButton} onClick={skipIntro}>
                    Skip Intro
                </button>
            )}
        </div>
    );
}