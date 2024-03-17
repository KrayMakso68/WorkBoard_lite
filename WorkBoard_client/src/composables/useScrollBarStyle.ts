export const useScrollBarStyle = () => {
  const verticalThumbStyle : object = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#7209BE',
    width: '5px',
    opacity: 0.75
  }
  const verticalBarStyle : object = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#63F79A',
    width: '9px',
    opacity: 0.2
  }
  const horizontalThumbStyle : object = {
    bottom: '4px',
    borderRadius: '5px',
    backgroundColor: '#7209BE',
    height: '5px',
    opacity: 0.75
  }
  const horizontalBarStyle : object = {
    bottom: '2px',
    borderRadius: '9px',
    backgroundColor: '#63F79A',
    height: '9px',
    width: '100%',
    opacity: 0.2
  }
  return {
    verticalBarStyle,
    verticalThumbStyle,
    horizontalBarStyle,
    horizontalThumbStyle
  }
}

