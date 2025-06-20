import { useNavigate } from "react-router";
import useAuthStore from "../stores/authStore"
import { getMe } from "../api/user";
import { useEffect, useState } from "react";

//rfce
function ProtectRoute({ el, allows }) {
  // JS
  // const navigate = useNavigate;
  const [ok, setOk] = useState(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await getMe(token);
      // console.log('res :', res);
      const role = res.data.result.role;

      // if (allows.includes(role)) {
      //   setOk(true);

      // } else {
      //   setOk(false);

      // }
      
      setOk(allows.includes(role))


    } catch (error) {
      setOk(false);
      console.log(error);

    }
  }

  if (ok === null) {
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorization...</h1>
  }

  return el
}
export default ProtectRoute