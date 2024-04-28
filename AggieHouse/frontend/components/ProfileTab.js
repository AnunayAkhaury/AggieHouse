import React from 'react';
import { StatusBar, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';

const ProfileTab = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#E5E7EB' }}>
            <StatusBar style="auto" />
            <SafeAreaView style={{ flex: 1, position: 'relative' }}>
                <Image
                    source={require("/Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/Aggie House IMG.jpeg")}
                    style={{ position: 'absolute', top: 0, width: '100%', height: 160, opacity: 0.6 }}
                />

                <View style={{ width: '100%', height: '100%', zIndex: 50, paddingHorizontal: 16, justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={0.7} style={{ height: 48, width: 48, backgroundColor: '#D1D5DB', borderRadius: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', marginTop: 16 }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={{ marginTop: 64, alignItems: 'center' }}>
                        <Image
                            source={require("//Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/Aggie House IMG.jpeg")}
                            style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 4, borderColor: 'white' }}
                        />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>John Doe</Text>
                        <Text style={{ color: '#4B5563', marginTop: 8 }}>johndoe@example.com</Text>
                    </View>

                    <Button
                        title="Edit Profile"
                        buttonStyle={{ borderRadius: 8, paddingVertical: 12, backgroundColor: '#000', marginTop: 24 }}
                        titleStyle={{ color: '#FFF' }}
                    />

                    <Button
                        title="Change Password"
                        buttonStyle={{ borderRadius: 8, paddingVertical: 12, backgroundColor: '#E5E7EB', marginTop: 8 }}
                        titleStyle={{ color: '#000' }}
                    />

                    <Button
                        title="Settings"
                        buttonStyle={{ borderRadius: 8, paddingVertical: 12, backgroundColor: '#E5E7EB', marginTop: 8 }}
                        titleStyle={{ color: '#000' }}
                    />

                    <View style={{ marginBottom: 16 }} />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default ProfileTab;
