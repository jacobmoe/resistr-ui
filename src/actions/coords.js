function setBrowserCoords (coords) {
  return {
    type: 'SET_BROWSER_COORDS',
    coords: coords
  }
}

export function fetchBrowserCoords () {
  return (dispatch) => {
    navigator
      .geolocation
      .getCurrentPosition(
        function (res) {
          dispatch(setBrowserCoords(res.coords))
        }
      )
  }
}
