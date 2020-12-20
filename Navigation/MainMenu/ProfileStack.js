import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../Screens/Main/Profile';
import Detail from '../../Screens/Main/Detail';
import Detail2 from '../../Screens/Main/Detail2';

const ProfileStack = createStackNavigator();

export default () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name={"Profile"}
                component={Profile}
            />
           <ProfileStack.Screen 
                name={"Detail"}
                component={Detail}
            />
            <ProfileStack.Screen 
                name={"Detail2"}
                component={Detail2}
            />
        </ProfileStack.Navigator>
    );
};