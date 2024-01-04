import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button as GaButton, Text, theme } from 'galio-framework';
import { themeBase } from '../../constants';

const { width } = Dimensions.get('screen');

const Navigate = ({ navigation }) => {
    return (
        <Block flex style={styles.group}>
            <Block
                style={{
                    backgroundColor: themeBase.COLORS.MAIN_COLOR,
                    paddingVertical: 30,
                }}
            >
                <Block
                    row
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    {/* mẫu điều hướng
                    <Block style={[styles.center, { width: '33.333333333%', marginTop: 20 }]}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="gears"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.FACEBOOK}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerEstimateMainScreen')}
                        />
                        <Block>
                            <Text style={styles.description}>Dự toán</Text>
                            <Text style={styles.description}>thiết kế</Text>
                        </Block>
                    </Block> */}
                </Block>
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    group: {
        position: 'relative',
        backgroundColor: themeBase.COLORS.MAIN_COLOR,
    },

    center: {
        alignItems: 'center',
    },

    description: {
        textAlign: 'center',
        marginTop: 5,
        color: theme.COLORS.WHITE,
        fontWeight: 400,
        fontSize: 13,
    },

    title: {
        paddingBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        marginTop: 44,
        color: themeBase.COLORS.HEADER,
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2,
    },

    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: 8,
        justifyContent: 'center',
    },

    subTitle: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 12,
        paddingVertical: 2,
        backgroundColor: theme.COLORS.FACEBOOK,
    },

    subTitleAfter: {
        position: 'absolute',
        width: 10,
        height: 35,
        top: -5,
        right: -5,
        backgroundColor: themeBase.COLORS.MAIN_COLOR,
        transform: 'rotateX(25deg) rotateZ(20deg)',
    },
});

export default Navigate;
