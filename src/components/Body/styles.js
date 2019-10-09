import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 2,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    position: "absolute",
    left: 0,
    right: 0,
    top: 380,

  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,

  },

  cardContent: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    color: "#999",
  },
  description: {
    fontSize: 32,
    marginTop: 3,
    color: "#333",
  },
  cardFooter: {
    padding: 30,
    backgroundColor: "#EEE",
    borderRadius: 2,
  },
  annotation: {
    fontSize: 13,
    color: "#444",
  },

});
