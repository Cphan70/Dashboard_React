import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Filter,
  Page,
  Selection,
  Edit,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { customersGrid, customersData } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="girdcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          width: 'auto',
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, Filter, Selection, Page, Edit, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
