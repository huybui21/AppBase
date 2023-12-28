import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Input, Text, Checkbox, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import argonTheme from '../constants/Theme';
import Images from '../constants/Images';

class Onboarding extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Block flex style={styles.container}>
                <StatusBar />
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
                            placeholderTextColor={argonTheme.COLORS.BLACK}
                        />
                        <Input
                            placeholder="Mật khẩu"
                            password
                            viewPass
                            style={styles.input}
                            color={argonTheme.COLORS.BLACK}
                            placeholderTextColor={argonTheme.COLORS.BLACK}
                        />
                        <Checkbox
                            checkboxStyle={{ borderColor: argonTheme.COLORS.WHITE }}
                            color="#0051A9"
                            initialValue={true}
                            label="Ghi nhớ mật khẩu"
                            style={styles.checkbox}
                            labelStyle={{ color: argonTheme.COLORS.WHITE }}
                        />
                        <Button
                            style={[styles.button, { marginTop: 40 }]}
                            color={argonTheme.COLORS.SECONDARY}
                            onPress={() => navigation.navigate('App')}
                            textStyle={{ color: argonTheme.COLORS.BLACK }}
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
            </Block>
        );
    }
}

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
        width: 330,
        color: '#333',
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

export default Onboarding;
