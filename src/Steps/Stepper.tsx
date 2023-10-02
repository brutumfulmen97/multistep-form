import { useLocation } from "react-router-dom";
import stepperBg from "../../public/stepper-bg.svg";

export const Stepper = () => {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return (
            "p-2 w-8 h-8 rounded-full flex justify-center items-center " +
            (path === location.pathname
                ? "bg-blue-400"
                : "text-white bg-transparent border border-1 border-white")
        );
    };

    return (
        <nav
            className={`h-full flex-shrink-0 w-1/3 bg-stepper bg-cover rounded-lg p-4`}
        >
            <div className="mt-4">
                <ol className="">
                    <li className="flex items-center gap-4 mb-8">
                        <div className={getLinkClass("/")}>
                            <p>1</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-blue-400 text-xs">
                                STEP 1
                            </span>
                            <span className="text-white text-sm font-semibold">
                                YOUR INFO
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 mb-8">
                        <div className={getLinkClass("/plan")}>
                            <p>2</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-blue-400 text-xs">
                                STEP 2
                            </span>
                            <span className="text-white text-sm font-semibold">
                                SELECT PLAN
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 mb-8">
                        <div className={getLinkClass("/summary")}>
                            <p>3</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-blue-400 text-xs">
                                STEP 3
                            </span>
                            <span className="text-white text-sm font-semibold">
                                SUMMARY
                            </span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
    );
};
