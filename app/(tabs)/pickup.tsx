import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import SectionHeader from '@/components/SectionHeader';
import OrderCard from '@/components/OrderCard';
import { pickupTasks } from '@/lib/mockOrders';

export default function PickupScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const assignedTasks = pickupTasks.filter(t => t.status === 'assigned');
  const pendingTasks = pickupTasks.filter(t => t.status === 'pending');
  const pickedTasks = pickupTasks.filter(t => t.status === 'picked');

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
          title="Pickup Tasks"
          subtitle={`${assignedTasks.length + pendingTasks.length} tasks today`}
        />

        {/* Assigned Tasks */}
        {assignedTasks.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
                Assigned ({assignedTasks.length})
              </Text>
            </View>
            {assignedTasks.map((order) => (
              <OrderCard
                order={order}
                onPress={() => router.push(`/pickup/${order.id}`)}
              />
            ))}
          </View>
        )}

        {/* Picked Tasks */}
        {pickedTasks.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
                Picked Up ({pickedTasks.length})
              </Text>
            </View>
            {pickedTasks.map((order) => (
              <OrderCard
                order={order}
                onPress={() => router.push(`/pickup/${order.id}`)}
              />
            ))}
          </View>
        )}

        {/* Pending Tasks */}
        {pendingTasks.length > 0 && (
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#9ca3af', marginBottom: 8 }}>
                Pending Assignment ({pendingTasks.length})
              </Text>
            </View>
            {pendingTasks.map((order) => (
              <OrderCard
                order={order}
                onPress={() => router.push(`/pickup/${order.id}`)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}