// ════════════════════════════════════════════════
// 🔥 ULTRA-PRIVATE & BALANCED FIREFOX CONFIG 🔥
// — No Tracking. No Logouts. No Clutter. —
// ════════════════════════════════════════════════

// ════════════════════════════════════════════════
// 🔧 INTERFACE
// ════════════════════════════════════════════════
user_pref("browser.uidensity", 1);                              // Compact interface (better for mouse and touchpad)
user_pref("browser.tabs.tabmanager.enabled", false);            // Disable tab sidebar
user_pref("browser.aboutConfig.showWarning", false);            // Remove warning when accessing about:config

// ════════════════════════════════════════════════
// 🗑 REMOVAL OF CLUTTER AND POCKET
// ════════════════════════════════════════════════
user_pref("extensions.pocket.enabled", false);                  // Completely disable Pocket
user_pref("extensions.pocket.api", "");                        // Remove Pocket API
user_pref("extensions.pocket.site", "");                       // Remove Pocket site
user_pref("extensions.pocket.oAuthConsumerKey", "");            // Remove Pocket key
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Remove Pocket from new tab
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Remove news from new tab
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false); // Remove top sites
user_pref("browser.newtabpage.activity-stream.feeds.system.bookmarks", false); // Remove bookmarks from new tab
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Remove Mozilla snippets
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // Disable new tab telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false); // Disable new tab UI telemetry
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // Remove default recommended sites
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Remove sponsored content
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Remove sponsored top sites
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // Remove Discovery content
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Remove visited sites from Highlights
user_pref("browser.newtabpage.activity-stream.showTopSites", false); // Remove top sites entirely

// ════════════════════════════════════════════════
// 🛑 DISABLE EXPERIMENTS
// ════════════════════════════════════════════════
user_pref("app.normandy.enabled", false);                      // Disable Normandy experiment system
user_pref("app.normandy.api_url", "");                        // Remove Normandy URL
user_pref("app.shield.optoutstudies.enabled", false);          // Disable Shield studies
user_pref("extensions.shield-recipe-client.enabled", false);   // Disable Shield client
user_pref("extensions.shield-recipe-client.api_url", "");      // Remove Shield API
user_pref("extensions.shield-recipe-client.shieldLearnMoreUrl", ""); // Remove Shield Learn More link

// ════════════════════════════════════════════════
// 🧩 DISABLE RECOMMENDATIONS
// ════════════════════════════════════════════════
user_pref("browser.discovery.enabled", false);                 // Disable add-on recommendations
user_pref("extensions.getAddons.showPane", false);             // Hide add-on recommendation pane
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // Disable recommended add-ons
user_pref("browser.urlbar.quicksuggest.enabled", false);       // Disable Mozilla smart suggestions
user_pref("browser.urlbar.sponsoredTopSites", false);          // Remove sponsored sites from address bar
user_pref("browser.urlbar.tipShownCount.searchTip_onboard", 0); // Disable search tips
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // Disable unnecessary DNS resolution
user_pref("browser.urlbar.groupLabels.enabled", false);        // Disable suggestion grouping
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // Disable sponsored suggestions
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // Disable non-sponsored Mozilla suggestions
user_pref("browser.urlbar.suggest.topsites", false);           // Disable top sites suggestions
user_pref("browser.urlbar.weather.enabled", false);            // Disable weather forecast in address bar
user_pref("browser.urlbar.trending.enabled", false);           // Disable trending suggestions in address bar

// ════════════════════════════════════════════════
// 📡 TELEMETRY
// ════════════════════════════════════════════════
user_pref("toolkit.telemetry.enabled", false);                 // Completely disable telemetry
user_pref("toolkit.telemetry.unified", false);                 // Disable unified telemetry
user_pref("toolkit.telemetry.server", "");                    // Remove telemetry server
user_pref("toolkit.telemetry.archive.enabled", false);         // Disable local telemetry storage
user_pref("toolkit.telemetry.newProfilePing.enabled", false);  // Disable ping on new profile creation
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // Disable shutdown ping
user_pref("toolkit.telemetry.updatePing.enabled", false);      // Disable update ping
user_pref("toolkit.telemetry.bhrPing.enabled", false);         // Disable hang ping
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // Disable first shutdown ping
user_pref("datareporting.healthreport.uploadEnabled", false);  // Disable health report upload
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Disable all data submission
user_pref("datareporting.healthreport.service.enabled", false); // Disable health report service
user_pref("breakpad.reportURL", "");                          // Remove crash report URL
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // Disable auto-submission of crashes
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // Disable crash report reminders
user_pref("network.allow-experiments", false);                 // Disable Mozilla experiments
user_pref("browser.ping-centre.telemetry", false);             // Disable Mozilla ping center
user_pref("browser.tabs.crashReporting.sendReport", false);    // Disable tab crash report submission
user_pref("browser.diagnostics.enabled", false);               // Disable diagnostics
user_pref("toolkit.telemetry.coverage.opt-out", true);         // Opt out of coverage data collection
user_pref("toolkit.coverage.endpoint.base", "");               // Remove coverage data URL
user_pref("beacon.enabled", false);                           // Disable Beacon API (used for tracking)
user_pref("geo.enabled", false);                              // Geo
user_pref("geo.provider.network.url", "");                    // Geo
user_pref("geo.wifi.uri", false);                             // Geo

// ════════════════════════════════════════════════
// 🔒 FINGERPRINTING PROTECTION
// ════════════════════════════════════════════════
user_pref("privacy.resistFingerprinting", true);              // Basic fingerprinting protection
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true); // Daily reset of randomized fingerprinting data
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true); // Automatically decline Canvas API requests
user_pref("privacy.resistFingerprinting.exemptedDomains", ""); // Ensure no fingerprinting exemptions
user_pref("webgl.disabled", true);                            // Disable WebGL (often used for fingerprinting)
user_pref("webgl.min_capability_mode", true);                 // Minimize WebGL data (if enabled)
user_pref("media.navigator.enabled", false);                  // Disable access to media devices
user_pref("media.peerconnection.enabled", false);             // Disable WebRTC (IP leaks)
user_pref("device.sensors.enabled", false);                   // Disable sensors (accelerometer, etc.)
user_pref("dom.webaudio.enabled", false);                    // Disable WebAudio API (used for fingerprinting)

// ════════════════════════════════════════════════
// 🖌 BLOCK THIRD-PARTY FONTS
// ════════════════════════════════════════════════
user_pref("layout.css.font-visibility", 1);                  // Restrict font visibility to local fonts only

// ════════════════════════════════════════════════
// 🛡 NETWORK AND HTTPS PROTECTION
// ════════════════════════════════════════════════
// user_pref("network.trr.mode", 5);                            // DNS over HTTPS only (TRR-only)
// user_pref("network.trr.uri", "https://dns.nextdns.io/dns-query"); // DNS-over-HTTPS server (NextDNS for enhanced privacy)
user_pref("network.trr.confirmationNS", "skip");             // Skip NS record checks
user_pref("network.trr.disable_ECS", true);                  // Disable ECS (Client Subnet) in DoH queries
user_pref("network.trr.strict_native_fallback", false);       // Do not use system DNS as fallback
user_pref("dom.security.https_only_mode", true);             // Enable HTTPS-only mode by default
user_pref("dom.security.https_only_mode_ever_enabled", true); // Allow user to enable HTTPS-only mode
user_pref("security.ssl.require_safe_negotiation", true);     // Require secure SSL connections
user_pref("network.http.referer.trimmingPolicy", 2);         // Send only basic referrer
user_pref("network.IDN_show_punycode", true);                // Show IDN domains as punycode (phishing protection)
user_pref("network.http.referer.XOriginPolicy", 2);          // Restrict referrer to same origin
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);  // Trim referrer for cross-origin requests

// ════════════════════════════════════════════════
// 🍪 COOKIE BALANCE (PREVENT LOGOUTS)
// ════════════════════════════════════════════════
user_pref("network.cookie.cookieBehavior", 1);                // Allow cookies only from the current site (block third-party)
user_pref("privacy.firstparty.isolate", false);               // Disable FPI (prevents logouts)
user_pref("privacy.clearOnShutdown.cookies", false);          // Do not clear cookies on shutdown (preserves logins)

// ════════════════════════════════════════════════
// 🚫 OTHER POTENTIALLY RISKY FEATURES
// ════════════════════════════════════════════════
user_pref("dom.battery.enabled", false);                     // Disable Battery API (used for tracking)
user_pref("dom.push.enabled", false);                        // Disable push notifications
user_pref("permissions.default.desktop-notification", 2);    // Block pop-up notifications
user_pref("media.eme.enabled", false);                      // Disable DRM (e.g., Netflix may not work)
user_pref("dom.gamepad.enabled", false);                    // Disable Gamepad API
user_pref("dom.vr.enabled", false);                         // Disable VR API
user_pref("dom.netinfo.enabled", false);                    // Disable Network Information API
user_pref("dom.telephony.enabled", false);                  // Disable Telephony API
user_pref("dom.serviceWorkers.enabled", false);              // Disable Service Workers (can be used for tracking)

// ════════════════════════════════════════════════
// 🎥 MEDIA
// ════════════════════════════════════════════════
user_pref("full-screen-api.transition-duration.enter", "0 0"); // Remove animation when entering fullscreen
user_pref("full-screen-api.transition-duration.leave", "0");   // Remove animation when exiting fullscreen (instant transition)
user_pref("full-screen-api.warning.timeout", 0);              // Disable delay and "Press ESC to exit" warning

// ════════════════════════════════════════════════
// 🔄 UPDATE MANAGEMENT
// ════════════════════════════════════════════════
user_pref("app.update.auto", false);                        // Disable automatic updates (update manually)
user_pref("app.update.background.enabled", false);           // Disable background updates
user_pref("app.update.url", "");                            // Remove update check URL

// ════════════════════════════════════════════════
// 🛠 DISABLE SYNCHRONIZATION
// ════════════════════════════════════════════════
user_pref("services.sync.engine.addresses", false);          // Disable address synchronization
user_pref("services.sync.engine.creditcards", false);        // Disable credit card synchronization
user_pref("services.sync.engine.addons", false);             // Disable add-on synchronization
user_pref("services.sync.engine.bookmarks", false);          // Disable bookmark synchronization
user_pref("services.sync.engine.history", false);            // Disable history synchronization
user_pref("services.sync.engine.passwords", false);          // Disable password synchronization
user_pref("services.sync.engine.prefs", false);              // Disable preference synchronization
user_pref("services.sync.engine.tabs", false);               // Disable tab synchronization
user_pref("identity.fxaccounts.enabled", false);             // Completely disable Firefox Accounts

// ════════════════════════════════════════════════
// 🛡 ENHANCED TRACKER PROTECTION
// ════════════════════════════════════════════════
user_pref("browser.contentblocking.category", "strict");      // Enable strict tracker protection
user_pref("privacy.trackingprotection.enabled", true);        // Enable tracking protection (ETP)
user_pref("privacy.trackingprotection.socialtracking.enabled", true); // Block social media trackers
user_pref("privacy.socialtracking.block_cookies.enabled", true); // Block social tracker cookies
user_pref("privacy.partition.network_state", true);           // Isolate network states (cross-site tracking protection)

// ════════════════════════════════════════════════
// 📣 DISABLE NOTIFICATIONS AND CFR
// ════════════════════════════════════════════════
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // Disable "What's New" panel
user_pref("browser.cfr.enabled", false);                     // Disable Contextual Feature Recommender

// ════════════════════════════════════════════════
// ✅ DONE! CONFIG DESIGNED FOR MAXIMUM PRIVACY
// ════════════════════════════════════════════════

// ⚠️ NOTE 
// Some websites may function less optimally (e.g., videos, maps, logins).
// Adjust settings as needed. Test each new setting carefully!
