import React from 'react';
import styled from 'styled-components';
import CStatusBar from '../components/CStatusBar';
import CustomButton from '../components/CustomButton';
import Tips from '../components/Tips';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeader';
import * as helpers from '../Helpers';
import {ScrollView} from 'react-native';
import {Alert} from 'react-native';


import { Notifications } from 'expo';

//var RNFS = require('react-native-fs');

export default class CustomersScreen extends React.Component { 
   constructor(props) {
    super(props);
    this.state = { text: '', loading: false,dataSource: []};		 
  }

   static navigationOptions = {
	   headerTitle: () => <AppHeader title="Customers"/>,
	   headerRight: () => <AppHeaderButton title="+  " onPress={() => {Alert.alert('Add a new customer')}}/>
	  };

  render() {
	  let navv = this.props.navigation;
    return (
	        <Container>
			  <ScrollView>		     
				  <Tips/>
                  <SearchInput
				    placeholder="Type customer name"
				    onChangeText={text => {
						console.log(`Current text: ${text}`);
					}}
                  />
				  
				  <Row>
				    <CustomerName>
				      <Logo source={require('../assets/images/pic-11.jpg')}/>
					  <CustomerBio>
					    <Name>Tobi Kudayisi</Name>
					    <Email>kudayisitobi@gmail.com</Email>
					    <Phone>Phone: 07054291601</Phone>
					  </CustomerBio>
                    </CustomerName>				  
				    <CustomerInfo>
				      <PriceView>
					    <Price>Debit</Price>
					  </PriceView>
					  <StockView>
					    <Stock>Something</Stock>
					  </StockView>
				    </CustomerInfo>
				   </Row>
				  
                  <TestButton
				  onPress={() => navv.navigate('AddCustomer')}
				  title="Add a new customer"
				  />				  
			  </ScrollView>
			</Container>
    );
  }
  
}

const Container = styled.View`
                     flex: 1;
					 background-color: #fff;
					 justify-content: center;
					 align-items: center;
`;
					 
const SearchInput = styled.TextInput`
					 align-items: center;
					 border: 1px solid #bcbcbc;
					 border-radius: 5;
					 margin-top: 10px;
`;

const Logo = styled.Image`
           width: 55px;
		   height: 55px;
		   background: black;
		   border-radius: 30px;
		   margin-left: 2px;
		   margin-bottom: 8px;
`;

const Row = styled.View`
   marginVertical: 20px;
   width: 100%;
   border-bottom-width: 1;
   border-bottom-color: #000;
   flex-direction: row;
`;

const CustomerName = styled.View`
   margin-left: 4px;
   margin-right: 5px;
   border-right-width: 1;
   border-right-color: #000;
   width: 70%;
   flex-direction: row;
`;
const CustomerBio = styled.View`
  
`;
const CustomerInfo = styled.View`
   width: 30%;
`;

const Name = styled.Text`
  font-size: 15;
  font-weight: 300;
  margin-left: 6px;
  margin-top: 10px;
  align-items: center;
`;

const Email = styled.Text`
  font-size: 12;
  color: blue;
  font-weight: 300;
  margin-left: 6px;
  margin-top: 10px;
  align-items: center;
`;

const Phone = styled.Text`
  font-size: 12;
  font-weight: 300;
  margin-left: 6px;
  margin-top: 10px;
  align-items: center;
`;

const PriceView = styled.View`
   width: 100%;
   border-bottom-width: 1;
   border-bottom-color: #ccc;
`;

const StockView = styled.View`
   width: 100%;
`;

const Price = styled.Text`
  font-size: 15;
  font-weight: 300;
  margin-horizontal: 5px;
  margin-vertical: 10px;
  align-items: center;
`;

const Stock = styled.Text`
  font-size: 15;
  font-weight: 300;
  margin-horizontal: 5px;
  margin-vertical: 10px;
  align-items: center;
`;

const TestButton = styled.Button`
  background-color: blue;
  color: #fff;
  border-radius: 5;
`;
