// =============================================
// Mobile Application Development
// Name:        Yam Kar Lok & Vernell Lim Xi
// Admission:   P2123181    & P2123136
// Class:       DIT/FT/1B/04
// =============================================

// =============================================
// Import Necessary Classes for Development
// =============================================
import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	ImageBackground,
} from 'react-native';
import {LoadUserData} from '../../database/Account';

// =============================================
// Profile Page
// =============================================

const Profile = ({navigation}) => {
	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [bio, setBio] = useState('');
	useEffect(() => {
		LoadUserData()
			.then(data => {
				setUsername(data.username);
				setFullName(data.fullname);
				setEmail(data.email);
				setBio(data.bio);
			})
			.catch(err => console.log(err));
	});

	return (
		<View style={styles.container}>
			<View style={{width: '100%', height: '45%'}}>
				<ImageBackground
					source={require('../../assets/img/bgProfile.jpg')}
					style={styles.backgroundImage}>
					<View style={styles.child}>
						<View
							style={{
								marginBottom: 40,
								alignItems: 'center',
							}}>
							<Text style={[styles.profileText, {fontSize: 25}]}>
								{fullName}
							</Text>
							<Text style={[styles.profileText]}>
								@{username}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
			<ScrollView style={styles.info}>
				<Text
					style={{
						color: 'lightgrey',
						fontSize: 25,
						padding: 5,
					}}>
					About
				</Text>
				<Text
					style={{
						color: 'grey',
						fontSize: 16,
						lineHeight: 25,
						paddingVertical: 10,
					}}>
					Jonathan is a smart student studying in Singapore
					Polytechnics,and he always believe giving back to others,
					especially his juniors!
				</Text>
				<View style={{paddingVertical: 10, flexDirection: 'row'}}>
					<Text style={styles.infoText}>Reviews:</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('My Reviews')}>
						<Text style={[styles.infoText, {paddingHorizontal: 5}]}>
							(2)
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{paddingVertical: 10, flexDirection: 'row'}}>
					<Text style={styles.infoText}>Email:</Text>

					<Text style={[styles.infoText, {paddingHorizontal: 5}]}>
						{email}
					</Text>
				</View>
				<View style={{paddingVertical: 10}}>
					<Text style={styles.infoText}>Listings:</Text>
					<ScrollView
						horizontal={true}
						style={{
							marginTop: 20,
							marginLeft: 9,
							marginBottom: 30,
						}}>
						<View style={{paddingBottom: 10}}>
							<Image
								source={require('../../assets/img/cat1.png')}
								style={styles.catImages}
							/>
							<Text style={styles.infoText}>Six of Brushes</Text>
						</View>
						<View style={{paddingBottom: 10}}>
							<Image
								source={require('../../assets/img/cat2.png')}
								style={styles.catImages}
							/>
							<Text style={styles.infoText}>Math Books</Text>
						</View>
						<View style={{paddingBottom: 10}}>
							<Image
								source={require('../../assets/img/cat3.png')}
								style={styles.catImages}
							/>
							<Text style={styles.infoText}>Math Books</Text>
						</View>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	);
};
// =============================================
// StyleSheet
// =============================================
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#303030',
	},
	backgroundImage: {width: '100%', height: '100%'},
	child: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	profileText: {
		color: 'white',
		padding: 3,
	},
	info: {
		paddingHorizontal: 20,
		paddingVertical: 30,
		height: '100%',
	},
	infoText: {
		color: 'lightgrey',
		fontSize: 20,
	},
	catImages: {
		width: 200,
		height: undefined,
		aspectRatio: 0.72,
		borderRadius: 5,
		marginRight: 50,
		marginBottom: 30,
	},
});
// =============================================
// Export Profile
// =============================================
export default Profile;
