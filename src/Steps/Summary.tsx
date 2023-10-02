import { FC } from "react";
import { useAppState } from "../context/state";

interface SummaryProps {}

const Summary: FC<SummaryProps> = ({}) => {
    const [state, setState] = useAppState();

    console.log(state);
    return <div>Summary</div>;
};

export default Summary;
