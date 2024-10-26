import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Button,TouchableOpacity,Image} from 'react-native';

export default function Home({ navigation}) {
  return (
    <View style={styles.home}>
      <Text style={styles.home_text_1}>A premium online store for sporter and their stylish choice</Text>
      <View style={{backgroundColor:'#E941411A' ,width:359,height:388,borderRadius:50,justifyContent:'center',alignItems:'center',marginTop:40}}>
        <Image source={require('./assets/bifour_-removebg-preview.png')} style={{width:292,height:270,}}/>
      </View>
      <Text style={styles.home_text_2}>POWER BIKE <br/>SHOP</Text>
      <TouchableOpacity style={styles.home_btn} onPress={() => navigation.navigate('Bike')}>
        <Text style={styles.home_btn_text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  home:{
    borderWidth:1,
    width:375,
    height:812,
    alignItems:'center'
  },
  home_text_1:{
    fontSize:26,
    lineHeight:26,
    fontWeight:400,
    width:351,
    textAlign:'center',
    marginTop:61,
    fontFamily:'VT323'
  },
  home_text_2:{
    fontSize:26,
    lineHeight:29.87,
    fontWeight:700,
    width:351,
    textAlign:'center',
    marginTop:25,
    fontFamily:'Ubuntu'
  },
  home_btn:{
    width:340,
    height:61,
    borderRadius:30,
    backgroundColor:'#E94141',
    marginTop:60,
    justifyContent:'center'
  },
  home_btn_text:{
    color:'#fff',
    fontSize:27,
    lineHeight:27,
    fontWeight:400,
    textAlign:'center',
  },
});