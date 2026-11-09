"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

export default function AccountNavigation() {
    const { currentUser } = useAccountContext();
    const pathname = usePathname() ?? "";
    const allLinks = [
        { label: "Sign in", path: "/account/signin", id: "wd-account-signin-link" },
        { label: "Sign up", path: "/account/signup", id: "wd-account-signup-link" },
        { label: "Profile", path: "/account/profile", id: "wd-account-profile-link" },
    ];
    const links = currentUser
        ? allLinks.filter((link) => link.path === "/account/profile")
        : allLinks.filter((link) => link.path !== "/account/profile");

    return (
        <div id="wd-account-navigation" className="wd list-group rounded-none text-lg" style={{ width: "140px", minWidth: "140px" }}>
            {links.map(({ label, path, id }) => (
                <Link
                    key={id}
                    href={path}
                    id={id}
                    className={`list-group-item rounded-none ${
                        pathname === path ? "active border-l-4 border-l-black" : "border-0 text-red-600"
                    }`}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}