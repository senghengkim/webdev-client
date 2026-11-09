import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo, type ReduxTodo } from "./todosReducer";
import type { AppDispatch, RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
    const { todos } = useSelector((state: RootState) => state.todosReducer);
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState("Learn Mongo");
    const [editingId, setEditingId] = useState<string | null>(null);

    const save = () => {
        if (editingId) {
            dispatch(updateTodo({ id: editingId, title }));
            setEditingId(null);
        } else {
            dispatch(addTodo(title));
        }
        setTitle("Learn Mongo");
    };

    const edit = (todo: ReduxTodo) => {
        setTitle(todo.title);
        setEditingId(todo.id);
    };

    const remove = (id: string) => {
        dispatch(deleteTodo(id));
        if (editingId === id) {
            setEditingId(null);
            setTitle("Learn Mongo");
        }
    };

    return (
        <div id="wd-redux-todos">
            <h3>Redux Todo List</h3>
            <ReduxTodoForm
                title={title}
                editingId={editingId}
                onTitleChange={setTitle}
                onSave={save}
            />
            <ul className="m-0 max-w-lg list-none p-0">
                {todos.map((todo) => (
                    <ReduxTodoItem
                        key={todo.id}
                        todo={todo}
                        onEdit={edit}
                        onDelete={remove}
                    />
                ))}
            </ul>
        </div>
    );
}