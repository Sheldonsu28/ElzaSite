import React, { useState } from "react";
import { Button, Card } from "@mui/material";

const LoginPage = (props)=>{

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <div>
      <Card>
        <TextField
          id="outlined-disabled"
          label="用户名"
        />
        <TextField
          id="outlined-disabled"
          label="密码"
          type="password"
        />
      </Card>
      <Button variant="outlined">注册</Button>

      
    </div>
  )
}