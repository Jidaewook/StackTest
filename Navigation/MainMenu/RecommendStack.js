import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Recommend from '../../Screens/Main/Recommend';
import Detail from '../../Screens/Main/Detail';
import Detail2 from '../../Screens/Main/Detail2';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name={"Recommend"}
                component={Recommend}
            />
           <RecommendStack.Screen 
                name={"Detail"}
                component={Detail}
            />
            <RecommendStack.Screen 
                name={"Detail2"}
                component={Detail2}
            />
        </RecommendStack.Navigator>
    );
};