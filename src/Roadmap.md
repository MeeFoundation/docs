### Roadmap

*Note: Non-functional items are in italics below.*

**v0.1 - Nov-14 hard-coded IIW35 Demo (iOS only)** 

* Login with Connect-with-Mee (iOS mobile app/browser only) + NYT mobile app? 
* Recognize user (e.g. using facial recognition, etc.)
* SIOP?  -> Sasha will work on the interfaces and helper method that will allow us to integrate the demo shown in the call; support SIOP in 2-3 weeks before the demo. Username -> SIOP discovery -> return info about Mee auth endpoint and RP will use this auth endpoint to use Mee to auth user account. Domain (meeproject.org) is the endpoint to make a discovery request. Possibly to find 3d party RP to prove that it works properly. 

- Mee SDK

**v0.2 - Dec, 2022 Demo (iOS only)**

* *Rebuild the iOS hard-coded demo (to use a SQLite database+...)* 
* Users can subscribe for NYT using different options and upgrade (not only signin/signup) 
  * Attributes: email, credit card (4 fields)

**v1 - March, 2023 MVP (iOS only)** 

* *UI is data-driven*
* *Login with Connect-with-Mee, OpenID SIOP (mobile app/browser or desktop browser)*
* *Open-source code and docs published on github*
* *Docs in github also published to meeproject.org/docs*
* Store data in local contexts
* Restore data from context backups
* Backup local data contexts
* Login with PassKeys (WebAuthn, FIDO)? 
* No SQLite for MVP? -> TBD with Sasha

**v1.1 - April 18th, 2023 (IIW36):**

* *iOS and Android support*
* Login with PassKeys (WebAuthn, FIDO)? 

**v1.2 - ?, 2023**

* Social/other data backup and recovery

**v2 - ?, 2023**

* Verifiable Credential wallet
* Integrated P2P text messaging
* Migrate data from v1 format to v2 format
* Sync contexts across user’s devices (no replication possible with SQLite?)
* Replicate data to provider using Mee SDK
* Review some kinds of context data
* Request access to a context managed by others
* Grant access to a (local/remote) data context managed by the user

**v3 - October 2023**

* MacOS and Windows support
* Integrated & standalone password manager


#
[<p><img src="images/edit.svg" style="width: 15px;margin-right: 6px;text-color: #4F868E;" alt="Edit Page" />Edit this page</p>](https://github.com/MeeProject/docs/edit/develop/src/Roadmap.md)
