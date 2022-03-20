// import Plotly from 'plotly.js';
// import { useEffect, useRef } from 'react';
// function Child({ win }) {
//   const container = useRef<HTMLElement>(null);
//   useEffect(() => {
//     console.log(win.HTMLElement);
//     // Plotly.prototype.document = win.document;
//     // import Plotly from "plotly.js-dist";
//     // const Plotly = require('plotly.js-dist')
//     var graphDiv = container.current;
//     Plotly.redraw.prototype.Lib = 100;

//     var data = [
//       {
//         x: [1999, 2000, 2001, 2002],
//         y: [10, 15, 13, 17],
//         type: 'scatter',
//       },
//     ];

//     var layout = {
//       title: 'Sales Growth',
//       xaxis: {
//         title: 'Year',
//         showgrid: false,
//         zeroline: false,
//       },
//       yaxis: {
//         title: 'Percent',
//         showline: false,
//       },
//     };
//     Plotly.newPlot(graphDiv, data, layout);
//     Plotly.extendTraces(graphDiv, { y: [[Math.random()]] }, [0]);
//     // Plotly.redraw.prototype.HTMLElement = win.HTMLElement;
//   }, []);
//   return (
//     <div
//       ref={container}
//       onClick={() => {
//         console.log(document);
//       }}
//     >
//       child
//     </div>
//   );
// }
