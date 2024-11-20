import { useState } from "react";
const useMultiState = <T extends Record<string, any>>(
    initialState: T
): [T, (key: keyof T, value: T[keyof T]) => void] => {
    const [state, setState] = useState(initialState);
    const updateState = (key: keyof T, value: T[keyof T]) => {
        setState((prev) => ({ ...prev, [key]: value }));
    };

    return [state, updateState];
};
export default useMultiState;