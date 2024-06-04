# Noteworthy: A Notetaking-app created with React

> Ready to embark on a note-taking journey? Create `noteworthy notes` with `Noteworthy`. Note is shared among all the users. However, only the note's creator can edit and delete it.

> I am recreating this app in React by using the same backend

### Recent updates

- Note creation works. It's also responsive
- You can see notes by all users in home page
- In `My notes` page, notes created by currently logged in user are shown
- working on Note Card styling 
- Hide private notes if it doesn't belong to authenticated user
- add context menu to edit, delete and turn note private
- Note can now be deleted and turn private

### Currently working on

- working on adding a modal for edit mode

### Next
- I also want people to be able to open the note when clicked on the cardContent. Edit Modal will be reutilized here. Note should be read only in the modal if it doesn't belong to the authenticated user.

### Tools used

> Frontend

- `React` used as a Frontend Framework
- `TypeScript`
- `Material UI (MUI5)` used as CSS framework
- `CSS`
- `React router` used for routing
- `Redux Toolkit` used for managing global states
- `Axios` using Axios instead of fetch in this (React) version
- `Material Icons` used for icons in this version instead of font-awesome

> Backend

- `Node.js`
- `Express.js`
- `MongoDB (cloud)`

> Testing: it will be also added later

- `Cypress` for end to end testing

### Responsive Design

- The website will be made responsive

### Functionalities added

- Backend added and routes were tested using `postman`
- Requires a login to access
- It allows for more than one user. Each user have a username and an individual password
- 404 page redirects user to home page
- The app allows the user to create and read notes
- Created notes are saved and retrieved on next visit
- It shows which user created a note
It allows only note's creator to delete it
- A note's creator is also allowed to make their note private which means other users can't see it

### Functionalities to be added

- It allows only note's creator to edit it
- Be accessible from a public url by deploying

### Links used

- [Adobe express](https://new.express.adobe.com/) used for creating logo
- [css-box-shadow-examples](https://getcssscan.com/css-box-shadow-examples) used for Box-shadow
- [Microsoft copilot](https://copilot.microsoft.com/) used to generate animated drawings
- [animista](https://animista.net/), CSS animations library, used for animations

### Opening/ Running the file

#### Backend

> `cd backend`

> `npm run dev` or `npm run start`

#### Frontend

> `cd frontend`

> `npm run dev`

#### Log in via these Accounts

You can log in using 3 different accounts to test the project:
| Username | Password |
|-----------------|-----------------|
| `Hermione` | `Hermione1` |
| `Ron` | `Ron1` |
| `Harry` | `Harry1` |

### Final Notes

> Even though the final design is my own, I took a lot of inspiration from [Google keep](https://keep.google.com/), [Dribbble](https://dribbble.com/) and [Facebook Posts](https://www.facebook.com/).
