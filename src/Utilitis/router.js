import { createBrowserRouter } from "react-router-dom";
import CheakList from "../components/CheckList/CheakList";
import Shop from "../components/Shop/Shop";
import Main from "../layout/Main";


export const router = createBrowserRouter([
   { path: "/", element: <Main></Main> },
   { path: 'shop', element: <Shop></Shop> },
   { path: 'checklist', element: <CheakList></CheakList> }
])