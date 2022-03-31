import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function ReloadIcon({load}) {
const reloadIconName = Platform.OS === 'android'?'md-refresh':'ios'
  return (
    <View style={styles.reloadIcon}>
      <Ionicons onPress={load} name={reloadIconName} size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 30,
        right: 20,
        backgroundColor:"white"
    }
})

