import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function IntroductionPage({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    <SafeAreaView style={backgroundStyle}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                  style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  }}>
                  <Section title="Họ và tên">Đào Hoàng Đăng</Section>
                  <Section title="MSSV">21110163</Section>
                  <Section title="Lớp">04CLC</Section>
                  <Section title="Nhóm">2</Section>
                </View>
              </ScrollView>
            </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default IntroductionPage;