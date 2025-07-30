import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title='Ir a Contactos'
                onPress={() => {
                    navigation.navigate('ContactsNav');
                }}
            />
            <Button
                title='Ir a Productos'
                onPress={() => {
                    navigation.navigate('ProductosNav');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
