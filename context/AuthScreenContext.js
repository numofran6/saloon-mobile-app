import React, { createContext, useState } from 'react';

export const AuthScreenContext = createContext();

export const AuthScreenContextProvider = ({ children }) => {
	const [showLoginScreen, setShowLoginScreen] = useState(false);
	const [showSignUpScreen, setShowSignUpScreen] = useState(false);
	const [selected, setSelected] = useState(false);

	return (
		<AuthScreenContext.Provider
			value={{
				showLoginScreen,
				setShowLoginScreen,
				showSignUpScreen,
				setShowSignUpScreen,
				selected,
				setSelected,
			}}
		>
			{children}
		</AuthScreenContext.Provider>
	);
};
