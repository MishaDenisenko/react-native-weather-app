import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';

import { styles } from './styles';


const Weather = ({ temperature }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{temperature.temp}</Text>
        </View>
    );
};

Weather.propTypes = {
    temperature: PropTypes.object,
};

export default Weather;