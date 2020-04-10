import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {

    state = {
        apiResults1Title: [],
        apiResults1Author: [],
        apiResults1Description: [],
        apiResults1Thumbnail: [],
        apiResults1Href: [],
        apiResults2Title: [],
        apiResults2Author: [],
        apiResults2Description: [],
        apiResults2Thumbnail: [],
        apiResults2Href: [],
        userInput: ""
    }
    componentDidMount(){
        console.log('working')
        var key = 'AIzaSyCeb5HlrnsOhcdQDoC91dpbZe2Wo_Onibo'
        var URL = `https://www.googleapis.com/books/v1/volumes?q=flowers}&orderBy=newest&key=${key}`

        axios.get(URL)
        .then(res => {
            console.log(res.data.items[0].volumeInfo)
            this.setState({
                apiResults1Title: res.data.items[0].volumeInfo.title,
                apiResults1Author: res.data.items[0].volumeInfo.authors[0],
                apiResults1Description: res.data.items[0].volumeInfo.description,
                apiResults1Thumbnail: res.data.items[0].volumeInfo.imageLinks.thumbnail,
                apiResults1Href: res.data.items[0].volumeInfo.previewLink,
                apiResults2Title: res.data.items[1].volumeInfo.title,
                apiResults2Author: res.data.items[1].volumeInfo.authors[1],
                apiResults2Description: res.data.items[1].volumeInfo.description,
                apiResults2Thumbnail: res.data.items[1].volumeInfo.imageLinks.thumbnail,
                apiResults2Href: res.data.items[1].volumeInfo.previewLink,
            })
        })
    }
    render() {
        return (
            <div>
                <div className="column">
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h1>React Google Books Search</h1>
                            <p>Search for and save books of interest</p>
                        </div>
                    </div>
                </div>
                <div className="column"
                    style={{
                        marginTop: "10px"
                    }}
                >
                    <div className="hero bg-gray" onSubmit={this.componentDidMount}>
                        <div className="hero-body">
                            <p>Search</p>
                            <input type="text" placeholder="Search Books" name="search" value={this.state.userInput}></input>
                            <button type="submit"
                                style={{
                                    marginLeft: "10px"
                                }}
                            >Search</button>
                        </div>
                    </div>
                </div>
                <div className="column"
                style={{
                    marginTop: "10px"
                }}
                >
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h1>{this.state.apiResults1Title}</h1>
                            <h2>{this.state.apiResults1Author}</h2>
                            <p>{this.state.apiResults1Description}</p>
                            <img src={this.state.apiResults1Thumbnail} />
                            <br></br>
                            <a href={this.state.apiResults1Href} target="_blank" rel="noopener noreferrel">Link</a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h1>{this.state.apiResults2Title}</h1>
                            <h2>{this.state.apiResults2Author}</h2>
                            <p>{this.state.apiResults2Description}</p>
                            <img src={this.state.apiResults2Thumbnail} />
                            <br></br>
                            <a href={this.state.apiResults2Href} target="_blank" rel="noopener noreferrel">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}