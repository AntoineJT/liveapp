import { getVersion } from '@tauri-apps/api/app';

const title = document!.querySelector(".titlebar a")!
title.textContent += ` v${await getVersion()}`
