import {useState, useEffect} from 'react';

export const useDarkMode = initial => {
    const [mode, setMode] = useState(initial);

    useEffect(() => {
        mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [mode])

    return [mode, setMode];
}

