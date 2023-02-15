import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import { assets, COLORS, FONTS, SIZES } from '../constants';
import { AuthButton, CircleButton } from './Buttons';
import { AuthScreenContext } from '../context/AuthScreenContext';

const Login = () => {
	const { setShowLoginScreen } = useContext(AuthScreenContext);

	return (
		<View style={styles.container}>
			<View style={styles.headSection}>
				<Text style={styles.title}>Sign Into Your Account</Text>

				<CircleButton
					imgUrl={assets.close}
					handlePress={() => setShowLoginScreen(false)}
					bg={COLORS.secondary}
				/>
			</View>

			<View style={styles.formContainer}>
				<TextInput
					placeholder="Username"
					placeholderTextColor={COLORS.gray}
					style={styles.textInputStyle}
				/>

				<TextInput
					placeholder="Password"
					placeholderTextColor={COLORS.gray}
					style={{ ...styles.textInputStyle, marginTop: SIZES.xlarge }}
				/>
			</View>

			<View>
				<AuthButton bg={COLORS.secondary} minWidth={'100%'}>
					<Text>Log In</Text>
				</AuthButton>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: COLORS.primary,
		color: COLORS.white,
		height: '50%',
		width: '100%',
		zIndex: 20,
		borderTopLeftRadius: SIZES.xxlarge,
		borderTopRightRadius: SIZES.xxlarge,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: SIZES.large,
	},
	title: {
		textTransform: 'uppercase',
		color: COLORS.white,
		fontFamily: FONTS.bold,
		fontSize: SIZES.large,
		fontWeight: 'bold',
	},
	headSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: SIZES.xlarge,
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInputStyle: {
		textAlign: 'center',
		height: 40,
		minWidth: '80%',
		borderBottomColor: COLORS.gray,
		borderBottomWidth: 2,
		color: COLORS.gray,
	},
});
