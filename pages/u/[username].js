
import Box from "@mui/material/Box";
import PortfolioTemplate1 from "../../container/PortfolioTemplate/PortfolioTemplate1";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

export default function Portfolio(props) {
  console.log(props.portfolio)
    return (
        <>
            <PortfolioTemplate1 
                portfolio={props.portfolio}
            />
        </>
    );
}

export async function getServerSideProps(context) {
  const {username} = context.query;
  const query = `username=${username}`;
  const url = `${API_URL}/api/${apiVersion}/portfolio/get-single-portfolio?${query}`;
  const data = await fetch(url).then((res) => res.json());

  return {
      props: {
          portfolio: data,
      },
  };
}