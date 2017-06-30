import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrap:{
    backgroundColor: '#331965',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#221050',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#331965',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#442475',
  },

  xtext1: {
    color: '#ffffff',
    fontSize: 75,
    fontWeight: 'bold'
  },

  xtext2: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  xtext3: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold'
  },
  xtext4: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: 'bold'
  },
  xtext5: {
    color: '#ffffff',
    fontSize: 75,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1,
  }
}

export default class extends Component {
  render () {
    return (
      <View style={styles.wrap}>
      <Swiper style={styles.wrapper} height={310}
        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.99)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#FFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        loop autoplay>
        <View style={styles.slide1} title={<Text numberOfLines={1}>up1</Text>}>
            <Text style={styles.xtext1}>{":)"}</Text>
          </View>
          <View style={styles.slide2} title={<Text numberOfLines={1}>up2</Text>}>
            <Text style={styles.xtext2}>   WELCOME {"\n"}FRIENDS</Text>
          </View>
          <View style={styles.slide3} title={<Text numberOfLines={1}>up3</Text>}>
            <Text style={styles.xtext3}>TO MY{"\n"}SWIPER TEST</Text>
          </View>
          <View style={styles.slide2} title={<Text numberOfLines={1}>up4</Text>}>
            <Text style={styles.xtext4}>        SIMPLE{"\n"}BEAUTIFUL{"\n"}      AND{"\n"}PROFESSIONAL</Text>
          </View>
          <View style={styles.slide1} title={<Text numberOfLines={1}>up5</Text>}>
            <Text style={styles.xtext5}>  GOOD{"\n"}      LUCK!</Text>
          </View>
        </Swiper>

        <Swiper style={styles.wrapper} height={310}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop autoplay>
          <View style={styles.slide} title={<Text numberOfLines={1}>Teal</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Pink</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/2.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Blue</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/3.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Yellow</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Green</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/5.png')} />
          </View>
        </Swiper>
      </View>
    )
  }
}
