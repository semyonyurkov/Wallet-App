import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <NavLink to="." end>
                Главная страница
            </NavLink>
            <NavLink to="operations">Операции</NavLink>
        </nav>
    );
};

export default Menu;
