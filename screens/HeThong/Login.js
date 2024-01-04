import React, { useState } from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Block, Button, Input, Text, theme, Icon } from 'galio-framework';
import { ToastNotify } from '../../components';
const { height, width } = Dimensions.get('screen');
import themeBase from '../../constants/Theme';
import Images from '../../constants/Images';

const Login = ({ navigation }) => {
    const [toastData, setToastData] = useState({ isShow: false, titleToast: '', statusToast: '' });
    const [passwordVisible, setPasswordVisible] = useState(true);

    function hideToast() {
        setTimeout(function () {
            setToastData({ ...toastData, isShow: false });
        }, 2000);
    }
    const handleLogin = async () => {
        try {
            navigation.navigate('App');
        } catch (error) {
            setToastData({
                isShow: true,
                titleToast: 'Tài khoản hoặc mật khẩu không chính xác',
                statusToast: 'error',
            });
            hideToast();
        }
    };
    return (
        <Block flex>
            <Block flex style={{ position: 'relative' }}>
                <StatusBar barStyle={'dark-content'} />
                <Block flex center>
                    <ImageBackground source={Images.Onboarding} style={{ height, width, zIndex: 1 }} />
                </Block>
                <Block center>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </Block>

                <Block flex={2} center style={{ zIndex: 2 }}>
                    <Block
                        center
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            padding: 8,
                            paddingTop: 24,
                            paddingBottom: 24,
                            borderRadius: 6,
                        }}
                    >
                        <Input
                            placeholder="Tên đăng nhập"
                            style={styles.input}
                            color={'#0051A9'}
                            onChangeText={(value) => setUser({ ...user, username: value })}
                            placeholderTextColor={themeBase.COLORS.BLACK}
                        />
                        <Block style={styles.passwordContaniner}>
                            <TextInput
                                placeholder="Mật khẩu"
                                secureTextEntry={passwordVisible}
                                style={styles.inputCustom}
                                onChangeText={(value) => setUser({ ...user, password: value })}
                                placeholderTextColor={themeBase.COLORS.BLACK}
                            />
                            <TouchableOpacity
                                style={styles.iconCustom}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Icon
                                    name={passwordVisible ? 'eye-slash' : 'eye'}
                                    family="Font-Awesome"
                                    color={themeBase.COLORS.BLACK}
                                    size={16}
                                />
                            </TouchableOpacity>
                        </Block>

                        <Button
                            style={[styles.button, { marginTop: 40 }]}
                            color={themeBase.COLORS.MAIN_COLOR}
                            onPress={handleLogin}
                            textStyle={{ color: themeBase.COLORS.WHITE }}
                        >
                            Đăng nhập
                        </Button>
                    </Block>
                </Block>
                <Block center>
                    <Block bottom style={{ zIndex: 2 }}>
                        <Text p style={styles.text}>
                            Công ty Cổ phần cấp nước Hải Phòng
                        </Text>
                    </Block>
                </Block>
                <ToastNotify
                    isShow={toastData.isShow}
                    colorStyle={toastData.statusToast}
                    content={toastData.titleToast}
                />
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.WHITE,
    },
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 5,
    },
    logo: {
        width: 102,
        height: 100,
        zIndex: 2,
        position: 'relative',
        marginTop: '-45%',
    },
    input: {
        width: width - theme.SIZES.BASE * 4,
        color: '#333',
        borderRadius: 5,
    },
    passwordContaniner: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputCustom: {
        width: width - theme.SIZES.BASE * 4,
        height: 42,
        color: '#333',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 4,
        marginTop: 5,
    },
    iconCustom: {
        position: 'absolute',
        right: 10,
    },
    text: {
        color: '#c9c9c9',
        fontWeight: 500,
        fontSize: 14,
        marginBottom: 12,
        textTransform: 'uppercase',
    },
    checkbox: {
        marginTop: 10,
        marginLeft: 190,
    },
});

export default Login;
