import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const BookingForm = () => {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [text, setText] = useState('Empty');

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
		let fTime =
			'Hours: ' + tempDate.getHours() + 'Minutes' + tempDate.getMinutes();
		setText(fDate + '\n' + fTime);
	};

	const showMOde = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	return (
		<View>
			<Text>{text}</Text>
			<TouchableOpacity onPress={() => showMOde('date')}>
				<Text>Pick a Date</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => showMOde('time')}>
				<Text>Pick a Time</Text>
			</TouchableOpacity>

			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={false}
					display="default"
					onChange={onChange}
				/>
			)}
		</View>
	);
};

export default BookingForm;

const styles = StyleSheet.create({});
