import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
	FilledButton,
	FocusedStatusBar,
	Login,
	OutlinedButton,
	TextButton,
} from '../components';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const Hero = () => {
	const [loginScreen, setLoginScreen] = useState(true);

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

				<View style={styles.subContainer}>
					<Text style={styles.storeName}>Defavoured Saloon</Text>

					<View style={styles.actions}>
						<View style={styles.buttons}>
							<OutlinedButton minWidth={'40%'}>
								<Text>Log in</Text>
							</OutlinedButton>

							<FilledButton minWidth={'40%'} bg={COLORS.primary}>
								<Text>Sign Up</Text>
							</FilledButton>
						</View>

						<View style={{ marginTop: SIZES.medium }}>
							<TextButton>
								<Text>Continue without Signing In</Text>
							</TextButton>
						</View>
					</View>
				</View>

				{loginScreen && <Login />}
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
	subContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '45%',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 0,
	},
	storeName: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xxlarge,
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
