import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { KanyePage } from "./Pages/KanyePage";
import { CountriesSearchPage } from "./Pages/CountriesSearchPage";
import { CountryInfoPage } from "./Pages/CountryInfoPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/kanye" element={<KanyePage />} />
                    <Route
                        path="/countries"
                        element={<CountriesSearchPage />}
                    />
                    <Route
                        path="/countries/info/:country"
                        element={<CountryInfoPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
