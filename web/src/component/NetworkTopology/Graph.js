import React from "react";
import { Graph } from "react-d3-graph";


export default function NetworkTopologyGraph(params) {
    // graph payload (with minimalist structure)
    const data = {
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
        links: [
            { source: "Harry", target: "Sally" },
            { source: "Harry", target: "Alice" },
        ],
    };

    // the graph configuration, just override the ones you need
    const myConfig = {
        height: params.height,
        width: params.width,
        nodeHighlightBehavior: true,
        linkHighlightBehavior: true,
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
    };

    const onClickNode = function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    return <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
    />;
}