import {useMode} from './useMode';

export const useTightMode = initial => {
    const tightModeOn = () => {
        document.body.classList.add('tight-mode');
    }

    const tightModeOff = () => {
        document.body.classList.remove('tight-mode');
    }

    const [toggleTightMode] = useMode(initial, tightModeOn, tightModeOff);

    return [toggleTightMode];
}