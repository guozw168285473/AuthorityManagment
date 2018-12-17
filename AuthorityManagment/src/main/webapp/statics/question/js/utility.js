var utility={
	worldLimit:function(className,limitLen){
		var _className=$(className);
		var _txt;

		for(var i=0;i<_className.length;i++){
			_txt=_className.eq(i).text();
			if(_txt.length>limitLen){
				_txt=$.trim(_txt);
				_txt=_txt.substring(0,limitLen)+"…";
				_className.eq(i).text(_txt);
			}
		}
		
	}
}
