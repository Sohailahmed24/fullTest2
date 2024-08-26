import axios from "axios"
import { useEffect } from "react"


const App=()=>{

    useEffect(()=>{
        getApi()
    },[])

    const getApi = async () => {
        try {
          const { data } = await axios.get("/api/restaurant/outlet/details");
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    return(
        <div>APP JS</div>
    )
}

export default App