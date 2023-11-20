import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import Loading from './src/components/Loading';
import Weather from './src/components/Weather';
import { getLocationResource, getWeatherResource, setAlert } from './src/utils/api';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [temperature, setTemperature] = useState(null);
    
    useEffect(() => {
        (
            async () => {
                const userLocation = await getLocationResource();
                !userLocation && setAlert('Couldn\'t get a location', 'very sorry');
                
                const res = await getWeatherResource(userLocation.coords);
                !res && setAlert('Couldn\'t load weather', 'very sorry');
                
                const {temp, temp_max, temp_min} = res.data.main;
                
                setTemperature({
                    temp: Math.round(temp),
                    temp_max: Math.round(temp_max),
                    temp_min: Math.round(temp_min),
                });
                setLoading(!res || !userLocation);
            }
        )();
    }, []);
    
    return (
        loading ? <Loading/> : <Weather temperature={temperature}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
