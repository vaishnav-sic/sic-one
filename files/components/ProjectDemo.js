import React from "react";
import BlockTitle from "./BlockTitle";

const CTAOne = () => {
  return (
    <section className="cta-one" id="speciality">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="10 Major Projects"
                titleText={`Explore and Master Essential Coding Projects`}
              />
              <div className="cta-one__text">
                <ul className="list-unstyled cta-one__list">
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Calculator:
                      </strong>
                    </span>
                    <span className="highlight">
                      Create a basic calculator that can perform operations like
                      addition, subtraction, multiplication, and division based
                      on user input.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>&nbsp;&nbsp;Simple
                        To-Do List:
                      </strong>
                    </span>
                    <span className="highlight">
                      Build a console-based to-do list application where users
                      can add tasks, mark them as completed, and view their
                      tasks.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Hangman Game:
                      </strong>
                    </span>
                    <span className="highlight">
                      Implement a simple text-based Hangman game. The computer
                      selects a word, and the user tries to guess it by
                      suggesting letters.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>Basic File
                        &nbsp;&nbsp;Manipulation:
                      </strong>
                    </span>
                    <span className="highlight">
                      Write a program that reads from and writes to text files.
                      For example, create a program that reads a file, counts
                      word occurrences, and writes the results to another file.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Temperature Converter:
                      </strong>
                    </span>
                    <span className="highlight">
                      Build a program that converts temperatures between Celsius
                      and Fahrenheit. Allow users to input a temperature and
                      choose the conversion type.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Guess the Word Game:
                      </strong>
                    </span>
                    <span className="highlight">
                      Create a game where the computer selects a random word,
                      and the user has to guess the word by inputting individual
                      letters.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Dice Rolling Simulator:
                      </strong>
                    </span>
                    <span className="highlight">
                      Simulate the rolling of dice. Allow the user to input the
                      number of dice and rolls, and display the results.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Palindrome Checker:
                      </strong>
                    </span>
                    <span className="highlight">
                      Write a program that checks if a given word or phrase is a
                      palindrome (reads the same backward as forward).
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Currency Converter:
                      </strong>
                    </span>{" "}
                    <span className="highlight">
                      Build a program that converts currency values. Allow users
                      to input an amount in one currency and convert it to
                      another currency using predefined exchange rates.
                    </span>
                  </li>
                  <li>
                    <span className="highlight">
                      <strong style={{ color: "red" }}>
                        <i className="fa fa-check-circle"></i>
                        &nbsp;&nbsp;Rock, Paper, Scissors Game:
                      </strong>
                    </span>
                    <span className="highlight">
                      Implement a text-based Rock, Paper, Scissors game. Users
                      input their choice, and the computer randomly selects its
                      choice, with the winner determined by the rules of the
                      game.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
