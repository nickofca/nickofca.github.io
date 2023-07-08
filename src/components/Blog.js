import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        // This data could also come from an API or a database
          // TODO: Implement a database to store articles
        { title: 'Article 1', date: '2023-07-01', author: 'Author 1', content: 'Content 1' },
        { title: 'Article 2', date: '2023-07-02', author: 'Author 2', content: 'Content 2' },
        // Add as many articles as you want here
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article, index) =>
          <Article key={index} data={article} />
        )}
      </div>
    );
  }
}

export default Blog;
