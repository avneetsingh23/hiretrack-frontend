import { Outlet } from "react-router-dom";
import RecruiterSidebar from "./RecruiterSidebar";

function RecruiterLayout() {

    return (

        <div className="container-fluid">

            <div className="row">

                <div
                    className="col-md-3 bg-dark text-white"
                    style={{ minHeight: "100vh" }}
                >
                    <RecruiterSidebar />
                </div>

                <div className="col-md-9 p-4">

                    <Outlet />

                </div>

            </div>

        </div>

    );

}

export default RecruiterLayout;