# Roadmap

This page describes our near term roadmap. Each release includes a set of interrelated components.

## **v1 February 2023** 

### Connect-with-Mee SDK

A Javascript SDK to enable developers to add a Connect-with-Mee login support to their websites. This SDK also supports standard OpenID SIOP.

### demo.mee.foundation

This is a mee-compatible demo/test website. 

- Supports Connect-with-Mee and OpenID SIOP login (with QR code)
- Supports all SIOP-defined attributes

### NYTimes iOS test app

This is a fake New York times test iOS app available through TestFlight.

### Identity agent

iOS app that will be published to the AppStore shortly after this release is completed.

**Protocols**

- Connect-with-mee login from iOS app, from a desktop browser (via QR code) or from a mobile browser

**Functionality**

- Uses iOS FaceID for user authentication

**Issues and bugs**

- App has no built-in backup capability. We rely on the user backing up their iOS device.
- If the user deletes the app and reinstalls it (intentionally or because they lose their device and its backup) then the user will end up login back into a site/app with a new and different OpenID identifier.
- All providers are displayed in the app as being Mee-certified, not Mee-compatible (because we’ve not implemented our provider “trust registry” webservice
- Missing HIL
- App is not OpenID Connect certified

### registry.mee.foundation

This is a Mee-hosted website listing Mee-certified service provider's app(s)/site(s).

- Home page lists Mee-certified service providers. Fields include: 
  - domain - text string (e.g. nytimes.com)
  - TBD
- Webservice API
  - TBD: need to document



## **v2 April 18th, 2023 (IIW36)**

### Connect-with-Mee SDK

A Javascript SDK to enable developers to add a Connect-with-Mee login support to their websites. This SDK also supports standard OpenID SIOP.

### demo.mee.foundation

This is a mee-compatible demo/test website. 

Functionality

- Support for a flow that starts with login and then as a second step supports a subscription that requires email address and a payment card.

### NYTimes iOS test app

This is a fake New York times test iOS app available through TestFlight.

### Identity agent

Non-functional

- Add support for Android devices
- Source code and docs published on GitHub
- Browser plugin for Chrome and Mobile Safari

Functionality

* Sync data across user's devices
* Backup local data 
* Restore from backup
* Person-to-person (agent-to-agent) chat

### registry.mee.foundation

This is a Mee-hosted website listing Mee-certified service provider's app(s)/site(s).

#
[<p><img src="images/edit.svg" style="width: 15px;margin-right: 6px;text-color: #4F868E;" alt="Edit Page" />Edit this page</p>](https://github.com/MeeProject/docs/edit/develop/src/Roadmap.md)
