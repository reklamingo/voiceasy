# Voiceasy iOS Wrapper (Capacitor)
This minimal project wraps https://www.voiceasy.com.tr/ inside a native iOS app using Capacitor.
It is preconfigured for Codemagic CI to build and publish to App Store Connect.

## How it works
- `capacitor.config.ts` sets `server.url` to load the remote Voiceasy website.
- No web assets are required.
- Codemagic uses `codemagic.yaml` to add/sync the iOS platform, build, and upload.

## What you must set in Codemagic
Create environment variables (Secure):
- `APP_STORE_CONNECT_KEY_IDENTIFIER` → your App Store Connect API Key ID
- `APP_STORE_CONNECT_ISSUER_ID` → App Store Connect Issuer ID
- `APP_STORE_CONNECT_PRIVATE_KEY` → paste the content of your `.p8` file (include the BEGIN/END lines)
- Optionally adjust `APPLE_TEAM_ID` in `codemagic.yaml` (current: 377ECJLA2T).

Bundle ID is `com.voiceasy.app` and app name is `Voiceasy`. Change in `capacitor.config.ts` if needed.