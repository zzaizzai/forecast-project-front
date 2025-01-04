import React, { useEffect } from "react";
import { fetchAllResult } from "../../services/resultService";
import Button from '@mui/material/Button';

const ResultIndexPage: React.FC = () => {

    const [forecastList, setForecastList] = React.useState<any[]>([]);


    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const data = await fetchAllResult();
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
                <h1>Result Index Page</h1>

                <Button variant="contained">Add</Button>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Quantity</th>
                        <th style={tableHeaderStyle}>Unit</th>
                        <th style={tableHeaderStyle}>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {forecastList.map((forecast, index) => (
                        <tr key={index} style={tableRowStyle}>
                            <td style={tableCellStyle}>{forecast.id}</td>
                            <td style={tableCellStyle}>{forecast.name}</td>
                            <td style={tableCellStyle}>{forecast.quantity}</td>
                            <td style={tableCellStyle}>{forecast.unit}</td>
                            <td style={tableCellStyle}>{forecast.createdDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            </div>
        </>

    );
};

const tableHeaderStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f4f4f4',
};

const tableRowStyle = {
    borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px'
};


export default ResultIndexPage;
