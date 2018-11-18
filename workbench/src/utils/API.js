import axios from "axios";

const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=";

const startUrl = "?&begin_date=";
const endUrl = "?&end_date=";
const APIKEY = "?&api_key=b999dc097205467495fb0d49cf0383c9&limit=5";

export default {
    search: function(query, queryStart, queryEnd) {
        return axios.get(baseUrl + query + startUrl + queryStart + endUrl + queryEnd + APIKEY);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};
