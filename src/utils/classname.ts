export type ClassName = undefined | null | false | string | string[] | Record<string, boolean>;

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
                return Object.entries(param)   // Array<[key, value]>
                    .filter(entry => entry[1])
                    .map(entry => entry[0])
                    .join(' ');
            }
            return param;
        })
        .join(' ')
        .trim();
}
