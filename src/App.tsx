import './App.css';
import Titlebar from './components/Titlebar/Titlebar';
import { DiscordConfigurationContext } from './contexts/DiscordConfigurationContext';
import ConfigView from './views/ConfigView/ConfigView';
import MainView from './views/MainView/MainView';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';

function App() {
  const [server, setServer] = useState('');
  const [channel, setChannel] = useState('');

  const emptyConfig = channel === '' || server === '';
  const view = emptyConfig ? <ConfigView /> : <MainView />;

  return (
    <>
      <CssBaseline />
      <DiscordConfigurationContext.Provider value={{ server, setServer, channel, setChannel }}>
        <Titlebar />
        {view}
      </DiscordConfigurationContext.Provider>
    </>
  );
}

export default App;
