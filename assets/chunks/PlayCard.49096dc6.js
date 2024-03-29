import{_ as w,Z as b,h as I,$ as C,o,c as d,k as c,H as B,w as P,F as m,D as N,a0 as S,n as L,t as _,e as f,N as y,p as W,m as V}from"./framework.421c57a2.js";const h=u=>(W("data-v-c1df0378"),u=u(),V(),u),$={class:"wrapper",id:"app"},A={class:"player"},D={class:"player__top"},E={class:"player-cover"},F={class:"player-controls"},j=h(()=>c("svg",{class:"icon"},[c("use",{"xlink:href":"#icon-heart-o"})],-1)),G=[j],H=["href"],X=h(()=>c("svg",{class:"icon"},[c("use",{"xlink:href":"#icon-link"})],-1)),Z=[X],q=h(()=>c("svg",{class:"icon"},[c("use",{"xlink:href":"#icon-prev"})],-1)),J=[q],K=h(()=>c("svg",{class:"icon"},[c("use",{"xlink:href":"#icon-next"})],-1)),O=[K],Q={class:"icon"},R={key:0,"xlink:href":"#icon-pause"},U={key:1,"xlink:href":"#icon-play"},Y={class:"progress",ref:"progress"},c0={class:"progress__top"},s0={key:0,class:"album-info"},e0={class:"album-info__name"},t0={class:"album-info__track"},r0={class:"progress__duration"},n0={class:"progress__time"},a0=h(()=>c("div",null,null,-1)),i0=h(()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",hidden:"","xmlns:xlink":"http://www.w3.org/1999/xlink"},[c("defs",null,[c("symbol",{id:"icon-heart-o",viewBox:"0 0 32 32"},[c("title",null,"icon-heart-o"),c("path",{d:"M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z"}),c("path",{d:"M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z"}),c("path",{d:"M6.816 20.704c0.384 0.288 0.512 0.704 0.48 1.12 0.224 0.256 0.384 0.608 0.384 0.96 0 0.032 0 0.032 0 0.064 0.16 0.128 0.32 0.256 0.48 0.384 0.128 0.064 0.256 0.16 0.384 0.256 0.096 0.064 0.192 0.16 0.256 0.224 0.8 0.576 1.632 1.12 2.496 1.664 0.416 0.128 0.8 0.256 1.056 0.32 1.984 0.576 4.064 0.8 6.112 0.928 2.688-1.92 5.312-3.904 8-5.792 0.896-1.088 1.92-2.080 2.912-3.104v-7.552c-0.096-0.128-0.192-0.288-0.32-0.416-0.768-1.024-1.184-2.176-1.6-3.296-0.768-0.416-1.536-0.8-2.336-1.12-0.128-0.064-0.256-0.096-0.384-0.16h-21.568v12.992c1.312 0.672 2.496 1.6 3.648 2.528z"})]),c("symbol",{id:"icon-heart",viewBox:"0 0 32 32"},[c("title",null,"icon-heart"),c("path",{d:"M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z"}),c("path",{d:"M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z"})]),c("symbol",{id:"icon-infinity",viewBox:"0 0 32 32"},[c("title",null,"icon-infinity"),c("path",{d:"M29.312 20.832c-1.28 1.28-3.008 1.984-4.832 1.984s-3.52-0.704-4.832-1.984c-0.032-0.032-0.224-0.224-0.256-0.256v0 1.28c0 0.448-0.352 0.8-0.8 0.8s-0.8-0.352-0.8-0.8v-3.168c0-0.448 0.352-0.8 0.8-0.8h3.168c0.448 0 0.8 0.352 0.8 0.8s-0.352 0.8-0.8 0.8h-1.28c0.032 0.032 0.224 0.224 0.256 0.256 0.992 0.992 2.304 1.536 3.68 1.536 1.408 0 2.72-0.544 3.68-1.536 0.992-0.992 1.536-2.304 1.536-3.68s-0.544-2.72-1.536-3.68c-0.992-0.992-2.304-1.536-3.68-1.536-1.408 0-2.72 0.544-3.68 1.536l-8.416 8.448c-1.312 1.312-3.072 1.984-4.832 1.984s-3.488-0.672-4.832-1.984c-2.656-2.656-2.656-6.976 0-9.632s6.976-2.656 9.632 0c0.032 0.032 0.16 0.16 0.192 0.192l0.064 0.064v-1.28c0-0.448 0.352-0.8 0.8-0.8s0.8 0.352 0.8 0.8v3.168c0 0.448-0.352 0.8-0.8 0.8h-3.168c-0.448 0-0.8-0.352-0.8-0.8s0.352-0.8 0.8-0.8h1.28l-0.096-0.064c-0.032-0.032-0.16-0.16-0.192-0.192-0.992-0.992-2.304-1.536-3.68-1.536s-2.72 0.544-3.68 1.536c-2.048 2.048-2.048 5.344 0 7.392 0.992 0.992 2.304 1.536 3.68 1.536s2.72-0.544 3.68-1.536l8.512-8.512c1.28-1.28 3.008-1.984 4.832-1.984s3.52 0.704 4.832 1.984c2.624 2.656 2.624 7.008-0.032 9.664z"}),c("path",{d:"M24.512 23.488c-1.6 0-3.136-0.512-4.416-1.44-0.128 0.704-0.736 1.248-1.44 1.248-0.8 0-1.472-0.672-1.472-1.472v-3.168c0-0.8 0.672-1.472 1.472-1.472h3.168c0.8 0 1.472 0.672 1.472 1.472 0 0.608-0.384 1.152-0.928 1.376 0.64 0.352 1.376 0.544 2.144 0.544 1.216 0 2.368-0.48 3.2-1.344 0.864-0.864 1.344-1.984 1.344-3.2s-0.48-2.368-1.344-3.2c-0.864-0.864-1.984-1.344-3.2-1.344s-2.368 0.48-3.2 1.344l-8.512 8.48c-1.408 1.408-3.296 2.176-5.312 2.176s-3.872-0.768-5.312-2.176c-2.912-2.912-2.912-7.68 0-10.592 1.408-1.408 3.296-2.176 5.312-2.176 0 0 0 0 0 0 1.6 0 3.136 0.512 4.416 1.44 0.128-0.704 0.736-1.248 1.472-1.248 0.8 0 1.472 0.672 1.472 1.472v3.168c0 0.8-0.672 1.472-1.472 1.472h-3.168c-0.8 0-1.472-0.672-1.472-1.472 0-0.608 0.384-1.152 0.928-1.376-0.64-0.352-1.376-0.544-2.144-0.544-1.216 0-2.368 0.48-3.2 1.344-1.76 1.76-1.76 4.64 0 6.432 0.864 0.864 2.016 1.344 3.2 1.344 1.216 0 2.368-0.48 3.2-1.344l8.48-8.544c1.408-1.408 3.296-2.208 5.312-2.208s3.872 0.768 5.312 2.208c1.408 1.408 2.176 3.296 2.176 5.312s-0.768 3.872-2.208 5.312v0c0 0 0 0 0 0-1.408 1.408-3.296 2.176-5.28 2.176zM18.752 18.912l1.44 1.44c1.152 1.152 2.688 1.792 4.32 1.792s3.168-0.64 4.32-1.792v0c1.152-1.152 1.792-2.688 1.792-4.32s-0.64-3.168-1.792-4.32c-1.152-1.152-2.688-1.792-4.352-1.792-1.632 0-3.168 0.64-4.32 1.792l-8.48 8.448c-1.12 1.12-2.592 1.728-4.16 1.728s-3.072-0.608-4.16-1.728c-2.304-2.304-2.304-6.048 0-8.352 1.12-1.12 2.592-1.728 4.16-1.728s3.072 0.608 4.16 1.728l1.44 1.408h-2.912c-0.064 0-0.128 0.064-0.128 0.128s0.064 0.128 0.128 0.128h3.168c0.064 0 0.128-0.064 0.128-0.128v-3.168c0-0.064-0.064-0.128-0.128-0.128s-0.128 0.064-0.128 0.128v2.912l-1.408-1.408c-1.152-1.152-2.688-1.792-4.352-1.792-1.632 0-3.168 0.64-4.32 1.792-2.4 2.4-2.4 6.272 0 8.672 1.152 1.152 2.688 1.792 4.32 1.792s3.168-0.64 4.32-1.792l8.512-8.512c1.12-1.12 2.592-1.728 4.16-1.728s3.072 0.608 4.16 1.728c1.12 1.12 1.728 2.592 1.728 4.16s-0.608 3.072-1.728 4.16c-1.12 1.12-2.592 1.728-4.16 1.728s-3.072-0.608-4.16-1.728l-1.408-1.408h2.912c0.064 0 0.128-0.064 0.128-0.128s-0.064-0.128-0.128-0.128h-3.168c-0.064 0-0.128 0.064-0.128 0.128v3.168c0 0.064 0.064 0.128 0.128 0.128s0.128-0.064 0.128-0.128v-2.88z"})]),c("symbol",{id:"icon-pause",viewBox:"0 0 32 32"},[c("title",null,"icon-pause"),c("path",{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}),c("path",{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"}),c("path",{d:"M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"}),c("path",{d:"M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"})]),c("symbol",{id:"icon-play",viewBox:"0 0 32 32"},[c("title",null,"icon-play"),c("path",{d:"M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z"}),c("path",{d:"M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z"}),c("path",{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}),c("path",{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"})]),c("symbol",{id:"icon-link",viewBox:"0 0 32 32"},[c("title",null,"link"),c("path",{d:"M23.584 17.92c0 0.864 0 1.728 0 2.56 0 1.312 0 2.656 0 3.968 0 0.352 0.032 0.736-0.032 1.12 0.032-0.16 0.032-0.288 0.064-0.448-0.032 0.224-0.096 0.448-0.16 0.64 0.064-0.128 0.128-0.256 0.16-0.416-0.096 0.192-0.192 0.384-0.32 0.576 0.096-0.128 0.16-0.224 0.256-0.352-0.128 0.16-0.288 0.32-0.48 0.48 0.128-0.096 0.224-0.16 0.352-0.256-0.192 0.128-0.352 0.256-0.576 0.32 0.128-0.064 0.256-0.128 0.416-0.16-0.224 0.096-0.416 0.16-0.64 0.16 0.16-0.032 0.288-0.032 0.448-0.064-0.256 0.032-0.512 0.032-0.768 0.032-0.448 0-0.896 0-1.312 0-1.472 0-2.976 0-4.448 0-1.824 0-3.616 0-5.44 0-1.568 0-3.104 0-4.672 0-0.736 0-1.44 0-2.176 0-0.128 0-0.224 0-0.352-0.032 0.16 0.032 0.288 0.032 0.448 0.064-0.224-0.032-0.448-0.096-0.64-0.16 0.128 0.064 0.256 0.128 0.416 0.16-0.192-0.096-0.384-0.192-0.576-0.32 0.128 0.096 0.224 0.16 0.352 0.256-0.16-0.128-0.32-0.288-0.48-0.48 0.096 0.128 0.16 0.224 0.256 0.352-0.128-0.192-0.256-0.352-0.32-0.576 0.064 0.128 0.128 0.256 0.16 0.416-0.096-0.224-0.16-0.416-0.16-0.64 0.032 0.16 0.032 0.288 0.064 0.448-0.032-0.256-0.032-0.512-0.032-0.768 0-0.448 0-0.896 0-1.312 0-1.472 0-2.976 0-4.448 0-1.824 0-3.616 0-5.44 0-1.568 0-3.104 0-4.672 0-0.736 0-1.44 0-2.176 0-0.128 0-0.224 0.032-0.352-0.032 0.16-0.032 0.288-0.064 0.448 0.032-0.224 0.096-0.448 0.16-0.64-0.064 0.128-0.128 0.256-0.16 0.416 0.096-0.192 0.192-0.384 0.32-0.576-0.096 0.128-0.16 0.224-0.256 0.352 0.128-0.16 0.288-0.32 0.48-0.48-0.128 0.096-0.224 0.16-0.352 0.256 0.192-0.128 0.352-0.256 0.576-0.32-0.128 0.064-0.256 0.128-0.416 0.16 0.224-0.096 0.416-0.16 0.64-0.16-0.16 0.032-0.288 0.032-0.448 0.064 0.48-0.064 0.96-0.032 1.44-0.032 0.992 0 1.952 0 2.944 0 1.216 0 2.432 0 3.616 0 1.056 0 2.112 0 3.168 0 0.512 0 1.024 0 1.536 0 0 0 0 0 0.032 0 0.448 0 0.896-0.192 1.184-0.48s0.512-0.768 0.48-1.184c-0.032-0.448-0.16-0.896-0.48-1.184s-0.736-0.48-1.184-0.48c-0.64 0-1.28 0-1.92 0-1.408 0-2.816 0-4.224 0-1.44 0-2.848 0-4.256 0-0.672 0-1.344 0-2.016 0-0.736 0-1.472 0.192-2.112 0.576s-1.216 0.96-1.568 1.6c-0.384 0.64-0.544 1.376-0.544 2.144 0 0.672 0 1.376 0 2.048 0 1.28 0 2.56 0 3.84 0 1.504 0 3.040 0 4.544 0 1.408 0 2.848 0 4.256 0 0.992 0 1.952 0 2.944 0 0.224 0 0.448 0 0.64 0 0.864 0.224 1.76 0.768 2.464 0.16 0.192 0.288 0.384 0.48 0.576s0.384 0.352 0.608 0.512c0.32 0.224 0.64 0.384 1.024 0.512 0.448 0.16 0.928 0.224 1.408 0.224 0.16 0 0.32 0 0.48 0 0.896 0 1.792 0 2.72 0 1.376 0 2.784 0 4.16 0 1.536 0 3.040 0 4.576 0 1.312 0 2.656 0 3.968 0 0.768 0 1.536 0 2.336 0 0.416 0 0.832-0.032 1.248-0.128 1.504-0.32 2.784-1.6 3.104-3.104 0.128-0.544 0.128-1.056 0.128-1.568 0-0.608 0-1.184 0-1.792 0-1.408 0-2.816 0-4.224 0-0.256 0-0.512 0-0.768 0-0.448-0.192-0.896-0.48-1.184s-0.768-0.512-1.184-0.48c-0.448 0.032-0.896 0.16-1.184 0.48-0.384 0.384-0.576 0.768-0.576 1.248v0z"}),c("path",{d:"M32 11.232c0-0.8 0-1.568 0-2.368 0-1.248 0-2.528 0-3.776 0-0.288 0-0.576 0-0.864 0-0.896-0.768-1.696-1.696-1.696-0.8 0-1.568 0-2.368 0-1.248 0-2.528 0-3.776 0-0.288 0-0.576 0-0.864 0-0.448 0-0.896 0.192-1.184 0.48s-0.512 0.768-0.48 1.184c0.032 0.448 0.16 0.896 0.48 1.184s0.736 0.48 1.184 0.48c0.8 0 1.568 0 2.368 0 1.248 0 2.528 0 3.776 0 0.288 0 0.576 0 0.864 0-0.576-0.576-1.12-1.12-1.696-1.696 0 0.8 0 1.568 0 2.368 0 1.248 0 2.528 0 3.776 0 0.288 0 0.576 0 0.864 0 0.448 0.192 0.896 0.48 1.184s0.768 0.512 1.184 0.48c0.448-0.032 0.896-0.16 1.184-0.48 0.352-0.256 0.544-0.64 0.544-1.12v0z"}),c("path",{d:"M15.040 21.888c0.16-0.16 0.288-0.288 0.448-0.448 0.384-0.384 0.8-0.8 1.184-1.184 0.608-0.608 1.184-1.184 1.792-1.792 0.704-0.704 1.44-1.44 2.176-2.176 0.8-0.8 1.568-1.568 2.368-2.368s1.6-1.6 2.4-2.4c0.736-0.736 1.504-1.504 2.24-2.24 0.64-0.64 1.248-1.248 1.888-1.888 0.448-0.448 0.896-0.896 1.344-1.344 0.224-0.224 0.448-0.416 0.64-0.64 0 0 0.032-0.032 0.032-0.032 0.32-0.32 0.48-0.768 0.48-1.184s-0.192-0.896-0.48-1.184c-0.32-0.288-0.736-0.512-1.184-0.48-0.512 0.032-0.928 0.16-1.248 0.48-0.16 0.16-0.288 0.288-0.448 0.448-0.384 0.384-0.8 0.8-1.184 1.184-0.608 0.608-1.184 1.184-1.792 1.792-0.704 0.704-1.44 1.44-2.176 2.176-0.8 0.8-1.568 1.568-2.368 2.368s-1.6 1.6-2.4 2.4c-0.736 0.736-1.504 1.504-2.24 2.24-0.64 0.64-1.248 1.248-1.888 1.888-0.448 0.448-0.896 0.896-1.344 1.344-0.224 0.224-0.448 0.416-0.64 0.64 0 0-0.032 0.032-0.032 0.032-0.32 0.32-0.48 0.768-0.48 1.184s0.192 0.896 0.48 1.184c0.32 0.288 0.736 0.512 1.184 0.48 0.48 0 0.928-0.16 1.248-0.48v0z"})]),c("symbol",{id:"icon-next",viewBox:"0 0 32 32"},[c("title",null,"next"),c("path",{d:"M2.304 18.304h14.688l-4.608 4.576c-0.864 0.864-0.864 2.336 0 3.232 0.864 0.864 2.336 0.864 3.232 0l8.448-8.48c0.864-0.864 0.864-2.336 0-3.232l-8.448-8.448c-0.448-0.448-1.056-0.672-1.632-0.672s-1.184 0.224-1.632 0.672c-0.864 0.864-0.864 2.336 0 3.232l4.64 4.576h-14.688c-1.248 0-2.304 0.992-2.304 2.272s1.024 2.272 2.304 2.272z"}),c("path",{d:"M29.696 26.752c1.248 0 2.304-1.024 2.304-2.304v-16.928c0-1.248-1.024-2.304-2.304-2.304s-2.304 1.024-2.304 2.304v16.928c0.064 1.28 1.056 2.304 2.304 2.304z"})]),c("symbol",{id:"icon-prev",viewBox:"0 0 32 32"},[c("title",null,"prev"),c("path",{d:"M29.696 13.696h-14.688l4.576-4.576c0.864-0.864 0.864-2.336 0-3.232-0.864-0.864-2.336-0.864-3.232 0l-8.448 8.48c-0.864 0.864-0.864 2.336 0 3.232l8.448 8.448c0.448 0.448 1.056 0.672 1.632 0.672s1.184-0.224 1.632-0.672c0.864-0.864 0.864-2.336 0-3.232l-4.608-4.576h14.688c1.248 0 2.304-1.024 2.304-2.304s-1.024-2.24-2.304-2.24z"}),c("path",{d:"M2.304 5.248c-1.248 0-2.304 1.024-2.304 2.304v16.928c0 1.248 1.024 2.304 2.304 2.304s2.304-1.024 2.304-2.304v-16.928c-0.064-1.28-1.056-2.304-2.304-2.304z"})])])],-1)),l0={__name:"PlayCard",props:{tracks:Array},setup(u){const n=u,s=b({audio:null,circleLeft:null,barWidth:null,duration:null,currentTime:null,isTimerPlaying:!1,currentTrack:{favorited:!1},currentTrackIndex:0,transitionName:null,isShowCover:!0});let e=I();const M=()=>{e.paused?(e==null||e.play(),s.isTimerPlaying=!0):(e==null||e.pause(),s.isTimerPlaying=!1)},p=()=>{let a=100/e.duration*e.currentTime;s.barWidth=a+"%",s.circleLeft=a+"%";let i=Math.floor(e.duration/60),t=Math.floor(e.duration-i*60),l=Math.floor(e.currentTime/60),r=Math.floor(e.currentTime-l*60);i<10&&(i="0"+i),t<10&&(t="0"+t),l<10&&(l="0"+l),r<10&&(r="0"+r),s.duration=i+":"+t,s.currentTime=l+":"+r},T=a=>{let i=this.$refs.progress,t=e.duration,r=100*(a-i.offsetLeft)/i.offsetWidth;r>100&&(r=100),r<0&&(r=0),s.barWidth=r+"%",s.circleLeft=r+"%",e.currentTime=t*r/100,e.play()},z=a=>{s.isTimerPlaying=!0,e.pause(),T(a.pageX)},g=()=>{s.transitionName="scale-in",s.isShowCover=!1,s.currentTrackIndex>0?s.currentTrackIndex--:s.currentTrackIndex=n.tracks.length-1,s.currentTrack=n.tracks[s.currentTrackIndex],k()},v=()=>{s.transitionName="scale-out",s.isShowCover=!1,s.currentTrackIndex<n.tracks.length-1?s.currentTrackIndex++:s.currentTrackIndex=0,s.currentTrack=n.tracks[s.currentTrackIndex],k()},k=()=>{s.barWidth=0,s.circleLeft=0,e.currentTime=0,e.src=s.currentTrack.source,setTimeout(()=>{s.isTimerPlaying?e==null||e.play():e==null||e.pause()},300)},x=()=>{n.tracks[s.currentTrackIndex].favorited=!n.tracks[s.currentTrackIndex].favorited};return C(()=>{e=new Audio,s.currentTrack=n.tracks[n.tracks.length-1],e.ontimeupdate=()=>{p()},e.onloadedmetadata=()=>{p()},e.onended=function(){v(),s.isTimerPlaying=!0},e.src=s.currentTrack.source,console.log(e);for(let a=0;a<n.tracks.length;a++){const i=n.tracks[a];let t=document.createElement("link");t.rel="prefetch",t.href=i.cover,t.as="image",document.head.appendChild(t)}}),(a,i)=>(o(),d(m,null,[c("div",$,[c("div",A,[c("div",D,[c("div",E,[B(S,{name:s.transitionName},{default:P(()=>[(o(!0),d(m,null,N(n.tracks,(t,l)=>(o(),d("div",{key:l},[s.currentTrackIndex==l?(o(),d("div",{key:0,class:"player-cover__item",style:y({backgroundImage:`url(${t.cover})`})},null,4)):f("",!0)]))),128))]),_:1},8,["name"])]),c("div",F,[c("div",{class:L(["player-controls__item -favorite",{active:s.currentTrack.favorited}]),onClick:x},G,2),c("a",{href:s.currentTrack.url,target:"_blank",class:"player-controls__item"},Z,8,H),c("div",{class:"player-controls__item",onClick:g},J),c("div",{class:"player-controls__item",onClick:v},O),c("div",{class:"player-controls__item -xl js-play",onClick:M},[(o(),d("svg",Q,[s.isTimerPlaying?(o(),d("use",R)):(o(),d("use",U))]))])])]),c("div",Y,[c("div",c0,[s.currentTrack?(o(),d("div",s0,[c("div",e0,_(s.currentTrack.artist),1),c("div",t0,_(s.currentTrack.name),1)])):f("",!0),c("div",r0,_(s.duration),1)]),c("div",{class:"progress__bar",onClick:z},[c("div",{class:"progress__current",style:y({width:s.barWidth})},null,4)]),c("div",n0,_(s.currentTime),1)],512),a0])]),i0],64))}},d0=w(l0,[["__scopeId","data-v-c1df0378"]]);export{d0 as P};
