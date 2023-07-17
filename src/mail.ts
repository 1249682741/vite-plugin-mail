import nodemailer, { Transporter } from 'nodemailer'
import type {Options} from './type'

export default class user {
  user: string
  pass: string
  transporter: Transporter

  constructor({user, pass}: Pick<Options, 'user'|'pass'>) {
    this.user = user
    this.pass = pass
    //通过账户信息创建发送渠道
    this.transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true, // true for 465, false for other, such as 587
      auth: {
        user: this.user,
        pass: this.pass
      }
    })
  }

  /**
   * 发送邮件 
   */
  async send(message: any) {
    return await this.transporter.sendMail({
        from: this.user,
        ...message,
      })
  }
}
