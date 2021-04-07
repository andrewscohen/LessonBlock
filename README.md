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

[![Product Name Screen Shot][product-screenshot]](https://example.com)
Implemented a user friendly platform to review and recommend books to people who enjoy books so bad, they are “good”.


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

- Demo Login
<img src="https://raw.githubusercontent.com/andrewscohen/2020.11.badReads/main/public/BadReads-DemoLogin.gif" /> 

- Filtering Books by Genre
<img src="https://github.com/andrewscohen/2020.11.badReads/blob/main/public/BadReads-HomeGenreFilter.gif?raw=true" />

- Be able to set Rating, Review and Status of the book (Ex: Reading, Want to Read and Read)
<img src="https://github.com/andrewscohen/2020.11.badReads/blob/main/public/BadReads-RatingReview.gif?raw=true" />

- Filter Own Bookshelf by book status
<img src="https://github.com/andrewscohen/2020.11.badReads/blob/main/public/BadReads-BookshelfFilter.gif?raw=true" />


<!-- ROADMAP -->
## Roadmap

Checkout The Planning At The [Wiki](https://github.com/andrewscohen/2020.11.badReads/wiki) Section




<!-- CONTACT -->
## Contact

Andrew Cohen - [LinkedIn](https://www.linkedin.com/in/mrandrewcohen/) [Github](https://github.com/andrewscohen)
---
Ramses Romero - [LinkedIn](https://www.linkedin.com/in/ramses-romero-jr/) [Github](https://github.com/RamsesRomeroJr)
---
River Cha - [LinkedIn](https://www.linkedin.com/in/river-cha-432337120/) [Github](https://github.com/cosmoscha)
---
William Vincent - [LinkedIn](https://www.linkedin.com/in/william-vincent-5658851ba/) [Github](https://github.com/WJVincent)
---

Project Link: [Bad Reads](https://github.com/andrewscohen/2020.11.badReads)
