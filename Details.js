import React from 'react';
import { StatusBar, Button, ScrollView, View, Text } from 'react-native';
import BodyChart from './BodyChart';

class Details extends React.Component {  

  static navigationOptions = ({ navigation }) => {
    item = navigation.getParam('itemId', 'Details Screen')
    return {
      title: item.name+" Body"
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    // navigation.setParams({ title: itemId.name })

    return (
      <ScrollView>
          {/*
           <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar
              backgroundColor="#4eb4fb"
              barStyle="light-content"
            />
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
              title="Go to Details... again and again"
              onPress={() =>
                this.props.navigation.push('Details', {
                  itemId: Math.floor(Math.random() * 100),
                })}
            />
          </View>
          */}
          <View>
            <StatusBar
              backgroundColor="#4eb4fb"
              barStyle="light-content"
            />
            <BodyChart />
            <BodyChart />
            <BodyChart />
            <BodyChart />
          </View>
      </ScrollView>
    );
  }
}

export default Details;