import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const POST_IMAGE = require("../../assets/images/post.jpg");
const AVATAR = require("../../assets/images/av_main.jpg");
const LIKER_AVATARS = [
  require("../../assets/images/av1.jpg"),
  require("../../assets/images/av2.jpg"),
  require("../../assets/images/av3.jpg"),
];

function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={26} color="#000" />
      <View style={styles.headerCenter}>
        <Text style={styles.headerEyebrow}>OOTD_EVERYDAY</Text>
        <Text style={styles.headerTitle}>Posts</Text>
      </View>
      <View style={styles.headerSpacer} />
    </View>
  );
}

