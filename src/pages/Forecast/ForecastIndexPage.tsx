import React, { useEffect } from "react";

const ForecastIndexPage: React.FC = () => {

    const [forecastList, setForecastList] = React.useState<any[]>([]);


    useEffect(() => {
        fetch("http://localhost:8080/api/forecast/all")
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
                setForecastList(data);
            });
    }, []);

    return (
        <>
            <div>
                <h1>Forecast Index Page</h1>
            </div>
        </>

    );
};


export default ForecastIndexPage;
