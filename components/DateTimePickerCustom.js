import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Block, Text, theme } from 'galio-framework';
import { Icon } from '.';
import moment from 'moment/moment';
import { themeBase } from '../constants';

function DateTimePickerCustom({ value, onHandleConfirm, onHandleCancel, onHandleShow, isDatePickerVisible }) {
    const handleConfirm = onHandleConfirm || (() => {});
    const handleCancel = onHandleCancel || (() => {});

    const formatDate = (date) => {
        return moment(date).format('DD/MM/YYYY');
    };
    return (
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <TouchableOpacity onPress={onHandleShow}>
                <Block flex style={styles.calendar}>
                    <Icon
                        size={15}
                        style={{ marginRight: 10, marginLeft: 10 }}
                        color={themeBase.COLORS.ICON}
                        name="calendar-date"
                        family="ArgonExtra"
                    />
                    <Text style={{ fontSize: 16 }}>{formatDate(value)}</Text>
                </Block>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            </TouchableOpacity>
        </Block>
    );
}

DateTimePickerCustom.propTypes = {
    onHandleConfirm: PropTypes.func,
    onHandleCancel: PropTypes.func,
    onHandleShow: PropTypes.func,
    isDatePickerVisible: PropTypes.bool,
};

const styles = StyleSheet.create({
    calendar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        border: 1,
        borderRadius: 4,
        borderColor: themeBase.COLORS.BORDER,
        height: 48,
        backgroundColor: '#FFFFFF',
        shadowColor: themeBase.COLORS.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
    },
});

export default DateTimePickerCustom;
