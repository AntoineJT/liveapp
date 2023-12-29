import './App.css';
import MainView from './views/MainView/MainView';

const READ_THE_DOCS_SERVER = '238975753969074177';
const CHAT_CHANNEL = '718795219369328661';

function App() {
  return <MainView server={READ_THE_DOCS_SERVER} channel={CHAT_CHANNEL} />;
}

export default App;
