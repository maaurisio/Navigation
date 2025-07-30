import { View, Text, StyleSheet, Button } from 'react-native';

export const Productos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Pantalla de Productos</Text>
            <Button
                title='Volver a Home'
                onPress={() => {
                    navigation.navigate('HomeNav'); // Reemplaza la pantalla actual con Home
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
