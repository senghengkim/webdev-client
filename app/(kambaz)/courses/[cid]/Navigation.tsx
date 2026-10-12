
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
    const pathname = usePathname() ?? "";

    const links = [
        { label: "Home", path: "home", id: "wd-course-home-link" },
        { label: "Modules", path: "modules", id: "wd-course-modules-link" },
        { label: "Piazza", path: "piazza", id: "wd-course-piazza-link" },
        { label: "Zoom", path: "zoom", id: "wd-course-zoom-link" },
        { label: "Assignments", path: "assignments", id: "wd-course-assignments-link" },
        { label: "Quizzes", path: "quizzes", id: "wd-course-quizzes-link" },
        { label: "Grades", path: "grades", id: "wd-course-grades-link" },
        { label: "People", path: "people", id: "wd-course-people-link" },
    ];

    return (
        <div
            id="wd-courses-navigation"
            className="wd list-group rounded-none text-lg"
            style={{ width: "140px", minWidth: "140px" }}
        >
            {links.map(({ label, path, id }) => {
                const href = `/courses/${cid}/${path}`;
                const active =
                    pathname === href || pathname.startsWith(`${href}/`);

                return (
                    <Link
                        key={id}
                        href={href}
                        id={id}
                        className={`list-group-item rounded-none ${
                            active
                                ? "active border-l-4 border-l-black"
                                : "border-0 text-red-600"
                        }`}
                    >
                        {label}
                    </Link>
                );
            })}

            <Link
                href={`/courses/${cid}/home`}
                id="wd-course-ai-link"
                className="list-group-item rounded-none border-0 text-red-600"
            >
                Sample
            </Link>
        </div>
    );
}
