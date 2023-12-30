import { DiscordConfigurationContext } from '../../contexts/DiscordConfigurationContext';
import './ConfigView.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormEvent, useContext } from 'react';

const READ_THE_DOCS_SERVER = '238975753969074177';
const CHAT_CHANNEL = '718795219369328661';

function ConfigView() {
  const discordConfiguration = useContext(DiscordConfigurationContext);

  function update(event: FormEvent<any>) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      server: { value: string };
      channel: { value: string };
    };

    discordConfiguration.setServer(target.server.value);
    discordConfiguration.setChannel(target.channel.value);
  }

  const style = {
    'background-color': 'white',
    'margin-top': '2vh',
  };

  return (
    <form onSubmit={update}>
      <TextField
        required
        name="server"
        label="Server"
        defaultValue={READ_THE_DOCS_SERVER}
        variant="outlined"
        sx={style}
      />
      <TextField required name="channel" label="Channel" defaultValue={CHAT_CHANNEL} variant="outlined" sx={style} />
      <Button type="submit">OK</Button>
    </form>
  );
}

export default ConfigView;
