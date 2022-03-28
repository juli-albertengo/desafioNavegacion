import React from 'react'

import { View, Text, Button } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'

const Book = ({ navigation, route }) => {
    const { item } = route.params;
    const { name, description, price, weight } = item;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>price: ${price}</Text>
            <Text style={styles.text}>weight: {weight}</Text>
            <Button title="Order now" onPress={() => null} color={colors.primaryColor}/>
        </View>
    )
}

export default Book