import React, { Component } from 'react';
// import { View, Text, AsyncStorage } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
class Table extends Component {


  render() {
    return (
        <Container>
        {/* <Header /> */}
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>Your text here</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    </Container>
    );
  }
}


export default Table;