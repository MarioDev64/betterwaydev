import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface SubmitButtonProps {
    onPress: () => void;
    loading: boolean;
    disabled: boolean;
    children: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, loading, disabled, children }) => (
    <Button 
        mode="contained" 
        onPress={onPress} 
        loading={loading}
        disabled={disabled}
        style={styles.button}
    >
        {children}
    </Button>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 8,
    },
});