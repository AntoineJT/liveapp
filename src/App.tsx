import './App.css';
import Titlebar from './components/Titlebar/Titlebar';
import { DiscordConfigurationContext } from './contexts/DiscordConfigurationContext';
import {  useState } from 'react';
import ConfigView from './views/ConfigView/ConfigView';
import MainView from './views/MainView/MainView';

function App() {
  const [server, setServer] = useState("");
  const [channel, setChannel] = useState("");

  const emptyConfig = channel === "" || server === "";
  const view = (emptyConfig ? <ConfigView /> : <MainView />)

  return <>
    <DiscordConfigurationContext.Provider value={{server, setServer, channel, setChannel}}>
      <Titlebar/>
      {view}
    </DiscordConfigurationContext.Provider> 
  </>;
}

export default App;
