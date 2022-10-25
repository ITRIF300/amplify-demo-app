import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
    const ref = useRef(null);
    const url = "https://prod-apnortheast-a.online.tableau.com/t/itrif300/views/wellshima/sheet0?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";
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