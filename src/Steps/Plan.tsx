import { useState } from "react";
import { MdGamepad } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { useAppState } from "../context/state";
import { useNavigate } from "react-router-dom";

const Plan = () => {
    const [state, setState] = useAppState();
    const [pricing, setPricing] = useState(state.pricing || "monthly");
    const [plan, setPlan] = useState(state.plan);
    const navigate = useNavigate();

    const saveData = () => {
        if (pricing === "monthly") {
            switch (plan) {
                case "Arcade":
                    setState({
                        ...state,
                        price: 6,
                        pricing: "monthly",
                        plan: "Arcade",
                    });
                    break;
                case "Advanced":
                    setState({
                        ...state,
                        price: 9,
                        pricing: "monthly",
                        plan: "Advanced",
                    });
                    break;
                case "Pro":
                    setState({
                        ...state,
                        price: 12,
                        pricing: "monthly",
                        plan: "Pro",
                    });
                    break;
            }
        } else {
            switch (plan) {
                case "Arcade":
                    setState({
                        ...state,
                        price: 60,
                        pricing: "yearly",
                        plan: "Arcade",
                    });
                    break;
                case "Advanced":
                    setState({
                        ...state,
                        price: 90,
                        pricing: "yearly",
                        plan: "Advanced",
                    });
                    break;
                case "Pro":
                    setState({
                        ...state,
                        price: 120,
                        pricing: "yearly",
                        plan: "Pro",
                    });
                    break;
            }
        }

        navigate("/summary");
    };

    return (
        <div className="w-full flex flex-col justify-between">
            <div>
                <h1 className="text-2xl font-bold text-blue-900">
                    Select your plan
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="flex justify-between">
                <div
                    className={`${
                        plan === "Arcade"
                            ? "bg-gray-100 outline outline-1 outline-gray-400"
                            : "bg-white"
                    } w-1/4  text-center justify-center outline outline-1 outline-gray-300 rounded-md flex flex-col items-center p-4 gap-4 cursor-pointer hover:outline-2 `}
                    onClick={() => setPlan("Arcade")}
                >
                    <div className="w-12 h-12 rounded-full bg-orange-400 grid place-items-center p-3">
                        <MdGamepad
                            style={{ fill: "white" }}
                            className="w-full h-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-blue-900 text-lg font-semibold">
                            Arcade
                        </h2>
                        <p className="text-gray-500">
                            {pricing === "monthly" ? "$6/month" : "$60/year"}
                        </p>
                    </div>
                </div>
                <div
                    className={`${
                        plan === "Advanced"
                            ? "bg-gray-100 outline outline-1 outline-gray-400"
                            : "bg-white"
                    } w-1/4  text-center justify-center outline outline-1 outline-gray-300 rounded-md flex flex-col items-center p-4 gap-4 cursor-pointer  hover:outline-2`}
                    onClick={() => setPlan("Advanced")}
                >
                    <div className="w-12 h-12 rounded-full bg-pink-400 grid place-items-center p-3">
                        <FaGamepad
                            style={{ fill: "white" }}
                            className="w-full h-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-blue-900 text-lg font-semibold">
                            Advanced
                        </h2>
                        <p className="text-gray-500">
                            {pricing === "monthly" ? "$9/month" : "$90/year"}
                        </p>
                    </div>
                </div>
                <div
                    className={`${
                        plan === "Pro"
                            ? "bg-gray-100 outline outline-1 outline-gray-400"
                            : "bg-white"
                    } w-1/4  text-center justify-center outline outline-1 outline-gray-300 rounded-md flex flex-col items-center p-4 gap-4 cursor-pointer  hover:outline-2`}
                    onClick={() => setPlan("Pro")}
                >
                    <div className="w-12 h-12 rounded-full bg-blue-400 grid place-items-center p-3">
                        <IoGameControllerSharp
                            style={{ fill: "white" }}
                            className="w-full h-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-blue-900 text-lg font-semibold">
                            Pro
                        </h2>
                        <p className="text-gray-500">
                            {pricing === "monthly" ? "$12/month" : "$120/year"}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg w-full flex justify-around items-center">
                <p>Monthly</p>
                <input
                    onChange={(e) => {
                        if (e.target.checked === true) setPricing("yearly");
                        else setPricing("monthly");
                    }}
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]  focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem]   dark:bg-neutral-600 dark:after:bg-blue-400 dark:checked:bg-primary dark:checked:after:bg-primary   disable:opacity-30 disabled:cursor-not-allowed"
                    type="checkbox"
                    role="switch"
                    checked={pricing === "yearly"}
                    id="flexSwitchCheckDefault"
                />
                <p>Yearly</p>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => navigate("/")}
                    className="block w-24 text-sm bg-transparent text-gray-500 py-2 rounded-md"
                >
                    Go back
                </button>
                <button
                    onClick={() => saveData()}
                    className="block w-24 text-sm bg-blue-900 text-white py-2 rounded-md"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
};

export default Plan;
