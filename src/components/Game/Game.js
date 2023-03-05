import "./Game.scss";
import { useState } from "react";

function Game() {

    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [buttonText, setButtonText] = useState("Submit");
    const [gameOver, setGameOver] = useState(false);
    const [outcomeText, setOutcomeText] = useState("");
    const [winnerText, setWinnerText] = useState("");

    function clickHandlerEarth() {
        setPlayerOne("🪨")
    }

    function clickHandlerWind() {
        setPlayerOne("📃");
    }
    function clickHandlerFire() {
        setPlayerOne("✂️");
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 3);
    }

    function checkElements(element, elementText) {
        let playerOneText;
        if (playerOne === "🪨") {
            playerOneText = "Rock"
        }
        if (playerOne === "📃") {
            playerOneText = "Paper"
        }
        if (playerOne === "✂️") {
            playerOneText = "Scissors"
        }
        if ((playerOne === "🪨" && element === "🪨")
            || (playerOne === "📃" && element === "📃")
            || (playerOne === "✂️" && element === "✂️")) {
            setOutcomeText(elementText + " vs " + playerOneText);
            setWinnerText("It's a tie.")
            return;
        }
        if ((playerOne === "🪨" && element === "📃")
            || (playerOne === "📃" && element === "✂️")
            || (playerOne === "✂️" && element === "🪨")) {
            setOutcomeText(elementText + " beats " + playerOneText)
            setWinnerText("You lost the battle!")
            return;
        }
        else {

            setOutcomeText(playerOneText + " beats " + elementText)
            setWinnerText("You won the battle!")
            return;
        }
    }

    function clickHandlerSubmit(event) {
        event.preventDefault();
        if (playerOne === "") {
            return;
        }
        let number = getRandomNumber();
        let elements = ["🪨", "📃", "✂️"];
        let elementsText = ["Rock", "Paper", "Scissors"];
        let element = elements[number];
        let elementText = elementsText[number];
        setPlayerTwo(element);
        checkElements(element, elementText);
        setGameOver(true);
        setButtonText("Play again?");
    }

    function clickHandlerPlayAgain(event) {
        event.preventDefault();
        setGameOver(false);
        setButtonText("Submit");
        setPlayerOne("");
        setPlayerTwo("")
    }

    return (
        <section className="game">
            <h1 className="game__heading">Rock, Paper, Scissors</h1>
            <div className="game__board">
                <div className="game__players">
                    <div className="game__player game__player--one">
                        <span className="game__element">{playerOne}</span>
                    </div>
                    <div className="game__player game__player--two">
                        <span className="game__element">{playerTwo}</span>
                    </div>
                </div>
                {gameOver &&
                    <div className="game__container">
                        <span className="game__outcome">{outcomeText}</span>
                        <span className="game__winner">{winnerText}</span>
                        <button className="game__button" onClick={clickHandlerPlayAgain}>{buttonText}</button>
                    </div>
                }
                {!gameOver &&
                    <div className="game__container">
                        <span className="game__subheading">Choose your item</span>
                        <div className="game__elements">
                            <span className="game__element game__choice" onClick={clickHandlerEarth}>🪨</span>
                            <span className="game__element game__choice" onClick={clickHandlerWind}>📃</span>
                            <span className="game__element game__choice" onClick={clickHandlerFire}>✂️</span>
                        </div>
                        <button className="game__button" onClick={clickHandlerSubmit}>{buttonText}</button>
                    </div>
                }
            </div>
        </section>

    )
}

export default Game;