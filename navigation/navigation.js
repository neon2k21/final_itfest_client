import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import ReportScreen from '../screens/ReportScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const Main_Stack = createNativeStackNavigator()
const Report_Stack = createNativeStackNavigator()
const Profile_Stack = createNativeStackNavigator()


function Main_StackNavigator(){
  return(
    <Main_Stack.Navigator>
      <Main_Stack.Screen name="уу" options={{headerShown: false}} component={MainScreen} />
    </Main_Stack.Navigator>
  )

}

function Report_StackNavigator(){
  return(
    <Report_Stack.Navigator>
      <Report_Stack.Screen name="уу" options={{headerShown: false}} component={ReportScreen} />
    </Report_Stack.Navigator>
  )

}

function Profile_StackNavigator(){
  return(
    <Profile_Stack.Navigator>
      <Profile_Stack.Screen name="уу" options={{headerShown: false}} component={ProfileScreen} />
    </Profile_Stack.Navigator>
  )
}


function Tab_StackNavigator(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Дневник') {
            iconName = focused ? 'book' : 'book-outline'; // Иконка для списка задач
          } else if (route.name === 'Отчеты') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline'; // Иконка для диаграмм
          }
          else if (route.name === 'Профиль') {
            iconName = focused ? 'person' : 'person-outline'; // Иконка для диаграмм
          }

          // Возвращаем компонент Ionicons с указанной иконкой
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >

      <Tab.Screen name="Дневник" options={{headerShown: false}} component = {Main_StackNavigator}   />
      <Tab.Screen name="Отчеты" options={{headerShown: false}}  component = {Report_StackNavigator} />
      <Tab.Screen name="Профиль" options={{headerShown: false}} component = {Profile_StackNavigator}/>

    </Tab.Navigator>
  )
}




// function Login_StackNavigator(){
//     return(
//     <Login_Stack.Navigator>
//       <Login_Stack.Screen name="Главный экран" options={{headerShown: false}} component={Tab_StackNavigator}/>
//     </Login_Stack.Navigator>
//   )
// }


export default function AppNavigation(){
    return(
        <NavigationContainer>
           <Tab_StackNavigator/>
        </NavigationContainer>
    )
}