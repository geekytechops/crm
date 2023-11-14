import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Head from "./Head";
import Footer from "./Footer";

function App() {
  return (
    <div className="main-layout">
      <Head />
      <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
