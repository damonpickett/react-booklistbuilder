(this["webpackJsonpbook-list-builder"]=this["webpackJsonpbook-list-builder"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(25),a=c.n(s),r=(c(34),c(29)),o=c(9),i=(c(35),c(44)),j=c(45),l=c(26),b=c(13),d=c(0);var u=function(){return Object(d.jsx)("div",{className:"nav",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(l.a,{xs:!0,sm:!0,md:8,children:Object(d.jsx)(b.b,{className:"logo-link",to:"/",children:Object(d.jsx)("h1",{children:"BookListBuilder"})})}),Object(d.jsx)(l.a,{xs:!0,sm:!0,md:4,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(b.b,{className:"navbar-link",to:"/",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(b.b,{className:"navbar-link",to:"/mylist",children:Object(d.jsx)("li",{children:"My List"})})]})})]})})})};var h=function(){return Object(d.jsx)(i.a,{className:"instructions",children:Object(d.jsx)(j.a,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Welcome"}),Object(d.jsx)("p",{children:"Use BookListBuilder to find books and create a reading list. Not sure what you're looking for? Generate a random quote above and see if anyone's famous words leave you curious for more."})]})})})})};var O=function(){return Object(d.jsx)(i.a,{className:"footer",children:Object(d.jsx)(j.a,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(b.b,{className:"footer-link",to:"/",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(b.b,{className:"footer-link",to:"/mylist",children:Object(d.jsx)("li",{children:"My List"})})]})})})})})},x=c(47),m=c(48);var f=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){s(e[Math.floor(Math.random()*e.length)])}))};return Object(n.useEffect)((function(){a()}),[]),Object(d.jsx)(i.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(x.a.Body,{className:"random-quote",children:[Object(d.jsx)("p",{children:c.text}),Object(d.jsx)("p",{children:Object(d.jsx)("span",{className:"author-bold",children:c.author})}),Object(d.jsx)(m.a,{variant:"warning",onClick:a,children:"New Quote"})]})})})})},v=c(46);var k=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),b=Object(o.a)(r,2),u=b[0],h=b[1],O=u.map((function(t){return Object(d.jsxs)(x.a,{className:"search-results-cards",children:[t.volumeInfo.imageLinks?Object(d.jsx)(x.a.Img,{className:"search-results-img",src:t.volumeInfo.imageLinks.thumbnail,alt:t.volumeInfo.title}):Object(d.jsxs)("p",{children:["No image available",Object(d.jsx)("br",{}),t.volumeInfo.title," by ",t.volumeInfo.authors]}),Object(d.jsx)(m.a,{variant:"dark",className:"search-results-button",onClick:function(){return e.addBookToList(t)},children:"Add to Reading List"})]},t.id)}));return Object(d.jsx)(i.a,{className:"book-finder",children:Object(d.jsx)(j.a,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"book-finder",children:[Object(d.jsxs)(v.a,{className:"book-search-form",onSubmit:function(e){e.preventDefault(),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s,"&key=").concat("AIzaSyCUAkQ_kTnVDaR6bOZL_1efEXJbVWwwx6c","&maxResults=20")).then((function(e){return e.json()})).then((function(e){h(e.items)}))},children:[Object(d.jsx)(v.a.Control,{className:"book-search-input",onChange:function(e){var t=e.target.value;a(t)},type:"text",placeholder:"Search for books"}),Object(d.jsx)(m.a,{variant:"success",className:"book-search-button",type:"submit",children:"Search"})]}),O]})})})})};var g=function(e){var t=e.readingList.map((function(t,c){return console.log(c),Object(d.jsxs)(x.a.Body,{className:"book-list-card",children:[Object(d.jsx)("h3",{children:t.volumeInfo.title}),Object(d.jsxs)("p",{children:["By ",t.volumeInfo.authors]}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:t.volumeInfo.infoLink,rel:"noreferrer",target:"_blank",children:"Buy"})}),Object(d.jsx)(m.a,{variant:"secondary",className:"book-list-button",onClick:function(){return e.removeBook(c)},children:"Remove from list"})]})}));return console.log(t),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(l.a,{lg:"auto",children:[Object(d.jsx)("h2",{children:"My Reading List"}),t]})})})})},p=c(6);var N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(e){console.log(e),s([].concat(Object(r.a)(c),[e]))},i=function(e){var t=c.filter((function(t,c){return c!==e}));s(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(f,{}),Object(d.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(k,{addBookToList:a})}}),Object(d.jsx)(p.a,{exact:!0,path:"/mylist",render:function(){return Object(d.jsx)(g,{removeBook:i,readingList:c})}}),Object(d.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(42);a.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.b01e1426.chunk.js.map