import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { 
  MapPin, 
  Phone, 
  Package, 
  Clock,
  Navigation,
  CheckCircle2
} from 'lucide-react-native';
import StatusBadge from '@/components/StatusBadge';
import ActionButton from '@/components/ActionButton';
import { pickupTasks } from '@/lib/mockOrders';

export default function PickupDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const order = pickupTasks.find(o => o.id === id);

  if (!order) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#4b5563' }}>Order not found</Text>
      </SafeAreaView>
    );
  }

  const handleStartPickup = () => {
    Alert.alert(
      'Start Pickup',
      'Navigate to pickup location?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Navigate', 
          onPress: () => Alert.alert('Navigation', 'Opening maps...')
        }
      ]
    );
  };

  const handleScanPackage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Success',
        'Package picked up successfully!',
        [
          { text: 'OK', onPress: () => router.back() }
        ]
      );
    }, 1500);
  };

  const handleCallSender = () => {
    Alert.alert('Call Sender', `Calling ${order.senderPhone}...`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        {/* Order Header */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 8 }}>
                {order.orderCode}
              </Text>
              <StatusBadge status={order.status} />
            </View>
          </View>

          {/* Package Info */}
          <View style={{ backgroundColor: '#f3f4f6', borderRadius: 8, padding: 16, marginTop: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Package size={16} {...({ stroke: '#6B7280' } as any)} />
              <Text style={{ fontSize: 14, color: '#4b5563', marginLeft: 8 }}>Package Details</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ color: '#374151' }}>Weight:</Text>
              <Text style={{ fontWeight: '600', color: '#111827' }}>{order.weight} kg</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
              <Text style={{ color: '#374151' }}>Type:</Text>
              <Text style={{ fontWeight: '600', color: '#111827' }}>{order.packageType}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
              <Text style={{ color: '#374151' }}>Distance:</Text>
              <Text style={{ fontWeight: '600', color: '#111827' }}>{order.distanceKm} km</Text>
            </View>
          </View>
        </View>

        {/* Sender Information */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
            Sender Information
          </Text>
          
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#dbeafe', borderRadius: 50, padding: 8, marginRight: 12 }}>
                <MapPin size={16} {...({ stroke: '#2563EB' } as any)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 4 }}>Pickup Address</Text>
                <Text style={{ fontSize: 16, color: '#111827', fontWeight: '500' }}>
                  {order.pickupAddress}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#d1fae5', borderRadius: 50, padding: 8, marginRight: 12 }}>
                <Phone size={16} {...({ stroke: '#10B981' } as any)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 4 }}>Contact</Text>
                <Text style={{ fontSize: 16, color: '#111827', fontWeight: '500' }}>
                  {order.senderName}
                </Text>
                <Text style={{ fontSize: 14, color: '#4b5563' }}>{order.senderPhone}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#fef3c7', borderRadius: 50, padding: 8, marginRight: 12 }}>
                <Clock size={16} {...({ stroke: '#F59E0B' } as any)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 4 }}>Pickup Time</Text>
                <Text style={{ fontSize: 16, color: '#111827', fontWeight: '500' }}>
                  {order.pickupTime}
                </Text>
              </View>
            </View>
          </View>

          {/* Call Button */}
          <TouchableOpacity
            onPress={handleCallSender}
            style={{ backgroundColor: '#f0fdf4', borderWidth: 1, borderColor: '#bbf7d0', borderRadius: 12, paddingVertical: 12, marginTop: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            activeOpacity={0.7}
          >
            <Phone size={18} {...({ stroke: '#10B981' } as any)} />
            <Text style={{ color: '#10B981', fontWeight: '600', marginLeft: 8 }}>Call Sender</Text>
          </TouchableOpacity>
        </View>

        {/* Special Notes */}
        {order.notes && (
          <View style={{ backgroundColor: '#fef3c7', borderWidth: 1, borderColor: '#fde047', borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#854d0e', marginBottom: 4 }}>
              ⚠️ Special Instructions
            </Text>
            <Text style={{ fontSize: 14, color: '#92400e' }}>{order.notes}</Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={{ gap: 12, marginBottom: 24 }}>
          {order.status === 'assigned' && (
            <>
              <ActionButton
                label="Navigate to Pickup"
                onPress={handleStartPickup}
                icon={Navigation}
                variant="primary"
              />
              <ActionButton
                label="Scan & Confirm Pickup"
                onPress={handleScanPackage}
                icon={CheckCircle2}
                variant="success"
                loading={loading}
              />
            </>
          )}
          
          {order.status === 'picked' && (
            <View style={{ backgroundColor: '#f0fdf4', borderWidth: 1, borderColor: '#bbf7d0', borderRadius: 12, padding: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckCircle2 size={20} {...({ stroke: '#10B981' } as any)} />
                <Text style={{ color: '#10B981', fontWeight: '600', marginLeft: 8 }}>
                  Package Picked Up
                </Text>
              </View>
              <Text style={{ fontSize: 14, color: '#4b5563', marginTop: 8 }}>
                This package has been picked up and is ready for delivery.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}