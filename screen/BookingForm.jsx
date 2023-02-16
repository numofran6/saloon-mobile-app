import {
	FlatList,
	Image,
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {
	DatePickerButton,
	FilledButton,
	OutlinedButton,
} from '../components/Buttons';
import { assets, COLORS, FONTS, SIZES, Stylists } from '../constants';
import { FocusedStatusBar } from '../components';
import StylistCard from '../components/StylistCard';
import { useNavigation } from '@react-navigation/native';

const BookingForm = () => {
	const navigation = useNavigation();

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [text, setText] = useState('Please pick a date');
	const [timeText, setTimeText] = useState('');
	const [dateText, setDateText] = useState('');

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);

		let tempDate = new Date(currentDate);
		let fDate =
			tempDate.getDate() +
			'/' +
			(tempDate.getMonth() + 1) +
			'/' +
			tempDate.getFullYear();
		let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
		setText(fDate + ' - ' + fTime);
		setTimeText(fTime);
		setDateText(fDate);
	};

	const showMOde = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<View style={styles.heading}>
				<Image
					source={assets.logo}
					resizeMode="contain"
					style={{ width: 40, height: 40 }}
				/>
			</View>

			<View style={styles.headingContainer}>
				<Text style={styles.headingText}>Set an Appointment</Text>
			</View>

			<View style={styles.content}>
				<Text style={styles.time}>
					Selected Date: <Text style={{ color: COLORS.secondary }}>{text}</Text>
				</Text>

				<View style={{ marginTop: SIZES.large }} />

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<DatePickerButton
						bg={COLORS.secondary}
						imgUrl={assets.calendar}
						handlePress={() => showMOde('date')}
					>
						<Text>{dateText ? dateText : 'Pick a Date'}</Text>
					</DatePickerButton>

					<View style={{ marginHorizontal: SIZES.small }} />

					<DatePickerButton
						bg={COLORS.gray}
						imgUrl={assets.clock}
						handlePress={() => showMOde('time')}
					>
						<Text>{timeText ? timeText : 'Pick a Time'}</Text>
					</DatePickerButton>
				</View>

				<View style={styles.stylists}>
					<Text
						style={{
							textTransform: 'uppercase',
							fontFamily: FONTS.bold,
							fontSize: SIZES.medium,
							marginBottom: SIZES.medium,
							color: COLORS.secondary,
						}}
					>
						Choose Stylists
					</Text>

					<FlatList
						data={Stylists}
						renderItem={({ item }) => <StylistCard item={item} />}
						keyExtractor={(item) => item.id}
						showsHorizontalScrollIndicator={false}
						numColumns={3}
					/>
				</View>
			</View>

			<View style={styles.actions}>
				<OutlinedButton
					handlePress={() => navigation.navigate('booking-status')}
				>
					<Text>Book Now</Text>
				</OutlinedButton>

				<View style={{ marginTop: SIZES.small }} />

				<FilledButton bg={'#dc2626'} handlePress={() => navigation.goBack()}>
					<Text>Cancel</Text>
				</FilledButton>
			</View>

			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={true}
					display="default"
					onChange={onChange}
				/>
			)}
		</SafeAreaView>
	);
};

export default BookingForm;

const styles = StyleSheet.create({
	heading: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: SIZES.small,
		paddingTop: StatusBar.currentHeight + SIZES.medium,
		paddingBottom: SIZES.medium,
		backgroundColor: COLORS.primary,
	},
	headingContainer: {
		backgroundColor: COLORS.primary,
		alignItems: 'center',
		paddingTop: SIZES.medium,
		paddingBottom: SIZES.small,
	},
	headingText: {
		fontFamily: FONTS.bold,
		color: COLORS.white,
		fontSize: SIZES.medium,
		textTransform: 'uppercase',
	},
	content: {
		alignItems: 'center',
		marginTop: SIZES.xxlarge,
	},
	time: {
		color: COLORS.primary,
		fontFamily: FONTS.bold,
		fontSize: SIZES.medium,
	},
	stylists: {
		marginLeft: SIZES.medium,
		marginTop: SIZES.xxlarge,
	},
	actions: {
		position: 'absolute',
		bottom: 10,
		width: '100%',
		paddingHorizontal: SIZES.medium,
	},
});
