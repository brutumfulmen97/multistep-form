import { useAppState } from "../context/state";
import { useForm } from "react-hook-form";
import { InfoValues, infoSchema } from "../form/schema";
import ErrorText from "../components/ErrorText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Info = () => {
    const [state, setState] = useAppState();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        defaultValues: state,
        mode: "onSubmit",
        resolver: zodResolver(infoSchema),
    });
    const navigate = useNavigate();

    const saveData = (data: InfoValues) => {
        setState({ ...state, ...data });
        console.log(state);
        navigate("/plan");
    };

    return (
        <div className="w-full flex flex-col justify-between">
            <div>
                <h1 className="text-2xl font-bold text-blue-900">
                    Personal info
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                    Please provide your name,email address, and phone number.
                </p>
            </div>
            <form
                id="info-form"
                onSubmit={handleSubmit(saveData)}
                className="flex flex-col gap-2 -mt-4"
            >
                <div className="flex justify-between">
                    <label
                        htmlFor="name"
                        className="block text-sm text-blue-900 font-semibold"
                    >
                        Name
                    </label>
                    <ErrorText>{errors.name?.message as string}</ErrorText>
                </div>
                <input
                    {...register("name", { required: true })}
                    className="outline focus:outline-gray-600 outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="text"
                    id="name"
                    placeholder="e.g. Vlatko Percic"
                />
                <div className="flex justify-between">
                    <label
                        htmlFor="email"
                        className="block text-sm text-blue-900 font-semibold"
                    >
                        Email Address
                    </label>
                    <ErrorText>{errors.email?.message as string}</ErrorText>
                </div>
                <input
                    {...register("email", { required: true })}
                    className="outline focus:outline-gray-600 outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="email"
                    id="email"
                    placeholder="e.g. vlatko@mail.com"
                />
                <div className="flex justify-between">
                    <label
                        htmlFor="phone"
                        className="block text-sm text-blue-900 font-semibold"
                    >
                        PhoneNumber
                    </label>
                    <ErrorText>{errors.phone?.message as string}</ErrorText>
                </div>
                <input
                    {...register("phone", { required: true })}
                    className="outline focus:outline-gray-600 outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="text"
                    id="phone"
                    placeholder="e.g. +381 65 123 321"
                />
            </form>
            <button
                type="submit"
                form="info-form"
                className="block text-sm w-24 ml-auto bg-blue-900 text-white py-2 rounded-md"
            >
                Next Step
            </button>
        </div>
    );
};

export default Info;
