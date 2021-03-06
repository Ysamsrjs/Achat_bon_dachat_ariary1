//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import { Container, Header, Title, Content, Button, Icon, Left, Right, Body } from 'native-base';

import styles from './styles';

import FontIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import loginCss from '../../../assets/css/loginCss';
// create a component
class EditPhone extends Component {
	constructor() {
		super();
		this.state = {
			oldphone: '',
			newphone: '',
			password: '',
			loading: false
		};
	}
	render() {
		return (
			<Container style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" style={{ color: '#FFF' }} />
						</Button>
					</Left>
					<Body>
						<Title>Changer Tél</Title>
					</Body>
					<Right />
				</Header>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View
						style={{
							justifyContent: 'center',
							alignContent: 'center',
							backgroundColor: '#eee',
							padding: 15
						}}
					>
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View style={loginCss.imageLogin}>
								<MaterialIcon name="mode-edit" size={130} color="#00BF9A" />
							</View>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<MaterialIcon primary size={20} color="rgba(52, 152, 219,1.0)" name="call" />
							</View>
							<TextInput
								placeholder="Ancien Numero"
								keyboardType="numeric"
								style={loginCss.input}
								autoFocus={false}
								onChangeText={oldphone => this.setState({ oldphone })}
								returnKeyType="next"
							/>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<MaterialIcon primary size={20} color="rgba(52, 152, 219,1.0)" name="call" />
							</View>
							<TextInput
								placeholder="Nouveau Numero"
								keyboardType="phone-pad"
								style={loginCss.input}
								autoFocus={false}
								onChangeText={newphone => this.setState({ newphone })}
								returnKeyType="next"
							/>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Icon name="lock" size={20} color="#00BF9A" />
							</View>
							<TextInput
								placeholder="Mot de passe"
								secureTextEntry
								onChangeText={password => this.setState({ password })}
								style={loginCss.input}
								secureTextEntry={true}
							/>
						</View>
						<View style={loginCss.seperator} />
						<View style={{ alignItems: 'flex-end' }}>
							<Button success onPress={() => this._validate()} style={{ alignSelf: 'flex-end' }}>
								<Text style={{ color: '#ffffff', fontWeight: '800' }}>Valider</Text>
							</Button>
							<View style={{ flex: 1 }} />
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

// define your styles
const test = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50'
	}
});

//make this component available to the app
export default EditPhone;
