(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),o=n.n(i),s=(n(15),n(9)),u=n(2),l=n(3),b=n(5),m=n(4),h=(n(16),n(19)),j=n(8),d=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(j.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.checkSameName(e.state.name),e.props.onSubmit(e.state.name,e.state.number),e.setState({name:"",number:""})},e.checkSameName=function(t){e.props.contactName.forEach((function(e){e.name===t&&alert("".concat(t," is already in contacts."))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{className:"contact-form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"contact-label",children:["Name",Object(a.jsx)("input",{className:"contact-input",required:!0,type:"text",placeholder:"Enter name",name:"name",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:"contact-label",children:["Number",Object(a.jsx)("input",{className:"contact-input",required:!0,type:"text",placeholder:"Enter number",name:"number",value:n,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:"submit-Btn",type:"submit",children:"Add contact"})]})}}]),n}(c.Component),p=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,c=e.number,r=e.onDelete;return Object(a.jsxs)("li",{className:"contact-item",id:t,children:[n,": ",c," ",Object(a.jsx)("button",{className:"deleteBtn",onClick:r,children:"Delete"})]},t)}}]),n}(c.Component),f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.contactsItem;return Object(a.jsx)("ul",{children:t.map((function(t){return Object(a.jsx)(p,{name:t.name,number:t.number,onDelete:function(){return e.props.onDeleteContact(t.id)}},t.id)}))})}}]),n}(c.Component),O=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:"contact-label",children:["Find contacts by name",Object(a.jsx)("input",{className:"contact-input",type:"text",placeholder:"Enter name",name:"filter",value:this.props.filterValue,onChange:function(t){return e.props.changeFilter(t.target.value)}})]})})}}]),n}(c.Component),v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={name:t,number:n,id:Object(h.a)()};e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[a])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t})},e.findContact=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.filter,n=e.contacts,c=this.findContact();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(d,{onSubmit:this.addContact,contactName:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{changeFilter:this.changeFilter,filterValue:t}),Object(a.jsx)(f,{contactsItem:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.42e25c07.chunk.js.map