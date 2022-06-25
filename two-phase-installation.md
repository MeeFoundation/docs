**Goal**: to reduce the friction of a first-time install in cases where no personal data is being stored (just a GUID used to login...and if the GUID changes (on re-install) there is no harm). We reduce friction to decrease install abandonment rates for new users. The scenario in mind is the user clicking Connect with Mee on a popular website (e.g., [nytimes.com](http://nytimes.com)), being redirected to the Mee download/install page, etc. and wanting to get the user back to the website as quickly as possible.

**Solution**: break the installation process into two phases. The second phase would only be triggered if/when the user was involved in a transaction that involved storing personal data. 

**Use Case 1: First time user clicks on "no data" Mee-compatible website (e.g. nytimes.com)**

*Preconditions*

- User is browsing using their desktop 
- User has an iPhone

*Flow*

- user clicks Connect with Mee on a website (e.g. nytimes.com) that only wants to sign in the user (no personal data storage)
- browser is redirected to [getmee.org/download](http://getmee.org/download)
- user learns about Mee and decides they want to install it. They read where to go on the iPhone app store, etc.
- user picks up their phone and go to the App Store, find the "Mee" app
- user downloads/installs Mee app from the App Store onto their phone
- Mee app starts up
  - a progress bar appears...
  - a "[nytimes.com](http://nytimes.com)" context is created containing an a nytimes-specific ID (probably a pairwise DID)
  - a login token is sent from the phone to either (a) a proxy service or (b) ?? FastFed implementation on the website??
  - ...done. User is told to go back to the website

- user sees that they are signed in on website!
- User is now a "phase 1" user



**Use Case 2: Phase 1 user clicks on a Mee-compatible website that wants to read/write data**

*Preconditions*

- User is browsing on their iPhone
- User is a phase 1 user [has iphone, has completed phase 1 of installation on it]

*Flow*

- User clicks on Connect with Mee on a website that wants to read/write data using iPhone
- Mee App starts up
- It tells the user that this website wishes to read/write data to/from the Mee app and that before this can be done the Mee app's personal database needs to secured. 
- We follow the UI flow we've already designed that walks the user through saving 5 fragments of their Secret Recovery Phrase





