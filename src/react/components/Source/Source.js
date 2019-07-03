import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Source = props => {
  return (
    <Select
      defaultValue="https://freecourselab.com/wp-json/wp/v2/posts"
      style={{ width: "200px" }}
      onChange={props.setSource}
    >
      <Option value="https://freecourselab.com/wp-json/wp/v2/posts">
        FreeCourseLab [FAST]
      </Option>
      <Option value="https://tutsgalaxy.com/wp-json/wp/v2/posts">
        TutsGalaxy [FAST]
      </Option>
      <Option value="https://ftuforum.com/wp-json/wp/v2/posts">
        FTUForum [SLOW]
      </Option>
      <Option value="https://freecoursesonline.me/wp-json/wp/v2/posts">
        FreeCourseOnline [SLOW]
      </Option>
    </Select>
  );
};

export default Source;
