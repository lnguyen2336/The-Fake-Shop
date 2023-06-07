import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions';
import { useDispatch } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from "axios";

const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch()
    console.log('Products',products);
    
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Err',err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;

