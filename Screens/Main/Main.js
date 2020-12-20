import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Main = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
            Main
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
            >
                <Text>디테일111</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail2')}
            >
                <Text style={{fontFamily: "Regular"}}>디테일222</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Main;