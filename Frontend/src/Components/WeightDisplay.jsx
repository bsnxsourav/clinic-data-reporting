import { CartesianGrid, XAxis, Tooltip, Area, AreaChart } from 'recharts';
const WeightDisplay = ({ records }) => {
    const bmi = {
        "underweight": {
            "fill" : "#0288d1",
            "message": "Underweight"
        },
        "normal": {
            "fill" : "#388e3c",
            "message": "Normal"
        },
        "overweight": {
            "fill" : "#fbc02d",
            "message": "Overweight"
        },
        "obese": {
            "fill" : "#f57c00",
            "message": "Obese"
        },
        "extremely obese":{
            "fill" : "#e64a19",
            "message": "Extremely Obese"
        }
    }

    const getFillColour = value => {
        const bmiValue = value / (1.6 * 1.6);
        if (bmiValue <= 18.5) {
            return bmi.underweight.fill;
        } else if (bmiValue <= 24.9) {
            return bmi.normal.fill;
        }else if (bmiValue <= 29.9) {
            return bmi.overweight.fill;
        }else if (bmiValue <= 34.9) {
            return bmi.obese.fill;
        }else{
            return bmi['extremely obese'].fill;
        }
    }; 

    const getToolTipData = value => {
        let msg = "";
        console.log(value);
        const bmiValue = value / (1.6 * 1.6);
        console.log(bmiValue);
        if (bmiValue <= 18.5) {
            msg = `You are ${bmi.underweight.message}.`;
        } else if (bmiValue <= 24.9) {
            msg = `You are ${bmi.normal.message}.`;
        }else if (bmiValue <= 29.9) {
            msg = `You are ${bmi.overweight.message}.`;
        }else if (bmiValue <= 34.9) {
            msg = `You are ${bmi.obese.message}.`;
        }else{
            msg = `You are ${bmi['extremely obese'].message}.`;
        }
        return msg;
    };

    function CustomTooltip({ payload, label, active }) {
        
        if (active) {
            console.log(payload[0]);
            return (
                <div className="custom-tooltip p-2">
                    <p className="label">Weight KGs : <span className='fw-semibold'>{payload[0].value}</span> </p>
                    <p className="intro">Your Weight was <span className='fw-semibold'>{getToolTipData(parseInt(payload[0].value))}</span> </p>
                    <p className="desc">Record Date: {payload[0].payload.x}</p>
                </div>
            );
        }
        
        return null;
    }

    
    const data = [];
    // records.slice(records.length - 10).forEach(record => {
    //     data.push({
    //         x: record.recordTime.split('T')[0],
    //         y: record.value,
    //         fill: getFillColour(record.value)
    //     });
    // });
    return (
        <div className="weight-display mx-auto my-5">
            <div className="row mb-3">
                <div className="col display-6 text-muted text-center">Weight</div>
            </div>
            {/* {console.log(records.length)} */}
            {records.length === 0 ? 
                <div className="row mb-3">
                    <p className="display-6 text-center">No Records</p>
                </div> : 
                <div className="row mb-3">
                    <div className="col">
                        {
                            records.slice(records.length - 10).forEach(record => {
                                data.push({
                                    x: record.recordTime.split('T')[0],
                                    y: record.value,
                                    fill: getFillColour(record.value)
                                });
                            })
                        }
                        <AreaChart width={600} height={200} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <Tooltip /> */}
                            <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}/>
                            <XAxis tick={false} label="Weight Records" />
                            <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </div>
                </div>}
        </div>
    );
}
 
export default WeightDisplay;