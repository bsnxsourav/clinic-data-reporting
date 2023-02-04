import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const SPCDisplay = () => {
    const bpreading = {
        "normal": {
            "colour": "#388e3c",
            "message": "Normal"
        },
        "elevated": {
            "colour": "#ffb74d",
            "message": "Elevated"
        }, 
        "stage1":  {
            "colour": "#f57c00",
            "message": "High (Hypertension Stage 1)"
        },
        "stage2":  {
            "colour": "#e57373",
            "message": "High (Hypertension Stage 2)"
        },
        "danger":  {
            "colour": "#d32f2f",
            "message": "Very High (Hypertension Crisis, Consult doctor immediately)"
        }
    }

    const getFillColour = value => {
        if (value <= 120) {
            return bpreading.normal.colour;
        } else if (value <= 130) {
            return bpreading.elevated.colour;
        }else if (value <= 140) {
            return bpreading.stage1.colour;
        }else if (value <= 150) {
            return bpreading.stage2.colour;
        }else{
            return bpreading.danger.colour;
        }
    }; 

    const getFillMsg = value => {
        if (value <= 120) {
            return bpreading.normal.message;
        } else if (value <= 130) {
            return bpreading.elevated.message;
        }else if (value <= 140) {
            return bpreading.stage1.message;
        }else if (value <= 150) {
            return bpreading.stage2.message;
        }else{
            return bpreading.danger.message;
        }
    }

    const getToolTipData = value => {
        let msg = "";
        if (value <= 120) {
            msg = `Your BP was ${bpreading.normal.message}.`
        } else if (value <= 130) {
            msg = `Your BP was ${bpreading.elevated.message}.`
        }else if (value <= 140) {
            msg = `Your BP was ${bpreading.stage1.message}.`
        }else if (value <= 150) {
            msg = `Your BP was ${bpreading.stage2.message}.`
        }else{
            msg = `Your BP was ${bpreading.danger.message}.`
        }
        return msg;
    };

    function CustomTooltip({ payload, label, active }) {
        
        if (active) {
            return (
            <div className="custom-tooltip">
                <p className="label">{`Systolic mmHg : `} <span className='fw-semibold'>{payload[0].value}</span> </p>
                {/* <p className="intro">{getToolTipData(payload[0].payload.value)}</p> */}
                <p className="intro">Your BP was <span className='fw-semibold'>{getFillMsg(payload[0].payload.value)}</span> </p>
            </div>
            );
        }
        
        return null;
    }

    const data = [120,126,124,131,137,145, 160, 190, 200, 170, 150, 140, 125, 120];
    
    
    const chartData = [];
    data.forEach(element => {
        chartData.push({
            value: element,
            fill: getFillColour(element)
        })
    });


    return (
        <div className="bp-display m-4">
            <div className="row mb-3">
                <div className="col display-6 text-muted text-center">SPC Display</div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <BarChart width={600} height={200} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis tick={false} label="Blood Pressure Readings" />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}/>
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </div>                    
            </div>
        </div>
    );
}
 
export default SPCDisplay;

// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function App() {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// }

// App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
