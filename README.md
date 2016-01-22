# n'kisi

N'kisi (in-key-see) is a microblogging platform using React for composable view components, Flux for unidirectional data flow, React Router for routing, Skeleton in lieu of Bootstrap for responsive boilerplate CSS, and a custom stores implementation.  

The name comes from an African grey parrot, named N'kisi, that is thought to exhibit advanced English talking skills and other abilities.  N'kisi has a vocabulary of 950 words and can 'communicate' (as opposed to repeat).

Not ready for public consumption. Much left to do.

##Screenshot
![](/screenshots/login.png)

##Architecture
![](/diagrams/nkisi-architecture.png)
![](/diagrams/nkisi-data-flow.png)

##Installation
```shell
$ npm install
$ gulp
$ node server.js
```

##Constants

Uses a set of constants to hold our actions.

####Benefits:
- see a list of all actions in one place
- make it easier to debug if you mistype action names

####Naming Conventions and Definitions
- NIKISI: occurs when a user types a message and submits it on the frontend
- NKISIED: occurs when a message is saved on the backend
- GOT_NKISI: occurs when messages from other users come in
- GOT_CURRENT_USER: occurs when we get info about a logged in user
- GOT_USERS: occurs when we get a list of users from the server
- FOLLOW: occurs when a user follows another user
- UNFOLLOW: occurs when the follow has been saved on the backend
- UNFOLLOWED: occurs when the unfollow has been saved on the backend

##Actions

Instead of writing a function for each constant, we write one function to handle all.  If we add or remove constants later, we don't have to update our actions.

####Pseudo function names:
- nkisi
- nkisied
- gotNkisi
- gotCurrentUser
- gotUsers
- follow
- unfollow
- unfollowed

##Dispatcher

Logs dispatcher activity to the console upon receipt of new actions so we can be aware of the activity.

##Stores

Contains a list of methods that trigger change events.

####Methods:
- init
- set
- add
- all
- get
- addChangeListener
- removeChangeListener
- emitChange
- bind

####The Extend Method

Reason: when someone requires, they'll have an object with 
this method so they can create their own stores.

##The NkisiStore Object

Anything that should be specifically for the N'kisi store should go inside this object.

####Reasons:
- we want to override the default initilization function
- we want the store to listen to specific actions in our system
- we can do that through this.bind

Listen to and perform an action when new messages enter the system coming from our server on the backend.  Whenever a message that a user creates is sent to the server and saved, it will come back as constants.NKISIED.
