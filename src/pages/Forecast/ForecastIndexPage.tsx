import React, { useEffect } from "react";
import { fetchAllForecast } from "../../services/forecastService";

const ForecastIndexPage: React.FC = () => {

    const [forecastList, setForecastList] = React.useState<any[]>([]);


    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const data = await fetchAllForecast();
                console.log(data);
                setForecastList(data);
            } catch (error) {
                console.error("Error fetching forecast:", error);
            }
        };

        fetchForecast();
    }, []);

    return (
        <>
            <div>
                <h1>Forecast Index Page</h1>
                <ul>
                    {forecastList.map((forecast, index) => (
                        <li key={index}>
                            <h2>{forecast.id}</h2>
                            <p>{forecast.name}</p>
                            <p>{forecast.quantity}</p>
                            <p>{forecast.unit}</p>
                            <p>{forecast.createdDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
};


export default ForecastIndexPage;
