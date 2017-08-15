import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity,TextInput} from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

class componentRemove extends Component {
  static navigationOptions = {
    tabBarLabel: "Remove",
    tabBarIcon: () => <Icon size={24} name="delete" color="white" />
  }

  constructor(valRemove){
    super(valRemove);
    this.state ={
      SessionName : ['SessionName..'],
      removeID : '',
      removeState : '',
      check : 'true',
    }
  }

  doRemove(){
    var form = new FormData();
    form.append("operation", "delete");
    form.append("sessionName", "1ad85959e525f4047");
    form.append("id", this.state.removeID);

    return fetch('http://192.168.43.95/vtigercrm/webservice.php',{"method":"POST",body: form})
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({check : responseJson.success})
      if(this.state.check==true){
        this.setState({removeState : "Remove ID: "+this.state.removeID+" Success."})
        this.setState({check : ''})
        this.setState({removeID: ''})
      }
      else{
        this.setState({removeState : "ID: "+this.state.removeID+" Doesn't exist."})
      }
      })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
    <View style={removeCSS.container}>

      <Text style={removeCSS.txtTitle}>
        ENTER THE ID
      </Text>
      <Text style={removeCSS.txtTitle}>
        THAT YOU WANT TO REMOVE
      </Text>


      <TextInput style={removeCSS.txtinRemove}
        placeholder="ID . . ." placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(removeID) => this.setState({removeID})} value={this.state.removeID}>
      </TextInput>


      <TouchableOpacity style={removeCSS.btnRemove} onPress={()=>this.doRemove()}>
        <Text style={removeCSS.txtRemove}>
             REMOVE
        </Text>
      </TouchableOpacity>
      <Text style={removeCSS.txtStat}>
        {this.state.removeState}
      </Text>



    </View>
   );
  }
}

const removeCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRemove:{
    backgroundColor: '#000000',
    borderRadius: 25,
    width: 180,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRemove:{
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  txtTitle:{
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  txtStat:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#774422',
    marginTop: 20,
  },
  txtinRemove:{
    backgroundColor: '#505050',
    width: 200,
    height: 50,
    borderRadius: 10,
    marginBottom:50,
    marginTop:50,
  }
});
export default componentRemove;
