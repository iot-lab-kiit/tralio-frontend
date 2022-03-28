import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Profile(props) {
  const data = [
    {
      id: 1,
      username: "something",
      firstName: "Manisa",
      lastName: "Basak",
      email: "something@g.com",
      password: "popop",
      gender: "female",
    },
    ];
    const [userData, setUserData] = useState({});

    const findData = () => {
        data.find(id === 1).then(se)    }
  return (
    <>
      <Box mt={8} />
      <Container maxWidth={"lg"}>{props.details}</Container>
      <Box mt={100} />
    </>
  );
}
export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/${apiVersion}/users/register`).then(
    (res) => console.log(res.json())
  );

  return {
    props: {
      details: data,
    },
  };
}
