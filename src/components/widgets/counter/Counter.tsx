import { useEffect, useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import * as storage from '../../../utils/storage.helper';
import { ICounterOptions, ICounterWidget } from "./counter.types";
import { COUNTER_BUTTONS_SIZE } from "./counter.config";

interface CounterProps {
    id: ICounterWidget['id'];
    options: ICounterOptions;
}

export default function Counter({ id, options }: CounterProps) {
    const { step, total } = options;
    const [counter, setCounter] = useState<number>(Number(storage.get(id, 'counter')) || 0);

    useEffect(() => {
        storage.save(id, 'counter', counter);
    }, [counter]);

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
        <div className="text-center">
            <div className="flex items-center justify-center mr-[-58px]">
                <DecrementButton onClick={decrement} />
                <span className="px-4 font-bold text-2xl">{counter}/{total}</span>
                <IncrementButton onClick={increment} />
                <ResetButton onClick={reset} />
            </div>
            <div className="text-lg tracking-wide mt-2">Tracker</div>
        </div>
    )
}

interface CommonButtonProps {
    onClick: Function;
}

function DecrementButton({ onClick }: CommonButtonProps) {
    return (
        <button
            className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
            onClick={() => onClick()}
        >
            <Minus size={COUNTER_BUTTONS_SIZE} />
        </button>
    )
}

function IncrementButton({ onClick }: CommonButtonProps) {
    return (
        <button
            className="cursor-pointer p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
            onClick={() => onClick()}
        >
            <Plus size={COUNTER_BUTTONS_SIZE} />
        </button>
    )
}

function ResetButton({ onClick }: CommonButtonProps) {
    const [confirm, setConfirm] = useState(false);

    function handleClick() {
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
            <RotateCcw size={COUNTER_BUTTONS_SIZE} />
        </button>
    )
}
