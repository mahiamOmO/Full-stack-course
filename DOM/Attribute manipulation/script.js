var myLink = document.querySelector('a');

console.log(myLink.getAttribute('href'));

myLink.setAttribute('href','https://www.facebook.com');
console.log(myLink.getAttribute('href'));

mylink.textContent = 'go to facebook';