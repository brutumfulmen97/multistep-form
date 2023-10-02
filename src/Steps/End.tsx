import { ImCheckmark } from "react-icons/im";

const End = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="rounded-full w-16 h-16 bg-rose-400 grid place-items-center">
                <div className="grid place-items-center w-10 h-10 bg-white rounded-full shadow">
                    <ImCheckmark
                        style={{ fill: "rgb(251,113,133)" }}
                        size={20}
                    />
                </div>
            </div>
            <h1 className="text-2xl font-bold text-blue-900">Thank you!</h1>
            <p className="w-3/4 text-gray-500 text-sm text-center">
                Thanks fro confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaimng.com
            </p>
        </div>
    );
};

export default End;
