"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
    const params = useParams();
    const cid = typeof params.cid === "string" ? params.cid : "";
    const { users, addUser } = useAccountContext();
    const enrollments = useEnrollmentsStore((state) => state.enrollments);
    const enroll = useEnrollmentsStore((state) => state.enroll);
    const unenroll = useEnrollmentsStore((state) => state.unenroll);
    const [person, setPerson] = useState<User>(emptyUser);
    const [showForm, setShowForm] = useState(false);
    const enrolled = users.filter((user) =>
        enrollments.some((e) => e.user === user._id && e.course === cid),
    );

    const addPerson = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (!person.firstName.trim() || !person.lastName.trim()) return;
        const newUser = { ...person, _id: crypto.randomUUID() };
        addUser(newUser);
        enroll(newUser._id, cid);
        setPerson(emptyUser);
        setShowForm(false);
    };

    return (
        <div id="wd-people-table" className="overflow-x-auto">
            <div className="mb-3 flex justify-end">
                <button
                    type="button"
                    id="wd-add-person"
                    className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
                    onClick={() => setShowForm((show) => !show)}
                >
                    {showForm ? "Cancel" : "Add Person"}
                </button>
            </div>
            {showForm && (
                <form onSubmit={addPerson} className="mb-4 grid max-w-3xl gap-2 sm:grid-cols-2">
                    <input
                        aria-label="First name"
                        placeholder="First name"
                        value={person.firstName}
                        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                        required
                    />
                    <input
                        aria-label="Last name"
                        placeholder="Last name"
                        value={person.lastName}
                        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                        required
                    />
                    <input
                        aria-label="Login ID"
                        placeholder="Login ID"
                        value={person.loginId}
                        onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                    />
                    <input
                        aria-label="Section"
                        placeholder="Section"
                        value={person.section}
                        onChange={(e) => setPerson({ ...person, section: e.target.value })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                    />
                    <input
                        aria-label="Email"
                        type="email"
                        placeholder="Email"
                        value={person.email}
                        onChange={(e) => setPerson({ ...person, email: e.target.value })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                    />
                    <select
                        aria-label="Role"
                        value={person.role}
                        onChange={(e) => setPerson({ ...person, role: e.target.value as User["role"] })}
                        className="rounded border border-neutral-300 px-3 py-1.5"
                    >
                        <option value="STUDENT">Student</option>
                        <option value="TA">Teaching assistant</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                        <option value="USER">User</option>
                    </select>
                    <button
                        type="submit"
                        id="wd-add-person-submit"
                        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white sm:col-span-2"
                    >
                        Add Person to Course
                    </button>
                </form>
            )}
            <table className="w-full border-collapse text-left text-sm">
                <thead>
                <tr className="border-b border-neutral-300">
                    <th className="p-2">Name</th>
                    <th className="p-2">Login ID</th>
                    <th className="p-2">Section</th>
                    <th className="p-2">Role</th>
                    <th className="p-2">Last Activity</th>
                    <th className="p-2">Total Activity</th>
                    <th className="p-2">Enrollment</th>
                </tr>
                </thead>
                <tbody>
                {enrolled.map((user) => (
                    <tr key={user._id} className="odd:bg-neutral-50">
                        <td className="wd-full-name p-2 text-nowrap">
                            <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                            <span className="wd-first-name">{user.firstName}</span>{" "}
                            <span className="wd-last-name">{user.lastName}</span>
                        </td>
                        <td className="wd-login-id p-2">{user.loginId}</td>
                        <td className="wd-section p-2">{user.section}</td>
                        <td className="wd-role p-2">{user.role}</td>
                        <td className="wd-last-activity p-2">{user.lastActivity}</td>
                        <td className="wd-total-activity p-2">{user.totalActivity}</td>
                        <td className="p-2">
                            <button
                                type="button"
                                className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
                                onClick={() => unenroll(user._id, cid)}
                            >
                                Unenroll
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}