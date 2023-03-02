# Use cases

This page is a collection of potentially interesting agent use cases. They apply to the agent irrespective of the platform (e.g. mobile phone or desktop) it is running on. Please note that for brevity we write "user", rather than "agent  user".

## Intrinsic

These use cases could be supported natively by the agent app and its associated browser extension. 

### Login

We called this section "login" yet the use cases here support a one click interaction that simultaneously creates a new account (if it doesn't already exist) and logs the user in. So it should be called something like signin/up.

#### OpenID

##### Use case #1: Connect-with-Mee (SIOPv2)

Allows the user to signin/up to websites and apps that support the OpenID Connect [SIOPv2](https://openid.net/specs/openid-connect-self-issued-v2-1_0.html) protocol standard. The user can signin/up without requiring a password, and without being tracked by third-parties (e.g. Google, Apple, Facebook, etc.).

**Single device scenario:** The user has an iOS device and is using a Mee-compatible app (or a Mee-compatible website within a mobile brower. The "Connect with Mee" button on the relying party site/app has a universal (deep) link to the agent app. If the user doesn't have an agent installed, they are automatically redirected to the App Store. 

**Cross-device scenario**: The user is using a desktop computer and in their browser clicks on a Mee-compatible website. When the user clicks on Connect-with-Mee they are brought to a QR code that they can scan. This code contains the same deep link mentioned above.

This use case is implemented in v1 of the agent.

##### Use case #2: OpenID prompt for account creation

There is a need, in some circumstances, for the client to explicitly signal to the OpenID Provider that the user desires to create a new account rather than authenticate an existing identity. See the [Initiating User Registration](https://openid.net/specs/openid-connect-prompt-create-1_0.html) specification.

### P2P Messaging

Allows the user to chat with other agent users peer-to-peer without having to trust or rely on centralized servers. 

### Global Privacy Control

Allows the agent user to automatically signal their intent that websites should not sell their data to third-parties using the [GPC](https://globalprivacycontrol.org) standard. 

### Third-party Cookie Deletion

Allows the user to choose to automatically delete third-party cookies from the user's browser. Requires Mee Browser Extension (MBX).

### Browser Privacy Assistant

Looks at the user's browser settings (e.g. Google location tracking, history), makes recommendations on settings changes to enhance privacy, and applies these changes. 

### Digital Wallet

#### Credit/Debit Card

#### Tickets/Boarding Passes

#### Travel/Loyalty Cards 

#### Cryptocurrency/NFTs

#### Driver's Licenses

#### Digital ID Cards

##### Use case #1

Scenario:

- A business entity (issuer) in Japan that today makes plastic employer-issued id cards would like to become digital and issue them as VCs into a wallet
- The employer business entity (verifier) wants to allow the employee to login to enterprise systems using this VC
- A newspaper entity (another verifier) wishes to rely on this same employee id VC to authorize access to certain pages of a newspaper site with news related to the employer entity OR if there is a corporate subscription, in which case all the pages will be available

To implement this the agent could support:

- SD-JWT-based VC issuance, according to OpenID VC Issuance spec. 

- SD-JWT-based VC presentation according to OpenID VC presentation spec. 

- Ability to store VCs and select etc. with a friendly UI

#### Digital Car and Room Keys

#### PassKeys

#### Password Manager

Allows the user to:

- Create and manage strong passwords
- Autofill passwords on any browser
- Sync passwords across their devices
- Grant/delegate access to other agent users to some/all passwords
- Remembers and highlights the last login method used on a given site. 

### Form Filler

Allows the user to automatically fill in forms in browsers using data managed by the agent across the user's devices. 

### Customer Defined Audience (CDA) Generation

Operating in the background, the agent collects data about the user from first-party apps/sites and uses it to continuously synthesize and update the user's Customer Defined Audience (CDA) advertising profile. The user can view it and delete fields not of interest. 

This CDA profile can be shared with compatible websites to enable them to earn revenues from advertising while increasing the user's privacy compared to existing solutions that rely on third-party cookies and other forms of tracking and that rely on massive databases of user advertising profiles assemble and managed by third-party adtech firms. 

### Browser History

Allows the user's web browsing history (outside of Incognito mode) to be collected in the agent. Requires MBX.

### Search History

Allows the user's search history (outside of Incognito mode) to be collected in the agent. Requres MBX.

## Extrinsic - Existing apps/sites

These use cases can be offered by apps/sites that integrate with the agent via Connect-with-Mee.

### Login

User can login or create an account with one tap (after agent install). User is not tracked by identity provider (e.g. Google, Facebook, Apple, etc.). This can enhance the app/site's brand reputation for respecting user privacy 

### Reduced Form Filling

If the app/site needs attributes about a user, they request it directly from the agent. If the agent has received this same request from another app/site, it asks the user's consent to return the same value. 

### Privacy-respecting personal data management

Allows the user to exercise their data rights promised in privacy regulations: the right to access, correction and deletion. Note: further user data protections are provided by the HIL that the app/site provider must agree to.

### Zero-party data

The app/site can query the agent for data and if the user consents to share it, they gain access to user-curated "zero-party" data.

### Higher ad revenues

The app/site can request the user's Customer Defined Audience data and use its to increase revenues from advertising.

## Extrinsic - New apps/sites

These are hypothetical use cases that could be developed by new Mee-compatible apps/sites.

### Auto-updating Contacts

Allows the user to stay in contact with friends, family and colleagues by everyone always having up-to-date contact information. Allows the user to:

- Populates their own contact info (either directly, or through integration with the user's existing contact management app/service (see below))
- Publish their contact information as part of a connection to an other user's agent
- Subscribe to the contact info of another user
- Integrates with existing contact management apps and services, allowing the user to continue using them, with the syncing happending in the background. For example the user could continue to use Apple's Contacts app on their Macbook or iPhone - contact info of other's that the user is subscribing to are automatically updated and any change made to the user's contact information is automatically propagated to subscribers.

### Delete My Data

Allows the user to exercise their rights and request that their data be deleted by digital service providers. Implementation requires a third-party organization to contact sites on your behalf. Similar to [Permission Slip](https://www.permissionslipcr.com/) this app would store the results in the user's agent.

### Meta Identity Management

These "meta" use cases manage the user's identity across two or more external apps, sites or systems using a variety of protocols.

#### Meta-Social Networking

Allows the user to analyze how they are connected to others across social networks with a main goal of suggesting missing links. For example if noticed that the user has contact information for a person but isn't linked to them on LinkedIn, it suggests (and could automate) adding a LinkedIn connection.

#### Meta-Account Management

Allows the user to syncronize and update the information that sites/apps have about them. The agent UI would allow the user to create personas to group together connections with apps/sites/others to which the user wishes to expose a relatively consistent set of information. The agent would review what information was stored in the contexts of these connections and personas. It would allow the user to see inconsistencies and, if desired, to correct them. For example there could be a typo in the  user's email address at a particular site, or an old physical address that the user hadn't updated. 

##### Use case #1

Allows the user to syncronize information that sites/apps have about them using app/site-specific APIs:

- [Google Account](https://myaccount.google.com) - Google-specific API
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api) - Facebook-specific API
- [Twitter Accounts and users](https://help.twitter.com/en/rules-and-policies/twitter-api#:~:text=Our%20API%20platform%20provides%20broad,have%20authorized%20to%20do%20so.) - Twitter-specific API to manage an account's profile and settings

##### Use case #2

Allows the user to syncronize information that sites/apps have about them using MeeTalk. 

#### Meta-Calendar Management

Integrate the user's calendars on multiple systems. Allow others to create appointments according to your availability. Similar to [Calendly](https://calendly.com). 

### Banking

Leverage APIs like the [UK Open Banking API](https://standards.openbanking.org.uk/api-specifications/latest/) to manage the user's banking data.

### Data Collection

Use cases involving (uni-directional) the user importing of their personal data into their agent.

#### Amazon

Allows the user to download their purchase history. 

#### Facebook

Allows the user to download their profile, posts, and images.

#### Google Takeout

Allows the user to download various data sets. Examples include:

- Arts & Culture - Favorites and galleries you've created on Google Arts & Culture
- Calendar
- Contacts
- Fit
- Google Photos
- YouTube and YouTube Music - Watch and search history, videos, comments and other content you've created on YouTube and YouTube Music

#### LinkedIn

Download connections and personal profile.

#### Twitter

Allows the user to download their Twitter followers. Similar to [Rolodex](https://rolodex.shovel.company/) except the data would be imported directly into their agent.

#### Health

Allows the user to download medical records. E.g. [BlueButton](https://bluebutton.cms.gov/)

#### GPS Location

Allows the user to collect their GPS location over time.







