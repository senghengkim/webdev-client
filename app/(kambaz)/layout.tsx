import { AccountProvider } from "./account/AccountContext";
import "./kambaz.css";
import KambazNavigation from "./Navigation";
import {ReactNode} from "react";

export default function KambazLayout({
                                         children,
                                     }: Readonly<{ children: ReactNode }>) {
    return (
        <AccountProvider>
            <div id="wd-kambaz" className="font-sans">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">{children}</div>
            </div>
        </AccountProvider>
    );
}