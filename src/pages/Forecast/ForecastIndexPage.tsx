import React, { useEffect } from "react";
import { fetchAllForecast } from "../../services/forecastService";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { formatDate } from "../../utils/dateUtils";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'name', headerName: 'Name', width: 250 },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 100,
        },
        {
            field: 'unit',
            headerName: 'Unit',
            sortable: true,
            width: 90,
        },
        {
            field: 'updatedDate', headerName: 'Update Date', width: 150,
            valueGetter: (value, row) => row.updatedDate ? formatDate(row.updatedDate) : 'unknown',
        },
        {
            field: 'createdDate', headerName: 'Create Date', width: 150,
            valueGetter: (value, row) => row.createdDate ? formatDate(row.createdDate) : 'unknown',
        },


    ];
    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <div>
                <h1>Forecast Index Page</h1>

                <Button variant="contained">Add</Button>


                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={forecastList}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[paginationModel.pageSize * 1, paginationModel.pageSize * 2, paginationModel.pageSize * 2]}
                        sx={{ border: 0 }}
                    />
                </Paper>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>ID</th>
                            <th style={tableHeaderStyle}>Name</th>
                            <th style={tableHeaderStyle}>Quantity</th>
                            <th style={tableHeaderStyle}>Unit</th>
                            <th style={tableHeaderStyle}>Created Date</th>
                            <th style={tableHeaderStyle}>Updated Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {forecastList.map((forecast, index) => (
                            <tr key={index} style={tableRowStyle}>
                                <td style={tableCellStyle}>{forecast.id}</td>
                                <td style={tableCellStyle}>{forecast.name}</td>
                                <td style={tableCellStyle}>{forecast.quantity}</td>
                                <td style={tableCellStyle}>{forecast.unit}</td>
                                <td style={tableCellStyle}>{formatDate(forecast.createdDate)}</td>
                                <td style={tableCellStyle}>{formatDate(forecast.updatedDate)}</td>
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


export default ForecastIndexPage;
