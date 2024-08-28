import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import axios from "axios";

export async function POST(request: NextRequest) {
  // Получаем данные из запроса
  const { email, name, message, idea, recaptchaToken } = await request.json();

  // Проверка reCAPTCHA токена
  const secretKey = "6Lcm3jAqAAAAAKYS3zwN7_-ic9iA_HpAHGQijFUG"; // Ваш секретный ключ
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await axios.post(recaptchaUrl);
    const recaptchaSuccess = recaptchaResponse.data.success;

    if (!recaptchaSuccess) {
      return NextResponse.json({ error: "Invalid reCAPTCHA" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 500 });
  }

  // Настройка транспорта для отправки почты
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com", // Или другой SMTP-сервер
    port: 465,
    secure: true, // true для порта 465, false для других портов
    auth: {
      user: "sendsynergia@gmail.com", // Ваш email
      pass: "haae crbi kwxj dsji", // Пароль приложения
    },
  });

  // Параметры письма
  const mailOptions: Mail.Options = {
    from: "sendsynergia@gmail.com", // Адрес отправителя
    to: "rovio11@mail.ru", // Адрес получателя
    subject: `Message from ${name} (${email})`, // Тема письма
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Idea: ${idea}
    `, // Тело письма
  };

  // Отправка письма
  const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
