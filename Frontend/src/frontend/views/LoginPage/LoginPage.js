import React, { createRef } from "react";
import { Button, Card } from "@mui/material";
import UserController from "../../controllers/Users";

const LoginPage = (props)=>{

  const usernameRef = createRef();
  const passwordRef = createRef();
  const submit = () =>{
    const data = {
      username: usernameRef.current,
      passwordRef: passwordRef.current,
    }
    const res = await UserController.loginUser(data);
    if (res.status){
      
    }
    
  }

  return (
    <div>
      <Card>
        <TextField
          id="outlined-disabled"
          label="用户名"
          ref={usernameRef}
        />
        <TextField
          id="outlined-disabled"
          label="密码"
          type="password"
          ref={passwordRef}
        />
        <Button variant="outlined">登录</Button>
      </Card>
    </div>
  )
}