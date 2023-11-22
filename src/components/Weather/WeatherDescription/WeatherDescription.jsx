import React, { useEffect, useState } from 'react';

import { Image, Text, View } from 'react-native';

import { getWeatherIcon } from '../../../utils/api';
import { WEATHER_METRIC } from '../../../constants';

import styles from './WeatherDescriptionStyles';

const WeatherDescription = ({ weatherResource, weatherConditions }) => {
    const [weatherIcon, setWeatherIcon] = useState('');
    
    useEffect(() => {
        (() => {
            const icon = getWeatherIcon(weatherConditions.icon);
            
            setWeatherIcon(icon);
        })();
    }, []);
    
    const getVisibility = value => `~ ${ value / 1000 } км`;
    const getHumidity = value => `~ ${ value } %`;
    const getWindSpeed = value => value + ' м/с';
    const getFeelsDegree = value => Math.round(value) + WEATHER_METRIC;
    
    return (
        weatherIcon &&
        <View style={ styles.container }>
            <View style={ styles.wrapper }>
                <Text style={ styles.columStart }>Сейчас: </Text>
                <View style={ styles.columEnd }>
                    <Image style={ styles.image } source={ { uri: weatherIcon } }/>
                </View>
            
            </View>
            <View style={ styles.wrapper }>
                <Text style={ styles.columStart }>Видимость: </Text>
                <Text style={ styles.columEnd }>{ getVisibility(weatherResource.visibility) }</Text>
            </View>
            <View style={ styles.wrapper }>
                <Text style={ styles.columStart }>Влажность: </Text>
                <Text style={ styles.columEnd }>{ getHumidity(weatherResource.main.humidity) }</Text>
            </View>
            <View style={ styles.wrapper }>
                <Text style={ styles.columStart }>Ветер: </Text>
                <Text style={ styles.columEnd }>{ getWindSpeed(weatherResource.wind.speed) }</Text>
            </View>
            <View style={ styles.wrapper }>
                <Text style={ styles.columStart }>Ощущается как: </Text>
                <Text style={ styles.columEnd }>{ getFeelsDegree(weatherResource.main.feels_like) }</Text>
            </View>
        </View>
    );
};

export default WeatherDescription;