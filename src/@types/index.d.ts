import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';

export type RootTabParamList = {
  ScreenX: undefined;
  ScreenY: undefined;
  ScreenZ: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type BottomTabNavigationProp = BottomTabNavigationProp<RootTabParamList>;
export type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp,
    CompositeNavigationProp<
      AuthStackNavigationProp,
      RootStackNavigationProp
    >
  >;
};