import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitSystem }) {
  // alert(currentWeather)
  const {
    main: { feels_like, humidity, pressure },
    wind: {speed}
  } = currentWeather

  const windSpeed = unitSystem=== 'metric'? `${Math.round(speed)} m/s` : `${Math.round(speed*2.2)} miles/hr`

  return (
    <View style={styles.WeatherDetails}>
      <View style={styles.WeatherDetailsRow}>
        <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
          <View style={styles.WeatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
            <View>
              <Text style={{color:"white"}}>Feels Like</Text>
              <Text style={{fontStyle:'italic', fontWeight:'bold', color:"white"}}>{unitSystem==='metric'?feels_like:((feels_like*(9/5))+32).toFixed(2)} &#176;</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
        <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
            <View>
              <Text style={{color:"white"}}>Humidity:</Text>
              <Text style={{fontStyle:'italic', fontWeight:'bold', color:"white"}}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{...styles.WeatherDetailsRow, borderTopWidth:1, borderColor:BORDER_COLOR}}>
        <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
          <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR} />
            <View>
              <Text style={{color:"white"}}>Wind Speed :</Text>
              <Text style={{fontStyle:'italic', fontWeight:'bold', color:"white"}}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
        <View style={styles.WeatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
            <View >
              <Text style={{color:"white"}}>Pressure :</Text>
              <Text style={{fontStyle:'italic', fontWeight:'bold', color:"white"}}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  WeatherDetails: {
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10
  },
  WeatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color:BORDER_COLOR
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 30
  }
})