import React from 'react'

import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { BOOKS } from '../../constants/books'

import CategoryProducts from '../../components/molecules/category-products'

const Shelfs = ({ navigation, route }) => {
    const { id } = route.params;
    const selectedGenre = BOOKS.filter(product => product.category === id);
    const handleSelectCategory = (item) => {
        navigation.navigate('Book', { item, name: item.name })
    }
    const renderItem = ({ item }) => <CategoryProducts item={item} onSelected={handleSelectCategory} />

    return (
        <View style={styles.container}>
            <FlatList 
                data={selectedGenre}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Shelfs