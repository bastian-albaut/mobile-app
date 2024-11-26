import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, StyleSheet, TextInput, View, Text, Pressable, Button, Dimensions, TouchableOpacity } from 'react-native';
import { fetchAllBivouacData } from '@/common/api/bivouac/bivouacsApi';
import { RootState, AppDispatch } from '../../../common/store/store';
import { useTranslation } from 'react-i18next';
import BivouacItem from '../components/bivouacItem';
import Colors from "@/common/constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomIconButton from '@/common/components/customIconButton';
import { useRouter } from 'expo-router';


export default function SearchBivouacList() {
  const dispatch = useDispatch<AppDispatch>();

  // Accès aux données du Redux store
  const { data, status, error } = useSelector((state: RootState) => state.bivouacs);

  // Effet pour charger les données
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllBivouacData());
    }
  }, [status, dispatch]);

  console.log("data", data);

  // Fonctionnalité de recherche
  const [searchQuery, setSearchQuery] = useState('');
  const filteredBivouacs = data ? data.filter((bivouac) =>
    bivouac.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder={t('searchBivouacs:search_bar')}
            placeholderTextColor="black"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FontAwesome name="filter" size={24} color="black" />
        </View>
      </View>

      {/* Affichage des états de chargement ou d'erreur */}
      {status === 'loading' && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {/* Affichage de la liste des bivouacs */}
      {filteredBivouacs.length === 0 ? (
        <Text>No data</Text>
      ) : (
        <FlatList
          data={filteredBivouacs}
          renderItem={({ item }) => (
            item?.bivouacId ? <BivouacItem item={item} /> : null
          )}
          keyExtractor={(item) => item?.bivouacId.toString()}
          contentContainerStyle={styles.list}
        />
      )}

      {/* Bouton pour accéder à la carte */}
      <View style={styles.containerButton}>
        <CustomIconButton
          title={t('searchBivouacs:map_button')}
          iconName="map"
          onPress={() => router.push(`/searchBivouacs/screens/searchBivouacMap`)}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    color: Colors.black,
    flex: 1,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 20,
  },
  containerButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.green1,
    borderRadius: 10,
    paddingVertical: 15,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  mapButtonText: {
    color: Colors.white,
    fontSize: 18,
  }
});