import React, { Component } from 'react'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        let {ChangeMode, bgColor, DarkText, TextColor} = this.props;
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${bgColor} bg-${bgColor} sticky-top`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" >YouTube</a>
                        <button style={{ boxShadow: "none" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/gaming">Gaming</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cricket">Cricket</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/football">Football</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/bgmi">BGMI</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/callofduty">Call of duty</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/coding">Coding</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/music">Music</a>
                                </li>
                            </ul>
                            <div className="form-check form-switch" >
                                <input onClick= {ChangeMode} className="form-check-input" type="checkbox" style={{ boxShadow: "none" }} id="flexSwitchCheckDefault" />
                                <label  className="form-check-label" style={TextColor} htmlFor="flexSwitchCheckDefault">Enable {DarkText} Mode</label>
                            </div>
                        </div>

                    </div>

                </nav>
            </>
        )
    }
}

export default Navbar
