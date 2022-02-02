import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Videoitem extends Component {
    static propTypes = {

    }

    render() {
        let { VideoId, description, title, date, videourl, ChannelName, TextColor, bgColor , Border} = this.props;
        return (
            <div className="d-flex justify-content-center mt-3">
                <div className="card" style={{ width: "20rem"}}>
                    <img src={VideoId} style={{ objectFit: "scale-down" }} alt="" />
                    <div className={`card-body bg-${bgColor}`} style={{ padding: "2px 1rem" }}>
                        <h5 style={{ margin: "0px" }, TextColor} className="card-title">{title.slice(0, 30) + '...'}</h5>
                        <p className="card-text my-1" style={TextColor}>{description ? description.slice(0, 80) + '...' : "Description is not here"}</p>
                        <p className="card-text my-0"><small style={TextColor} className="text-muted">Publish at {new Date(date).toGMTString().slice(0, new Date(date).toGMTString().length - 12)}</small> </p>
                        <p className="card-text my-0" style={TextColor} >{ChannelName} </p>
                        <button className="btn-sm btn-dark my-1" > <a href={videourl} style={{ boxShadow: "none", textDecoration: "none" }} target="_blank" className="btn-sm my-1 btn-dark">Go to video</a></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videoitem
