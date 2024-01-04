import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownComponent = (props) => {
    const { data, text, labelField, valueField, defaultValue, onChange, style } = props;
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }, style]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField={labelField}
                valueField={valueField}
                placeholder={!isFocus ? text : '...'}
                searchPlaceholder="Tìm kiếm..."
                value={defaultValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    if (onChange) {
                        onChange(item);
                    }
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color={isFocus ? 'blue' : 'black'} name="Safety" size={20} />
                )}
            />
        </View>
    );
};

DropdownComponent.propTypes = {
    data: PropTypes.array,
    text: PropTypes.string,
    labelField: PropTypes.string,
    valueField: PropTypes.string,
    onChange: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 6,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default DropdownComponent;
