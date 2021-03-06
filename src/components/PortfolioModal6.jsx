import React from "react";

export class PortfolioModal6 extends React.Component{
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg"
                                                                               alt="Close modal"/></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto"
                                             src="assets/img/portfolio/06-full.jpg" alt=""/>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                                            dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                                            cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>Date: January 2020</li>
                                            <li>Client: Window</li>
                                            <li>Category: Photography</li>
                                        </ul>
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fas fa-times mr-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}