import { DiscordConfigurationContext } from '../../contexts/DiscordConfigurationContext';
import WidgetBot from '@widgetbot/react-embed';
import { useContext } from 'react';

function MainView() {
  const discordConfiguration = useContext(DiscordConfigurationContext);

  return (
    <WidgetBot className="widgetbot" server={discordConfiguration.server} channel={discordConfiguration.channel} />
  );
}

export default MainView;
