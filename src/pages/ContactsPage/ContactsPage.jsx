import { useState } from "react";
import "./ContactsPage.css";

export default function ContactsPage() {
  const mapLocation = "44.7236,37.7686";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Форма отправлена:", formData);
    alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contacts-page arsenal-sc-regular">

      <div className="contacts-container">
        <div className="contact-info">
          <h2>Наши контакты</h2>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Адрес:</h3>
              <p>Магазин Premier Techno находится на 2 этаже ТЦ "Приморский Галерея"</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Телефоны:</h3>
              <p>+7 (495) 123-45-67 (многоканальный)</p>
              <p>+7 (977) 765-43-21 (WhatsApp, Telegram)</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div>
              <h3>Часы работы:</h3>
              <p>Пн-Пт: 10:00 - 21:00</p>
              <p>Сб-Вс: 10:00 - 20:00</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email:</h3>
              <p>info@premier-techno.ru</p>
              <p>support@premier-techno.ru (техподдержка)</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Обратная связь</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Ваше сообщение:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn arsenal-sc-regular">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <h2>Наш магазин на карте</h2>
        <div className="map-wrapper">
          <iframe
            title="Premier Techno в Новороссийске"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.123456789012!2d${mapLocation.split(',')[1]}!3d${mapLocation.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQzJzI1LjAiTiAzN8KwNDYnMDguOSJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru`}
            width="100%"
            height="450"
            style={{ border: "solid", borderWidth: 7, borderColor: "#13b3f8" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="map-annotation">
          <p>📍 Магазин Premier Techno находится на 2 этаже ТЦ "Приморский Галерея"</p>
          <p>🚗 Парковка на 50 мест (первые 2 часа бесплатно для клиентов)</p>
          <p>🚍 Остановка "Морская" (маршруты 1, 4, 10, 21)</p>
        </div>
      </div>
    </div>
  );
}
