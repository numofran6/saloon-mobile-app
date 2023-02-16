import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { FocusedStatusBar, OutlinedButton } from '../components';
import { assets, FONTS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const BookingStatus = () => {
	const navigate = useNavigation();

	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<Image
				source={assets.success}
				resizeMode="contain"
				style={{ width: 100, height: 100 }}
			/>

			<Text
				style={{
					fontFamily: FONTS.bold,
					fontSize: SIZES.medium,
					marginVertical: SIZES.medium,
				}}
			>
				Appointment Booked Successfully
			</Text>

			<OutlinedButton handlePress={() => navigate.navigate('home')}>
				<Text>Home</Text>
			</OutlinedButton>
		</SafeAreaView>
	);
};

export default BookingStatus;
