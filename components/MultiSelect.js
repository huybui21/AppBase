import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import PropTypes from 'prop-types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { themeBase } from '../constants';

const MultiSelectComponent = (props) => {
    const { data, text, labelField, valueField, defaultValue, onChange, style } = props;
    const [selected, setSelected] = useState(defaultValue || []);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        setSelected(defaultValue || selected);
    }, [defaultValue]);
    return (
        <View style={styles.container}>
            <MultiSelect
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
                value={selected}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    if (onChange) {
                        onChange(item);
                    }
                    setSelected(item);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color={isFocus ? 'blue' : 'black'} name="Safety" size={20} />
                )}
                selectedStyle={styles.selectedStyle}
            />
        </View>
    );
};

MultiSelectComponent.propTypes = {
    data: PropTypes.array,
    text: PropTypes.string,
    labelField: PropTypes.string,
    valueField: PropTypes.string,
    onChange: PropTypes.func,
    default: PropTypes.array,
};

const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        borderWidth: 0.5,
        borderRadius: 6,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        color: '#fff',
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        marginTop: 8,
        backgroundColor: themeBase.COLORS.MAIN_COLOR,
        borderRadius: 6,
    },
});

export default MultiSelectComponent;
