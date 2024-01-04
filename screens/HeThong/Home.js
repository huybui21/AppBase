import React from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView } from 'react-native';
import { argonTheme } from '../../constants';

const { width } = Dimensions.get('screen');

const Home = () => {
    return (
        <ScrollView>
            <View>
                <Text> Home</Text>
            </View>
        </ScrollView>
    );
};

export default Home;
