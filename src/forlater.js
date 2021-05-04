<GridComponent dataSource={data.records}>
     <ColumnsDirective>
          <ColumnDirective field='countryterritoryCode' headerText='country' textAlign='Right' width='100' />
          <ColumnDirective field='dateRep' headerText='date' width='150' />
          <ColumnDirective field='cases' headerText='cases' />
          <ColumnDirective field='deaths' headerText='deaths' />
          <ColumnDirective field='Cumulative_number_for_14_days_of_COVID-19_cases_per_100000' headerText='average' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
     </GridComponent>