import { createTransport, getTestMessageUrl } from 'nodemailer';
import 'dotenv/config';

export interface MailResponse {
  accepted?: string[] | null;
  envelope: Envelope;
  envelopeTime: number;
  messageId: string;
  messageSize: number;
  messageTime: number;
  rejected?: null[] | null;
  response: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string): string {
  return `
        <div style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
        ">
            <h2>Hello There!</h2>
            <p>${text}</p>
            <p>😘, Philly bob</p>
        </div>
    `;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  const info = (await transport.sendMail({
    to,
    from: 'test@example.com',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Your Password Reset Token is here!

    <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to Reset</a>
    `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`💌 Message sent: ${getTestMessageUrl(info)}`);
  }
}
