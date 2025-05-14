import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SellerDashboard from './screens/SellerDashboard';
import BuyerDashboard from './screens/BuyerDashboard';
import OpeningHoursScreen from './screens/OpeningHoursScreen';
import { CartProvider } from './context/CartContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="SellerDashboard" component={SellerDashboard} />
          <Stack.Screen name="BuyerDashboard" component={BuyerDashboard} />
          <Stack.Screen name="OpeningHours" component={OpeningHoursScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}