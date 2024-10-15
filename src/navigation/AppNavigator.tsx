import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from '../components/LoginModal';
import ScreenX from '../screens/ScreenX';
import ScreenY from '../screens/ScreenY';
import ScreenZ from '../screens/ScreenZ';
import { Ionicons } from '@expo/vector-icons';
import { Title } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user, isLoading } = useAuth();
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'X') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Y') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Z') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerRight: () => 
            !user ? (
              <Ionicons 
                name="log-in-outline" 
                size={24} 
                color="blue" 
                onPress={() => setLoginModalVisible(true)} 
                style={{ marginRight: 15 }}
              />
            ) : null,
        })}
      >
        {(!user || user.type === 'member1') && (
          <Tab.Screen name="X" component={ScreenX} options={{title:"Screen X"}}/>
        )}
        {user && (
          <Tab.Screen name="Y" component={ScreenY} options={{title:"Screen Y"}}/>
        )}
        <Tab.Screen name="Z" component={ScreenZ} options={{title:"Screen Z"}}/>
      </Tab.Navigator>
      <LoginModal 
        visible={isLoginModalVisible} 
        onDismiss={() => setLoginModalVisible(false)} 
      />
    </>
  );
};

export default AppNavigator;