import emailjs from 'emailjs-com';

const sendEmail = async (toEmail, message, koszyk, total, address) => {
  try {
    const templateParams = {
      to_email: toEmail,
      from_name: "A3_2023 GROUP Sklep Komputerowy",
      message: message,
      koszyk: koszyk,
      total: total,
      address: address,
    };

    const response = await emailjs.send(
      'service_17j3ll7',
      'template_4lpgcbs',
      templateParams,
      'Ru4FILBfU1Gj83bO7'
    );

    console.log('Email wysłany!', response);
  } catch (error) {
    console.error('Błąd podczas wysyłania emaila:', error);
  }
};

export default sendEmail;
