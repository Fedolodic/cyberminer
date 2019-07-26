import React from 'react';
import './App.css';
import { PageDetails } from "./components/PageDetails";
import { SearchBar } from "./components/SearchBar";
import { Sorts } from "./components/Sorts";
import { ToolBar } from "./components/ToolBar";
import { ResultPages } from "./components/ResultPages";

class App extends React.Component {
  state = {
    items: [],
    resultsPerPg: 10,
    currentPageStart: 0,
    currentPageEnd: 0,
    currentPage: 1,
    numOfPage: 0,
    SearchBarName: "Search",
    searchInput: "",
    toggle: false,
    www: "",
    searchResults: [
      {
        link: "https://www.google.com/",
        url: "1google.com",
        description: "google",
        visits: 1,
        payment:0
      }
      ,{
        link: "https://www.google.com/",
        url: "2google.com",
        description: "google",
        visits: 2,
        payment:0
      },
      {
        link: "https://www.google.com/",
        url: "3google.com",
        description: "google",
        visits: 3,
        payment: 0
      },
      {
        link: "https://www.google.com/",
        url: "4google.com",
        description: "googledasfasdfasdfjjasdklfja;sjdksf;akjsd;lfkja;lskdfj;aksjd;fkasj;dfkja;slkdjf;alksjdf;alksjdf;aksjd;flkajs;dlfkja;lsdkfja;sldkfja;slkdfja;lskjdf;alskdfasdfasdfasdfasdfasdfasdfasdfadfadsfsasdfaj;lj",
        visits: 4,
        payment: 0
      },
      {
        link: "https://www.google.com/",
        url: "5google.com",
        description: "google",
        visits: 5,
        payment: 0
      },
      {
        link: "https://www.google.com/",
        url: "6google.com",
        description: "google",
        visits: 6,
        payment: 0
      }
    ]
  }

  sortBar = {
    placeHolder: "Alphabetic Ascending",
    items: [
      "Alphabetic Ascending",
      "Most Visits",
      "By Payment"
    ],
    dropDownLabel: "Results Order:  "
  }

  resultsPerPage = {
    placeHolder: 10,
    items: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 110,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 20,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    ],
    dropDownLabel: "Results Per Page:  "
  }

/****************************
 *                          *
 *   App rendering Content  *
 *                          *
 ****************************/
  searchSubmit = (input) => {
    this.setState({
      SearchInput:input,
      SearchBarName:"Search-Searched",
      toggle: true,
      currentPage: 1
    });
    this.resultsPerPageChange(10);
  }

  pageChanged = page => {
    const resultsPerPage = this.state.resultsPerPg;
    const newPage = page;
    const pageTop = (newPage - 1) * resultsPerPage;
    const pageBottom = pageTop + resultsPerPage;
    
    this.setState({
      pageStart: pageTop,
      pageEnd: pageBottom,
      currentPage: newPage
    });
  }

  toggle = (toggleState) => {
    toggleState ?
     this.setState({www:"www."}) : this.setState({www:""});
  }

  resultsPerPageChange = (resultsPerPage) => {
    const size = this.state.searchResults.length;
    const numOfPages = Math.ceil(size / resultsPerPage);
    const currentPage = numOfPages < this.state.currentPage ?
      numOfPages : this.state.currentPage;
    const pageTop = (currentPage - 1) * resultsPerPage;
    const pageBottom = pageTop + resultsPerPage;
    
    this.setState({
      numOfPage:numOfPages,
      pageStart: pageTop,
      pageEnd: pageBottom,
      resultsPerPg: resultsPerPage
    });
  }

  sortChange = (sortType) => {
    console.log(sortType);
    const searchResults = this.state.searchResults;
    const sortedResults = new Sorts().sort(searchResults, sortType);
    console.log(sortedResults);
    this.setState({
      searhResults: sortedResults
    })
  }
  
  renderComponents = () => {
    return(
      <div className="App">
        {this.renderToolBar()}
        <div className={this.state.SearchBarName}>
          <SearchBar onSubmit={this.searchSubmit}/>
        </div>
        <div className="WebPageDetails">
          {this.renderPageDetails()}
        </div>
        <br/>
        {this.renderResultPages()}
      </div>
    );
  }
  
  renderPageDetails = () => {
    const pageTop = this.state.pageStart;
    const pageBottom = this.state.pageEnd;
    const searchResults = this.state.searchResults;
    const pageOfResults = searchResults.slice(pageTop, pageBottom);

    return (
      pageOfResults.map((result, index) => {
        const resultUrl = this.state.www + result.url;

        return (
          <PageDetails
            key={index}
            url={resultUrl}
            link={result.link}
            description={result.description} />
        );
      })
    );
  }

  renderToolBar = () => {
    if(this.state.toggle) {
      return ( 
         <ToolBar
          sortBar={this.sortBar}
          resultsPerPage={this.resultsPerPage} 
          onClick={this.toggle}
          sortChange={this.sortChange}
          resultsPerPageChange={this.resultsPerPageChange}/>
      );
    }
  }

  renderResultPages = () => {
    if(this.state.toggle) {
      const numPages = this.state.numOfPage;
      let resultArray = [];

      for(let i = 0; i < numPages; i++) 
        resultArray.push(i);

      return (
        <ResultPages onClick={this.pageChanged} results={resultArray}/>
      );
    }
  }

  render = () => {
    return this.renderComponents();
  }
}

export default App;
