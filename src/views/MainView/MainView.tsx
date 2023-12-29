import Titlebar from '../../components/Titlebar/Titlebar';
import WidgetBot from '@widgetbot/react-embed';

interface MainViewProps {
  server: string;
  channel: string;
}

function MainView({ server, channel }: MainViewProps) {
  return (
    <>
      <Titlebar />
      <WidgetBot className="widgetbot" server={server} channel={channel} />
    </>
  );
}

export default MainView;
