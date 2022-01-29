/* eslint-disable react-native/no-inline-styles */

// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {View, StyleSheet} from 'react-native';
import reply from './ChatFunction/Replies';
// =============================================
// Main Page Implementation
// =============================================
const Chatting = ({navigation}, props) => {
	const [messages, setMessages] = useState([]);
	const [count, setCount] = useState(0);

	const user1 = {
		_id: 1,
		name: 'React Native',
		avatar: require('../../assets/img/Chat2.png'),
	};

	const user2 = {
		_id: 2,
		name: 'React Native',
		avatar: require('../../assets/img/Chat1.png'),
	};

	// Sets Default Messages
	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: 'Hello developer',
				createdAt: new Date(),
				user: user1,
			},
			{
				_id: 2,
				text: 'Hello developer',
				createdAt: new Date(),
				user: user2,
			},
			{
				_id: 3,
				text: 'Hello ',
				createdAt: new Date(),
				user: user2,
			},
			{
				_id: 4,
				text: 'Hello ',
				createdAt: new Date(),
				user: user1,
			},
		]);
	}, []);

	// Define onSend Function
	const onSend = (newMessages = []) => {
		setMessages(previousMessages =>
			GiftedChat.append(previousMessages, newMessages),
		);
		setCount(count + 1);
		console.log(count);

		let msg = {
			_id: messages.length + 1,
			text: reply[count],
			createdAt: new Date(),
			user: user1,
		};
		if (count >= reply.length) {
			msg.text = 'Automatic';
		}

		setTimeout(() => {
			setMessages(previousMessages =>
				GiftedChat.append(previousMessages, msg),
			);
			console.log('here');
		}, 1000);
	};

	const onQuickReply = useCallback(quickReply => {
		console.log('hello');
	}, []);
	// Render Chat Bubbles
	const renderBubble = bubbleProps => {
		return (
			<View style={{paddingTop: 5}}>
				<Bubble
					{...bubbleProps}
					textStyle={{
						right: {
							color: 'white',
							padding: 3,
						},
						left: {
							color: 'white',
							padding: 3,
						},
					}}
					wrapperStyle={{
						left: {
							backgroundColor: '#666666',
							//width:300
						},
						right: {
							backgroundColor: '#666666',
							//width:300,
							//alignContent:"flex-start"
						},
					}}
				/>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<GiftedChat
				{...props}
				messages={messages}
				onSend={messageToSend => onSend(messageToSend)}
				user={user2}
				renderBubble={renderBubble}
				showUserAvatar={true}
				onQuickReply={quickReply => onQuickReply(quickReply)}
			/>
		</View>
	);
};

// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: '#303030',
	},
});

// =============================================
// Export
// =============================================
export default Chatting;
