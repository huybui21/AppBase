import React from 'react';
import { Block, Text as TextGa, theme, Button } from 'galio-framework';
import { Image, ScrollView, StyleSheet, Alert, ImageBackground, Platform } from 'react-native';
import { DrawerItem as DrawerCustomItem } from '../components';
import Images from '../constants/Images';
import { themeBase } from '../constants';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
    const screens = ['Trang chủ', 'Khách hàng'];

    const handleLogout = async () => {
        navigation.navigate('LoginScreen');
    };
    return (
        <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <Block flex={0.09} style={styles.header}>
                <ImageBackground source={Images.PatternBackground} style={styles.image} resizeMode="cover">
                    <Block style={styles.flex}>
                        <Block style={styles.infoUser}>
                            <Image source={Images.User} style={styles.imageUser}></Image>
                            <Block>
                                <TextGa style={styles.name}>Admin</TextGa>
                            </Block>
                        </Block>
                        <Button
                            onlyIcon
                            shadowless
                            icon="sign-out"
                            iconFamily="Font-Awesome"
                            iconColor={themeBase.COLORS.MAIN_COLOR}
                            iconSize={theme.SIZES.BASE * 0.8}
                            color={theme.COLORS.WHITE}
                            onPress={() =>
                                Alert.alert(
                                    'Thông báo',
                                    'Bạn có chắc chắn muốn thoát khỏi phiên đăng nhập này không?',
                                    [
                                        {
                                            text: 'Đồng ý',
                                            onPress: handleLogout,
                                        },
                                        {
                                            text: 'Đóng',
                                        },
                                    ],
                                )
                            }
                            style={{ borderRadius: 8 }}
                        />
                    </Block>
                </ImageBackground>
            </Block>

            <Block flex style={{ paddingLeft: 8, paddingRight: 14, paddingTop: 30 }}>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {screens.map((item, index) => {
                        return (
                            <DrawerCustomItem
                                title={item}
                                key={index}
                                navigation={navigation}
                                focused={state.index === index ? true : false}
                            />
                        );
                    })}
                    <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
                        <Block
                            style={{
                                borderColor: 'rgba(0,0,0,0.2)',
                                width: '100%',
                                borderWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <TextGa color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>
                            Tài Liệu
                        </TextGa>
                    </Block>
                    <DrawerCustomItem title="Getting Started" navigation={navigation} />
                </ScrollView>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == 'ios' ? 40 : 0,
    },
    header: {
        paddingBottom: Platform.OS == 'ios' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE,
        justifyContent: 'center',
    },
    description: {
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 500,
    },
    centerHorizontal: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 600,
        color: themeBase.COLORS.MAIN_COLOR,
    },
    image: {
        flex: Platform.OS == 'android' ? 1 : 0,
        width: '100%',
        height: Platform.OS == 'ios' ? 150 : 90,
        paddingTop: Platform.OS == 'ios' ? 60 : 20,
    },
    imageUser: {
        width: 40,
        height: 40,
    },
    infoUser: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    name: {
        color: themeBase.COLORS.WHITE,
        fontSize: 15,
        fontWeight: 700,
    },
    flex: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    position: {
        fontSize: 11,
        color: '#fff',
        maxWidth: 135,
    },
});

export default CustomDrawerContent;
