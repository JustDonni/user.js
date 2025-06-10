# Ultra-Private Firefox Config

🔒 A hardened, privacy-first Firefox configuration designed to eliminate telemetry, block trackers, and minimize fingerprinting while keeping websites functional and preventing account logouts. Perfect for users who want maximum privacy without sacrificing usability.

---

## 🌟 Features

- No Telemetry: Completely disables Mozilla's telemetry, crash reports, and experiments.
- Tracker Blocking: Strict protection against trackers and third-party cookies.
- Anti-Fingerprinting: Reduces browser fingerprinting risks without breaking site layouts.
- Balanced Cookie Management: Preserves logins while blocking third-party cookies.
- Clean Interface: Removes Pocket, sponsored content, and new tab clutter.
- HTTPS & DNS Security: Enforces HTTPS-only mode and DNS-over-HTTPS with NextDNS.
- Stable Sessions: Prevents account logouts by preserving cache and localStorage.

---

## 🛠️ Installation

1. Locate Your Firefox Profile:
   - Open Firefox, go to about:support, and find your profile folder path (e.g., ~/.mozilla/firefox/<your_profile> on Linux or %APPDATA%\Mozilla\Firefox\Profiles\<your_profile> on Windows).
   - Alternatively, run firefox --ProfileManager to identify or create a profile.

2. Copy user.js:
   - Download the [user.js file](user.js) from this repository.
   - Place it in your Firefox profile folder (e.g., ~/.mozilla/firefox/<your_profile>/user.js).
Restart Firefoxox:
   - Close and reopen Firefox to apply the configuration.
   - Verify settings in about:config (e.g., search for toolkit.telemetry.enabled to confirm it's false).
Test Websiteses:
   - Check critical sites (e.g., Gmail, Discord) to ensure logins and functionality work.
   - Adjust settings in about:config if specific sites break.

---

## ⚠️ Notes & TroubleshootingPotential Issueses:
  - Some sites (e.g., Netflix) may require enabling media.eme.enabled in about:config for DRM content.
  - Service Workers (dom.serviceWorkers.enabled) are enabled to prevent login issues but can be disabled for stricter privacy at the cost of breaking some web apps.
  - If logouts persist, verify privacy.clearOnShutdown. settings are false for cache, cookies, and offlineApps.Testingng:
  - Use a new Firefox profile for testing (firefox --ProfileManager).
  - Check fingerprinting resistance at [Cover Your Tracks](https://coveryourtracks.eff.org/). Customizationon:
  - Edit user.js in a text editor (e.g., Neovim) to tweak settings.
  - Revert problematic settings in about:config by double-clicking to toggle or reset.

---

## 📋 Key Settings ExplainedTelemetryry: Disabled via toolkit.telemetry.enabled = false and related settings to block all Mozilla data collection. Ultra-Private Firefox Config

🔒 A hardened, privacy-first Firefox configuration designed to eliminate telemetry, block trackers, and minimize fingerprinting while keeping websites functional and preventing account logouts. Perfect for users who want maximum privacy without sacrificing usability.

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Make changes to user.js or documentation.
3. Submit a pull request with a clear description of changes.

Please test your changes in a fresh Firefox profile to ensure compatibility.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

Inspired by privacy-focused projects like [JustDonni/user.js](https://github.com/JustDonni/user.js) and community efforts to harden Firefox.

---

🔥 Stay private, stay secure!  
