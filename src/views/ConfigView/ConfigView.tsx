import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { DiscordConfigurationContext } from '../../contexts/DiscordConfigurationContext';
import { Button } from '@mui/material';

const READ_THE_DOCS_SERVER = '238975753969074177';
const CHAT_CHANNEL = '718795219369328661';

function ConfigView() {
  const discordConfiguration = useContext(DiscordConfigurationContext);

  const [server, setServer] = useState("")
  const [channel, setChannel] = useState("")

  function update() {
    discordConfiguration.setServer(server);
    discordConfiguration.setChannel(channel);
  }

  return <form onSubmit={(event) => update}>
    <TextField label="Server" value={READ_THE_DOCS_SERVER} onChange={(event) => setServer(event.target.value)}></TextField>
    <TextField label="Channel" value={CHAT_CHANNEL} onChange={(event) => setChannel(event.target.value)}></TextField>
    <Button>OK</Button>
  </form>;
}

export default ConfigView;
