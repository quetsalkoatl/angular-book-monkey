"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[534],{5534:(G,c,l)=>{l.r(c),l.d(c,{BooksModule:()=>y});var s=l(6019),r=l(8228),_=l(3556),a=l(9045);let p=(()=>{class o{constructor(){this.isZoomed=!1}onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=_.lG2({type:o,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(e,t){1&e&&_.NdJ("mouseenter",function(){return t.onMouseEnter()})("mouseleave",function(){return t.onMouseLeave()}),2&e&&_.ekj("small",t.isZoomed)}}),o})(),u=(()=>{class o{transform(e,...t){return e?`${e.substr(0,3)}-${e.substr(3)}`:null}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=_.Yjl({name:"isbn",type:o,pure:!0}),o})();function B(o,n){if(1&o&&_._UZ(0,"img",6),2&o){const e=_.oxw();_.Q6J("src",e.book.thumbnails[0].url,_.LSH)}}function d(o,n){if(1&o&&(_.TgZ(0,"div",7),_._uU(1),_.qZA()),2&o){const e=_.oxw();_.xp6(1),_.Oqu(e.book.subtitle)}}function E(o,n){1&o&&(_.TgZ(0,"span"),_._uU(1,", "),_.qZA())}function k(o,n){if(1&o&&(_.TgZ(0,"span"),_._uU(1),_.YNc(2,E,2,0,"span",8),_.qZA()),2&o){const e=n.$implicit,t=n.last;_.xp6(1),_.hij(" ",e,""),_.xp6(1),_.Q6J("ngIf",!t)}}let A=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=_.Xpm({type:o,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:11,vars:7,consts:[["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(e,t){1&e&&(_.YNc(0,B,1,1,"img",0),_.TgZ(1,"div",1),_.TgZ(2,"div",2),_._uU(3),_.qZA(),_.YNc(4,d,2,1,"div",3),_._uU(5,"\xa8 "),_.TgZ(6,"div",4),_.YNc(7,k,3,2,"span",5),_._UZ(8,"br"),_._uU(9),_.ALo(10,"isbn"),_.qZA(),_.qZA()),2&e&&(_.Q6J("ngIf",t.book.thumbnails&&t.book.thumbnails[0]&&t.book.thumbnails[0].url),_.xp6(3),_.Oqu(t.book.title),_.xp6(1),_.Q6J("ngIf",t.book.subtitle),_.xp6(3),_.Q6J("ngForOf",t.book.authors),_.xp6(2),_.hij(" ISBN ",_.lcZ(10,5,t.book.isbn)," "))},directives:[s.O5,s.sg,p],pipes:[u],styles:[""]}),o})();function R(o,n){if(1&o&&_._UZ(0,"bm-book-list-item",5),2&o){const e=n.$implicit;_.Q6J("book",e)("routerLink",e.isbn)}}function C(o,n){1&o&&(_.TgZ(0,"p"),_.SDv(1,6),_.qZA())}function b(o,n){if(1&o&&(_.ynx(0),_.YNc(1,R,1,2,"bm-book-list-item",3),_.YNc(2,C,2,0,"p",4),_.BQk()),2&o){const e=n.ngIf;_.xp6(1),_.Q6J("ngForOf",e),_.xp6(1),_.Q6J("ngIf",!e.length)}}function f(o,n){1&o&&(_.TgZ(0,"div",7),_.TgZ(1,"div",8),_.SDv(2,9),_.qZA(),_.qZA())}let M=(()=>{class o{constructor(e){this.bs=e}ngOnInit(){this.books$=this.bs.getAll()}}return o.\u0275fac=function(e){return new(e||o)(_.Y36(a.T))},o.\u0275cmp=_.Xpm({type:o,selectors:[["bm-book-list"]],decls:5,vars:4,consts:function(){let n,e;return n=$localize`:@@BookListComponent\:no book:Es wurden noch keine Bücher eingetragen.`,e=$localize`:@@Loader\:loading data:Daten werden geladen...`,[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],n,[1,"ui","active","dimmer"],[1,"ui","large","text","loader"],e]},template:function(e,t){if(1&e&&(_.TgZ(0,"div",0),_.YNc(1,b,3,2,"ng-container",1),_.ALo(2,"async"),_.YNc(3,f,3,0,"ng-template",null,2,_.W1O),_.qZA()),2&e){const i=_.MAs(4);_.xp6(1),_.Q6J("ngIf",_.lcZ(2,2,t.books$))("ngIfElse",i)}},directives:[s.O5,s.sg,A,r.rH],pipes:[s.Ov],styles:[""]}),o})(),N=(()=>{class o{constructor(e,t){this.templateRef=e,this.viewContainerRef=t}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}return o.\u0275fac=function(e){return new(e||o)(_.Y36(_.Rgc),_.Y36(_.s_b))},o.\u0275dir=_.lG2({type:o,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),o})();function I(o,n){if(1&o&&(_.TgZ(0,"h3"),_._uU(1),_.qZA()),2&o){const e=_.oxw(2);_.xp6(1),_.Oqu(e.book.subtitle)}}function L(o,n){if(1&o&&(_.ynx(0),_._uU(1),_._UZ(2,"br"),_.BQk()),2&o){const e=n.$implicit;_.xp6(1),_.Oqu(e)}}function Z(o,n){1&o&&_._UZ(0,"i",23)}function K(o,n){if(1&o&&(_.ynx(0),_.YNc(1,Z,1,0,"i",22),_.BQk()),2&o){const e=n.index;_.xp6(1),_.Q6J("bmDelay",500+200*e)}}function D(o,n){1&o&&_._UZ(0,"img",24),2&o&&_.Q6J("src",n.$implicit.url,_.LSH)}const P=function(o){return["../../admin/edit",o]};function h(o,n){if(1&o){const e=_.EpF();_.TgZ(0,"div"),_.TgZ(1,"h1"),_._uU(2),_.qZA(),_.YNc(3,I,2,1,"h3",4),_._UZ(4,"div",5),_.TgZ(5,"div",6),_.TgZ(6,"div",7),_.TgZ(7,"h4"),_.SDv(8,8),_.qZA(),_.YNc(9,L,3,1,"ng-container",9),_.qZA(),_.TgZ(10,"div",7),_.TgZ(11,"h4"),_.SDv(12,10),_.qZA(),_._uU(13),_.ALo(14,"isbn"),_.qZA(),_.TgZ(15,"div",7),_.TgZ(16,"h4"),_.SDv(17,11),_.qZA(),_._uU(18),_.ALo(19,"date"),_.qZA(),_.TgZ(20,"div",7),_.TgZ(21,"h4"),_.SDv(22,12),_.qZA(),_.YNc(23,K,2,1,"ng-container",9),_.qZA(),_.qZA(),_.TgZ(24,"h4"),_.SDv(25,13),_.qZA(),_.TgZ(26,"p"),_._uU(27),_.qZA(),_.TgZ(28,"div",14),_.YNc(29,D,1,1,"img",15),_.qZA(),_.TgZ(30,"button",16),_.NdJ("click",function(){return _.CHM(e),_.oxw().removeBook()}),_._UZ(31,"i",17),_.ynx(32),_.SDv(33,18),_.BQk(),_.qZA(),_.TgZ(34,"a",19),_._UZ(35,"i",20),_.ynx(36),_.SDv(37,21),_.BQk(),_.qZA(),_.qZA()}if(2&o){const e=_.oxw();_.xp6(2),_.Oqu(e.book.title),_.xp6(1),_.Q6J("ngIf",e.book.subtitle),_.xp6(6),_.Q6J("ngForOf",e.book.authors),_.xp6(4),_.hij(" ",_.lcZ(14,9,e.book.isbn)," "),_.xp6(5),_.hij(" ",_.xi3(19,11,e.book.published,"longDate")," "),_.xp6(5),_.Q6J("ngForOf",e.getRating(e.book.rating)),_.xp6(4),_.Oqu(e.book.description),_.xp6(2),_.Q6J("ngForOf",e.book.thumbnails),_.xp6(5),_.Q6J("routerLink",_.VKq(14,P,e.book.isbn))}}function v(o,n){1&o&&_._UZ(0,"div",25)}const U=[{path:"",component:M},{path:":isbn",component:(()=>{class o{constructor(e,t,i){this.bs=e,this.router=t,this.route=i}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(t=>this.book=t)}getRating(e){return new Array(null!=e?e:0)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(e=>this.router.navigate(["../"],{relativeTo:this.route}))}}return o.\u0275fac=function(e){return new(e||o)(_.Y36(a.T),_.Y36(r.F0),_.Y36(r.gz))},o.\u0275cmp=_.Xpm({type:o,selectors:[["bm-book-details"]],decls:5,vars:2,consts:function(){let n,e,t,i,T,S,g,m;return n=$localize`:@@BookDetailsComponent\:book back:Zurück zur Buchliste`,e=$localize`:@@BookDetailsComponent\:book authors:Autoren`,t=$localize`:@@BookDetailsComponent\:book isbn:ISBN`,i=$localize`:@@BookDetailsComponent\:book published date:Erschienen`,T=$localize`:@@BookDetailsComponent\:book rating:Rating`,S=$localize`:@@BookDetailsComponent\:book description:Beschreibung`,g=$localize`:@@BookDetailsComponent\:book delete: Buch löschen `,m=$localize`:@@BookDetailsComponent\:book edit: Buch bearbeiten `,[[4,"ngIf","ngIfElse"],["loading",""],["routerLink","/books",1,"ui","red","button"],n,[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],e,[4,"ngFor","ngForOf"],t,i,T,S,[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],g,[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],m,["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]]},template:function(e,t){if(1&e&&(_.YNc(0,h,38,16,"div",0),_.YNc(1,v,1,0,"ng-template",null,1,_.W1O),_.TgZ(3,"a",2),_.SDv(4,3),_.qZA()),2&e){const i=_.MAs(2);_.Q6J("ngIf",t.book)("ngIfElse",i)}},directives:[s.O5,r.yS,s.sg,N],pipes:[u,s.uU],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),o})()}];let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=_.oAB({type:o}),o.\u0275inj=_.cJS({imports:[[r.Bz.forChild(U)],r.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=_.oAB({type:o}),o.\u0275inj=_.cJS({imports:[[s.ez,$]]}),o})()}}]);