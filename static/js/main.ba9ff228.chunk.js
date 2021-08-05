(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={list:"ContactList_list__1_AI1",button:"ContactList_button__21n16"}},37:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),i=n(7),u=n(8),s=n(11),l=n(10),b=n(2),d=n.n(b),h=n(3),j=n(15),m=n.n(j),f=n(1),p=Object(h.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onDeleteContact:function(){return null}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(f.jsx)("ul",{children:Object(f.jsxs)("li",{className:m.a.list,children:[r,": ",a,Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)})}))})),O=n(9),v="contacts/add",g="contacts/delete",x=function(t,e){return{type:v,payload:{id:d.a.generate(),name:t,number:e}}},C=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleNameChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(O.a)({},r,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:this.nameInputId,children:["name",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,id:this.nameInputId})]}),Object(f.jsxs)("label",{htmlFor:this.numberInputId,children:["number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleNameChange,id:this.numberInputId})]}),Object(f.jsx)("button",{type:"submit",children:"Add contacts"})]})}}]),n}(r.Component),y=Object(h.b)(null,(function(t){return{onSubmit:function(e,n){return t(x(e,n))}}}))(C),I=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onChangFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,r=e.contacts,a=n.toLowerCase();return r.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(y,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(p,{})]})}}]),n}(r.Component),S=n(4),w=n(16),k=n(17),_=Object(S.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case v:return[].concat(Object(k.a)(t),[r]);case g:return t.filter((function(t){return t.id!==r}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t}}),D=Object(S.combineReducers)({contacts:_}),A=Object(S.createStore)(D,Object(w.composeWithDevTools)());o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h.a,{store:A,children:Object(f.jsx)(I,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ba9ff228.chunk.js.map