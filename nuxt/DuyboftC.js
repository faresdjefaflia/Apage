import{e as n,g as o,n as c,o as h,q as a,Y as p,Z as u,$ as l,u as d,a0 as g}from"./CjlIcEZZ.js";const m="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=u(l(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return g(e,t.src)}return t.src});return(s,e)=>(h(),c(p(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
