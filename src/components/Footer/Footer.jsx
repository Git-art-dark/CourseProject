import { vkLogo, yandexLogo } from "../../imports";

export default function Footer() {
  return (
    <>
      {/* <div className="solid-stick"></div> */}
      <div className="footer arsenal-sc-regular">
        <div className="left-footer">
          <h1 className="arsenal-sc-bold">Контакты</h1>
          <span className="call">
            Номер телефона: <p>+7 (495) 135-04-23</p>
          </span>
          <span className="e-mail">
            <p>
              E-mail:{" "}
              <a href="mailto:info@premier-techno.ru">info@premier-techno.ru</a>
            </p>
          </span>

          <span className="logo-section">
            <a href="https://vk.com/premiertechno" className="vk-logo">
              <img src={vkLogo} alt="vk_logo" />
            </a>
            <a
              href="https://market.yandex.ru/shop--premer-tekhno/142536/reviews"
              className="yandex-logo"
            >
              <img src={yandexLogo} alt="vk_logo" />
            </a>
          </span>
        </div>
        <div className="right-footer">
          <li>
            <a href="https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758088.jpg?t=st=1744915502~exp=1744919102~hmac=4bdbc9725e03d5f974e8c400dc779095a398cb8936862defa9736eff139e6acb&w=996">
              Доставка
            </a>
            <a href="https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758088.jpg?t=st=1744915502~exp=1744919102~hmac=4bdbc9725e03d5f974e8c400dc779095a398cb8936862defa9736eff139e6acb&w=996">
              Оплата
            </a>
            <a href="https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758088.jpg?t=st=1744915502~exp=1744919102~hmac=4bdbc9725e03d5f974e8c400dc779095a398cb8936862defa9736eff139e6acb&w=996">
              Дополнительные услуги
            </a>
            <a href="https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758088.jpg?t=st=1744915502~exp=1744919102~hmac=4bdbc9725e03d5f974e8c400dc779095a398cb8936862defa9736eff139e6acb&w=996">
              Обмен и возврат
            </a>
          </li>

          <div className="copyright">
            <p>
              © 2000-2025 . Все цены указаны в рублях. Перед покупкой уточняйте
              технические характеристики и комплектацию у продавца. Габариты
              техники, в том числе встраиваемой, указаны без выступающих частей,
              шлангов, проводов и т.д. Точные размеры представлены на сайте
              производителя или схеме встраивания.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
