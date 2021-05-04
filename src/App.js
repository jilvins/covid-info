import React, {useState, useEffect} from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, 
  Page, Inject, Filter, Group } from '@syncfusion/ej2-react-grids'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
        fetch("https://opendata.ecdc.europa.eu/covid19/casedistribution/json/")
        .then(res=>res.json())
        .then(
          data => {setData(data)}
        )
        }, []);
    
  return (
    <div style={{margin: '10%', marginTop: '5%'}}>
      
     <GridComponent dataSource={data.records} allowPaging={true} pageSettings={{pageSize: 6}}
     allowFiltering={true} allowGrouping={true} >
     <ColumnsDirective>
     <ColumnDirective field='countriesAndTerritories' headerText='country' textAlign='Right' width='100' />
          <ColumnDirective field='cases' headerText='cases' width='150' />
          <ColumnDirective field='deaths' headerText='deaths' />
          <ColumnDirective field='deaths' headerText='deaths' />
          <ColumnDirective field='Cumulative_number_for_14_days_of_COVID-19_cases_per_100000' headerText='average' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
     </GridComponent>
    </div>
  );
}

export default App;
