test123 = function() {
  const player = document.querySelector('#heart');
player.play();

// or load via a Bodymovin JSON string/object
  console.log("hallo")
}

h1.addEventListener("mouseover", test123)



if('CSS' in window && 'supports' in window.CSS) {
    var support = window.CSS.supports('mix-blend-mode','difference');
  // tests for mix-blend-mode support
    support = support?'mix-blend-mode':'no-mix-blend-mode';
document.documentElement.className += support;
}
