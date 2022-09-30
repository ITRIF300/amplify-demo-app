import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/workout_summary/1";
    const options = {        
        width: "1300px",
        height: "800px",
    };

    function initViz() {
        new tableau.Viz(ref.current, url,options);
        // Create a viz object and embed it in the container div.
    };

    useEffect(() => {
        initViz();
    },[]);


    return(
        <div>
            <p>Dashboard</p>
            <div ref={ref.current}> </div>
        </div>
        );
}

export default TableauEmbed;