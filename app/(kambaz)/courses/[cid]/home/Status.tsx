import {
        FaBullhorn,
        FaCheckCircle,
        FaFileImport,
        FaHome,
        FaLightbulb,
        FaStream,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
        return (
            <div id="wd-course-status">
                    <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
                    <div className="mb-1 flex gap-1">
                            <button
                                type="button"
                                className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
                            >
                                    <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
                            </button>
                            <button
                                type="button"
                                className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
                            >
                                    <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
                            </button>
                    </div>
                    <div className="space-y-1">
                            <button
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaFileImport className="me-2 shrink-0" /> Import Existing Content
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaFileImport className="me-2 shrink-0" /> Import from Commons
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaHome className="me-2 shrink-0" /> Choose Home Page
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaStream className="me-2 shrink-0" /> View Course Stream
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaBullhorn className="me-2 shrink-0" /> New Announcement
                            </button>
                            <button
                                id="wd-ai-status"
                                type="button"
                                className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
                            >
                                    <FaLightbulb className="me-2 shrink-0" /> Sample action
                            </button>
                    </div>
            </div>
        );
}