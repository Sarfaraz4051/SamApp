import React, { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native';
// import Header from './header';
import Products from '../../assets/products.json';
import ProductItem from './ProductItem';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(Products.products);
    }, []);

    const showProductDetails = (item) => {
        console.log('object object');
        navigation.navigate('Details', { item });
    };

    return (
        <View>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem
                    item={item}
                    showProductDetails={showProductDetails} />}
            />

        </View>
    );
}

export default Home;
