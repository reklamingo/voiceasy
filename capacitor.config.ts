import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.voiceasy.app',
  appName: 'Voiceasy',
  webDir: 'www',
  server: {
    url: 'https://www.voiceasy.com.tr/',
    cleartext: false
  },
  ios: {
    contentInset: 'always',
    allowsLinkPreview: true,
    allowsBackForwardNavigationGestures: true
  }
};

export default config;