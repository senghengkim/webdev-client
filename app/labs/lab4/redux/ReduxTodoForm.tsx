export default function ReduxTodoForm({
    title,
    editingId,
    onTitleChange,
    onSave,
}: {
    title: string;
    editingId: string | null;
    onTitleChange: (title: string) => void;
    onSave: () => void;
}) {
    return (
        <div className="mb-2 flex flex-wrap gap-2">
            <input
                id="wd-redux-todo-title"
                className="rounded border border-neutral-300 px-2 py-1"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
            />
            <button
                type="button"
                id="wd-redux-add-todo"
                className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
                onClick={onSave}
            >
                {editingId ? "Update" : "Add"}
            </button>
        </div>
    );
}