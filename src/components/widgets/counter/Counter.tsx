import { useEffect, useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import * as storage from '../../../utils/storage.helper';
import { ICounterOptions, ICounterWidget } from "./counter.types";
import { COUNTER_BUTTONS_SIZE } from "./counter.config";
import WidgetContainer from "../../common/WidgetContainer";

interface CounterProps {
    id: ICounterWidget['id'];
    options: ICounterOptions;
}

export default function Counter({ id, options }: CounterProps) {
    if (options?.mode === 'preview') {
        return <CounterPreviewWidget />
    }

    return <CounterWidget id={id} options={options} />
}

/**
 * A Main Counter Widget used on grid.
 */
function CounterWidget({ id, options }: CounterProps) {
    const { step, total } = options;
    const [counter, setCounter] = useState<number>(() => {
        const value = storage.get(id);
        return typeof value === 'number' && !isNaN(value) ? value : 0;
    });

    useEffect(() => {
        storage.save(id, counter);
    }, [id, counter]);

    function increment() {
        setCounter(prevCounter => prevCounter + step >= total ? total : prevCounter + step);
    }

    function decrement() {
        setCounter(prevCounter => prevCounter - step >= 0 ? prevCounter - step : 0);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <WidgetContainer className="text-center">
            <div className="flex items-center justify-center">
                <div className="text-sm tracking-wide pr-4">Tracker:</div>
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
