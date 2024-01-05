import React, { useEffect, useMemo, useReducer, useState } from 'react';
import './spacevue.css';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgChartsReact } from 'ag-charts-react';
import Navbar from '../navbar/Navbar';

let initialValue = {
  spaceData: [],
  loading: true,
  error: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        spaceData: action.payload,
        loading: false,
      };
    case 'FECTH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
function SpacevueTable() {
  // const [spaceData, setSpaceData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const defaultColDef = useMemo(
    () => ({
      filter: true,
      editable: true,
    }),
    []
  );

  const [colDefs, setColDefs] = useState([
    { field: 'mission', checkboxSelection: true },
    { field: 'company' },
    { field: 'location' },
    {
      field: 'date',
      valueFormatter: (params) => params.value.toLocaleString(),
    },
    {
      field: 'price',
      valueFormatter: (params) => '₹ ' + params.value.toLocaleString(),
    },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const result = await axios.get(
          'https://www.ag-grid.com/example-assets/space-mission-data.json'
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FECTH_FAILURE', payload: error.message });
      }
    };
    fetchData();
  }, []);

  const chartOptions = {
    series: [
      {
        data: state.spaceData,
        type: 'pie',
        calloutLabelKey: 'mission',
        sectorLabelKey: 'price',
        angleKey: 'price',
        calloutLabel: {
          offset: 10,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar logValue="logout" />
      <div className="space-main">
        <div
          className="ag-theme-quartz"
          style={{ height: 500, width: 1000, margin: 20 }}
        >
          {state.loading ? (
            <h1>....Loading</h1>
          ) : (
            <AgGridReact
              defaultColDef={defaultColDef}
              rowData={state.spaceData}
              columnDefs={colDefs}
              pagination={true}
              rowSelection="multiple"
            />
          )}
        </div>
        <div className="chart">
          {state.loading ? (
            <h1>....Loading</h1>
          ) : (
            <AgChartsReact options={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SpacevueTable;
