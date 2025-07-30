import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Contacts } from './app/screens/ContactsScreen';
import { Home } from './app/screens/HomeScreen';
import { Productos } from './app/screens/ProductosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeNav" component={Home} />
        <Stack.Screen name="ProductosNav" component={Productos} />
        <Stack.Screen name="ContactsNav" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
