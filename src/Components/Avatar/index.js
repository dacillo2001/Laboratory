import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Avatar = ({ isDarkMode }) => { 
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="ellipsis-vertical" size={24} color={isDarkMode ? "white" : "black"} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          source={require('../../assets/nicole.jpg')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Nicole Dacillo</Text> 
          <Text style={[styles.statusText, isDarkMode ? styles.darkStatusText : styles.lightStatusText]}>
            Joined a long long time ago
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    width: '100%',
    height: 250, 
    marginBottom: -10,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: 'black', 
  },
  menuButton: {
    alignSelf: 'flex-end',
    marginBottom: 10, 
  },
  content: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderColor: '#E0E0E0',  
    borderWidth: 2,
    marginBottom: 10, 
  },
  joinedContainer: {
    justifyContent: 'center', 
    padding: 10,  
    borderRadius: 10,  
    maxWidth: '80%', 
  },
  nameText: {
    fontSize: 18,  
    fontWeight: 'bold',
    color: 'black',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
    marginBottom: 3,  
  },
  darkText: {
    color: 'white',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',  
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
  },
  darkStatusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
  },
});

export default Avatar;