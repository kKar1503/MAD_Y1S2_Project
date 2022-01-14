// =============================================
// Import necessary classes for development
// =============================================
import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
  Dimensions
} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================
const Review = ({navigation}) => {

	return (
<View style={styles.container}>
    <View style={styles.orangeContainer}>
    <Image source={require('../../assets/img/ratingscreen.png')} style={styles.styleimage} />
    <Text style={styles.text}>Please rate your experience!</Text>
    <View style={styles.inputContainer}>
    <TextInput
    placeholder="Comments"
    placeholderTextColor="#e3e3e3"
    style={styles.textInput}
    multiline={true}/>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Home")}}
    >
      <View>
      <Text  style={styles.buttonText}>SUBMIT</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Home")}}>
      <View>
      <Text style={styles.buttonText}>CANCEL</Text>
      </View>
    </TouchableOpacity>
    </View>
    </View> 
</View>

	);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
    container:{flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: '#303030',
		paddingHorizontal: 15,
    position:"absolute",
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
        
},
    orangeContainer:{
        backgroundColor:"#f0855b",
        width:"99%",
        height:"80%",
        alignSelf:"center",
        justifyContentL:"center"

    },
    styleimage:{width:"20%",
      height:"10%",
      marginTop:50,
      marginBottom:30,
      alignSelf:"center",
    },
    text:{
       color:"white",
       fontSize:25,
       textAlign:"center",

    },
    textInput:{
        color:"white",
        textAlign:"left",
        fontSize:23,
        flexWrap:"wrap"
    },
    inputContainer:{
      borderWidth:2,
      borderColor:"white",
      width:"90%",
      height:"30%",
      alignSelf:"center",
      flexWrap:"wrap"
    },
    buttonContainer:{
      flexDirection:"row",
      justifyContent:"center",
    },

    buttonText:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    borderWidth:2,
    borderColor:"white",
    margin:20,
    paddingHorizontal:31,
    paddingVertical:13,
    fontWeight:"800"
    
  }

})

export default Review;
