"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = Omit<(typeof usersJson)[number], "role"> & {
    role: "USER" | "ADMIN" | "FACULTY" | "STUDENT" | "TA";
};

export const emptyUser: User = {
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
    loginId: "",
    section: "",
    lastActivity: "",
    totalActivity: "",
};

type AccountContextValue = {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
    users: User[];
    addUser: (user: User) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>(usersJson as User[]);
    return (
        <AccountContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                users,
                addUser: (user) => setUsers((current) => [...current, user]),
            }}
        >
            {children}
        </AccountContext.Provider>
    );
}

export function useAccountContext() {
    const value = useContext(AccountContext);
    if (!value) {
        throw new Error("useAccountContext must be used inside AccountProvider");
    }
    return value;
}