import {Waypoint, OSRMv1} from 'routing-components'
import ControlWrapper from './components/ControlWrapper.html'
import Marker from './components/Marker.html'
import RouteLine from './components/RouteLine.html'

import ol from 'openlayers'

const defaultOptions = {
  Marker,
  RouteLine
}

function OlrmControl (options) {
  options = Object.assign({}, defaultOptions, options)
  options.waypoints = options.waypoints && options.waypoints.map(wp => {
    if (wp instanceof Waypoint) {
      return wp
    } else {
      return new Waypoint(wp)
    }
  })

  options.router = options.router || new OSRMv1(options)

  const container = document.createElement('div')
  // Workaround for standard complaining about unused variable
  // or new with side-effect
  ;(function () {
    return new ControlWrapper({
      target: container,
      data: Object.assign({}, options)
    })
  })()

  ol.control.Control.call(this, {
    element: container,
    target: options.target
  })
}

ol.inherits(OlrmControl, ol.control.Control)

export default {
  Control: OlrmControl
}
