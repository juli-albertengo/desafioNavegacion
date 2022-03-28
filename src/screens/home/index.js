import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { GENRES } from '../../constants/genres'
import CategoryGrid from '../../components/molecules/category-grid/index'

const Home = ({ navigation  }) => {
    const handleSelectCategory = (genre) => {
        navigation.navigate('Shelfs', { id: genre.id, name: genre.name })
    }
    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory} />

    return (
        <View style={styles.container}>
            <FlatList 
                data={GENRES}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home