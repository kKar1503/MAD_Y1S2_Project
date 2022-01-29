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
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// =============================================
// Custom Switch for Changing Theme
// =============================================
const CustomSwitch = ({
	selectionMode,
	roundCorner,
	option1,
	option2,
	onSelectSwitch,
	selectionColor,
}) => {
	const [getSelectionMode, setSelectionMode] = useState(selectionMode);
	const [getRoundCorner, setRoundCorner] = useState(roundCorner);

	const updatedSwitchData = val => {
		setSelectionMode(val);
		onSelectSwitch(val);
	};

	return (
		<View>
			<View
				style={{
					height: 34,
					width: 130,
					backgroundColor: 'white',
					borderRadius: getRoundCorner ? 25 : 0,
					borderWidth: 1,
					borderColor: selectionColor,
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 2,
				}}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => updatedSwitchData(1)}
					style={{
						flex: 1,

						backgroundColor:
							getSelectionMode === 1 ? selectionColor : 'white',
						borderRadius: getRoundCorner ? 25 : 0,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text
						style={{
							color:
								getSelectionMode === 1
									? 'white'
									: selectionColor,
						}}>
						{option1}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					TouchableOpacity
					activeOpacity={1}
					onPress={() => updatedSwitchData(2)}
					style={{
						flex: 1,

						backgroundColor:
							getSelectionMode === 2 ? selectionColor : 'white',
						borderRadius: getRoundCorner ? 25 : 0,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text
						style={{
							color:
								getSelectionMode === 2
									? 'white'
									: selectionColor,
						}}>
						{option2}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

// =============================================
// Export
// =============================================
export default CustomSwitch;
