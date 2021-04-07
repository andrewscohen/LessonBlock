<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/andrewscohen/lessonblock">
    <img src="https://user-images.githubusercontent.com/67562159/113812408-0ef98e80-973c-11eb-8ddc-04c330c1ed06.png" alt="LessonBlock Homepage">
  </a>

  <h3 align="center">LessonBlock</h3>

  <p align="center">
    <a href="https://github.com/andrewscohen/lessonblock/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://lessonblock.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/andrewscohen/lessonblock/issues">Report Bug</a>
    ·
    <a href="https://github.com/andrewscohen/lessonblock/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
LessonBlock is an EdTech platform inspired by Khan Academy that allows instructors to create new video courses and students to enroll in those course.

### Built With
- React.js
- Redux
- JavaScript
- Python
- Flask
- SQLAlchemy
- Alembic
- PostgreSQL
- TailwindCSS


<!-- GETTING STARTED -->
## Getting Started

To get started follow the following steps

### Prerequisites
- PostgreSQL
- Pipenv with Python v3.8
- Node.js

### Installation

1. `git clone` this repo
2. `cd` into the local repo
3. Run `pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt`
4. Create your own `.env` file based on the provided `.env.example`.
5. Create a user and database in your PostgreSQL that matches your `.env` configuration
6. In the first terminal, run `pipenv shell` to activate the Pipenv environment.
7. Run `flask db upgrade` and then `flask seed all` to apply migrations and seed data to your database.
8. Open another terminal window and `cd` into the local repo, then `cd` into react-app
9. Run `npm install`
10. In your terminal running pipenv shell, run `flask run`.
11. In your terminal in the react-app, run `npm start`.
12. Your app should open in your default browser.
13. If you are planning on developing, please make a fork and create pull requests as necessary.


<!-- USAGE EXAMPLES -->
## Usage

<!-- ROADMAP -->
## Roadmap

Checkout The Planning At The [Wiki](https://github.com/andrewscohen/lessonblock/wiki) Section

<!-- CONTACT -->
## Connect with Me
<p align="left">
<a href="https://linkedin.com/in/mrandrewcohen" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="mrandrewcohen" height="30" width="40" /></a>
<a href="https://fb.com/andrew.cohen1" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="andrew.cohen1" height="30" width="40" /></a>
<a href="mailto:andrewcohen14@gmail.com" rel="noopener noreferrer" target="_blank" title="Andrew's Email."><img align="center" src="https://simpleicons.org/icons/gmail.svg" alt="andrew.cohen1" height="30" width="40" /></a>
</p>
