import React from 'react';
import './Article.css';  // Import the CSS file

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h2>{this.props.data.title}</h2>
        <h3>{this.props.data.date}</h3>
        <h4>{this.props.data.author}</h4>
        <p>{this.props.data.content}</p>
      </div>
    );
  }
}

export default Article;
