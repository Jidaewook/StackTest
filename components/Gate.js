import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../Navigation/AuthStack';
import MainTabs from '../Navigation/MainTabs';

const Gate = () => {

    const [isLogin, setIsLogin] = useState(false);

    

    return (
        <NavigationContainer>
            {!isLogin ? <MainTabs /> : <AuthStack /> }
        </NavigationContainer>
    );
};

export default Gate;