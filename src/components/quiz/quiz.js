import React, { Component } from 'react';
import './quiz.css';

let state = {
    quiz: [],
    numOfQuestions: 0,
    level: 1,
    answer: "",
    correct: false
}

class Quiz extends Component {
     constructor(props) {
        super(props);
        this.state = state
        this.getQuizData = this.getQuizData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.getQuizData();
    }

    componentWillUnmount() {
        state = this.state
    }
    getQuizData() {
        var data = require('../../questions.json')
        if(true) {
            this.setState({
                quiz: data.questions,
                numOfQuestions: data.questions.length
            },() => console.log(this.state))
        }
    }

    handleChange(e) {
        this.setState({
            answer: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.quiz.map((question) => {
            if(this.state.level.toString() === question.level) {
                if(this.state.answer.toLowerCase() === question.answer) {
                    alert("You're right!!")
                    this.setState(prev => ({
                        level: prev.level+1
                    }), ()=> console.log(this.state))
                } else {
                    alert("Fuck Off")
                }
            }
        })
    }

    render() {
        return (
        <div className="quiz">
            <h1>Quiz</h1>
            {this.state.quiz.map((question) => {
                if(this.state.level.toString() === question.level) {
                    return (
                        <div key={Math.random()}>
                            <p>{question.question}</p>
                        </div>
                    )
                } else {
                    return (
                        <div key={Math.random()}>
                            
                        </div>
                    )
                }
            })}
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter your answer" onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        );
    }
}

export default Quiz;