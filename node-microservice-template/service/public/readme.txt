#

<p align="center">
  <a href="https://www.admiral.com">
    <img src="https://www.admiral.com/themes/contrib/admiral-legacy-theme/assets/images/logo.svg" alt="Logo" width="450">
  </a>

  <h3 align="center">Node Microseervice Template</h3>
  <p align="center">
    <a href="https://pr-ghub.admiral.uk/Admiral/node-microservice-template"><strong>Explore the repository »</strong></a>
    <br />
    <br />
  </p>
</p>

## Overview

- [Built with](#🔎-Built-With)
- [Setup](#setup)
- [Quick Start](#quick-start)
- [Tools](#tools)
- [Git](#git-process)
- [Visual Studio Code](#code-editor)

## 🔎 Built With

This section should list any major frameworks that you built your project using.

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## Setup

## Prerequisites

1. Node 12+ (raw files can be found on [nexus](https://nexus3.bolt.admiral.uk/#browse/browse:build-binaries:org%2Fnodejs) - make sure the files are added to your [path](#adding-software-to-your-path) )
2. C: drive access
3. Git installed
4. Git access (you should have this automatically through your profile)

## Steps

1. Follow the admiral setup guide until you have added a SSH key [guide](https://confluence.admiral.uk:8443/display/IKB/How+to+clone+a+Git+Repository+from+Admiral%27s+GitHub+Enterprise+Server+-+pr-ghub.admiral.uk#HowtocloneaGitRepositoryfromAdmiral'sGitHubEnterpriseServer-pr-ghub.admiral.uk-Set-upGitBash)
2. Clone the repository using SSH by selecting `Clone or download` from the main repository page - (You can swap by pressing between HTTPS and SSH by using the `Use SSH` hyperlink)

3. Change directory to the cloned repository
4. Run `npm i`
5. Use the following command to set up different config values `export NODE_ENV=production` or `export DEBUG=app:startup`


### Optional

Additional plugins to deal with Open API [vscode-openapi](https://github.com/42Crunch/vscode-openapi)

#### Running the default application (quote engine)

Run `npm start` to start the default application.

#### Stopping the server

To stop the server the easiest way is to send a kill signal `SIGINT` using the `CTRL+C` shortcut key in the terminal that is running the server.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Tutorials Further help

[Article showing how to use Open API and Swagger](https://medium.com/wolox/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420)

[Interactive tutorial to understand Node](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=1s)

## Git process

We are currently using a modified git flow with pull requests. This section is intentionally light on detail until we have decided the git strategy going forward with CI/CD.

## Code editor

The recommended code editor is Visual Studio code and this will just highlight the basics.

### File searching / Command Pallete

Pressing `CTRL + p` will open the command window which default to QUICK OPEN. Typing in a file name here will search your currently open project for that file. For example pressing this short cut and typing in `proxy` will show the `proxy.conf.json` file described above making it easy to go to and edit. When in this mode entering `>` will instead turn to command mode and you will search for any command supported by vs code.

### Opening a terminal

Pressing `CTRL + '` will open a terminal in your current VSCODE session. When first running this it will offer you to change your terminal and i would recommend setting it to git bash although this is optional. It can be changed later with the settings options below

### Opening settings

Pressing `CTRL + ,` will open the setting window for VSCODE. I recommend changing the file auto save settings if you are used to auto saving.

