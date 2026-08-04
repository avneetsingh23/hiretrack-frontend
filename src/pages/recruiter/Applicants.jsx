import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../api/axiosConfig";

function Applicants() {

    const [applications, setApplications] = useState([]);


    const fetchApplicants = useCallback(async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axiosInstance.get(
                "/applications/recruiter/applicants",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setApplications(response.data);

        } catch (error) {

            console.log(error);

        }

    }, []);


    useEffect(() => {

        fetchApplicants();

    }, [fetchApplicants]);


    const downloadResume = async (userId) => {

        try {

            const token = localStorage.getItem("token");

            const response = await axiosInstance.get(
                `/users/resume/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    responseType: "blob"
                }
            );


            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );


            const link = document.createElement("a");

            link.href = url;

            link.setAttribute(
                "download",
                "resume.pdf"
            );


            document.body.appendChild(link);

            link.click();

            link.remove();


        } catch (error) {

            console.log(error);

        }
    };


    return (

        <div className="container mt-4">

            <h2>
                Applicants
            </h2>


            <table className="table table-bordered mt-3">

                <thead>

                <tr>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Resume</th>

                </tr>

                </thead>


                <tbody>

                {
                    applications.length > 0 ?

                        applications.map((app) => (

                            <tr key={app.id}>

                                <td>
                                    {app.user.firstName} {app.user.lastName}
                                </td>


                                <td>
                                    {app.user.email}
                                </td>


                                <td>

                                    {
                                        app.user.resumeUrl ?

                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() =>
                                                    downloadResume(app.user.id)
                                                }
                                            >
                                                Download Resume
                                            </button>

                                            :

                                            "Not Uploaded"
                                    }

                                </td>


                            </tr>

                        ))

                        :

                        <tr>

                            <td colSpan="3" className="text-center">
                                No Applicants Found
                            </td>

                        </tr>

                }

                </tbody>


            </table>


        </div>

    );

}

export default Applicants;