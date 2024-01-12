import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function IntroductionPage({ navigation }) {
  // Sử dụng useEffect để thực hiện hành động sau khi component được render
  useEffect(() => {
    // Đặt thời gian chuyển sang trang homepage sau 10 giây
    const timeout = setTimeout(() => {
      navigation.navigate('HomePage');
    }, 10000);

    // Xóa timeout khi component bị hủy
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ và tên: Phan Thị Ngọc Mai</Text>
      <Text style={styles.text}>MSSV: 21110238</Text>
      <Text style={styles.text}>Nhóm: 02</Text>
      <Text style={styles.text}>Lớp: 04CLC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default IntroductionPage;