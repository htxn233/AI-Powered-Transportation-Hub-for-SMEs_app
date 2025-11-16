import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { 
  MapPin, 
  Phone, 
  Package, 
  Clock,
  Navigation,
  CheckCircle2,
  XCircle,
  Camera,
  PackageCheck,
  Truck,
  Home
} from 'lucide-react-native';
import StatusBadge from '@/components/StatusBadge';
import ActionButton from '@/components/ActionButton';
import TimelineItem from '@/components/TimelineItem';
import { deliveryTasks } from '@/lib/mockOrders';

export default function DeliveryDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showFailureForm, setShowFailureForm] = useState(false);
  const [failureReason, setFailureReason] = useState('');

  const order = deliveryTasks.find(o => o.id === id);

  if (!order) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#4b5563' }}>Order not found</Text>
      </SafeAreaView>
    );
  }

  const handleStartDelivery = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Delivery started!');
    }, 1000);
  };

  const handleMarkDelivered = () => {
    Alert.alert(
      'Confirm Delivery',
      'Mark this order as delivered?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              Alert.alert(
                'Delivered',
                'Order marked as delivered successfully!',
                [{ text: 'OK', onPress: () => router.back() }]
              );
            }, 1500);
          }
        }
      ]
    );
  };

  const handleMarkFailed = () => {
    setShowFailureForm(true);
  };

  const handleSubmitFailure = () => {
    if (!failureReason.trim()) {
      Alert.alert('Error', 'Please provide a reason for failure');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowFailureForm(false);
      Alert.alert(
        'Delivery Failed',
        'Failure reported successfully',
        [{ text: 'OK', onPress: () => router.back() }]
      );
    }, 1500);
  };

  const handleNavigate = () => {
    Alert.alert('Navigation', 'Opening maps to delivery location...');
  };

  const handleCallReceiver = () => {
    Alert.alert('Call Receiver', `Calling ${order.receiverPhone}...`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
      >
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

          {/* ETA */}
          {order.eta && (
            <View style={{ backgroundColor: '#eff6ff', borderRadius: 8, padding: 16, marginTop: 16, flexDirection: 'row', alignItems: 'center' }}>
              <Clock size={20} {...({ stroke: '#2563EB' } as any)} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 14, color: '#4b5563' }}>Estimated Arrival</Text>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#2563EB' }}>{order.eta}</Text>
              </View>
            </View>
          )}
        </View>

        {/* Delivery Timeline */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
            Delivery Progress
          </Text>
          
          <TimelineItem
            icon={PackageCheck}
            title="Picked Up"
            description="Package collected from sender"
            time="10:30 AM"
            isActive={true}
          />
          <TimelineItem
            icon={Truck}
            title="In Transit"
            description="Package on the way to destination"
            isActive={order.status === 'delivering'}
          />
          <TimelineItem
            icon={Home}
            title="Delivered"
            description="Package delivered to receiver"
            isActive={order.status === 'delivered'}
            isLast
          />
        </View>

        {/* Receiver Information */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
            Receiver Information
          </Text>
          
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#dbeafe', borderRadius: 50, padding: 8, marginRight: 12 }}>
                <MapPin size={16} {...({ stroke: '#2563EB' } as any)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 4 }}>Delivery Address</Text>
                <Text style={{ fontSize: 16, color: '#111827', fontWeight: '500' }}>
                  {order.deliveryAddress}
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
                  {order.receiverName}
                </Text>
                <Text style={{ fontSize: 14, color: '#4b5563' }}>{order.receiverPhone}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#e9d5ff', borderRadius: 50, padding: 8, marginRight: 12 }}>
                <Package size={16} {...({ stroke: '#9333EA' } as any)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 4 }}>Package Info</Text>
                <Text style={{ fontSize: 16, color: '#111827', fontWeight: '500' }}>
                  {order.weight} kg • {order.distanceKm} km
                </Text>
              </View>
            </View>
          </View>

          {/* Call Button */}
          <TouchableOpacity
            onPress={handleCallReceiver}
            style={{ backgroundColor: '#f0fdf4', borderWidth: 1, borderColor: '#bbf7d0', borderRadius: 12, paddingVertical: 12, marginTop: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            activeOpacity={0.7}
          >
            <Phone size={18} {...({ stroke: '#10B981' } as any)} />
            <Text style={{ color: '#10B981', fontWeight: '600', marginLeft: 8 }}>Call Receiver</Text>
          </TouchableOpacity>
        </View>

        {/* Special Notes */}
        {order.notes && (
          <View style={{ backgroundColor: '#fef3c7', borderWidth: 1, borderColor: '#fde047', borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#854d0e', marginBottom: 4 }}>
              📝 Delivery Notes
            </Text>
            <Text style={{ fontSize: 14, color: '#92400e' }}>{order.notes}</Text>
          </View>
        )}

        {/* Failure Form */}
        {showFailureForm && (
          <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 16, borderWidth: 2, borderColor: '#fecaca' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
              Report Delivery Failure
            </Text>
            
            <Text style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Reason for failure *</Text>
            <TextInput
              value={failureReason}
              onChangeText={setFailureReason}
              placeholder="e.g., Receiver not available, wrong address..."
              multiline
              numberOfLines={4}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 12, color: '#111827', marginBottom: 16, textAlignVertical: 'top' }}
            />

            <TouchableOpacity
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 12, paddingVertical: 12, marginBottom: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
              activeOpacity={0.7}
            >
              <Camera size={18} {...({ stroke: '#6B7280' } as any)} />
              <Text style={{ color: '#374151', fontWeight: '600', marginLeft: 8 }}>Add Photo (Optional)</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={() => setShowFailureForm(false)}
                style={{ flex: 1, backgroundColor: '#f3f4f6', borderRadius: 12, paddingVertical: 12 }}
                activeOpacity={0.7}
              >
                <Text style={{ color: '#374151', fontWeight: '600', textAlign: 'center' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmitFailure}
                style={{ flex: 1, backgroundColor: '#dc2626', borderRadius: 12, paddingVertical: 12 }}
                activeOpacity={0.7}
              >
                <Text style={{ color: '#fff', fontWeight: '600', textAlign: 'center' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Action Buttons */}
        {!showFailureForm && (
          <View style={{ gap: 12, marginBottom: 24 }}>
            {order.status === 'picked' && (
              <>
                <ActionButton
                  label="Navigate to Destination"
                  onPress={handleNavigate}
                  icon={Navigation}
                  variant="primary"
                />
                <ActionButton
                  label="Start Delivery"
                  onPress={handleStartDelivery}
                  icon={Truck}
                  variant="primary"
                  loading={loading}
                />
              </>
            )}
            
            {order.status === 'delivering' && (
              <>
                <ActionButton
                  label="Mark as Delivered"
                  onPress={handleMarkDelivered}
                  icon={CheckCircle2}
                  variant="success"
                  loading={loading}
                />
                <ActionButton
                  label="Report Failure"
                  onPress={handleMarkFailed}
                  icon={XCircle}
                  variant="danger"
                />
              </>
            )}

            {order.status === 'delivered' && (
              <View style={{ backgroundColor: '#f0fdf4', borderWidth: 1, borderColor: '#bbf7d0', borderRadius: 12, padding: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckCircle2 size={20} {...({ stroke: '#10B981' } as any)} />
                  <Text style={{ color: '#10B981', fontWeight: '600', marginLeft: 8 }}>
                    Delivered Successfully
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: '#4b5563', marginTop: 8 }}>
                  This order has been completed and delivered to the receiver.
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}