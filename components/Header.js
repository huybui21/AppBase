import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Block, NavBar, theme } from 'galio-framework';

import Icon from './Icon';
import Tabs from './Tabs';
import themeBase from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style, navigation }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
        <Icon family="ArgonExtra" size={16} name="bell" color={themeBase.COLORS[isWhite ? 'WHITE' : 'ICON']} />
        <Block middle style={styles.notify} />
    </TouchableOpacity>
);

class Header extends React.Component {
    handleLeftPress = () => {
        const { back, navigation } = this.props;
        return back ? navigation.goBack() : navigation.openDrawer();
    };
    renderRight = () => {
        const { white, title, navigation } = this.props;

        if (title === 'Trang chủ') {
            return [<BellButton key="chat-title" navigation={navigation} isWhite={white} />];
        }
    };
    renderTabs = () => {
        const { tabs, tabIndex, navigation } = this.props;
        const defaultTab = tabs && tabs[0] && tabs[0].id;

        if (!tabs) return null;

        return (
            <Tabs
                data={tabs || []}
                initialIndex={tabIndex || defaultTab}
                onChange={(id) => navigation.setParams({ tabId: id })}
            />
        );
    };
    renderHeader = () => {
        const { search, options, tabs } = this.props;
        if (search || tabs || options) {
            return <Block center>{tabs ? this.renderTabs() : null}</Block>;
        }
    };
    render() {
        const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;

        const headerStyles = [transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null];

        const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

        return (
            <Block style={headerStyles}>
                <NavBar
                    back={false}
                    title={title}
                    style={navbarStyles}
                    transparent={transparent}
                    // right={this.renderRight()}
                    rightStyle={{ alignItems: 'center' }}
                    left={
                        <Icon
                            name={back ? 'chevron-left' : 'menu'}
                            family="entypo"
                            size={30}
                            onPress={this.handleLeftPress}
                            color={iconColor || (white ? themeBase.COLORS.WHITE : themeBase.COLORS.ICON)}
                            style={{ marginTop: 2 }}
                        />
                    }
                    leftStyle={{ paddingVertical: 12, flex: 0.2 }}
                    titleStyle={[
                        styles.title,
                        { color: themeBase.COLORS[white ? 'WHITE' : 'HEADER'] },
                        titleColor && { color: titleColor },
                    ]}
                    {...props}
                />
                {this.renderHeader()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        position: 'relative',
    },
    title: {
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    navbar: {
        paddingVertical: 0,
        paddingBottom: theme.SIZES.BASE * 1.5,
        paddingTop: Platform.OS == 'ios' ? theme.SIZES.BASE * 4 : theme.SIZES.BASE * 1.5,
        zIndex: 5,
    },
    shadow: {
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 3,
    },
    notify: {
        backgroundColor: themeBase.COLORS.LABEL,
        borderRadius: 4,
        height: theme.SIZES.BASE / 2,
        width: theme.SIZES.BASE / 2,
        position: 'absolute',
        top: 9,
        right: 12,
    },
    header: {
        backgroundColor: theme.COLORS.WHITE,
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: theme.COLORS.ICON,
    },
    search: {
        height: 48,
        width: width - 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: themeBase.COLORS.BORDER,
    },
    options: {
        marginBottom: 24,
        marginTop: 10,
        elevation: 4,
    },
    tab: {
        backgroundColor: theme.COLORS.TRANSPARENT,
        width: width * 0.35,
        borderRadius: 0,
        borderWidth: 0,
        height: 24,
        elevation: 0,
    },
    tabTitle: {
        lineHeight: 19,
        fontWeight: '400',
        color: themeBase.COLORS.HEADER,
    },
});

export default Header;
