import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup} from '../Screens/Auth';

const Auth = createStackNavigator();

const AuthStack = () => {

    return (
        <Auth.Navigator>
            <Auth.Screen 
                name={"Login"}
                component={Login}
            />
            <Auth.Screen 
                name={"Signup"}
                component={Signup}
            />
        </Auth.Navigator>
    );
};

export default AuthStack;