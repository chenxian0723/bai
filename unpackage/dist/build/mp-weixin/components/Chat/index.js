(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Chat/index"],{"24f4":function(m,t,p){"use strict";var a=p("373f"),u=p.n(a);u.a},"373f":function(m,t,p){},b35e:function(m,t,p){"use strict";p.r(t);var a=p("c3f8"),u=p("cc40");for(var i in u)"default"!==i&&function(m){p.d(t,m,(function(){return u[m]}))}(i);p("24f4");var n,e=p("f0c5"),c=Object(e["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);t["default"]=c.exports},c3f8:function(m,t,p){"use strict";var a;p.d(t,"b",(function(){return u})),p.d(t,"c",(function(){return i})),p.d(t,"a",(function(){return a}));var u=function(){var m=this,t=m.$createElement;m._self._c},i=[]},cc40:function(m,t,p){"use strict";p.r(t);var a=p("eb69"),u=p.n(a);for(var i in a)"default"!==i&&function(m){p.d(t,m,(function(){return a[m]}))}(i);t["default"]=u.a},eb69:function(m,t,p){"use strict";(function(m){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p={name:"Chat",props:{},data:function(){return{videoList:[{id:0,img:"http://p2.music.126.net/VDN3UgDoNu_2t1Bm46t54A==/109951164777422663.jpg?param=140y140",comm:"宇宙星河浪漫，生活温柔且可爱",uimg:"http://p2.music.126.net/VDN3UgDoNu_2t1Bm46t54A==/109951164777422663.jpg?param=140y140",uname:"情思天鹅",num:18},{id:1,img:"http://p2.music.126.net/eHIjIFGwsSNzIIEaaXaeww==/109951164517305229.jpg?param=140y140",comm:"白噪追溯 | 青年文艺复古风潮",uimg:"http://p2.music.126.net/eHIjIFGwsSNzIIEaaXaeww==/109951164517305229.jpg?param=140y140",uname:"情感图文君",num:3.4},{id:2,img:"http://p2.music.126.net/drP4yfrXEGGo0cSSAH11CQ==/109951164766781648.jpg?param=140y140",comm:"日系|舍不得离开 让我怎么能不喜欢",uimg:"http://p2.music.126.net/drP4yfrXEGGo0cSSAH11CQ==/109951164766781648.jpg?param=140y140",uname:"川诗鸢",num:4.2},{id:3,img:"http://p1.music.126.net/JEYDQ6MV0C-dPqiqojQibw==/109951164442575315.jpg?param=140y140",comm:"月亮不抱你 时光摧毁你 可我还是想爱你",uimg:"http://p1.music.126.net/JEYDQ6MV0C-dPqiqojQibw==/109951164442575315.jpg?param=140y140",uname:"樱桃味音乐",num:91},{id:4,img:"http://p1.music.126.net/tb9Q9Of3fXG7-v8OpPhsEQ==/109951164676901776.jpg?param=140y140",comm:"生活是自己的 尽情享受 尽情可爱",uimg:"http://p1.music.126.net/tb9Q9Of3fXG7-v8OpPhsEQ==/109951164676901776.jpg?param=140y140",uname:"宇宙播报机",num:70},{id:5,img:"http://p1.music.126.net/Wowr8upF1NKL4J7OhowaDA==/109951164624732895.jpg?param=140y140",comm:"<歌荒清除>接下来将拨动你的心弦",uimg:"http://p1.music.126.net/Wowr8upF1NKL4J7OhowaDA==/109951164624732895.jpg?param=140y140",uname:"hentai小绅士",num:113},{id:6,img:"http://p2.music.126.net/XGypVYOfRuURXO3SuKS4gg==/109951164645704530.jpg?param=140y140",comm:"【旋律电子】让跃动的彩虹激活你的心灵！",uimg:"http://p2.music.126.net/XGypVYOfRuURXO3SuKS4gg==/109951164645704530.jpg?param=140y140",uname:"谐星七十六号",num:83},{id:7,img:"http://p1.music.126.net/NaFSh7IoQOtpocDX164JRQ==/109951164645893553.jpg?param=140y140",comm:"一起听说唱好听到爆",uimg:"http://p1.music.126.net/NaFSh7IoQOtpocDX164JRQ==/109951164645893553.jpg?param=140y140",uname:"力OG",num:565},{id:8,img:"http://p1.music.126.net/UX78eEDic19VjIwf2e_MGw==/109951164491173755.jpg?param=140y140",comm:"时光之旅 | 致你我年少时的回忆",uimg:"http://p1.music.126.net/UX78eEDic19VjIwf2e_MGw==/109951164491173755.jpg?param=140y140",uname:"少年的半岛铁盒",num:567},{id:9,img:"http://p1.music.126.net/FJN_RF5TBEi4h5wFp8jY2w==/109951164498175594.jpg?param=140y140",comm:"要不要买菜",uimg:"http://p1.music.126.net/FJN_RF5TBEi4h5wFp8jY2w==/109951164498175594.jpg?param=140y140",uname:"Z舍曲林z",num:35},{id:10,img:"http://p1.music.126.net/1V4NtO48QSLDOth4W_GfSg==/109951164731614024.jpg?param=140y140",comm:"抖音民谣姑娘收录",uimg:"http://p1.music.126.net/1V4NtO48QSLDOth4W_GfSg==/109951164731614024.jpg?param=140y140",uname:"白羊and摩羯",num:3.5},{id:11,img:"http://p1.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg?param=140y140",comm:"私藏 | 值得循环的Cover合集",uimg:"http://p1.music.126.net/zk3QExfjxafpWTKu0DZsGA==/109951164717393424.jpg?param=140y140",uname:" 她的水彩笔",num:4.7},{id:12,img:"http://p1.music.126.net/a-dXHVgZKqjMjEvQ6vBYRw==/109951164750647901.jpg?param=140y140",comm:"怎么办我忘不掉她",uimg:"http://p1.music.126.net/a-dXHVgZKqjMjEvQ6vBYRw==/109951164750647901.jpg?param=140y140",uname:" 压抑疼",num:14},{id:13,img:"http://p1.music.126.net/EFlgfCY5i8itcc-H_1bKEw==/109951164728192899.jpg?param=140y140",comm:"任往事随风",uimg:"http://p1.music.126.net/EFlgfCY5i8itcc-H_1bKEw==/109951164728192899.jpg?param=140y140",uname:" 搞笑的酸葡萄",num:2.1},{id:14,img:"http://p1.music.126.net/RbzjboFAEsGDyY43FND4MA==/109951164668566359.jpg?param=140y140",comm:"Monstercat - 学习 | 音乐让你更有效率",uimg:"http://p1.music.126.net/RbzjboFAEsGDyY43FND4MA==/109951164668566359.jpg?param=140y140",uname:" Monstercat",num:21},{id:15,img:"http://p1.music.126.net/yV0aGwYf3zsw-u-skDF4mw==/109951164731490209.jpg?param=140y140",comm:"考研路上激励自己的歌（持续更新）",uimg:"http://p1.music.126.net/yV0aGwYf3zsw-u-skDF4mw==/109951164731490209.jpg?param=140y140",uname:"博儿要努力奋斗up",num:11},{id:16,img:"http://p1.music.126.net/gf3_nE6wPprWHk1V-To7vA==/109951164649022295.jpg?param=140y140",comm:"好听到单曲循环的英文歌曲",uimg:"http://p1.music.126.net/gf3_nE6wPprWHk1V-To7vA==/109951164649022295.jpg?param=140y140",uname:"白羊and摩羯",num:19},{id:17,img:"http://p1.music.126.net/yT8XIUfu3VBGpmD374clzQ==/109951164733050144.jpg?param=140y140",comm:"打游戏专用",uimg:"http://p1.music.126.net/yT8XIUfu3VBGpmD374clzQ==/109951164733050144.jpg?param=140y140",uname:"慕辰si了",num:10},{id:18,img:"http://p1.music.126.net/UyQgj_FLyHrbqnZGBVAmmQ==/109951164591919152.jpg?param=140y140",comm:"治愈纯音｜在孤独中找到自我",uimg:"http://p1.music.126.net/UyQgj_FLyHrbqnZGBVAmmQ==/109951164591919152.jpg?param=140y140",uname:"我最近又膨胀了",num:11},{id:19,img:"http://p1.music.126.net/AAY3fugfnxVyi6TFRUaNJg==/109951164729013265.jpg?param=140y140",comm:"硬曲 硬不硬听了再说（蹦迪专用）",uimg:"http://p1.music.126.net/AAY3fugfnxVyi6TFRUaNJg==/109951164729013265.jpg?param=140y140",uname:"陪雨柔长大",num:24},{id:20,img:"http://p1.music.126.net/qnLwtGqBLGXw9ArI1P8TVQ==/109951164721601587.jpg?param=140y140",comm:"一秒沦陷 | 超好听的Remix",uimg:"http://p1.music.126.net/qnLwtGqBLGXw9ArI1P8TVQ==/109951164721601587.jpg?param=140y140",uname:"全世界皆你",num:18}]}},methods:{goPlay:function(){m.navigateTo({url:"../../pages/play/play"})}}};t.default=p}).call(this,p("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Chat/index-create-component',
    {
        'components/Chat/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b35e"))
        })
    },
    [['components/Chat/index-create-component']]
]);
