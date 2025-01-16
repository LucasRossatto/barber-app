import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = () => {
    return (
        <View style={styles.divider} />
    )
}

export default Divider

const styles = StyleSheet.create({
    divider: {borderWidth:0.3, opacity:0.7, borderColor:"#ffffff"}
});