// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: SENSO-Trail Skin.ggsk
// Generated 2020-07-24T12:10:48

function pano2vrSkin(player,base) {
	player.addVariable('Station', 1, 0);
	player.addVariable('SENSI', 2, false);
	player.addVariable('Vollbild', 2, false);
	player.addVariable('Infomenu', 2, false);
	player.addVariable('Einstellungen', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._sensiordner=document.createElement('div');
		el.ggId="SENSIOrdner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 600px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sensiordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sensiordner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._sensimenu=document.createElement('div');
		els=me._sensimenu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._sensimenu__img.setAttribute('src',basePath + 'images/sensimenu.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sensimenu__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._sensimenu__imgo.setAttribute('src',basePath + 'images/sensimenu__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SENSImenu";
		el.ggDx=1;
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sensimenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sensimenu.onclick=function (e) {
			player.setVariableValue('SENSI', true);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility=(Number(me._sensimenu2.style.opacity)>0||!me._sensimenu2.style.opacity)?'inherit':'hidden';
			me._sensimenu2.ggVisible=true;
		}
		me._sensimenu.onmouseover=function (e) {
			me._sensimenu__img.style.visibility='hidden';
			me._sensimenu__imgo.style.visibility='inherit';
		}
		me._sensimenu.onmouseout=function (e) {
			me._sensimenu__img.style.visibility='inherit';
			me._sensimenu__imgo.style.visibility='hidden';
		}
		me._sensimenu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._sensimenu);
		el=me._sensimenu2=document.createElement('div');
		els=me._sensimenu2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._sensimenu2__img.setAttribute('src',basePath + 'images/sensimenu2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sensimenu2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._sensimenu2__imgo.setAttribute('src',basePath + 'images/sensimenu2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SENSImenu2";
		el.ggDx=1;
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sensimenu2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sensimenu2.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._sensimenu2.onmouseover=function (e) {
			me._sensimenu2__img.style.visibility='hidden';
			me._sensimenu2__imgo.style.visibility='inherit';
		}
		me._sensimenu2.onmouseout=function (e) {
			me._sensimenu2__img.style.visibility='inherit';
			me._sensimenu2__imgo.style.visibility='hidden';
		}
		me._sensimenu2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._sensimenu2);
		el=me._play=document.createElement('div');
		els=me._play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play__img.setAttribute('src',basePath + 'images/play.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play__imgo.setAttribute('src',basePath + 'images/play__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play";
		el.ggDx=1;
		el.ggDy=211;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Einstellungen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._play.style[domTransition]='opacity 800ms ease 0ms';
				if (me._play.ggCurrentLogicStateVisible == 0) {
					me._play.style.visibility="hidden";
					me._play.ggVisible=false;
				}
				else {
					me._play.style.visibility=(Number(me._play.style.opacity)>0||!me._play.style.opacity)?'inherit':'hidden';
					me._play.ggVisible=true;
				}
			}
		}
		me._play.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._play.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._play.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._play.style[domTransition]='opacity 800ms ease 0ms';
				if (me._play.ggCurrentLogicStateAlpha == 0) {
					me._play.style.visibility=me._play.ggVisible?'inherit':'hidden';
					me._play.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._play.style.opacity == 0.0) { me._play.style.visibility="hidden"; } }, 805);
					me._play.style.opacity=0;
				}
			}
		}
		me._play.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play.onmouseover=function (e) {
			me._play__img.style.visibility='hidden';
			me._play__imgo.style.visibility='inherit';
		}
		me._play.onmouseout=function (e) {
			me._play__img.style.visibility='inherit';
			me._play__imgo.style.visibility='hidden';
		}
		me._play.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._play);
		el=me._einstellungen=document.createElement('div');
		els=me._einstellungen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSI3NC4zNzk0NzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPSJTRU5TSWVpbnN0ZWxsdW5nZW4uc3ZnIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIiBpZD0ic3'+
			'ZnMiIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSI+CiA8c29kaXBvZGk6bmFtZWR2aWV3IGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOnpvb209'+
			'IjUuMTgxMzUzNSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6Y3k9IjU1LjE0NTg0NyIgYm9yZGVyb3BhY2l0eT0iMSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpjeD0iLTY1LjM3NDI4MSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGdyaWR0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3OSIgaW5rc2NhcGU6d2luZG93LW1heGltaX'+
			'plZD0iMSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGE4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxkZWZzIGlkPSJkZWZzNiI+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNl'+
			'IiBpZD0iY2xpcFBhdGgxNDMiPgogICA8cmVjdCBoZWlnaHQ9IjIwMy4xNDQyNyIgd2lkdGg9IjIwMy4xNDQyNyIgeD0iLTcxNS4xNTY4IiBpZD0icmVjdDE0NSIgeT0iNjcuODA0OTkzIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjEuNzEyMTI4NjQiIHRyYW5zZm9ybT0icm90YXRlKC00My4zMTUzMTUpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ1NTIiPgogICA8cGF0aCBpZD0icGF0aDQ1NTQiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5OD'+
			'ggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0Njk5Ij4KICAgPHJlY3QgaGVpZ2h0PSIyNy45NTUwMjEiIHdpZHRoPSIyOC4wOTgzNzkiIHg9Ii0xMTAuOTQzOSIgaWQ9InJlY3Q0NzAxIiByeT0i'+
			'Mi44OTQ5OTY0IiB5PSItMjcuNDE2NTA0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMwNjczNzA3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTM3Ij4KICAgPHBhdGggaWQ9InBhdGg0OTM5IiBkPSJtIC0xMDYuNjA3MjYsLTEzLjgwNTU0NCAzLjMxMDI5LDIuNTAyOTA1IDkuNTI3MTg3LDIuNTAyOTA1NSAxLjkzNzczNCwzLj'+
			'cxMzk4ODEgLTE1LjE3ODkxMSwyLjc0NTEyMTcgLTkuMjg0OTcsLTYuMjk3NjMyMSB6IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMzNDY2OTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkxMyI+CiAgIDxjaXJjbGUgY3g9Ii04'+
			'OC41Nzk0NzUiIHI9IjI0LjI4MzU3OSIgY3k9Ii01NC4xMzQ3ODkiIGlkPSJjaXJjbGU0OTE1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDoxLjMzODUyOTk0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMSIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwOD'+
			'UiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoODk2Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0ODk0IiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5p'+
			'dHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODk3Ij4KICAgPGNpcmNsZSBjeD0iLTUyLjY0ODIyOCIgcj0iMTAuOTI5OTA3IiBjeT0iLTI4LjAwMTM4NyIgaWQ9ImNpcmNsZTQ4OTkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTMiPgogICA8Y2lyY2xlIGN4PSItNTIuNjQ4MjI4IiByPSIxMC45Mjk5MDciIGN5PSItMjguMDAxMzg3IiBpZD'+
			'0iY2lyY2xlNDg5NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4OSI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODkxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQx'+
			'KSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg1Ij4KICAgPGNpcmNsZSBjeD0iLTUyLjY0ODIyOCIgcj0iMTAuOTI5OTA3IiBjeT0iLTI4LjAwMTM4NyIgaWQ9ImNpcmNsZTQ4ODciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNSI+CiAgIDxyZWN0IGhlaWdodD'+
			'0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEtMiIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoOTMyIj4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0OTMwIiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiBy'+
			'eD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTQiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTAiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcF'+
			'BhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDE5NzkiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3QxOTc3IiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8cGF0aCBpZD0icGF0aDIwMzgiIGQ9Im0gMjU3Ljk4MzAzLDEzNy40NTYyNSAtNC45MDE5NCw4LjQ5MDQxIGggLTkuODAzODcgbCAtNC45MDE5NCwtOC40'+
			'OTA0MSA0LjkwMTk0LC04LjQ5MDQgaCA5LjgwMzg3IHoiIHN0eWxlPSJmaWxsOiMwMGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTgzNzg5OTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjc5MjgxODEsLTMuMTA1MjUxOSwzLjEwNTI1MTksMS43OTI4MTgxLC04MzQuNTg2NjMsNTU2LjQzMTk5KSIvPgogPGcgaWQ9InN1cmZhY2UxIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxIiB0cmFuc2Zvcm09Im'+
			'1hdHJpeCgxLjg1MzY1MjgsMCwwLDEuODUzNjUyOCw3LjUzMTMwMzUsMi41NDg4MDY1KSI+CiAgPHBhdGggaWQ9InBhdGgyIiBkPSJNIDEzLjE4NzUsMyAxMy4wMzEyNSwzLjgxMjUgMTIuNDM3NSw2Ljc4MTI1IEMgMTEuNDg0Mzc1LDcuMTU2MjUgMTAuNjI1LDcuNjgzNTk0IDkuODQzNzUsOC4zMTI1IGwgLTIuOTA2MjUsLTEgLTAuNzgxMjUsLTAuMjUgLTAuNDA2MjUsMC43MTg3NSAtMiwzLjQzNzUgLTAuNDA2MjUsMC43MTg3NSAwLjU5Mzc1LDAuNTMxMjUgMi4yNSwxLjk2ODc1IEMgNi4xMDU0NjksMTQuOTQ5MjE5IDYsMTUuNDYwOTM4IDYsMTYgYyAwLDAuNTM5MDYzIDAuMTA1NDY5LDEuMDUw'+
			'NzgxIDAuMTg3NSwxLjU2MjUgbCAtMi4yNSwxLjk2ODc1IC0wLjU5Mzc1LDAuNTMxMjUgMC40MDYyNSwwLjcxODc1IDIsMy40Mzc1IDAuNDA2MjUsMC43MTg3NSAwLjc4MTI1LC0wLjI1IDIuOTA2MjUsLTEgYyAwLjc4MTI1LDAuNjI4OTA2IDEuNjQwNjI1LDEuMTU2MjUgMi41OTM3NSwxLjUzMTI1IEwgMTMuMDMxMjUsMjguMTg3NSAxMy4xODc1LDI5IGggNS42MjUgbCAwLjE1NjI1LC0wLjgxMjUgMC41OTM3NSwtMi45Njg3NSBjIDAuOTUzMTI1LC0wLjM3NSAxLjgxMjUsLTAuOTAyMzQ0IDIuNTkzNzUsLTEuNTMxMjUgbCAyLjkwNjI1LDEgMC43ODEyNSwwLjI1IDAuNDA2MjUsLTAuNzE4NzUgMi'+
			'wtMy40Mzc1IDAuNDA2MjUsLTAuNzE4NzUgLTAuNTkzNzUsLTAuNTMxMjUgLTIuMjUsLTEuOTY4NzUgQyAyNS44OTQ1MzEsMTcuMDUwNzgxIDI2LDE2LjUzOTA2MyAyNiwxNiAyNiwxNS40NjA5MzggMjUuODk0NTMxLDE0Ljk0OTIxOSAyNS44MTI1LDE0LjQzNzUgbCAyLjI1LC0xLjk2ODc1IDAuNTkzNzUsLTAuNTMxMjUgLTAuNDA2MjUsLTAuNzE4NzUgLTIsLTMuNDM3NSAtMC40MDYyNSwtMC43MTg3NSAtMC43ODEyNSwwLjI1IC0yLjkwNjI1LDEgQyAyMS4zNzUsNy42ODM1OTQgMjAuNTE1NjI1LDcuMTU2MjUgMTkuNTYyNSw2Ljc4MTI1IEwgMTguOTY4NzUsMy44MTI1IDE4LjgxMjUsMyBaIG0g'+
			'MS42MjUsMiBoIDIuMzc1IGwgMC41LDIuNTkzNzUgMC4xMjUsMC41OTM3NSAwLjU2MjUsMC4xODc1IGMgMS4xMzY3MTksMC4zNTU0NjkgMi4xNjc5NjksMC45NTcwMzEgMy4wMzEyNSwxLjc1IGwgMC40Mzc1LDAuNDA2MjUgMC41NjI1LC0wLjE4NzUgMi41MzEyNSwtMC44NzUgMS4xODc1LDIuMDMxMjUgLTIsMS43ODEyNSAtMC40Njg3NSwwLjM3NSBMIDIzLjgxMjUsMTQuMjUgQyAyMy45NDE0MDYsMTQuODIwMzEzIDI0LDE1LjQwMjM0NCAyNCwxNiBjIDAsMC41OTc2NTYgLTAuMDU4NTksMS4xNzk2ODggLTAuMTg3NSwxLjc1IGwgLTAuMTI1LDAuNTkzNzUgMC40Mzc1LDAuMzc1IDIsMS43ODEyNS'+
			'AtMS4xODc1LDIuMDMxMjUgLTIuNTMxMjUsLTAuODc1IC0wLjU2MjUsLTAuMTg3NSAtMC40Mzc1LDAuNDA2MjUgYyAtMC44NjMyODEsMC43OTI5NjkgLTEuODk0NTMxLDEuMzk0NTMxIC0zLjAzMTI1LDEuNzUgbCAtMC41NjI1LDAuMTg3NSAtMC4xMjUsMC41OTM3NSAtMC41LDIuNTkzNzUgaCAtMi4zNzUgbCAtMC41LC0yLjU5Mzc1IC0wLjEyNSwtMC41OTM3NSAtMC41NjI1LC0wLjE4NzUgYyAtMS4xMzY3MTksLTAuMzU1NDY5IC0yLjE2Nzk2OSwtMC45NTcwMzEgLTMuMDMxMjUsLTEuNzUgbCAtMC40Mzc1LC0wLjQwNjI1IC0wLjU2MjUsMC4xODc1IC0yLjUzMTI1LDAuODc1IEwgNS44NzUsMjAu'+
			'NSBsIDIsLTEuNzgxMjUgMC40Njg3NSwtMC4zNzUgTCA4LjE4NzUsMTcuNzUgQyA4LjA1ODU5NCwxNy4xNzk2ODggOCwxNi41OTc2NTYgOCwxNiA4LDE1LjQwMjM0NCA4LjA1ODU5NCwxNC44MjAzMTMgOC4xODc1LDE0LjI1IEwgOC4zNDM3NSwxMy42NTYyNSA3Ljg3NSwxMy4yODEyNSA1Ljg3NSwxMS41IDcuMDYyNSw5LjQ2ODc1IGwgMi41MzEyNSwwLjg3NSAwLjU2MjUsMC4xODc1IDAuNDM3NSwtMC40MDYyNSBDIDExLjQ1NzAzMSw5LjMzMjAzMSAxMi40ODgyODEsOC43MzA0NjkgMTMuNjI1LDguMzc1IGwgMC41NjI1LC0wLjE4NzUgMC4xMjUsLTAuNTkzNzUgeiBNIDE2LDExIGMgLTIuNzUsMC'+
			'AtNSwyLjI1IC01LDUgMCwyLjc1IDIuMjUsNSA1LDUgMi43NSwwIDUsLTIuMjUgNSwtNSAwLC0yLjc1IC0yLjI1LC01IC01LC01IHogbSAwLDIgYyAxLjY2Nzk2OSwwIDMsMS4zMzIwMzEgMywzIDAsMS42Njc5NjkgLTEuMzMyMDMxLDMgLTMsMyAtMS42Njc5NjksMCAtMywtMS4zMzIwMzEgLTMsLTMgMCwtMS42Njc5NjkgMS4zMzIwMzEsLTMgMywtMyB6IiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._einstellungen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._einstellungen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSI3NC4zNzk0NzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPSJTRU5TSWVpbnN0ZWxsdW5nZW4yLnN2ZyIgdmlld0JveD0iMCAwIDc0LjM3OTQ4IDY0LjQxNDUyMiIgaWQ9In'+
			'N2ZzIiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp6b29t'+
			'PSI1LjE4MTM1MzUiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGJvcmRlcm9wYWNpdHk9IjEiIGd1aWRldG9sZXJhbmNlPSIxMCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6Y3g9Ii02NS4zNzQyODEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBncmlkdG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOndpbmRvdy1tYXhpbW'+
			'l6ZWQ9IjEiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgc2hvd2dyaWQ9ImZhbHNlIi8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVz'+
			'ZSIgaWQ9ImNsaXBQYXRoMTQzIj4KICAgPHJlY3QgaGVpZ2h0PSIyMDMuMTQ0MjciIHdpZHRoPSIyMDMuMTQ0MjciIHg9Ii03MTUuMTU2OCIgaWQ9InJlY3QxNDUiIHk9IjY3LjgwNDk5MyIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggaWQ9InBhdGg0NTU0IiBkPSJtIC0xMjguNzMwODMsLTguMTUzMzkwOSAyMy43Mzg5NiwtMjMuNzM4OTcyMSAtMTkuMTA2OTgsLTguNDkxOT'+
			'g4IC0xOC41Mjc5OCw3LjMzMzk5MSAxMy44OTYsMjQuODk2OTY5MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IGhlaWdodD0iMjcuOTU1MDIxIiB3aWR0aD0iMjguMDk4Mzc5IiB4PSItMTEwLjk0MzkiIGlkPSJyZWN0NDcwMSIgcnk9'+
			'IjIuODk0OTk2NCIgeT0iLTI3LjQxNjUwNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMDY3MzcwNztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIGlkPSJwYXRoNDkzOSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy'+
			'43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMzQ2NjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIGN4PSIt'+
			'ODguNTc5NDc1IiByPSIyNC4yODM1NzkiIGN5PSItNTQuMTM0Nzg5IiBpZD0iY2lyY2xlNDkxNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MS4zMzg1Mjk5NCIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MD'+
			'g1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDg5NCIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVu'+
			'aXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODk5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSBjeD0iLTUyLjY0ODIyOCIgcj0iMTAuOTI5OTA3IiBjeT0iLTI4LjAwMTM4NyIgaW'+
			'Q9ImNpcmNsZTQ4OTUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIGN4PSItNTIuNjQ4MjI4IiByPSIxMC45Mjk5MDciIGN5PSItMjguMDAxMzg3IiBpZD0iY2lyY2xlNDg5MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0'+
			'MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODg3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCBoZWlnaH'+
			'Q9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTIiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDkzMCIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIg'+
			'cng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMS0wIiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaX'+
			'BQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0MTk3NyIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggaWQ9InBhdGgyMDM4IiBkPSJtIDI1Ny45ODMwMywxMzcuNDU2MjUgLTQuOTAxOTQsOC40OTA0MSBoIC05LjgwMzg3IGwgLTQuOTAxOTQsLTgu'+
			'NDkwNDEgNC45MDE5NCwtOC40OTA0IGggOS44MDM4NyB6IiBzdHlsZT0iZmlsbDojMDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjk4Mzc4OTkyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS43OTI4MTgxLC0zLjEwNTI1MTksMy4xMDUyNTE5LDEuNzkyODE4MSwtODM0LjU4NjYzLDU1Ni40MzE5OSkiLz4KIDxnIGlkPSJzdXJmYWNlMSIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MSIgdHJhbnNmb3JtPS'+
			'JtYXRyaXgoMS44NTM2NTI4LDAsMCwxLjg1MzY1MjgsNy41MzEzMDM1LDIuNTQ4ODA2NSkiPgogIDxwYXRoIGlkPSJwYXRoMiIgZD0iTSAxMy4xODc1LDMgMTMuMDMxMjUsMy44MTI1IDEyLjQzNzUsNi43ODEyNSBDIDExLjQ4NDM3NSw3LjE1NjI1IDEwLjYyNSw3LjY4MzU5NCA5Ljg0Mzc1LDguMzEyNSBsIC0yLjkwNjI1LC0xIC0wLjc4MTI1LC0wLjI1IC0wLjQwNjI1LDAuNzE4NzUgLTIsMy40Mzc1IC0wLjQwNjI1LDAuNzE4NzUgMC41OTM3NSwwLjUzMTI1IDIuMjUsMS45Njg3NSBDIDYuMTA1NDY5LDE0Ljk0OTIxOSA2LDE1LjQ2MDkzOCA2LDE2IGMgMCwwLjUzOTA2MyAwLjEwNTQ2OSwxLjA1'+
			'MDc4MSAwLjE4NzUsMS41NjI1IGwgLTIuMjUsMS45Njg3NSAtMC41OTM3NSwwLjUzMTI1IDAuNDA2MjUsMC43MTg3NSAyLDMuNDM3NSAwLjQwNjI1LDAuNzE4NzUgMC43ODEyNSwtMC4yNSAyLjkwNjI1LC0xIGMgMC43ODEyNSwwLjYyODkwNiAxLjY0MDYyNSwxLjE1NjI1IDIuNTkzNzUsMS41MzEyNSBMIDEzLjAzMTI1LDI4LjE4NzUgMTMuMTg3NSwyOSBoIDUuNjI1IGwgMC4xNTYyNSwtMC44MTI1IDAuNTkzNzUsLTIuOTY4NzUgYyAwLjk1MzEyNSwtMC4zNzUgMS44MTI1LC0wLjkwMjM0NCAyLjU5Mzc1LC0xLjUzMTI1IGwgMi45MDYyNSwxIDAuNzgxMjUsMC4yNSAwLjQwNjI1LC0wLjcxODc1ID'+
			'IsLTMuNDM3NSAwLjQwNjI1LC0wLjcxODc1IC0wLjU5Mzc1LC0wLjUzMTI1IC0yLjI1LC0xLjk2ODc1IEMgMjUuODk0NTMxLDE3LjA1MDc4MSAyNiwxNi41MzkwNjMgMjYsMTYgMjYsMTUuNDYwOTM4IDI1Ljg5NDUzMSwxNC45NDkyMTkgMjUuODEyNSwxNC40Mzc1IGwgMi4yNSwtMS45Njg3NSAwLjU5Mzc1LC0wLjUzMTI1IC0wLjQwNjI1LC0wLjcxODc1IC0yLC0zLjQzNzUgLTAuNDA2MjUsLTAuNzE4NzUgLTAuNzgxMjUsMC4yNSAtMi45MDYyNSwxIEMgMjEuMzc1LDcuNjgzNTk0IDIwLjUxNTYyNSw3LjE1NjI1IDE5LjU2MjUsNi43ODEyNSBMIDE4Ljk2ODc1LDMuODEyNSAxOC44MTI1LDMgWiBt'+
			'IDEuNjI1LDIgaCAyLjM3NSBsIDAuNSwyLjU5Mzc1IDAuMTI1LDAuNTkzNzUgMC41NjI1LDAuMTg3NSBjIDEuMTM2NzE5LDAuMzU1NDY5IDIuMTY3OTY5LDAuOTU3MDMxIDMuMDMxMjUsMS43NSBsIDAuNDM3NSwwLjQwNjI1IDAuNTYyNSwtMC4xODc1IDIuNTMxMjUsLTAuODc1IDEuMTg3NSwyLjAzMTI1IC0yLDEuNzgxMjUgLTAuNDY4NzUsMC4zNzUgTCAyMy44MTI1LDE0LjI1IEMgMjMuOTQxNDA2LDE0LjgyMDMxMyAyNCwxNS40MDIzNDQgMjQsMTYgYyAwLDAuNTk3NjU2IC0wLjA1ODU5LDEuMTc5Njg4IC0wLjE4NzUsMS43NSBsIC0wLjEyNSwwLjU5Mzc1IDAuNDM3NSwwLjM3NSAyLDEuNzgxMj'+
			'UgLTEuMTg3NSwyLjAzMTI1IC0yLjUzMTI1LC0wLjg3NSAtMC41NjI1LC0wLjE4NzUgLTAuNDM3NSwwLjQwNjI1IGMgLTAuODYzMjgxLDAuNzkyOTY5IC0xLjg5NDUzMSwxLjM5NDUzMSAtMy4wMzEyNSwxLjc1IGwgLTAuNTYyNSwwLjE4NzUgLTAuMTI1LDAuNTkzNzUgLTAuNSwyLjU5Mzc1IGggLTIuMzc1IGwgLTAuNSwtMi41OTM3NSAtMC4xMjUsLTAuNTkzNzUgLTAuNTYyNSwtMC4xODc1IGMgLTEuMTM2NzE5LC0wLjM1NTQ2OSAtMi4xNjc5NjksLTAuOTU3MDMxIC0zLjAzMTI1LC0xLjc1IGwgLTAuNDM3NSwtMC40MDYyNSAtMC41NjI1LDAuMTg3NSAtMi41MzEyNSwwLjg3NSBMIDUuODc1LDIw'+
			'LjUgbCAyLC0xLjc4MTI1IDAuNDY4NzUsLTAuMzc1IEwgOC4xODc1LDE3Ljc1IEMgOC4wNTg1OTQsMTcuMTc5Njg4IDgsMTYuNTk3NjU2IDgsMTYgOCwxNS40MDIzNDQgOC4wNTg1OTQsMTQuODIwMzEzIDguMTg3NSwxNC4yNSBMIDguMzQzNzUsMTMuNjU2MjUgNy44NzUsMTMuMjgxMjUgNS44NzUsMTEuNSA3LjA2MjUsOS40Njg3NSBsIDIuNTMxMjUsMC44NzUgMC41NjI1LDAuMTg3NSAwLjQzNzUsLTAuNDA2MjUgQyAxMS40NTcwMzEsOS4zMzIwMzEgMTIuNDg4MjgxLDguNzMwNDY5IDEzLjYyNSw4LjM3NSBsIDAuNTYyNSwtMC4xODc1IDAuMTI1LC0wLjU5Mzc1IHogTSAxNiwxMSBjIC0yLjc1LD'+
			'AgLTUsMi4yNSAtNSw1IDAsMi43NSAyLjI1LDUgNSw1IDIuNzUsMCA1LC0yLjI1IDUsLTUgMCwtMi43NSAtMi4yNSwtNSAtNSwtNSB6IG0gMCwyIGMgMS42Njc5NjksMCAzLDEuMzMyMDMxIDMsMyAwLDEuNjY3OTY5IC0xLjMzMjAzMSwzIC0zLDMgLTEuNjY3OTY5LDAgLTMsLTEuMzMyMDMxIC0zLC0zIDAsLTEuNjY3OTY5IDEuMzMyMDMxLC0zIDMsLTMgeiIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogPC9nPgo8L3N2Zz4K';
		me._einstellungen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Einstellungen";
		el.ggDx=-107;
		el.ggDy=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._einstellungen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._einstellungen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._einstellungen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._einstellungen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._einstellungen.style[domTransition]='opacity 1300ms ease 0ms';
				if (me._einstellungen.ggCurrentLogicStateAlpha == 0) {
					me._einstellungen.style.visibility=me._einstellungen.ggVisible?'inherit':'hidden';
					me._einstellungen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._einstellungen.style.opacity == 0.0) { me._einstellungen.style.visibility="hidden"; } }, 1305);
					me._einstellungen.style.opacity=0;
				}
			}
		}
		me._einstellungen.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._einstellungen.onmouseover=function (e) {
			me._einstellungen__img.style.visibility='hidden';
			me._einstellungen__imgo.style.visibility='inherit';
		}
		me._einstellungen.onmouseout=function (e) {
			me._einstellungen__img.style.visibility='inherit';
			me._einstellungen__imgo.style.visibility='hidden';
		}
		me._einstellungen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._einstellungen);
		el=me._linkoffnen=document.createElement('div');
		els=me._linkoffnen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSI3NC4zNzk0NzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPSJJbmZvLnN2ZyIgdmlld0JveD0iMCAwIDc0LjM3OTQ4IDY0LjQxNDUyMiIgaWQ9InN2ZzIiIHhtbG5zOnN2Zz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp6b29tPSI1LjE4MTM1MzUiIG9i'+
			'amVjdHRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGJvcmRlcm9wYWNpdHk9IjEiIGd1aWRldG9sZXJhbmNlPSIxMCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6Y3g9Ii00LjM3NzkwNDQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBncmlkdG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIHBhZ2Vjb2'+
			'xvcj0iI2ZmZmZmZiIgc2hvd2dyaWQ9ImZhbHNlIi8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRo'+
			'MTQzIj4KICAgPHJlY3QgaGVpZ2h0PSIyMDMuMTQ0MjciIHdpZHRoPSIyMDMuMTQ0MjciIHg9Ii03MTUuMTU2OCIgaWQ9InJlY3QxNDUiIHk9IjY3LjgwNDk5MyIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggaWQ9InBhdGg0NTU0IiBkPSJtIC0xMjguNzMwODMsLTguMTUzMzkwOSAyMy43Mzg5NiwtMjMuNzM4OTcyMSAtMTkuMTA2OTgsLTguNDkxOTg4IC0xOC41Mjc5OCw3Lj'+
			'MzMzk5MSAxMy44OTYsMjQuODk2OTY5MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IGhlaWdodD0iMjcuOTU1MDIxIiB3aWR0aD0iMjguMDk4Mzc5IiB4PSItMTEwLjk0MzkiIGlkPSJyZWN0NDcwMSIgcnk9IjIuODk0OTk2NCIgeT0i'+
			'LTI3LjQxNjUwNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMDY3MzcwNztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIGlkPSJwYXRoNDkzOSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNz'+
			'g5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMzQ2NjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIGN4PSItODguNTc5NDc1IiByPSIy'+
			'NC4yODM1NzkiIGN5PSItNTQuMTM0Nzg5IiBpZD0iY2lyY2xlNDkxNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MS4zMzg1Mjk5NCIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbD'+
			'ojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDg5NCIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VP'+
			'blVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODk5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSBjeD0iLTUyLjY0ODIyOCIgcj0iMTAuOTI5OTA3IiBjeT0iLTI4LjAwMTM4NyIgaWQ9ImNpcmNsZTQ4OTUiIH'+
			'N0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIGN4PSItNTIuNjQ4MjI4IiByPSIxMC45Mjk5MDciIGN5PSItMjguMDAxMzg3IiBpZD0iY2lyY2xlNDg5MSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQ'+
			'YXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODg3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2'+
			'lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTIiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDkzMCIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0'+
			'eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMS0wIiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0MTk3NyIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggaWQ9InBhdGgyMDM4IiBkPSJtIDI1Ny45ODMwMywxMzcuNDU2MjUgLTQuOTAxOTQsOC40OTA0MSBoIC05LjgwMzg3IGwgLTQuOTAxOTQsLTguNDkwNDEgNC45MDE5NCwt'+
			'OC40OTA0IGggOS44MDM4NyB6IiBzdHlsZT0iZmlsbDojMDBhYTg4O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjk4Mzc4OTkyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS43OTI4MTgxLC0zLjEwNTI1MTksMy4xMDUyNTE5LDEuNzkyODE4MSwtODM0LjU4NjYzLDU1Ni40MzE5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjI4LjI3MDQ3NyIgaWQ9InRleHQ4NDgiIHk9IjUwLjg0MDA2NSIgc3R5bGU9ImZvbn'+
			'Qtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1My4zMzMzMzIwNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q29uc3RhbnRpYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidDb25zdGFudGlhLCBCb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1z'+
			'cGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIj4KICA8dHNwYW4gc29kaXBvZGk6cm9sZT0ibGluZSIgaWQ9InRzcGFuODQ2IiB4PSIyOC4yNzA0NzciIHk9IjUwLjg0MDA2NSI+aTwvdHNwYW4+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._linkoffnen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkoffnen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHdpZHRoPSI3NC4zNzk0NzgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPSJJbmZvMi5zdmciIHZpZXdCb3g9IjAgMCA3NC4zNzk0OCA2NC40MTQ1MjIiIGlkPSJzdmcyIiB4bWxuczpzdm'+
			'c9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOndpbmRvdy14PSItOSIgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBv'+
			'YmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTUuMTQ1ODQ3IiBib3JkZXJvcGFjaXR5PSIxIiBndWlkZXRvbGVyYW5jZT0iMTAiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOmN4PSItNC4zNzc5MDQ0IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXc5IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY2'+
			'9sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IGhlaWdodD0iMjAzLjE0NDI3IiB3aWR0aD0iMjAzLjE0NDI3IiB4PSItNzE1LjE1NjgiIGlkPSJyZWN0MTQ1IiB5PSI2Ny44MDQ5OTMiIHN0eWxlPSJzdHJva2Utd2lkdGg6MS43MTIxMjg2NCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjMxNTMxNSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIGlkPSJwYXRoNDU1NCIgZD0ibSAtMTI4LjczMDgzLC04LjE1MzM5MDkgMjMuNzM4OTYsLTIzLjczODk3MjEgLTE5LjEwNjk4LC04LjQ5MTk4OCAtMTguNTI3OTgsNy'+
			'4zMzM5OTEgMTMuODk2LDI0Ljg5Njk2OTEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCBoZWlnaHQ9IjI3Ljk1NTAyMSIgd2lkdGg9IjI4LjA5ODM3OSIgeD0iLTExMC45NDM5IiBpZD0icmVjdDQ3MDEiIHJ5PSIyLjg5NDk5NjQiIHk9'+
			'Ii0yNy40MTY1MDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzA2NzM3MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBpZD0icGF0aDQ5MzkiIGQ9Im0gLTEwNi42MDcyNiwtMTMuODA1NTQ0IDMuMzEwMjksMi41MDI5MDUgOS41MjcxODcsMi41MDI5MDU1IDEuOTM3NzM0LDMuNzEzOTg4MSAtMTUuMT'+
			'c4OTExLDIuNzQ1MTIxNyAtOS4yODQ5NywtNi4yOTc2MzIxIHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBjeD0iLTg4LjU3OTQ3NSIgcj0i'+
			'MjQuMjgzNTc5IiBjeT0iLTU0LjEzNDc4OSIgaWQ9ImNpcmNsZTQ5MTUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxIiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbG'+
			'w6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q4OTQiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIGN4PSItNTIuNjQ4MjI4IiByPSIxMC45Mjk5MDciIGN5PSItMjguMDAxMzg3IiBpZD0iY2lyY2xlNDg5OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgY3g9Ii01Mi42NDgyMjgiIHI9IjEwLjkyOTkwNyIgY3k9Ii0yOC4wMDEzODciIGlkPSJjaXJjbGU0ODk1Ii'+
			'BzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBjeD0iLTUyLjY0ODIyOCIgcj0iMTAuOTI5OTA3IiBjeT0iLTI4LjAwMTM4NyIgaWQ9ImNpcmNsZTQ4OTEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIGN4PSItNTIuNjQ4MjI4IiByPSIxMC45Mjk5MDciIGN5PSItMjguMDAxMzg3IiBpZD0iY2lyY2xlNDg4NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIH'+
			'dpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMS0yIiB4PSItMzQuNTQ2OTU5IiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q5MzAiIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBz'+
			'dHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEtMCIgeD0iLTM0LjU0Njk1OSIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDE5NzciIHg9Ii0zNC41NDY5NTkiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIGlkPSJwYXRoMjAzOCIgZD0ibSAyNTcuOTgzMDMsMTM3LjQ1NjI1IC00LjkwMTk0LDguNDkwNDEgaCAtOS44MDM4NyBsIC00LjkwMTk0LC04LjQ5MDQxIDQuOTAxOTQs'+
			'LTguNDkwNCBoIDkuODAzODcgeiIgc3R5bGU9ImZpbGw6IzAwZmZjYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45ODM3ODk5MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIyOC4yNzA0NzciIGlkPSJ0ZXh0ODQ4IiB5PSI1MC44NDAwNjUiIHN0eWxlPSJmb2'+
			'50LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NTMuMzMzMzMyMDZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNvbnN0YW50aWE7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ29uc3RhbnRpYSwgQm9sZCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQt'+
			'c3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSI+CiAgPHRzcGFuIHNvZGlwb2RpOnJvbGU9ImxpbmUiIGlkPSJ0c3Bhbjg0NiIgeD0iMjguMjcwNDc3IiB5PSI1MC44NDAwNjUiPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
		me._linkoffnen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="LinkOffnen";
		el.ggDx=-107;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkoffnen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._linkoffnen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Einstellungen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._linkoffnen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._linkoffnen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._linkoffnen.style[domTransition]='opacity 1500ms ease 0ms';
				if (me._linkoffnen.ggCurrentLogicStateVisible == 0) {
					me._linkoffnen.style.visibility="hidden";
					me._linkoffnen.ggVisible=false;
				}
				else {
					me._linkoffnen.style.visibility=(Number(me._linkoffnen.style.opacity)>0||!me._linkoffnen.style.opacity)?'inherit':'hidden';
					me._linkoffnen.ggVisible=true;
				}
			}
		}
		me._linkoffnen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._linkoffnen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._linkoffnen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._linkoffnen.style[domTransition]='opacity 1500ms ease 0ms';
				if (me._linkoffnen.ggCurrentLogicStateAlpha == 0) {
					me._linkoffnen.style.visibility=me._linkoffnen.ggVisible?'inherit':'hidden';
					me._linkoffnen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._linkoffnen.style.opacity == 0.0) { me._linkoffnen.style.visibility="hidden"; } }, 1505);
					me._linkoffnen.style.opacity=0;
				}
			}
		}
		me._linkoffnen.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			player.openUrl("https:\/\/nature40.github.io\/SENSO-Trail-App\/","");
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._linkoffnen.onmouseover=function (e) {
			me._linkoffnen__img.style.visibility='hidden';
			me._linkoffnen__imgo.style.visibility='inherit';
		}
		me._linkoffnen.onmouseout=function (e) {
			me._linkoffnen__img.style.visibility='inherit';
			me._linkoffnen__imgo.style.visibility='hidden';
		}
		me._linkoffnen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._linkoffnen);
		el=me._karte=document.createElement('div');
		els=me._karte__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._karte__img.setAttribute('src',basePath + 'images/karte.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._karte__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._karte__imgo.setAttribute('src',basePath + 'images/karte__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Karte";
		el.ggDx=109;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._karte.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._karte.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Einstellungen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._karte.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._karte.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._karte.style[domTransition]='opacity 200ms ease 0ms';
				if (me._karte.ggCurrentLogicStateVisible == 0) {
					me._karte.style.visibility="hidden";
					me._karte.ggVisible=false;
				}
				else {
					me._karte.style.visibility=(Number(me._karte.style.opacity)>0||!me._karte.style.opacity)?'inherit':'hidden';
					me._karte.ggVisible=true;
				}
			}
		}
		me._karte.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._karte.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._karte.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._karte.style[domTransition]='opacity 200ms ease 0ms';
				if (me._karte.ggCurrentLogicStateAlpha == 0) {
					me._karte.style.visibility=me._karte.ggVisible?'inherit':'hidden';
					me._karte.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._karte.style.opacity == 0.0) { me._karte.style.visibility="hidden"; } }, 205);
					me._karte.style.opacity=0;
				}
			}
		}
		me._karte.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._karteordner.style[domTransition]='none';
			me._karteordner.style.visibility=(Number(me._karteordner.style.opacity)>0||!me._karteordner.style.opacity)?'inherit':'hidden';
			me._karteordner.ggVisible=true;
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility='hidden';
			me._sensiordner.ggVisible=false;
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._karte.onmouseover=function (e) {
			me._karte__img.style.visibility='hidden';
			me._karte__imgo.style.visibility='inherit';
		}
		me._karte.onmouseout=function (e) {
			me._karte__img.style.visibility='inherit';
			me._karte__imgo.style.visibility='hidden';
		}
		me._karte.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._karte);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Fullscreen";
		el.ggDx=109;
		el.ggDy=149;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Einstellungen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style[domTransition]='opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
			}
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style[domTransition]='opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
			}
		}
		me._fullscreen.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._daten.style[domTransition]='none';
			me._daten.style.visibility=(Number(me._daten.style.opacity)>0||!me._daten.style.opacity)?'inherit':'hidden';
			me._daten.ggVisible=true;
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._fullscreen);
		el=me._forschungsdaten_anzeigen=document.createElement('div');
		els=me._forschungsdaten_anzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungsdaten_anzeigen__img.setAttribute('src',basePath + 'images/forschungsdaten_anzeigen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._forschungsdaten_anzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._forschungsdaten_anzeigen__imgo.setAttribute('src',basePath + 'images/forschungsdaten_anzeigen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Forschungsdaten anzeigen";
		el.ggDx=1;
		el.ggDy=-39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsdaten_anzeigen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._forschungsdaten_anzeigen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Einstellungen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._forschungsdaten_anzeigen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._forschungsdaten_anzeigen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._forschungsdaten_anzeigen.style[domTransition]='opacity 100ms ease 0ms';
				if (me._forschungsdaten_anzeigen.ggCurrentLogicStateVisible == 0) {
					me._forschungsdaten_anzeigen.style.visibility="hidden";
					me._forschungsdaten_anzeigen.ggVisible=false;
				}
				else {
					me._forschungsdaten_anzeigen.style.visibility=(Number(me._forschungsdaten_anzeigen.style.opacity)>0||!me._forschungsdaten_anzeigen.style.opacity)?'inherit':'hidden';
					me._forschungsdaten_anzeigen.ggVisible=true;
				}
			}
		}
		me._forschungsdaten_anzeigen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('SENSI') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._forschungsdaten_anzeigen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._forschungsdaten_anzeigen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._forschungsdaten_anzeigen.style[domTransition]='opacity 100ms ease 0ms';
				if (me._forschungsdaten_anzeigen.ggCurrentLogicStateAlpha == 0) {
					me._forschungsdaten_anzeigen.style.visibility=me._forschungsdaten_anzeigen.ggVisible?'inherit':'hidden';
					me._forschungsdaten_anzeigen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._forschungsdaten_anzeigen.style.opacity == 0.0) { me._forschungsdaten_anzeigen.style.visibility="hidden"; } }, 105);
					me._forschungsdaten_anzeigen.style.opacity=0;
				}
			}
		}
		me._forschungsdaten_anzeigen.onclick=function (e) {
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility='hidden';
			me._sensiordner.ggVisible=false;
			me._forschungssystemordner.style[domTransition]='none';
			me._forschungssystemordner.style.visibility=(Number(me._forschungssystemordner.style.opacity)>0||!me._forschungssystemordner.style.opacity)?'inherit':'hidden';
			me._forschungssystemordner.ggVisible=true;
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._forschungsdaten_anzeigen.onmouseover=function (e) {
			me._forschungsdaten_anzeigen__img.style.visibility='hidden';
			me._forschungsdaten_anzeigen__imgo.style.visibility='inherit';
		}
		me._forschungsdaten_anzeigen.onmouseout=function (e) {
			me._forschungsdaten_anzeigen__img.style.visibility='inherit';
			me._forschungsdaten_anzeigen__imgo.style.visibility='hidden';
		}
		me._forschungsdaten_anzeigen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensiordner.appendChild(me._forschungsdaten_anzeigen);
		me.divSkin.appendChild(me._sensiordner);
		el=me._datenordner=document.createElement('div');
		el.ggId="DatenOrdner";
		el.ggDx=23;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 418px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 342px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._datenordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._datenordner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._daten=document.createElement('div');
		els=me._daten__img=document.createElement('img');
		els.className='ggskin ggskin_daten';
		hs=basePath + 'images/daten.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Daten";
		el.ggDx=-22;
		el.ggDy=-55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 528px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._daten.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._daten.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._datenordner.appendChild(me._daten);
		el=me._datenschlieen=document.createElement('div');
		els=me._datenschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._datenschlieen__img.setAttribute('src',basePath + 'images/datenschlieen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._datenschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._datenschlieen__imgo.setAttribute('src',basePath + 'images/datenschlieen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Datenschlie\xdfen";
		el.ggDx=122;
		el.ggDy=181;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._datenschlieen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datenschlieen.onclick=function (e) {
			me._datenordner.style[domTransition]='none';
			me._datenordner.style.visibility='hidden';
			me._datenordner.ggVisible=false;
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility=(Number(me._sensiordner.style.opacity)>0||!me._sensiordner.style.opacity)?'inherit':'hidden';
			me._sensiordner.ggVisible=true;
			player.setVariableValue('SENSI', false);
		}
		me._datenschlieen.onmouseover=function (e) {
			me._datenschlieen__img.style.visibility='hidden';
			me._datenschlieen__imgo.style.visibility='inherit';
		}
		me._datenschlieen.onmouseout=function (e) {
			me._datenschlieen__img.style.visibility='inherit';
			me._datenschlieen__imgo.style.visibility='hidden';
		}
		me._datenschlieen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._datenordner.appendChild(me._datenschlieen);
		me.divSkin.appendChild(me._datenordner);
		el=me._forschungssystemordner=document.createElement('div');
		el.ggId="ForschungssystemOrdner";
		el.ggDx=-1;
		el.ggDy=67;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungssystemordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._forschungssystemordner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._station0=document.createElement('div');
		els=me._station0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station0__img.setAttribute('src',basePath + 'images/station0.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station0__imgo.setAttribute('src',basePath + 'images/station0__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station0";
		el.ggDx=-1;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station0.onmouseover=function (e) {
			me._station0__img.style.visibility='hidden';
			me._station0__imgo.style.visibility='inherit';
		}
		me._station0.onmouseout=function (e) {
			me._station0__img.style.visibility='inherit';
			me._station0__imgo.style.visibility='hidden';
		}
		me._station0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station0);
		el=me._station1=document.createElement('div');
		els=me._station1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1__img.setAttribute('src',basePath + 'images/station1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1__imgo.setAttribute('src',basePath + 'images/station1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1";
		el.ggDx=-40;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('S1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._station1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._station1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._station1.style[domTransition]='opacity 0s';
				if (me._station1.ggCurrentLogicStateAlpha == 0) {
					me._station1.style.visibility=me._station1.ggVisible?'inherit':'hidden';
					me._station1.style.opacity=1;
				}
				else {
					me._station1.style.visibility=me._station1.ggVisible?'inherit':'hidden';
					me._station1.style.opacity=0.4;
				}
			}
		}
		me._station1.onmouseover=function (e) {
			me._station1__img.style.visibility='hidden';
			me._station1__imgo.style.visibility='inherit';
		}
		me._station1.onmouseout=function (e) {
			me._station1__img.style.visibility='inherit';
			me._station1__imgo.style.visibility='hidden';
		}
		me._station1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station1);
		el=me._station1up1=document.createElement('div');
		els=me._station1up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1up1__img.setAttribute('src',basePath + 'images/station1up1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1up1__imgo.setAttribute('src',basePath + 'images/station1up1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1UP1";
		el.ggDx=-79;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station1up1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('UP11') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._station1up1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._station1up1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._station1up1.style[domTransition]='opacity 0s';
				if (me._station1up1.ggCurrentLogicStateAlpha == 0) {
					me._station1up1.style.visibility=me._station1up1.ggVisible?'inherit':'hidden';
					me._station1up1.style.opacity=1;
				}
				else {
					me._station1up1.style.visibility=me._station1up1.ggVisible?'inherit':'hidden';
					me._station1up1.style.opacity=0.39999;
				}
			}
		}
		me._station1up1.onmouseover=function (e) {
			me._station1up1__img.style.visibility='hidden';
			me._station1up1__imgo.style.visibility='inherit';
		}
		me._station1up1.onmouseout=function (e) {
			me._station1up1__img.style.visibility='inherit';
			me._station1up1__imgo.style.visibility='hidden';
		}
		me._station1up1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station1up1);
		el=me._station1up2=document.createElement('div');
		els=me._station1up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1up2__img.setAttribute('src',basePath + 'images/station1up2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1up2__imgo.setAttribute('src',basePath + 'images/station1up2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1UP2";
		el.ggDx=-40;
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station1up2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('UP12') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._station1up2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._station1up2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._station1up2.style[domTransition]='opacity 0s';
				if (me._station1up2.ggCurrentLogicStateAlpha == 0) {
					me._station1up2.style.visibility=me._station1up2.ggVisible?'inherit':'hidden';
					me._station1up2.style.opacity=1;
				}
				else {
					me._station1up2.style.visibility=me._station1up2.ggVisible?'inherit':'hidden';
					me._station1up2.style.opacity=0.4;
				}
			}
		}
		me._station1up2.onmouseover=function (e) {
			me._station1up2__img.style.visibility='hidden';
			me._station1up2__imgo.style.visibility='inherit';
		}
		me._station1up2.onmouseout=function (e) {
			me._station1up2__img.style.visibility='inherit';
			me._station1up2__imgo.style.visibility='hidden';
		}
		me._station1up2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station1up2);
		el=me._station1q=document.createElement('div');
		els=me._station1q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1q__img.setAttribute('src',basePath + 'images/station1q.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1q__imgo.setAttribute('src',basePath + 'images/station1q__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1Q";
		el.ggDx=-79;
		el.ggDy=-43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station1q.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Q1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._station1q.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._station1q.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._station1q.style[domTransition]='opacity 0s';
				if (me._station1q.ggCurrentLogicStateAlpha == 0) {
					me._station1q.style.visibility=me._station1q.ggVisible?'inherit':'hidden';
					me._station1q.style.opacity=1;
				}
				else {
					me._station1q.style.visibility=me._station1q.ggVisible?'inherit':'hidden';
					me._station1q.style.opacity=0.39999;
				}
			}
		}
		me._station1q.onmouseover=function (e) {
			me._station1q__img.style.visibility='hidden';
			me._station1q__imgo.style.visibility='inherit';
		}
		me._station1q.onmouseout=function (e) {
			me._station1q__img.style.visibility='inherit';
			me._station1q__imgo.style.visibility='hidden';
		}
		me._station1q.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station1q);
		el=me._station2=document.createElement('div');
		els=me._station2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2__img.setAttribute('src',basePath + 'images/station2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2__imgo.setAttribute('src',basePath + 'images/station2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2";
		el.ggDx=39;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station2.onmouseover=function (e) {
			me._station2__img.style.visibility='hidden';
			me._station2__imgo.style.visibility='inherit';
		}
		me._station2.onmouseout=function (e) {
			me._station2__img.style.visibility='inherit';
			me._station2__imgo.style.visibility='hidden';
		}
		me._station2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station2);
		el=me._station2up1=document.createElement('div');
		els=me._station2up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2up1__img.setAttribute('src',basePath + 'images/station2up1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2up1__imgo.setAttribute('src',basePath + 'images/station2up1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2UP1";
		el.ggDx=38;
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station2up1.onmouseover=function (e) {
			me._station2up1__img.style.visibility='hidden';
			me._station2up1__imgo.style.visibility='inherit';
		}
		me._station2up1.onmouseout=function (e) {
			me._station2up1__img.style.visibility='inherit';
			me._station2up1__imgo.style.visibility='hidden';
		}
		me._station2up1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station2up1);
		el=me._station2up2=document.createElement('div');
		els=me._station2up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2up2__img.setAttribute('src',basePath + 'images/station2up2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2up2__imgo.setAttribute('src',basePath + 'images/station2up2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2UP2";
		el.ggDx=77;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station2up2.onmouseover=function (e) {
			me._station2up2__img.style.visibility='hidden';
			me._station2up2__imgo.style.visibility='inherit';
		}
		me._station2up2.onmouseout=function (e) {
			me._station2up2__img.style.visibility='inherit';
			me._station2up2__imgo.style.visibility='hidden';
		}
		me._station2up2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station2up2);
		el=me._station2q=document.createElement('div');
		els=me._station2q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2q__img.setAttribute('src',basePath + 'images/station2q.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2q__imgo.setAttribute('src',basePath + 'images/station2q__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2Q";
		el.ggDx=78;
		el.ggDy=-43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station2q.onmouseover=function (e) {
			me._station2q__img.style.visibility='hidden';
			me._station2q__imgo.style.visibility='inherit';
		}
		me._station2q.onmouseout=function (e) {
			me._station2q__img.style.visibility='inherit';
			me._station2q__imgo.style.visibility='hidden';
		}
		me._station2q.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station2q);
		el=me._station3=document.createElement('div');
		els=me._station3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3__img.setAttribute('src',basePath + 'images/station3.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3__imgo.setAttribute('src',basePath + 'images/station3__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3";
		el.ggDx=-40;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station3.onmouseover=function (e) {
			me._station3__img.style.visibility='hidden';
			me._station3__imgo.style.visibility='inherit';
		}
		me._station3.onmouseout=function (e) {
			me._station3__img.style.visibility='inherit';
			me._station3__imgo.style.visibility='hidden';
		}
		me._station3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station3);
		el=me._station3up1=document.createElement('div');
		els=me._station3up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3up1__img.setAttribute('src',basePath + 'images/station3up1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3up1__imgo.setAttribute('src',basePath + 'images/station3up1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3UP1";
		el.ggDx=-80;
		el.ggDy=47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station3up1.onmouseover=function (e) {
			me._station3up1__img.style.visibility='hidden';
			me._station3up1__imgo.style.visibility='inherit';
		}
		me._station3up1.onmouseout=function (e) {
			me._station3up1__img.style.visibility='inherit';
			me._station3up1__imgo.style.visibility='hidden';
		}
		me._station3up1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station3up1);
		el=me._station3up2=document.createElement('div');
		els=me._station3up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3up2__img.setAttribute('src',basePath + 'images/station3up2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3up2__imgo.setAttribute('src',basePath + 'images/station3up2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3UP2";
		el.ggDx=-79;
		el.ggDy=92;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station3up2.onmouseover=function (e) {
			me._station3up2__img.style.visibility='hidden';
			me._station3up2__imgo.style.visibility='inherit';
		}
		me._station3up2.onmouseout=function (e) {
			me._station3up2__img.style.visibility='inherit';
			me._station3up2__imgo.style.visibility='hidden';
		}
		me._station3up2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station3up2);
		el=me._station3q=document.createElement('div');
		els=me._station3q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3q__img.setAttribute('src',basePath + 'images/station3q.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3q__imgo.setAttribute('src',basePath + 'images/station3q__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3Q";
		el.ggDx=-118;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station3q.onmouseover=function (e) {
			me._station3q__img.style.visibility='hidden';
			me._station3q__imgo.style.visibility='inherit';
		}
		me._station3q.onmouseout=function (e) {
			me._station3q__img.style.visibility='inherit';
			me._station3q__imgo.style.visibility='hidden';
		}
		me._station3q.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station3q);
		el=me._station4=document.createElement('div');
		els=me._station4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4__img.setAttribute('src',basePath + 'images/station4.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4__imgo.setAttribute('src',basePath + 'images/station4__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4";
		el.ggDx=38;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station4.onmouseover=function (e) {
			me._station4__img.style.visibility='hidden';
			me._station4__imgo.style.visibility='inherit';
		}
		me._station4.onmouseout=function (e) {
			me._station4__img.style.visibility='inherit';
			me._station4__imgo.style.visibility='hidden';
		}
		me._station4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station4);
		el=me._station4up1=document.createElement('div');
		els=me._station4up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4up1__img.setAttribute('src',basePath + 'images/station4up1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4up1__imgo.setAttribute('src',basePath + 'images/station4up1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4UP1";
		el.ggDx=77;
		el.ggDy=47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station4up1.onmouseover=function (e) {
			me._station4up1__img.style.visibility='hidden';
			me._station4up1__imgo.style.visibility='inherit';
		}
		me._station4up1.onmouseout=function (e) {
			me._station4up1__img.style.visibility='inherit';
			me._station4up1__imgo.style.visibility='hidden';
		}
		me._station4up1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station4up1);
		el=me._station4up2=document.createElement('div');
		els=me._station4up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4up2__img.setAttribute('src',basePath + 'images/station4up2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4up2__imgo.setAttribute('src',basePath + 'images/station4up2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4UP2";
		el.ggDx=77;
		el.ggDy=92;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station4up2.onmouseover=function (e) {
			me._station4up2__img.style.visibility='hidden';
			me._station4up2__imgo.style.visibility='inherit';
		}
		me._station4up2.onmouseout=function (e) {
			me._station4up2__img.style.visibility='inherit';
			me._station4up2__imgo.style.visibility='hidden';
		}
		me._station4up2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station4up2);
		el=me._station4q=document.createElement('div');
		els=me._station4q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4q__img.setAttribute('src',basePath + 'images/station4q.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4q__imgo.setAttribute('src',basePath + 'images/station4q__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4Q";
		el.ggDx=116;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station4q.onmouseover=function (e) {
			me._station4q__img.style.visibility='hidden';
			me._station4q__imgo.style.visibility='inherit';
		}
		me._station4q.onmouseout=function (e) {
			me._station4q__img.style.visibility='inherit';
			me._station4q__imgo.style.visibility='hidden';
		}
		me._station4q.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station4q);
		el=me._station5=document.createElement('div');
		els=me._station5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5__img.setAttribute('src',basePath + 'images/station5.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5__imgo.setAttribute('src',basePath + 'images/station5__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5";
		el.ggDx=-1;
		el.ggDy=92;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station5.onmouseover=function (e) {
			me._station5__img.style.visibility='hidden';
			me._station5__imgo.style.visibility='inherit';
		}
		me._station5.onmouseout=function (e) {
			me._station5__img.style.visibility='inherit';
			me._station5__imgo.style.visibility='hidden';
		}
		me._station5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station5);
		el=me._station5up1=document.createElement('div');
		els=me._station5up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5up1__img.setAttribute('src',basePath + 'images/station5up1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5up1__imgo.setAttribute('src',basePath + 'images/station5up1__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5UP1";
		el.ggDx=-40;
		el.ggDy=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station5up1.onmouseover=function (e) {
			me._station5up1__img.style.visibility='hidden';
			me._station5up1__imgo.style.visibility='inherit';
		}
		me._station5up1.onmouseout=function (e) {
			me._station5up1__img.style.visibility='inherit';
			me._station5up1__imgo.style.visibility='hidden';
		}
		me._station5up1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station5up1);
		el=me._station5up2=document.createElement('div');
		els=me._station5up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5up2__img.setAttribute('src',basePath + 'images/station5up2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5up2__imgo.setAttribute('src',basePath + 'images/station5up2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5UP2";
		el.ggDx=38;
		el.ggDy=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5up2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station5up2.onmouseover=function (e) {
			me._station5up2__img.style.visibility='hidden';
			me._station5up2__imgo.style.visibility='inherit';
		}
		me._station5up2.onmouseout=function (e) {
			me._station5up2__img.style.visibility='inherit';
			me._station5up2__imgo.style.visibility='hidden';
		}
		me._station5up2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station5up2);
		el=me._station5q=document.createElement('div');
		els=me._station5q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5q__img.setAttribute('src',basePath + 'images/station5q.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5q__imgo.setAttribute('src',basePath + 'images/station5q__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5Q";
		el.ggDx=-1;
		el.ggDy=137;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5q.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station5q.onmouseover=function (e) {
			me._station5q__img.style.visibility='hidden';
			me._station5q__imgo.style.visibility='inherit';
			me.elementMouseOver['station5q']=true;
		}
		me._station5q.onmouseout=function (e) {
			me._station5q__img.style.visibility='inherit';
			me._station5q__imgo.style.visibility='hidden';
			me.elementMouseOver['station5q']=false;
		}
		me._station5q.ontouchend=function (e) {
			me.elementMouseOver['station5q']=false;
		}
		me._station5q.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station5q);
		el=me._station6=document.createElement('div');
		els=me._station6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station6__img.setAttribute('src',basePath + 'images/station6.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station6__imgo.setAttribute('src',basePath + 'images/station6__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station6";
		el.ggDx=-1;
		el.ggDy=47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station6.onmouseover=function (e) {
			me._station6__img.style.visibility='hidden';
			me._station6__imgo.style.visibility='inherit';
		}
		me._station6.onmouseout=function (e) {
			me._station6__img.style.visibility='inherit';
			me._station6__imgo.style.visibility='hidden';
		}
		me._station6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._station6);
		el=me._fsschlieen=document.createElement('div');
		els=me._fsschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._fsschlieen__img.setAttribute('src',basePath + 'images/fsschlieen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fsschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._fsschlieen__imgo.setAttribute('src',basePath + 'images/fsschlieen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="FSschlie\xdfen";
		el.ggDx=135;
		el.ggDy=-325;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fsschlieen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fsschlieen.onclick=function (e) {
			me._forschungssystemordner.style[domTransition]='none';
			me._forschungssystemordner.style.visibility='hidden';
			me._forschungssystemordner.ggVisible=false;
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility=(Number(me._sensiordner.style.opacity)>0||!me._sensiordner.style.opacity)?'inherit':'hidden';
			me._sensiordner.ggVisible=true;
			player.setVariableValue('SENSI', false);
		}
		me._fsschlieen.onmouseover=function (e) {
			me._fsschlieen__img.style.visibility='hidden';
			me._fsschlieen__imgo.style.visibility='inherit';
		}
		me._fsschlieen.onmouseout=function (e) {
			me._fsschlieen__img.style.visibility='inherit';
			me._fsschlieen__imgo.style.visibility='hidden';
		}
		me._fsschlieen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._forschungssystemordner.appendChild(me._fsschlieen);
		me.divSkin.appendChild(me._forschungssystemordner);
		el=me._karteordner=document.createElement('div');
		el.ggId="KarteOrdner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 600px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._karteordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._karteordner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._grundkarte=document.createElement('div');
		els=me._grundkarte__img=document.createElement('img');
		els.className='ggskin ggskin_grundkarte';
		hs=basePath + 'images/grundkarte.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Grundkarte";
		el.ggDx=1;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 549px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._grundkarte.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._grundkarte.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._karteordner.appendChild(me._grundkarte);
		el=me._transekten=document.createElement('div');
		els=me._transekten__img=document.createElement('img');
		els.className='ggskin ggskin_transekten';
		hs=basePath + 'images/transekten.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+Transekten";
		el.ggDx=1;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 549px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._transekten.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._transekten.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._karteordner.appendChild(me._transekten);
		el=me._karteschlieen=document.createElement('div');
		els=me._karteschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._karteschlieen__img.setAttribute('src',basePath + 'images/karteschlieen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._karteschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._karteschlieen__imgo.setAttribute('src',basePath + 'images/karteschlieen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Karteschlie\xdfen";
		el.ggDx=144;
		el.ggDy=232;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._karteschlieen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._karteschlieen.onclick=function (e) {
			me._karteordner.style[domTransition]='none';
			me._karteordner.style.visibility='hidden';
			me._karteordner.ggVisible=false;
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility=(Number(me._sensiordner.style.opacity)>0||!me._sensiordner.style.opacity)?'inherit':'hidden';
			me._sensiordner.ggVisible=true;
			player.setVariableValue('SENSI', false);
		}
		me._karteschlieen.onmouseover=function (e) {
			me._karteschlieen__img.style.visibility='hidden';
			me._karteschlieen__imgo.style.visibility='inherit';
		}
		me._karteschlieen.onmouseout=function (e) {
			me._karteschlieen__img.style.visibility='inherit';
			me._karteschlieen__imgo.style.visibility='hidden';
		}
		me._karteschlieen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._karteordner.appendChild(me._karteschlieen);
		el=me._transektenzeigen=document.createElement('div');
		els=me._transektenzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._transektenzeigen__img.setAttribute('src',basePath + 'images/transektenzeigen.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._transektenzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._transektenzeigen__imgo.setAttribute('src',basePath + 'images/transektenzeigen__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TransektenZeigen";
		el.ggDx=-6;
		el.ggDy=211;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._transektenzeigen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._transektenzeigen.onclick=function (e) {
			me._transekten.style[domTransition]='none';
			me._transekten.style.visibility=(Number(me._transekten.style.opacity)>0||!me._transekten.style.opacity)?'inherit':'hidden';
			me._transekten.ggVisible=true;
			me._transektenzeigen2.style[domTransition]='none';
			me._transektenzeigen2.style.visibility=(Number(me._transektenzeigen2.style.opacity)>0||!me._transektenzeigen2.style.opacity)?'inherit':'hidden';
			me._transektenzeigen2.ggVisible=true;
		}
		me._transektenzeigen.onmouseover=function (e) {
			me._transektenzeigen__img.style.visibility='hidden';
			me._transektenzeigen__imgo.style.visibility='inherit';
		}
		me._transektenzeigen.onmouseout=function (e) {
			me._transektenzeigen__img.style.visibility='inherit';
			me._transektenzeigen__imgo.style.visibility='hidden';
		}
		me._transektenzeigen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._karteordner.appendChild(me._transektenzeigen);
		el=me._transektenzeigen2=document.createElement('div');
		els=me._transektenzeigen2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._transektenzeigen2__img.setAttribute('src',basePath + 'images/transektenzeigen2.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._transektenzeigen2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._transektenzeigen2__imgo.setAttribute('src',basePath + 'images/transektenzeigen2__o.png');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TransektenZeigen2";
		el.ggDx=-6;
		el.ggDy=211;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._transektenzeigen2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._transektenzeigen2.onclick=function (e) {
			me._transekten.style[domTransition]='none';
			me._transekten.style.visibility='hidden';
			me._transekten.ggVisible=false;
			me._transektenzeigen2.style[domTransition]='none';
			me._transektenzeigen2.style.visibility='hidden';
			me._transektenzeigen2.ggVisible=false;
		}
		me._transektenzeigen2.onmouseover=function (e) {
			me._transektenzeigen2__img.style.visibility='hidden';
			me._transektenzeigen2__imgo.style.visibility='inherit';
		}
		me._transektenzeigen2.onmouseout=function (e) {
			me._transektenzeigen2__img.style.visibility='inherit';
			me._transektenzeigen2__imgo.style.visibility='hidden';
		}
		me._transektenzeigen2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._karteordner.appendChild(me._transektenzeigen2);
		me.divSkin.appendChild(me._karteordner);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 589px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._container_1);
		el=me._statusleisteordner=document.createElement('div');
		el.ggId="StatusleisteOrdner";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 169px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._statusleisteordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._statusleisteordner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._statusleiste=document.createElement('div');
		els=me._statusleiste__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._statusleiste__img.setAttribute('src',basePath + 'images/statusleiste.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Statusleiste";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._statusleiste.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._statusleiste.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._statusleisteordner.appendChild(me._statusleiste);
		el=me._forschungspunktebutton=document.createElement('div');
		els=me._forschungspunktebutton__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungspunktebutton__img.setAttribute('src',basePath + 'images/forschungspunktebutton.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ForschungspunkteButton";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungspunktebutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._forschungspunktebutton.onmouseover=function (e) {
			me.elementMouseOver['forschungspunktebutton']=true;
		}
		me._forschungspunktebutton.onmouseout=function (e) {
			me.elementMouseOver['forschungspunktebutton']=false;
		}
		me._forschungspunktebutton.ontouchend=function (e) {
			me.elementMouseOver['forschungspunktebutton']=false;
		}
		me._forschungspunktebutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._statusleisteordner.appendChild(me._forschungspunktebutton);
		el=me._forschungspunkte=document.createElement('div');
		els=me._forschungspunkte__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Forschungspunkte";
		el.ggDx=0;
		el.ggDy=-37;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 52px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 23px;';
		hs+='height: 52px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(53,53,53,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._forschungspunkte.ggUpdateText=function() {
			var hs=player.getVariableValue('Forschungspunkte');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._forschungspunkte.ggUpdateText();
		player.addListener('timer', function() {
			me._forschungspunkte.ggUpdateText();
		});
		el.appendChild(els);
		me._forschungspunkte.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._forschungspunkte.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._statusleisteordner.appendChild(me._forschungspunkte);
		el=me._aktuele_station=document.createElement('div');
		el.ggId="Aktuele Station";
		el.ggDx=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aktuele_station.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._aktuele_station.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._st0=document.createElement('div');
		els=me._st0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._st0__img.setAttribute('src',basePath + 'images/st0.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="st0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._st0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._st0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Station') == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._st0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._st0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._st0.style[domTransition]='opacity 0s';
				if (me._st0.ggCurrentLogicStateAlpha == 0) {
					me._st0.style.visibility=me._st0.ggVisible?'inherit':'hidden';
					me._st0.style.opacity=1;
				}
				else {
					me._st0.style.visibility="hidden";
					me._st0.style.opacity=0;
				}
			}
		}
		me._st0.onmouseover=function (e) {
			me.elementMouseOver['st0']=true;
		}
		me._st0.onmouseout=function (e) {
			me.elementMouseOver['st0']=false;
		}
		me._st0.ontouchend=function (e) {
			me.elementMouseOver['st0']=false;
		}
		me._st0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._aktuele_station.appendChild(me._st0);
		el=me._st1=document.createElement('div');
		els=me._st1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._st1__img.setAttribute('src',basePath + 'images/st1.png');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="st1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._st1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._st1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Station') == 1)) || 
				((player.getVariableValue('Station') == 11)) || 
				((player.getVariableValue('Station') == 12))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._st1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._st1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._st1.style[domTransition]='opacity 0s';
				if (me._st1.ggCurrentLogicStateAlpha == 0) {
					me._st1.style.visibility=me._st1.ggVisible?'inherit':'hidden';
					me._st1.style.opacity=1;
				}
				else {
					me._st1.style.visibility="hidden";
					me._st1.style.opacity=0;
				}
			}
		}
		me._st1.onmouseover=function (e) {
			me.elementMouseOver['st1']=true;
		}
		me._st1.onmouseout=function (e) {
			me.elementMouseOver['st1']=false;
		}
		me._st1.ontouchend=function (e) {
			me.elementMouseOver['st1']=false;
		}
		me._st1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._aktuele_station.appendChild(me._st1);
		me._statusleisteordner.appendChild(me._aktuele_station);
		el=me._vollbild=document.createElement('div');
		els=me._vollbild__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB3aWR0aD0iMTkuNjc5NTY3bW0iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPS'+
			'JWb2xsYmlsZC5zdmciIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiBpZD0ic3ZnMTg4MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgogIDxj'+
			'bGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0NTgwMS0xIiB4PSItODkuNTEzMzUxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIvPgogIDwvY2xpcFBhdGg+Ci'+
			'AgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0MTg2MyIgeD0iLTg5LjUxMzM1MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRoPgog'+
			'PC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOmN5PSIyOC4wMDcwNDEiIGJvcmRlcm9wYWNpdHk9IjEuMCIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBpbmtzY2FwZTpjdXJyZW50LWxheW'+
			'VyPSJsYXllcjEiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOmN4PSI0MS42MDkwMjMiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlkPSJiYXNlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBl'+
			'IHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSI+CiAgPHBhdGggaWQ9InBhdGg0NDI0LTAiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC04Lj'+
			'A1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiIHN0eWxlPSJmaWxsOiMwMGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDxyZWN0IGhlaWdodD0iNy44NTY3NyIgd2lkdGg9IjEwLjgzMDQ1MiIgaWQ9InJlY3QxODA4IiB4PSI0OS43NjkyOTUiIHJ5PSIwLjY3ODAyMTg1IiB5PSIxNjYuODI3NTYiIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAw'+
			'MDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiLz4KICA8cmVjdCBoZWlnaHQ9IjcuODU2NzciIHdpZHRoPSIxMC44MzA0NTIiIHg9IjQ5Ljc2OTI5NSIgaWQ9InJlY3QyNDU0IiByeT0iMC43NDQ4MzkyNSIgeT0iMTY2LjgyNzU2IiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4zMjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW'+
			'1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+CiAgPHJlY3QgaGVpZ2h0PSI1LjYyNTExNCIgd2lkdGg9IjguMDU4ODQ2NSIgeD0iNTAuMjUzNDg3IiBpZD0icmVjdDE4NTEiIHJ5PSIxLjA4MjAxMTMiIHk9IjE2OC43MDg2OCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMDkxNDA4Mjk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMjc0MjI0ODcsIDAuMjc0MjI0ODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+CiAgPGcgaWQ9'+
			'Imc1ODY0LTAiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjA1NzQ3MTg0LC0wLjA1OTYxMDQsMC4wNTk2MTA0LC0wLjA1NzQ3MTg0LDU2LjM0NzMxMywxNjcuMjM2NjYpIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIHdpZHRoPSIxNS41NTc3NDQiIGlkPSJyZWN0NTg1Ni01IiB4PSItMzkuNTEwNTU5IiByeT0iMi41MDM2MDMyIiB5PSItMTguODMzMDU5IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz4KICAgPG'+
			'cgaWQ9Imc1ODYyLTciIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggaWQ9InBhdGg1ODU4LTIiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwt'+
			'NC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggaWQ9InBhdGg1ODYwLTMiIGQ9Im0gLTQwLjMzMTU1My'+
			'w0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBzdHlsZT0iZmlsbDojNGQ0ZDRk'+
			'O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbild__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbild__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB3aWR0aD0iMTkuNjc5NTY3bW0iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPS'+
			'JWb2xsYmlsZDIuc3ZnIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgaWQ9InN2ZzE4ODEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4KICA8'+
			'Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIgeD0iLTg5LjUxMzM1MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRoPg'+
			'ogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiIHg9Ii04OS41MTMzNTEiIHJ5PSI1Ljg4OTE1MjUiIHk9IjcuODM5NzYxMyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIi8+CiAgPC9jbGlwUGF0aD4K'+
			'IDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTpjeT0iMjguMDA3MDQxIiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgaW5rc2NhcGU6Y3VycmVudC1sYX'+
			'llcj0ibGF5ZXIxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpjeD0iNDEuNjA5MDIzIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpZD0iYmFzZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlw'+
			'ZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMzQ0NzQsLTE2Mi4yMzQ0NSkiPgogIDxwYXRoIGlkPSJwYXRoNDQyNC0wIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2MiwtOC'+
			'4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBzdHlsZT0iZmlsbDojMDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjkzMzMyMTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8cmVjdCBoZWlnaHQ9IjcuODU2NzciIHdpZHRoPSIxMC44MzA0NTIiIGlkPSJyZWN0MTgwOCIgeD0iNDkuNzY5Mjk1IiByeT0iMC42NzgwMjE4NSIgeT0iMTY2LjgyNzU2IiBzdHlsZT0ib3BhY2l0eTowLjQ3MzAw'+
			'MDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+CiAgPHJlY3QgaGVpZ2h0PSI3Ljg1Njc3IiB3aWR0aD0iMTAuODMwNDUyIiB4PSI0OS43NjkyOTUiIGlkPSJyZWN0MjQ1NCIgcnk9IjAuNzQ0ODM5MjUiIHk9IjE2Ni44Mjc1NiIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMzI0OTk5OTk7c3Ryb2tlLW1pdGVybG'+
			'ltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxyZWN0IGhlaWdodD0iNS42MjUxMTQiIHdpZHRoPSI4LjA1ODg0NjUiIHg9IjUwLjI1MzQ4NyIgaWQ9InJlY3QxODUxIiByeT0iMS4wODIwMTEzIiB5PSIxNjguNzA4NjgiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjA5MTQwODI5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTowLjI3NDIyNDg3LCAwLjI3NDIyNDg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxnIGlk'+
			'PSJnNTg2NC0wIiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wNTc0NzE4NCwtMC4wNTk2MTA0LDAuMDU5NjEwNCwtMC4wNTc0NzE4NCw1Ni4zNDczMTMsMTY3LjIzNjY2KSI+CiAgIDxyZWN0IGhlaWdodD0iNTEuMTc2Nzg4IiB3aWR0aD0iMTUuNTU3NzQ0IiBpZD0icmVjdDU4NTYtNSIgeD0iLTM5LjUxMDU1OSIgcnk9IjIuNTAzNjAzMiIgeT0iLTE4LjgzMzA1OSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgID'+
			'xnIGlkPSJnNTg2Mi03IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUsLTYzLjk0MjUxNywyOS44NjI2MTkpIj4KICAgIDxwYXRoIGlkPSJwYXRoNTg1OC0yIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgs'+
			'LTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgIDxwYXRoIGlkPSJwYXRoNTg2MC0zIiBkPSJtIC00MC4zMzE1NT'+
			'MsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgc3R5bGU9ImZpbGw6IzRkNGQ0'+
			'ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._vollbild__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Vollbild";
		el.ggDx=140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vollbild.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vollbild.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Infomenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vollbild.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vollbild.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vollbild.style[domTransition]='opacity 1500ms ease 0ms';
				if (me._vollbild.ggCurrentLogicStateAlpha == 0) {
					me._vollbild.style.visibility=me._vollbild.ggVisible?'inherit':'hidden';
					me._vollbild.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vollbild.style.opacity == 0.0) { me._vollbild.style.visibility="hidden"; } }, 1505);
					me._vollbild.style.opacity=0;
				}
			}
		}
		me._vollbild.onclick=function (e) {
			player.enterFullscreen();
		}
		me._vollbild.onmouseover=function (e) {
			me._vollbild__img.style.visibility='hidden';
			me._vollbild__imgo.style.visibility='inherit';
		}
		me._vollbild.onmouseout=function (e) {
			me._vollbild__img.style.visibility='inherit';
			me._vollbild__imgo.style.visibility='hidden';
		}
		me._vollbild.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._statusleisteordner.appendChild(me._vollbild);
		el=me._vollbildaus=document.createElement('div');
		els=me._vollbildaus__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB3aWR0aD0iMTkuNjc5NTY3bW0iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPS'+
			'JWb2xsYmlsZEF1cy5zdmciIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiBpZD0ic3ZnMTg4MSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgog'+
			'IDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0NTgwMS0xIiB4PSItODkuNTEzMzUxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIvPgogIDwvY2xpcFBhdG'+
			'g+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0MTg2MyIgeD0iLTg5LjUxMzM1MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRo'+
			'PgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOmN5PSIzMi45OTk0NzkiIGJvcmRlcm9wYWNpdHk9IjEuMCIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBpbmtzY2FwZTpjdXJyZW50LW'+
			'xheWVyPSJsYXllcjEiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOmN4PSIzMi4wNzI1MjMiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlkPSJiYXNlIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0'+
			'eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSI+CiAgPHBhdGggaWQ9InBhdGg0NDI0LTAiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC'+
			'04LjA1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiIHN0eWxlPSJmaWxsOiMwMGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDxyZWN0IGhlaWdodD0iNS4yMjYwNzc2IiB3aWR0aD0iNy4yMDQwNzc3IiBpZD0icmVjdDE4MDgiIHg9IjUwLjE0NTE0NSIgcnk9IjAuNDUwOTk4OSIgeT0iMTY5LjEwNjAzIiBzdHlsZT0ib3BhY2l0eTowLjQ3'+
			'MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yMTYxNzk4MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+CiAgPHJlY3QgaGVpZ2h0PSI3LjkyNjU2MTgiIHdpZHRoPSIxMC44MzA3OTEiIHg9IjQ5Ljc2OTU0NyIgaWQ9InJlY3QxODUxIiByeT0iMC45NTY3NTYyMyIgeT0iMTY2Ljg1Nzc2IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4xMjU3OTI4NjtzdHJva2UtbWl0ZXJsaW1pdD'+
			'o0O3N0cm9rZS1kYXNoYXJyYXk6MC4zNzczNzg2LCAwLjM3NzM3ODY7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi8+CiAgPHJlY3QgaGVpZ2h0PSI1LjI1OTc2NTYiIHdpZHRoPSI3LjI1MDUxNTkiIHg9IjUwLjEyOTE0MyIgaWQ9InJlY3QyNDU0IiByeT0iMC40OTg2Mzc1IiB5PSIxNjkuMDk2NzEiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjIxNzU3MzM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiLz4KICA8'+
			'ZyBpZD0iZzU4NjQtMCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNTc0NzE4NCwwLjA1OTYxMDQsLTAuMDU5NjEwNCwwLjA1NzQ3MTg0LDYxLjUwMzg0MSwxNjkuNTQyMykiPgogICA8cmVjdCBoZWlnaHQ9IjUxLjE3Njc4OCIgd2lkdGg9IjE1LjU1Nzc0NCIgaWQ9InJlY3Q1ODU2LTUiIHg9Ii0zOS41MTA1NTkiIHJ5PSIyLjUwMzYwMzIiIHk9Ii0xOC44MzMwNTkiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPgogIC'+
			'A8ZyBpZD0iZzU4NjItNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSI+CiAgICA8cGF0aCBpZD0icGF0aDU4NTgtMiIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4'+
			'LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgICA8cGF0aCBpZD0icGF0aDU4NjAtMyIgZD0ibSAtNDAuMzMxNT'+
			'UzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIHN0eWxlPSJmaWxsOiM0ZDRk'+
			'NGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._vollbildaus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbildaus__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB3aWR0aD0iMTkuNjc5NTY3bW0iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBzb2RpcG9kaTpkb2NuYW1lPS'+
			'JWb2xsYmlsZEF1czIuc3ZnIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgaWQ9InN2ZzE4ODEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4K'+
			'ICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIgeD0iLTg5LjUxMzM1MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYX'+
			'RoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiIHg9Ii04OS41MTMzNTEiIHJ5PSI1Ljg4OTE1MjUiIHk9IjcuODM5NzYxMyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIi8+CiAgPC9jbGlwUGF0'+
			'aD4KIDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTpjeT0iMzIuOTk5NDc5IiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgaW5rc2NhcGU6Y3VycmVudC'+
			'1sYXllcj0ibGF5ZXIxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpjeD0iMzIuMDcyNTIzIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpZD0iYmFzZSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6'+
			'dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMzQ0NzQsLTE2Mi4yMzQ0NSkiPgogIDxwYXRoIGlkPSJwYXRoNDQyNC0wIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2Mi'+
			'wtOC4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBzdHlsZT0iZmlsbDojMDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjkzMzMyMTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8cmVjdCBoZWlnaHQ9IjUuMjI2MDc3NiIgd2lkdGg9IjcuMjA0MDc3NyIgaWQ9InJlY3QxODA4IiB4PSI1MC4xNDUxNDUiIHJ5PSIwLjQ1MDk5ODkiIHk9IjE2OS4xMDYwMyIgc3R5bGU9Im9wYWNpdHk6MC40'+
			'NzMwMDAwMjtmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjE2MTc5ODI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxyZWN0IGhlaWdodD0iNy45MjY1NjE4IiB3aWR0aD0iMTAuODMwNzkxIiB4PSI0OS43Njk1NDciIGlkPSJyZWN0MTg1MSIgcnk9IjAuOTU2NzU2MjMiIHk9IjE2Ni44NTc3NiIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMTI1NzkyODY7c3Ryb2tlLW1pdGVybGltaX'+
			'Q6NDtzdHJva2UtZGFzaGFycmF5OjAuMzc3Mzc4NiwgMC4zNzczNzg2O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxyZWN0IGhlaWdodD0iNS4yNTk3NjU2IiB3aWR0aD0iNy4yNTA1MTU5IiB4PSI1MC4xMjkxNDMiIGlkPSJyZWN0MjQ1NCIgcnk9IjAuNDk4NjM3NSIgeT0iMTY5LjA5NjcxIiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4yMTc1NzMzNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+CiAg'+
			'PGcgaWQ9Imc1ODY0LTAiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMDU3NDcxODQsMC4wNTk2MTA0LC0wLjA1OTYxMDQsMC4wNTc0NzE4NCw2MS41MDM4NDEsMTY5LjU0MjMpIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIHdpZHRoPSIxNS41NTc3NDQiIGlkPSJyZWN0NTg1Ni01IiB4PSItMzkuNTEwNTU5IiByeT0iMi41MDM2MDMyIiB5PSItMTguODMzMDU5IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz4KIC'+
			'AgPGcgaWQ9Imc1ODYyLTciIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggaWQ9InBhdGg1ODU4LTIiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5'+
			'OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggaWQ9InBhdGg1ODYwLTMiIGQ9Im0gLTQwLjMzMT'+
			'U1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBzdHlsZT0iZmlsbDojNGQ0'+
			'ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbildaus__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Vollbildaus";
		el.ggDx=140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vollbildaus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vollbildaus.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false)) || 
				((player.getVariableValue('Infomenu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vollbildaus.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vollbildaus.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vollbildaus.style[domTransition]='';
				if (me._vollbildaus.ggCurrentLogicStateVisible == 0) {
					me._vollbildaus.style.visibility="hidden";
					me._vollbildaus.ggVisible=false;
				}
				else {
					me._vollbildaus.style.visibility=(Number(me._vollbildaus.style.opacity)>0||!me._vollbildaus.style.opacity)?'inherit':'hidden';
					me._vollbildaus.ggVisible=true;
				}
			}
		}
		me._vollbildaus.onclick=function (e) {
			player.exitFullscreen();
		}
		me._vollbildaus.onmouseover=function (e) {
			me._vollbildaus__img.style.visibility='hidden';
			me._vollbildaus__imgo.style.visibility='inherit';
		}
		me._vollbildaus.onmouseout=function (e) {
			me._vollbildaus__img.style.visibility='inherit';
			me._vollbildaus__imgo.style.visibility='hidden';
		}
		me._vollbildaus.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._statusleisteordner.appendChild(me._vollbildaus);
		me.divSkin.appendChild(me._statusleisteordner);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['station5q']) {
			player.setVariableValue('aktuellerTextFM', "Quiz bestanden");
		}
		if (me.elementMouseOver['forschungspunktebutton']) {
			player.setVariableValue('aktuellerText', "Erzeugte Forschungsdaten");
		}
		if (me.elementMouseOver['st0']) {
			player.setVariableValue('aktuellerText', "Aktueller Standort");
		}
		if (me.elementMouseOver['st1']) {
			player.setVariableValue('aktuellerText', "Aktueller Standort");
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._station1.logicBlock_alpha();
	me._station1up1.logicBlock_alpha();
	me._station1up2.logicBlock_alpha();
	me._station1q.logicBlock_alpha();
	me._play.logicBlock_visible();
	me._play.logicBlock_alpha();
	me._einstellungen.logicBlock_alpha();
	me._linkoffnen.logicBlock_visible();
	me._linkoffnen.logicBlock_alpha();
	me._karte.logicBlock_visible();
	me._karte.logicBlock_alpha();
	me._fullscreen.logicBlock_visible();
	me._fullscreen.logicBlock_alpha();
	me._forschungsdaten_anzeigen.logicBlock_visible();
	me._forschungsdaten_anzeigen.logicBlock_alpha();
	me._st0.logicBlock_alpha();
	me._st1.logicBlock_alpha();
	me._vollbild.logicBlock_alpha();
	me._vollbildaus.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._station1.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._play.logicBlock_visible();me._play.logicBlock_alpha();me._einstellungen.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._karte.logicBlock_visible();me._karte.logicBlock_alpha();me._fullscreen.logicBlock_visible();me._fullscreen.logicBlock_alpha();me._forschungsdaten_anzeigen.logicBlock_visible();me._forschungsdaten_anzeigen.logicBlock_alpha();me._station1.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible(); });
	player.addListener('varchanged_SENSI', function(args) { me._play.logicBlock_alpha();me._einstellungen.logicBlock_alpha();me._linkoffnen.logicBlock_alpha();me._karte.logicBlock_alpha();me._fullscreen.logicBlock_alpha();me._forschungsdaten_anzeigen.logicBlock_alpha();me._vollbildaus.logicBlock_visible(); });
	player.addListener('varchanged_Einstellungen', function(args) { me._play.logicBlock_visible();me._linkoffnen.logicBlock_visible();me._karte.logicBlock_visible();me._fullscreen.logicBlock_visible();me._forschungsdaten_anzeigen.logicBlock_visible(); });
	player.addListener('varchanged_Infomenu', function(args) { me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible(); });
	player.addListener('varchanged_Station', function(args) { me._st0.logicBlock_alpha();me._st1.logicBlock_alpha(); });
	me.skinTimerEvent();
};