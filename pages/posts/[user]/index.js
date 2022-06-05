
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

function PostByUser(props) {
  return (
    <>
      <div>Hello</div>
      <h1>Props will render here</h1>
    </>
  );
}


export default PostByUser;
