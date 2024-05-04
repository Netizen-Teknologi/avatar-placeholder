import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView } from 'react-native';
import { avatarRandom, avatarByName, avatarByInitial, avatarRandomByGender } from '@netizen-teknologi/avatar-placeholder';
export default function App() {
  const [avatarUri, setAvatarUri] = useState(null);
  const [avatarGenderUri, setAvatarGenderUri] = useState(null);
  const [avatarBasedNameUri, setAvatarBasedNameUri] = useState(null);
  const [avatarInitialUri, setAvatarInitialUri] = useState(null);

  useEffect(() => {
    callAvatarRandom(); 
    callAvatarRandomByGender('girl'); 
    callAvatarByName('Joan');
    callAvatarByInitial('Rinaldy Ramadhan');
  }, []);


  async function callAvatarRandom() {
    try {
      const uri = await avatarRandom();
      setAvatarUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function callAvatarRandomByGender(gender) {
    try {
      const uri = await avatarRandomByGender(gender);
      setAvatarGenderUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function callAvatarByName(name) {
    if ( !name ) {
        console.log('avatarByName, please fill the name');
        return false;
    }

    try {
      const uri = await avatarByName(name);
      setAvatarBasedNameUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function callAvatarByInitial(name) {
    if ( !name ) {
        console.log('avatarByInitial, please fill the name');
        return false;
    }

    try {
      const uri = await avatarByInitial(name);
      setAvatarInitialUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a change avatar.
        </Text>

        <View style={styles.avatarContainer }>
          <Text style={styles.title}>Random Avatar</Text>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>

        <View style={styles.avatarContainer }>
          <Text style={styles.title}>Random Avatar By Gender</Text>
          {avatarGenderUri ? (
            <Image source={{ uri: avatarGenderUri }} style={styles.avatar} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>

        <View style={styles.avatarContainer }>
          <Text style={styles.title}>Avatar Based By Name</Text>
          {avatarBasedNameUri ? (
            <Image source={{ uri: avatarBasedNameUri }} style={styles.avatar} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>

        <View style={[styles.avatarContainer, { marginBottom: 30}] }>
          <Text style={styles.title}>Avatar Based By Initial Name</Text>
          {avatarInitialUri ? (
            <Image source={{ uri: avatarInitialUri }} style={styles.avatar} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
});
