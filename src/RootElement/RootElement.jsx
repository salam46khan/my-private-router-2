import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const RootElement = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootElement;