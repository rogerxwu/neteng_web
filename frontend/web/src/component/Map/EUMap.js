import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json"

export default function EUMapChart(props) {

  return (
    <ComposableMap projectionConfig={{
      scale: props.scale,
      center: props.center
    }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
