import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View, Modal } from 'react-native';
import { HelperText, Surface, Text, IconButton } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';
import { FormInput } from '../components/FormInput';
import { SubmitButton } from '../components/SubmitButton';

type LoginModalProps = {
  visible: boolean;
  onDismiss: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ visible, onDismiss }) => {
  const { login, isLoading, loginError } = useAuth();
  const { values, handleChange } = useForm({ username: '', password: '' });

  const handleLogin = async () => {
    if (!values.username.trim() || !values.password) {
      return;
    }

    const success = await login(values.username, values.password);
    if (success) {
      onDismiss();
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onDismiss}
      animationType="slide"
      transparent={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.modalView}>
          <View style={styles.closeButton}>
            <IconButton
              icon="close"
              size={24}
              onPress={onDismiss}
            />
          </View>
          <Surface style={styles.surface}>
            <Text style={styles.title}>Welcome Back!</Text>
            <FormInput
              label="Username"
              value={values.username}
              onChangeText={(text) => handleChange('username', text)}
              autoCapitalize="none"
            />
            <FormInput
              label="Password"
              value={values.password}
              onChangeText={(text) => handleChange('password', text)}
              secureTextEntry
            />
            <HelperText type="error" visible={!!loginError}>
              {loginError}
            </HelperText>
            <SubmitButton
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
            >
              Login
            </SubmitButton>
          </Surface>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  surface: {
    width: '100%',
    padding: 24,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default LoginModal;