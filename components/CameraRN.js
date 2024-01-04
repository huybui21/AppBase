import { Camera } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Block, Icon } from 'galio-framework';
import { themeBase } from '../constants';
import ToastNotify from './Toast';
import cddApi from '../api/cddbApi';
export default function CameraRN() {
    const [toastData, setToastData] = useState({ circle: false, isShow: false, titleToast: '', statusToast: '' });
    const [image, setImage] = useState(null);
    const [permission, setRequestPermission] = useState();
    const [zoom, setZoom] = useState(0);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setRequestPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    function handleZoomIn() {
        if (zoom < 1) {
            const newZoom = Math.min(zoom + 0.1, 1);
            setZoom(newZoom);
        }
    }
    function hideToast() {
        setTimeout(function () {
            setToastData({ ...toastData, isShow: false });
        }, 1000);
    }
    function handleZoomOut() {
        if (zoom > 0) {
            const newZoom = Math.max(zoom - 0.1, 0);
            setZoom(newZoom);
        }
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync({ base64: true });
                if (data) {
                    const addAnh = await cddApi.postImage({
                        Type: 'jpg',
                        Image: data.base64,
                    });
                    if (addAnh.isThanhCong) {
                        setToastData({
                            circle: true,
                            isShow: true,
                            statusToast: 'success',
                        });
                        hideToast();
                    }
                }
                // console.log(data.base64);
                // setImage(data.uri);
            } catch (err) {
                console.log(err);
            }
        }
    };

    if (!permission) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={setRequestPermission} title="grant permission" />
            </View>
        );
    }
    return (
        <Block style={{ position: 'relative', height: '100%' }}>
            <Camera flex ref={cameraRef} zoom={zoom}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleZoomIn} style={styles.button}>
                        <Icon
                            name="plus"
                            style={styles.buttonIcon}
                            family="Font-Awesome"
                            color={themeBase.COLORS.MAIN_COLOR}
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePicture} style={styles.button}>
                        <Icon
                            name="camera"
                            style={styles.buttonIcon}
                            family="antdesign"
                            color={themeBase.COLORS.MAIN_COLOR}
                            size={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleZoomOut} style={styles.button}>
                        <Icon
                            name="minus"
                            style={styles.buttonIcon}
                            family="Font-Awesome"
                            color={themeBase.COLORS.MAIN_COLOR}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
            <ToastNotify
                circle={toastData.circle}
                isShow={toastData.isShow}
                colorStyle={toastData.statusToast}
                content={toastData.titleToast}
            />
        </Block>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    button: {
        backgroundColor: themeBase.COLORS.GREY,
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
    },
    buttonIcon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
