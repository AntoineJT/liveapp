import './App.css';
import Titlebar from './components/Titlebar/Titlebar';
import WidgetBot from '@widgetbot/react-embed';

function App() {
  const READ_THE_DOCS_SERVER = '238975753969074177';
  const CHAT_CHANNEL = '718795219369328661';

  return (
    <>
      <Titlebar />
      <WidgetBot className="widgetbot" server={READ_THE_DOCS_SERVER} channel={CHAT_CHANNEL} />
    </>
  );
}

export default App;
