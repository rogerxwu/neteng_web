import useWindowDimensions from "../component/Hooks/useWindowDimension"
import EUMapChart from "../component/Map/EUMap"
import USMapChart from "../component/Map/USMap"
import WorldMapChart from "../component/Map/WorldMap"

export default function PageBackBone() {
    const { height, width } = useWindowDimensions()
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ height: height, width: width * 2 / 3 }}>
            <USMapChart scale={1000} center={[44, 40]} rotate={[140, 0, 0]} />
        </div>
        <div style={{ height: height, width: width / 3 }}>
            <EUMapChart scale={1200} center={[10, 50]} />
        </div>
        {/* <div style={{ height:height, width:width }}>
            <WorldMapChart />
        </div> */}



    </div>
}

