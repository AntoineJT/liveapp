import './Titlebar.css'
import { appWindow } from '@tauri-apps/api/window';

function Titlebar() {

    const minimize = () => appWindow.minimize().catch(console.error);
    const close = () => appWindow.close().catch(console.error);
 
    return (
        <div data-tauri-drag-region className="titlebar">
            <a data-tauri-drag-region>Live App</a>
            <div className="buttons">
                <button id="minimize" onClick={minimize}>
                    <img src="src/assets/fontawesome5/minimize.svg" alt="minimize window" />
                </button>
                <button id="close" onClick={close}>
                    <img src="src/assets/fontawesome5/close.svg" alt="close window" />
                </button>
            </div>
        </div>);
}

export default Titlebar;
