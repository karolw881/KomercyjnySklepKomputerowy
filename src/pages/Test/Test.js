import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";

const Test = observer(() => {
    const navigate = useNavigate();
    const user = globalStore.getUser;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
          navigate("/");
        } else {
          console.log(user.imie);
          setLoading(false);
        }
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }

    return ( 
    <><h1>{user?.imie}</h1></>
     );
});
 
export default Test;