import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../../Screens/Main/Main';
import Detail from '../../Screens/Main/Detail';
import Detail2 from '../../Screens/Main/Detail2';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen 
                name={"Main"}
                component={Main}
            />
           <MainStack.Screen 
                name={"Detail"}
                component={Detail}
            />
            <MainStack.Screen 
                name={"Detail2"}
                component={Detail2}
            />
        </MainStack.Navigator>
    );
};