import React, {Component} from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body, Left, Thumbnail,Button,Icon} from 'native-base';
import HTMLView from 'react-native-htmlview';
export default class AppData extends Component {
  render(){

    let articles = this.props.data.map(function(articleData, index){
      return(
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../img/bt-hen.png')} />
              <Body>
                <Text style={{color:'#000000',fontWeight:'bold'}}>{articleData.title.$t}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem content>
            <HTMLView value={articleData.content.$t}/>
          </CardItem>
          <CardItem>
            <Button transparent style={{borderTopLeftRadius:50,borderBottomLeftRadius:50,backgroundColor:'#8866CC'}}>
              <Image source={require('../img/c-tm.png')} style={{width:32,height:32}}/>
              <Text style={{color:'#FFFFFF'}}>  {articleData.published.$t}</Text>
            </Button>
            <Button transparent style={{borderTopRightRadius:50,borderBottomRightRadius:50,backgroundColor:'#AA99FF'}}>
            <Image source={require('../img/c-cm.png')} style={{width:32,height:32}}/>
              <Text style={{color:'#FFFFFF',fontWeight: 'bold'}}>  {articleData.thr$total.$t}</Text>
            </Button>
          </CardItem>
        </Card>
      )
    })

    return(
      <Content>
        {articles}
      </Content>
    );
  }
}

module.export = AppData;
