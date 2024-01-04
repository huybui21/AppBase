import { Platform, StatusBar } from 'react-native';
import { theme } from 'galio-framework';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusHeight || 0);
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);

export const fetchData = async (apiFunction, setterFunction) => {
    try {
        const response = await apiFunction();
        setterFunction(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
