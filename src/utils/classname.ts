type ClassName = undefined | null | false | string | string[] | Record<string, boolean>;

export default function classname(...params: ClassName[]): string {
    return params
        .filter((param) => {
            if (Array.isArray(param)) {
                return param.length > 0;
            }
            if (param && typeof param === 'object') {
                return Object.keys(param).length > 0;
            }
            return !!param;
        })
        .map((param) => {
            if (Array.isArray(param)) {
                return param.join(' ');
            }
            if (param && typeof param === 'object') {
                return Object.entries(param)
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
                    .join(' ');
            }
            return param;
        })
        .join(' ')
        .trim();
}

classname(
    "bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center text-white font-mono overflow-hidden",
    true && "border-2 animate-[pulse-border_3s_ease-in-out_infinite]"
)
