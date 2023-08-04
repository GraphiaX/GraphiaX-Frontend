import React from 'react'
import Graph from 'react-vis-network-graph'

export default function GraphView ({ graph }) {

    // const graph = {
    //     nodes: [
    //         { 
    //             id: 0, 
    //             group: "mints",
    //             color: {
    //                 border: "#25aaaa",
    //                 background: "#25c5df"
    //             },
    //             shape: "circle"
    //         },
    //         {
    //             id: "b315e0ac-321a-4400-bd0c-93852cbc7377", 
    //             label: "<b>App</b>\n<code>Path: src/App</code>\n<code>Type: functional</code>\n<code>Dependencies: [react, react-dom]</code>\n<code>Dependents: [2]</code>\n<code>Used Hooks: [useState, useEffect]</code>", 
    //         },
    //         {
    //             id: "d50fa1a3-4f3d-4559-bd5a-8ef2de8801fc", 
    //             label: "<b>Header</b>\n<code>Path: src/App</code>\n<code>Type: functional</code>\n<code>Dependencies: [react, react-dom]</code>\n<code>Dependents: [2]</code>\n<code>Used Hooks: [useState, useEffect]</code>", 
    //         },
    //         {
    //             id: 3, 
    //             label: "<b>Logo</b>\n<code>Path: src/App</code>\n<code>Type: functional</code>\n<code>Dependencies: [react, react-dom]</code>\n<code>Dependents: [2]</code>\n<code>Used Hooks: [useState, useEffect]</code>", 
    //         },
    //         {
    //             id: 4, 
    //             label: "<b>NavBar</b>\n<code>Path: src/App</code>\n<code>Type: functional</code>\n<code>Dependencies: [react, react-dom]</code>\n<code>Dependents: [2]</code>\n<code>Used Hooks: [useState, useEffect]</code>", 
    //         },
    //     ],
    //     edges: [
    //         {
    //             from: 0,
    //             to: "b315e0ac-321a-4400-bd0c-93852cbc7377",
    //             arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "arrow"}}
    //         },
    //         {
    //             from: "b315e0ac-321a-4400-bd0c-93852cbc7377", 
    //             to: "d50fa1a3-4f3d-4559-bd5a-8ef2de8801fc", 
    //         },
    //         {
    //             from: "d50fa1a3-4f3d-4559-bd5a-8ef2de8801fc", 
    //             to: 3, 
    //             label: "Import",
    //         },
    //         {
    //             from: "b315e0ac-321a-4400-bd0c-93852cbc7377", 
    //             to: 4, 
    //         },  
    //         {
    //             from: 4,
    //             to: 3
    //         }    
    //     ]
    // }

    console.log(graph)

    var options = {
        physics: {
            stabilization: false,
            barnesHut: {
              gravitationalConstant: -80000,
              springConstant: 0.01,
              springLength: 200,
            },
        },
        // interaction: {
        //     tooltipDelay: 200,
        //     hideEdgesOnDrag: false,
        //     navigationButtons: false
        // },
        nodes: {
            shape: "box",
            scaling: {
                min: 10,
                max: 30,
            },
            margin: 10,
            borderWidth: 2,
            size: 40,
            widthConstraint: {
                maximum: 360,
            },
            color: {
                border: "#25c5df",
                background: "#1E1E1E"
            },
            font: {
                color: "white", 
                multi: true, 
                face: "Monospace", 
                align: "left", 
                size: 22 
            },
        },
        edges: {
            width: 0.15,
            color: "#25c5df",
            // smooth: {
            //     type: "continuous",
            // },
            font: {face: "Monospace"},
            smooth: {type: "curvedCW"}, 
            arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}
        },
        shadow: false,
        smooth: false,
        height: "1080px",
        width: "100%"
    }

    return (
        <div className='container'>
            <Graph 
                graph={graph}
                options={options}
            />
        </div>
      )
}