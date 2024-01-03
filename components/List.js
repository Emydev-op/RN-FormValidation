import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  Platform,
  Modal,
  ScrollView,
  StatusBar,
  SectionList,
} from "react-native";
import sectionData from "../grouped-data.json";

const dataM = [
  { id: 1, title: "John Cena" },
  { id: 2, title: "Mick Jackson" },
  { id: 3, title: "John Kane" },
  { id: 4, title: "Toni Messi" },
  { id: 5, title: "Oluchi Cena" },
  { id: 6, title: "John Tolu" },
  { id: 7, title: "Emeka Cena" },
  { id: 8, title: "Chukwa Cena" },
  { id: 9, title: "Tobi Ola" },
  { id: 10, title: "Chinaza Samuel" },
  { id: 11, title: "Chukwa Cena" },
  { id: 12, title: "Tobi Ola" },
  { id: 13, title: "Chinaza Samuel" },
];

export default function List() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 }}>
      <StatusBar color="plum" />
      <SafeAreaView style={styles.container}>
        {/* <ScrollView>
          {data.map((item) => (
            <View style={styles.card} key={item.id}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={dataM}
          style={{ borderColor: "blue", borderWidth: 2 }}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            );
          }}
          ListFooterComponent={
            <View>
              <Text style={{ fontSize: 24, textAlign: "center" }}>Footer</Text>
            </View>
          }
          ListHeaderComponent={
            <View>
              <Text style={{ fontSize: 24, textAlign: "center" }}>Heading</Text>
            </View>
          }
        />
        <SectionList
          sections={sectionData}
          style={{ borderColor: "red", borderWidth: 2 }}
          renderSectionHeader={({ section }) => (
            <Text
              style={{ fontSize: 24, textAlign: "center", color: "yellow" }}
            >
              {section.type}
            </Text>
          )}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    // marginTop: Platform.OS === "android" ? 50 : 0,
  },
  card: {
    padding: 20,
    borderWidth: 2,
    borderColor: "Black",
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
