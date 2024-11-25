import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" 
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />

        <Drawer.Screen
          name="About" 
          options={{
            drawerLabel: 'About',
            title: 'About',
          }}
        />
        </Drawer>
        </GestureHandlerRootView>
);
}

export default DrawerLayout;