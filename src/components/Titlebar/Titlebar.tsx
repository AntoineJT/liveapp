import './Titlebar.css';
import { Close, Minimize } from '@mui/icons-material';
import { getVersion } from '@tauri-apps/api/app';
import { appWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';

function Titlebar() {
  const minimize = () => appWindow.minimize().catch(console.error);
  const close = () => appWindow.close().catch(console.error);

  const [version, setVersion] = useState('');

  useEffect(() => {
    getVersion().then(setVersion).catch(console.error);
  }, []);

  return (
    <header data-tauri-drag-region className="titlebar">
      <h1 data-tauri-drag-region>Live App v{version}</h1>
      <section className="buttons">
        <Minimize onClick={minimize} />
        <Close onClick={close} />
      </section>
    </header>
  );
}

export default Titlebar;
