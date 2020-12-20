import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStack, RecommendStack, ProfileStack} from '../Navigation/MainMenu'

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name={"Main"}
                component={MainStack}
            />
            <Tab.Screen 
                name={"Recommend"}
                component={RecommendStack}
            />
            <Tab.Screen 
                name={"Profile"}
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

