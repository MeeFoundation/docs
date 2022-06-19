**Goal**: to reduce the friction of a first-time install in cases where no personal data is being stored (just a GUID used to login...and if the GUID changes (on re-install) there is no harm). We reduce friction to decrease install abandonment rates for new users. The scenario in mind is the user clicking Connect with Mee on a popular website (e.g., [nytimes.com](http://nytimes.com)), being redirected to the Mee download/install page, etc. and wanting to get the user back to the website as quickly as possible.

**Solution**: break the installation process into two phases. The second phase would only be triggered if/when the user was involved in a transaction that involved storing personal data. 

**Use Case 1: First time user clicks on "no data" Mee-compatible website (e.g. nytimes.com)**

*Preconditions*

- User is browsing using their desktop 
- User has an iPhone

*Flow*

- user clicks Connect with Mee on a website/app that only wants to sign in the user (no personal data storage)
- browser is redirected to [getmee.org/download](http://getmee.org/download)
- if user is on a desktop, they will have to switch to their phone & go to the App Store, find the "Mee" app
- user downloads/installs Mee app from the App Store
- user enters Secret Recovery Phrase [yes, I know, even if there is no data to "recover"]
- user is given the option to print this out [and told to share it with no one, etc]
- a "[nytimes.com](http://nytimes.com)" context is created containing an a nytimes-specific ID
- user goes back to the [getmee.org/download](http://getmee.org/download) page 
- ?? do they click "return to [nytimes.com](http://nytimes.com)" button?? and they signed in?
- User is now a "phase 1" user



**Use Case 2: Phase 1 user clicks on a Mee-compatible website that wants to read/write data**

*Preconditions*

- User is browsing on thier iPhone
- User is a phase 1 user [has iphone, has completed phase 1 of installation on it]

*Flow*

- User clicks on Connect with Mee on a website that wants to read/write data using iPhone
- Mee App starts up
- It tells the user that this website wishes to read/write data to/from the Mee app and that before this can be done the Mee app's personal database needs to secured. 
- We follow the UI flow we've already designed that walks the user through saving 5 fragments of their Secret Recovery Phrase





