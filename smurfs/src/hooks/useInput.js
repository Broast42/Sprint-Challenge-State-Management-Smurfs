import { useState } from 'react';

export const useInput = initial => {
    const [value, setValue] = useState(initial);
    const handle = newValue => {
        setValue(newValue);
    };
    return [value, handle];
};