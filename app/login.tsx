import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, Phone, Lock } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!phoneNumber.trim() || !password.trim()) {
      Alert.alert('Error', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (phoneNumber.length < 10) {
      Alert.alert('Error', 'Số điện thoại không hợp lệ');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Mock login - any credentials work for demo
      if (phoneNumber && password.length >= 6) {
        Alert.alert('Success', 'Đăng nhập thành công!');
        router.replace('/(tabs)/delivery');
      } else {
        Alert.alert('Error', 'Số điện thoại hoặc mật khẩu không chính xác');
      }
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2563EB' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={{ alignItems: 'center', marginBottom: 48 }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <Text style={{ fontSize: 48, fontWeight: '700', color: '#2563EB' }}>AI</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 8 }}>
            Shipper App
          </Text>
          <Text style={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
            Quản lý giao hàng dễ dàng
          </Text>
        </View>

        {/* Form Section */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, marginBottom: 24 }}>
          {/* Phone Number Input */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#111827', marginBottom: 8 }}>
              Số điện thoại
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#f9fafb',
                borderWidth: 1,
                borderColor: '#E5E7EB',
                borderRadius: 8,
                paddingHorizontal: 12,
              }}
            >
              <Phone size={20} {...({ stroke: '#9CA3AF' } as any)} style={{ marginRight: 8 }} />
              <TextInput
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                editable={!loading}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  fontSize: 14,
                  color: '#111827',
                }}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#111827', marginBottom: 8 }}>
              Mật khẩu
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#f9fafb',
                borderWidth: 1,
                borderColor: '#E5E7EB',
                borderRadius: 8,
                paddingHorizontal: 12,
              }}
            >
              <Lock size={20} {...({ stroke: '#9CA3AF' } as any)} style={{ marginRight: 8 }} />
              <TextInput
                placeholder="Nhập mật khẩu"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                editable={!loading}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  fontSize: 14,
                  color: '#111827',
                }}
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} disabled={loading}>
                {showPassword ? (
                  <EyeOff size={20} {...({ stroke: '#9CA3AF' } as any)} />
                ) : (
                  <Eye size={20} {...({ stroke: '#9CA3AF' } as any)} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            style={{
              backgroundColor: '#2563EB',
              borderRadius: 8,
              paddingVertical: 14,
              alignItems: 'center',
              opacity: loading ? 0.6 : 1,
            }}
            activeOpacity={0.8}
          >
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity
            style={{ marginTop: 16, alignItems: 'center' }}
            disabled={loading}
          >
            <Text style={{ color: '#2563EB', fontWeight: '500', fontSize: 14 }}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 12, padding: 16 }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 13, lineHeight: 20 }}>
            💡 <Text style={{ fontWeight: '600' }}>Demo:</Text> Nhập bất kỳ số điện thoại (10+ chữ số) và mật khẩu (6+ ký tự) để đăng nhập
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13 }}>
            AI Transport Center © 2024
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
