import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Login')
    }
    const handleSignup = () => {
        navigation.navigate('Signup')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Image source={require('../assets/man.png')} style={styles.bannerImage} />
            <Text style={styles.title}> Login Signup App</Text>
            <Text style={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: colors.primary },
                    ]} onPress={handleLogin}

                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.loginButtonWrapper]} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    logo: {
        width: 140,
        height: 40,
        marginVertical: 20
    },
    bannerImage: {
        marginVertical: 20,
        height: 250,
        width: 231
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.primary,

    },
    subTitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        width: "65%",
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
})