"use client";

import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type Lesson = {
    _id: string;
    name: string;
    description: string;
    module: string;
};

export type CourseModule = {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
    editing?: boolean;
};

type ModulesStore = {
    modules: CourseModule[];
    addModule: (module: { name: string; course: string }) => void;
    deleteModule: (moduleId: string) => void;
    updateModule: (module: CourseModule) => void;
    editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
    modules: modulesJson as CourseModule[],
    addModule: (module) =>
        set((state) => ({
            modules: [
                ...state.modules,
                {
                    _id: crypto.randomUUID(),
                    name: module.name,
                    description: "",
                    course: module.course,
                    lessons: [],
                },
            ],
        })),
    deleteModule: (moduleId) =>
        set((state) => ({
            modules: state.modules.filter((module) => module._id !== moduleId),
        })),
    updateModule: (module) =>
        set((state) => ({
            modules: state.modules.map((current) =>
                current._id === module._id ? module : current,
            ),
        })),
    editModule: (moduleId) =>
        set((state) => ({
            modules: state.modules.map((module) =>
                module._id === moduleId ? { ...module, editing: true } : module,
            ),
        })),
}));
