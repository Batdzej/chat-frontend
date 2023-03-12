import { Card, TextField } from "@mui/material";
import React from "react";
import useRegistrationPresenter from "./useRegistrationPresenter";
import { PeopleAlt } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Registration(){
    const {getUsernameValue, onUsernameChange, getUsernameLabel, getPasswordValue, getPasswordLabel, onPasswordChange, getRepeatPasswordLabel,getRepeatPasswordValue, onRepeatPasswordChange} = useRegistrationPresenter()
    
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
          <TextField
         sx={{marginTop:'16px'}}
         value={getRepeatPasswordValue()}
         onChange={onRepeatPasswordChange}
         type='password'
          label={getRepeatPasswordLabel()} variant="outlined"/>
          
     </Card>
     </div>
 }
