import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Button,TouchableOpacity,Image} from 'react-native';
import React,{useState,useEffect} from 'react';
export default function Bike({ navigation}) {
  
  const [data,setData] = useState([
    {
      id: 1,
      name: 'Pinarello',
      price: '$1800',
      type: 'Roadbike',
      image: require('./assets/bifour_-removebg-preview.png'),
    },
    {
      id: 2,
      name: 'Pina Mountain',
      price: '$1700',
      type: 'Mountain',
      image: require('./assets/bione-removebg-preview.png'),
    },
    {
      id: 3,
      name: 'Pina Bike',
      price: '$1800',
      type: 'Roadbike',
      image: require('./assets/bithree_removebg-preview.png'),
    },
    {
      id: 4,
      name: 'Pinarello',
      price: '$1900',
      type: 'Roadbike',
      image: require('./assets/bitwo-removebg-preview.png'),
    },
    {
      id: 5,
      name: 'Pinarello',
      price: '$1500',
      type: 'Roadbike',
      image: require('./assets/bithree_removebg-preview.png'),
    },
    {
      id: 6,
      name: 'Pinarello',
      price: '$1500',
      type: 'Mountain',
      image: require('./assets/bione-removebg-preview.png'),
    },
  ]);

  const [typeBike, setTypeBike] = useState([
    { id: 1, name: 'All', isSelected: true },
    { id: 2, name: 'Roadbike', isSelected: false },
    { id: 3, name: 'Mountain', isSelected: false },
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const filterBikes = (type) => {
    if (type === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(bike => bike.type === type));
    }

    setTypeBike(typeBike.map(bikeType => ({
      ...bikeType,
      isSelected: bikeType.name === type,
    })));
  };

  const Item = ({ item, onEdit, onDelete }) => (
    <TouchableOpacity style={styles.bikelist_item} onPress={() => navigation.navigate('Detail', { product: item })}>
      <Image source={item.image} style={styles.item_img}/>
      <Text style={styles.item_name}>{item.name}</Text>
      <Text style={styles.item_price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.bikelist}>
      <Text style={styles.bike_text_1}>The world’s Best Bike</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
        {typeBike.map((bikeType) => (
          <TouchableOpacity 
            key={bikeType.id}
            style={styles.bike_btn_1}
            onPress={() => filterBikes(bikeType.name)}
            >
            <Text style={[styles.bike_btn_text_2, bikeType.isSelected && styles.bike_btn_text_1]}>{bikeType.name}</Text>
          </TouchableOpacity>
        ))};
      </View>
      <FlatList style={{alignItems:'center', marginTop:15}}
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => (<Item item = {item}/>)}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bikelist:{
    borderWidth:1,
    width:375,
    height:812,
  },
  bike_text_1:{
    fontSize:25,
    lineHeight:28.73,
    fontWeight:700,
    width:255,
    height:29,
    textAlign:'center',
    marginTop:47,
    fontFamily:'Ubuntu',
    color:'#E94141',
    marginLeft:15
  },
  row:{
    flexDirection:'row'
  },
  bike_btn_1:{
    width:99,
    height:32,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#E9414187',
    borderWidth:1,
    borderRadius:5
  },
  bike_btn_text_1:{
    color:'#E94141',
    fontSize:20,
    fontWeight:400,
    lineHeight:24.91,
    fontFamily:'Voltaire'
  },
  bike_btn_text_2:{
    color:'#BEB6B6',
    fontSize:20,
    fontWeight:400,
    lineHeight:24.91,
    fontFamily:'Voltaire'
  },
  bikelist_item:{
    width:167,
    height:200,
    backgroundColor:'#F7BA8326',
    borderRadius:15,
    margin:5,
    alignItems:'center'
  },
  item_img:{
    width:135,
    height:127,
    margin:7
  },item_name:{
    fontSize:20,
    fontWeight:400,
    opacity:0.6
  },
  item_price:{
    fontSize:20,
    fontWeight:400,
  }
});