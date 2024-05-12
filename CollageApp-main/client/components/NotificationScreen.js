// NotificationScreen.js
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import GeneralNotificationScreen from "./GeneralNotificationScreen";
import TechnicalNotificationScreen from "./TechnicalNotificationScreen";
import NonTechnicalNotificationScreen from "./NonTechnicalNotificationScreen";

const Tab = createMaterialTopTabNavigator();
const [unreadGeneralNotifications, setUnreadGeneralNotifications] = useState(0);
const [unreadTechnicalNotifications, setUnreadTechnicalNotifications] = useState(0);
const [unreadNonTechnicalNotifications, setUnreadNonTechnicalNotifications] = useState(0);
export const totalUnreadNotifications = () => {
  return unreadGeneralNotifications + unreadTechnicalNotifications + unreadNonTechnicalNotifications;
};
function NotificationScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tab,
      }}
    >
      <Tab.Screen
        name="GeneralNotification"
        component={GeneralNotificationScreen}
        options={{
          tabBarLabel: "General",
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => navigation.navigate("GeneralNotification")}
            >
              <Text style={styles.tabText}>General</Text>
              {unreadGeneralNotifications > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{unreadGeneralNotifications}</Text>
                </View>
              )}
            </TouchableOpacity>
          ),
          initialParams: { setUnreadGeneralNotifications },
        }}
      />
      <Tab.Screen
        name="TechnicalNotification"
        component={TechnicalNotificationScreen}
        options={{
          tabBarLabel: "Technical",
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => navigation.navigate("TechnicalNotification")}
            >
              <Text style={styles.tabText}>Technical</Text>
              {unreadTechnicalNotifications > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{unreadGeneralNotifications}</Text>
                </View>
              )}
            </TouchableOpacity>
          ),
          initialParams: { setUnreadTechnicalNotifications },
        }}
      />
      <Tab.Screen
        name="NonTechnicalNotification"
        component={NonTechnicalNotificationScreen}
        options={{
          tabBarLabel: "Non-Technical",
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => navigation.navigate("NonTechnicalNotification")}
            >
              <Text style={styles.tabText}>Non-Technical</Text>
              {unreadNonTechnicalNotifications > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{unreadGeneralNotifications}</Text>
                </View>
              )}
            </TouchableOpacity>
          ),
          initialParams: { setUnreadNonTechnicalNotifications },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "red",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#000000",
    fontWeight: "bold",
  },
  badgeContainer: {
    position: absolute,
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 2,
    paddingHorizontal: 4,
  },
  
  badgeText: {
    fontSize: 12,
    color: 'white',
  },
});

export default NotificationScreen;
