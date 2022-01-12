// =============================================
// Import necessary classes for development
// =============================================
import React, { useState, useCallback, useEffect } from 'react'
import {GiftedChat, Send, Composer, Bubble, Message, MessageText, GiftedAvatar, utilse } from 'react-native-gifted-chat'
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';

// =============================================
// Main Page Implementation
// =============================================
const Chatting = ({navigation},props) => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([
		  {
			_id: 1,
			text: 'Hello developer',
			createdAt: new Date(),
			user: {
			  _id: 2,
			  name: 'React Native',
			  avatar:require('../../assets/img/Chat2.png'),
			},
			
		  },
		  {
			_id: 2,
			text: 'Hello ',
			createdAt: new Date(),
			user: {
			  _id: 2,
			  name: 'React Native',
			  avatar:require('../../assets/img/Chat2.png'),
			},
			
		  }
		],)
	  }, [])

	  const onSend = useCallback((messages = []) => {
		setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
	  }, [])

	  const renderBubble =(props)=> {
    
		return (
		  <View style={{paddingTop:5}}>
		  <Bubble
			{...props}
			textStyle={{
			  right: {
				color: "white",
				padding:3
			  },
			  left: {
				color: "white",
				padding:3
			  }
			}}
			wrapperStyle={{
			  left: {
				backgroundColor: '#424242',
				width:300
			  },
			  right: {
				backgroundColor: '#424242',
				width:300,
				alignContent:"flex-start"
			  }
			}}
		  />
		  </View>
		)
	  }

	return (<View style={styles.container}>
		<GiftedChat
    
	{...props}
	messages={messages}
	onSend={messages => onSend(messages)}
	user={{
	  _id: 1,
	}}
	renderBubble={renderBubble}
  />
	</View>);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#303030',
	},
});

export default Chatting;
