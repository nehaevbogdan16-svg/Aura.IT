const TOKEN = "ТВОЙ_ТОКЕН_БОТА";
const CHAT_ID = "ТВОЙ_CHAT_ID";

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const text = `
Новая заявка:
Имя: ${name}
Телефон: ${phone}
Задача: ${message}
  `;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(() => {
    alert("Заявка отправлена!");
  })
  .catch(() => {
    alert("Ошибка отправки");
  });
});