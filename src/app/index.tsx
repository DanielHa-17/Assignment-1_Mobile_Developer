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

function Likes() {
  return (
    <View style={styles.likesRow}>
      <View style={styles.likerStack}>
        {LIKER_AVATARS.map((src, i) => (
          <Image
            key={i}
            source={src}
            style={[styles.likerAvatar, i > 0 && styles.likerAvatarOverlap]}
          />
        ))}
      </View>
      <Text style={styles.likesText}>
        Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
        <Text style={styles.bold}>7 others</Text>
      </Text>
    </View>
  );
}

function Caption() {
  return (
    <View style={styles.captionBlock}>
      <Text style={styles.captionText}>
        <Text style={styles.bold}>frenchie_fry39</Text> Fresh shot on a sunny
        day! ☀️
      </Text>
      <Text style={styles.viewComments}>View all 12 comments</Text>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>lil_wyatt838</Text> Awesome tones
      </Text>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
      </Text>
      <Text style={styles.timeAgo}>1 day ago</Text>
    </View>
  );
}

function TabBar() {
  return (
    <View style={styles.tabBar}>
      <Ionicons name="home-outline" size={26} color="#000" />
      <Ionicons name="search-outline" size={26} color="#000" />
      <Ionicons name="film-outline" size={26} color="#000" />
      <Ionicons name="bag-outline" size={26} color="#000" />
      <Ionicons name="person-circle-outline" size={28} color="#000" />
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostHeader />
        <Image source={POST_IMAGE} style={styles.postImage} />
        <ActionBar />
        <Likes />
        <Caption />
        <View style={styles.alertButton}>
          <Button
            title="Alert"
            onPress={() => Alert.alert("Alert Button pressed")}
          />
        </View>
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#dbdbdb",
  },
  headerCenter: {
    alignItems: "center",
  },
  headerEyebrow: {
    fontSize: 11,
    fontWeight: "600",
    color: "#8e8e8e",
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  headerSpacer: {
    width: 26,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  storyRing: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  postHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  postUser: {
    fontSize: 13,
    fontWeight: "700",
    color: "#000",
  },
  postVia: {
    fontSize: 12,
    color: "#8e8e8e",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#efefef",
  },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginRight: 16,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 6,
  },
  likerStack: {
    flexDirection: "row",
    marginRight: 8,
  },
  likerAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
    backgroundColor: "#efefef",
  },
  likerAvatarOverlap: {
    marginLeft: -8,
  },
  likesText: {
    flex: 1,
    fontSize: 13,
    color: "#000",
  },
  bold: {
    fontWeight: "700",
  },
  captionBlock: {
    paddingHorizontal: 12,
  },
  captionText: {
    fontSize: 13,
    color: "#000",
    lineHeight: 18,
  },
  viewComments: {
    fontSize: 13,
    color: "#8e8e8e",
    marginTop: 4,
  },
  commentText: {
    fontSize: 13,
    color: "#000",
    lineHeight: 18,
    marginTop: 2,
  },
  timeAgo: {
    fontSize: 11,
    color: "#8e8e8e",
    marginTop: 6,
  },
  alertButton: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
  },
});



