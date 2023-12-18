import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these settings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PW,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    // text: message,
    html: `
    <html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
      <table
        bgcolor="#fafafa"
        style="
          width: 100% !important;
          height: 100%;
          background-color: #fafafa;
          padding: 20px;
          font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial,
            'Lucida Grande', sans-serif;
          font-size: 100%;
          line-height: 1.6;
        "
      >
        <tr>
          <td></td>
          <td
            bgcolor="#FFFFFF"
            style="
              border: 1px solid #eeeeee;
              background-color: #ffffff;
              border-radius: 5px;
              display: block !important;
              max-width: 600px !important;
              margin: 0 auto !important;
              clear: both !important;
            "
          >
            <div
              style="
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
                display: block;
              "
            >
              <table style="width: 100%">
                <tr>
                  <td>
                    <p
                      style="
                        text-align: center;
                        display: block;
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid #dddddd;
                      "
                    >
                      <img
                        src="https://a.storyblok.com/f/251472/294x150/1492264476/khani-logo.svg"
                        style="width:250px"
                      />
                    </p>
                    <p
                      style="
                        margin-bottom: 10px;
                        font-weight: normal;
                        font-size: 16px;
                        color: #333333;
                      "
                    >
                      Name: ${name}
                    </p>
                    <p
                      style="
                        margin-bottom: 10px;
                        font-weight: normal;
                        font-size: 16px;
                        color: #333333;
                      "
                    >
                      Email: ${email}
                    </p>
                    <p
                      style="
                        margin-bottom: 10px;
                        font-weight: normal;
                        font-size: 16px;
                        color: #333333;
                      "
                    >
                      Message: ${message}
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td></td>
        </tr>
      </table>
    </body>
  </html>
    `,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
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
