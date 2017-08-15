import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

class componentAdd extends Component {
  static navigationOptions = {
    tabBarLabel: "Add",
    tabBarIcon: () => <Icon size={24} name="add-circle" color="white" />
  }

  constructor(valAdd){
    super(valAdd);
    this.state ={
      check: "",
      addState: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      assigned_user_id: "19x1",
      myelement: "",
    }
  }

  doCheck(){
    this.setState({myelement: "{\"firstname\":\""+this.state.firstname+"\",\"lastname\":\""+this.state.lastname+"\",\"email\":\""+this.state.email+"\",\"mobile\":\""+this.state.mobile+"\",\"assigned_user_id\":\""+this.state.assigned_user_id+"\"}"}
    ,this.doAdd);
  }

  doAdd(){
    var form = new FormData();
    form.append("operation", "create");
    form.append("sessionName", "1ad85959e525f4047");
    form.append("element", this.state.myelement);
    form.append("elementType", "Contacts");

    return fetch('http://192.168.43.95/vtigercrm/webservice.php',{"method":"POST",body: form})
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({check : responseJson.success})
      if(this.state.check==true){
        this.setState({addState : "Success: data added."})
        this.setState({check : ''})
        this.setState({firstname: ''})
        this.setState({lastname: ''})
        this.setState({email: ''})
        this.setState({mobile: ''})
      }
      else{
        this.setState({addState : "Error: Input might not correctly."})
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
    <View style={addCSS.container}>

      <Text style={addCSS.txtTitleTop}>
        ADD CONTACT
      </Text>
      <Text style={addCSS.txtTitleBot}>
        PLEASE FILL IN
      </Text>

      <View>
      <View style={addCSS.filler}>
      <Text style={addCSS.txtFiller}>Firstname</Text>
      <TextInput style={addCSS.txtinFiller}
        placeholder=' firstname . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(firstname) => this.setState({firstname})} value={this.state.firstname}>
      </TextInput>
      </View>
      <View style={addCSS.filler}>
      <Text style={addCSS.txtFiller}>Lastname</Text>
      <TextInput style={addCSS.txtinFiller}
        placeholder=' lastname . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(lastname) => this.setState({lastname})} value={this.state.lastname}>
      </TextInput>
      </View>
      <View style={addCSS.filler}>
      <Text style={addCSS.txtFiller}>Email</Text>
      <TextInput style={addCSS.txtinFiller}
        placeholder=' email . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(email) => this.setState({email})} value={this.state.email}>
      </TextInput>
      </View>
      <View style={addCSS.filler}>
      <Text style={addCSS.txtFiller}>Mobile</Text>
      <TextInput style={addCSS.txtinFiller}
        placeholder=' mobile . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mobile) => this.setState({mobile})} value={this.state.mobile}>
      </TextInput>
      </View>
      </View>

      <TouchableOpacity style={addCSS.btnEdit} onPress={()=>this.doCheck()}>
        <Text style={addCSS.txtEdit}>
             ADD
        </Text>
      </TouchableOpacity>
      <Text style={addCSS.txtStat}>
        {this.state.addState}
      </Text>

    </View>
   );
  }
}

const addCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCheck:{
    backgroundColor: '#000000',
    borderRadius: 25,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:25,
  },
  btnEdit:{
    backgroundColor: '#000000',
    borderRadius: 25,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:25,
  },
  txtEdit:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  txtTitleTop:{
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25,
  },
  txtTitleBot:{
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  txtinEdit:{
    backgroundColor: '#505050',
    width: 140,
    height: 50,
    borderRadius: 10,
    marginBottom:25,
    marginTop:25,
  },
  filler:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  txtFiller:{
    fontSize: 18,
    color: '#303030',
    fontWeight: 'bold',
  },
  txtinFiller:{
    backgroundColor: '#606060',
    width: 200,
    marginLeft: 10,
    borderRadius: 50,
  },
  txtStat:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#226699',
  },
});
export default componentAdd;
