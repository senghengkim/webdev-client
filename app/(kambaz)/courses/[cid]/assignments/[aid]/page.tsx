import Link from "next/link";

export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments-editor" className="max-w-3xl space-y-6">
            <div className="space-y-2">
                <label htmlFor="wd-name" className="block text-sm font-medium text-neutral-700">
                    Assignment Name
                </label>
                <input
                    id="wd-name"
                    defaultValue="A1 - ENV + HTML"
                    className="w-full rounded border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="wd-description" className="block text-sm font-medium text-neutral-700">
                    Description
                </label>
                <textarea
                    id="wd-description"
                    rows={6}
                    defaultValue="The assignment is available online Submit a link to the landing page of"
                    className="w-full rounded border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <table className="w-full max-w-xl border-separate border-spacing-y-4">
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input
                                id="wd-points"
                                defaultValue={100}
                                className="rounded border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">
                                Display Grade as
                            </label>
                        </td>
                        <td>
                            <select
                                id="wd-display-grade-as"
                                defaultValue="Percentage"
                            >
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">
                                Submission Type
                            </label>
                        </td>
                        <td>
                            <select
                                id="wd-submission-type"
                                defaultValue="Online"
                            >
                                <option value="Online">Online</option>
                                <option value="On Paper">On Paper</option>
                                <option value="External Tool">
                                    External Tool
                                </option>
                            </select>
                            <br />
                            <br />
                            <label>Online Entry Options</label>
                            <br />
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                            <br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                            <br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">
                                Media Recordings
                            </label>
                            <br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">
                                Student Annotation
                            </label>
                            <br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assign</label>
                        </td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <br />
                            <input id="wd-assign-to" defaultValue="Everyone" />
                            <br />
                            <br />
                            <label htmlFor="wd-due-date" className="mb-2 block text-sm font-medium text-neutral-700">
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="wd-due-date"
                                defaultValue="2024-05-13"
                                className="rounded border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            />
                            <br />
                            <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="wd-available-from">
                                                Available from
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="wd-available-from"
                                                defaultValue="2024-05-06"
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor="wd-available-until">
                                                Until
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="wd-available-until"
                                                defaultValue="2024-05-20"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="space-y-2">
                <label htmlFor="wd-ai-editor-notes" className="block text-sm font-medium text-neutral-700">
                    Sample notes
                </label>
                <textarea
                    id="wd-ai-editor-notes"
                    rows={4}
                    className="w-full rounded border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <hr />
            <table align="right">
                <tbody>
                    <tr>
                        <td>
                            <Link
                                href={`/courses/${cid}/assignments`}
                                id="wd-cancel"
                            >
                                Cancel
                            </Link>
                            &nbsp;
                            <Link
                                href={`/courses/${cid}/assignments`}
                                id="wd-save"
                            >
                                Save
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
