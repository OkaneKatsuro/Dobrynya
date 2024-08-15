import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  // Получаем данные из запроса
  const { email, name, message, idea } = await request.json();

  // Настройка транспорта для отправки почты
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com", // Или другой SMTP-сервер
    port: 465,
    secure: true, // true для порта 465, false для других портов
    auth: {
      user: "f.o.larionov@gmail.com", // Ваш email
      pass: "wute drbj svwq jwnh", // Пароль приложения
    },
  });

  // Параметры письма
  const mailOptions: Mail.Options = {
    from: "f.o.larionov@gmail.com", // Адрес отправителя
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
