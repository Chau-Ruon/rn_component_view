import React, { useCallback, useMemo, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const BottomSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, []);
    return (
        <View>
        <Text>BottomSheet</Text>
        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({})