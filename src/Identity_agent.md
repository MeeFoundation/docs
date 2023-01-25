# Identity Agent

### End-user perspective

The Mee *identity agent* (a term we invented) is an app that gives you more control over your personal data as you interact with digital "others" through their mobile apps and websites or other agents. It maintains a local private copy of your digital identies across connections with these other parties. It respects your privacy when you are interacting with Mee-certified apps/sites--apps/sites offered by providers who have licensed your personal information under to the terms of the Mee Human Information License. 

Although the agent is an interactive application, it operates mostly in the background, sharing and managing personal information about the user with Mee-compatible apps according to the user's sharing preferences and the terms of the Human Information License. This shared information can be used for many purposes. These include: simplifying sign-in/sign-up, providing contact information, payment methods, as well as sharing preferences, interests, etc. to provide personalization, recommendations, and tailored offers. 

### Self and contexts

The agent represents both the user's *selfness* and *whonesses* (see [Concepts](Concepts.md) for details about these two concepts)

The selfness of the user is held in a data container called the *self*. The contents of the self are holistic and therefore quite sensitive. For this reason they would normally not be shared in a direct or comprehensive form with others. The user's self is the point of integration across contexts each of which may be from differing identity systems. 

Each context is represented by a *context* data container. A directed *correlation* link points from an entity in the self to the entities representing the user in each context. To ensure privacy only the user knows that each of these separate contexts contain representations of them. Each context represents an interaction via some communications protocol with an external app, website or agent. 

We can illustrate these concepts with a simple example. A user might play a game on a gaming site using the id DevilSpawn666, while communicating on Twitter as @alicewalker and subscribing to the New York Times as alice.walker@gmail.com. Here's a simplified view of how this is represented:

![self_and_contexts_example](./images/example1.png)

### Functionality

Here is an overview of the long-term, planned functionality of the agent version 1 and 2:

![agent-cake-architectural-pov](./images/agent-functionality.png)

**Protocols**

- Credential Handler API (CHAPI)
- PassKeys (WebAuthn)
- OpenID SIOP
- Connect-with-Mee: a variant on OpenID SIOP that uses a universal link to the Mee agent

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

### Kinds of Information

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
