import './App.css';
import {Menu} from "./components/Menu";
import {Main} from "./components/Main";
import {Services} from "./components/Services";
import {PortfolioGrid} from "./components/PortfolioGrid";
import {About} from "./components/About";
import {Team} from "./components/Team";
import {Clients} from "./components/Clients";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {PortfolioModal1} from "./components/PortfolioModal1";
import {PortfolioModal2} from "./components/PortfolioModal2";
import {PortfolioModal3} from "./components/PortfolioModal3";
import {PortfolioModal4} from "./components/PortfolioModal4";
import {PortfolioModal5} from "./components/PortfolioModal5";
import {PortfolioModal6} from "./components/PortfolioModal6";
import {Study} from "./components/Study";
import {Test} from "./components/Test";
import {Registration} from "./components/Registration";


function App() {
  return (
    <div>
        <Menu/>
        <Main/>
        <Services/>
        <PortfolioGrid/>
        <About/>
        <Team/>
        <Clients/>
        <Registration/>
        <Study/>
        <Test/>
        <Contact/>
        <Footer/>
        <PortfolioModal1/>
        <PortfolioModal2/>
        <PortfolioModal3/>
        <PortfolioModal4/>
        <PortfolioModal5/>
        <PortfolioModal6/>

    </div>
  );
}

export default App;
