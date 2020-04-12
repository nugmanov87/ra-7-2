import React from "react";
import shortid from "shortid";
import Video from "./Video";
import Article from "./Article";
import raiting from "./Raiting";

const RaitingVideo = raiting(Video);
const RaitingArticle = raiting(Article);

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <RaitingVideo {...item} key={shortid.generate()} />;

      case "article":
        return <RaitingArticle {...item} key={shortid.generate()} />;
    }
  });
}

export default List;
