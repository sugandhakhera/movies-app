import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen : false
        }
    };

    /*
        Function to open modal.
    */
    openModalHandler = () => {
        this.setState({ modalIsOpen : true } ) 
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen : false }) 
    }
    render(){
        return (
            <div > 
                <header className="app-header">
                <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal isOpen={this.state.modalIsOpen} contentLabel="Login" ariaHideApp={false} onRequestClose={this.closeModalHandler}>

                </Modal>

          </div> 
        )
    }
}

export default Header ;