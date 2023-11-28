import styles from './MainLayouts.module.scss'
import {classNames} from "../lib/classNames.ts";
import {Route, Routes} from "react-router-dom";
import {CartPage} from "../pages/CartPage/CartPage.tsx";
import {HomePage} from "../pages/HomePage/HomePage.tsx";

export const MainLayouts = () => {
    return (
        <div className={classNames(styles.MainLayouts, {}, [])}>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/cart" element={<CartPage />}/>
            </Routes>
        </div>
    );
};