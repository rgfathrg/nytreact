import React, { Component } from "react";
import Artlist from "./Artlist";
import Container from "./Container";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import SaveButton from "./SaveButton";


class Articles extends Component {
    state = {
        topic: "",
        start: "",
        end: "",
        results: [],
        savedArticles: []
    };
    componentDidMount() {
        this.searchArticles(this.state.topic, this.state.start, this.state.end);
    }

    searchArticles = (query, queryStart, queryEnd) => {
        API.search(query, queryStart, queryEnd)
        .then(res => {
            console.log(res.data.response.docs);
            this.setState({ results: res.data.response.docs })
            
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles(this.state.topic, this.state.start, this.state.end);
    };

    saveArticle = id => {
        API.saveArticle(id)
          .then(res => {
            this.setState({ savedArticles: res})
          })
          .catch(err => console.log(err))
    }
    render() {
        return (
        <Container>
            <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
            <div className="articleTar">
                <Artlist results={this.state.results} />
                <SaveButton onClick={() =>
                this.saveArticle(this.state.result._id)}/>
            </div>
        </Container>
        );
    }
}

export default Articles;
