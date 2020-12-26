import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
          word:""
        }
      }
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        console.log(url)

        return fetch(url)
        .then((data)=>{
            if(data.status===200){
                return data.json()
            }
            else
            {
                return null
            }
        })
        .then((response)=>{

            var responseObject = response

            if (responseObject)
            {
                var wordData = responseObject.definitions[0]
                var definition = wordData.description
                var lexicalCategory = wordData.wordtype
                
                this.setState({
                    'word' : this.state.text,
                    'definition' : definition,
                    'lexicalCategory' : lexicalCategory
                })
            }
            else
            {
                this.setState({
                    'word' : this.state.text,
                    "definition" : "Not Found",
                })
            }
        })
    }
    render(){
        return(
            <View>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        this.setState({
                            text : text,
                            isSearchedPressed : false,
                            word : "Loading...",
                            lexicalCategory : '',
                            examples : [],
                            definition : ""
                        });
                    }}
                    value={this.state.text}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => {
                        this.setState({ isSearchedPressed: true });
                        this.getWord(this.state.text)
                    }}>
                    <Text style={styles.butit}>Search</Text>
                </TouchableOpacity>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Word :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.word}
                    </Text>
                </View>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Type :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.lexicalCategory}
                    </Text>
                </View>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Definition :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.definition}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width:400,
        height:50,
        marginTop:30,
        alignSelf:'center',
        textAlign:'center',
        borderWidth:5,
        borderColor:'#000',
        backgroundColor:'#fff'
    },
    button:{
        width:150,
        height:50,
        margin:20,
        padding:10,
        alignSelf:'center',
        textAlign:'center',
        borderWidth:3,
        borderRadius:10,
        borderColor:'#000',
        backgroundColor:'#fff'
    },
    butext:{
        fontSize:20,
        fontWeight:'bold'
    },
    detCon:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'#fff'
    },
    detit:{
        fontSize:20,
        fontWeight:'bold'
    }
})