"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountPage() {
    const { currentUser } = useAccountContext();
    const router = useRouter();

    useEffect(() => {
        router.replace(currentUser ? "/account/profile" : "/account/signin");
    }, [currentUser, router]);

    return null;
}