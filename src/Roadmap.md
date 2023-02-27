# Roadmap

This page describes our near term roadmap. Each release includes a set of interrelated components.

## **v1 February 2023** 

### Connect-with-Mee SDK

A Javascript SDK to enable developers to add a Connect-with-Mee login support to their websites. This SDK also supports standard OpenID SIOP.

### Identity agent app

iOS app that will be published to the App Store shortly after this release is completed.

**Functionality**

- Login to a website on iOS device (i.e. Mobile Safari) using Connect-with-Mee. No password is required and your login event is not tracked by a third-party (e.g. Apple, Google, Facebook, etc.) as is typically the case with traditional social login approaches.
- Uses iOS FaceID for user authentication

**Issues and bugs**

- No built-in backup capability. We rely on the user backing up their iOS device.
- If the user deletes the Mee app and reinstalls it (intentionally or because they lose their device and its backup) then the user will end up logging back into a site/app with a new/different OpenID identifier.
- Is not OpenID Connect certified by the [OpenID Foundation](https://openid.net/)

### Test website

[demo.mee.foundation](https://demo.mee.foundation) is a test site that:

- Supports Connect-with-Mee login
- Supports all OpenID Connect [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)
- Supports required/optional attributes

### Test iOS app

This app is a fake New York times test app available through TestFlight. Please send a TestFlight invitation at contact at mee.foundation. 


## **v2 April 18th 2023 (IIW36)**

V2 will be our first open source release. Code will be released under Apache 2.0. 

### Connect-with-Mee SDK

No updates.

### Identity agent app

Non-functional

- Add support for Android devices
- Source code and docs published on GitHub
- Browser plugin for Chrome and Mobile Safari (?)

Functionality

* Sync data across user's devices (?)
* Backup local data (?)
* Restore from backup (?)
* Person-to-person (agent-to-agent) chat (?)

### Test website

Functionality added to demo.mee.foundation:

- Support for a flow that starts with login and then as a second step supports a subscription that requires email address and a payment card.

### Test iOS app

No updates.

### Registry

A website [registry.mee.foundation](https://registry.mee.foundation) listing Mee-certified service provider's app(s)/site(s).

- Home page lists Mee-certified service providers. Fields include: 
  - domain - text string (e.g. nytimes.com)
  - ...
- Webservice API

## v3 July 2023

### Connect-with-Mee SDK

No updates.

### demo.mee.foundation

No updates.

### NYTimes iOS test app

No updates.

### Identity agent

Functionality

* Login with PassKeys (WebAuthn, FIDO)
* Import VC
* Manage VC
* Present VC

### registry.mee.foundation

No updates

#
[<p><img src="images/edit.svg" style="width: 15px;margin-right: 6px;text-color: #4F868E;" alt="Edit Page" />Edit this page</p>](https://github.com/MeeProject/docs/edit/develop/src/Roadmap.md)
