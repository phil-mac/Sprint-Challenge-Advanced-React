import {useState, useEffect} from 'react';

export const useMode = (initial, handleModeOn, handleModeOff) => {
    const [mode, setMode] = useState(initial);

    useEffect(() => {
        mode ? handleModeOn() : handleModeOff();
    }, [mode])

    const toggleMode = () => {
        setMode(!mode);
    }

    return [toggleMode];
}

