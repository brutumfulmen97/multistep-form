import { FC } from "react";

interface InfoProps {}

const Info: FC<InfoProps> = () => {
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
            <form className="flex flex-col gap-2 -mt-4">
                <label
                    htmlFor="name"
                    className="block text-sm text-blue-900 font-semibold"
                >
                    Name
                </label>
                <input
                    className="outline outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="text"
                    name="name"
                    placeholder="e.g. Vlatko Percic"
                />
                <label
                    htmlFor="email"
                    className="block text-sm text-blue-900 font-semibold"
                >
                    Email Address
                </label>
                <input
                    className="outline outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="email"
                    name="email"
                    placeholder="e.g. vlatko@mail.com"
                />
                <label
                    htmlFor="phone"
                    className="block text-sm text-blue-900 font-semibold"
                >
                    PhoneNumber
                </label>
                <input
                    className="outline outline-gray-300 outline-1 p-2 w-full rounded-md"
                    type="text"
                    name="phone"
                    placeholder="e.g. +381 65 123 321"
                />
            </form>
            <button className="block ml-auto bg-blue-900 text-white p-2 rounded-md">
                Next Step
            </button>
        </div>
    );
};

export default Info;
