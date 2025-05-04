import MainScreen from "../../components/MainScreen/MainScreen";
import Discount from "../../components/Discount/Discount";
import NewItems from "../../components/NewItems/NewItems";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Partners from "../../components/Partners/Partners";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <>
      <ScrollToTopButton />
      <ToastContainer />

      <MainScreen />
      <Discount />
      <NewItems />
      <Bestsellers />
      <Partners />
    </>
  );
}
