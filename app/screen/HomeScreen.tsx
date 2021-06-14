import React, { useLayoutEffect } from 'react';
import { FlatList, ImageBackground, KeyboardAvoidingView, Platform, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Image} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Images } from '../tool';
import { Container, TextInput } from './component';

const HeaderLeft = () => {
  return (
    <View>
      <Text>Hi, Sreysros</Text>
    </View>
  )
}

const HeaderRight = () => {
  return (
    <View>
      <Image source={Images.notification} />
    </View>
  )
}

const HomeScreen = (props : any) => {
 const plantList = [
   {
     type: 'Indoor',
     data: [
       {
         title: 'San Seveira', price: 10,
         background: Images.product1
        }
     ]
   },
   {
     type: 'Indoor',
     data: [
       {
title: 'Philodendron',
     price: 16,
     background: Images.product2
       }
     ]
   },
   {
     
     type: 'Indoor',
     data: [
       {
         title: 'Philodendron',
 price: 16,
     background: Images.product2
       }
     ]
   },
 ]
  // const renderCitiesItem = ({ item }: any) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       style={styles.itemContainer}
  //       onPress={() => this.props.navigation.navigate('MyTrip')}
  //     >
  //       <ImageBackground borderRadius={10} source={item.background} style={styles.imageBackground} />
  //       <ListItem
  //         title={item.title}
  //         subtitle={item.subtitle}
  //         titleStyle={styles.titleListStyle}
  //         subtitleStyle={styles.subtitleListStyle}
  //         containerStyle={styles.itemListContainer}
  //       />
  //     </TouchableOpacity>
  //   );
  // }

  const renderPlantItem = ({item}) => {
    return (
      <TouchableOpacity style={{width: 190, height: 280}}>
        <ImageBackground source={Images.productBg} style={{ width: 190, height: 280 }}>
          <View>
          <Image source={item.background} style={{alignSelf: 'center', marginTop: 20}} />
          <Text>{item.type}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>{item.title}</Text>
            <TouchableOpacity><Text>{item.price}</Text></TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        
      </TouchableOpacity>
    )
  }
  return (
    <Container isSafeAreaView={true} style={{backgroundColor: '#f7f7f7', flex: 1}} >
      <View style={{paddingVertical: 20 , paddingHorizontal: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignContent:'center' }}>
          <TextInput
        inputContainerStyle={{
          backgroundColor: 'transparent',
          // borderTopColor: 'transparent',
          borderColor: '#BCBCBC',
          borderWidth: 1,
          borderRadius: 30,
          // borderBottomWidth: 0,
          marginBottom: 'auto',
          width: 274,
          height: 48}}
        placeholder={'Search Plant'}
        leftIcon={
          <Image source={Images.search} style={{marginHorizontal: 10}} />
        }
        rightIcon={
          <Image source={Images.microphone} style={{ marginHorizontal: 10 }} />
        }
        onChangeText={() => {}}
        // setRef={setRef}
        autoFocus={true}
        returnKeyType="search"
        autoCorrect={false}
        // onSubmitEditing={() => onSubmit()}
      />
          <TouchableOpacity style={{ width: 36, height: 36, marginTop: 4, borderRadius: 10, backgroundColor: '#44ACA0' ,justifyContent: 'center' ,alignContent: 'center'}}>
        <Image source={Images.filter} style={{alignSelf:'center'}} />
        
      </TouchableOpacity>
        </View>
        
 </View>
        <View>
          {/* <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any, index: number) => 'key' + index}
            horizontal={true}
            data={plantList}
            renderItem={renderPlantItem}
            style={styles.countryFlatList}
          /> */}

        <SectionList
          sections={plantList}
          keyExtractor={(item, index) => item + index}
          renderItem={renderPlantItem}
          renderSectionHeader={({ section: { type } }) => (
            <Text style={styles.header}>{type}</Text>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
     
    </Container>
  );
};

const styles = StyleSheet.create({
  countryFlatList: {
    padding: 8
  },
  itemContainer: {
    marginHorizontal: 8
  },
  imageBackground: {
    width: 190,
    height: 280,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 24
  },
  header: {
    paddingTop: 10,
    fontSize: 13,
    color: '#C7C7C7',
  },
});


export default HomeScreen;
