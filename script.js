// use the local stylesheet (vs the online one)
// local is faster but requires setup
const localData = {}

function decorate(styles) {
  Object.keys(styles).forEach(selector => {
    let attr = styles[selector]
    Object.keys(attr).forEach(style => {

      // apply attributes
      document.querySelectorAll(selector).forEach(node => {
        node.style[style] = attr[style]
      })
    })
  })
}

function styleHost(hosts) {
  if (host in data) {
    let styles = data[host]
    decorate(styles)
  }
}

window.onload = () => {
  let host = window.location.host

  if (localData) {
    console.log("using local")
    styleHost(localData)
  } else {
    console.log("using public")
    // fetch the styles
    fetch("https://lxk1170.github.io/reStyles/styles.json").then(res => res.json()).then(data => {
      styleHost(data)
    })
  }
}
