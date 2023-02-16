import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const ProfileCard = ({ item }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.titleContainer}>
				<View style={styles.iconContainer}>
					<Image source={item.icon} resizeMode="contain" style={styles.icon} />
				</View>

				<Text style={styles.title}>{item.name}</Text>
			</View>

			<Image
				source={assets.right}
				resizeMode="contain"
				style={{ width: 20, height: 20 }}
			/>
		</TouchableOpacity>
	);
};

export default ProfileCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e5e7eb',
		borderRadius: SIZES.medium,
		marginTop: SIZES.large,
		margin: SIZES.base,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: SIZES.medium,
		paddingVertical: SIZES.medium,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		backgroundColor: '#fbcfe8',
		padding: SIZES.medium,
		borderRadius: SIZES.small,
	},
	icon: {
		width: 25,
		height: 25,
	},
	title: {
		marginLeft: SIZES.small,
		fontFamily: FONTS.bold,
		fontSize: SIZES.small + 3,
		color: COLORS.primary,
	},
});
