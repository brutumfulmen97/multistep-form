import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/state";
import Info from "./Steps/Info";
import Plan from "./Steps/Plan";
import Summary from "./Steps/Summary";
import { Stepper } from "./Steps/Stepper";
import End from "./Steps/End";

function App() {
    return (
        <main className="w-full h-screen bg-gray-100 grid place-items-center">
            <div className="w-[700px] h-[500px] bg-white rounded-lg shadow flex justify-between gap-6 p-6">
                <AppProvider>
                    <Router>
                        <Stepper />
                        <Routes>
                            <Route path="/" element={<Info />} />
                            <Route path="/plan" element={<Plan />} />
                            <Route path="/summary" element={<Summary />} />
                            <Route path="/end" element={<End />} />
                        </Routes>
                    </Router>
                </AppProvider>
            </div>
        </main>
    );
}

export default App;
