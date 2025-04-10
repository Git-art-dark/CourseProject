import "./App.css";
import MainScreen from "./components/MainScreen/MainScreen";
import Header from "./components/Header/Header";
import Discount from "./components/Discount/Discount";
import NewItems from "./components/NewItems/NewItems";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <Discount />
      <NewItems />
      <Bestsellers />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
