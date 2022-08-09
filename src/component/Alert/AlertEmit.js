import { DeviceEventEmitter } from "react-native"
export function AlertEmit({ title, body, type = 'success', buttons = [] }) {
    try {
        DeviceEventEmitter.emit('AlertEmit', {
            title: title,
            body: body,
            type: type,
            buttons: buttons,
        });
    } catch (error) {
        console.log("🚀 ~ file: AlertMit.js ~ line 11 ~ showAlert ~ error", error)
    }
}