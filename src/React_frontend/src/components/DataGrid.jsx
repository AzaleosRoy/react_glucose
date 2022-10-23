import React from "react";
import Note from "./Note";
import GridDataRows from "./GridDataRows";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "../../../../node_modules/@material-ui/core/index";



function DataGrid(props) {
  return (
    <div className="note">
      <table id="table">
          <thead>
               <tr>
                    <th>Reading</th>
                    <th>Reading</th>
               </tr>               
          </thead>
          <tbody>
               <tr>
                    {/* <GridDataRows /> */}
                    <td>Test Data</td>
                    <td>Test Data</td>
               </tr>               
          </tbody>
      </table>
    </div>
  );
}

export default DataGrid;


// import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";



// function DataGrid(props) {
//   return (
//     <div className="note">
//       <table id="table">
//           <thead>
//           <tr>
//                <th>Reading</th>
//                <th>Note</th>
//           </tr>               
//           </thead>
//           <tbody>
//                <tr>
//                     <td>Test Data</td>
//                     <td>Test Data</td>
//                </tr>               
//           </tbody>
//       </table>
//     </div>
//   );
// }

// export default DataGrid;
