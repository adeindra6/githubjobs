import React, {useState, useEffect} from "react";
import axios from "axios";
import {api_url} from "../variables.js";
import {useSelector} from "react-redux";
import "../styles.css";

const JobList = (props) => {
    const [jobList, setJobList] = useState([]);

    const {jwt_token} = useSelector((state) => {
        return{
            jwt_token: state.user.jwt_token,
        };
    });

    const getJobList = async () => {
        await axios
            .get(api_url + "/api/job-list", {
                headers: {
                    "Authorization": `Bearer ${jwt_token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setJobList(response.data);
            })
            .then((error) => {
                console.log(error.response.data);
                alert(error);
            });
    };

    useEffect(() => {
        getJobList();
    }, []);

    return(
        <div className="center">
            <h1>Job List</h1>
            
            <h3 className="mt-4">Search by</h3>
            <input type="text" placeholder="description" />
            <input type="text" placeholder="location" />
        </div>
    );
};

export default JobList;