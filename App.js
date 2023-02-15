import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AuthScreenContextProvider } from './context/AuthScreenContext';
import Hero from './screen/Hero';
import Main from './screen/Main';

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
		<AuthScreenContextProvider>
			<NavigationContainer theme={theme}>
				<Stack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName="hero"
				>
					<Stack.Screen name="hero" component={Hero} />
					<Stack.Screen name="main" component={Main} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthScreenContextProvider>
	);
}
