import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./components/Cars";
import Suv from "./components/Suv";
import Sedan from "./components/Sedan";
import Sport from "./components/Sport";
import Hatchback from "./components/Hatchback";
import Cardetail from "./pages/Cardetail";
import Filter from "./components/Filter";
import FilterContexProvider from "./Contex/FilterContexProvider";

const App = () => {
    return (
        <div>
           <FilterContexProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cars" element={<Cars/>}/>
                    <Route path="/suv" element={<Suv/>}/>
                    <Route path="/sedan" element={<Sedan/>}/>
                    <Route path="/sport" element={<Sport/>}/>
                    <Route path="/hatchback" element={<Hatchback/>}/>
                    <Route path="cardetail/:carId" element={<Cardetail/>}/>
                    <Route path="/filter" element={<Filter/>}/>
                </Routes>
           </FilterContexProvider>
        </div>
    );
};

export default App;