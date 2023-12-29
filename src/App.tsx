import './App.css';
import { DiscordConfigurationContext } from './contexts/DiscordConfigurationContext';
import MainPage from './pages/MainPage/MainPage';
import ConfigView from './views/ConfigView/ConfigView';
import MainView from './views/MainView/MainView';
import { useContext } from 'react';

function App() {
  const discordConfiguration = useContext(DiscordConfigurationContext);

  const emptyConfig = discordConfiguration.channel == null || discordConfiguration.server == null;
  const view = emptyConfig ? <ConfigView /> : <MainView />;

  return <MainPage>{view}</MainPage>;
}

export default App;
