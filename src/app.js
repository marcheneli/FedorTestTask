var bottomNavBar = document.getElementById('bottomNavBar');

var listItems = bottomNavBar.children;

var listItemClickHandler = function(event){};

for(var i = 0; i < listItems.length; i++){

    (function(listItem){
        listItem.addEventListener('click', function(){

            var dropdown = listItem.children[1];

            if(!dropdown) { return; }

            var dropdownStyle = dropdown.style;

            if(dropdownStyle.visibility === 'hidden' || !dropdownStyle.visibility){
                dropdownStyle.visibility = 'visible';
                listItem.classList.toggle('list-item-hovered');

                var windowClickHandler = function() {
                    dropdownStyle.visibility = 'hidden';
                    listItem.classList.toggle('list-item-hovered');
                    
                    window.removeEventListener('click', windowClickHandler, true);
                }

                window.addEventListener('click', windowClickHandler, true);
            }
        });
    })(listItems[i]);
}