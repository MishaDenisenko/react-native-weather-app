import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { LinearGradient } from 'expo-linear-gradient';
import { LINEAR_GRADIENT_BASE, LINEAR_GRADIENTS } from '../../constants';

import WeatherInfo from './WeatherInfo';
import WeatherDescription from './WeatherDescription';

import styles from './WeatherStyles';

const Weather = ({ weatherResource }) => {
    const [weatherConditions, setWeatherConditions] = useState(null);
    const [gradient, setGradient] = useState(LINEAR_GRADIENT_BASE);
    
    useEffect(() => {
        const { weather } = weatherResource;
        
        setWeatherConditions(weather[0]);
    }, []);
    
    useEffect(() => {
        !!weatherConditions && setGradient(LINEAR_GRADIENTS[weatherConditions.main]);
    }, [weatherConditions]);
    
    return (
        weatherConditions &&
        <LinearGradient colors={ gradient } style={ styles.container }>
            <WeatherInfo weatherResource={ weatherResource } weatherConditions={ weatherConditions }/>
            <WeatherDescription weatherResource={ weatherResource } weatherConditions={ weatherConditions }/>
        </LinearGradient>
    );
};

Weather.propTypes = {
    weatherResource: PropTypes.object,
};

export default Weather;