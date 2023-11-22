import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';

import { WEATHER_METRIC } from '../../../constants';

import styles from './WeatherInfoStyles';


const WeatherInfo = ({ weatherResource, weatherConditions }) => {
    const [temperature, setTemperature] = useState(null);
    
    useEffect(() => {
        const { temp, temp_max, temp_min } = weatherResource.main;
        
        setTemperature({
            temp: Math.round(temp) + WEATHER_METRIC,
            temp_max: Math.round(temp_max) + WEATHER_METRIC,
            temp_min: Math.round(temp_min) + WEATHER_METRIC,
        });
    }, []);
    
    return (
        temperature &&
        <View style={ styles.container }>
            <Text style={ styles.title }>{ weatherResource.name }</Text>
            <Text style={ styles.temp }>{ temperature.temp }</Text>
            <Text style={ styles.text }>{ weatherConditions.description }</Text>
            <Text style={ styles.text }>
                { `Макс.: ${ temperature.temp_max } мин.: ${ temperature.temp_min }` }
            </Text>
        </View>
    );
};

export default WeatherInfo;