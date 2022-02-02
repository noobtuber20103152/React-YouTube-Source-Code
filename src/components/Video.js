import React, { Component } from 'react'
import { Instagram } from 'react-content-loader';
import Videoitem from './Videoitem'
export class Video extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            loader: false
        }
    }
    async componentDidMount() {
        const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=50&regionCode=in&part=snippet&q=${this.props.category}&key=AIzaSyADrGnHOf6NBU2Lh_7z4EnT7MFY3jrpAok`;
        this.setState({ loader: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            video: parseData.items,
            loader: false
        })
       
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row" >
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}
                        {this.state.loader && <div className="col-md-3">
                            <Instagram />
                        </div>}

                        {!this.state.loader && this.state.video.map((element) => {
                            if (!element.id.channelId) {
                                return (
                                    <>
                                        <div key={element.id.videoId} className="col-md-3">
                                            <Videoitem bgColor={this.props.bgColor} TextColor={this.props.TextColor} description={element.snippet.description} date={element.snippet.publishTime} title={element.snippet.title} VideoId={element.snippet.thumbnails.high.url} videourl={`https://www.youtube.com/watch?v=${element.id.videoId}`} ChannelName={element.snippet.channelTitle} />
                                        </div>
                                    </>
                                )
                            }
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Video
