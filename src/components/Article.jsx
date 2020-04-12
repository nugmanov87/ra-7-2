import React from 'react';

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="https://nugmanov87.github.io/ra-7-2/">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export default Article;
