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
  wrapper: {
  },
  wrap:{
    backgroundColor: '#000000',
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
    backgroundColor: '#434343',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3E3E',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383838',
  },

  text: {
    color: '#fff',
    fontSize: 80,
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
        <Swiper style={styles.wrapper} height={505} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>พระเอก</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>นางเอก</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>ตัวประกอบ 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>ตัวประกอบ 2</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>โลลิ !!!</Text>
          </View>
        </Swiper>

        <Swiper style={styles.wrapper} height={500}
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
