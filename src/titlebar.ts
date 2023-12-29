import { emit } from '@tauri-apps/api/event'
import { appWindow } from '@tauri-apps/api/window'

document!.getElementById('minimize')!
  .addEventListener('click', 
    () => appWindow.minimize().catch(console.error))
document!.getElementById('close')!
  .addEventListener('click', 
    () => appWindow.close().catch(console.error))
document!.getElementById('adjust')!
  .addEventListener('click', 
    () => emit('adjust').catch(console.error))
