import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function DetailedCard(props) {
    return (
            <div className="row">
                <div className="col-12 card pt-3 pb-3">
                        <div className="row no-gutters px-0">
                            <div className="col-sm-5 d-flex align-items-center justify-content-center">
                                <img src={props.item.image} className="img-thumbnail" style={{"max-width": "80%"}} alt="..."/>
                                </div>
                            <div className="col-sm-7">
                                  <div className="card-body">
                                        <h1 className="card-title pricing-card-title">{props.item.name}</h1>
                                        <ul className="list-unstyled mt-3">
                                            <li className="mb-lg-3 mb-md-2 mb-sm-1"><small className="text-muted">Status: </small>
                                                <h4 className="d-inline">{props.item.status}</h4>
                                            </li>
                                            <li className="mb-lg-3 mb-md-2 mb-sm-1"><small className="text-muted">Species: </small>
                                                <h4 className="d-inline">{props.item.species}</h4>
                                            </li>
                                            <li className="mb-lg-3 mb-md-2 mb-sm-1"><small className="text-muted">Gender: </small>
                                                <h4 class="d-inline">{props.item.gender}</h4>
                                            </li>
                                            <li className="mb-lg-3 mb-md-2 mb-sm-1"><small className="text-muted">Last known location: </small>
                                                <h4>{props.item.location.name}</h4>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-dark">Episodes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
)
}
export default DetailedCard