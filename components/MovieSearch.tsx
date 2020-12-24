import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

class MovieSearch extends Component {
    // state = {
    //     searchValue: '',
    //     bookResults: []
    // }

    // handleOnChange = (e) => {
    //     this.setState({ searchValue: e.target.value })
    // }

    // handleSearch = () => {
    //     this.makeApiCall(this.state.searchValue)
    // }

    // searchInput: string = 'Harry Potter'

    makeApiCall = () => {
        const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=harry`
        
        fetch(searchUrl)
        .then((res) => {
            return res.json()
        })
        .then((jsonData) => {
            //console.log(jsonData.items[0].volumeInfo)
            this.setState({ bookResults: jsonData.items })
        })
    }

    return (
        <View>
          <TouchableHighlight onPress={handleApiCall}>
            <Text>Make Call</Text>
          </TouchableHighlight>
        </View>

    // render() {
    //     return (
    //         <div>
    //             <h1>Books Search</h1>
    //             <input 
    //                 name="text"   
    //                 type="text" 
    //                 placeholder="Search"
    //                 onChange={(e) => this.handleOnChange(e)}
    //                 value={this.state.searchValue}    
    //             />
    //             <button onClick={this.handleSearch}>Submit</button>
    //             {this.state.bookResults ? (
    //                 <div>
    //                     {this.state.bookResults.map((book) => (
    //                         <div>
    //                             <h4>{book.volumeInfo.title}</h4>
    //                             <p>{book.volumeInfo.authors}</p>
    //                         </div>
    //                     ))}                       
    //                 </div>
    //             ) : (
    //                 <div>
    //                     <p>Try searching for a book</p>
    //                 </div>
    //             )}
    //         </div>
    //     )
    // }
}

export default MovieSearch