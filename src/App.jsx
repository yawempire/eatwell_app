import {BottomNavigation}  from "./components/BottomNavigation";
import {EatWell}  from "./main_pages/EatWell";
import {HomePage} from "./main_pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {Messenger}  from "./main_pages/Messenger";
import  {Cart}  from "./main_pages/Cart";
import {MartEnd}  from "./main_pages/MartEnd";


export default function App() {
  return (
    <>
    <BottomNavigation />
     <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/eatwell" element={<EatWell />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/martend" element={<MartEnd />} />
        </Routes>
      </div>
     </Router>
    </>
  )
}