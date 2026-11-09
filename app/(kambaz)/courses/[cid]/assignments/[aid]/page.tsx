"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    useAssignmentsStore,
    type AssignmentDraft,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
    const params = useParams();
    const cid = typeof params.cid === "string" ? params.cid : "";
    const aid = typeof params.aid === "string" ? params.aid : "";
    const router = useRouter();
    const assignments = useAssignmentsStore((state) => state.assignments);
    const addAssignment = useAssignmentsStore((state) => state.addAssignment);
    const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
    const assignment = assignments.find(
        (current) => current._id === aid && current.course === cid,
    );
    const { currentUser } = useAccountContext();
    const canManageAssignments = currentUser?.role === "FACULTY";
    const isNew = aid === "new";
    const [draft, setDraft] = useState<AssignmentDraft>({
        title: "",
        course: cid,
        description: "",
        points: 100,
        due: "",
        available: "",
        availableUntil: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if ((isNew && !canManageAssignments) || (!isNew && !assignment)) {
            router.replace(`/courses/${cid}/assignments`);
            return;
        }
        if (assignment) {
            setDraft({
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                due: assignment.due,
                available: assignment.available,
                availableUntil: assignment.availableUntil,
            });
        } else if (isNew) {
            setDraft((current) => ({ ...current, course: cid }));
        }
    }, [aid, assignment?._id, canManageAssignments, cid, isNew, router]);

    const save = () => {
        if (!canManageAssignments) return;
        if (!draft.title.trim()) {
            setError("Assignment name is required.");
            return;
        }
        const saved = { ...draft, course: cid };
        if (isNew) {
            addAssignment(saved);
        } else if (assignment) {
            updateAssignment({ ...saved, _id: assignment._id });
        }
        router.push(`/courses/${cid}/assignments`);
    };

    const setField = <K extends keyof AssignmentDraft>(
        field: K,
        value: AssignmentDraft[K],
    ) => setDraft((current) => ({ ...current, [field]: value }));

    return (
        <div id="wd-assignments-editor" className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold">
                {isNew ? "Create Assignment" : canManageAssignments ? "Edit Assignment" : "Assignment"}
            </h2>
            <label htmlFor="wd-name" className="block font-medium">Assignment Name</label>
            <input
                id="wd-name"
                className="w-full rounded border border-neutral-300 px-3 py-2"
                value={draft.title}
                onChange={(e) => setField("title", e.target.value)}
                readOnly={!canManageAssignments}
            />
            <textarea
                id="wd-description"
                aria-label="Assignment Description"
                value={draft.description}
                onChange={(e) => setField("description", e.target.value)}
                rows={8}
                className="w-full rounded border border-neutral-300 px-3 py-2"
                readOnly={!canManageAssignments}
            />
            <table className="w-full">
                <tbody>
                <tr>
                    <td className="py-2 text-right align-top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td className="py-2 pl-3">
                        <input
                            type="number"
                            id="wd-points"
                            className="rounded border border-neutral-300 px-3 py-1.5"
                            value={draft.points}
                            onChange={(e) => setField("points", Number(e.target.value))}
                            disabled={!canManageAssignments}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="py-2 text-right align-top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td className="py-2 pl-3">
                        <input
                            type="date"
                            id="wd-due-date"
                            className="rounded border border-neutral-300 px-3 py-1.5"
                            value={draft.due}
                            onChange={(e) => setField("due", e.target.value)}
                            disabled={!canManageAssignments}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="py-2 text-right align-top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td className="py-2 pl-3">
                        <input
                            type="date"
                            id="wd-available-from"
                            className="rounded border border-neutral-300 px-3 py-1.5"
                            value={draft.available}
                            onChange={(e) => setField("available", e.target.value)}
                            disabled={!canManageAssignments}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="py-2 text-right align-top">
                        <label htmlFor="wd-available-until">Available until</label>
                    </td>
                    <td className="py-2 pl-3">
                        <input
                            type="date"
                            id="wd-available-until"
                            className="rounded border border-neutral-300 px-3 py-1.5"
                            value={draft.availableUntil}
                            onChange={(e) => setField("availableUntil", e.target.value)}
                            disabled={!canManageAssignments}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <div className="flex gap-2">
                {canManageAssignments && (
                    <button
                        type="button"
                        id="wd-save"
                        onClick={save}
                        className="rounded bg-green-700 px-4 py-2 text-white"
                    >
                        Save
                    </button>
                )}
                <button
                    type="button"
                    id="wd-cancel"
                    onClick={() => router.push(`/courses/${cid}/assignments`)}
                    className="rounded border border-neutral-300 px-4 py-2"
                >
                    {canManageAssignments ? "Cancel" : "Back"}
                </button>
            </div>
        </div>
    );
}