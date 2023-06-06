import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nubooks</Text>
            <Icon style={styles.icon}
                name='user'
                type='font-awesome'
                size={30}

                color='#764b36'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#efe7dd'

    },

    title: {
        marginTop: 30,

        color: '#764b36',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight: 20,
        fontFamily: 'primary'

    },

    icon: {
        paddingTop: 35,
    }
});

export default Header;