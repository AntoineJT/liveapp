import Titlebar from "./components/Titlebar/Titlebar";
import WidgetBot from '@widgetbot/react-embed';
import './App.css'

function App() {
  return <>
    <Titlebar></Titlebar>
    <WidgetBot className="widgetbot"
      server="238975753969074177" 
      channel="718795219369328661"
    />
  </>;
}

export default App;
