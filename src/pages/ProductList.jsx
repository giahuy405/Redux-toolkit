import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import ProductItem from './ProductItem'
import { getAPI } from '../redux/reducers/shopReducer'
const ProductList = () => {
    const { productList } = useSelector(state => state.shopReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getAPI()
        )
    }, [])
    return (
        <div className=' max-w-6xl mx-auto'>
            <Cart />
            <div className="grid grid-cols-4 gap-4">
                {productList.map(item =>
                    <ProductItem item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default ProductList