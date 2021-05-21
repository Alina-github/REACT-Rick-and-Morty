import React, {useState, memo, useRef, useEffect} from "react";
import AsyncSelect from "react-select/async";

// ------------------------------ASYNCSELECT-------------------------------------------
//
//     const search = async (value) => {
//
//         const res = await axios.get(
//
//             `https://rickandmortyapi.com/api/character/?name=${value}`
//         );
//         if (res.status !== 200 || !res.data.results) {
//             debugger
//             return [];
//         }
//
//         const data = res.data.results;
//
//         return data.map((el) => ({
//             label: el.name,
//             value: el.id
//         }));
//
//     };
//
//     const loadOptions = (inputValue, callback) => {
//         search(inputValue).then((options) => {
//             callback(options);
//         });
//     };
//
// export default function app() {
//     const handleInputChange = (val) => {
//         const inputVal = val.replace(/\W/g, "");
//         return inputVal;
//     };
//
//     return (
//         <>
//             <AsyncSelectBar
//                 value={""}
//                 defaultValue={{label: "Default_list", value: "1"}}
//                 cacheOptions
//                 loadOptions={loadOptions}
//                 onInputChange={handleInputChange}
//                 onSelect={console.log('item')}
//             />
//         </>
//     );
// };
//
// ------------------------------SELECT-------------------------------------------
//
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//     { value: 'cinamon', label: 'Vanilla' },
//     { value: 'vanilla', label: 'Vanilla' },
//
// ];
//
// class Selection extends React.Component {
//     state = {
//         selectedOption: [],
//     };
//
//     componentDidMount() {
//         const selectedOption = []
//         this.setState({ selectedOption });}
//
//         handleChange = selectedOption => {
//             this.setState({ selectedOption });
//             console.log(`Option selected:`, selectedOption);
//         };
//         render() {
//             const { selectedOption } = this.state;
//
//             return (
//                 <Select
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     options={options}
//                 />
//             );
//         }
//     }
//
//     export default Selection
//
//
// ------------------------------ASYNCSELECT class-------------------------------------------
//  class Selection extends React.Component {
//
//      constructor(props) {
//
//          super(props);
//              this.state = {
//                  suggestion: [],
//                  selectedOption: {}
//              }
//          }
//
//          fetchData = (inputValue, callback) => {
//
//          if(!inputValue) {
//              callback([]);
//          } else {
//              setTimeout(()=>{
//                  fetch(`https://rickandmortyapi.com/api/character/?name=` + inputValue,
//                      {
//                      method: "GET",
//                      }
//                      )
//                  .then((resp) => {
//                      return resp.json();
//                  })
//                  .then((data) => {
//                      const tempArray = [];
//                      data.results.forEach((element) => {
//                          tempArray.push({
//                              label: `${element.name}`,
//                              value: element.id,
//                          });
//                          callback(tempArray);
//
//                          this.setState({suggestion: data.results})
//                      })
//                  })
//                      .catch((error) => {
//                          console.log(error, "Need to change the request");
//                      });
//              }, 1000);
//          };
//      }
//
//
//              onSearchChange = (selectedOption) => {
//                  if (selectedOption) {
//                      this.setState({
//                          selectedOption,
//                      });}
//
//                  //     if (this.props.location.pathname == "/feed") {
//                  //         this.props.history.push(`feed/card/1`)
//                  // }else {
//                  //         this.props.history.push(`9`)
//                  //
// }
//
//
//
//      // onChange={(e) => {
// //                     onSearchChange(e);
// //                 }}
//
//      render() {
//          return (
//                  <div>
//                      <AsyncSelectBar
//                          cacheOptions
//                          value={this.state.selectedOption}
//                          loadOptions={this.fetchData}
//                          placeholder="Character Name"
//                          onChange={(e) => {
//                              this.onSearchChange(e);
//                          }}
//                          defaultOptions={{
//                              label: `name`,
//                              value: `id`,
//                          }}
//                      />
//                  </div>
//          );
//      }
//  }
//
//
// export default withRouter (Selection);

// ------------------------------AsyncSelectBar(useHook)-------------------------------------------
//
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

    //
    // const toggleBox = () => {
    //     setIsBoxVisible(!isBoxVisible);
    //     console.log(isBoxVisible)
    // };
    //
    // useEffect(()=>
    // {    }, [isBoxVisible])


    return (
         <>
             {/*<button>TEXT</button>*/}
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
                     value: 'text'}}
             />
                 </>
     );
 })
 export default Selection;