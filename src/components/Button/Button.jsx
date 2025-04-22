import { useNavigate } from "react-router-dom";

export const ButtonMain = ({ children, className, to }) => {
  const navigate = useNavigate();
  return (
    <button
      className={"button-main arsenal-sc-bold " + className}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
};
