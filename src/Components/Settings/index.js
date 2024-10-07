import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsCard = ({ isDarkMode, toggleSwitch }) => {

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("Signed out") }
    ]);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.section}>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="person-circle-outline" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>My Accounts</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
  <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
    <Icon name="key" size={24} color={isDarkMode ? "white" : "gray"} />  
    <Text style={[styles.item, isDarkMode && styles.darkText]}>Security</Text>
    <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
  </TouchableOpacity>
</View>

      

      <View style={styles.section}>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="notifications-outline" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
        <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="moon-outline" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81C784" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkSignOutButton]} onPress={handleSignOut}>
        <Text style={[styles.signOutText, isDarkMode && styles.darkSignOutText]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#F7F7F7', 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
    marginBottom: -10,
    
  },
  darkContainer: {
    backgroundColor: '#1C1C1E',
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    
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
    marginBottom: 10,
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
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
  },

  darkSignOutButton: {
    backgroundColor:'#000',
    borderColor: 'white', 

  },
  signOutText: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },

  darkSignOutText: {
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
  },
});

export default SettingsCard;