import { useAppState } from "../context/state";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const [state, setState] = useAppState();
    const navigate = useNavigate();

    console.log(state);
    return (
        <div className="w-full flex flex-col justify-between">
            <div>
                <h1 className="text-2xl font-bold text-blue-900">
                    Finishing up
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                    Double-check everything looks OK before confirming.
                </p>
            </div>
            <div>
                <h2 className="font-semibold">Personal info</h2>
                <p className="text-gray-500 text-sm mt-2">
                    {state.name} ({state.email})
                </p>
            </div>
            <div className="w-full bg-blue-100 flex justify-between items-center p-4 rounded-lg">
                <div>
                    <h2 className="font-semibold">
                        {state.plan} ({state.pricing})
                    </h2>
                    <p
                        className="text-sm hover:underline cursor-pointer"
                        onClick={() => navigate("/plan")}
                    >
                        Change
                    </p>
                </div>
                <p className="font-semibold">
                    ${state.price}/{state.pricing}
                </p>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => navigate("/plan")}
                    className="block w-24 text-sm bg-transparent text-gray-500 py-2 rounded-md"
                >
                    Go back
                </button>
                <button
                    onClick={() => navigate("/end")}
                    className="block w-24 text-sm bg-blue-900 text-white py-2 rounded-md"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Summary;
