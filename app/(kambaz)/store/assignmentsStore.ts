"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
    availableUntil: string;
};

export type AssignmentDraft = Omit<Assignment, "_id">;

type AssignmentsStore = {
    assignments: Assignment[];
    addAssignment: (assignment: AssignmentDraft) => void;
    updateAssignment: (assignment: Assignment) => void;
    deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
    assignments: assignmentsJson.map((assignment) => ({
        ...assignment,
        availableUntil: "",
    })) as Assignment[],
    addAssignment: (assignment) =>
        set((state) => ({
            assignments: [
                ...state.assignments,
                { ...assignment, _id: crypto.randomUUID() },
            ],
        })),
    updateAssignment: (assignment) =>
        set((state) => ({
            assignments: state.assignments.map((current) =>
                current._id === assignment._id ? assignment : current,
            ),
        })),
    deleteAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.filter(
                (assignment) => assignment._id !== assignmentId,
            ),
        })),
}));
