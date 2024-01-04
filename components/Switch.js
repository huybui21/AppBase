import React from 'react';
import { Switch, Platform } from 'react-native';

import themeBase from '../constants/Theme';

class MkSwitch extends React.Component {
    render() {
        const { value, ...props } = this.props;
        const thumbColor =
            Platform.OS === 'ios'
                ? null
                : Platform.OS === 'android' && value
                ? themeBase.COLORS.SWITCH_ON
                : themeBase.COLORS.SWITCH_OFF;

        return (
            <Switch
                value={value}
                thumbColor={thumbColor}
                ios_backgroundColor={themeBase.COLORS.SWITCH_OFF}
                trackColor={{ false: themeBase.COLORS.SWITCH_ON, true: themeBase.COLORS.SWITCH_ON }}
                {...props}
            />
        );
    }
}

export default MkSwitch;
