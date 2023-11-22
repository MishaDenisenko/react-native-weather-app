import axios from 'axios';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { Alert } from 'react-native';

import { WEATHER_API, WEATHER_API_KEY, WEATHER_API_UNITS } from '../constants';

export const getLocationResource = async () => {
    try {
        const res = await requestForegroundPermissionsAsync();
        const options = {
            accuracy: Accuracy.High,
        };
        
        return await getCurrentPositionAsync(options);
    } catch (e) {
        return null;
    }
};

export const getWeatherResource = async (coords) => {
    const { latitude, longitude } = coords;
    
    return await axios.get(`${ WEATHER_API }lat=${ latitude }&lon=${ longitude }&appid=${ WEATHER_API_KEY }&units=${WEATHER_API_UNITS}&lang=ru`);
};

export const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

export const setAlert = (title, message) => Alert.alert(title, message)

