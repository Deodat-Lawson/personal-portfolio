"use client";

import React from "react";
import LoadingScreen from "./Loading";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    // Callback once loading screen finishes or is skipped
    const handleFinishLoading = () => {
        router.push("/home");
    };


    return <LoadingScreen onFinish={handleFinishLoading} />;
}