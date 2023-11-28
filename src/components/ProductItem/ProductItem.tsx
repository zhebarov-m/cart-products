    import styles from './ProductItem.module.scss'
    import {classNames} from "../../lib/classNames.ts";
    import {FC} from "react";
    import {iProduct } from "../../App.tsx";


    export interface ProductItemProps {
        product: iProduct;
        handleAddToCart: (product: iProduct) => void;
    }

    export const ProductItem:FC<ProductItemProps> = (props) => {
        const { product, handleAddToCart } = props
        return (
            <div className={classNames(styles.ProductItem, {}, [])}>
                <div className={styles.ProductContainer}>
                    <img src={product.imageUrl} alt=""/>
                    <h3>{product.title}</h3>
                    {/*<div className={styles.quantity}>*/}
                    {/*        <FiMinusCircle />*/}
                    {/*    <p>{product.quantity}</p>*/}
                    {/*    <FiPlusCircle onClick={handleIncrease} />*/}
                    {/*</div>*/}
                    <p>{product.price / 100}<small>RUB</small></p>
                </div>
                <button onClick={() => handleAddToCart(product)}>В корзину</button>
            </div>
        );
    };