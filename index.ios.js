/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TForm from 'tcomb-form-native';

class OpsieMessage extends Component {

    render() {
        const Form = TForm.form.Form;
        const Person = TForm.struct({
            name: TForm.String,              // a required string
            surname: TForm.maybe(TForm.String),  // an optional string
            age: TForm.Number,               // a required number
            rememberMe: TForm.Boolean        // a boolean
        });
        const options = {};
        return (
            <View style={styles.container}>
                <Form ref="form" type={Person} options={options} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('OpsieMessage', () => OpsieMessage);
