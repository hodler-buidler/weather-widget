function makeIconPath(iconName, zoom) {
  let zoomStr = '';
  if (zoom) zoomStr = `@${zoom}x`;
  return `http://openweathermap.org/img/wn/${iconName}${zoomStr}.png`;
}

export default makeIconPath;
