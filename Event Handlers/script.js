var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKtitle');

button.addEventListener('click', function() {
  console.log('You clicked the button');
  title.style.backgroundColor = 'red';
});

var listParent = document.querySelector('ul');
listParent.addEventListener('click', function() {
  console.log('You clicked the ul');
  listParent.style.backgroundColor = 'blue';
});

var listItems = document.querySelectorAll('li');
console.log('listItems',listItems);

for(var i = 0;i < listItems.length; i++) {
    lisItems[i].addEventListener('click',function(){
        this.style.color = 'white';
    })
}