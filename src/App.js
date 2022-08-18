import "./App.scss";
import { Routes, Route } from "react-router-dom";

// components importing:
import Home from "./components/pages/main/home/Home";
import Navigation from "./components/pages/main/navigation/Navigation";
import Footer from "./components/pages/main/footer/Footer";
import NftAndTokens from "../src/components/pages/nftAndTokens/NftAndTokens";
import Partners from "../src/components/pages/partners/Partners.jsx";
import MindMap from "./components/pages/mindMap/MindMap";
import TeamAndValues from "./components/pages/teamAndValues/TeamAndValues";
import WaitList from "../src/components/pages/waitList/WaitList.jsx";
function App() {
    return (
        <div className="App">
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/NftAndTokens" element={<NftAndTokens />} />
                    <Route path="/Partners" element={<Partners />} />
                    <Route path="/MindMap" element={<MindMap />} />
                    <Route path="/TeamAndValues" element={<TeamAndValues />} />

                    <Route path="/WaitList" element={<WaitList />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
