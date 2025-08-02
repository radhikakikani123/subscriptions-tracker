import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env';

export const accountEmail = 'radhikakikani56@gmail.com'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD
  }
})