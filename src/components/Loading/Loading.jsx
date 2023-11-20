import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';


const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading weather...</Text>
        </View>
    );
};

export default Loading;