
import { Outlet } from 'react-router-dom';
import App from '../App';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;