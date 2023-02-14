import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Hero from './screen/Hero';

const theme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: 'transparent',
	},
};

const Stack = createStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		InterBold: require('./assets/fonts/Inter-Bold.ttf'),
		InterLight: require('./assets/fonts/Inter-Light.ttf'),
		InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
		InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
		InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
	});

	if (!loaded) return null;

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="hero"
			>
				<Stack.Screen name="hero" component={Hero} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
