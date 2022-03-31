import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import react,{useEffect, useState} from 'react';
import WetherInfo from './components/WetherInfo'
import ReloadIcon from './components/ReloadIcon';
import UnitsPicler from './components/UnitsPicler';
import WeatherDetails from './components/WeatherDetails';
import {WETHER_API_KEY} from 'react-native-dotenv'


const BASE_WETHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  
  const [ErrorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setcurrentWeather] = useState(null)
  const [unitSystem, setunitSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [])
  
   const load = async()=>{
    setcurrentWeather(null)
    try {
      let {status} = await Location.requestForegroundPermissionsAsync()
      // alert(status)
      if(status!== 'granted'){
        // alert("hey")
        setErrorMessage(`Access of Location is needed to run the app`)
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords
      
      const wetherurl = `${BASE_WETHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WETHER_API_KEY}`

      const response = await fetch(wetherurl)
      const result = await response.json();
      if(response.ok){
        setcurrentWeather(result)
      }
      else{
        setErrorMessage(result.message)
      }

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if(currentWeather){
    // const {main : {temp}} = currentWeather
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <UnitsPicler unitSystem={unitSystem} setunitSystem={setunitSystem} />
        <ReloadIcon load={load}/>
        <WetherInfo currentWeather={currentWeather} unitSystem={unitSystem} />
      </View>
      <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem}/>
    </View>
  );} 
  else{
    return (
      <View style={styles.container}>
        <ReloadIcon load={load}/>
        <Text style={{textAlign:'center'}}>{ErrorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0e1528"
  },
  main:{
    justifyContent: 'center',
    flex:1
  }
});
