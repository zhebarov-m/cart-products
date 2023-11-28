import {useEffect, useState} from 'react'
import './HomePage.scss'
import axios from "axios";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdPricetags } from "react-icons/io";
import {Link} from "react-router-dom";
import {classNames} from "../../lib/classNames.ts";
import {ProductItem} from "../../components/ProductItem/ProductItem.tsx";
import {Cart} from "../../components/Cart/Cart.tsx";

const API_URL = 'https://d8f72c3ec1be9c84.mokky.dev/products'

export interface iProduct {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    quantity: number
}

export const HomePage = () => {
    const [products, setProducts] = useState<iProduct[]>([])
    const [cart, setCart] = useState<iProduct[]>([]);

    const fetchData = async (): Promise<void> => {
        const {data} = await axios.get(API_URL)
        setProducts(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleAddToCart = (product: iProduct) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    const calculateTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price / 100) * item.quantity
            , 0);
    };

    return (
        <div className={classNames('home-page', {}, [])}>
            <header className="header">
                <Link to="/cart" className='cart'>
                    КОРЗИНА
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24}}><TiShoppingCart />{calculateTotalItems()} |<IoMdPricetags /> {calculateTotalPrice()}</div>
                </Link>
            </header>
            <main className="content" style={{display: 'flex'}}>
                <div>
                    <h1>Список товаров</h1>
                    <div className="product-list">
                        {products.map(product => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>
                <Cart data={cart} setData={setCart}/>
            </main>
        </div>
    )
}

