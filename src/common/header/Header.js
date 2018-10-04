import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen : false,
            value : 0
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
    changeTabHandler = (event, value) => {
        this.setState({value : value})
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
                <Tabs value={this.state.value} onChange={this.changeTabHandler}>
                    <Tab label="login"> </Tab>
                    <Tab label="register"></Tab>
                </Tabs>

                </Modal>

          </div> 
        )
    }
}

export default Header ;