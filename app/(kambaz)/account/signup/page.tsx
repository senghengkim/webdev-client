import Link from "next/link";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="max-w-sm space-y-3">
            <h1 className="text-2xl font-semibold">Sign up</h1>
            <input
                placeholder="username"
                className="wd-username w-full rounded border border-neutral-300 px-3 py-2"
                defaultValue="ada"
            />
            <input
                placeholder="password"
                type="password"
                className="wd-password w-full rounded border border-neutral-300 px-3 py-2"
                defaultValue="123"
            />
            <input
                placeholder="verify password"
                type="password"
                className="wd-password-verify w-full rounded border border-neutral-300 px-3 py-2"
            />
            <Link href="/account/profile" className="block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">Sign up</Link>
            <Link href="/account/signin" className="text-blue-600">Sign in</Link>
        </div>
    );
}