import { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(3px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(19, 179, 248, 0); }
  100% { box-shadow: 0 0 0 0 rgba(19, 179, 248, 0); }
`;

const slideIn = keyframes`
  from { transform: translateY(-100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  border: solid;
  border-color: #13b3f8;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
  border: solid;

  border-color: transparent;
  transition: all 0.8s;
  -webkit-transition: linear 0.8s;
  &:hover {
    border-color: #13b3f8;
  }
`;

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.button`
  flex: 1;
  padding: 20px;
  border: none;
  background: ${(props) => (props.active ? "#13b3f8" : "#eee")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;

  &:hover {
    background: ${(props) => (props.active ? "#13b3f8" : "#ddd")};
  }
`;

const FormContent = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s;

  &:focus {
    border-color: #13b3f8;
    outline: none;
  }
`;

const Button = styled.button`
  color: white;
  font-size: 20pt;
  width: 100%;
  padding: 0rem 3rem 0rem 3rem;
  height: 4rem;
  border-radius: 10rem;
  border-width: 0.3rem;
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  border-color: transparent;
  border-width: none;
  border-style: solid;
  transition: all 0.8s;
  -webkit-transition: linear 0.8s;
  border-color: white;
  animation: ${pulse} 2s infinite;

  &:hover {
    border-color: #13b3f8;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`;

const ForgotPassword = styled.p`
  text-align: center;
  color: #666;
  margin-top: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #13b3f8;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 46%;
  transform: translateX(-50%);
  background-color: #13b3f8;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out, ${fadeOut} 0.5s ease-out 2.5s;
  animation-fill-mode: forwards;
`;

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "login") {
      setNotificationMessage("Вход выполнен успешно!");
    } else {
      setNotificationMessage("Регистрация прошла успешно!");
    }

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <Container className="arsenal-sc-regular">
      {showNotification && <Notification>{notificationMessage}</Notification>}

      <FormContainer className="arsenal-sc-regular">
        <Tabs>
          <Tab
            className="arsenal-sc-regular"
            active={activeTab === "login"}
            onClick={() => setActiveTab("login")}
          >
            Вход
          </Tab>
          <Tab
            className="arsenal-sc-regular"
            active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            Регистрация
          </Tab>
        </Tabs>

        <FormContent className="arsenal-sc-regular">
          <Title>Premier Techno</Title>

          <form onSubmit={handleSubmit}>
            {activeTab === "register" && (
              <InputGroup delay="0.1s">
                <Input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            )}

            <InputGroup delay={activeTab === "register" ? "0.2s" : "0.1s"}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup delay={activeTab === "register" ? "0.3s" : "0.2s"}>
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            <Button type="submit" className="arsenal-sc-regular">
              {activeTab === "login" ? "Войти" : "Зарегистрироваться"}
            </Button>
          </form>

          {activeTab === "login" && (
            <ForgotPassword className="arsenal-sc-regular">
              Забыли пароль?
            </ForgotPassword>
          )}
        </FormContent>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
