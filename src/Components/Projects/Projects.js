import React from 'react';
import gateway from '../../Images/gateway-revised.png';
import ecommerce from '../../Images/Ecommerce.png';
import hotelApp from '../../Images/hotel-app.png';
import guessingGame from '../../Images/guessing-game.png';
import responsiveNavBar from '../../Images/responsive-navbar.png';
import gitHubLocator from '../../Images/github-locator.png';
import toDoList from '../../Images/to-do-list.png';
import ticTacToe from '../../Images/tictactoe.png';
import pokemon from '../../Images/pokemon.png';
import weather from '../../Images/weather-app.png';
import mernExerciseTracker from '../../Images/mern-exercise-tracker.png';

const Projects = () => {
    return (
        <div>
            <h1 className="projects-header">My Projects</h1>
            <div className="container-projects">
                <div>
                    <img src={ecommerce} alt="Ecommerce project" />
                    <h2>Ecommerce Site</h2>
                    <p>My Ecommerce project completed in different phases throughout the Road to Hire program. Started as only HTML and CSS, imported into React.Js</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://josehecommerce.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/ecommerce-react"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={gateway} alt="gateway revised" />
                    <h2>Gateway Project</h2>
                    <p>This is my first project created by me for the admission into Road to Hire</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://gatewayprojectjoseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/gateway"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={hotelApp} alt="Hotel app" />
                    <h2>Hotel App</h2>
                    <p>Hotel app created in Road to Hire academy as a class. Personalized with our own style.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://hotel-app-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/Hotel-Jose-App"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={guessingGame} alt="Guessing game" />
                    <h2>Guessing game</h2>
                    <p>Guessing game app which uses speech recognition. Developed with Html, Css , and Javascript</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://speech-recognition-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/guessing-game-speech-recognition"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={responsiveNavBar} alt="Responsive Navbar" />
                    <h2>Responsive Navigation Bar</h2>
                    <p>A responsive navigation bar with in implemented hamburger menu.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://responsive-navbar-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/Responsive-Navbar"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={pokemon} alt="Pokemon app" />
                    <h2>Pokemon Inquirier App</h2>
                    <p>Pokemon app suing React Hooks</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://git-hub-cards-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/git-hub-cards"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={weather} alt="weather app" />
                    <h2>Weather App</h2>
                    <p>Weather App that checks weather in a city using React.Js</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://weather-react-appjoseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/weather-react-app"><button className="projects-btn">Github</button></a>
                    
                </div>
                <div>
                    <img src={gitHubLocator} alt="Github Locator" />
                    <h2>Github Page Locator App</h2>
                    <p>A react app that locates github profiles</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://git-hub-cards-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/git-hub-cards"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={toDoList} alt="To Do List" />
                    <h2>To-Do List</h2>
                    <p>React App crated to help remember your to do activities</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://to-do-list-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/to-do-list"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={ticTacToe} alt="Tic Tac Toe" />
                    <h2>Tic-Tac-Toe Game</h2>
                    <p>A fun React app creating a fun Tic-Tac-Toe game</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://tic-tac-toe-gamejose.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/tic-tac-toe-game"><button className="projects-btn">Github</button></a>
                </div>
                <div>
                    <img src={mernExerciseTracker} alt="Exercise Tracker" />
                    <h2>Exercise Tracker-MERN</h2>
                    <p>Exercise tracker app created using MERN (MongoDB, Express, React, and Node)</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://mern-exercise-tracker-app-joseh.netlify.app/"><button className="projects-btn">View</button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jjosee9/MERN-exercise-tracker-app"><button className="projects-btn">Github</button></a>
                </div>
            </div>
        </div>
    )
}
export default Projects 