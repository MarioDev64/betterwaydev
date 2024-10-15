import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import ScreenTemplate from '../components/ScreenTemplate';

const ScreenZ = () => {
  const { user, logout } = useAuth();

  let content = "Welcome to Screen Z. This is general information accessible to all users.";

  if (user) {
    content += user.type === 'member1'
      ? " As a member1, you have access to all features."
      : " As a member2, you have access to standard features.";
  } else {
    content += " For more features, please log in.";
  }

  return (
    <View style={styles.container}>
      <ScreenTemplate
        title="Screen Z"
        content={content}
      />
      {user && (
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={logout} style={styles.logoutButton}>
            Logout
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    alignItems: 'center',
  },
  logoutButton: {
    margin: 16,
  },
});

export default ScreenZ;