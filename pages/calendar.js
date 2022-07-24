import { useEffect, useState } from "react";

export default function Calendar() {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    
    return (
        <div class="min-w-32 min-h-48 p-3 mb-4 font-medium">
            <div class="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
                <div class="block rounded-t overflow-hidden  text-center ">
                    <div class="bg-primary text-white py-1">
                        Juli
                    </div>
                    <div class="pt-1 border-l border-r border-white bg-white">
                        <span class="text-5xl font-bold leading-tight">
                            25
                        </span>
                    </div>
                    <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white pb-2">
                        <span class="text-sm">
                            Montag
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}