"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useAccountContext();
    const router = useRouter();

    const signup = () => {
        if (!username.trim() || !password) return;
        setCurrentUser({
            _id: crypto.randomUUID(),
            username,
            password,
            firstName: "",
            lastName: "",
            email: "",
            role: "STUDENT",
            loginId: "",
            section: "",
            lastActivity: "",
            totalActivity: "",
        });
        router.push("/account/profile");
    };

    return (
        <div id="wd-signup-screen" className="max-w-sm space-y-3">
            <h1 className="text-2xl font-semibold">Sign up</h1>
            <input
                id="wd-username"
                placeholder="username"
                className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                onClick={signup}
                id="wd-signup-btn"
                className="block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
            >
                Sign up
            </button>
            <Link href="/account/signin" className="text-blue-600">Sign in</Link>
        </div>
    );
}