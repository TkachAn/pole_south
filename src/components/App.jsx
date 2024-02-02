import {Route, Routes} from "react-router-dom";
import { LayOut } from "./layOut/shareLayOut";
import { Home } from "pages/homePage";
import { NotFound } from "pages/NF404Page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut/>}>
				<Route index element={<Home/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Route>
    </Routes>
  );
};
export default App;