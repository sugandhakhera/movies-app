import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Header from '../../common/header/Header';
//import Details from '../../screens/details/Details';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import './BookShow.css'; 

class BookShow extends Component {


backToMovieDetailsHandler = () => {
    ReactDOM.render(<Home />, document.getElementById('root'));
}


    render() {
        return (
            <div>
                <Header />

                  <div className="back">
                    <Typography onClick={this.backToMovieDetailsHandler}>
                        &#60; Back to Movie Details
                        </Typography>
                </div>

                <div>
                    BOOK SHOW 
                </div>      
            </div>
        );

    }
}
export default BookShow;