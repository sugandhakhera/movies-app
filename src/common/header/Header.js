import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from  '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props) {
    return (
        <Typography component="div" style={{padding:0 , textAlign : 'center'}}>
         {props.children}
         </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
} 


class Header extends Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen : false,
            value : 0,
            username : "",
            usernameRequired : 'dispNone',
            password : "",
            passwordRequired : 'dispNone',
            firstname : "" ,
            firstnameRequired : 'dispNone',
            lastname : "" ,
            lastnameRequired : 'dispNone',
            email : "" ,
            emailRequired : 'dispNone',
            contactno : "" ,
            contactnoRequired : 'dispNone',
            passwordr : "" ,
            passwordrRequired : 'dispNone',
        }
    };

    /*
        Function to open modal.
    */
    openModalHandler = () => {
        this.setState({ modalIsOpen : true } ) 
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen : false }) ;
        this.setState( { usernameRequired : 'dispNone' } ) ;
        this.setState( { value : 0 }) ;
        this.setState({ passwordRequired : 'dispNone'}) ;
    }
    changeTabHandler = (event, value) => {
        this.setState({value : value})
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" })
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" })

    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }


    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" })
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" })
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" })

    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value })
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value })
    }

    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value })
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
                <Modal  style={customStyles} isOpen={this.state.modalIsOpen} contentLabel="Login" ariaHideApp={false} onRequestClose={this.closeModalHandler}>
                <Tabs className="tabs" value={this.state.value} onChange={this.changeTabHandler}>
                    <Tab label="login"> </Tab>
                    <Tab label="register"></Tab>
                </Tabs>
                {this.state.value === 0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username"> Username</InputLabel>
                        <Input type="text" id="username" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>     
                        <FormHelperText className={this.state.usernameRequired}>
                            <span className="red">required</span>
                        </FormHelperText>  
                    </FormControl>
                    <br/> <br/>
                    <FormControl required>
                        <InputLabel htmlFor="password"> Password</InputLabel>
                        <Input type="password" id="password" password={this.state.password}  onChange={this.inputPasswordChangeHandler} ></Input>   
                        <FormHelperText className={this.state.passwordRequired}>
                            <span className="red">required</span>
                        </FormHelperText>        
                    </FormControl> <br/> <br/>

                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                            Login
                        </Button>
                </TabContainer>
                }

                {this.state.value === 1 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="firstname"> First Name</InputLabel>
                        <Input type="text" id="firstname" username={this.state.firstname} onChange={this.inputFirstnameChangeHandler} ></Input>                         
                        <FormHelperText className={this.state.firstnameRequired}>
                            <span className="red">required</span>
                        </FormHelperText> 
                    </FormControl>
                    <br/> <br/>
                    <FormControl required>
                        <InputLabel htmlFor="lastname"> Last Name</InputLabel>
                        <Input type="text" id="lastname" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>  
                        <FormHelperText className={this.state.lastnameRequired}>
                            <span className="red">required</span>
                        </FormHelperText>                        
                    </FormControl>
                    <br/> <br/>
                    <FormControl required>
                        <InputLabel htmlFor="email"> Email</InputLabel>
                        <Input type="text" id="email" email={this.state.email} onChange={this.inputEmailChangeHandler} ></Input>                         
                        <FormHelperText className={this.state.emailRequired}>
                            <span className="red">required</span>
                        </FormHelperText>     
                    </FormControl>
                    <br/> <br/>
                    <FormControl required>
                        <InputLabel htmlFor="passwordr"> Password</InputLabel>
                        <Input type="password" id="passwordr" ></Input>                         
                    </FormControl>
                    <br/> <br/>
                    <FormControl required>
                        <InputLabel htmlFor="contactno"> Contact No.</InputLabel>
                        <Input type="text" id="contactno" ></Input>                         
                    </FormControl>
                    <br/> <br/>
                    <Button variant="contained" color="primary" onClick={this.registerClickHandler}>
                        Register
                    </Button>
                </TabContainer>
                }




                </Modal>

          </div> 
        )
    }
}

export default Header ;