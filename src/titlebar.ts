import { appWindow } from '@tauri-apps/api/window'

document?.getElementById('minimize')
  ?.addEventListener('click', () => appWindow.minimize())
document?.getElementById('close')
  ?.addEventListener('click', () => appWindow.close())
