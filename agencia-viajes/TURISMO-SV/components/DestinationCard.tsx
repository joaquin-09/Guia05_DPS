import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Destination } from '../types/destination';

interface Props {
  destination: Destination;
}

export function DestinationCard({
  destination,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={destination.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {destination.title}
      </Text>

      <View style={styles.locationRow}>
        <Text style={styles.pin}>📍</Text>
        <Text style={styles.location}>
          {destination.location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 16,
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 14,
  },

  title: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 13,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  pin: {
    fontSize: 11,
    marginRight: 4,
  },

  location: {
    fontSize: 12,
    color: '#5a6a7e',
  },
});