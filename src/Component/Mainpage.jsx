import "../App.css";
import React from "react";
import Output from "./Ouput";

class Mainpage extends React.Component {
  constructor() {
    super();
    this.state = {
      allques: [
        {
          question: "What temperature does water boil at?",
          optionA: "50 degrees Celcius",
          optionB: "25 degrees Celcius",
          optionC: "100 degrees Celcius",
          optionD: "150 degrees Celcius",
          answer: "100 degrees Celcius",
        },

        {
          question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
          optionA: "Wole Soyinka",
          optionB: "William Shakespeare",
          optionC: "Ngozi Chimamanda Adichie",
          optionD: "Dan Brown",
          answer: "William Shakespeare",
        },

        {
          question: "What did the crocodile swallow in Peter Pan?",
          optionA: "A Book",
          optionB: "A Computer",
          optionC: "A pair of shoes",
          optionD: "Alarm Clock",
          answer: "Alarm Clock",
        },

        {
          question: "Which is the only mammal that can’t jump?",
          optionA: "Dog",
          optionB: "Elephant",
          optionC: "Goat",
          optionD: "Lion",
          answer: "Elephant",
        },

        {
          question: "Who lived at 221B, Baker Street, London?",
          optionA: "Tony Stark",
          optionB: "Morgan Freeman",
          optionC: "Sherlock Holmes",
          optionD: "Samuel L. Jackson",
          answer: "Sherlock Holmes",
        },

        {
          question: "What colour is a panda?",
          optionA: "Green and Yellow",
          optionB: "Blue and Red",
          optionC: "Green and White",
          optionD: "Black and White",
          answer: "Black and White",
        },

        {
          question: "Where is the smallest bone in the human body?",
          optionA: "The Chest",
          optionB: "The Ear",
          optionC: "The Legs",
          optionD: "The Hands",
          answer: "The Ear",
        },

        {
          question: "What does the roman numeral C represent?",
          optionA: "100",
          optionB: "10",
          optionC: "10,000",
          optionD: "1,000,000",
          answer: "100",
        },

        {
          question: "What takes place in Hong Kong's Happy Valley?",
          optionA: "Chicken Wrestling",
          optionB: "Horse racing",
          optionC: "Street Racing",
          optionD: "Arm Wrestling",
          answer: "Horse racing",
        },

        {
          question: "Who painted the Mona Lisa?",
          optionA: "Alexander Graham Bell",
          optionB: "Sir Isaac Newton",
          optionC: "Leonardo Da Vinci",
          optionD: "Albert Einstein",
          answer: "Leonardo Da Vinci",
        },

        {
          question: "What’s the most important book in the Moslem religion?",
          optionA: "The Koran",
          optionB: "The Dictionary",
          optionC: "The Bible",
          optionD: "The Chemistry text Book",
          answer: "The Koran",
        },

        {
          question: "What’s the capital of Ethiopia?",
          optionA: "Cape Town",
          optionB: "San Francisco",
          optionC: "Abuja",
          optionD: "Syndey",
          answer: "Addis Ababa",
        },

        {
          question: "How many squares are there on a chess board?",
          optionA: "128",
          optionB: "64",
          optionC: "32",
          optionD: "256",
          answer: "64",
        },

        {
          question: "Who invented the electric light bulb?",
          optionA: "Tom Cruise",
          optionB: "Barack Obama",
          optionC: "Wole Soyinka",
          optionD: "Thomas Edison",
          answer: "Thomas Edison",
        },

        {
          question: "What are the first three words of the bible?",
          optionA: "be with everyone",
          optionB: "Again Jesus asked",
          optionC: "In the beginning",
          optionD: "At that time",
          answer: "In the beginning",
        },
      ],
      result: false,
      failed: 0,
      marks: 0,
      firstques: 0,
    };
  }

  checkopt = (ques, opt) => {
    const { allques, marks } = this.state;
    const corropt = allques[ques].answer;

    if (opt === corropt) {
      this.setState(
        (prevState) => ({
          marks: prevState.marks + 1,
          firstques: Math.min(
            prevState.allques.length - 1,
            prevState.firstques + 1
          ),
        }),
        () => {}
      );
    } else {
      this.setState((prevState) => ({
        failed: prevState.failed + 1,
      }));
    }
  };

  backward_ques = () => {
    this.setState((prevState) => ({
      firstques: Math.max(0, prevState.firstques - 1),
    }));
  };

  forward_ques = () => {
    this.setState((prevState) => ({
      firstques: Math.min(
        prevState.allques.length - 1,
        prevState.firstques + 1
      ),
    }));
  };

  leave_game = () => {
    const quitConfirmation = window.confirm(
      "Are you sure you really want to end?"
    );
  };

  end = () => {
    this.setState({ result: true });
  };

  render() {
    const present = this.state.allques[this.state.firstques];

    return (
      <>
        {this.state.result ? (
          <Output
            marks={this.state.marks}
            totalQuestions={this.state.allques.length}
            attemptedQuestions={this.state.firstques}
            correctAnswers={this.state.marks}
            wrongAnswers={this.state.failed}
          />
        ) : (
          <div className="body">
            <h1 className="quess">Questions</h1>
            <p className="qu">
              {this.state.firstques + 1} of {this.state.allques.length}
            </p>
            <h5>{present.question}</h5>
            <div className="opt1">
              {Object.keys(present)
                .filter((key) => key.startsWith("option"))
                .map((key, val) => (
                  <div
                    key={val}
                    className="opt2"
                    onClick={() =>
                      this.checkopt(this.state.firstques, present[key])
                    }
                  >
                    {present[key]}
                  </div>
                ))}
            </div>
            <div className="working">
              <button className="backward" onClick={this.backward_ques}>
                Previous
              </button>
              <button className="forward" onClick={this.forward_ques}>
                Next
              </button>
              <button className="leave" onClick={this.leave_game}>
                Quit
              </button>
              <button onClick={this.end}>Finish</button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Mainpage;
