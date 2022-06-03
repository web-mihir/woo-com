import { useEffect, useState } from "react";

export const useToken = (user) => {
   const [token, setToken] = useState(null);
   const email = user?.user?.email;

   useEffect(() => {
      (async () => {
         const url = `http://localhost:5000/user/${email}`;

         if (email) {
            const response = await fetch(url, {
               method: "PUT"
            });

            const resData = await response.json();
            setToken(resData);
            document.cookie = `accessToken=${resData?.token}`;
         }
      })();
   }, [user, email]);

   return [token];
}