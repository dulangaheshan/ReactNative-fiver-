// import React, { Component } from 'react';
// import {ScrollView, View, Text, AsyncStorage } from 'react-native';
// // import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
// import CardTemplate from './common/CardTemplate';

// class Home extends Component {
// 	render() {
// 		return (
// 			<ScrollView
// 				style={{ flex: 1 }}
// 				// contentContainerStyle={styles.scrollview}
// 				// scrollEnabled={scrollEnabled}
//                 // onContentSizeChange={this.onContentSizeChange}
//                 contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
// 			>
// 				<CardTemplate />
//                 <CardTemplate />
//                 <CardTemplate />
//                 <CardTemplate />
// 			</ScrollView> 
// 		);
// 	}
// }

// export default Home;


import React, { Component } from 'react';
import {ScrollView, View, Text, AsyncStorage } from 'react-native';
// import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import  {fetchTableData} from "../Components/Actions";
import CardTemplate from './common/CardTemplate';
import { connect } from "react-redux";

class Home extends Component {

	componentDidMount() {
		this.props.fetchTableData();
	  }

renderTable(){
	console.log(this.props.tableData, "sdfghjk")
	var dataSet = this.props.tableData.tableData
	console.log(dataSet.length)
	if(dataSet.length>0){
		return dataSet.map( (item,index) =>
		<CardTemplate key = {item.albumId} name={item.name} email={item.email}   />
		); 
	}

}

 
	render() {
		return (
			<ScrollView
				style={{ flex: 1 }}
				// contentContainerStyle={styles.scrollview}
				// scrollEnabled={scrollEnabled}
                // onContentSizeChange={this.onContentSizeChange}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
			>
				 <View>{this.renderTable()}</View>
			</ScrollView> 
		);
	}
} 
  
function mapStateToProps(state) {
	// console.log(state.tableDetails, "sdfghjkl;");
	return {
		tableData : state.tableDetails
	};
  }

export default connect(
	mapStateToProps,
	{ fetchTableData }
  )(Home);
