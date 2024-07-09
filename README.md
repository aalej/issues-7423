# Repro for issue 7423

## Versions

firebase-tools: v13.13.0<br>
node: v20.12.2<br>
platform: macOS Sonoma 14.5

## Steps to reproduce

1. Run `firebase deploy --project PROJECT_ID`
2. Open "https://PROJECT_ID.web.app"
3. Click the "Account - Link" button
   - Redirects to "https://PROJECT_ID.web.app/account/"
