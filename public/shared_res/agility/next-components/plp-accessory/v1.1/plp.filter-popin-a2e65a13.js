import{N as e,S as t,a as s,E as n,b as l,c as r,F as i,B as o,d as a,P as d,h as p}from"./index-2ed87a8b.js";customElements.define("plp-filter-sort-mobile",class extends e{#e=t;onStart(){const e=document.getElementById(s).getAttribute("data");this.template=`<nb-dropdown id="${this.#e}" data='${e}'></nb-dropdown>`}onReady(){document.getElementById(this.#e).addEventListener(n,(e=>{const[t,s]=e.detail.selected.value.split("::");l.set("sortCurrent",{key:t,order:s})}))}}),customElements.define("plp-filter-popin-content",class extends e{constructor(){super(),l.subscribe(this.onStoreChanges.bind(this))}onStoreChanges(){this.querySelectorAll("nb-chip").forEach((e=>{e.setAttribute("disabled",""+this.isDisabled(e.dataset.filterKey,e.dataset.filterValue)),e.setAttribute("checked",""+this.isChecked(e.dataset.filterKey,e.dataset.filterValue))}))}onStart(){const e=l.get("filters");this.template=e.map((e=>`${e.renderBefore()}\n                          ${e.values.map((t=>(t.disabled=this.isDisabled(e.key,t.value),t.render()))).join("")}\n                    ${e.renderAfter()}`)).join("")}onReady(){this.querySelectorAll("nb-chip").forEach((e=>{e.addEventListener("change",this.handleChipEvent)}))}isDisabled=(e,t)=>0===l.productsListFiltered().filter((s=>!!s[e]&&("string"==typeof s[e]?s[e]===t:"number"==typeof s[e]&&"number"==typeof t?t===s[e]:"number"==typeof s[e]?JSON.parse("["+t+"]").includes(s[e]):!!s[e].includes(t)))).length;isChecked=(e,t)=>l.get("filtersSelected").filter((s=>s.key===e&&s.value===t)).length>0;onDestroy(){l.unsubscribe(this.onStoreChanges),this.querySelectorAll("nb-chip").forEach((e=>{e.removeEventListener("change",this.handleChipEvent)}))}handleChipEvent(e){e.stopPropagation();const t={key:e.target.parentNode.dataset.filterKey,value:e.target.parentNode.dataset.filterValue,selected:e.target.checked,label:e.target.parentNode.dataset.filterLabel};l.filtersUpdate(t)}}),customElements.define("plp-filter-popin-footer",class extends e{constructor(){super(),l.subscribe(this.componentUpdated.bind(this))}onStart(){const e=l.translations,{a11y_see_result_number_label:t}=this.props;this.template=`<nb-link\n                        id="nb-filter-popin-reset-all"\n                        size="large"\n                        color="black"\n                        style="visibility: hidden"\n                        >\n                          ${e["productlistrespblock.resetfilters.label"]}\n                   </nb-link>\n                   <nb-cta\n                        id="nb-filter-popin-see-results"\n                        variation="secondary"\n                        style="visibility: hidden"\n                        aria_label_after="${t}"\n                        >\n                    </nb-cta>`}getA11ySeeResultsText(){const{see_result_number_label:e,see_result_number_label_one:t}=this.props,s=l.productsFilteredCount();return(1===s?t:e).replace("{resultsLength}",""+s)}onReady(){this.componentUpdated(),this.querySelector("#nb-filter-popin-reset-all")?.addEventListener("click",(()=>{l.filtersReset(),this.setAttribute("data-refresh","true")})),this.querySelector("#nb-filter-popin-see-results")?.addEventListener("click",(()=>{window.dispatchEvent(new CustomEvent(r))}))}componentUpdated(){const e=l.productsFilteredCount(),t=l.filtersSelectedCount(),s=this.querySelector("#nb-filter-popin-reset-all"),n=this.querySelector("#nb-filter-popin-see-results");s.style.visibility=t&&t>0?"visible":"hidden",n.style.visibility=e&&e>0?"visible":"hidden",n.querySelector("span").textContent=this.getA11ySeeResultsText(),n.querySelector("button").setAttribute("aria-label",this.getA11ySeeResultsText())}onDestroy(){l.unsubscribe(this.onStoreChanges)}});class u extends e{onStart(){this.props=this._createProps(document.getElementById(i).parentElement.attributes);const{see_result_number_label:e="See {resultsLength} Results",see_result_number_label_zero:t="No Result",see_result_number_label_one:s="See One Result",a11y_see_result_number_label:n="Close and validate filters"}=this.props.copywriting||this.props,r=l.innerWidth<o?"<plp-filter-sort-mobile></plp-filter-sort-mobile>":"";this.template=`\n                ${r}\n                <div class="mobileShadow">\n                    <header>\n                        <h2 class="t-sm-700-caps-sl">${l.translations["productlistrespblock.filter.label"]}</h2>\n                    </header>\n                    <section>\n                        <plp-filter-popin-content\n                        ></plp-filter-popin-content>\n                    </section>\n                    <footer>\n                        <plp-filter-popin-footer\n                            see_result_number_label="${e}"\n                            see_result_number_label_zero="${t}"\n                            see_result_number_label_one="${s}"\n                            a11y_see_result_number_label="${n}"\n                        ></plp-filter-popin-footer>\n                    </footer>\n                </div>`}onReady(){window.addEventListener(a,this.eventPopinClsed)}onDestroy(){window.removeEventListener(a,this.eventPopinClsed)}eventPopinClsed(e){e.stopPropagation(),e.detail.id===d&&p("onFilter")}}customElements.get("plp-filter-popin")||customElements.define("plp-filter-popin",u);export{u as default};
