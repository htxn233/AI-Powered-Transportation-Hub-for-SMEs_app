import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { 
  User, 
  Calendar, 
  History, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Star,
  Award
} from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // await AsyncStorage.removeItem('auth_token');

            router.replace('/login');
          },
        },
      ],
    );
  };

  const handleHelpPress = () => {
    alert('Nếu bạn cần hỗ trợ, vui lòng gửi email về support@company.com');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        {/* Profile Header */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 24, marginBottom: 24, alignItems: 'center' }}>
          <View style={{ backgroundColor: '#2563EB', borderRadius: 60, width: 96, height: 96, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
            <User size={48} {...({ stroke: '#FFFFFF' } as any)} />
          </View>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#111827', marginBottom: 4 }}>
            Nguyen Van Shipper
          </Text>
          <Text style={{ fontSize: 14, color: '#4B5563', marginBottom: 16 }}>
            ID: SHP-2024-001
          </Text>

          {/* Stats */}
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F3F4F6' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '700', color: '#2563EB' }}>156</Text>
              <Text style={{ fontSize: 12, color: '#4B5563', marginTop: 4 }}>Deliveries</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '700', color: '#10B981' }}>98%</Text>
              <Text style={{ fontSize: 12, color: '#4B5563', marginTop: 4 }}>Success Rate</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '700', color: '#F59E0B' }}>4.9</Text>
                <Star size={16} {...({ stroke: '#F59E0B', fill: '#F59E0B' } as any)} style={{ marginLeft: 4 }} />
              </View>
              <Text style={{ fontSize: 12, color: '#4B5563', marginTop: 4 }}>Rating</Text>
            </View>
          </View>
        </View>

        {/* Achievement */}
        <View style={{ backgroundColor: '#FCD34D', borderRadius: 12, padding: 16, marginBottom: 24, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 50, padding: 12, marginRight: 16 }}>
            <Award size={24} {...({ stroke: '#F59E0B' } as any)} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16, marginBottom: 4 }}>
              Top Performer
            </Text>
            <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 14 }}>
              You're in the top 10% this month! 🎉
            </Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={{ backgroundColor: '#fff', borderRadius: 12, marginBottom: 24, overflow: 'hidden' }}>
          <MenuItem
            icon={Calendar}
            label="Work Schedule"
            onPress={() => router.push('/schedule')}
          />
          <MenuItem
            icon={History}
            label="Delivery History"
            onPress={() => router.push('/history')}
          />
          <MenuItem
            icon={Settings}
            label="Settings"
            onPress={() => router.push('/settings')}
          />
          <MenuItem
            icon={HelpCircle}
            label="Help & Support"
            onPress={() => handleHelpPress()}
            showDivider={false}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity
          onPress={handleLogout}
          style={{ backgroundColor: '#fff', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#FCA5A5' }}
          activeOpacity={0.7}
        >
          <LogOut size={20} {...({ stroke: '#EF4444' } as any)} />
          <Text style={{ color: '#EF4444', fontWeight: '600', fontSize: 16, marginLeft: 8 }}>
            Logout
          </Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={{ textAlign: 'center', color: '#9CA3AF', fontSize: 12, marginTop: 24 }}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

interface MenuItemProps {
  icon: React.ComponentType<any>;
  label: string;
  onPress: () => void;
  showDivider?: boolean;
}

function MenuItem({ icon: Icon, label, onPress, showDivider = true }: MenuItemProps) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}
        activeOpacity={0.7}
      >
        <View style={{ backgroundColor: '#F3F4F6', borderRadius: 20, padding: 8, marginRight: 12 }}>
          <Icon size={20} {...({ stroke: '#6B7280' } as any)} />
        </View>
        <Text style={{ flex: 1, color: '#111827', fontWeight: '500' }}>
          {label}
        </Text>
        <ChevronRight size={20} {...({ stroke: '#9CA3AF' } as any)} />
      </TouchableOpacity>
      {showDivider && <View style={{ height: 1, backgroundColor: '#F3F4F6', marginLeft: 64 }} />}
    </>
  );
}