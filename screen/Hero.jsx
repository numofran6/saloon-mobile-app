import { useContext } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
	FilledButton,
	FocusedStatusBar,
	Login,
	OutlinedButton,
	SignUp,
	TextButton,
} from '../components';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';
import { AuthScreenContext } from '../context/AuthScreenContext';
import { useNavigation } from '@react-navigation/native';

const Hero = () => {
	const {
		showLoginScreen,
		setShowLoginScreen,
		showSignUpScreen,
		setShowSignUpScreen,
	} = useContext(AuthScreenContext);
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<View style={styles.container}>
				<Image
					source={assets.makeupToolkit1}
					resizeMode="cover"
					style={styles.image}
				/>

				<View style={styles.heading}>
					<Image
						source={assets.logo}
						resizeMode="contain"
						style={{ width: 50, height: 50 }}
					/>

					<Text style={styles.storeName}>
						De<Text style={{ color: '#d0206f' }}>favoured</Text> Saloon
					</Text>
				</View>

				<View style={styles.subContainer}>
					<View style={styles.actions}>
						<View style={styles.buttons}>
							<OutlinedButton
								minWidth={'40%'}
								handlePress={() => setShowLoginScreen(true)}
							>
								<Text>Log in</Text>
							</OutlinedButton>

							<FilledButton
								minWidth={'40%'}
								bg={COLORS.primary}
								handlePress={() => setShowSignUpScreen(true)}
							>
								<Text>Sign Up</Text>
							</FilledButton>
						</View>

						<View style={{ marginTop: SIZES.medium }}>
							<TextButton handlePress={() => navigation.navigate('main')}>
								<Text style={{ color: '#d0206f' }}>
									Continue without Signing In
								</Text>
							</TextButton>
						</View>
					</View>
				</View>

				{showLoginScreen && <Login />}
				{showSignUpScreen && <SignUp />}
			</View>
		</SafeAreaView>
	);
};

export default Hero;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	heading: {
		position: 'absolute',
		top: 40,
		width: '100%',
		alignItems: 'center',
	},
	subContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 0,
	},
	storeName: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xlarge,
		color: COLORS.primary,
	},
	actions: {
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: SIZES.xlarge,
	},
});
