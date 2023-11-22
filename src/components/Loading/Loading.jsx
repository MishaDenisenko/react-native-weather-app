import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { LINEAR_GRADIENT_BASE } from '../../constants';

import { getLocationResource, getWeatherResource, setAlert } from '../../utils/api';

import styles from './LoadingStyles';

const Loading = ({ setWeatherResource, setLoading }) => {
    
    useEffect(() => {
        (async () => {
            const userLocation = await getLocationResource();
            !userLocation && setAlert('Couldn\'t get a location', 'very sorry');
            
            const res = await getWeatherResource(userLocation.coords);
            !res && setAlert('Couldn\'t load weather', 'very sorry');
            
            setWeatherResource(res.data);
            setLoading(!res || !userLocation);
        })();
    }, []);
    
    return (
        <LinearGradient colors={ LINEAR_GRADIENT_BASE } style={ styles.container }>
            <Text style={ styles.text }>- -</Text>
        </LinearGradient>
    );
};

export default Loading;