import ReactDOM from 'react-dom/client';
import AppNavbar from './AppNavbar/AppNavbar'
import AppRoutes from './AppRoutes/AppRoutes'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele)
root.render(
    <BrowserRouter>
        <AppNavbar />
        <AppRoutes />
    </BrowserRouter>
)
