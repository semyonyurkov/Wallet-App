import { NavLink } from 'react-router-dom';
import { Button, Space } from 'antd';
import 'antd/dist/reset.css';

const Menu = () => {
    return (
        <nav className="nav-header">
            <Space wrap>
                <Button type="link">
                    <NavLink className="menu-text" to="." end>
                        Главная страница
                    </NavLink>
                </Button>
                <Button type="link">
                    <NavLink className="menu-text" to="operations">
                        Операции
                    </NavLink>
                </Button>
            </Space>
        </nav>
    );
};

export default Menu;
