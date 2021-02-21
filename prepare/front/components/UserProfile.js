import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
const UserProfile = ({ setIsLoggedIn }) => {
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card actions={[<div>dasd</div>, <div>dasd</div>, <div>dasd</div>]}>
      <Card.Meta avatar={<Avatar>TH</Avatar>} title={"taehoon"}></Card.Meta>
      <Button onClick={logout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
