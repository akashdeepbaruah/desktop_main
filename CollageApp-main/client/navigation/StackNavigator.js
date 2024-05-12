// StackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../pages/General/LoginPage";
import SignupPage from "../pages/General/SignupPage";
import OTPVerificationPage from "../pages/General/OTPVerificationPage";
import StudentHomePage from "../pages/Student/StudentHomePage";
import TeacherHomePage from "../pages/Teacher/TeacherHomePage";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import MasterAdminHomePage from "../pages/MasterAdmin/MasterAdminHomePage";
// import HomeNavigator from "../navigation/HomeNavigator";
import ForgotPasswordPage from "../pages/General/ForgotPasswordPage";
// import DrawerNavigator from "../navigation/DrawerNavigator";
import NotificationScreen from "../components/NotificationScreen";
import GeneralNotificationScreen from "../components/GeneralNotificationScreen";
import TechnicalNotificationScreen from "../components/TechnicalNotificationScreen";
import NonTechnicalNotificationScreen from "../components/NonTechnicalNotificationScreen";
import MAdminDataBaseCreation from "../features/MasterAdminFeatures/MAdminDataBaseCreation";
import MAdminCalendarCreation from "../features/MasterAdminFeatures/MAdminCalendarCreation";
import MAdminERPLink from "../features/MasterAdminFeatures/MAdminERPLink";
import MAdminMonitoring from "../features/MasterAdminFeatures/MAdminMonitoring";
import MAdminOnlineLibrary from "../features/MasterAdminFeatures/MAdminOnlineLibrary";
import MAdminRegistrationApproval from "../features/MasterAdminFeatures/MAdminRegistrationApproval";
import MAdminReports from "../features/MasterAdminFeatures/MAdminReports";
import MACustomization from "../features/MasterAdminFeatures/MACustomization";
import MAdminCreationScreen from "../features/MasterAdminFeatures/MAdminCreationScreen";
import MAdminViewScreen from "../features/MasterAdminFeatures/MAdminViewScreen";

import StudentApprovalScreen from "../features/MasterAdminFeatures/StudentApprovalScreen";
import TeacherApprovalScreen from "../features/MasterAdminFeatures/TeacherApprovalScreen";
import AdminApprovalScreen from "../features/MasterAdminFeatures/AdminApprovalScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignupPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentHome"
        component={StudentHomePage}
        options={{ title: "Student Home", headerShown: true }}
      />
      <Stack.Screen
        name="TeacherHome"
        component={TeacherHomePage}
        options={{ title: "Teacher Home", headerShown: true }}
      />
      <Stack.Screen
        name="AdminHome"
        component={AdminHomePage}
        options={{ title: "Admin Home", headerShown: true }}
      />
      <Stack.Screen
        name="MasterAdminHome"
        component={MasterAdminHomePage}
        options={{ title: "Master Admin Home", headerShown: true }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordPage}
        options={{ title: "Master Admin Home", headerShown: true }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: "Notification", headerShown: false }}
      />
      <Stack.Screen
        name="GeneralNotification"
        component={GeneralNotificationScreen}
        options={{ title: "General Notification", headerShown: false }}
      />
      <Stack.Screen
        name="TechnicalNotification"
        component={TechnicalNotificationScreen}
        options={{ title: "Technical Notification", headerShown: false }}
      />
      <Stack.Screen
        name="NonTechnicalNotification"
        component={NonTechnicalNotificationScreen}
        options={{ title: "Non-Technical Notification", headerShown: false }}
      />
      <Stack.Screen
        name="DataBaseCreation"
        component={MAdminDataBaseCreation}
        options={{ title: "Database Creation", headerShown: false }}
      />
      <Stack.Screen
        name="CalendarCreation"
        component={MAdminCalendarCreation}
        options={{ title: "Calendar Creation", headerShown: false }}
      />
      <Stack.Screen
        name="ERPLink"
        component={MAdminERPLink}
        options={{ title: "ERP Link", headerShown: false }}
      />
      <Stack.Screen
        name="Monitoring"
        component={MAdminMonitoring}
        options={{ title: "Monitoring", headerShown: false }}
      />
      <Stack.Screen
        name="OnlineLibrary"
        component={MAdminOnlineLibrary}
        options={{ title: "Online Library", headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationApproval"
        component={MAdminRegistrationApproval}
        options={{ title: "Registration Approval", headerShown: true }}
      />
      <Stack.Screen
        name="StudentApproval"
        component={StudentApprovalScreen}
        options={{ title: "Student Approval Screen", headerShown: true }}
      />
      <Stack.Screen
        name="TeacherApproval"
        component={TeacherApprovalScreen}
        options={{ title: "Teacher Approval Screen", headerShown: true }}
      />
      <Stack.Screen
        name="AdminApproval"
        component={AdminApprovalScreen}
        options={{ title: "Admin Approval Screen", headerShown: true }}
      />
      <Stack.Screen
        name="MasterReports"
        component={MAdminReports}
        options={{ title: "Master Reports", headerShown: false }}
      />
      <Stack.Screen
        name="Customization"
        component={MACustomization}
        options={{ title: "Customization", headerShown: false }}
      />
      <Stack.Screen
        name="CreationScreen"
        component={MAdminCreationScreen}
        options={{ title: "Creation Screen", headerShown: false }}
      />
      <Stack.Screen
        name="ViewScreen"
        component={MAdminViewScreen}
        options={{ title: "View Screen", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

{
  /* <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{ headerShown: false }}
        /> */
}
{
  /* <Stack.Screen
          name="DrawerNavigator" // Use a new screen to render the DrawerNavigator
          component={DrawerNavigator}
          options={{ headerShown: false }}
        /> */
}
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import LoginPage from "../pages/General/LoginPage";
// import SignupPage from "../pages/General/SignupPage";
// import OTPVerificationPage from "../pages/General/OTPVerificationPage";
// import StudentHomePage from "../pages/Student/StudentHomePage";
// import TeacherHomePage from "../pages/Teacher/TeacherHomePage";
// import AdminHomePage from "../pages/Admin/AdminHomePage";
// import MasterAdminHomePage from "../pages/MasterAdmin/MasterAdminHomePage";
// import HomeNavigator from "./HomeNavigator";
// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginPage}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={SignupPage}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="OTPVerification"
//           component={OTPVerificationPage}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="StudentHome"
//           component={StudentHomePage}
//           options={{ title: "Student Home", headerShown: false }}
//         />
//         <Stack.Screen
//           name="TeacherHome"
//           component={TeacherHomePage}
//           options={{ title: "Teacher Home", headerShown: false }}
//         />
//         <Stack.Screen
//           name="AdminHome"
//           component={AdminHomePage}
//           options={{ title: "Admin Home", headerShown: false }}
//         />
//         <Stack.Screen
//           name="MasterAdminHome"
//           component={MasterAdminHomePage}
//           options={{ title: "Master Admin Home", headerShown: false }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigator;
