import {useMode} from './useMode';

export const useDarkMode = initial => {
    const darkModeOn = () => {
        document.body.classList.add('dark-mode');
    }

    const darkModeOff = () => {
        document.body.classList.remove('dark-mode');
    }

    const [toggleDarkMode] = useMode(initial, darkModeOn, darkModeOff);

    return [toggleDarkMode];
}

