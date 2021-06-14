import {useCallback} from 'react';
import {StatusBarStyle, StatusBar, Platform} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useStatusBar = (
	setBarStyle: {barStyle?: StatusBarStyle; animated?: boolean},
	setBackgroundColor: string = '#F7F7F7',
	isSetStatusBar: boolean = true,
	translucent: boolean = false,
) => {
	const animated = setBarStyle.animated;
	const barStyle = setBarStyle.barStyle || 'light-content';
	if (isSetStatusBar) {
		return useFocusEffect(
			useCallback(() => {
				if(!(Platform.OS === 'ios') ){
					StatusBar.setTranslucent(translucent);
				}
				StatusBar.setBarStyle(barStyle, animated);
				!(Platform.OS === 'ios') && StatusBar.setBackgroundColor(setBackgroundColor);
			}, [isSetStatusBar, barStyle, animated, setBackgroundColor]),
		);
	}
};
