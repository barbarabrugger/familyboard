import { useEffect, useState } from "react";
import dotenv from "dotenv";

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_WEATHER_AFFOLTERN);
            const json = await response.json();
            setWeather(json);
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img src={weather.current.condition.icon} alt="weather icon" className="w-32 h-32" />
                {weather.current.condition.text}
            </div>
        </div>
    );
}