import React from 'react';
import { Stylesheet, Text, Viwe, ScrollView } from 'react-native';


class WelcomeScreen extends React.Component {
    renderSlides() {
        
    }
    render() {
        return(
            <ScrollView
                horizontal           // horizontal={true}でも可
                pagingEnabled        // pagingEnabled={true}でも可
                style={{ flex: 1 }}
            >
            </ScrollView>
        );
    }
}

export default WelcomeScreen;