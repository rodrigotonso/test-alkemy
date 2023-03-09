import axios from "axios";

const client = axios.create({
    baseURL: "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com",
});

export default client