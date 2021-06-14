import React from 'react';
import { View, SafeAreaView, StatusBarStyle } from 'react-native';
import { useStatusBar } from '../../../tool/StatusBar';

type Props = {
	style: object;
	children: any;
	isSafeAreaView: boolean;
	barStyle?: StatusBarStyle;
	statusBarBackgroundColor?: string;
	isSetStatusBar?: boolean;
	translucent?: boolean;
};

const Container = (props: Props) => {
	const {
		style,
		children,
		isSafeAreaView,
		barStyle,
		statusBarBackgroundColor,
		isSetStatusBar,
		translucent,
	} = props;
	const Container = isSafeAreaView ? SafeAreaView : View;

	useStatusBar({ barStyle }, statusBarBackgroundColor, isSetStatusBar, translucent);
	return (
		<Container
			style={[{ backgroundColor: '#F7F7F7' }, style]}>
			{children}
		</Container>
	);
};

Container.defaultProps = {
	isSafeAreaView: true,
	isSetStatusBar: true,
	barStyle: 'dark-content',
	statusBarBackgroundColor: '#000',
};

export default Container;
