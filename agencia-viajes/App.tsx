import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { destinations } from "./TURISMO-SV/data/destinations";
import { DestinationCard } from "./TURISMO-SV/components/DestinationCard";
import { SearchBar } from "./TURISMO-SV/components/SearchBar";
import { Header } from "./TURISMO-SV/components/Header";
import { useState } from "react";
import { foods } from "./TURISMO-SV/data/foods";
import { FoodCard } from "./TURISMO-SV/components/FoodCard";
import { routes } from "./TURISMO-SV/data/routes";
import { RouteCard } from "./TURISMO-SV/components/RouteCard";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Header />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <Text style={styles.sectionTitle}>
          Destinos Destacados
        </Text>

        <FlatList
          data={filteredDestinations}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
          renderItem={({ item }) => (
            <DestinationCard destination={item} />
          )}
        />

        <Text style={styles.sectionTitle}>
          Gastronomía Salvadoreña
        </Text>

        <FlatList
          horizontal
          data={foods}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          renderItem={({ item }) => (
            <FoodCard food={item} />
          )}
        />

        <Text style={styles.sectionTitle}>
          Rutas Turísticas
        </Text>

        {routes.map((route) => (
          <RouteCard
            key={route.id}
            route={route}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginHorizontal: 15,
    marginBottom: 15,
  },
});