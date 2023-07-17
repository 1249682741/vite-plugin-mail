import{ Plugin, ResolvedConfig, normalizePath} from 'vite'
import type {Options} from './type'
import Mail from './mail'
import {resolve} from 'node:path'
import {existsSync} from 'node:fs'
import chalk from 'chalk'

export default function VitePluginMail({ user, pass, to, file }: Options): Plugin {
  let path = ''

  return {
    name: 'vite-plugin-mail',
    apply: 'build',
    configResolved(resolvedConfig: ResolvedConfig) {
      const {root} = resolvedConfig
      path = normalizePath(resolve(root, file))
    },
    async closeBundle() {
      console.log('vite-plugin-mail: 开始执行closeBundle');
      console.log('path: ', path);
      
      if (!existsSync(path)) {
        console.log(`vite-plugin-mail: ${chalk.red(path, '找不到文件！')}`);
        return
      }
      const mail = new Mail({user, pass})
      await mail.send({
        to: to || user,
        subject: 'VitePluginuser自动发送',
        attachments: [
          {
            path
          }
        ]
      })
      console.log(`vite-plugin-mail: ${chalk.green('邮件发送成功！')}`);
      
    },
  }
}


