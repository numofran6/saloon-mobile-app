import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const StylistCard = ({ item }) => {
	const [selected, setSelected] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => setSelected(!selected)}
			style={{
				alignItems: 'center',
				marginRight: SIZES.medium,
			}}
		>
			<View style={{ width: 90, height: 90 }}>
				<Image
					source={item.image}
					resizeMode="cover"
					style={{
						width: '100%',
						height: '100%',
						borderRadius: 400 / 2,
						borderWidth: selected ? SIZES.base : null,
						borderColor: COLORS.gray,
					}}
				/>
			</View>

			<Text
				style={{
					color: COLORS.primary,
					fontFamily: FONTS.bold,
					fontSize: SIZES.small,
					textTransform: 'uppercase',
					marginTop: SIZES.small,
				}}
			>
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default StylistCard;

const styles = StyleSheet.create({});
