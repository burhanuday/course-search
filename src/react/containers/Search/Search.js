import React from "react";
import { Input, Spin, message } from "antd";
import SearchResults from "../SearchResults/SearchResults";
import classes from "./Search.module.css";
import axios from "axios";

class Search extends React.Component {
  state = {
    posts: [],
    loading: false,
    page: 1,
    value: "",
    hasMore: true
  };

  search = () => {
    message.config({
      top: 250,
      duration: 2,
      maxCount: 3
    });
    if (this.state.value.length < 3) {
      message.error("Enter a valid search query");
      return;
    }
    if (this.state.loading || !this.state.hasMore) {
      return;
    }
    console.log("loading page", this.state.page);
    let proxy = "https://course-search-proxy.herokuapp.com";
    let url = `${this.props.source}?per_page=10&search=${
      this.state.value
    }&orderby=relevance&page=${this.state.page}`;

    this.setState({
      loading: true
    });

    axios
      .post(proxy, {
        urlToGet: url
      })
      .then(response => {
        console.log(response.data);
        if (response.data.error) {
          message.error("End of results!");
          this.setState({
            loading: false,
            hasMore: false
          });
        } else {
          const newPosts = response.data;
          console.log(response);

          this.setState(prevState => {
            return {
              posts: prevState.posts.concat(newPosts),
              loading: false,
              page: prevState.page + 1
            };
          });

          console.log(this.state);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };

  render() {
    const SpinComponent = (
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Spin />
      </div>
    );

    const contentToRender = this.state.loading ? SpinComponent : null;

    return (
      <div className={classes.Container}>
        <div className={classes.Center}>
          <i>(loading for the first time may be slow...)</i>
        </div>
        <div className={classes.Search}>
          <Input.Search
            placeholder="Enter course name"
            enterButton
            onSearch={value => {
              this.setState(
                {
                  posts: [],
                  page: 1,
                  loading: false,
                  hasMore: true
                },
                () => {
                  this.search();
                }
              );
            }}
            onChange={e => {
              this.setState({
                value: e.target.value
              });
            }}
            value={this.state.value}
          />
        </div>
        <SearchResults
          loading={this.state.loading}
          loadPosts={this.search}
          results={this.state.posts}
          hasMore={this.state.hasMore}
        />
        {contentToRender}
      </div>
    );
  }
}

export default Search;
