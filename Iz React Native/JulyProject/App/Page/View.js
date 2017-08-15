import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import componentLogin from './Login'

class componentView extends Component {
  static navigationOptions = {
    tabBarLabel: "View",
    tabBarIcon: () => <Icon size={24} name="search" color="white" />
  }
  constructor(valView){
    super(valView);
    this.state ={
      url: "http://192.168.43.95/vtigercrm/webservice.php?query=SELECT%20*%20FROM%20Contacts%3b",
      viewState: '',

      checktext: 'CHECK',
      id: [],
      firstname: [],
      lastname: [],
      email: [],
      send: '',
      check: 'CHECK',
      SessionName : '555'
    }
  }


  doCheckView(){
      this.setState({id: []})
      this.setState({firstname: []})
      this.setState({lastname: []})
      this.setState({email: []})
      this.setState({checktext: "WAIT"}
      ,this.doView,);
  }

  doView(){
    var form = new FormData();
    form.append("operation", "query");
    form.append("sessionName", "1ad85959e525f4047");

    return fetch(this.state.url,{"method":"POST",body: form})
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.success==true){
        this.setState({viewState: 'Connected'})
        var id = [];
        var firstname = [];
        var lastname = [];
        var email = [];
        for (var i = 0; i < responseJson.result.length; i++) {
          id[i] = responseJson.result[i].id;
          firstname[i] = responseJson.result[i].firstname;
          lastname[i] = responseJson.result[i].lastname;
          email[i] = responseJson.result[i].email;
        }
        this.setState({id: id});
        this.setState({firstname: firstname});
        this.setState({lastname: lastname});
        this.setState({email: email});
        this.setState({checktext: "CHECK"});
      }
      else{
        this.setState({viewState: 'Failed'})
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    var box = [];
    for(let i=0; i<this.state.id.length;i++){
      box.push(
      <View key={i} style={{flex:1}}>
        <View style={viewCSS.taitstart}>
        <Text style={viewCSS.taittxtheader}>   Data {i}</Text>
        </View>

        <View style={viewCSS.tait}>
          <View style={viewCSS.left}>
          <Text style={viewCSS.taittxt}>ID :   </Text>
          </View>
          <View style={viewCSS.right}>
            <Text style={viewCSS.taittxt}>{this.state.id[i]}</Text>
          </View>
        </View>

        <View style={viewCSS.tait}>
          <View style={viewCSS.left}>
          <Text style={viewCSS.taittxt}>Firstname :   </Text>
          </View>
          <View style={viewCSS.right}>
            <Text style={viewCSS.taittxt}>{this.state.firstname[i]}</Text>
          </View>
        </View>

        <View style={viewCSS.tait}>
          <View style={viewCSS.left}>
          <Text style={viewCSS.taittxt}>Lastname :   </Text>
          </View>
          <View style={viewCSS.right}>
            <Text style={viewCSS.taittxt}>{this.state.lastname[i]}</Text>
          </View>
        </View>

        <View style={viewCSS.tait}>
          <View style={viewCSS.left}>
          <Text style={viewCSS.taittxt}>Email :   </Text>
          </View>
          <View style={viewCSS.right}>
            <Text style={viewCSS.taittxt}>{this.state.email[i]}</Text>
          </View>
        </View>

        <View style={viewCSS.taitend}>
        <Text style={viewCSS.taittxt}>    </Text>
        </View>
      </View>
     )
    }
    return (
      <ScrollView>
      <View style={{flex:1,marginTop:20,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={viewCSS.btnCHECK} onPress={()=>this.doCheckView()}>
        <Text style={viewCSS.txtCHECK}>
             {this.state.checktext}
        </Text>
      </TouchableOpacity>
      </View>

      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flex:1, flexDirection:'column'}}></View>
        <View style={{flex:4, flexDirection:'column'}}>
          { box }
        </View>
        <View style={{flex:1, flexDirection:'column'}}></View>
      </View>
      </ScrollView>
    );
  }

}

const viewCSS = StyleSheet.create({
  container:{
      flex:5,
  },
  taitstart:{
    flex:1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#009A4A',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  tait:{
    flex:1,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taitend:{
    flex:1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  taittxtheader:{
    fontSize: 20,
    color: '#FFFFFF',
  },
  taittxt:{
    color: '#FFFFFF',
  },
  left:{
    flex:5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  right:{
    flex:8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnCHECK:{
    backgroundColor: '#000000',
    borderRadius: 25,
    width: 180,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCHECK:{
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default componentView;
