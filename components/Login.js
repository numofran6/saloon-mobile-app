import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';
import { AuthButton, FilledButton } from './Buttons';

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headSection}>
				<View></View>

				<Text style={styles.title}>Log In</Text>

				<View></View>
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
		fontSize: SIZES.xlarge,
		fontWeight: 'bold',
	},
	headSection: {
		justifyContent: 'space-between',
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
