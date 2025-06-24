import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { ICounterConfig, ICounterWidget } from "./counter.types";
import { COUNTER_BUTTONS_SIZE, COUNTER_DEFAULT_OPTIONS } from "./counter.config";
import WidgetContainer from "../../common/WidgetContainer";
import useWidgetOptions from "../../../hooks/useWidgetOptions";
import useWidgetData from "../../../hooks/useWidgetData";

interface CounterProps {
    id: ICounterWidget['id'];
    previewMode?: boolean;
}

export default function Counter({ id, previewMode }: CounterProps) {
    if (previewMode) {
        return <CounterPreviewWidget />
    }

    return <CounterWidget id={id} />
}

/**
 * A Main Counter Widget used on grid.
 */
function CounterWidget({ id }: { id: ICounterWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<ICounterConfig>(id);
    const { step, total, label } = widgetOptions || COUNTER_DEFAULT_OPTIONS;

    const { widgetData, updateWidgetData } = useWidgetData<ICounterWidget['data']>(id);
    const counter = typeof widgetData === 'number' && !isNaN(widgetData) ? widgetData : 0;

    function increment() {
        updateWidgetData(counter + step >= total ? total : counter + step);
    }

    function decrement() {
        updateWidgetData(counter - step >= 0 ? counter - step : 0);
    }

    function reset() {
        updateWidgetData(0);
    }

    return (
        <WidgetContainer className="text-center">
            <div className="flex items-center justify-center">
                <div className="text-sm tracking-wide pr-4">{label}</div>
                <DecrementButton onClick={decrement} />
                <span className="px-3 font-bold text-lg strong">{counter}/{total}</span>
                <IncrementButton onClick={increment} />
                <ResetButton onClick={reset} />
            </div>
        </WidgetContainer>
    )
}

/**
 * A Preview Counter Widget (Used on widget add modal)
 * @returns 
 */
function CounterPreviewWidget() {
    return (
        <WidgetContainer className="text-center">
            <div className="flex items-center justify-center">
                <div className="text-sm tracking-wide pr-4">Track:</div>
                <div className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition">
                    <Minus size={12} />
                </div>
                <span className="px-1 font-bold text-sm strong">5/10</span>
                <div className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition">
                    <Plus size={12} />
                </div>
                <div className="ml-6 cursor-pointer p-2 border border-white/20 rounded-full bg-white/10 transition">
                    <RotateCcw size={12} />
                </div>
            </div>
        </WidgetContainer>
    )
}

interface CommonButtonProps {
    onClick?: () => void;
    size?: number;
}
function DecrementButton({ onClick, size }: CommonButtonProps) {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button
            className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
            onClick={handleClick}
        >
            <Minus size={size || COUNTER_BUTTONS_SIZE} />
        </button>
    )
}

function IncrementButton({ onClick, size }: CommonButtonProps) {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button
            className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
            onClick={handleClick}
        >
            <Plus size={size || COUNTER_BUTTONS_SIZE} />
        </button>
    )
}

function ResetButton({ onClick, size }: CommonButtonProps) {
    const [confirm, setConfirm] = useState(false);

    function handleClick() {
        if (typeof onClick !== 'function') {
            return;
        }

        if (!confirm) {
            return setConfirm(true);
        }

        onClick();
        setConfirm(false);
    }

    const bgColor = confirm ? 'bg-red-400' : 'bg-white/10';

    return (
        <button
            className={`ml-6 cursor-pointer p-2 border border-white/20 rounded-full ${bgColor} transition`}
            onClick={handleClick}
        >
            <RotateCcw size={size || COUNTER_BUTTONS_SIZE} />
        </button>
    )
}
