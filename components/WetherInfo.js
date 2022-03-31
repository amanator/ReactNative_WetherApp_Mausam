import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WetherInfo({currentWeather, unitSystem}) {
    const {
      main:{temp},
      weather:[details],
      name,

  } = currentWeather
    
  const {icon, main, description} = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.wetherInfo}>
       <Text style={{color:"white"}}>{name}</Text>
      <Image style={styles.wetherIcon} source={{uri: iconUrl}} />
      <Text style={styles.textPrimary}> {unitSystem==='metric'?temp:((temp*(9/5))+32).toFixed(2)} &#176;</Text>
      {/* <Text style={styles.textPrimary}>{temp} &#176;</Text> */}
      <Text style={{color:"white"}}>{description.toUpperCase()}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wetherInfo:{
        alignItems:'center',
    },
    wetherIcon:{
      width:100,
      height:100,
    },
    textPrimary:{
    fontSize: 30,
    color: PRIMARY_COLOR
    },
    textSecondary: {
      fontSize: 20,
      color: SECONDARY_COLOR,
      fontWeight: '500',
      marginTop: 10
    }
})