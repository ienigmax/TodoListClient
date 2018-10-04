# todo-list-client

##About

This is a tasks managing application, you can add, remove, edit and mark a task as finished. The app is responsive to size changes
and can be freely used on mobile phones as well as all screen sizes. 
The backend API server can be found here: https://github.com/ienigmax/TodoListServer

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) LTS, version 6 or 8
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Installation

* `git clone <repository-url>` this repository
* `cd todo-list-client`
* `npm install`

## Running / Development

* `ember serve` or `ember serve --port xxxx` 
* `npm start`
* `pm2 start npm -- start` if pm2 manager is installed on the system, then `pm2 log` to see the output

## Task Application (EmberJS):

*	Clone the repository
*	Run `npm install`
*	Run `npm install -g ember-cli`
*	Locate the file `constatns.js`  by default the host is set to http://localhost:8012. Change to the relevant one if needed (host of the API server)
*	Launch `ember serve` (in case you want to run the app in the background, consider using PM2 or forever)
* Visit your app at [http://localhost:4200](http://localhost:4200).

## How To Use

_Note: If on mobile, you might need to scroll down to see the add / edit forms on some devices_

#### Add task
The interface is quite simple, to add a task, click on '+' sign - this will toggle an "add task" form. inside the form there are 2 input fields:

#### Title - the header of the task, for example: "meeting with John"
Content - the description or the body of the task, for example "the meeting will take place at... etc."
Remove task
To remove a task, click on the 'X' sign in the right side of the task element.

#### Toggle finished
You can either mark a task as "finished" or "unfinished". To achieve that, click on the checkbox in the lift side of the task element

#### Edit task
To edit a task, click on title or the header of the task - this will toggle an "edit task" form. The input element will be populated with the title and the content. You can click on "reset" button, it will clean the input fields.

