import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Input } from 'galio-framework';

import Icon from './Icon';
import { themeBase } from '../constants';

class ArInput extends React.Component {
    render() {
        const { shadowless, success, error, fontSize } = this.props;

        const inputStyles = [
            styles.input,
            !shadowless && styles.shadow,
            success && styles.success,
            error && styles.error,
            { ...this.props.style },
            { fontSize: fontSize },
        ];

        return (
            <Input
                placeholderTextColor={themeBase.COLORS.MUTED}
                style={inputStyles}
                color={themeBase.COLORS.HEADER}
                iconContent={<Icon size={14} color={themeBase.COLORS.ICON} name="link" family="AntDesign" />}
                {...this.props}
            />
        );
    }
}

ArInput.defaultProps = {
    shadowless: false,
    success: false,
    error: false,
    fontSize: 18,
};

ArInput.propTypes = {
    shadowless: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    fontSize: PropTypes.number,
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 4,
        borderColor: themeBase.COLORS.BORDER,
        height: 48,
        backgroundColor: '#FFFFFF',
    },
    success: {
        borderColor: themeBase.COLORS.INPUT_SUCCESS,
    },
    error: {
        borderColor: themeBase.COLORS.INPUT_ERROR,
    },
    shadow: {
        shadowColor: themeBase.COLORS.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
    },
});

export default ArInput;
