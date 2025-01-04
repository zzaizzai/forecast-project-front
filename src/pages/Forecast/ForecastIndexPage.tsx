import React, { useEffect } from "react";
import { fetchAllForecast } from "../../services/forecastService";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { formatDate } from "../../utils/dateUtils";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
            valueGetter: (_, row) => row.updatedDate ? formatDate(row.updatedDate) : 'unknown',
        },
        {
            field: 'createdDate', headerName: 'Create Date', width: 150,
            valueGetter: (_, row) => row.createdDate ? formatDate(row.createdDate) : 'unknown',
        },


    ];
    const paginationModel = { page: 0, pageSize: 10 };

    return (
        <>
            <div>
                <h1>Forecast Index Page</h1>

                <input type="text" />
                <Button>Search</Button>

                <br />
                <AddCircleIcon>Add</AddCircleIcon>


                <Paper sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={forecastList}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[paginationModel.pageSize * 1, paginationModel.pageSize * 2, paginationModel.pageSize * 2]}
                        sx={{ border: 0 }}
                    />
                </Paper>

            </div>
        </>

    );
};

export default ForecastIndexPage;
