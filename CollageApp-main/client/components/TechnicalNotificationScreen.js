//TechnicalNotification.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TechnicalNotificationScreen = ({ setUnreadTechnicalNotifications }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>General Notifications</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Notification 1</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Notification 2</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Notification 3</Text>
      </View>
      <TouchableOpacity onPress={() => setUnreadTechnicalNotifications(0)} style={styles.markAsReadButton}>
        <Text style={styles.markAsReadText}>Mark as read</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notification: {
    backgroundColor: "#EAEAEA",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
  },
  markAsReadButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  markAsReadText: {
    color: "white",
    fontSize: 16,
  },
});

export default TechnicalNotificationScreen;
