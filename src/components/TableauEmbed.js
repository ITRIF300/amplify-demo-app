import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
    const ref = useRef(null);
    const url = "https://prod-apnortheast-a.online.tableau.com/t/itrif300/views/workout_summary/1_1/41f104de-4c86-418f-86d5-b25e4f2d186a/f0c03796-02df-426d-b417-5be03b6c56ef?:display_count=n&:showVizHome=n&:origin=viz_share_link";
    const options = {        
        width: "1600px",
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
            <div ref={ref.current}> </div>
        </div>
        );
}

export default TableauEmbed;