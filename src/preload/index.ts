import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindwos')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
