import React, { useState, useEffect } from "react";
import '../CharactersList/CharacterCard/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import Loader from "../Loader"
import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch/NoMatch";
import {fetchClass} from "../fetchClass";

const DetailedCard = () => {

     let {id} = useParams();

     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [card, setCard] = useState({});

     useEffect(() => {
         const fetchCard = new fetchClass( {
             url:`https://rickandmortyapi.com/api/character/${id}`,
             method: "GET"
     })
         fetchCard.getData()
             .then((res) => {
                 setIsLoaded(true);
                 setCard(res);
             }, () => {
                 setError(true)
                 setIsLoaded(false);
             })}, [])

     if (error) {
         return <NoMatch/>;
     } else if (!isLoaded) {
         return <div className="container text-center"><Loader/></div>;
     } else {
         return (
             <div className="container d-flex align-items-center" style={{minHeight: "600px"}}>
                 <div className="row col-12 justify-content-center">
                     <div className="col-12 card pt-3 pb-3" id="maincontent">
                         <div className="row no-gutters px-0">
                             <div className="col-sm-5 d-flex align-items-center justify-content-center">
                                 <img src={card.image} className="img-thumbnail" style={{"max-width": "70%"}}
                                      alt={card.name}/>
                             </div>
                             <div className="col-sm-7">
                                 <h1 className="card-title pricing-card-title text-lg-left text-center mt-3">{card.name}</h1>
                                 <div className="card-body">
                                     <ul className="list-unstyled mt-3">
                                         <li className="mb-lg-3 mb-md-2 mb-sm-1"><small
                                             className="text-muted">Status: </small>
                                             <h4 className="d-inline">{card.status}</h4>
                                         </li>
                                         <li className="mb-lg-3 mb-md-2 mb-sm-1"><small
                                             className="text-muted">Species: </small>
                                             <h4 className="d-inline">{card.species}</h4>
                                         </li>
                                         <li className="mb-lg-3 mb-md-2 mb-sm-1"><small
                                             className="text-muted">Gender: </small>
                                             <h4 className="d-inline">{card.gender}</h4>
                                         </li>
                                         <li className="mb-lg-3 mb-md-2 mb-sm-1"><small className="text-muted">Last
                                             known
                                             location: </small>
                                             <h4>{card.location?.name}</h4>
                                         </li>
                                     </ul>
                                     <Link to={`${card.id}/episodes`}>
                                         <button type="button" className="btn btn-lg btn-dark">
                                             Episodes
                                         </button>
                                     </Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         )
     }
}
export default DetailedCard






