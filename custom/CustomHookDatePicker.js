import { useState } from 'react';

const useCustomDatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return {
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
    };
};

export default useCustomDatePicker;
