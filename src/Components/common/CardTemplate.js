import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';



export default class CardTemplate extends Component {
  render() {
    return (
      
        <Content>
          <Card style={{flex: 1}}>
          {/* <Card> */}
            <CardItem>
              <Left>
                <Thumbnail source={require('../common/b.jpg')} />
                <Body>
                  <Text>Test Card</Text>
                  <Text note>Test</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../common/a.jpg')} style={{height: 100, width: 370, flex: 1}}/>
                <Text>
                  Test Card
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
     
    );
  }
}