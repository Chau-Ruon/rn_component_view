import { DeviceEventEmitter } from 'react-native';

export function showAlert({ title, body, type = 'success', buttons = [] }) {
    try {
        DeviceEventEmitter.emit('showAlert', {
            title: title,
            body: body,
            type: type,
            buttons: buttons,
        });
    } catch (error) {
        console.log("🚀 ~ file: common.js ~ line 13 ~ showAlert ~ error", error)
    }
}