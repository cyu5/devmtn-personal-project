import React from "react";
import axios from "axios";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteList: []
    };
  }

  componentDidMount = () => {
    this.fetchQuotes();
  };

  fetchQuotes = () => {
    axios.get(`/api/quotes`).then(res => {
      this.setState({ quoteList: res.data });
    });
  };

  render() {
    const { quoteList } = this.state;
    return (
      <div className="List">
        {quoteList ? (
          quoteList.map(quote => {
            return <div key={quote.id}>{quote.phrase}</div>;
          })
        ) : (
          <div>...Loading</div>
        )}
      </div>
    );
  }
}
