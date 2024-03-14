import React from "react";
import video1 from "../database/videos/video1.mp4";
import { Video, ResizeMode } from 'expo-av';
import { StyleSheet, View } from "react-native";

export default mpVideos = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  return (
    <>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={video1}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });