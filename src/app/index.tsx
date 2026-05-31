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
function PostHeader() {
  return (
    <View style={styles.postHeader}>
      <LinearGradient
        colors={["#feda75", "#d62976", "#962fbf"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.storyRing}
      >
        <Image source={AVATAR} style={styles.avatarSmall} />
      </LinearGradient>
      <View style={styles.postHeaderText}>
        <Text style={styles.postUser}>ootd_everyday</Text>
        <Text style={styles.postVia}>via frenchie_fry39</Text>
      </View>
      <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
    </View>
  );
}

function ActionBar() {
  return (
    <View style={styles.actionBar}>
      <View style={styles.actionLeft}>
        <Ionicons
          name="heart-outline"
          size={26}
          color="#000"
          style={styles.actionIcon}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="#000"
          style={styles.actionIcon}
        />
        <Ionicons name="paper-plane-outline" size={24} color="#000" />
      </View>
      <Ionicons name="bookmark-outline" size={24} color="#000" />
    </View>
  );
}

