import { Plugin } from 'vite'



export default function VitePluginMail(): Plugin {
  return {
    name: 'vite-plugin-mail',
    apply: 'build',
  }
}
