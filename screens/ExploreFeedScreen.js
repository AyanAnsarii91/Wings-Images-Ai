import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import ExploreStyle from "../styles/ExploreScreenStyle";

export default function ExploreFeedScreen() {
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://ai-gallery-five.vercel.app/images.json"
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchImages();
  };

  const handleImageError = (e, url) => {
    console.error(`Image failed to load: ${url}`, e.nativeEvent.error);
  };

  return (
    <ScrollView
      contentContainerStyle={ExploreStyle.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#6366f1"]}
        />
      }
    >
      <Text style={ExploreStyle.title}>✨ Explore AI Images</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6366f1" />
      ) : images.length === 0 ? (
        <Text style={ExploreStyle.emptyText}>No images yet! 📸</Text>
      ) : (
        <View style={ExploreStyle.grid}>
          {images.map((item, index) => {
            const imageUrl = encodeURI(
              `https://ai-gallery-five.vercel.app${item}`
            );
            return (
              <View key={index} style={ExploreStyle.card}>
                <Image
                  source={{
                    uri: imageUrl,
                  }}
                  style={ExploreStyle.image}
                  resizeMode="cover"
                  onError={(e) => handleImageError(e, imageUrl)}
                />
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}
