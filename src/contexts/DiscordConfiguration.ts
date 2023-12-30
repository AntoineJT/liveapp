import { Dispatch, SetStateAction } from 'react';

export interface DiscordConfiguration {
  server: string;
  setServer: Dispatch<SetStateAction<string>>;
  channel: string;
  setChannel: Dispatch<SetStateAction<string>>;
}
