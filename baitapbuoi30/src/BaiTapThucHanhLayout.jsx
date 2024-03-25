import React, { Component } from 'react';
const renderNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse d-flex" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
}
const renderBanner = () => {
    return (
        <div className="container">
            <div className="p-lg-5 bg-light text-center">
                <div className="m-4">
                    <h1 className="display-5 m-lg-5 fw-bold">A warm welcome!</h1>
                    <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                </div>
            </div>
        </div>

    );
}
const renderItem = () => {
    const paddingItem = {
        paddingRight: "50px",
        paddingLeft: "50px"
    };
    const featureItem = {
        marginTop:"-1.5rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "4rem",
        width: "4rem",
        fontSize: "2rem"
    };
    return (
        <div className="container px-lg-5">
            <div className="d-flex flex-wrap gx-lg-5">
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}>
                                <i className="bi bi-collection-fill" />
                            </div>
                            <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                            <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}><i className="bi bi-cloud-download" /></div>
                            <h2 className="fs-4 fw-bold">Free to download</h2>
                            <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}><i className="bi bi-card-heading" /></div>
                            <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                            <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}><i className="bi bi-bootstrap" /></div>
                            <h2 className="fs-4 fw-bold">Feature boxes</h2>
                            <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}><i className="bi bi-code" /></div>
                            <h2 className="fs-4 fw-bold">Simple clean code</h2>
                            <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5" style={paddingItem}>
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="bg-primary bg-gradient text-white rounded-3 mb-4" style={featureItem}><i className="bi bi-patch-check" /></div>
                            <h2 className="fs-4 fw-bold">A name you trust</h2>
                            <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const renderFooter = () => {
    return (
        <div className="container">
            <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
        </div>
    );
}
class BaiTapThucHanhLayout extends Component {

    render() {
        return (
            <div>
                <header>
                    {renderNavBar()}
                </header>
                <section className="py-5">
                    {renderBanner()}
                </section>
                <section className="pt-4">
                    {renderItem()}
                </section>
                <footer className='py-5 bg-dark'>
                    {renderFooter()}
                </footer>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;