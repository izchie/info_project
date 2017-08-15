import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

class componentEdit extends Component {
  static navigationOptions = {
    tabBarLabel: "Edit",
    tabBarIcon: () => <Icon size={24} name="create" color="white" />
  }

  constructor(valEdit){
    super(valEdit);
    this.state ={
      SessionName : ['SessionName..'],
      url: "",
      editState: "",
      EditText: "EDIT",
      GetText: "GET",

      idquery: "",
      id: "",
      salutationtype: "",
      firstname: "",
      contact_no: "",
      phone: "",
      lastname: "",
      mobile: "",
      account_id: "",
      homephone: "",
      leadsource: "",
      otherphone: "",
      title: "",
      fax: "",
      department: "",
      birthday: "",
      email: "",
      contact_id: "",
      assistant: "",
      secondaryemail: "",
      assistantphone: "",
      donotcall: "",
      emailoptout: "",
      assigned_user_id: "",
      reference: "",
      notify_owner: "",
      createdtime: "",
      modifiedtime: "",
      modifiedby: "",
      portal: "",
      support_start_date: "",
      support_end_date: "",
      mailingstreet: "",
      otherstreet: "",
      mailingcity: "",
      othercity: "",
      mailingstate: "",
      otherstate: "",
      mailingzip: "",
      otherzip: "",
      mailingcountry: "",
      othercountry: "",
      mailingpobox: "",
      otherpobox: "",
      imagename: "",
      description: "",
      isconvertedfromlead: "",
      myelement: "",
    }
  }

  doCheckGet(){
    this.setState({GetText: "WAIT"})
    this.setState({url: "http://192.168.43.95/vtigercrm/webservice.php?query=SELECT%20*%20FROM%20Contacts%20WHERE%20id="+this.state.id+"%3b"}
    ,this.doGet);
  }

  doGet(){
    var form = new FormData();
    form.append("operation", "query");
    form.append("sessionName", "1ad85959e525f4047");


    return fetch(this.state.url,{"method":"POST",body: form})
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.success==true){
        this.setState({salutationtype : responseJson.result[0].salutationtype})
        this.setState({firstname: responseJson.result[0].firstname})
        this.setState({contact_no: responseJson.result[0].contact_no})
        this.setState({phone: responseJson.result[0].phone})
        this.setState({lastname: responseJson.result[0].lastname})
        this.setState({mobile: responseJson.result[0].mobile})
        this.setState({account_id: responseJson.result[0].account_id})
        this.setState({homephone: responseJson.result[0].homephone})
        this.setState({leadsource: responseJson.result[0].leadsource})
        this.setState({otherphone: responseJson.result[0].otherphone})
        this.setState({title: responseJson.result[0].title})
        this.setState({fax: responseJson.result[0].fax})
        this.setState({department: responseJson.result[0].department})
        this.setState({birthday: responseJson.result[0].birthday})
        this.setState({email: responseJson.result[0].email})
        this.setState({contact_id: responseJson.result[0].contact_id})
        this.setState({assistant: responseJson.result[0].assistant})
        this.setState({secondaryemail: responseJson.result[0].secondaryemail})
        this.setState({assistantphone: responseJson.result[0].assistantphone})
        this.setState({donotcall: responseJson.result[0].donotcall})
        this.setState({emailoptout: responseJson.result[0].emailoptout})
        this.setState({assigned_user_id: responseJson.result[0].assigned_user_id})
        this.setState({reference: responseJson.result[0].reference})
        this.setState({notify_owner: responseJson.result[0].notify_owner})
        this.setState({createdtime: responseJson.result[0].createdtime})
        this.setState({modifiedtime: responseJson.result[0].modifiedtime})
        this.setState({modifiedby: responseJson.result[0].modifiedby})
        this.setState({portal: responseJson.result[0].portal})
        this.setState({support_start_date: responseJson.result[0].support_start_date})
        this.setState({support_end_date: responseJson.result[0].support_end_date})
        this.setState({mailingstreet: responseJson.result[0].mailingstreet})
        this.setState({otherstreet: responseJson.result[0].otherstreet})
        this.setState({mailingcity: responseJson.result[0].mailingcity})
        this.setState({othercity: responseJson.result[0].othercity})
        this.setState({mailingstate: responseJson.result[0].mailingstate})
        this.setState({otherstate: responseJson.result[0].otherstate})
        this.setState({mailingzip: responseJson.result[0].mailingzip})
        this.setState({otherzip: responseJson.result[0].otherzip})
        this.setState({mailingcountry: responseJson.result[0].mailingcountry})
        this.setState({othercountry: responseJson.result[0].othercountry})
        this.setState({mailingpobox: responseJson.result[0].mailingpobox})
        this.setState({otherpobox: responseJson.result[0].otherpobox})
        this.setState({imagename: responseJson.result[0].imagename})
        this.setState({description: responseJson.result[0].description})
        this.setState({isconvertedfromlead: responseJson.result[0].isconvertedfromlead})
        this.setState({GetText: "DONE"})
        this.setState({EditText: "EDIT"})
      }
      else{
      }
    })
    .catch((error) => {
      console.error(error);
    });

  }

  doCheckEdit(){
    this.setState({EditText: "WAIT"})
    this.setState({myelement: "{\"salutationtype\":\""+this.state.salutationtype+"\",\"firstname\":\""+this.state.firstname+"\",\"contact_no\":\""+this.state.contact_no+"\",\"phone\":\""+this.state.phone+"\",\"lastname\":\""+this.state.lastname+"\",\"mobile\":\""+this.state.mobile+"\",\"account_id\":\""+this.state.account_id+"\",\"homephone\":\""+this.state.homephone+"\",\"leadsource\":\""+this.state.leadsource+"\",\"otherphone\":\""+this.state.otherphone+"\",\"title\":\""+this.state.title+"\",\"fax\":\""+this.state.fax+"\",\"department\":\""+this.state.department+"\",\"birthday\":\""+this.state.birthday+"\",\"email\":\""+this.state.email+"\",\"contact_id\":\""+this.state.contact_id+"\",\"assistant\":\""+this.state.assistant+"\",\"secondaryemail\":\""+this.state.secondaryemail+"\",\"assistantphone\":\""+this.state.assistantphone+"\",\"donotcall\":\""+this.state.donotcall+"\",\"emailoptout\":\""+this.state.emailoptout+"\",\"assigned_user_id\":\""+this.state.assigned_user_id+"\",\"reference\":\""+this.state.reference+"\",\"notify_owner\":\""+this.state.notify_owner+"\",\"createdtime\":\""+this.state.createdtime+"\",\"modifiedtime\":\""+this.state.modifiedtine+" 03:33:18\",\"modifiedby\":\""+this.state.modifiedby+"\",\"portal\":\""+this.state.portal+"\",\"support_start_date\":\""+this.state.support_start_date+"\",\"support_end_date\":\""+this.state.support_end_date+"\",\"mailingstreet\":\""+this.state.mailingstreet+"\",\"otherstreet\":\""+this.state.otherstreet+"\",\"mailingcity\":\""+this.state.mailingcity+"\",\"othercity\":\""+this.state.othercity+"\",\"mailingstate\":\""+this.state.mailingstate+"\",\"otherstate\":\""+this.state.otherstate+"\",\"mailingzip\":\""+this.state.mailingzip+"\",\"otherzip\":\""+this.state.otherzip+"\",\"mailingcountry\":\""+this.state.mailingcountry+"\",\"othercountry\":\""+this.state.othercountry+"\",\"mailingpobox\":\""+this.state.mailingpobox+"\",\"otherpobox\":\""+this.state.otherpobox+"\",\"imagename\":\""+this.state.imagename+"\",\"description\":\""+this.state.description+"\",\"isconvertedfromlead\":\""+this.state.isconvertedfromlead+"\",\"id\":\""+this.state.id+"\"}"}
    ,this.doEdit);
  }

  doEdit(){
    var form = new FormData();
    form.append("operation", "update");
    form.append("sessionName", "1ad85959e525f4047");
    form.append("element", this.state.myelement);

    return fetch('http://192.168.43.95/vtigercrm/webservice.php',{"method":"POST",body: form})
    .then((response) => response.json())
    .then((responseJson) => {
    if(responseJson.success==true){
      this.setState({salutationtype : ""})
      this.setState({firstname: ""})
      this.setState({contact_no: ""})
      this.setState({phone: ""})
      this.setState({lastname: ""})
      this.setState({mobile: ""})
      this.setState({account_id: ""})
      this.setState({homephone: ""})
      this.setState({leadsource: ""})
      this.setState({otherphone: ""})
      this.setState({title: ""})
      this.setState({fax: ""})
      this.setState({department: ""})
      this.setState({birthday: ""})
      this.setState({email: ""})
      this.setState({contact_id: ""})
      this.setState({assistant: ""})
      this.setState({secondaryemail: ""})
      this.setState({assistantphone: ""})
      this.setState({donotcall: ""})
      this.setState({emailoptout: ""})
      this.setState({assigned_user_id: ""})
      this.setState({reference: ""})
      this.setState({notify_owner: ""})
      this.setState({createdtime: ""})
      this.setState({modifiedtime: ""})
      this.setState({modifiedby: ""})
      this.setState({portal: ""})
      this.setState({support_start_date: ""})
      this.setState({support_end_date: ""})
      this.setState({mailingstreet: ""})
      this.setState({otherstreet: ""})
      this.setState({mailingcity: ""})
      this.setState({othercity: ""})
      this.setState({mailingstate: ""})
      this.setState({otherstate: ""})
      this.setState({mailingzip: ""})
      this.setState({otherzip: ""})
      this.setState({mailingcountry: ""})
      this.setState({othercountry: ""})
      this.setState({mailingpobox: ""})
      this.setState({otherpobox: ""})
      this.setState({imagename: ""})
      this.setState({description: ""})
      this.setState({isconvertedfromlead: ""})
      this.setState({id: ""})
      this.setState({editState: "Edit Success."})
      this.setState({GetText: "GET"})
      this.setState({EditText: "DONE"})
    }
    else{
      this.setState({editState: "ERROR: Please try again."})

    }

    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
    <ScrollView>
    <View style={editCSS.container}>

      <Text style={editCSS.txtTitleTop}>
        ENTER THE ID
      </Text>
      <Text style={editCSS.txtTitleBot}>
        THAT YOU WANT TO EDIT
      </Text>
      <TextInput style={editCSS.txtinEdit}
        placeholder='ID . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(id) => this.setState({id})} value={this.state.id}>
      </TextInput>
      <TouchableOpacity style={editCSS.btnCheck}>
        <Text style={editCSS.txtEdit} onPress={()=>this.doCheckGet()}>
             {this.state.GetText}
        </Text>
      </TouchableOpacity>

      <Text style={editCSS.txtTitleTop}>
        NOW WHAT YOU WANNA CHANGE
      </Text>
      <Text style={editCSS.txtTitleBot}>
        THAT YOU WANT TO EDIT
      </Text>

      <View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Salutationtype</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='salutationtype . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(salutationtype) => this.setState({salutationtype})} value={this.state.salutationtype}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Firstname</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='firstname . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(firstname) => this.setState({firstname})} value={this.state.firstname}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Contact No</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='contact_no . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(contact_no) => this.setState({contact_no})} value={this.state.contact_no}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Phone</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='phone . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(phone) => this.setState({phone})} value={this.state.phone}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Lastname</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='lastname . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(lastname) => this.setState({lastname})} value={this.state.lastname}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mobile</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mobile . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mobile) => this.setState({mobile})} value={this.state.mobile}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Account ID</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='account_id . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(account_id) => this.setState({account_id})} value={this.state.account_id}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Homephone</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='homephone . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(homephone) => this.setState({homephone})} value={this.state.homephone}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Leadsource</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='leadsource . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(leadsource) => this.setState({leadsource})} value={this.state.leadsource}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Otherphone</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='otherphone . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(otherphone) => this.setState({otherphone})} value={this.state.otherphone}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Title</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='title . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(title) => this.setState({title})} value={this.state.title}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Fax</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='fax . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(fax) => this.setState({fax})} value={this.state.fax}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Department</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='department . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(department) => this.setState({department})} value={this.state.department}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Birthday</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='birthday . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(birthday) => this.setState({birthday})} value={this.state.birthday}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Email</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='email . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(email) => this.setState({email})} value={this.state.email}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Contact ID</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='contact_id . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(contact_id) => this.setState({contact_id})} value={this.state.contact_id}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Assistant</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='assistant . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(assistant) => this.setState({assistant})} value={this.state.assistant}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Secondaryemail</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='secondaryemail . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(secondaryemail) => this.setState({secondaryemail})} value={this.state.secondaryemail}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Assistantphone</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='assistantphone . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(assistantphone) => this.setState({assistantphone})} value={this.state.assistantphone}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Do Not Call</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='donotcall . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(donotcall) => this.setState({donotcall})} value={this.state.donotcall}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Email OPT Out</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='emailoptout . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(emailoptout) => this.setState({emailoptout})} value={this.state.emailoptout}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Assigned User Id</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='assigned_user_id . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(assigned_user_id) => this.setState({assigned_user_id})} value={this.state.assigned_user_id}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Reference</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='reference . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(reference) => this.setState({reference})} value={this.state.reference}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Notify_owner</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='notify_owner . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(notify_owner) => this.setState({notify_owner})} value={this.state.notify_owner}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Created Time</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='createdtime . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(createdtime) => this.setState({createdtime})} value={this.state.createdtime}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Modified Time</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='modifiedtime . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(modifiedtime) => this.setState({modifiedtime})} value={this.state.modifiedtime}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Modified By</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='modifiedby . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(modifiedby) => this.setState({modifiedby})} value={this.state.modifiedby}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Portal</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='portal . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(portal) => this.setState({portal})} value={this.state.portal}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Support Start</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='support_start_date . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(support_start_date) => this.setState({support_start_date})} value={this.state.support_start_date}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Support End</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='support_end_date . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(support_end_date) => this.setState({support_end_date})} value={this.state.support_end_date}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing Street</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingstreet . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingstreet) => this.setState({mailingstreet})} value={this.state.mailingstreet}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other Street</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='otherstreet . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(otherstreet) => this.setState({otherstreet})} value={this.state.otherstreet}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing City</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingcity . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingcity) => this.setState({mailingcity})} value={this.state.mailingcity}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other City</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='othercity . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(othercity) => this.setState({othercity})} value={this.state.othercity}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing State</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingstate . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingstate) => this.setState({mailingstate})} value={this.state.mailingstate}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other State</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='otherstate . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(otherstate) => this.setState({otherstate})} value={this.state.otherstate}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing Zip</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingzip . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingzip) => this.setState({mailingzip})} value={this.state.mailingzip}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other Zip</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='otherzip . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(otherzip) => this.setState({otherzip})} value={this.state.otherzip}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing Country</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingcountry . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingcountry) => this.setState({mailingcountry})} value={this.state.mailingcountry}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other Country</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='othercountry . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(othercountry) => this.setState({othercountry})} value={this.state.othercountry}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Mailing Pobox</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='mailingpobox . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(mailingpobox) => this.setState({mailingpobox})} value={this.state.mailingpobox}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Other pobox</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='otherpobox . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(otherpobox) => this.setState({otherpobox})} value={this.state.otherpobox}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Imagename</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='imagename . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(imagename) => this.setState({imagename})} value={this.state.imagename}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>Description</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='description . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(description) => this.setState({description})} value={this.state.description}>
      </TextInput>
      </View>
      <View style={editCSS.filler}>
      <Text style={editCSS.txtFiller}>ICFL</Text>
      <TextInput style={editCSS.txtinFiller}
        placeholder='isconvertedfromlead . . .' placeholderTextColor='white' underlineColorAndroid='transparent'
        onChangeText={(isconvertedfromlead) => this.setState({isconvertedfromlead})} value={this.state.isconvertedfromlead}>
      </TextInput>
      </View>
      </View>

      <TouchableOpacity style={editCSS.btnEdit} onPress={()=>this.doCheckEdit()}>
        <Text style={editCSS.txtEdit}>
             {this.state.EditText}
        </Text>
      </TouchableOpacity>

      <Text style={editCSS.txtStat}>
        {this.state.editState}
      </Text>

    </View>
    </ScrollView>
   );
  }
}

const editCSS = StyleSheet.create({
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
  txtStat:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom:30,
    color: '#559922',
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
  txtTitle:{
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
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
    fontSize: 18,
  },
});
export default componentEdit;
