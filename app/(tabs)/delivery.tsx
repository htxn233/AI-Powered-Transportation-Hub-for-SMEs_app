import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Clock } from 'lucide-react-native';
import SectionHeader from '@/components/SectionHeader';
import OrderCard from '@/components/OrderCard';
import { deliveryTasks } from '@/lib/mockOrders';

export default function DeliveryScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const deliveringTasks = deliveryTasks.filter(t => t.status === 'delivering');
  const pickedTasks = deliveryTasks.filter(t => t.status === 'picked');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SectionHeader
          title="Delivery Tasks"
          subtitle={`${deliveryTasks.length} active deliveries`}
          rightComponent={
            <TouchableOpacity
              onPress={() => router.push('/history')}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Clock size={16} {...({ stroke: '#2563EB' } as any)} />
              <Text style={{ color: '#2563EB', fontWeight: '600', fontSize: 14, marginLeft: 4 }}>
                History
              </Text>
            </TouchableOpacity>
          }
        />

        {/* In Transit */}
        {deliveringTasks.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>
                In Transit ({deliveringTasks.length})
              </Text>
            </View>
            {deliveringTasks.map((order) => (
              <OrderCard
                order={order}
                onPress={() => router.push(`/delivery/${order.id}`)}
                showETA
              />
            ))}
          </View>
        )}

        {/* Ready to Deliver */}
        {pickedTasks.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>
                Ready to Deliver ({pickedTasks.length})
              </Text>
            </View>
            {pickedTasks.map((order) => (
              <OrderCard
                order={order}
                onPress={() => router.push(`/delivery/${order.id}`)}
                showETA
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}