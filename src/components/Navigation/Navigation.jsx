import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li>
                    <NavLink 
                        to="/QrCode/generate" 
                        className={({ isActive }) => 
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                    >
                        Генерировать QR код
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/QrCode/scan" 
                        className={({ isActive }) => 
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                    >
                        Сканировать QR код
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/QrCode/generateHistory" 
                        className={({ isActive }) => 
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                    >
                        История генерации
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/QrCode/scanHistory" 
                        className={({ isActive }) => 
                            isActive ? `${s.link} ${s.active}` : s.link
                        }
                    >
                        История сканирования
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};