import { Card, TextField, Button } from "@mui/material";
import React from "react";
import useLoginPresenter from "./useLoginPresenter";
import { PeopleAlt } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Login(){
    const {getRegistrationLabel, getRegistrationLink, getButtonLabel, onButtonClick,getUsernameValue, onUsernameChange, getUsernameLabel, getPasswordValue, getPasswordLabel, onPasswordChange} = useLoginPresenter()
    
   return <div style={{ height:'100vh', display:"flex"}}><Card
   sx={{
    width:'80vw',
    margin:'auto',
    padding: '16px',
    height:'80vh',
    display: 'flex',
    flexDirection: 'column'
   }}
   >
    <PeopleAlt />
        <TextField
        
        value={getUsernameValue()}
        onChange={onUsernameChange}
         label={getUsernameLabel()} variant="outlined" />
        <TextField
        sx={{marginTop:'16px'}}
        value={getPasswordValue()}
        onChange={onPasswordChange}
        type='password'
         label={getPasswordLabel()} variant="outlined"/>
         <Button 
                 sx={{marginTop:'16px'}}
         onClick={onButtonClick}>
{getButtonLabel()}
         </Button>
         <Link to={getRegistrationLink()}>{getRegistrationLabel()}</Link>
    </Card>
    </div>
}

