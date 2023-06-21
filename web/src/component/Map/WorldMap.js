import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json"

export default function WorldMapChart(props) {
    
  return (
    <ComposableMap projectionConfig={{scale: 300, center:[-30,25]}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#DDD"/>
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
