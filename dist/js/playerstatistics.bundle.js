document.addEventListener("DOMContentLoaded",(function(){const a=document.querySelector(".number").textContent,s=document.querySelector(".statisticplayersall"),t=document.querySelector(".statisticthisyears"),e=[{number:"1",name:"Исаев",matches:"87",goals:"0",assist:"1",zeromatch:"10",lostgoals:"237",team:"proand8x8"},{number:"2",name:"Хакимов",matches:"12",goals:"10",assist:"3",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"3",name:"Фирдавс",matches:"12",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"4",name:"Малышев",matches:"21",goals:"1",assist:"6",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"5",name:"Волокитин",matches:"64",goals:"24",assist:"13",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"6",name:"Касулин",matches:"12",goals:"2",assist:"2",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"7",name:"Тапчан",matches:"295",goals:"164",assist:"47",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"8",name:"Швамбергер",matches:"7",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"proand8x8"},{number:"9",name:"Белоножкин",matches:"477",goals:"154",assist:"105",zeromatch:"0",lostgoals:"0",team:"proand8x8"},{number:"10",name:"Костич",matches:"51",goals:"14",assist:"5",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"11",name:"Полевой",matches:"5",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"12",name:"Шаропов",matches:"11",goals:"4",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"14",name:"Голуб",matches:"26",goals:"22",assist:"17",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"15",name:"Королев",matches:"5",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"17",name:"Петрищев",matches:"38",goals:"3",assist:"6",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"18",name:"Губский",matches:"235",goals:"124",assist:"19",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"19",name:"Агатов",matches:"15",goals:"1",assist:"8",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"20",name:"Власов",matches:"236",goals:"20",assist:"12",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"21",name:"Саидов",matches:"1",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"22",name:"Макарчев",matches:"59",goals:"49",assist:"24",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"23",name:"Бубнов",matches:"5",goals:"3",assist:"3",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"24",name:"Лешанков",matches:"90",goals:"8",assist:"9",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"25",name:"Грумынский",matches:"8",goals:"0",assist:"3",zeromatch:"2",lostgoals:"0",team:"pro"},{number:"26",name:"Голованов",matches:"32",goals:"0",assist:"3",zeromatch:"2",lostgoals:"123",team:"pro"},{number:"28",name:"Ларин",matches:"27",goals:"0",assist:"0",zeromatch:"4",lostgoals:"57",team:"pro"},{number:"29",name:"Свирщевский",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"30",name:"Салимгареев",matches:"23",goals:"0",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"31",name:"Дудочкин",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"3",team:"8x8"},{number:"32",name:"Волконский",matches:"42",goals:"14",assist:"7",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"33",name:"Пашаев",matches:"14",goals:"4",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"35",name:"Сыпченко",matches:"13",goals:"0",assist:"1",zeromatch:"2",lostgoals:"32",team:"pro"},{number:"37",name:"Шеин",matches:"154",goals:"33",assist:"37",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"41",name:"Синицын",matches:"36",goals:"0",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"47",name:"Языков",matches:"182",goals:"311",assist:"129",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"50",name:"Штепа",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"52",name:"Савельев",matches:"7",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"55",name:"Нестор",matches:"40",goals:"0",assist:"4",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"63",name:"Скворцов",matches:"104",goals:"2",assist:"9",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"64",name:"Беров",matches:"39",goals:"39",assist:"3",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"66",name:"Королев",matches:"11",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"69",name:"Долгов",matches:"66",goals:"14",assist:"10",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"72",name:"Абянов",matches:"13",goals:"6",assist:"4",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"74",name:"Котов",matches:"16",goals:"1",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"75",name:"Матвеев",matches:"22",goals:"5",assist:"3",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"77",name:"Иванов",matches:"7",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"81",name:"Мытько",matches:"19",goals:"0",assist:"0",zeromatch:"1b",lostgoals:"66",team:"pro"},{number:"86",name:"Гусев",matches:"10",goals:"0",assist:"1",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"89",name:"Пожидаев",matches:"3",goals:"1",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"90",name:"Юсуф",matches:"18",goals:"1",assist:"3",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"99",name:"Батуев",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"}].find((s=>s.number===a)),o=[{number:"1",name:"Исаев",matches:"9",goals:"0",assist:"0",zeromatch:"1",lostgoals:"33",team:"proand8x8"},{number:"2",name:"Хакимов",matches:"12",goals:"10",assist:"3",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"3",name:"Фирдавс",matches:"12",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"4",name:"Малышев",matches:"2",goals:"0",assist:"1",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"5",name:"Волокитин",matches:"6",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"6",name:"Касулин",matches:"12",goals:"2",assist:"2",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"7",name:"Тапчан",matches:"9",goals:"0",assist:"5",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"8",name:"Швамбергер",matches:"1",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"proand8x8"},{number:"9",name:"Белоножкин",matches:"26",goals:"5",assist:"11",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"10",name:"Костич",matches:"22",goals:"9",assist:"5",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"11",name:"Полевой",matches:"5",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"12",name:"Шаропов",matches:"11",goals:"4",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"14",name:"Голуб",matches:"10",goals:"9",assist:"6",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"15",name:"Королев",matches:"5",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"17",name:"Петрищев",matches:"14",goals:"2",assist:"4",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"18",name:"Губский",matches:"0",goals:"0",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"19",name:"Агатов",matches:"0",goals:"0",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"20",name:"Власов",matches:"24",goals:"3",assist:"8",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"21",name:"Саидов",matches:"1",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"22",name:"Макарчев",matches:"10",goals:"5",assist:"1",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"23",name:"Бубнов",matches:"4",goals:"3",assist:"3",zeromatch:"0",lostgoals:"0",team:"8x8"},{number:"24",name:"Лешанков",matches:"0",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"25",name:"Грумынский",matches:"0",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"26",name:"Голованов",matches:"0",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"28",name:"Ларин",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"5",team:"pro"},{number:"29",name:"Свирщевский",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"30",name:"Салимгареев",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"31",name:"Дудочкин",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"3",team:"8x8"},{number:"32",name:"Волконский",matches:"24",goals:"12",assist:"6",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"33",name:"Пашаев",matches:"4",goals:"1",assist:"1",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"35",name:"Сыпченко",matches:"13",goals:"0",assist:"1",zeromatch:"2",lostgoals:"32",team:"pro"},{number:"37",name:"Шеин",matches:"21",goals:"5",assist:"7",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"41",name:"Синицын",matches:"19",goals:"0",assist:"2",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"47",name:"Языков",matches:"18",goals:"26",assist:"13",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"50",name:"Штепа",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"52",name:"Савельев",matches:"7",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"55",name:"Нестор",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"63",name:"Скворцов",matches:"23",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"64",name:"Беров",matches:"0",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"66",name:"Королев",matches:"11",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"69",name:"Долгов",matches:"3",goals:"1",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"72",name:"Абянов",matches:"8",goals:"2",assist:"3",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"74",name:"Котов",matches:"5",goals:"0",assist:"1",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"75",name:"Матвеев",matches:"22",goals:"5",assist:"3",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"77",name:"Иванов",matches:"7",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"81",name:"Мытько",matches:"10",goals:"0",assist:"0",zeromatch:"1b",lostgoals:"29",team:"pro"},{number:"86",name:"Гусев",matches:"0",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"89",name:"Пожидаев",matches:"3",goals:"1",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"90",name:"Юсуф",matches:"2",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"},{number:"99",name:"Батуев",matches:"3",goals:"0",assist:"0",zeromatch:"0",lostgoals:"0",team:"pro"}].find((s=>s.number===a)),m=a=>Math.round(100*a)/100;if(e){s.querySelector(".matchesall").textContent=e.matches,s.querySelector(".goalall").textContent=e.goals,s.querySelector(".assistall").textContent=e.assist,s.querySelector(".zeromatchall").textContent="0"!==e.zeromatch?e.zeromatch:"0",s.querySelector(".goallostall").textContent="0"!==e.lostgoals?e.lostgoals:"0";const a=m(e.goals/e.matches),t=m(e.assist/e.matches),o=m(parseFloat(e.goals)+parseFloat(e.assist));isNaN(a)&&(a=0),isNaN(t)&&(t=0),isNaN(o)&&(o=0),s.querySelector(".goalallOnaverage").textContent=a,s.querySelector(".assistallOnaverage").textContent=t,s.querySelector(".assistgoalsall").textContent=o}if(o){t.querySelector(".matches").textContent=o.matches,t.querySelector(".goal").textContent=o.goals,t.querySelector(".assist").textContent=o.assist,t.querySelector(".zeromatch").textContent="0"!==o.zeromatch?o.zeromatch:"0",t.querySelector(".goallost").textContent="0"!==o.lostgoals?o.lostgoals:"0";const a=m(o.goals/o.matches),s=m(o.assist/o.matches),e=m(parseFloat(o.goals)+parseFloat(o.assist));isNaN(a)&&(a=0),isNaN(s)&&(s=0),isNaN(e)&&(e=0),t.querySelector(".goalOnaverage").textContent=a,t.querySelector(".assistOnaverage").textContent=s,t.querySelector(".assistgoals").textContent=e}}));