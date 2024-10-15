import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface FormInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export const FormInput: React.FC<FormInputProps> = ({ 
    label, 
    value, 
    onChangeText, 
    secureTextEntry, 
    autoCapitalize 
}) => (
    <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
    />
);

const styles = StyleSheet.create({
    input: {
        marginBottom: 16,
    },
});
