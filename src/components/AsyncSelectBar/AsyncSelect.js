import React, {useState, memo, useRef, useEffect} from "react";
import AsyncSelect from "react-select/async";
import { withRouter } from 'react-router'
import style from './AsyncSelect.module.css'


const Selection = memo((props) => {

     const [suggestion, setSuggestion] = useState([])
     const [selectedOption, setSelectedOption] = useState({})
     const refContainer = useRef(null)

     const fetchData =  (inputValue, callback) =>
     {
         if(!inputValue) {
             callback([]);
         } else {
             if (refContainer.current)  {
                 clearTimeout(refContainer.current)
             }
  // function in timeout changing my state and that re-renders component =>need to clear. ClearTimeout stops setTimeout if the the function has not already been executed.
           //

             refContainer.current = setTimeout(()=>{
                 fetch(`https://rickandmortyapi.com/api/character/?name=` + inputValue,
                     {
                         method: "GET",
                     }
                 )
                      .then((resp) => {
                          return resp.json();
                      })
                     .then((data) => {
                         const requestResults = [];
                         data.results.forEach((element) => {
                             requestResults.push({
                                 label: `${element.name}`,
                                 value: element.id,
                             });
                             callback(requestResults);
                             setSuggestion({suggestion: data.results})
                         })
                     })
                     .catch((error) => {
                         console.log(error, "catch the hoop");
                     });
             }, 500);
         };
     }

     const onSearchChange = (selectedOption) => {
         if (selectedOption) {
             setSelectedOption({selectedOption});
         }
        props.history.push(`/feed/card/${selectedOption.value}`);
         debugger
     };

    const [isBoxVisible, setIsBoxVisible] = useState(false)

    const toggleBox = () => {
        setIsBoxVisible(!isBoxVisible);
    };

    useEffect(()=>
    {    }, [isBoxVisible])


    return (
         <>
             <div className="d-flex align-items-center justify-content-center row m-0 p-0 ">
                 <div className="col-1 m-0 p-0">
                     <button onClick={toggleBox}
                             className={style.search}>
                         <svg xmlns="http://www.w3.org/2000/svg"
                              width="20" height="20" fill="none"
                              stroke="black"
                              aria-label="Search"
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-0"
                              role="img"
                              className="link"
                              viewBox="0 0 24 24"> <title>Search</title>
                         <circle cx="10.5" cy="10.5" r="7.5"/>
                         <path d="M21 21l-5.2-5.2"/>
                     </svg>
                     </button>
                 </div>

             { isBoxVisible ?
                 <div className="col-10 m-0 p-0 "
                      className={style.show}>
                         <AsyncSelect
                             cacheOptions
                             isFocused={false}
                             value={selectedOption}
                             loadOptions={fetchData}
                             options={fetchData}
                             placeholder="Search ..."
                             onChange={(e) => {
                                 onSearchChange(e);
                             }}
                             defaultOptions={{label:'text',
                                 value: 'text'}}/>
                 </div> : <div className="col-0" className={style.bar}></div>
             }
                 </div>
         </>
    )
 })

 export default withRouter(Selection);