import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NewProduct from "./components/NewProduct";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <NewProduct />
            <Features />
            <Footer />
        </div>
    );
}

export default App;