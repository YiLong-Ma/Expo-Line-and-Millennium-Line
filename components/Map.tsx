import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from  'leaflet';

const icon = L.icon({iconUrl: "/images/marker.png", iconSize: [25,25]});

const polyline: [number, number][] = [
    [49.27537, -123.08190],
    [49.26762, -123.06958],
    [49.26291, -123.04505],
    [49.26493, -123.03230],
    [49.27053, -123.01433],
    [49.26986, -123.00049],
    [49.26476, -122.98219],
    [49.26426, -122.96448],
    [49.25467, -122.93918],
    [49.25494, -122.91859],
    [49.25039, -122.89777],
    [49.26252, -122.88991],
    [49.27881, -122.84576],
    [49.27813, -122.82817],
    [49.27465, -122.80008],
    [49.28065, -122.79387],
    [49.28065, -122.79387],

]

const polyline2:[number, number][]= [
    [49.28979, -123.11086],
    [49.28560, -123.11959],
    [49.28340, -123.11627],
    [49.27966, -123.10983],
    [49.27369, -123.10013],
    [49.26352, -123.06952],
    [49.25056, -123.05643],
    [49.24495, -123.04719],
    [49.23903, -123.03282],
    [49.22984, -123.01267],
    [49.22813, -123.00352],
    [49.22200, -122.98806],
    [49.21669, -122.96035],
    [49.20303, -122.95097],
    [49.20441, -122.91280],
    [49.20957, -122.90524],
    [49.20912, -122.87310],
    [49.20834, -122.85435],
    [49.19757, -122.85367],
    [49.19155, -122.84543],
]

const redOptions = {color: 'red'}
const blueOptions = {color: 'blue'}
const fillBlueOptions = {color: 'blue'}

const Map = () => {
    return(
        <MapContainer
            style={{height: " 100vh"}}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href=""> By Elijah</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.24966, -123.00934]} icon={icon}>
                <Popup>
                    BCIT
                </Popup>
            </Marker>

            <Marker position={[49.28979, -123.11086]} icon={icon}>
                <Popup>
                    Waterfront station
                </Popup>
            </Marker>

            
            <Marker position={[49.28560, -123.11959]} icon={icon}>
                <Popup>
                    Burrard station
                </Popup>
            </Marker>

            <Marker position={[49.28340, -123.11627]} icon={icon}>
                <Popup>
                    Granville station
                </Popup>
            </Marker>

            <Marker position={[49.27966, -123.10983]} icon={icon}>
                <Popup>
                    Stadium-Chinatown station
                </Popup>
            </Marker>

            <Marker position={[49.27369, -123.10013]} icon={icon}>
                <Popup>
                    Main Street-Science world station
                </Popup>
            </Marker>

            <Marker position={[49.26352, -123.06952]} icon={icon}>
                <Popup>
                    Commercial Boardway station
                </Popup>
            </Marker>

            <Marker position={[49.25056, -123.05643]} icon={icon}>
                <Popup>
                    Nanaimo station
                </Popup>
            </Marker>

            <Marker position={[49.24495, -123.04719]} icon={icon}>
                <Popup>
                    29th Av station
                </Popup>
            </Marker>

            <Marker position={[49.23903, -123.03282]} icon={icon}>
                <Popup>
                    Joyce-Collingwood station
                </Popup>
            </Marker>

            <Marker position={[49.22984, -123.01267]} icon={icon}>
                <Popup>
                    Patterson station
                </Popup>
            </Marker>

            <Marker position={ [49.22813, -123.00352]} icon={icon}>
                <Popup>
                    Metrotown station
                </Popup>
            </Marker>

            <Marker position={ [49.22200, -122.98806]} icon={icon}>
                <Popup>
                    Royal Oak station
                </Popup>
            </Marker>

            <Marker position={ [49.21669, -122.96035]} icon={icon}>
                <Popup>
                    Edmonds station
                </Popup>
            </Marker>

            <Marker position={[49.20303, -122.95097]} icon={icon}>
                <Popup>
                    22nd street station
                </Popup>
            </Marker>

            <Marker position={[49.20957, -122.90524]} icon={icon}>
                <Popup>
                    New Westminister station
                </Popup>
            </Marker>

            <Marker position={[49.20957, -122.90524]} icon={icon}>
                <Popup>
                    Columbia station
                </Popup>
            </Marker>

            <Marker position={[49.20912, -122.87310]} icon={icon}>
                <Popup>
                    Scott road station
                </Popup>
            </Marker>

            <Marker position={[49.20834, -122.85435]} icon={icon}>
                <Popup>
                    gate way station
                </Popup>
            </Marker>

            <Marker position={[49.19757, -122.85367]} icon={icon}>
                <Popup>
                    surrey central station
                </Popup>
            </Marker>

            <Marker position={[49.19155, -122.84543]} icon={icon}>
                <Popup>
                    king george station
                </Popup>
            </Marker>

            <Marker position={[49.27537, -123.08190]} icon={icon}>
                <Popup>
                    VCC-clark station
                </Popup>
            </Marker>

            <Marker position={ [49.26762, -123.06958]} icon={icon}>
                <Popup>
                    Commercial-Broadway station
                </Popup>
            </Marker>

            <Marker position={[49.26291, -123.04505]} icon={icon}>
                <Popup>
                    renfrew station
                </Popup>
            </Marker>

            <Marker position={[49.26493, -123.03230]} icon={icon}>
                <Popup>
                    rupert  station
                </Popup>
            </Marker>

            <Marker position={[49.27053, -123.01433]} icon={icon}>
                <Popup>
                    gilmore station
                </Popup>
            </Marker>

            <Marker position={[49.26986, -123.00049]} icon={icon}>
                <Popup>
                    brentwood town centre station
                </Popup>
            </Marker>

            <Marker position={[49.26476, -122.98219]} icon={icon}>
                <Popup>
                    holdom station
                </Popup>
            </Marker>

            <Marker position={[49.26426, -122.96448]} icon={icon}>
                <Popup>
                    sperling station
                </Popup>
            </Marker>

            <Marker position={[49.25467, -122.93918]} icon={icon}>
                <Popup>
                    lake city way station
                </Popup>
            </Marker>

            <Marker position={[49.25494, -122.91859]} icon={icon}>
                <Popup>
                    production way-university station
                </Popup>
            </Marker>

            <Marker position={[49.25039, -122.89777]} icon={icon}>
                <Popup>
                    lougheed town centre station
                </Popup>
            </Marker>

            <Marker position={[49.26252, -122.88991]} icon={icon}>
                <Popup>
                    burquitlam station
                </Popup>
            </Marker>

            <Marker position={[49.27881, -122.84576]} icon={icon}>
                <Popup>
                    moody centre station
                </Popup>
            </Marker>

            <Marker position={ [49.27813, -122.82817]} icon={icon}>
                <Popup>
                    inlet centre station
                </Popup>
            </Marker>

            <Marker position={ [49.27465, -122.80008]} icon={icon}>
                <Popup>
                    coquitlam central station
                </Popup>
            </Marker>

            <Marker position={[49.28065, -122.79387]} icon={icon}>
                <Popup>
                    lincoln station
                </Popup>
            </Marker>

            <Marker position={[49.28065, -122.79387]} icon={icon}>
                <Popup>
                    lafarge lake-douglas station
                </Popup>
            </Marker>




            <Polyline pathOptions={redOptions} positions={polyline} />
            <Polyline pathOptions={blueOptions} positions={polyline2} />
        </MapContainer>
    )
}

export default Map;