import React, {useState, memo, useRef, useEffect} from "react";
import AsyncSelect from "react-select/async";
import {withRouter} from 'react-router'
import style from './AsyncSelect.module.css'

const Selection = memo((props) => {

        const [suggestion, setSuggestion] = useState([])
        const [selectedOption, setSelectedOption] = useState({})
        const refContainer = useRef(null)

        const fetchData = (inputValue, callback) => {
            if (!inputValue) {
                callback([]);
            } else {
                if (refContainer.current) {
                    clearTimeout(refContainer.current)
                }

                refContainer.current = setTimeout(() => {
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
            }
            ;
        }

        const onSearchChange = (selectedOption) => {
            if (selectedOption) {
                setSelectedOption({selectedOption});
                setIsBoxVisible(false);
            }
            props.history.push(`/feed/card/${selectedOption.value}`);
        };

        const [isBoxVisible, setIsBoxVisible] = useState(false)

        const toggleBox = () => {
            setIsBoxVisible(!isBoxVisible);
        };

        return (
            <div className="d-flex align-items-center justify-content-center row m-0 p-0">
                <div className="col-2 m-0 p-0 d-flex justify-content-center">
                    <button onClick={toggleBox}
                            className={style.search}
                            style={{width: "25px", height: "25px", marginRight: "3px"}}
                    >
                        <img src="../../search.svg" className={style.icon}/>
                    </button>
                </div>
                {isBoxVisible ?
                    <div className="col-10 m-0 p-0"
                         className={style.show}
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
                            defaultOptions={{
                                label: 'text',
                                value: 'text'
                            }}/>
                    </div> : <div className="col-0" className={style.bar}></div>
                }
            </div>
        )
    }
)

export default withRouter(Selection);