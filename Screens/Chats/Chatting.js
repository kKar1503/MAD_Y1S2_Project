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
import {View} from 'react-native';
import reply from './ChatFunction/Replies';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
// =============================================
// Main Page Implementation
// =============================================
const STORAGE_MODE = '@current_mode';
const Chatting = ({navigation}, props) => {
	const [lightMode, setLightMode] = useState(false);
	const [messages, setMessages] = useState([]);
	const [count, setCount] = useState(0);

	const isFocused = useIsFocused();
	const drawerStatus = useDrawerStatus();

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

	useEffect(() => {
		AsyncStorage.getItem(STORAGE_MODE, (err, res) => {
			if (!err) {
				if (parseInt(res, 10) === 2) {
					console.log('light');
					setLightMode(true);
				} else {
					console.log('dark');
					setLightMode(false);
				}
			} else {
				console.log(err);
			}
		});
	}, [isFocused, drawerStatus]);

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
						},
						right: {
							backgroundColor: '#666666',
						},
					}}
				/>
			</View>
		);
	};

	return (
		<View
			style={{flex: 1, backgroundColor: lightMode ? 'white' : '#303030'}}>
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
// Export
// =============================================
export default Chatting;
