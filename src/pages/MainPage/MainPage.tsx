import Titlebar from '../../components/Titlebar/Titlebar';
import { DiscordConfigurationContext } from '../../contexts/DiscordConfigurationContext';
import { PropsWithChildren, useContext } from 'react';

function MainPage({ children }: PropsWithChildren) {
  const discordConfiguration = useContext(DiscordConfigurationContext);

  return (
    <>
      <DiscordConfigurationContext.Provider value={discordConfiguration}>
        <Titlebar />
        {children}
      </DiscordConfigurationContext.Provider>
    </>
  );
}

export default MainPage;
