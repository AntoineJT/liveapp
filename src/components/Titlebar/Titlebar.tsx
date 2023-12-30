import './Titlebar.css';
import { Close, Minimize } from '@mui/icons-material';
import { Typography } from '@mui/material';
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
      <Typography data-tauri-drag-region component="h1">
        Live App v{version}
      </Typography>
      <section className="buttons">
        <Minimize onClick={minimize} sx={{ cursor: 'pointer' }} />
        <Close onClick={close} sx={{ cursor: 'pointer' }} />
      </section>
    </header>
  );
}

export default Titlebar;
