import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './MyNote/Note';


export default class MyNote extends Component {

  state = {
    noteArray: [ ],
    noteText: '',
    noteTitle: '',
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key) } />
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>WELCOME TO NOTE EXAMPLE !</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
              onChangeText={(noteTitle) => this.setState({noteTitle})} value={this.state.noteTitle}
              placeholder='title here...' placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>
          <TextInput style={styles.textInput2}
              onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
              placeholder='what would you like to note ...' placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>
        </View>

      </View>
    );
  }
  addNote() {
    if (this.state.noteText){
       var d = new Date();
       this.state.noteArray.push( {'date': d.getFullYear() + "/" + (d.getMonth() +1) + "/" + d.getDate(), 'note': this.state.noteText, 'title': this.state.noteTitle} );
       this.setState({ noteArray: this.state.noteArray })
       this.setState({ noteTitle: '' });
       this.setState({ noteText: '' });
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#331965',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#552299',
  },
  headerText:{
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton:{
    backgroundColor: '#552299',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText:{
    color: '#fff',
    fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color:'#fff',
    padding: 20,
    paddingTop: 15,
    backgroundColor: '#331965',
    borderTopWidth: 10,
    borderTopColor: '#552299',
  },
  textInput2:{
    alignSelf: 'stretch',
    color:'#fff',
    padding: 20,
    backgroundColor: '#331965',
    borderTopWidth: 7,
    borderTopColor: '#552299',
  }

});
