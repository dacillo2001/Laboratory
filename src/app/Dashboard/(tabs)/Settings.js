import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Switch, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useRouter } from 'expo-router'; 


const Avatar = ({ isDarkMode, toggleSwitch }) => { 
  const router = useRouter();
  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { 
        text: "OK", 
        onPress: () => {
          console.log("Signed out");
          router.push('/'); 
        } 
      },
    ]);
  };

  return (
    <View style={[styles.containers, isDarkMode && styles.darkContainer]}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/nicole.jpg')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Nicole Dacillo</Text> 
          <Text style={[styles.statusText, isDarkMode ? styles.darkStatusText : styles.lightStatusText]}>
            Joined a long long time ago
          </Text>
        </View>
      </View>


 <View style={[styles.container, isDarkMode && styles.darkContainer]}>
 <View style={styles.section}>
   <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
   <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
     <Icon name="person" size={24} color={isDarkMode ? "white" : "gray"} />
     <Text style={[styles.item, isDarkMode && styles.darkText]}>Accounts</Text>
     <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
   </TouchableOpacity>
 </View>

 <View style={styles.section}>
   <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
     <Icon name="key" size={24} color={isDarkMode ? "white" : "gray"} />
     <Text style={[styles.item, isDarkMode && styles.darkText]}>Passwords</Text>
     <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
   </TouchableOpacity>
 </View>

 <View style={styles.section}>
   <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
     <Icon name="moon" size={24} color={isDarkMode ? "white" : "gray"} />
     <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
     <Switch
       trackColor={{ false: "#767577", true: "#81C784" }}
       thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
       onValueChange={toggleSwitch}
       value={isDarkMode}
     />
     
   </View>
   <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkSignOutButton]} onPress={handleSignOut}>
        <Text style={[styles.signOutText, isDarkMode && styles.darkSignOutText]} onPress={() => router.replace('/')}> Log Out</Text>
      </TouchableOpacity>
    </View>
 </View>
 </View>

);
};

const styles = StyleSheet.create({
  containers: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    width: '100%',
    height: 250, 
    marginBottom: 20,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: 'white', 
  },
 
  content: {
    flexDirection: 'column', 
    alignItems: 'center',
    left: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderColor: '#E0E0E0',  
    borderWidth: 2,
    marginBottom: -10, 
    left: 20,

  },
  joinedContainer: {
    justifyContent: 'center', 
    padding: 10,  
    borderRadius: 10,  
    maxWidth: '100%', 
    alignItems: 'center',
    left: 20,

  },
  nameText: {
    fontSize: 18,  
    fontWeight: 'bold',
    color: 'gray',  
    marginBottom: 5,
  },
  darkText: {
    color: 'black',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },

  container: {
    flex: 1, 
    justifyContent: 'center',
    width: '100%',
    height: 250, 
    marginBottom: -100,
    padding: 20,
    paddingBottom: 100,

    
  },
  darkContainer: {
    backgroundColor: '#1C1C1E', 
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
    paddingBottom: 150,
  },
  
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15, 
  },
  lightRow: {
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  darkRow: {
    backgroundColor: '#2C2C2E',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 5, 
    color: '#000',
  },
  darkText: {
    color: '#FFFFFF',
  },
  item: {
    fontSize: 16,
    color: '#263238',
    flex: 1,
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  darkSignOutButton: {
    backgroundColor: '#000',
    borderColor: 'white',
  },
  signOutText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  darkSignOutText: {
    color: 'white',
  },
});


export default Avatar;