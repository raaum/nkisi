/*
constants.js

Use a set of constants to hold our actions.

Benefits:
- see a list of all actions in one place
- make it easier to debug if you mistype action names
*/

module.exports = {
  NKISI:            'NKISI',
  NKISIED:          'NKISIED',
  GOT_NKISI:        'GOT_NKISI',
  GOT_CURRENT_USER: 'GOT_CURRENT_USER',
  GOT_USERS:        'GOT_USERS',
  FOLLOW:           'FOLLOW',
  UNFOLLOW:         'UNFOLLOW',
  UNFOLLOWED:       'UNFOLLOWED'
};

/*
Constants Naming Conventions and Definitions

- present tense occurs on front end
- past tense occurs on back end

NIKISI: occurs when a user types a message and submits it on the frontend

NKISIED: occurs when message is saved on backend

GOT_NKISI: when messages from other users come in

GOT_CURRENT_USER: getting information about currently logged in user

GOT_USERS: get a list of users from the server

FOLLOW: when a user follows another user

UNFOLLOW: when the follow has been saved on backend

UNFOLLOWED:  when the unfollow has been saved on backend
*/
