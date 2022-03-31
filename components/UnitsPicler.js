import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicler({unitSystem, setunitSystem}) {
  return (
    <View style={styles.unitsSystem}>
      <Picker selectedValue={unitSystem} onValueChange={(item)=>setunitSystem(item)} mode="dropdown">
          <Picker.Item label="C" value="metric" />
          <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position:'absolute',
        height: 50,
        width: 100,
        backgroundColor:"white"
    }
})