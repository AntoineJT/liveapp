import './Titlebar.css'
import { appWindow } from '@tauri-apps/api/window';

function Titlebar() {

    const minimize = () => appWindow.minimize().catch(console.error);
    const close = () => appWindow.close().catch(console.error);
 
    return (
        <header data-tauri-drag-region className="titlebar">
            <h1 data-tauri-drag-region>Live App</h1>
            <section className="buttons">
                <button id="minimize" onClick={minimize}>
                    <img src="src/assets/fontawesome5/minimize.svg" alt="minimize window" />
                </button>
                <button id="close" onClick={close}>
                    <img src="src/assets/fontawesome5/close.svg" alt="close window" />
                </button>
            </section>
        </header>);
}

export default Titlebar;
