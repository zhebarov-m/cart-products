import styles from './Cart.module.scss'
import {classNames} from "../../lib/classNames.ts";
import {FC, SetStateAction} from "react";
import {iProduct} from "../../App.tsx";
import {CartItem} from "../CartItem/CartItem.tsx";

interface iCartProps {
    data: iProduct[],
    setData: React.Dispatch<SetStateAction<iProduct[]>>
}



export const Cart:FC<iCartProps> = (props) => {
    const {data, setData} = props

    const increment = (id: number) => {
        const newData = [...data];
        const item = newData.find(item => item.id === id)

        if (item) {
            item.quantity++;
            setData(newData)
        }
    }

    const decrement = (id: number) => {
        const newData = [...data];
        const item = newData.find(item => item.id === id)

        if (item) {
            item.quantity--;
            setData(newData)
        }
    }

    const removeItem = (id: number) => {
        const newData = [...data];
        setData(newData.filter((item) => item.id !== id))
    }

    return (
        <div className={classNames(styles.Cart, {}, [])}>
            {data.map(item => <CartItem key={item.id} item={item} decrement={decrement} increment={increment} removeItem={removeItem}/>)}
        </div>
    );
};