import { useEffect, useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import generateId from "../../../utils/generate-id";
import * as storage from "../../../utils/storage.helper";
import { ITodo, ITodoWidget } from "./todo.types";
import { TODO_ADD_ICON_SIZE, TODO_DELETE_ICON_SIZE } from "./todo.config";

interface TodoProps {
    id: ITodoWidget['id'];
    options: ITodoWidget['options'];
}

export default function Todo({ id, options }: TodoProps) {
    if (options.mode === 'preview') {
        return <TodoPreviewWidget />;
    }

    return <TodoWidget id={id} options={options} />;
}

function TodoWidget({ id, options }: TodoProps) {
    const [todos, setTodos] = useState<ITodo[]>(() => {
        const value = storage.get(id);
        return Array.isArray(value) ? value : [];
    });

    useEffect(() => {
        storage.save(id, todos);
    }, [id, todos]);

    function handleToggleIsDone(id: ITodo['id']) {
        setTodos(prevTodos => prevTodos.map(todo => ({
            ...todo,
            isDone: todo.id === id ? !todo.isDone : todo.isDone
        })));
    };

    function handleDelete(id: ITodo['id']) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function handleAdd(label: ITodo['label']) {
        setTodos(prevTodos => ([...prevTodos, { id: generateId(), label, isDone: false }]));
    }

    return (
        <div className="w-full h-full pt-4 flex flex-col justify-between items-center">
            {options.title && <h2 className="text-white font-mono text-xl mb-3">{options.title}</h2>}
            <ul className="space-y-4 p-4">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <TodoItem
                            todo={todo}
                            onDelete={handleDelete}
                            onToggleDone={handleToggleIsDone}
                        />
                    </li>
                ))}
                <TodoItemAdd onAdd={handleAdd} />
            </ul>
        </div>
    );
}

function TodoPreviewWidget() {
    return (
        <div className="w-full h-full p-1 px-4">
            <div className="font-bold underline">Todo:</div>
            <ul className="w-full h-full p-x-4">
                <li className="flex items-center space-x-3">
                    <Check />
                    <span className="ml-1 text-white text-sm font-mono">Discover widgets</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Check />
                    <span className="ml-1 text-white text-sm font-mono">Setup dashboard</span>
                </li>
            </ul>
        </div>
    );
}

interface TodoItemProps {
    todo: ITodo;
    onDelete: (id: ITodo['id']) => void;
    onToggleDone: (id: ITodo['id']) => void;
}

function TodoItem({ todo, onDelete, onToggleDone }: TodoItemProps) {
    const { id, label, isDone } = todo;

    return (
        <div className="flex items-center justify-between text-white">
            <label className="flex w-100 items-center space-x-3 hover:font-bold cursor-pointer text-white">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => onToggleDone(id)}
                    className="h-5 w-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-blue-400 focus:ring-2 transition"
                />
                <span className={`text-lg font-mono tracking-wide ${isDone ? "line-through opacity-60" : ""}`}>
                    {label}
                </span>
            </label>
            <button
                className="p-1 rounded hover:bg-red-400 transition cursor-pointer"
                aria-label={`Delete ${label}`}
                onClick={() => onDelete(id)}
            >
                <Trash2 size={TODO_DELETE_ICON_SIZE} className="text-white" />
            </button>
        </div>
    )
}

interface TodoItemAddProps {
    onAdd: (label: ITodo['label']) => void;
}

function TodoItemAdd({ onAdd }: TodoItemAddProps) {
    const [todo, setTodo] = useState<string>('');

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        handleAdd();
    };

    function handleAdd() {
        if (!todo.length) return;
        onAdd(todo);
        setTodo('');
    }

    return (
        <div className="flex items-center space-x-3 pt-4">
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-mono tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                className="p-2 rounded-xl bg-white opacity-70 text-black hover:opacity-100 disabled:opacity-70 transition cursor-pointer"
                aria-label="Add task"
                disabled={!todo.length}
                onClick={handleAdd}
            >
                <Plus size={TODO_ADD_ICON_SIZE} />
            </button>
        </div>
    )
}
