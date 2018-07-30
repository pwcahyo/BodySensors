import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, Text, Image, ScrollView, View, ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Dashboard extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		      names: [
		         {
		            id: 0,
		            name: 'Ben',
		            picture: {
		              large: "https://randomuser.me/api/portraits/men/4.jpg",
		              medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
		              thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg"
		            },
		         },
		         {
		            id: 1,
		            name: 'Susan',
		            picture: {
		              large: "https://randomuser.me/api/portraits/men/4.jpg",
		              medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
		              thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg"
		            },
		         },
		         {
		            id: 2,
		            name: 'Robert',
		            picture: {
		              large: "https://randomuser.me/api/portraits/men/4.jpg",
		              medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
		              thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg"
		            },
		         },
		         {
		            id: 3,
		            name: 'Mary',
		            picture: {
		              large: "https://randomuser.me/api/portraits/men/4.jpg",
		              medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
		              thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg"
		            },
		         }
		      ]
		   }
	}

    ListViewItemSeparatorLine = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

	OpenSecondActivity (rowData){
	   this.props.navigation.navigate('DetailsScreen', { ListViewClickItemHolder: rowData });
	}

	render(){
	    return(
	    	<ScrollView>
	    		<StatusBar
					backgroundColor="#4eb4fb"
					barStyle="light-content"
				/>
	    		<Text style={{ fontWeight: '300', fontFamily: 'Gidole', fontSize:23, textAlign:'center', marginTop:20, marginBottom:20, color:'#2aa5fb'}}>Daftar Pasien</Text>
	    		<View style = { styles.MainContainer }>
	    		{
		             this.state.names.map((item, index) => (
		                <TouchableOpacity
		                   key = {item.id}
		                   style = {styles.container}
		                   onPress={() => { 
		                          this.props.navigation.navigate('DetailsScreen', {
		                          itemId: item,
		                          otherParam: 'anything you want here',
		                        });
		                    }}>
		                   <Image source={{ uri: item.picture.large}} style={styles.photo} />
		                   <Text style = {styles.text}>
		                      {item.name}
		                   </Text>

		                </TouchableOpacity>
		             ))
		          }
	       		</View>
	    	</ScrollView>
	    );
  	}
}

export default Dashboard;

const styles = StyleSheet.create ({
  container: {
    marginTop: 3,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle:'dashed',
    borderBottomWidth:1,
    borderColor:'#b5b9bc',
    padding:12
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
   photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#b5b9bc'
  },
})