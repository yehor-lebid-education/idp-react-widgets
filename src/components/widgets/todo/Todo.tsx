import { useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import generateId from "../../../utils/generate-id";
import { ITodo, ITodoConfig, ITodoWidget } from "./todo.types";
import { TODO_ADD_ICON_SIZE, TODO_DEFAULT_OPTIONS } from "./todo.config";
import useWidgetOptions from "../../../hooks/useWidgetOptions";
import useWidgetData from "../../../hooks/useWidgetData";
import Row from "../../common/ui/Row";

interface TodoProps {
    id: ITodoWidget['id'];
    previewMode?: boolean;
}
export default function Todo({ id, previewMode }: TodoProps) {
    if (previewMode) {
        return <TodoPreviewWidget />;
    }

    return <TodoWidget id={id} />;
}

function TodoWidget({ id }: { id: ITodoWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<ITodoConfig>(id);
    const { title } = widgetOptions || TODO_DEFAULT_OPTIONS;

    const { widgetData, updateWidgetData } = useWidgetData<ITodoWidget['data']>(id);
    const todos = Array.isArray(widgetData) ? widgetData : [];

    function handleToggleIsDone(id: ITodo['id']) {
        updateWidgetData(todos.map(todo => ({
            ...todo,
            isDone: todo.id === id ? !todo.isDone : todo.isDone
        })));
    };

    function handleDelete(id: ITodo['id']) {
        updateWidgetData(todos.filter(todo => todo.id !== id));
    }

    function handleAdd(label: ITodo['label']) {
        updateWidgetData(([...todos, { id: generateId(), label, isDone: false }]));
    }

    return (
        <div className="w-full h-full  py-4 px-12 flex flex-col justify-between items-center">
            {title && <h2 className="text-white font-mono text-xl mb-3">{title}</h2>}
            <ul className="h-full w-full space-y-2 pb-10 flex flex-col justify-end">
                {todos.map(todo => (
                    <li className="w-full" key={todo.id}>
                        <TodoItem
                            todo={todo}
                            onDelete={handleDelete}
                            onToggleDone={handleToggleIsDone}
                        />
                    </li>
                ))}
            </ul>
            <TodoItemAdd onAdd={handleAdd} />
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
        <div className="flex items-center justify-between text-white bg-white/3 rounded-xl">
            <label className="flex w-full min-h-[50px] items-center space-x-3 hover:font-bold cursor-pointer px-4 mr-4 text-whit hover:bg-white/10 rounded-lg">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => onToggleDone(id)}
                    className="h-5 w-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-blue-400 focus:ring-2 transition cursor-pointer"
                />
                <div className={`w-full text-lg font-mono tracking-wide ${isDone ? "line-through opacity-60" : ""}`}>
                    {label}
                </div>
            </label>
            <button
                className="p-1 flex items-center justify-center w-[70px] h-[50px] rounded-xl hover:bg-red-400 hover:text-white text-red-400 transition cursor-pointer"
                aria-label={`Delete ${label}`}
                onClick={() => onDelete(id)}
            >
                <Trash2 />
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
        <Row alignX="between">
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Add a new task..."
                className="flex-1 mr-5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-mono tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                className="p-2 rounded-xl bg-white opacity-70 text-black hover:opacity-100 disabled:opacity-70 transition cursor-pointer"
                aria-label="Add task"
                disabled={!todo.length}
                onClick={handleAdd}
            >
                <Plus size={TODO_ADD_ICON_SIZE} />
            </button>
        </Row>
    )
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