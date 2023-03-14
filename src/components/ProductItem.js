import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const ProductItem = ({ item, showProductDetails = () => { } }) => {

    const { title, price, category } = item;
    const imageUrl = item?.images[0];

    return (
        <TouchableOpacity onPress={() => showProductDetails(item)}>
            <View style={styles.card}>
                <View style={styles.image}>
                    <Image
                        source={{
                            uri: imageUrl
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                </View>
                <View>
                    <Text> {title}</Text>
                    <Text> Category ~ {category}</Text>
                    <Text> {price}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 8,
        margin: 8,
        borderColor: 'black',
        borderWidth: 1
    },
    image: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});
export default ProductItem;
