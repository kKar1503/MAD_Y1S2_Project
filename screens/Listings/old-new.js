export default class myapp extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Image
						source={require('./img/nav.png')}
						style={{width: 24, height: 24}}
					/>
					<Text style={styles.headerText}>Post New Listing</Text>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonWord}>POST NEW AD</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#424242',
		paddingHorizontal: 10,
	},
	header: {
		width: '100%',
		height: 65,
		top: 0,
		paddingHorizontal: '5%',
		flexDirection: 'row',
		zIndex: 100,
		backgroundColor: '#424242',
		borderColor: 'white',
		borderWidth: 2,
	},
	headerText: {
		color: 'white',
		fontSize: 20,
		alignSelf: 'center',
	},
	body: {
		width: '100%',
		flexDirection: 'column',
	},
	border: {
		borderWidth: 2,
		borderColor: 'blue',
	},
	whiteText: {
		color: '#DDDDDD',
		fontSize: 22,
	},
	radioText: {
		color: '#BDBDBD',
		fontSize: 22,
	},
	placeholderText: {
		color: '#9E9E9E',
	},
	footer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
		bottom: 0,
	},
	button: {
		backgroundColor: '#FF8A65',
		width: '90%',
		height: 65,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		borderRadius: 5,
	},
	buttonWord: {
		color: 'white',
		fontSize: 20,
	},
});
