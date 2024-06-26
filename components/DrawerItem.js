import React from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import Icon from './Icon';
import themeBase from '../constants/Theme';

class DrawerItem extends React.Component {
    renderIcon = () => {
        const { title, focused } = this.props;

        switch (title) {
            case 'Trang chủ':
                return (
                    <Icon
                        name="home"
                        family="FontAwesome"
                        size={20}
                        color={focused ? 'white' : themeBase.COLORS.MAIN_COLOR}
                    />
                );
            case 'Khách hàng':
                return (
                    <Icon
                        name="group"
                        family="FontAwesome"
                        size={20}
                        color={focused ? 'white' : themeBase.COLORS.MAIN_COLOR}
                    />
                );
            case 'Getting Started':
                return (
                    <Icon
                        name="spaceship"
                        family="ArgonExtra"
                        size={14}
                        color={focused ? 'white' : 'rgba(0,0,0,0.5)'}
                    />
                );
            default:
                return null;
        }
    };

    render() {
        const { focused, title, navigation } = this.props;

        const containerStyles = [styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null];

        return (
            <TouchableOpacity
                style={{ height: 60 }}
                onPress={() =>
                    title == 'Getting Started'
                        ? Linking.openURL('https://capnuochaiphong.com.vn/').catch((err) =>
                              console.error('An error occurred', err),
                          )
                        : navigation.navigate(title)
                }
            >
                <Block flex row style={containerStyles}>
                    <Block middle flex={0.1} style={{ marginRight: 5 }}>
                        {this.renderIcon()}
                    </Block>
                    <Block row center flex={0.9}>
                        <Text size={15} bold={focused ? true : false} color={focused ? 'white' : 'rgba(0,0,0,0.5)'}>
                            {title}
                        </Text>
                    </Block>
                </Block>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    activeStyle: {
        backgroundColor: themeBase.COLORS.MAIN_COLOR,
        borderRadius: 4,
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
    },
});

export default DrawerItem;
