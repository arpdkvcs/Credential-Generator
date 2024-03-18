<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1 align="center">Credential Generator (.csv)</h1>

  <p align="center">
    Generates .csv files with USERNAME / PASSWORD according to user setup
    <br />
    <a href="https://github.com/arpdkvcs/Credential-Generator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/arpdkvcs/Credential-Generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/arpdkvcs/Credential-Generator/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is one of the pet projects of mine. The app generates `.csv` files with `USERNAME` and `PASSWORD` values according to specification that the user set.

I created this simple app to generate registration/login credentials for my load/performance [testing pet project][testing-pet-project]. Feel free to use it. Report bugs or request features since I am positive it is not perfect.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![node.js][node.js]][node.js-url] <br>
[![javascript][javascript]][javascript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites
* This repository
* Node.js ([install][node.js-url])

### Installation
1. Install [Node.js][node.js-url] if you haven't had already installed on your OS
2. In terminal (or PowerShell, etc.) navigate to the folder where you want to clone the repository, then run:
```sh
  git clone https://github.com/arpdkvcs/Credential-Generator.git
```
3. Stay in the terminal and open the the cloned repository's folder:
```sh
  cd Credential-Generator
```
4. Install dependencies by running the following command:
```sh
  npm install -y
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
1. In the repository's folder run:
```sh
  node app.js
```
2. Go through the interactive setup process as it fits your requirements. You have the option to set the following attributes of the generated `.csv` file and it's contents:
    * Set the number of credentials to be generated. As it is from 1 to 1 million (at a million records the generated file is almost 50 MB). *If you want more, you have to change the upper limit in the `/modules/userInput.js` (in the `getNumberOfCredentials` function the `max`'s value)*.
    * Set the `username` prefix. By default it is `TestUser`. The prefix is going to be appended with a suffix, like `TestUser1`, `TestUser2` etc.
    * Set the length of the `password` between 8 and 32. *If you want to change these limits, you have to change them (`minLength`, `maxLength`) in the `/modules/userInput.js` (function `getPasswordLength`)*
    * When all the previous steps set, then you are going to be asked to name the file. By default it will be called `credentials.csv`. If you want different name you only need to set the part that is before the file extension (`.csv`)
    * If everything goes well the generated file is going to be saved in the `generated_csv_files` folder. If you want to use it somewhere else than point to this location or copy the the file and place anywhere you please

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Árpád Kovács<br>
[![LinkedIn][linkedin-shield]][linkedin-Árpád]<br>

Project Link: [https://github.com/arpdkvcs/Credential-Generator](https://github.com/arpdkvcs/Credential-Generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/arpdkvcs/Credential-Generator?style=for-the-badge
[contributors-url]: https://github.com/arpdkvcs/Credential-Generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/arpdkvcs/Credential-Generator?style=for-the-badge
[forks-url]: https://github.com/arpdkvcs/Credential-Generator/forks
[stars-shield]: https://img.shields.io/github/stars/arpdkvcs/Credential-Generator?style=for-the-badge
[stars-url]: https://github.com/arpdkvcs/Credential-Generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/arpdkvcs/Credential-Generator?style=for-the-badge
[issues-url]: https://github.com/arpdkvcs/Credential-Generator/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-Árpád]: https://www.linkedin.com/in/arpad-kovacs/
[node.js]: https://img.shields.io/badge/node.js-777777.svg?style=for-the-badge&logo=node.js&logoColor=green
[node.js-url]: https://www.nodejs.org/
[javascript]: https://img.shields.io/badge/javascript-777777.svg?style=for-the-badge&logo=javascript&logoColor=yellow
[javascript-url]: https://www.javascript.com/
[testing-pet-project]: https://github.com/arpdkvcs/stackoverflow-load-test
