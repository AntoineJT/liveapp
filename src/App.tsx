import './App.css';
import Titlebar from './components/Titlebar/Titlebar';
import { CssBaseline } from '@mui/material';
import WidgetBot from '@widgetbot/react-embed';

function App() {
  const READ_THE_DOCS_SERVER = '238975753969074177';
  const CHAT_CHANNEL = '718795219369328661';

  return (
    <>
      <CssBaseline />
      <main>
        <Titlebar />
        <WidgetBot className="widgetbot" server={READ_THE_DOCS_SERVER} channel={CHAT_CHANNEL} />
      </main>
    </>
  );
}

export default App;
