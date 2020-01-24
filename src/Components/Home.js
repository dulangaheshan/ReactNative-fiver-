import React, { Component } from 'react';
import {ScrollView, View, Text, AsyncStorage } from 'react-native';
// import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import CardTemplate from './common/CardTemplate';

class Home extends Component {
	render() {
		return (
			<ScrollView
				style={{ flex: 1 }}
				// contentContainerStyle={styles.scrollview}
				// scrollEnabled={scrollEnabled}
                // onContentSizeChange={this.onContentSizeChange}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
			>
				<CardTemplate />
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
			</ScrollView> 
		);
	}
}

export default Home;
