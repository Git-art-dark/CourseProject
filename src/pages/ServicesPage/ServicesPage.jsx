import { ButtonMain } from "../../components/Button/Button";

export default function ServicesPage() {
  return (
    <div className="main-delivery">
      <section className="service">
        <h2>Доставка и подъем</h2>
        <p>
          Быстрая и аккуратная доставка вашей техники в любое удобное время. Мы
          бережно доставим и поднимем технику на нужный этаж.
        </p>
        <ul>
          <li>Доставка в день заказа (при наличии товара на складе)</li>
          <li>Подъем на любой этаж (включая услуги грузчиков)</li>
          <li>Распаковка и проверка техники при вас</li>
        </ul>
        <div className="price">Стоимость: от 500 руб.</div>
        <div className="button-section">
          <ButtonMain to="/delivery">Доставка</ButtonMain>
        </div>
      </section>

      <section className="service">
        <h2>Установка и подключение</h2>
        <p>
          Профессиональная установка и подключение бытовой техники с гарантией
          на работы.
        </p>
        <ul>
          <li>Подключение крупной техники (холодильники, стиральные машины)</li>
          <li>Установка встраиваемой техники</li>
          <li>Подключение к водоснабжению и канализации</li>
          <li>Проверка работоспособности после установки</li>
        </ul>
        <div className="price">От 1 500 руб.</div>
        <div className="button-section">
          <ButtonMain to="/repair">Заказать установку</ButtonMain>
        </div>
      </section>

      <section className="service">
        <h2>Гарантийное обслуживание</h2>
        <p>
          Бесплатный ремонт и обслуживание техники в течение гарантийного срока.
        </p>
        <ul>
          <li>Диагностика неисправностей</li>
          <li>Замена деталей по гарантии</li>
          <li>Выезд мастера на дом</li>
          <li>Продление гарантии на дополнительный срок</li>
        </ul>
        <div className="price">Бесплатно (в период гарантии)</div>
        <div className="button-section">
          <ButtonMain to="/warranty">Оставить заявку</ButtonMain>
        </div>
      </section>

      <section className="service">
        <h2>Платный ремонт</h2>
        <p>
          Качественный ремонт техники любых марок и моделей после окончания
          гарантийного срока.
        </p>
        <ul>
          <li>Ремонт любой сложности</li>
          <li>Использование оригинальных запчастей</li>
          <li>Гарантия на выполненные работы</li>
          <li>Срочный ремонт</li>
        </ul>
        <div className="price">От 2 000 руб.</div>
        <div className="button-section">
          <ButtonMain to="/repair">Вызвать мастера</ButtonMain>
        </div>
      </section>

      <section className="service">
        <h2>Утилизация старой техники</h2>
        <p>Экологически безопасная утилизация вашей старой бытовой техники.</p>
        <ul>
          <li>Демонтаж и вывоз старой техники</li>
          <li>Официальная утилизация с документами</li>
          <li>Скидка на новую технику при утилизации старой</li>
        </ul>
        <div className="price">
          От 1 000 руб. (или бесплатно при покупке новой техники)
        </div>

        <div className="button-section">
          <ButtonMain to="/recycling">Заказать утилизацию</ButtonMain>
        </div>
      </section>

      <section className="service">
        <h2>Расширенная гарантия</h2>
        <p>Продлите срок гарантийного обслуживания на вашу технику.</p>
        <ul>
          <li>Гарантия до 5 лет</li>
          <li>Бесплатный ремонт в сервисных центрах</li>
          <li>Приоритетное обслуживание</li>
          <li>Бесплатная диагностика 2 раза в год</li>
        </ul>
        <div className="price">От 3 000 руб./год</div>
        <div className="button-section">
          <ButtonMain to="/extended-warranty">
            Оформить расширенну гарантию
          </ButtonMain>
        </div>
      </section>
    </div>
  );
}
