(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(64)},28:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(20),c=a.n(i),s=(a(28),a(2)),r=a(4),m=a(6),o=a(5),u=a(7),d=(a(33),a(3)),v=a(12),h=a(10),E=(a(35),function(e){var t=e.name,a=e.id,n=e.value,i=e.changeHandler,c=Object(h.a)(e,["name","id","value","changeHandler"]);return l.a.createElement("div",{className:"control"},l.a.createElement("input",Object.assign({id:a,name:t,type:"text",className:"input",onChange:i||function(e){},value:n},c)))}),p=function(e){var t=e.name,a=e.id,n=e.value,i=e.changeHandler,c=Object(h.a)(e,["name","id","value","changeHandler"]);return l.a.createElement("div",{className:"control"},l.a.createElement("textarea",Object.assign({className:"textarea",name:t,id:a,onChange:i||function(e){},value:n},c)))},f=function(e){var t=e.name,a=e.value,n=e.changeHandler,i=e.tabs,c=Object(h.a)(e,["name","value","changeHandler","tabs"]);return l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",Object.assign({name:t,value:a,onChange:n},c),i.map(function(e,t){return l.a.createElement("option",{key:"options-".concat(t),value:e.value},e.label)})))},b=function(e){var t=e.target,a=e.label,n=e.icon;return l.a.createElement("label",{htmlFor:t,className:"label"},l.a.createElement("span",{className:"icon is-small has-text-info"},l.a.createElement("i",{className:"fas fa-".concat(n)})),l.a.createElement("span",null," ".concat(a)))},N=function(e){var t=e.name,a=e.label;return l.a.createElement("div",{className:"file has-name is-fullwidth"},l.a.createElement("label",{className:"file-label"},l.a.createElement("input",{className:"file-input",type:"file",name:t}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-icon"},l.a.createElement("i",{className:"fas fa-upload"})),l.a.createElement("span",{className:"file-label"},a)),l.a.createElement("span",{className:"file-name"})))},g=function(e){var t=e.options,a=e.optionsChangeHandler,n=e.types,i=e.type,c=e.typeChangeHandler;return l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Formulaire")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control is-expanded"},l.a.createElement(f,{name:"input-type",value:i,changeHandler:c,tabs:n.map(function(e){return{value:e,label:e}})}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control is-expanded"},l.a.createElement(f,{name:"input-detailed",value:t.detailed,changeHandler:a,tabs:[{value:"false",label:"Simple"},{value:"true",label:"D\xe9taill\xe9"}]}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control is-expanded"},l.a.createElement(f,{name:"input-withTaxes",value:t.withTaxes,changeHandler:a,tabs:[{value:"false",label:"Sans Taxes"},{value:"true",label:"Avec Taxes"}]}))))))),l.a.createElement("div",{className:"level-right"}))},y=function(e){var t=e.from,a=e.to,n=e.number,i=e.date,c=e.changeHandler,s=e.type;return l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"input-from",label:"De",icon:"home"}),l.a.createElement(p,{name:"input-from",id:"input-from",changeHandler:c,value:t}))),l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"",label:"Logo",icon:"image"}),l.a.createElement(N,{name:"file-input",label:"Ajouter une image"}))),l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"input-to",label:"Factur\xe9 \xe0",icon:"handshake"}),l.a.createElement(p,{name:"input-to",id:"input-to",changeHandler:c,value:a}))),l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"input-number",label:"".concat(s," n\xb0"),icon:"search"}),l.a.createElement(E,{name:"input-number",id:"input-number",changeHandler:c,value:n}))),l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"input-date",label:"Date",icon:"calendar-day"}),l.a.createElement(E,{name:"input-date",id:"input-date",changeHandler:c,value:i}))))))},w=function(e){var t=e.verbose,a=e.withTaxes,n=[{verboseOnly:!0,withTaxesOnly:!1,label:"Qt\xe9",icon:"sort-amount-up",size:1},{verboseOnly:!1,withTaxesOnly:!1,label:"D\xe9signation",icon:"tag",size:t?4:6},{verboseOnly:!1,withTaxesOnly:!1,label:"Prix".concat(t?" Unit.":"").concat(a?" HT":""),icon:"euro-sign",size:2},{verboseOnly:!0,withTaxesOnly:!1,label:"Montant".concat(a?" HT":""),icon:"euro-sign",size:2},{verboseOnly:!1,withTaxesOnly:!0,label:"TVA",icon:"percentage",size:t?2:3}].filter(function(e){return(!e.verboseOnly||e.verboseOnly&&t)&&(!e.withTaxesOnly||e.withTaxesOnly&&a)});return l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"columns"},n.map(function(e,t){return l.a.createElement("div",{className:"column is-".concat(e.size),key:"item-heading-".concat(t)},l.a.createElement(b,{icon:e.icon,label:e.label}))})))},x=function(e){var t=e.verbose,a=e.withTax,n=e.data,i=e.changeHandler,c=e.blurHandler;return l.a.createElement("div",{className:"column is-12 animated fadeIn fast"},l.a.createElement("div",{className:"columns"},t&&l.a.createElement("div",{className:"column is-1"},l.a.createElement(E,{"data-id":"".concat(n.id),"data-field":"quantity",value:n.quantity,changeHandler:function(e){i(e,"update")},onBlur:c})),l.a.createElement("div",{className:"column is-".concat(t?"4":"6")},l.a.createElement(p,{"data-id":"".concat(n.id),"data-field":"title",value:n.title,changeHandler:function(e){i(e,"update")},onBlur:c})),l.a.createElement("div",{className:"column is-2"},l.a.createElement(E,{"data-id":"".concat(n.id),"data-field":"price",value:n.price,changeHandler:function(e){i(e,"update")},onBlur:c})),t&&l.a.createElement("div",{className:"column is-2"},l.a.createElement(E,{disabled:!0,value:(n.quantity*n.price).toFixed(2),changeHandler:function(e){}})),a&&l.a.createElement("div",{className:"column is-2"},l.a.createElement(E,{"data-id":"".concat(n.id),"data-field":"tax",value:n.tax,changeHandler:function(e){i(e,"update")},onBlur:c})),l.a.createElement("div",{className:"column is-1"},l.a.createElement("button",{"data-id":"".concat(n.id),onClick:function(e){return i(e,"remove")},className:"button is-danger is-fullwidth"},l.a.createElement("span",{"data-id":"".concat(n.id),className:"icon"},l.a.createElement("i",{"data-id":"".concat(n.id),className:"fas fa-times"}))))))},T=function(e){var t=e.detailed,a=e.withTaxes,n=e.changeHandler,i=e.blurHandler,c=e.items;return l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement(w,{verbose:t,withTaxes:a}),c.map(function(e){return l.a.createElement(x,{key:e.id,data:e,changeHandler:n,verbose:t,withTax:a,blurHandler:i})}),l.a.createElement("div",{className:"column is-12"},l.a.createElement("button",{onClick:function(e){return n(e,"add")},className:"button is-link is-fullwidth"},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-plus"})),l.a.createElement("span",null,"Ajouter un article"))))},I=a(9),O=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:null,title:"",price:0,tax:0,quantity:1};Object(s.a)(this,e),this.id=t.id||I.generate(),this.title=t.title,this.price=t.price,this.tax=t.tax,this.quantity=t.quantity},j=a(22),H=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,e),this.id=t.id||I.generate(),this.type=t.type||"Facture",this.types=["Facture","Devis"],this.items=t.items?Object(j.a)(t.items):[],this.meta=t.meta?Object(d.a)({},t.meta):{date:(new Date).toLocaleDateString(),from:"",to:"",number:"",terms:""},this.options=t.options?Object(d.a)({},t.options):{detailed:!1,withTaxes:!1}};function k(e){return JSON.parse(JSON.stringify(e))}function C(e){var t=0;return Object.keys(e).forEach(function(e){return t++}),!Boolean(t)}function S(e){var t=0,a=0,n=0;return e.length&&e.forEach(function(e){var l=function(e){var t=+e.quantity*+e.price,a=t*(+e.tax/100);return{subTotalTaxExcluded:t,subTotalTaxIncluded:t+a,subTotalTax:a}}(e);a+=l.subTotalTaxExcluded,t+=l.subTotalTaxIncluded,n+=l.subTotalTax}),{totalTaxExcluded:a,totalTaxIncluded:t,totalTaxes:n}}var P=function(e){var t=e.label,a=e.value,n=e.size,i=e.color;return l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"columns has-text-".concat(i)},l.a.createElement("div",{className:"column is-4"}),l.a.createElement("div",{className:"column is-4 has-text-right"},l.a.createElement("span",{className:"is-size-".concat(n)},t)),l.a.createElement("div",{className:"column is-4 has-text-right"},l.a.createElement("span",{className:"is-size-".concat(n)},a," \u20ac"))))},A=function(e){var t=e.withTax,a=S(e.items),n=a.totalTaxExcluded,i=a.totalTaxIncluded,c=a.totalTaxes;return l.a.createElement("div",{className:"columns is-multiline"},t&&l.a.createElement(P,{label:"TOTAL HT",value:n.toFixed(2),size:"5",color:"grey-dark"}),t&&l.a.createElement(P,{label:"TVA",value:c.toFixed(2),size:"6",color:"grey"}),l.a.createElement(P,{label:"TOTAL".concat(t?" TTC":""),value:i.toFixed(2),size:"4",color:"black-ter"}))},D=function(e){var t=e.terms,a=e.changeHandler;return l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"field"},l.a.createElement(b,{target:"input-terms",icon:"building",label:"Conditions et modalit\xe9s de paiement"}),l.a.createElement(p,{name:"input-terms",id:"input-terms",value:t,changeHandler:a}))))},F=function(){return l.a.createElement("div",{className:"columns no-print"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("hr",null)))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).metaChangeHandler=function(e){var t=Object(d.a)({},a.state.meta);t[e.target.name.split("-")[1]]=e.target.value,a.setState({meta:t})},a.optionsChangeHandler=function(e){var t=Object(d.a)({},a.state.options),n=e.target.name.split("-")[1],l="true"===e.target.value;t[n]=l;var i=a.cloneItems(a.state.items);i.forEach(function(e){e.quantity=t.detailed?e.quantity:1,e.tax=t.withTaxes?e.tax:0}),a.setState({options:t,items:i})},a.typeChangeHandler=function(e){var t=e.target.value;a.state.types.includes(t)&&a.setState({type:t})},a.itemsChangeHandler=function(e,t){switch(t){case"add":a.addItem();break;case"update":var n=e.target.getAttribute("data-id"),l=e.target.getAttribute("data-field"),i=e.target.value;a.updateItem(n,l,i);break;case"remove":var c=e.target.getAttribute("data-id");a.removeItem(c)}},a.itemsBlurHandler=function(e){var t=e.target.getAttribute("data-id"),n=e.target.getAttribute("data-field"),l=e.target.value;switch(n){case"title":l=l.trim();break;case"quantity":case"tax":case"price":l=isNaN(l)?0:+(+l).toFixed(2)}a.updateItem(t,n,l)},a.addItem=function(){var e=a.cloneItems(a.state.items);e.push(new O),a.setState({items:a.cloneItems(e)})},a.updateItem=function(e,t,n){var l=a.cloneItems(a.state.items);l.find(function(t){return t.id===e})[t]=n,a.setState({items:a.cloneItems(l)})},a.removeItem=function(e){var t=a.cloneItems(a.state.items);t=t.filter(function(t){return t.id!==e}),a.setState({items:a.cloneItems(t)})},a.cloneItems=function(e){return e.map(function(e){return new O(e)})},a.state={id:null,type:"Facture",types:["Facture","Devis"],meta:{from:"",to:"",number:"",date:"",terms:""},options:{detailed:!1,withTaxes:!1},items:[]},a.state=k(a.props.invoice),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.invoice.id!==this.state.id&&this.setState(Object(d.a)({},k(e.invoice)))}},{key:"shouldComponentUpdate",value:function(e,t){return JSON.stringify(t)!==JSON.stringify(this.state)}},{key:"componentDidUpdate",value:function(e,t){this.props.updateHandler(k(this.state))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"box animated slideInDown"},l.a.createElement(g,{type:this.state.type,types:this.state.types,options:this.state.options,optionsChangeHandler:this.optionsChangeHandler,typeChangeHandler:this.typeChangeHandler}))),l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"box animated fadeIn"},l.a.createElement(y,{companyTitle:this.state.companyTitle,type:this.state.type,from:this.state.meta.from,to:this.state.meta.to,number:this.state.meta.number,date:this.state.meta.date,changeHandler:this.metaChangeHandler}),l.a.createElement(F,null),l.a.createElement(T,{detailed:this.state.options.detailed,withTaxes:this.state.options.withTaxes,changeHandler:this.itemsChangeHandler,blurHandler:this.itemsBlurHandler,items:this.state.items}),l.a.createElement(A,{withTax:this.state.options.withTaxes,items:this.state.items}),l.a.createElement(F,null),l.a.createElement(D,{terms:this.state.meta.terms,changeHandler:this.metaChangeHandler})))))}}]),t}(n.Component),z=a(21),B=function(e){var t=e.closePreview,a=e.filename,n=e.objectUrl;return l.a.createElement("div",{className:"preview-toolbar no-print"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12",style:{paddingBottom:0}},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button is-dark is-outlined",onClick:t},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement("span",null,"Retour"))),l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{href:n,download:a,className:"button is-link is-outlined ".concat(a?"":"is-loading")},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-file-pdf"})),l.a.createElement("span",null,"T\xe9lecharger"))))))),l.a.createElement("hr",null))},q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).embedPdf=function(){var e=a.props.invoice;z.post("/api/html2pdf",{data:e},{headers:{"Content-Type":"application/json",Accept:"application/pdf"},responseType:"blob"}).then(function(t){var n="".concat(e.type,"-").concat(e.meta.number,".pdf"),l=new Blob([t.data],{type:"application/pdf"}),i=window.URL.createObjectURL(l);a.setState({filename:n,objectUrl:i})}).catch(function(e){console.log(e)})},a.state={filename:null,objectUrl:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.state.filename||this.embedPdf()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(B,{closePreview:this.props.closePreview,filename:this.state.filename,objectUrl:this.state.objectUrl}),l.a.createElement("div",{className:"columns is-multiline"},!this.state.filename&&l.a.createElement("div",{className:"preview-spinner"},"Chargement ..."),this.state.filename&&l.a.createElement("object",{id:"mediaObject",data:this.state.objectUrl,type:"application/pdf",name:this.state.filename},"alt: ",l.a.createElement("a",{href:this.state.objectUrl,download:this.state.filename},this.state.filename))))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).updateInvoice=function(e){var t=e.id,n=k(a.state.invoices);n[t]=k(e),a.setState({invoices:n,currentInvoice:k(e)},function(){a.saveInvoices()})},a.newInvoice=function(){var e=new H;a.newInvoiceType&&(e.type=a.newInvoiceType);var t=function(e){var t={};return Object.keys(e).forEach(function(a){var n=e[a].type;n in t?t[n]++:t[n]=1}),t}(a.state.invoices)[e.type]||0;e.meta.number=t+1,a.setState({currentInvoice:e})},a.setNewInvoiceType=function(e){var t=e.target.value;Boolean(t)&&(a.newInvoiceType=t)},a.selectInvoice=function(e){var t=e.target.getAttribute("data-id"),n=Object(d.a)({},a.state.invoices[t]);n&&a.setState({currentInvoice:k(n)})},a.removeInvoice=function(){var e=a.state.currentInvoice.id,t=k(a.state.invoices);delete t[e],a.setState({invoices:t,currentInvoice:null},function(){a.saveInvoices()})},a.leaveInvoice=function(){a.setState({currentInvoice:null},function(){a.saveInvoices()})},a.saveInvoices=function(e){v.setItem("invoices",k(a.state.invoices)).then(function(e){console.log("Invoices saved")}).catch(function(e){console.log("Unableto save invoices\n",e)})},a.loadInvoices=function(){return v.getItem("invoices")},a.openPreview=function(){a.setState({showPreview:!0})},a.hidePreview=function(){a.setState({showPreview:!1})},a.state={showPreview:!1,currentInvoice:null,invoices:{}},a.newInvoiceType=null,a.invoiceTypes=(new H).types,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C(this.state.invoices)&&this.loadInvoices().then(function(t){t&&"object"===typeof t&&!C(t)&&e.setState({invoices:k(t)})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.invoices;return l.a.createElement("section",null,this.state.currentInvoice&&this.state.showPreview&&l.a.createElement(q,{closePreview:this.hidePreview,invoice:this.state.currentInvoice}),!this.state.showPreview&&l.a.createElement("div",{id:"main"},!this.state.showPreview&&!this.state.currentInvoice&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"}),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"level-item"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-static"},"Nouveau")),l.a.createElement("div",{className:"control is-expanded"},l.a.createElement(f,{onChange:this.setNewInvoiceType,defaultValue:"",name:"newInvoiceType",tabs:this.invoiceTypes.map(function(e){return{value:e,label:e}}).concat({value:"",label:"Document"})})))),l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{onClick:this.newInvoice,className:"button is-primary"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-plus"})))))))),l.a.createElement(F,null)),!C(this.state.invoices)&&!this.state.currentInvoice&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"box"},l.a.createElement("table",{className:"table is-striped is-hoverable is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"has-text-centered"},"Client"),l.a.createElement("th",null,"Document"),l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Montant"))),l.a.createElement("tbody",null,Object.keys(t).map(function(a){var n=t[a];return l.a.createElement("tr",{style:{cursor:"pointer"},onClick:e.selectInvoice,"data-id":a,key:a},l.a.createElement("td",{"data-id":a},n.meta.to.split("\n")[0]),l.a.createElement("td",{"data-id":a},n.type),l.a.createElement("td",{"data-id":a},n.meta.number),l.a.createElement("td",{"data-id":a},n.meta.date),l.a.createElement("td",{"data-id":a},S(n.items).totalTaxIncluded.toFixed(2)," \u20ac"))}))))))),this.state.currentInvoice&&l.a.createElement(U,{key:this.state.currentInvoice.id,updateHandler:this.updateInvoice,invoice:this.state.currentInvoice}),this.state.currentInvoice&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{onClick:this.leaveInvoice,className:"button is-dark"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement("span",null,"Retour"))),l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{onClick:this.openPreview,className:"button is-info"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-eye"})),l.a.createElement("span",null,"Aper\xe7u")))),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{onClick:this.removeInvoice,className:"button is-danger"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("span",null,"Supprimer")))))))))))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section"},l.a.createElement(J,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.e0d2e7b8.chunk.js.map