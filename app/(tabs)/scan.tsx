import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, QrCode } from 'lucide-react-native';
import ScanConfirmModal from '@/components/ScanConfirmItem';

export default function ScanScreen() {
  const [showModal, setShowModal] = useState(false);
  const [scannedCode, setScannedCode] = useState('');

  const handleScan = () => {
    // Simulate barcode scan
    const mockCode = 'PKG-2024-00' + Math.floor(Math.random() * 9 + 1);
    setScannedCode(mockCode);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    Alert.alert(
      'Success',
      `Package ${scannedCode} has been picked up successfully!`,
      [{ text: 'OK' }]
    );
    setScannedCode('');
  };

  const handleCancel = () => {
    setShowModal(false);
    setScannedCode('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111827' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 }}>
        {/* Camera Frame Mockup */}
        <View style={{ width: '100%', aspectRatio: 1, maxWidth: 320, backgroundColor: '#1F2937', borderRadius: 24, borderWidth: 4, borderColor: 'rgba(37, 99, 235, 0.5)', marginBottom: 32, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '75%', aspectRatio: 1, borderWidth: 2, borderColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
            <QrCode size={120} {...({ stroke: '#FFFFFF' } as any)} />
          </View>
        </View>

        {/* Instructions */}
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 8, textAlign: 'center' }}>
          Scan Package Barcode
        </Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14, marginBottom: 32, textAlign: 'center', paddingHorizontal: 16 }}>
          Position the barcode within the frame to scan
        </Text>

        {/* Scan Button */}
        <TouchableOpacity
          onPress={handleScan}
          style={{ backgroundColor: '#2563EB', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48, flexDirection: 'row', alignItems: 'center' }}
          activeOpacity={0.8}
        >
          <Camera size={24} {...({ stroke: '#FFFFFF' } as any)} />
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18, marginLeft: 12 }}>
            Scan Now
          </Text>
        </TouchableOpacity>

        {/* Info */}
        <View style={{ marginTop: 48, backgroundColor: '#1F2937', borderRadius: 12, padding: 16 }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 12, textAlign: 'center' }}>
            💡 Tip: Make sure the barcode is well-lit and in focus
          </Text>
        </View>
      </View>

      {/* Confirmation Modal */}
      <ScanConfirmModal
        visible={showModal}
        orderCode={scannedCode}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </SafeAreaView>
  );
}