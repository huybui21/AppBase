import React, { useEffect } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Icon, Text, Block } from 'galio-framework';
import PropTypes from 'prop-types';
import themeBase from '../constants/Theme';
const { width, height } = Dimensions.get('screen');

function ToastNotify({ content, colorStyle, style, circle, isShow }) {
    let iconName = '',
        colorIcon,
        cssClass;
    const animationValue = new Animated.Value(0);

    useEffect(() => {
        if (isShow) {
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [isShow]);

    const animatedStyle = {
        transform: [
            {
                translateX: animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [3000, 0],
                }),
            },
        ],
    };

    if (colorStyle === 'success') {
        iconName = 'check';
        colorIcon = themeBase.COLORS.SUCCESS;
    } else if (colorStyle === 'warning') {
        iconName = 'exclamation-circle';
        colorIcon = themeBase.COLORS.WARNING;
    } else if (colorStyle === 'error') {
        iconName = 'remove';
        colorIcon = themeBase.COLORS.ERROR;
    }
    if (isShow == true) {
        cssClass = styles.ToastShow;
    } else {
        cssClass = '';
    }

    return (
        <Block flex={2} style={[styles.mainToast, cssClass]}>
            {circle ? (
                <Animated.View style={[styles.circleToast, animatedStyle]}>
                    <Icon name={iconName} family="Font-Awesome" color={colorIcon} size={30} />
                </Animated.View>
            ) : (
                <Animated.View style={[styles.toast, animatedStyle, { borderLeftColor: colorIcon }]}>
                    <Block flex center style={styles.box}>
                        <Block flex row>
                            <Icon name={iconName} family="Font-Awesome" color={colorIcon} size={18} />
                            <Text style={styles.toastContent}>{content}</Text>
                        </Block>
                    </Block>
                </Animated.View>
            )}
        </Block>
    );
}

const styles = StyleSheet.create({
    mainToast: {
        position: 'absolute',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '35%',
        left: 0,
        width: 0,
        overflow: 'hidden',
    },
    ToastShow: {
        width: '100%',
    },
    toast: {
        width: 300,
        height: 50,
        backgroundColor: themeBase.COLORS.GREY,
        borderRadius: 3,
        borderLeftWidth: 8,
        bottom: 0,
        backgroundColor: '#fff',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        backgroundColor: themeBase.COLORS.GREY,
        width: '100%',
        paddingHorizontal: 10,
    },
    toastContent: {
        fontWeight: 500,
    },
    description: {
        fontSize: 12,
    },
    circleToast: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.2,
        height: height * 0.1,
        backgroundColor: themeBase.COLORS.GREY,
        borderRadius: 50,
    },
});

ToastNotify.propTypes = {
    content: PropTypes.string,
    circle: PropTypes.bool,
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['default', 'primary', 'main_color', 'secondary', 'info', 'error', 'success', 'warning']),
    ]),
};

export default ToastNotify;
