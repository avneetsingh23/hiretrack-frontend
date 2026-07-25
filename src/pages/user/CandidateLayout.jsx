import CandidateSidebar from "../../components/layout/CandidateSidebar";
import { Outlet } from "react-router-dom";

function CandidateLayout() {

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-3 bg-dark text-white vh-100">
                    <CandidateSidebar />
                </div>

                <div className="col-md-9 p-4">
                    <Outlet />
                </div>

            </div>
        </div>
    );

}

export default CandidateLayout;