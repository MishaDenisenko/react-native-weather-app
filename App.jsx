import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Loading from './src/components/Loading';
import Weather from './src/components/Weather';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [weatherResource, setWeatherResource] = useState(null);
    
    
    return (
        <>
            <StatusBar barStyle={ 'light-content' }/>
            { loading
                ? <Loading setLoading={ setLoading } setWeatherResource={ setWeatherResource }/>
                : <Weather weatherResource={ weatherResource }/>
            }
        </>
    
    );
};

export default App;

