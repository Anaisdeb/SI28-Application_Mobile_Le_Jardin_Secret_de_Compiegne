import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity, imageStyle } from "react-native";
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_700Bold } from '@expo-google-fonts/arima-madurai';
import AppLoading from 'expo-app-loading';

export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
	return (
		<View style={styles.container}>
			<ImageBackground
					  source={require('./assets/Photofin_anais.png')}
					  style={{height: "100%", 
							 //backgroundColor: '#1E5F4B',
							  }}
					  //imageStyle={{opacity: 0.5}}
					> 
				<View
					style={{
						flex: 1,
						justifyContent: "flex-start",
					}}
					>
					<TouchableOpacity onPress={() => navigation.navigate('35')}>
						<Text style={{	
							fontSize: 38,
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: 50,
							textAlign: 'center',
							color: "#1E5F4B",
							paddingVertical: 69,
							paddingLeft: 115,
						}}> 
						<Text style={{ fontFamily: 'ArimaMadurai_700Bold'}}> Anaïs Debureaux </Text>
						<Text style={{ fontFamily: 'ArimaMadurai_400Regular'}}> GI01 </Text>
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E5F4B",
    alignItems: "center",
    justifyContent: "center",
  },
});