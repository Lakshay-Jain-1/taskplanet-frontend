import { useEffect, useState } from "react";
import AddingTasks from "../componnent/AddingTasks";
import DeleteTask from "../componnent/DeleteTasks";
import { verifyingAdmin } from "../../../services/apiClient";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Admin() {
    const navigate = useNavigate()
    const [verified, setVerified] = useState(false)
    useEffect(() => {
        Verification()
    }, [])

    async function Verification() {
        const username = window.prompt("Username")
        let { verified } = await verifyingAdmin(username)
        setVerified(verified)
        console.log(verified)
        !verified ? navigate("/home") : ""
    }

    return (
        <>

            <AddingTasks />
            <DeleteTask />
        </>

    )
}