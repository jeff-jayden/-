import axios from "axios";
import BaseUrl from "@/api/baseUrl";


let requests= axios.create({
    BaseUrl,
    timeout: 3000,
})


export default requests