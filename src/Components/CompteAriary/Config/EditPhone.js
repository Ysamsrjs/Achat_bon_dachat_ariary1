//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet } from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from "native-base";

import styles from "./styles";
// create a component
class EditPhone extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color:"#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Changer numero Tél</Title>
                    </Body>
                    <Right>
                        <Button transparent><Icon name="help" /></Button>
                        <Button transparent><Icon name="more" /></Button>
                    </Right>
                </Header>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default EditPhone;
