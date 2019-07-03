import React from "react";
import { Card } from "antd";
import classes from "./ListRow.module.css";

const open = window.require("open");

const ListRow = props => {
  const moreClickHandler = e => {
    e.preventDefault();
    open(props.link);
  };

  return (
    <div className={classes.ListRow}>
      <Card
        size="small"
        title={props.title}
        extra={
          <a href="#" onClick={e => moreClickHandler(e)}>
            Visit Page
          </a>
        }
      >
        <div
          dangerouslySetInnerHTML={{
            __html: props.excerpt
          }}
        />
      </Card>
    </div>
  );
};

export default ListRow;
