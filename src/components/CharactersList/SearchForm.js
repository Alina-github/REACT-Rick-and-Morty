import React from "react";


const SearchForm = (props) => {

    return (
        <div className="text-center m-3">
            <form onSubmit={props.onSubmit}>
                <label htmlFor="characterName" className="mr-1">
                    <strong>Name:
                    </strong>
                </label>
                <input type="search" name="query" id="characterName"></input>
                <button>search</button>
            </form>
        </div>
    )
}


export default SearchForm
//
//
// import { TouchableOpacity, View, Image } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import React from 'react';
//
// export default class Search extends React.Component {

//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);
//         this.state = {
//             showSearchBar: false, // control what ever to render the searchbar or just the icon
//         };
//     }
//     onClick() {
//         let { showSearchBar } = this.state;
//         this.setState({
//             showSearchBar: !showSearchBar,
//         });
//     }
//
//     render() {
//         const { showSearchBar } = this.state;
//         return (
//             <View>
//                 {!showSearchBar ? (
//                     <TouchableOpacity onPress={this.onClick}>
//                         <Image
//                             source={require('../images/tabs/search.png')}
//                             style={{ height: 40, width: 60 }}
//                             resizeMode={'contain'}
//                         />
//                     </TouchableOpacity>
//                 ) : (
//                     <SearchBar />
//                 )}
//             </View>
//         );
//     }
// }

