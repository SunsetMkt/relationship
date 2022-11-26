/*
 * 并称关系链 - 某个称呼同时包含多层关系链
*/
export default {
    '[f,f|f,m|m,f],[f,m],f':['老太奶爷','祖太奶爷'],
    '[f,f|f,m|m,f],[f,m],m':['老太奶奶','祖太奶奶'],
    '[f,m|m,f|m,m],[f,m],f':['老太姥爷','祖太姥爷'],
    '[f,m|m,f|m,m],[f,m],m':['老太姥姥','祖太姥姥'],
    '[f|m],[f|m],f':['太老爷'],
    '[f|m],[f|m],f,ob':['伯太老爷'],
    '[f|m],[f|m],f,ob,w':['伯太老姥'],
    '[f|m],[f|m],f,lb':['叔太老爷'],
    '[f|m],[f|m],f,lb,w':['叔太老姥'],
    '[f|m],[f|m],f,xs':['姑太老姥'],
    '[f|m],[f|m],f,xs,h':['姑太老爷'],
    '[f|m],[f|m],m':['太老姥'],
    '[f|m],[f|m],m,xb':['舅太老爷'],
    '[f|m],[f|m],m,xb,w':['舅太老姥'],
    '[f|m],[f|m],m,xs':['姨太老姥'],
    '[f|m],[f|m],m,xs,h':['姨太老爷'],
    '[f,f|f,m|m,f],f':['太奶爷','祖奶爷'],
    '[f,f|f,m|m,f],f,ob':['伯太奶爷','太伯奶爷'],
    '[f,f|f,m|m,f],f,ob,w':['伯太奶奶','太伯奶奶'],
    '[f,f|f,m|m,f],f,lb':['叔太奶爷','太叔奶爷'],
    '[f,f|f,m|m,f],f,lb,w':['叔太奶奶','太叔奶奶'],
    '[f,f|f,m|m,f],f,xs':['姑太奶奶','太姑奶奶'],
    '[f,f|f,m|m,f],f,xs,h':['姑太奶爷','太姑奶爷'],
    '[f,f|f,m|m,f],m':['太奶奶','祖奶奶'],
    '[f,f|f,m|m,f],m,xb':['舅太奶爷','太舅奶爷'],
    '[f,f|f,m|m,f],m,xb,w':['舅太奶奶','太舅奶奶'],
    '[f,f|f,m|m,f],m,xs':['姨太奶奶','太姨奶奶'],
    '[f,f|f,m|m,f],m,xs,h':['姨太奶爷','太姨奶爷'],
    '[f,m|m,f|m,m],f':['太姥爷','祖姥爷','太毑爷'],
    '[f,m|m,f|m,m],f,ob':['伯太姥爷','伯叔姥爷'],
    '[f,m|m,f|m,m],f,ob,w':['伯太姥姥','太伯姥姥'],
    '[f,m|m,f|m,m],f,lb':['叔太姥爷','太叔姥爷'],
    '[f,m|m,f|m,m],f,lb,w':['叔太姥姥','太叔姥姥'],
    '[f,m|m,f|m,m],f,xs':['姑太姥姥','太姑姥姥'],
    '[f,m|m,f|m,m],f,xs,h':['姑太姥爷','太姑姥爷'],
    '[f,m|m,f|m,m],m':['太姥姥','祖姥姥','太毑毑','太姥'],
    '[f,m|m,f|m,m],m,xb':['舅太姥爷','太舅姥爷'],
    '[f,m|m,f|m,m],m,xb,w':['舅太姥姥','太舅姥姥'],
    '[f,m|m,f|m,m],m,xs':['姨太姥姥','太姨姥姥'],
    '[f,m|m,f|m,m],m,xs,h':['姨太姥爷','太姨姥爷'],
    '[f|m],[f|m],[f|m]':['曾祖辈','祖祖','老太'],
    '[f|m],[f|m]':['祖辈'],
    '[f|m],f':['老爷'],
    '[f|m],f,ob':['伯老爷'],
    '[f|m],f,ob,w':['伯老姥'],
    '[f|m],f,lb':['叔老爷'],
    '[f|m],f,lb,w':['叔老姥'],
    '[f|m],f,xs':['姑老姥'],
    '[f|m],f,xs,h':['姑老爷'],
    '[f|m],m':['老姥'],
    '[f|m],m,xb':['舅老爷'],
    '[f|m],m,xb,w':['舅老姥'],
    '[f|m],m,xs':['姨老姥'],
    '[f|m],m,xs,h':['姨老爷'],
    'f,f,[f|m]':['曾祖父母'],
    'f,f,[f,xs|m,xb],s':['舅姑爷爷','舅姑爷'],
    'f,[f|m]':['祖父母','爷爷奶奶'],
    'f,[ob|ob,w]':['伯父母'],
    'f,[lb|lb,w]':['叔父母'],
    'f,xb,[s|d]':['堂兄弟姐妹','堂姐妹兄弟','从父兄弟姐妹'],
    'f,[xs|xs,h]':['姑父母'],
    'f,xs,[s|d]':['姑表兄弟姐妹'],
    'm,[f|m],f':['老外公','老外爷','老姥爷'],
    'm,[f|m],m,':['老外婆','老外奶','老姥姥','老姥娘','老嫏娘'],
    'm,[f|m]':['外祖父母','外公外婆','姥姥姥爷'],
    'm,f,[f,xs|m,xb],s':['舅姑姥爷'],
    'm,[xb|xb,w]':['舅父母'],
    'm,xb,[s|d]':['舅表兄弟姐妹'],
    'm,[xs|xs,h]':['姨父母'],
    'm,xs,[s|d]':['姨兄弟姐妹','姨姐妹兄弟','从母兄弟姐妹'],
    '[f|m]':['父母','爹娘','爹妈','爸妈','爸爸妈妈','父母亲','双亲','二亲','两亲','二老','高堂'],
    '[f|m],[f,xs|m,xb],s':['舅姑爸','姑舅爸'],
    '[f|m],[f,xs|m,xb],s&o,w':['舅姑姆','姑舅姆'],
    '[f|m],[f,xs|m,xb],s&l,w':['舅姑婶','姑舅婶'],
    '[f|m],[f,xs|m,xb],d':['姑舅娘娘'],
    '[f|m],m,xs,s':['两姨爸'],
    '[f|m],m,xs,s&o,w':['两姨姆'],
    '[f|m],m,xs,s&l,w':['两姨婶'],
    '[f|m],m,xs,d':['两姨娘娘'],
    'w,[f|m]':['岳父母','岳父岳母','丈人丈母','舅姑'],
    'w,f,[ob|ob,w]':['伯岳父母'],
    'w,f,[lb|lb,w]':['叔岳父母'],
    'w,f,[xs|xs,h]':['姑岳父母'],
    'w,m,[xb|xb,w]':['舅岳父母'],
    'w,m,[xs|xs,h]':['姨岳父母'],
    'w,[f,xs|m,xb],d':['姑舅姨子'],
    'w,[f,xs|m,xb],d,h':['姑舅连襟','姑舅连桥'],
    'h,[f|m]':['公婆','翁姑','姑翁','大家官','公公婆婆','姑嫜'],
    'h,f,[ob|ob,w]':['伯公婆'],
    'h,f,[lb|lb,w]':['叔公婆'],
    'h,f,[xs|xs,h]':['姑公婆'],
    'h,m,[xb|xb,w]':['舅公婆'],
    'h,m,[xs|xs,h]':['姨公婆'],
    '[ob|lb]':['兄弟','晜弟','亲兄弟','同胞兄弟'],
    '[ob|lb],w':['兄弟媳妇','兄弟妇'],
    '[os|ls]':['姐妹','亲姐妹','同胞姐妹'],
    '[os|ls],h':['姐妹夫','姊妹婿'],
    '[xb|xs]':['兄弟姐妹','同胞','同胞兄弟姐妹','手足'],
    '[ob|os]':['哥哥姐姐'],
    '[lb|ls]':['弟弟妹妹'],
    '[ob|ob,w]':['哥哥嫂嫂'],
    '[f,xb|m,xs],[s|d]':['从兄弟姐妹','从姐妹兄弟'],
    '[f,xs|m,xb],[s|d]':['表兄弟姐妹','表姐妹兄弟','老表','阿表'],
    '[f,xs|m,xb],s':['姑舅兄弟','舅姑兄弟'],
    '[f,xs|m,xb],s&o':['姑舅哥','姑舅哥哥'],
    '[f,xs|m,xb],s&l':['姑舅弟','姑舅弟弟'],
    '[f,xs|m,xb],d':['姑舅姊妹','舅姑姊妹'],
    '[f,xs|m,xb],d&o':['姑舅姐','姑舅姐姐'],
    '[f,xs|m,xb],d&l':['姑舅妹','姑舅妹妹'],
    '[f,xs|m,xb],s,s':['姑舅儿子'],
    '[f,xs|m,xb],s,d':['姑舅女儿'],
    '[xb|xs],[s|d]':['侄甥'],
    'xb,[s|d]':['侄子女','侄子侄女'],
    'xs,[s|d]':['甥子女','外甥子女'],
    '[w|s|d]':['妻儿','妻小'],
    '[w|d]':['妻女'],
    '[s|d]':['子女','儿女','小孩','孩子','孩子们','孩儿','小孩儿','宝宝','宝贝','娃','儿辈','子辈','子息','子嗣','崽','幺儿'],
    '[s|d],[s|d]':['孙辈','孙息','孙枝'],
    's,[s|d]':['孙子女'],
    'd,[s|d]':['外孙子女'],
    's#xb,s':['子侄'],
    's#s,w':['子媳'],
    '[s|d]#[s|d],[s|d]':['儿孙','子孙','孙息'],
    '[s,w|d,h],[f|m]':['亲家','儿女亲家'],
    '[s,w|d,h],f':['亲家公','亲家父','亲家翁','亲家世翁','姻翁'],
    '[s,w|d,h],f,f':['太姻翁'],
    '[s,w|d,h],f,m':['太姻姆'],
    '[s,w|d,h],f,f,f':['太姻翁'],
    '[s,w|d,h],f,f,m':['太姻姆'],
    '[s,w|d,h],f,f,ob':['姻伯翁'],
    '[s,w|d,h],f,f,ob,w':['姻伯姆'],
    '[s,w|d,h],f,f,lb':['姻叔翁'],
    '[s,w|d,h],f,f,lb,w':['姻叔母'],
    '[s,w|d,h],f,f,xb,s&o':['姻家兄'],
    '[s,w|d,h],f,f,xb,s&o,w':['姻家兄妇'],
    '[s,w|d,h],f,f,xb,s&l':['姻家弟'],
    '[s,w|d,h],f,f,xb,s&l,w':['姻家弟妇'],
    '[s,w|d,h],f,f,xb,s,s':['姻家侄'],
    '[s,w|d,h],f,f,xb,s,s,w':['姻家侄妇'],
    '[s,w|d,h],f,ob':['姻兄'],
    '[s,w|d,h],f,ob,w':['姻兄妇'],
    '[s,w|d,h],f,lb':['姻弟'],
    '[s,w|d,h],f,lb,w':['姻弟妇'],
    '[s,w|d,h],f,xb,s':['姻侄'],
    '[s,w|d,h],f,xb,s,w':['姻侄妇'],
    '[s,w|d,h],m':['亲家母','亲家婆','亲家姆','亲姆','姻姆'],
    '[s,w|d,h],m,ob':['姻仁兄'],
    '[s,w|d,h],m,ob,w':['姻仁兄妇'],
    '[s,w|d,h],m,lb':['姻仁弟'],
    '[s,w|d,h],m,lb,w':['姻仁弟妇'],
    '[s,w|d,h],[f|m],f':['姻太翁'],
    '[s,w|d,h],[f|m],m':['姻太姆'],
};