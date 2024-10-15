import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';

interface ScreenTemplateProps {
    title: string;
    content: string;
}

export const ScreenTemplate: React.FC<ScreenTemplateProps> = ({ title, content }) => (
    <View style={styles.container}>
        <Surface style={styles.surface}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </Surface>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    surface: {
        padding: 24,
        width: '80%',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ScreenTemplate;