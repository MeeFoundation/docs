class m extends HTMLElement{btn=this.querySelector("button");constructor(){super(),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",t=>this.closeOnEscape(t))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",m);class g extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",g);const f="modulepreload",E=function(o){return"/"+o},h={},p=function(e,t,i){if(!t||t.length===0)return e();const d=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=E(n),n in h)return;h[n]=!0;const r=n.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let c=d.length-1;c>=0;c--){const u=d[c];if(u.href===n&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":f,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};class S extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),i=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),n=s=>{document.body.contains(s.target)&&!d.contains(s.target)&&l()},r=s=>{i.showModal(),this.querySelector("input")?.focus(),s?.stopPropagation(),window.addEventListener("click",n)},l=()=>{i.close(),window.removeEventListener("click",n)};e.addEventListener("click",r),e.disabled=!1,t.addEventListener("click",l),window.addEventListener("keydown",s=>{s.metaKey===!0&&s.key==="k"?(i.open?l():r(),s.preventDefault()):s.key==="/"&&!i.open&&(r(),s.preventDefault())})}}customElements.define("site-search",S);window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(e=>setTimeout(e,1)))(async()=>{const{PagefindUI:e}=await p(()=>import("./ui-core.8ebd589a.js"),[]);new e({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/_pagefind/",showImages:!1})})});class v extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#o());const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(t.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#r(e)}#r(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#o(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",v);export{p as _};