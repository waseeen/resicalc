import { ResistorColor } from '../../types/ResistorColor'
import classes from './Resistor.module.css'
interface ResistorProps {
  resistorColors: ResistorColor[]
}

const Resistor = ({ resistorColors }: ResistorProps) => {
  return (
    <div className={classes.resistor}>
      <svg
        viewBox="0 0 65.095695 19.999922"
        version="1.1"
        id="resistor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs1" />
        <g id="root" transform="translate(-39.531313,-58.618324)">
          <rect
            style={{
              fill: '#a4a19e',
              fillOpacity: 1,
              stroke: '#000000',
              strokeWidth: 0.128101
            }}
            id="wire"
            width="64.967598"
            height="0.97309202"
            x="39.595364"
            y="68.131645"
          />
          <path
            id="base"
            style={{
              fill: '#e5cca9',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 50.123956,58.686654 c -2.103189,1.21e-4 -3.808126,1.294293 -3.808114,2.890701 l -0.0028,0.0029 h -0.01135 v 0.0065 0.256956 13.549146 0.256958 0.0065 h 0.01134 l 0.0028,0.0029 c -1.2e-5,1.596409 1.705231,2.89058 3.808421,2.890701 2.103175,-3.3e-5 3.748478,-0.390821 3.808117,-1.986585 0,-0.334528 -0.0028,-0.333009 0.437489,-0.667157 0.316413,-0.240168 0.310995,-0.23975 0.894279,-0.23975 10.982274,0.0021 32.830208,0.0066 33.371999,0 0.583316,0 0.577879,-4.18e-4 0.8943,0.23975 0.44044,0.334148 0.437487,0.332629 0.437487,0.667157 0.05967,1.595845 1.705082,1.986591 3.808425,1.986585 2.103352,6e-6 3.808434,-1.294211 3.808419,-2.890701 l 0.004,-0.0029 h 0.01139 v -0.0065 -0.256958 -13.549147 -0.256956 -0.0065 h -0.01139 l -0.004,-0.0029 c 1.5e-5,-1.59649 -1.705067,-2.890707 -3.808419,-2.890701 -2.103343,-6e-6 -3.748754,0.39074 -3.808425,1.986584 0,0.334528 0.004,0.333009 -0.437487,0.667157 -0.316421,0.240169 -0.310984,0.23975 -0.8943,0.23975 -0.541791,-0.0066 -22.389725,-0.0021 -33.372002,0 -0.583281,0 -0.577863,4.19e-4 -0.894276,-0.23975 C 53.92952,61.006253 53.93237,61.00777 53.93237,60.673243 53.87273,59.077478 52.227428,58.686692 50.124253,58.686659 Z"
          />
        </g>
        <g id="colors" transform="translate(1.2450267e-5,-24.406229)">
          <path
            id="line1"
            style={{
              fill: resistorColors[0].color,
              visibility: resistorColors[0].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 9.0330635,24.7302 v 19.351756 c 0.4765591,0.162855 1.0035885,0.255523 1.5600865,0.255554 0.723713,-9e-6 1.385958,-0.05185 1.955284,-0.177583 V 24.652231 C 11.979108,24.526507 11.316863,24.474658 10.59315,24.474647 h -2.3e-4 c -0.556415,3.1e-5 -1.0833806,0.09274 -1.5598565,0.255553 z"
          />
          <path
            id="line2"
            style={{
              fill: resistorColors[1].color,
              visibility: resistorColors[1].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 16.174044,27.367968 v 14.07624 l 3.51537,7.56e-4 v -14.07762 z"
          />
          <path
            id="line3"
            style={{
              fill: resistorColors[2].color,
              visibility: resistorColors[2].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 23.315026,27.367968 v 14.07624 l 3.515371,7.56e-4 v -14.07762 z"
          />
          <path
            id="line4"
            style={{
              fill: resistorColors[3].color,
              visibility: resistorColors[3].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 30.456005,27.367968 v 14.07624 l 3.51537,7.56e-4 v -14.07762 z"
          />
          <path
            id="line5"
            style={{
              fill: resistorColors[4].color,
              visibility: resistorColors[4].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 37.596988,27.367968 v 14.07624 l 3.51537,7.56e-4 v -14.07762 z"
          />
          <path
            id="line6"
            style={{
              fill: resistorColors[5].color,
              visibility: resistorColors[5].visible,
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 0.136659,
              strokeOpacity: 1
            }}
            d="m 55.805347,24.7302 v 19.351756 c -0.476572,0.162855 -1.003603,0.255523 -1.560074,0.255554 -0.723713,-9e-6 -1.385965,-0.05185 -1.955277,-0.177583 V 24.652231 c 0.569312,-0.125724 1.231564,-0.177573 1.955277,-0.177584 h 2.37e-4 c 0.556395,3.1e-5 1.083351,0.09274 1.559837,0.255553 z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Resistor
