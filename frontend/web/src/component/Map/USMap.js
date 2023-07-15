import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json"

export default function USMapChart(props) {

  return (
    <ComposableMap projectionConfig={{
      scale: props.scale,
      center: props.center,
      rotate: props.rotate
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
