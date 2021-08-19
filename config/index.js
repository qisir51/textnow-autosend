module.exports = {
  username: process.env.TEXTNOW_USERNAME || '',
  password: process.env.TEXTNOW_PASSWORD || '',
  cookies: process.env.TEXTNOW_COOKIES || '',
  recipient: process.env.TEXTNOW_RECIPIENT || '(760) 302-0466',
  message: process.env.TEXTNOW_MESSAGE || 'auto-send message',
  captchaToken: process.env.CAPTCHA_TOKEN || '',
};
