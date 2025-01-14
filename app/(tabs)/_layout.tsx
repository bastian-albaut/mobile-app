import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/common/constants/Colors';
import { useTranslation } from 'react-i18next';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  focused: boolean
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} color={props.focused ? Colors.green1 : Colors.green3} {...props} />;
}


export default function TabLayout() {
  
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.green1,
        tabBarStyle: { backgroundColor: Colors.black },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="favoritePage"
        options={{
          title: t('common:tab_favorite_page'),
          tabBarIcon: ({ focused }) => <TabBarIcon name="heart" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="bivouacHostPage"
        // name="addBivouacPage"
        options={{
          title: t('common:bivouac_host_page'),
          tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="searchBivouacList"
        options={{
          title: t('common:tab_search_page'),
          tabBarIcon: ({ focused }) => <TabBarIcon name="search" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profilePage"
        options={{
          title: t('common:tab_profile_page'),
          tabBarIcon: ({ focused }) => <TabBarIcon name="user-circle" focused={focused} />,
        }}
      />
    </Tabs>
  );
}