import React, { useState } from 'react';
import { ViewStyle, ReturnKeyTypeOptions, KeyboardTypeOptions, TextStyle } from 'react-native';
import { Input, Text, InputProps } from 'react-native-elements';
import { Colors } from '../../themes';

interface Props {
	label?: string;
	placeholder?: string;
	errorMessage?: string;
	leftIcon?: any;
	style?: ViewStyle;
	placeholderStyle?: object;
	secureTextEntry?: boolean;
	returnKeyType?: ReturnKeyTypeOptions;
	keyboardType?: KeyboardTypeOptions;
	multiline?: boolean;
	numberOfLines?: number;
	inputStyle?: ViewStyle;
	requireLabel?: boolean;
	value?: string;
	inputContainerStyle?: ViewStyle;
	onChangeText: (args: string) => void;
	onSubmitEditing?: () => void;
	onChangeCurrencyText?: (value: string) => void;
	currency?: string;
	theme?: object;
	setRef?: (args: any) => void;
	autoFocus?: boolean;
	autoCorrect?: boolean;
	onBlur?: (args: string) => void;
	rightIcon?: any;
	editable?: boolean;
	title?: string;
	key?: number;
	textContentType?: string;
	ref?: TextStyle;
	underlineColorAndroid?: string;
	selectionColor?: string;
	onFocus?: () => void;
	onKeyPress?: () => void;
	maxLength?: number;
	screenType?: string;
}

const TextInput = (props: Props & InputProps) => {
	const {
		label,
		placeholder,
		errorMessage,
		leftIcon,
		style,
		secureTextEntry,
		returnKeyType,
		keyboardType,
		multiline,
		numberOfLines,
		inputStyle,
		requireLabel,
		placeholderStyle,
		value,
		onChangeText,
		inputContainerStyle,
		onSubmitEditing,
		onChangeCurrencyText,
		currency,
		theme,
		setRef,
		screenType
	} = props;

	const [valueText, setValueText] = useState('');

	const handleInputChange = (value: React.SetStateAction<string>) => {
		if (currency === 'USD') {
			const indexDot = `${value}`.indexOf('.');
			const indexZero = `${value}`.indexOf('0');
			const strings = `${value}`;
			if (indexDot === 0) {
				const v = `0${value}`;
				setValueText(v);
			} else if (indexZero === 0) {
				if (indexDot === 1) {
					if (/^\d*\.?\d{0,2}$/.test(value)) {
						setValueText(value);
						onChangeCurrencyText(value);
					}
				} else if (strings.length > 1) {
					setValueText(strings.substr(1));
					onChangeCurrencyText(strings.substr(1));
				} else {
					setValueText('');
					onChangeCurrencyText('');
				}
			} else if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
				setValueText(value);
				onChangeCurrencyText(value);
			}
		} else {
			const indexZero = `${value}`.indexOf('0');
			if (indexZero === 0) {
				const strings = `${value}`;
				if (strings.length > 1) {
					setValueText(strings.substr(1));
					onChangeCurrencyText(strings.substr(1));
				} else {
					setValueText('');
					onChangeCurrencyText('');
				}
			} else if (/^\d*$/.test(value) || value === '') {
				setValueText(value);
				onChangeCurrencyText(value);
			}
		}
	};

	return (
		<Input
			{...props}
			label={
				label ? (
					<Text style={styles.label}>
						{label} {requireLabel ? <Text style={styles.requireLabel}>*</Text> : ''}
					</Text>
				) : null
			}
			placeholderTextColor={'grey'}
			placeholderStyle={placeholderStyle}
			placeholder={placeholder}
			errorMessage={errorMessage}
			errorStyle={styles.error}
			inputContainerStyle={[styles.inputContainer(theme), inputContainerStyle]}
			inputStyle={placeholderStyle && screenType === 'fb' ? [style, placeholderStyle] : [styles.input, inputStyle]}
			multiline={multiline}
			numberOfLines={numberOfLines}
			containerStyle={[styles.container, style]}
			leftIcon={leftIcon}
			secureTextEntry={secureTextEntry}
			returnKeyType={returnKeyType}
			keyboardType={keyboardType}
			value={onChangeCurrencyText ? valueText : value}
			onChangeText={onChangeText || handleInputChange}
			onSubmitEditing={onSubmitEditing}
			ref={setRef}
		/>
	);
};

TextInput.defaultProps = {
	requireLabel: false,
};

export default TextInput;

const styles = {
	container: {
		paddingHorizontal: 0,
		height: 'auto',
	},
	inputContainer: (theme: any): ViewStyle => ({
		borderRadius: 6,
		borderBottomWidth: 1,
		backgroundColor: '#F4F4F4',
		alignItems: 'center',
	}),
	input:{
		paddingHorizontal: 8,
		fontSize: 14,
		height: 44,
		color: 'black',
	},
	label: {
		marginVertical: 4,
		color: '#000000',
		fontWeight: 'normal',
		fontSize: 16,
	},
	requireLabel: {
		color: 'red',
	},
	error: {
		color: 'red',
	},
};
