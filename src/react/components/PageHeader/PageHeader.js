import React from "react";
import { Layout } from "antd";
import classes from "./PageHeader.module.css";
import Source from "../Source/Source";
import Logo from "../Logo/Logo";

const { Header } = Layout;

const PageHeader = props => {
  return (
    <Layout>
      <Header className={classes.Header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <span className={classes.Logo}> CourseSearch</span>
        </div>
        <Source setSource={props.setSource} />
      </Header>
    </Layout>
  );
};

export default PageHeader;
