"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
    const [profile, setProfile] = useState<User | null>(null);
    const { currentUser, setCurrentUser } = useAccountContext();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.replace("/account/signin");
            return;
        }
        setProfile(currentUser);
    }, [currentUser, router]);

    const signout = () => {
        setCurrentUser(null);
        router.push("/account/signin");
    };

    if (!profile) return null;

    return (
        <div id="wd-profile-screen" className="max-w-sm space-y-3">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <input
                id="wd-username"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                placeholder="username"
                className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                placeholder="password"
                type="password"
                className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-firstname"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                placeholder="First Name"
                className="w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-lastname"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                placeholder="Last Name"
                className="w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                type="email"
                placeholder="Email"
                className="w-full rounded border border-neutral-300 px-3 py-2"
            />
            <select
                id="wd-role"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value as User["role"] })}
                className="w-full rounded border border-neutral-300 px-3 py-2"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
                <option value="TA">Teaching assistant</option>
            </select>
            <button
                type="button"
                onClick={signout}
                id="wd-signout-btn"
                className="block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
            >
                Sign out
            </button>
        </div>
    );
}
