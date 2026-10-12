import Link from "next/link";

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="max-w-sm space-y-3">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <input defaultValue="alice" placeholder="username" className="wd-username w-full rounded border border-neutral-300 px-3 py-2" />
            <input defaultValue="123" placeholder="password" type="password" className="wd-password w-full rounded border border-neutral-300 px-3 py-2" />
            <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="w-full rounded border border-neutral-300 px-3 py-2" />
            <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="w-full rounded border border-neutral-300 px-3 py-2" />
            <input defaultValue="2000-01-01" type="date" id="wd-dob" className="w-full rounded border border-neutral-300 px-3 py-2" />
            <input defaultValue="alice@wonderland" type="email" id="wd-email" className="w-full rounded border border-neutral-300 px-3 py-2" />
            <select defaultValue="FACULTY" id="wd-role" className="w-full rounded border border-neutral-300 px-3 py-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link href="/account/signin" className="block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">Sign out</Link>
        </div>
    );
}
