import React from 'react';
import { Animated, Dimensions, Easing, Text } from 'react-native';
// header for screens
import { Header, Icon } from '../components';
// drawer
import CustomDrawerContent from './Menu';
// screens

import { Login, Home } from '../screens/HeThong';

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width } = Dimensions.get('screen');

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: 'screen',
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Trang chủ" search options navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
        </Stack.Navigator>
    );
}

//#region  mẫu tạo stack
// function CustomerStack(props) {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 mode: 'card',
//                 headerShown: 'screen',
//             }}
//         >
//             <Stack.Screen
//                 name="CustomerNavigateScreen"
//                 component={CustomerNavigate}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khách hàng" navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerScreen"
//                 component={Customer}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Đăng ký khách hàng" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="SurveyCustomerScreen"
//                 component={SurveyCustomerMain}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khảo sát khách hàng" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="AddSurveyCustomerScreen"
//                 component={SurveyCustomer}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Thêm khảo sát khách hàng" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="ResultSurveyCustomerScreen"
//                 component={SurveyCustomerResult}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header
//                             title="Cập nhật kết quả khảo sát khách hàng"
//                             back
//                             navigation={navigation}
//                             scene={scene}
//                         />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="AddSuppliesScreen"
//                 component={AddSupplies}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Thêm vật tư" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerClearanceMainScreen"
//                 component={CustomerClearanceMain}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khách hàng chờ thủ tục" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerClearanceScreen"
//                 component={CustomerClearance}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Cập nhật khách hàng chờ thủ tục" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerConstructionMainScreen"
//                 component={CustomerConstructionMain}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khách hàng chờ thi công" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerConstructionScreen"
//                 component={CustomerConstruction}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Cập nhật khách hàng chờ thi công" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerEstimateMainScreen"
//                 component={CustomerEstimateMain}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khách hàng chờ dự toán thiết kế" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerEstimateScreen"
//                 component={CustomerEstimate}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Cập nhật chờ dự toán thiết kế" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerAcceptanceMainScreen"
//                 component={CustomerAcceptanceMain}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Khách hàng hoàn thành thi công" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CustomerAcceptanceScreen"
//                 component={CustomerAcceptance}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header
//                             title="Cập nhật khách hàng hoàn thành thi công"
//                             back
//                             navigation={navigation}
//                             scene={scene}
//                         />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="MapInfoScreen"
//                 component={MapInfo}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Thông tin bản đồ" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//             <Stack.Screen
//                 name="CameraScreen"
//                 component={CameraRN}
//                 options={{
//                     header: ({ navigation, scene }) => (
//                         <Header title="Máy ảnh" back navigation={navigation} scene={scene} />
//                     ),
//                     cardStyle: { backgroundColor: '#F8F9FE' },
//                 }}
//             />
//         </Stack.Navigator>
//     );
// }
//#endregion

function MenuStack(props) {
    return (
        <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: 'white',
                width: width * 0.8,
            }}
            screenOptions={{
                activeTintcolor: 'white',
                inactiveTintColor: '#000',
                activeBackgroundColor: 'transparent',
                itemStyle: {
                    width: width * 0.75,
                    backgroundColor: 'transparent',
                    paddingVertical: 16,
                    paddingHorizonal: 12,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                },
                labelStyle: {
                    fontSize: 18,
                    marginLeft: 12,
                    fontWeight: 'normal',
                },
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Trang chủ"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Khách hàng"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                option={{
                    headerTransparent: true,
                }}
            />

            <Stack.Screen name="App" component={MenuStack} />
        </Stack.Navigator>
    );
}
