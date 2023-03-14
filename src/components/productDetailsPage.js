import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

const ProductsDetails = ({ route }) => {
    const { item } = route.params;
    const { title, price, category } = item;
    const imageUrl = item?.images[0];
    console.log('item', item);
    return (
        <View style={styles.container}>

            <View>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.image}
                />
            </View>
            <View>
                <Text> {title}</Text>
                <Text> Category ~ {category}</Text>
                <Text> {price}</Text>
            </View>
            <Button title="Add to Cart" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 8
    }, image:{
        width: 300,
        height: 400,
        margin: 20
    }
});
export default ProductsDetails;
