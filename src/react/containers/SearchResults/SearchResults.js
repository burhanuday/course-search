import React, { useEffect, useState } from "react";
import ListRow from "../../components/ListRow/ListRow";
import classes from "./SearchResults.module.css";
import debounce from "lodash.debounce";

const he = require("he");

const SearchResults = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.onscroll = debounce(() => {
      /*    console.log(window.innerHeight);
      console.log(document.documentElement.scrollTop);

      console.log(document.documentElement.scrollHeight); */
      if (!props.hasMore) {
        return;
      }

      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        if (!props.loading) {
          props.loadPosts();
        }
      }
    }, 100);
  }, []);

  useEffect(() => {
    const rows = props.results.map(result => {
      const title = he.decode(result.title.rendered);
      return (
        <ListRow
          key={result.id}
          title={title}
          link={result.link}
          content={result.content.rendered}
          excerpt={result.excerpt.rendered}
        />
      );
    });
    setPosts(rows);
  }, [props.results]);

  return <div className={classes.SearchResults}>{posts}</div>;
};

export default SearchResults;
