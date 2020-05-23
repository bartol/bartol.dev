# Show website grid

Create bookmark with this location.

	javascript: (function() { const element = document.querySelector('#test-layout-styles');%20if%20(element)%20{%20document.head.removeChild(element);%20}%20else%20{%20const%20style%20=%20document.createElement('style');%20style.id%20=%20'test-layout-styles';%20style.innerHTML%20=%20`%20*%20{%20background-color:%20rgba(255,0,0,.2);%20}%20*%20*%20{%20background-color:%20rgba(255,0,255,.2);%20}%20*%20*%20*%20{%20background-color:%20rgba(0,255,255,.2);%20}%20*%20*%20*%20*%20{%20background-color:%20rgba(255,255,0,.2);%20}%20*%20*%20*%20*%20*%20{%20background-color:%20rgba(0,255,0,.2);%20}%20*%20*%20*%20*%20*%20*%20{%20background-color:%20rgba(0,0,255,.2);%20}%20*%20*%20*%20*%20*%20*%20*%20{%20background-color:%20rgba(255,0,0,.2);%20}%20*%20*%20*%20*%20*%20*%20*%20*%20{%20background-color:%20rgba(255,255,0,.2);%20}%20*%20*%20*%20*%20*%20*%20*%20*%20*%20{%20background-color:%20rgba(0,255,255,.2);%20}%20`;%20document.head.appendChild(style);%20}%20})();

Click on bookmark.
