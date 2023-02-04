import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from 'recharts';

const BPDisplay = ({ records }) => {
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
    };

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
    };

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
            console.log(payload[0]);
            return (
                <div className="custom-tooltip p-2">
                    <p className="label">{`Systolic mmHg : `} <span className='fw-semibold'>{payload[0].value}</span> </p>
                    {/* <p className="intro">{getToolTipData(payload[0].payload.value)}</p> */}
                    <p className="intro">Your BP was <span className='fw-semibold'>{getFillMsg(payload[0].payload.y)}</span> </p>
                    <p className="desc">Record Date: {payload[0].payload.x}</p>
                </div>
            );
        }
        
        return null;
    }


    const data = [];
    
    return (
        <div className="bp-display mx-auto my-5">
            <div className="row mb-3">
                <div className="col display-6 text-muted text-center">Blood Pressure</div>
            </div>

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
                        <BarChart barSize={70} width={600} height={200} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis tick={false} label="Blood Pressure Records" />
                            <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}/>
                            <Bar dataKey="y" fill="#8884d8" />
                        </BarChart>
                    </div>                    
                </div>
            }
        </div>
    );
}
 
export default BPDisplay;
