import React from "react";
import { Graph } from "react-d3-graph";


export default function D3Graph(params) {

    // the graph configuration, just override the ones you need
    const myConfig = {
        height: params.height,
        width: params.width,
        nodeHighlightBehavior: true,
        linkHighlightBehavior: true,
        //disableLinkForce: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
            labelProperty: 'name',
            labelPosition: 'bottom',
        },
        link: {
            highlightColor: "red",
            fontColor: 'black',
            fontWeight: "normal",
            highlightFontSize: 15,
            highlightFontWeight: "bolder",
            labelProperty: 'des',
            renderLabel: true,
            semanticStrokeWidth: true,

        },
        d3: {
            gravity: -1500,
        }
    };

    const onClickNode = function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    return <Graph
        id="graph-1" // id is mandatory
        data={params.data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
    />;
}