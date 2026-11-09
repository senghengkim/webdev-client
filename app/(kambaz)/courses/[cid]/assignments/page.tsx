"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
    const params = useParams();
    const cid = typeof params.cid === "string" ? params.cid : "";
    const router = useRouter();
    const [search, setSearch] = useState("");
    const assignments = useAssignmentsStore((state) => state.assignments);
    const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
    const { currentUser } = useAccountContext();
    const canManageAssignments = currentUser?.role === "FACULTY";
    const visibleAssignments = assignments.filter(
        (assignment) =>
            assignment.course === cid &&
            assignment.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div id="wd-assignments">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="relative">
                    <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
                    <input
                        placeholder="Search for Assignments"
                        id="wd-search-assignment"
                        className="rounded border py-1.5 pr-3 pl-9 text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {canManageAssignments && (
                    <div className="flex gap-2">
                        <button
                            id="wd-add-assignment-group"
                            type="button"
                            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
                        >
                            <FaPlus /> Group
                        </button>
                        <button
                            id="wd-add-assignment"
                            type="button"
                            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
                        >
                            <FaPlus /> Assignment
                        </button>
                    </div>
                )}
            </div>
            <h3
                id="wd-assignments-title"
                className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
            >
                <span>ASSIGNMENTS 40% of Total</span>
                {canManageAssignments && (
                    <button
                        type="button"
                        id="wd-add-assignment-in-list"
                        className="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"
                        onClick={() => router.push(`/courses/${cid}/assignments/new`)}
                    >
                        <FaPlus />
                    </button>
                )}
            </h3>
            <ul id="wd-assignment-list" className="m-0 list-none p-0">
                {visibleAssignments.map((assignment) => (
                    <AssignmentItem
                        key={assignment._id}
                        cid={cid}
                        aid={assignment._id}
                        title={assignment.title}
                        details={`Multiple Modules | Available from ${assignment.available} | ${assignment.availableUntil ? `until ${assignment.availableUntil} | ` : ""}Due ${assignment.due} | ${assignment.points} pts`}
                        onDelete={canManageAssignments
                            ? () => deleteAssignment(assignment._id)
                            : undefined}
                    />
                ))}
            </ul>
        </div>
    );
}