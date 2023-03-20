# Identity Agent

## End-user perspective

An *identity agent* is an app that gives the user more control (power) over their own personal information as they interact with websites, mobile apps, and other user's agents. It does this through a combination of technical and legal mechanisms.

**Privacy and Autonomy**. The agent runs on the user's edge devices (mobile phone, laptop, etc.) where it holds, entirely under the user's control, a local, private database of the user's personal information. When an app/site wants to know something about the user, the agent shares as much or as little as the user chooses. If an app/site signs the Mee Human Information License and thereby becomes "Mee-certified", the legal entity behind that app/site becomes obligated to (a) require explicit consent for collection, processing, storage and sharing of the users data and (b) must implement APIs to exercise the user's rights to access, correct and delete the user's personal information. We envision that someday agents could provide ad profiles to Mee-certified publisher websites that are supported by interest-based advertising while eliminating the need for surveillance by third-parties.

**Convenience**. Although the agent is an interactive application, it operates in the background most of the time. Always working soley in the user's interest, it collects information from sites that already hold their data, and shares it with other sites that need it. Our vision is that that the user *never has to repeat themself* (nor remember passwords!) as they move from app to app and site to site across the internet.

Here are a few examples. If a site wanted to know the user's email address it might ask for it in a web form. In this case the agent would use it's form-filler "protocol" to fill in the value. If the site supports password-less sign-in (e.g. using OpenID Connect) the agent acts as the identity provider. If a site needed a digital driver's license credential, the agent acts as a digital wallet and presents this credential that it had presumably downloaded earlier from an issuing site. In these different examples, different protocols for information sharing are required, and in the interest of convenience, the agent should support all of them.

## Self and contexts

The agent represents both the user's *selfness* and *whonesses* (see [Concepts](Concepts.md) for details about these two concepts).

The selfness of the user is held in a data container called the *self*. The contents of the self are holistic and therefore quite sensitive. For this reason they would normally not be shared in a direct or comprehensive form with others. The user's self is the point of integration across contexts each of which may be from differing identity systems. 

Each context is represented by a *context* data container. A directed *correlation* link points from an entity in the self to the entities representing the user in each context. To ensure privacy only the user knows that each of these separate contexts contain representations of them. Each context represents an interaction via some communications protocol with an external app, website or agent. 

We can illustrate these concepts with a simple example. A user might play a game on a gaming site using the id DevilSpawn666, while communicating on Twitter as @alicewalker and subscribing to the New York Times as alice.walker@gmail.com. Here's a simplified view of how this is represented:

![self_and_contexts_example](./images/example1.png)

## Functionality

Here is an overview of the long-term, planned functionality of the agent version 1 and 2:

![agent-cake-architectural-pov](./images/agent-functionality.png)

**Protocols**

- SD JWT=based VC presentation
- SD JWT=based VC issuance
- PassKeys (WebAuthn)
- OpenID SIOPv2
- Connect-with-Mee: a variant on OpenID SIOP that uses a universal link to the agent

**UI Features**

- **VC Wallet:** import, store, manage, and present Verifiable Credentials (VCs). Note: the [OWF conceptual architecture](https://github.com/openwallet-foundation/architecture-task-force/blob/main/docs/architecture/conceptual-architecture.md) adds Burn, Receive, Send, Transfer, Refund, Purchase, Withdrawal, Deposit
- **Recognize** user (e.g. using facial recognition, etc.)
- **Consent** to share required/optional data with a service provider
- **Edit** data in self-asserted contexts
- **Chat**: Person-to-person and agent-to-person messaging
- **View** data in contexts
- **Delete** **connection**: delete all data associated with this set of contexts
- **Request** access to a context managed by others
- **Grant** access to a (local or remote) data context managed by the user
- **Restore**: recover all data using SRP and backups
- **Backup** local contexts
- **Sync** contexts across user's devices

**Components**

- **Authorization Server**: GNAP AS
- **Replication**: auto merge of transactions
- **Messaging**: agent-to-agent and agent-to-provider
- **Storage**: local context data storage
  - Data is stored according to shared or app-specific schema. In some contexts this local data is authoritative whereas in other cases it is a copy of externally managed context data.  

**APIs**

As a convenience for local app developers, these APIs are provided:

- **KERI** DID support functions
- **Encryption:** key pair generation and signing services

## Kinds of Information

**Human information:**

Data co-generated with providers or sensed

- Consents
- Interests
- Medical records
- Heart rate
- Friends
- Affiliations
- Income
- Location
- Marital status
- ...

**Digital objects:**

Types of objects often associated with digital wallets:

- Identity credentials: VCs, Mobile ID
- Financial Instruments: Credit Card, Debit Card, Loyalty Points
- Digital Assets: Fungible Tokens, Non-Fungible Tokens
- Digital Keys: Hotel Keys, Automobile Keys
- Cryptographic Keys: Key Share
- Tickets: Event Ticket, Transit Ticket, Plane Ticket

#
[<p><img src="images/edit.svg" style="width: 15px;margin-right: 6px;text-color: #4F868E;" alt="Edit Page" />Edit this page</p>](https://github.com/MeeProject/docs/edit/develop/src/Mee_agent.md)
