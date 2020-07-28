// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: SENSO-Trail Skin.ggsk
// Generated 2020-07-28T12:30:41

function pano2vrSkin(player,base) {
	player.addVariable('HilfeModus', 2, false);
	player.addVariable('Station', 1, 0);
	player.addVariable('Forschungspunkte', 0, "0");
	player.addVariable('SENSI', 2, false);
	player.addVariable('Forschungsmenu', 2, false);
	player.addVariable('KomMenu', 2, false);
	player.addVariable('LinkMenu', 2, false);
	player.addVariable('KartenMenu', 2, false);
	player.addVariable('Vollbild', 2, false);
	player.addVariable('Infomenu', 2, false);
	player.addVariable('Einstellungen', 2, false);
	player.addVariable('Schloss6', 2, false);
	player.addVariable('Schloss5', 2, false);
	player.addVariable('Schloss4', 2, false);
	player.addVariable('Schloss3', 2, false);
	player.addVariable('Schloss2', 2, false);
	player.addVariable('Schloss1', 2, false);
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
		el=me._sensimenu=document.createElement('div');
		el.ggId="SENSIMenu";
		el.ggDx=0;
		el.ggDy=22;
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
		me._sensimenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
		el=me._sensimenu0=document.createElement('div');
		els=me._sensimenu0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._sensimenu0__img.setAttribute('src',basePath + 'images/sensimenu0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sensimenu0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._sensimenu0__imgo.setAttribute('src',basePath + 'images/sensimenu0__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SENSImenu";
		el.ggDx=0;
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sensimenu0.ggIsActive=function() {
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
		me._sensimenu0.onclick=function (e) {
			player.setVariableValue('SENSI', true);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility=(Number(me._sensimenu2.style.opacity)>0||!me._sensimenu2.style.opacity)?'inherit':'hidden';
			me._sensimenu2.ggVisible=true;
		}
		me._sensimenu0.onmouseover=function (e) {
			me._sensimenu0__img.style.visibility='hidden';
			me._sensimenu0__imgo.style.visibility='inherit';
		}
		me._sensimenu0.onmouseout=function (e) {
			me._sensimenu0__img.style.visibility='inherit';
			me._sensimenu0__imgo.style.visibility='hidden';
		}
		me._sensimenu0.ggUpdatePosition=function (useTransition) {
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
		me._sensimenu.appendChild(me._sensimenu0);
		el=me._sensimenu2=document.createElement('div');
		els=me._sensimenu2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._sensimenu2__img.setAttribute('src',basePath + 'images/sensimenu2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SENSImenu2";
		el.ggDx=0;
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
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
		me._sensimenu2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sensimenu2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sensimenu2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sensimenu2.style[domTransition]='';
				if (me._sensimenu2.ggCurrentLogicStateVisible == 0) {
					me._sensimenu2.style.visibility="hidden";
					me._sensimenu2.ggVisible=false;
				}
				else {
					me._sensimenu2.style.visibility="hidden";
					me._sensimenu2.ggVisible=false;
				}
			}
		}
		me._sensimenu2.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
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
		me._sensimenu.appendChild(me._sensimenu2);
		el=me._vollbild=document.createElement('div');
		els=me._vollbild__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHdpZHRoPSIxOS42Nzk1NjdtbSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGQuc3ZnIi'+
			'B4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcxODgxIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgogIDxj'+
			'bGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgeD0iLTg5LjUxMzM1MSIgd2lkdGg9IjI5LjcyNTc2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgcnk9IjUuODg5MTUyNSIgaWQ9InJlY3Q1ODAxLTEiIHk9IjcuODM5NzYxMyIvPgogIDwvY2xpcFBhdGg+Ci'+
			'AgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgeD0iLTg5LjUxMzM1MSIgd2lkdGg9IjI5LjcyNTc2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgcnk9IjUuODg5MTUyNSIgaWQ9InJlY3QxODYzIiB5PSI3LjgzOTc2MTMiLz4KICA8L2NsaXBQYXRoPgog'+
			'PC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0iYmFzZSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjQxLjYwOTAyMyIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3k9IjI4LjAwNzA0MSIgZml0LW1hcmdpbi1yaWdodD0iMCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2'+
			'NhcGU6cGFnZXNoYWRvdz0iMiIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBl'+
			'IHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSIgaWQ9ImxheWVyMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45MzMzMjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaG'+
			'FycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2MiwtOC4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBpZD0icGF0aDQ0MjQtMCIvPgogIDxyZWN0IHg9IjQ5Ljc2OTI5NSIgd2lkdGg9IjEwLjgzMDQ1MiIgc3R5bGU9Im9wYWNpdHk6MC40NzMwMDAwMjtmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAu'+
			'MzI0OTk5OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI3Ljg1Njc3IiByeT0iMC42NzgwMjE4NSIgaWQ9InJlY3QxODA4IiB5PSIxNjYuODI3NTYiLz4KICA8cmVjdCB4PSI0OS43NjkyOTUiIHdpZHRoPSIxMC44MzA0NTIiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iNy44NTY3Ny'+
			'Igcnk9IjAuNzQ0ODM5MjUiIHk9IjE2Ni44Mjc1NiIgaWQ9InJlY3QyNDU0Ii8+CiAgPHJlY3QgeD0iNTAuMjUzNDg3IiB3aWR0aD0iOC4wNTg4NDY1IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4wOTE0MDgyOTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4yNzQyMjQ4NywgMC4yNzQyMjQ4NztzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iNS42MjUxMTQiIHJ5PSIxLjA4MjAxMTMiIHk9IjE2OC43MDg2OCIgaWQ9InJlY3QxODUxIi8+CiAgPGcgc3R5'+
			'bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMDU3NDcxODQsLTAuMDU5NjEwNCwwLjA1OTYxMDQsLTAuMDU3NDcxODQsNTYuMzQ3MzEzLDE2Ny4yMzY2NikiIGlkPSJnNTg2NC0wIj4KICAgPHJlY3QgeD0iLTM5LjUxMDU1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBoZWlnaHQ9IjUxLjE3Njc4OCIgcnk9IjIuNTAzNjAzMiIgaWQ9InJlY3Q1ODU2LTUiIHk9Ii0xOC44MzMwNTkiLz4KICAgPG'+
			'cgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSIgaWQ9Imc1ODYyLTciPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYw'+
			'MiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NTgtMiIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdH'+
			'k6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYs'+
			'Ny45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg2MC0zIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbild__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbild__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHdpZHRoPSIxOS42Nzk1NjdtbSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGQyLnN2Zy'+
			'IgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiBoZWlnaHQ9IjE3LjA0MzAxMW1tIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnMTg4MSIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4KICA8'+
			'Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IHg9Ii04OS41MTMzNTEiIHdpZHRoPSIyOS43MjU3NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHJ5PSI1Ljg4OTE1MjUiIGlkPSJyZWN0NTgwMS0xIiB5PSI3LjgzOTc2MTMiLz4KICA8L2NsaXBQYXRoPg'+
			'ogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IHg9Ii04OS41MTMzNTEiIHdpZHRoPSIyOS43MjU3NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHJ5PSI1Ljg4OTE1MjUiIGlkPSJyZWN0MTg2MyIgeT0iNy44Mzk3NjEzIi8+CiAgPC9jbGlwUGF0aD4K'+
			'IDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9ImJhc2UiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOmN4PSI0MS42MDkwMjMiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN5PSIyOC4wMDcwNDEiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3'+
			'NjYXBlOnBhZ2VzaGFkb3c9IjIiIGZpdC1tYXJnaW4tbGVmdD0iMCIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlw'+
			'ZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlkPSJsYXllcjEiPgogIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2'+
			'hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaWQ9InBhdGg0NDI0LTAiLz4KICA8cmVjdCB4PSI0OS43NjkyOTUiIHdpZHRoPSIxMC44MzA0NTIiIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDow'+
			'LjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iNy44NTY3NyIgcnk9IjAuNjc4MDIxODUiIGlkPSJyZWN0MTgwOCIgeT0iMTY2LjgyNzU2Ii8+CiAgPHJlY3QgeD0iNDkuNzY5Mjk1IiB3aWR0aD0iMTAuODMwNDUyIiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4zMjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjcuODU2Nz'+
			'ciIHJ5PSIwLjc0NDgzOTI1IiB5PSIxNjYuODI3NTYiIGlkPSJyZWN0MjQ1NCIvPgogIDxyZWN0IHg9IjUwLjI1MzQ4NyIgd2lkdGg9IjguMDU4ODQ2NSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMDkxNDA4Mjk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMjc0MjI0ODcsIDAuMjc0MjI0ODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjUuNjI1MTE0IiByeT0iMS4wODIwMTEzIiB5PSIxNjguNzA4NjgiIGlkPSJyZWN0MTg1MSIvPgogIDxnIHN0'+
			'eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjA1NzQ3MTg0LC0wLjA1OTYxMDQsMC4wNTk2MTA0LC0wLjA1NzQ3MTg0LDU2LjM0NzMxMywxNjcuMjM2NjYpIiBpZD0iZzU4NjQtMCI+CiAgIDxyZWN0IHg9Ii0zOS41MTA1NTkiIHdpZHRoPSIxNS41NTc3NDQiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgaGVpZ2h0PSI1MS4xNzY3ODgiIHJ5PSIyLjUwMzYwMzIiIGlkPSJyZWN0NTg1Ni01IiB5PSItMTguODMzMDU5Ii8+CiAgID'+
			'xnIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiIGlkPSJnNTg2Mi03Ij4KICAgIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2'+
			'MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaWQ9InBhdGg1ODU4LTIiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiLz4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaX'+
			'R5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2'+
			'LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NjAtMyIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._vollbild__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Vollbild";
		el.ggDx=-77;
		el.ggDy=131;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
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
		me._vollbild.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vollbild.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vollbild.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vollbild.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._vollbild.ggCurrentLogicStateVisible == 0) {
					me._vollbild.style.visibility="hidden";
					me._vollbild.ggVisible=false;
				}
				else {
					me._vollbild.style.visibility=(Number(me._vollbild.style.opacity)>0||!me._vollbild.style.opacity)?'inherit':'hidden';
					me._vollbild.ggVisible=true;
				}
			}
		}
		me._vollbild.logicBlock_alpha = function() {
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
			if (me._vollbild.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vollbild.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vollbild.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._vollbild.ggCurrentLogicStateAlpha == 0) {
					me._vollbild.style.visibility=me._vollbild.ggVisible?'inherit':'hidden';
					me._vollbild.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vollbild.style.opacity == 0.0) { me._vollbild.style.visibility="hidden"; } }, 1005);
					me._vollbild.style.opacity=0;
				}
			}
		}
		me._vollbild.onclick=function (e) {
			player.enterFullscreen();
			me._vollbildaus.style[domTransition]='none';
			me._vollbildaus.style.visibility=(Number(me._vollbildaus.style.opacity)>0||!me._vollbildaus.style.opacity)?'inherit':'hidden';
			me._vollbildaus.ggVisible=true;
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensimenu.appendChild(me._vollbild);
		el=me._vollbildaus=document.createElement('div');
		els=me._vollbildaus__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHdpZHRoPSIxOS42Nzk1NjdtbSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGRBdXMuc3'+
			'ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGhlaWdodD0iMTcuMDQzMDExbW0iIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcxODgxIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgog'+
			'IDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgeD0iLTg5LjUxMzM1MSIgd2lkdGg9IjI5LjcyNTc2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgcnk9IjUuODg5MTUyNSIgaWQ9InJlY3Q1ODAxLTEiIHk9IjcuODM5NzYxMyIvPgogIDwvY2xpcFBhdG'+
			'g+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgeD0iLTg5LjUxMzM1MSIgd2lkdGg9IjI5LjcyNTc2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgcnk9IjUuODg5MTUyNSIgaWQ9InJlY3QxODYzIiB5PSI3LjgzOTc2MTMiLz4KICA8L2NsaXBQYXRo'+
			'PgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0iYmFzZSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjMyLjA3MjUyMyIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3k9IjMyLjk5OTQ3OSIgZml0LW1hcmdpbi1yaWdodD0iMCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW'+
			'5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXRvcD0iMCIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0'+
			'eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSIgaWQ9ImxheWVyMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45MzMzMjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZG'+
			'FzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2MiwtOC4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBpZD0icGF0aDQ0MjQtMCIvPgogIDxyZWN0IHg9IjUwLjE0NTE0NSIgd2lkdGg9IjcuMjA0MDc3NyIgc3R5bGU9Im9wYWNpdHk6MC40NzMwMDAwMjtmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRo'+
			'OjAuMjE2MTc5ODI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI1LjIyNjA3NzYiIHJ5PSIwLjQ1MDk5ODkiIGlkPSJyZWN0MTgwOCIgeT0iMTY5LjEwNjAzIi8+CiAgPHJlY3QgeD0iNDkuNzY5NTQ3IiB3aWR0aD0iMTAuODMwNzkxIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4xMjU3OTI4NjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4zNzczNzg2LCAwLjM3NzM3ODY7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdH'+
			'Jva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjcuOTI2NTYxOCIgcnk9IjAuOTU2NzU2MjMiIHk9IjE2Ni44NTc3NiIgaWQ9InJlY3QxODUxIi8+CiAgPHJlY3QgeD0iNTAuMTI5MTQzIiB3aWR0aD0iNy4yNTA1MTU5IiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4yMTc1NzMzNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjUuMjU5NzY1NiIgcnk9IjAuNDk4NjM3NSIgeT0iMTY5LjA5NjcxIiBpZD0icmVjdDI0NTQiLz4KICA8'+
			'ZyBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjA1NzQ3MTg0LDAuMDU5NjEwNCwtMC4wNTk2MTA0LDAuMDU3NDcxODQsNjEuNTAzODQxLDE2OS41NDIzKSIgaWQ9Imc1ODY0LTAiPgogICA8cmVjdCB4PSItMzkuNTEwNTU5IiB3aWR0aD0iMTUuNTU3NzQ0IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIGhlaWdodD0iNTEuMTc2Nzg4IiByeT0iMi41MDM2MDMyIiBpZD0icmVjdDU4NTYtNSIgeT0iLTE4LjgzMzA1OSIvPgogIC'+
			'A8ZyBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUsLTYzLjk0MjUxNywyOS44NjI2MTkpIiBpZD0iZzU4NjItNyI+CiAgICA8cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3'+
			'NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg1OC0yIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIi8+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2'+
			'l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEz'+
			'Niw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaWQ9InBhdGg1ODYwLTMiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._vollbildaus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbildaus__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHdpZHRoPSIxOS42Nzk1NjdtbSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGRBdXMyLn'+
			'N2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiBoZWlnaHQ9IjE3LjA0MzAxMW1tIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnMTg4MSIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4K'+
			'ICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IHg9Ii04OS41MTMzNTEiIHdpZHRoPSIyOS43MjU3NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHJ5PSI1Ljg4OTE1MjUiIGlkPSJyZWN0NTgwMS0xIiB5PSI3LjgzOTc2MTMiLz4KICA8L2NsaXBQYX'+
			'RoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IHg9Ii04OS41MTMzNTEiIHdpZHRoPSIyOS43MjU3NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHJ5PSI1Ljg4OTE1MjUiIGlkPSJyZWN0MTg2MyIgeT0iNy44Mzk3NjEzIi8+CiAgPC9jbGlwUGF0'+
			'aD4KIDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9ImJhc2UiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOmN4PSIzMi4wNzI1MjMiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN5PSIzMi45OTk0NzkiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIG'+
			'lua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGZpdC1tYXJnaW4tbGVmdD0iMCIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6'+
			'dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlkPSJsYXllcjEiPgogIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW'+
			'Rhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaWQ9InBhdGg0NDI0LTAiLz4KICA8cmVjdCB4PSI1MC4xNDUxNDUiIHdpZHRoPSI3LjIwNDA3NzciIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0'+
			'aDowLjIxNjE3OTgyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iNS4yMjYwNzc2IiByeT0iMC40NTA5OTg5IiBpZD0icmVjdDE4MDgiIHk9IjE2OS4xMDYwMyIvPgogIDxyZWN0IHg9IjQ5Ljc2OTU0NyIgd2lkdGg9IjEwLjgzMDc5MSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMTI1NzkyODY7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMzc3Mzc4NiwgMC4zNzczNzg2O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3'+
			'Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI3LjkyNjU2MTgiIHJ5PSIwLjk1Njc1NjIzIiB5PSIxNjYuODU3NzYiIGlkPSJyZWN0MTg1MSIvPgogIDxyZWN0IHg9IjUwLjEyOTE0MyIgd2lkdGg9IjcuMjUwNTE1OSIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMjE3NTczMzQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI1LjI1OTc2NTYiIHJ5PSIwLjQ5ODYzNzUiIHk9IjE2OS4wOTY3MSIgaWQ9InJlY3QyNDU0Ii8+CiAg'+
			'PGcgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNTc0NzE4NCwwLjA1OTYxMDQsLTAuMDU5NjEwNCwwLjA1NzQ3MTg0LDYxLjUwMzg0MSwxNjkuNTQyMykiIGlkPSJnNTg2NC0wIj4KICAgPHJlY3QgeD0iLTM5LjUxMDU1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiBoZWlnaHQ9IjUxLjE3Njc4OCIgcnk9IjIuNTAzNjAzMiIgaWQ9InJlY3Q1ODU2LTUiIHk9Ii0xOC44MzMwNTkiLz4KIC'+
			'AgPGcgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSIgaWQ9Imc1ODYyLTciPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3'+
			'NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NTgtMiIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYW'+
			'NpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkx'+
			'MzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg2MC0zIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbildaus__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Vollbildaus";
		el.ggDx=-77;
		el.ggDy=131;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
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
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vollbildaus.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vollbildaus.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vollbildaus.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._vollbildaus.ggCurrentLogicStateVisible == 0) {
					me._vollbildaus.style.visibility="hidden";
					me._vollbildaus.ggVisible=false;
				}
				else {
					me._vollbildaus.style.visibility="hidden";
					me._vollbildaus.ggVisible=false;
				}
			}
		}
		me._vollbildaus.logicBlock_alpha = function() {
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
			if (me._vollbildaus.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vollbildaus.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vollbildaus.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._vollbildaus.ggCurrentLogicStateAlpha == 0) {
					me._vollbildaus.style.visibility=me._vollbildaus.ggVisible?'inherit':'hidden';
					me._vollbildaus.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vollbildaus.style.opacity == 0.0) { me._vollbildaus.style.visibility="hidden"; } }, 1005);
					me._vollbildaus.style.opacity=0;
				}
			}
		}
		me._vollbildaus.onclick=function (e) {
			player.exitFullscreen();
			me._vollbildaus.style[domTransition]='none';
			me._vollbildaus.style.visibility='hidden';
			me._vollbildaus.ggVisible=false;
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sensimenu.appendChild(me._vollbildaus);
		el=me._kommunikation=document.createElement('div');
		els=me._kommunikation__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._kommunikation__img.setAttribute('src',basePath + 'images/kommunikation.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._kommunikation__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._kommunikation__imgo.setAttribute('src',basePath + 'images/kommunikation__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Kommunikation";
		el.ggDx=0;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kommunikation.ggIsActive=function() {
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
		me._kommunikation.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._kommunikation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._kommunikation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._kommunikation.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._kommunikation.ggCurrentLogicStateVisible == 0) {
					me._kommunikation.style.visibility="hidden";
					me._kommunikation.ggVisible=false;
				}
				else {
					me._kommunikation.style.visibility=(Number(me._kommunikation.style.opacity)>0||!me._kommunikation.style.opacity)?'inherit':'hidden';
					me._kommunikation.ggVisible=true;
				}
			}
		}
		me._kommunikation.logicBlock_alpha = function() {
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
			if (me._kommunikation.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._kommunikation.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._kommunikation.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._kommunikation.ggCurrentLogicStateAlpha == 0) {
					me._kommunikation.style.visibility=me._kommunikation.ggVisible?'inherit':'hidden';
					me._kommunikation.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._kommunikation.style.opacity == 0.0) { me._kommunikation.style.visibility="hidden"; } }, 1005);
					me._kommunikation.style.opacity=0;
				}
			}
		}
		me._kommunikation.onclick=function (e) {
			player.setVariableValue('KomMenu', true);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility='hidden';
			me._sensimenu.ggVisible=false;
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('SENSI', false);
		}
		me._kommunikation.onmouseover=function (e) {
			me._kommunikation__img.style.visibility='hidden';
			me._kommunikation__imgo.style.visibility='inherit';
		}
		me._kommunikation.onmouseout=function (e) {
			me._kommunikation__img.style.visibility='inherit';
			me._kommunikation__imgo.style.visibility='hidden';
		}
		me._kommunikation.ggUpdatePosition=function (useTransition) {
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
		me._sensimenu.appendChild(me._kommunikation);
		el=me._linkoffnen=document.createElement('div');
		els=me._linkoffnen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9Ijc0LjM3OTQ3OCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mby5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLm'+
			'R0ZCIgaGVpZ2h0PSI2NC40MTQ1MiIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHZlcnNpb249IjEuMSIgaWQ9InN2ZzIiIHZpZXdCb3g9IjAgMCA3NC4zNzk0OCA2NC40MTQ1MjIiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0ibmFtZWR2aWV3OSIgaW5rc2NhcGU6Y3g9Ii00LjM3NzkwNDQiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIG9iamVj'+
			'dHRvbGVyYW5jZT0iMTAiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBncmlkdG9sZXJhbmNlPSIxMCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOndpbmRvdy13aW'+
			'R0aD0iMTkyMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIi8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRo'+
			'MTQzIj4KICAgPHJlY3QgeD0iLTcxNS4xNTY4IiB3aWR0aD0iMjAzLjE0NDI3IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjEuNzEyMTI4NjQiIGhlaWdodD0iMjAzLjE0NDI3IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIgeT0iNjcuODA0OTkzIiBpZD0icmVjdDE0NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm'+
			'9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5ODggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIiBpZD0icGF0aDQ1NTQiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IHg9Ii0xMTAuOTQzOSIgd2lkdGg9IjI4LjA5ODM3OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMDY3'+
			'MzcwNztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iMjcuOTU1MDIxIiByeT0iMi44OTQ5OTY0IiB5PSItMjcuNDE2NTA0IiBpZD0icmVjdDQ3MDEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2'+
			'tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgaWQ9InBhdGg0OTM5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ry'+
			'b2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTU0LjEzNDc4OSIgcj0iMjQuMjgzNTc5IiBpZD0iY2lyY2xlNDkxNSIgY3g9Ii04OC41Nzk0NzUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9Ij'+
			'AuNDA3NDQ5MDEiIGlkPSJyZWN0NDcyMSIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0ODk0IiB5PSIyNS43MTgwNjkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VP'+
			'blVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIGlkPSJjaXJjbGU0ODk5IiBjeD0iLTUyLjY0ODIyOCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2'+
			'Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4OTUiIGN4PSItNTIuNjQ4MjI4Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg5MSIgY3g9Ii01Mi42NDgyMjgiLz4KICA8L2NsaXBQ'+
			'YXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIGlkPSJjaXJjbGU0ODg3IiBjeD0iLTUyLjY0ODIyOCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD'+
			'0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiIHJ5PSIwLjQwNzQ0OTAxIiBpZD0icmVjdDQ3MjEtMiIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40'+
			'NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0OTMwIiB5PSIyNS43MTgwNjkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3QgeD0iLTM0LjU0Njk1OSIgd2lkdGg9IjguODc3OTg4OCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1IiByeT0iMC40MDc0NDkwMSIgaWQ9InJlY3Q0NzIxLTAiIHk9IjI1LjcxODA2OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3QgeD0iLTM0LjU0Njk1OSIgd2lkdGg9IjguODc3OTg4OCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1IiByeT0iMC40MDc0NDkwMSIgaWQ9InJlY3QxOTc3IiB5PSIyNS43MTgwNjkiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45ODM3ODk5MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0'+
			'cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIiBkPSJtIDI1Ny45ODMwMywxMzcuNDU2MjUgLTQuOTAxOTQsOC40OTA0MSBoIC05LjgwMzg3IGwgLTQuOTAxOTQsLTguNDkwNDEgNC45MDE5NCwtOC40OTA0IGggOS44MDM4NyB6IiBpZD0icGF0aDIwMzgiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjI4LjI3MDQ3NyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudD'+
			'pub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1My4zMzMzMzIwNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q29uc3RhbnRpYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidDb25zdGFudGlhLCBCb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHIt'+
			'dGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI1MC44NDAwNjUiIGlkPSJ0ZXh0ODQ4Ij4KICA8dHNwYW4geD0iMjguMjcwNDc3IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiBpZD0idHNwYW44NDYiIHk9IjUwLjg0MDA2NSI+aTwvdHNwYW4+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._linkoffnen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkoffnen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9Ijc0LjM3OTQ3OCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mbzIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC'+
			'5kdGQiIGhlaWdodD0iNjQuNDE0NTIiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcyIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOmN4PSItNC4zNzc5MDQ0IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiBvYmpl'+
			'Y3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeT0iNTUuMTQ1ODQ3IiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnpvb209IjUuMTgxMzUzNSIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp3aW5kb3ctd2'+
			'lkdGg9IjE5MjAiIGd1aWRldG9sZXJhbmNlPSIxMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IHg9Ii03MTUuMTU2OCIgd2lkdGg9IjIwMy4xNDQyNyIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiBoZWlnaHQ9IjIwMy4xNDQyNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjMxNTMxNSkiIHk9IjY3LjgwNDk5MyIgaWQ9InJlY3QxNDUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdH'+
			'Jva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIC0xMjguNzMwODMsLTguMTUzMzkwOSAyMy43Mzg5NiwtMjMuNzM4OTcyMSAtMTkuMTA2OTgsLTguNDkxOTg4IC0xOC41Mjc5OCw3LjMzMzk5MSAxMy44OTYsMjQuODk2OTY5MSIgaWQ9InBhdGg0NTU0Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCB4PSItMTEwLjk0MzkiIHdpZHRoPSIyOC4wOTgzNzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzA2'+
			'NzM3MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI3Ljk1NTAyMSIgcnk9IjIuODk0OTk2NCIgeT0iLTI3LjQxNjUwNCIgaWQ9InJlY3Q0NzAxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMzNDY2OTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm'+
			'9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gLTEwNi42MDcyNiwtMTMuODA1NTQ0IDMuMzEwMjksMi41MDI5MDUgOS41MjcxODcsMi41MDI5MDU1IDEuOTM3NzM0LDMuNzEzOTg4MSAtMTUuMTc4OTExLDIuNzQ1MTIxNyAtOS4yODQ5NywtNi4yOTc2MzIxIHoiIGlkPSJwYXRoNDkzOSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0'+
			'cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDoxLjMzODUyOTk0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgY3k9Ii01NC4xMzQ3ODkiIHI9IjI0LjI4MzU3OSIgaWQ9ImNpcmNsZTQ5MTUiIGN4PSItODguNTc5NDc1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiIHJ5PS'+
			'IwLjQwNzQ0OTAxIiBpZD0icmVjdDQ3MjEiIHk9IjI1LjcxODA2OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiIHJ5PSIwLjQwNzQ0OTAxIiBpZD0icmVjdDg5NCIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg5OSIgY3g9Ii01Mi42NDgyMjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIGlkPSJjaXJjbGU0ODk1IiBjeD0iLTUyLjY0ODIyOCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4OTEiIGN4PSItNTIuNjQ4MjI4Ii8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg4NyIgY3g9Ii01Mi42NDgyMjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgeD0iLTM0LjU0Njk1OSIgd2lkdG'+
			'g9IjguODc3OTg4OCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1IiByeT0iMC40MDc0NDkwMSIgaWQ9InJlY3Q0NzIxLTIiIHk9IjI1LjcxODA2OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIu'+
			'NDcwODUiIHJ5PSIwLjQwNzQ0OTAxIiBpZD0icmVjdDkzMCIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0NDcyMS0wIiB5PSIyNS43MTgwNjkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0MTk3NyIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTgzNzg5OTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtz'+
			'dHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjc5MjgxODEsLTMuMTA1MjUxOSwzLjEwNTI1MTksMS43OTI4MTgxLC04MzQuNTg2NjMsNTU2LjQzMTk5KSIgZD0ibSAyNTcuOTgzMDMsMTM3LjQ1NjI1IC00LjkwMTk0LDguNDkwNDEgaCAtOS44MDM4NyBsIC00LjkwMTk0LC04LjQ5MDQxIDQuOTAxOTQsLTguNDkwNCBoIDkuODAzODcgeiIgaWQ9InBhdGgyMDM4Ii8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIyOC4yNzA0NzciIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbn'+
			'Q6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NTMuMzMzMzMyMDZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNvbnN0YW50aWE7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ29uc3RhbnRpYSwgQm9sZCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxy'+
			'LXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iNTAuODQwMDY1IiBpZD0idGV4dDg0OCI+CiAgPHRzcGFuIHg9IjI4LjI3MDQ3NyIgc29kaXBvZGk6cm9sZT0ibGluZSIgaWQ9InRzcGFuODQ2IiB5PSI1MC44NDAwNjUiPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
		me._linkoffnen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="LinkOffnen";
		el.ggDx=78;
		el.ggDy=131;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
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
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._linkoffnen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._linkoffnen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._linkoffnen.style[domTransition]='opacity 1000ms ease 0ms';
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
				me._linkoffnen.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._linkoffnen.ggCurrentLogicStateAlpha == 0) {
					me._linkoffnen.style.visibility=me._linkoffnen.ggVisible?'inherit':'hidden';
					me._linkoffnen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._linkoffnen.style.opacity == 0.0) { me._linkoffnen.style.visibility="hidden"; } }, 1005);
					me._linkoffnen.style.opacity=0;
				}
			}
		}
		me._linkoffnen.onclick=function (e) {
			player.setVariableValue('Infomenu', true);
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
		me._sensimenu.appendChild(me._linkoffnen);
		el=me._kartenmenuzeigen=document.createElement('div');
		els=me._kartenmenuzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._kartenmenuzeigen__img.setAttribute('src',basePath + 'images/kartenmenuzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._kartenmenuzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._kartenmenuzeigen__imgo.setAttribute('src',basePath + 'images/kartenmenuzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="KartenMenuZeigen";
		el.ggDx=78;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kartenmenuzeigen.ggIsActive=function() {
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
		me._kartenmenuzeigen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._kartenmenuzeigen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._kartenmenuzeigen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._kartenmenuzeigen.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._kartenmenuzeigen.ggCurrentLogicStateVisible == 0) {
					me._kartenmenuzeigen.style.visibility="hidden";
					me._kartenmenuzeigen.ggVisible=false;
				}
				else {
					me._kartenmenuzeigen.style.visibility=(Number(me._kartenmenuzeigen.style.opacity)>0||!me._kartenmenuzeigen.style.opacity)?'inherit':'hidden';
					me._kartenmenuzeigen.ggVisible=true;
				}
			}
		}
		me._kartenmenuzeigen.logicBlock_alpha = function() {
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
			if (me._kartenmenuzeigen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._kartenmenuzeigen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._kartenmenuzeigen.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._kartenmenuzeigen.ggCurrentLogicStateAlpha == 0) {
					me._kartenmenuzeigen.style.visibility=me._kartenmenuzeigen.ggVisible?'inherit':'hidden';
					me._kartenmenuzeigen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._kartenmenuzeigen.style.opacity == 0.0) { me._kartenmenuzeigen.style.visibility="hidden"; } }, 1005);
					me._kartenmenuzeigen.style.opacity=0;
				}
			}
		}
		me._kartenmenuzeigen.onclick=function (e) {
			player.setVariableValue('KartenMenu', true);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility='hidden';
			me._sensimenu.ggVisible=false;
			player.setVariableValue('SENSI', false);
		}
		me._kartenmenuzeigen.onmouseover=function (e) {
			me._kartenmenuzeigen__img.style.visibility='hidden';
			me._kartenmenuzeigen__imgo.style.visibility='inherit';
		}
		me._kartenmenuzeigen.onmouseout=function (e) {
			me._kartenmenuzeigen__img.style.visibility='inherit';
			me._kartenmenuzeigen__imgo.style.visibility='hidden';
		}
		me._kartenmenuzeigen.ggUpdatePosition=function (useTransition) {
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
		me._sensimenu.appendChild(me._kartenmenuzeigen);
		el=me._datenlink=document.createElement('div');
		els=me._datenlink__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._datenlink__img.setAttribute('src',basePath + 'images/datenlink.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._datenlink__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._datenlink__imgo.setAttribute('src',basePath + 'images/datenlink__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Datenlink";
		el.ggDx=0;
		el.ggDy=174;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._datenlink.ggIsActive=function() {
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
		me._datenlink.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._datenlink.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._datenlink.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._datenlink.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._datenlink.ggCurrentLogicStateVisible == 0) {
					me._datenlink.style.visibility="hidden";
					me._datenlink.ggVisible=false;
				}
				else {
					me._datenlink.style.visibility=(Number(me._datenlink.style.opacity)>0||!me._datenlink.style.opacity)?'inherit':'hidden';
					me._datenlink.ggVisible=true;
				}
			}
		}
		me._datenlink.logicBlock_alpha = function() {
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
			if (me._datenlink.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._datenlink.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._datenlink.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._datenlink.ggCurrentLogicStateAlpha == 0) {
					me._datenlink.style.visibility=me._datenlink.ggVisible?'inherit':'hidden';
					me._datenlink.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._datenlink.style.opacity == 0.0) { me._datenlink.style.visibility="hidden"; } }, 1005);
					me._datenlink.style.opacity=0;
				}
			}
		}
		me._datenlink.onclick=function (e) {
			player.setVariableValue('LinkMenu', true);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('SENSI', false);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility='hidden';
			me._sensimenu.ggVisible=false;
		}
		me._datenlink.onmouseover=function (e) {
			me._datenlink__img.style.visibility='hidden';
			me._datenlink__imgo.style.visibility='inherit';
		}
		me._datenlink.onmouseout=function (e) {
			me._datenlink__img.style.visibility='inherit';
			me._datenlink__imgo.style.visibility='hidden';
		}
		me._datenlink.ggUpdatePosition=function (useTransition) {
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
		me._sensimenu.appendChild(me._datenlink);
		el=me._forschungsmenuzeigen=document.createElement('div');
		els=me._forschungsmenuzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungsmenuzeigen__img.setAttribute('src',basePath + 'images/forschungsmenuzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._forschungsmenuzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._forschungsmenuzeigen__imgo.setAttribute('src',basePath + 'images/forschungsmenuzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ForschungsmenuZeigen";
		el.ggDx=-77;
		el.ggDy=42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsmenuzeigen.ggIsActive=function() {
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
		me._forschungsmenuzeigen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._forschungsmenuzeigen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._forschungsmenuzeigen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._forschungsmenuzeigen.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._forschungsmenuzeigen.ggCurrentLogicStateVisible == 0) {
					me._forschungsmenuzeigen.style.visibility="hidden";
					me._forschungsmenuzeigen.ggVisible=false;
				}
				else {
					me._forschungsmenuzeigen.style.visibility=(Number(me._forschungsmenuzeigen.style.opacity)>0||!me._forschungsmenuzeigen.style.opacity)?'inherit':'hidden';
					me._forschungsmenuzeigen.ggVisible=true;
				}
			}
		}
		me._forschungsmenuzeigen.logicBlock_alpha = function() {
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
			if (me._forschungsmenuzeigen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._forschungsmenuzeigen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._forschungsmenuzeigen.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._forschungsmenuzeigen.ggCurrentLogicStateAlpha == 0) {
					me._forschungsmenuzeigen.style.visibility=me._forschungsmenuzeigen.ggVisible?'inherit':'hidden';
					me._forschungsmenuzeigen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._forschungsmenuzeigen.style.opacity == 0.0) { me._forschungsmenuzeigen.style.visibility="hidden"; } }, 1005);
					me._forschungsmenuzeigen.style.opacity=0;
				}
			}
		}
		me._forschungsmenuzeigen.onclick=function (e) {
			player.setVariableValue('Forschungsmenu', true);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility='hidden';
			me._sensimenu.ggVisible=false;
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('SENSI', false);
		}
		me._forschungsmenuzeigen.onmouseover=function (e) {
			me._forschungsmenuzeigen__img.style.visibility='hidden';
			me._forschungsmenuzeigen__imgo.style.visibility='inherit';
		}
		me._forschungsmenuzeigen.onmouseout=function (e) {
			me._forschungsmenuzeigen__img.style.visibility='inherit';
			me._forschungsmenuzeigen__imgo.style.visibility='hidden';
		}
		me._forschungsmenuzeigen.ggUpdatePosition=function (useTransition) {
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
		me._sensimenu.appendChild(me._forschungsmenuzeigen);
		el=me._statusleisteordner=document.createElement('div');
		el.ggId="StatusleisteOrdner";
		el.ggDx=-26;
		el.ggDy=-232;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 190px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 337px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._statusleisteordner.ggIsActive=function() {
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._forschungspunktebutton=document.createElement('div');
		els=me._forschungspunktebutton__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungspunktebutton__img.setAttribute('src',basePath + 'images/forschungspunktebutton.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ForschungspunkteButton";
		el.ggDx=-120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
		el.ggDx=-121;
		el.ggDy=-9;
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
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 50px;';
		hs+='height: 52px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(77,77,77,1);';
		hs+='font-size: 30px;';
		hs+='font-weight: 300;';
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
		el.ggDx=-120;
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
		me._st0__img.setAttribute('src',basePath + 'images/st0.svg');
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
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
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
		me._st1__img.setAttribute('src',basePath + 'images/st1.svg');
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
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
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
				((player.getVariableValue('Station') == 1))
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
		el=me._st2=document.createElement('div');
		els=me._st2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._st2__img.setAttribute('src',basePath + 'images/st2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="st2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._st2.ggIsActive=function() {
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
		me._st2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Station') == 2))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._st2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._st2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._st2.style[domTransition]='opacity 0s';
				if (me._st2.ggCurrentLogicStateAlpha == 0) {
					me._st2.style.visibility=me._st2.ggVisible?'inherit':'hidden';
					me._st2.style.opacity=1;
				}
				else {
					me._st2.style.visibility="hidden";
					me._st2.style.opacity=0;
				}
			}
		}
		me._st2.ggUpdatePosition=function (useTransition) {
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
		me._aktuele_station.appendChild(me._st2);
		me._statusleisteordner.appendChild(me._aktuele_station);
		el=me._statusleiste=document.createElement('div');
		els=me._statusleiste__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._statusleiste__img.setAttribute('src',basePath + 'images/statusleiste.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Statusleiste";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 303px;';
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
		}
		me._statusleisteordner.appendChild(me._statusleiste);
		el=me._neue_nachrichtauftrag=document.createElement('div');
		els=me._neue_nachrichtauftrag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Neue Nachricht\/Auftrag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Neue Nachricht\/Aufttrag";
		el.appendChild(els);
		me._neue_nachrichtauftrag.ggIsActive=function() {
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
		me._neue_nachrichtauftrag.ggUpdatePosition=function (useTransition) {
		}
		me._statusleisteordner.appendChild(me._neue_nachrichtauftrag);
		me._sensimenu.appendChild(me._statusleisteordner);
		me.divSkin.appendChild(me._sensimenu);
		el=me._linkmenu=document.createElement('div');
		el.ggId="LinkMenu";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 600px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._linkmenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('LinkMenu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._linkmenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._linkmenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._linkmenu.style[domTransition]='opacity 600ms ease 0ms';
				if (me._linkmenu.ggCurrentLogicStateVisible == 0) {
					me._linkmenu.style.visibility="hidden";
					me._linkmenu.ggVisible=false;
				}
				else {
					me._linkmenu.style.visibility=(Number(me._linkmenu.style.opacity)>0||!me._linkmenu.style.opacity)?'inherit':'hidden';
					me._linkmenu.ggVisible=true;
				}
			}
		}
		me._linkmenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('LinkMenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._linkmenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._linkmenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._linkmenu.style[domTransition]='opacity 600ms ease 0ms';
				if (me._linkmenu.ggCurrentLogicStateAlpha == 0) {
					me._linkmenu.style.visibility=me._linkmenu.ggVisible?'inherit':'hidden';
					me._linkmenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._linkmenu.style.opacity == 0.0) { me._linkmenu.style.visibility="hidden"; } }, 605);
					me._linkmenu.style.opacity=0;
				}
			}
		}
		me._linkmenu.ggUpdatePosition=function (useTransition) {
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
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-1;
		el.ggDy=148;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 229px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
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
		me._svg_3.ggUpdatePosition=function (useTransition) {
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
		me._linkmenu.appendChild(me._svg_3);
		el=me._datenschlieen=document.createElement('div');
		els=me._datenschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._datenschlieen__img.setAttribute('src',basePath + 'images/datenschlieen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._datenschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._datenschlieen__imgo.setAttribute('src',basePath + 'images/datenschlieen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Datenschlie\xdfen";
		el.ggDx=0;
		el.ggDy=258;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
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
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility=(Number(me._sensimenu.style.opacity)>0||!me._sensimenu.style.opacity)?'inherit':'hidden';
			me._sensimenu.ggVisible=true;
			player.setVariableValue('LinkMenu', false);
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
		me._linkmenu.appendChild(me._datenschlieen);
		el=me._linkfeldoben=document.createElement('div');
		els=me._linkfeldoben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._linkfeldoben__img.setAttribute('src',basePath + 'images/linkfeldoben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="LinkFeldOben";
		el.ggDx=0;
		el.ggDy=-121;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 291px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkfeldoben.ggIsActive=function() {
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
		me._linkfeldoben.ggUpdatePosition=function (useTransition) {
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
		me._linkmenu.appendChild(me._linkfeldoben);
		el=me._stationen=document.createElement('div');
		el.ggId="Stationen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 367px;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stationen.ggIsActive=function() {
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
		me._stationen.ggUpdatePosition=function (useTransition) {
		}
		el=me._station0offen=document.createElement('div');
		els=me._station0offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station0offen__img.setAttribute('src',basePath + 'images/station0offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station0offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station0offen.ggIsActive=function() {
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
		me._station0offen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Station') == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._station0offen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._station0offen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._station0offen.style[domTransition]='';
				if (me._station0offen.ggCurrentLogicStateVisible == 0) {
					me._station0offen.style.visibility=(Number(me._station0offen.style.opacity)>0||!me._station0offen.style.opacity)?'inherit':'hidden';
					me._station0offen.ggVisible=true;
				}
				else {
					me._station0offen.style.visibility="hidden";
					me._station0offen.ggVisible=false;
				}
			}
		}
		me._station0offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station0offen);
		el=me._station1offen=document.createElement('div');
		els=me._station1offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1offen__img.setAttribute('src',basePath + 'images/station1offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station1offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1offen.ggIsActive=function() {
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
		me._station1offen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Station') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._station1offen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._station1offen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._station1offen.style[domTransition]='';
				if (me._station1offen.ggCurrentLogicStateVisible == 0) {
					me._station1offen.style.visibility=(Number(me._station1offen.style.opacity)>0||!me._station1offen.style.opacity)?'inherit':'hidden';
					me._station1offen.ggVisible=true;
				}
				else {
					me._station1offen.style.visibility="hidden";
					me._station1offen.ggVisible=false;
				}
			}
		}
		me._station1offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station1offen);
		el=me._station2offen=document.createElement('div');
		els=me._station2offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2offen__img.setAttribute('src',basePath + 'images/station2offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station2offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2offen.ggIsActive=function() {
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
		me._station2offen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Station') == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._station2offen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._station2offen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._station2offen.style[domTransition]='';
				if (me._station2offen.ggCurrentLogicStateVisible == 0) {
					me._station2offen.style.visibility=(Number(me._station2offen.style.opacity)>0||!me._station2offen.style.opacity)?'inherit':'hidden';
					me._station2offen.ggVisible=true;
				}
				else {
					me._station2offen.style.visibility="hidden";
					me._station2offen.ggVisible=false;
				}
			}
		}
		me._station2offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station2offen);
		el=me._station3offen=document.createElement('div');
		els=me._station3offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3offen__img.setAttribute('src',basePath + 'images/station3offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station3offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3offen.ggIsActive=function() {
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
		me._station3offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station3offen);
		el=me._station4offen=document.createElement('div');
		els=me._station4offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4offen__img.setAttribute('src',basePath + 'images/station4offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station4offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4offen.ggIsActive=function() {
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
		me._station4offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station4offen);
		el=me._station5offen=document.createElement('div');
		els=me._station5offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5offen__img.setAttribute('src',basePath + 'images/station5offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station5offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5offen.ggIsActive=function() {
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
		me._station5offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station5offen);
		el=me._station6offen=document.createElement('div');
		els=me._station6offen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station6offen__img.setAttribute('src',basePath + 'images/station6offen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station6offen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station6offen.ggIsActive=function() {
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
		me._station6offen.ggUpdatePosition=function (useTransition) {
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
		me._stationen.appendChild(me._station6offen);
		me._linkmenu.appendChild(me._stationen);
		el=me._schloss=document.createElement('div');
		el.ggId="Schloss";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 101px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 113px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss.ggIsActive=function() {
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
		me._schloss.ggUpdatePosition=function (useTransition) {
		}
		el=me._schlosszu=document.createElement('div');
		els=me._schlosszu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schlosszu__img.setAttribute('src',basePath + 'images/schlosszu.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SchlossZu";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schlosszu.ggIsActive=function() {
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
		me._schlosszu.ggUpdatePosition=function (useTransition) {
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
		me._schloss.appendChild(me._schlosszu);
		el=me._schlossstation0=document.createElement('div');
		els=me._schlossstation0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schlossstation0__img.setAttribute('src',basePath + 'images/schlossstation0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schlossstation0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schlossstation0__imgo.setAttribute('src',basePath + 'images/schlossstation0__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SchlossStation0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schlossstation0.ggIsActive=function() {
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
		me._schlossstation0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Schloss6') == true)) && 
				((player.getVariableValue('Schloss1') == true)) && 
				((player.getVariableValue('Schloss3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._schlossstation0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._schlossstation0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._schlossstation0.style[domTransition]='opacity 0s';
				if (me._schlossstation0.ggCurrentLogicStateAlpha == 0) {
					me._schlossstation0.style.visibility=me._schlossstation0.ggVisible?'inherit':'hidden';
					me._schlossstation0.style.opacity=1;
				}
				else {
					me._schlossstation0.style.visibility="hidden";
					me._schlossstation0.style.opacity=0;
				}
			}
		}
		me._schlossstation0.onclick=function (e) {
			player.setVariableValue('Station', Number("0"));
			player.setVariableValue('Schloss1', false);
			player.setVariableValue('Schloss2', false);
			player.setVariableValue('Schloss3', false);
			player.setVariableValue('Schloss4', false);
			player.setVariableValue('Schloss5', false);
			player.setVariableValue('Schloss6', false);
			me._schloss11.style[domTransition]='none';
			me._schloss11.style.visibility='hidden';
			me._schloss11.ggVisible=false;
			me._schloss22.style[domTransition]='none';
			me._schloss22.style.visibility='hidden';
			me._schloss22.ggVisible=false;
			me._schloss32.style[domTransition]='none';
			me._schloss32.style.visibility='hidden';
			me._schloss32.ggVisible=false;
			me._schloss42.style[domTransition]='none';
			me._schloss42.style.visibility='hidden';
			me._schloss42.ggVisible=false;
			me._schloss52.style[domTransition]='none';
			me._schloss52.style.visibility='hidden';
			me._schloss52.ggVisible=false;
			me._schloss62.style[domTransition]='none';
			me._schloss62.style.visibility='hidden';
			me._schloss62.ggVisible=false;
		}
		me._schlossstation0.onmouseover=function (e) {
			me._schlossstation0__img.style.visibility='hidden';
			me._schlossstation0__imgo.style.visibility='inherit';
		}
		me._schlossstation0.onmouseout=function (e) {
			me._schlossstation0__img.style.visibility='inherit';
			me._schlossstation0__imgo.style.visibility='hidden';
		}
		me._schlossstation0.ggUpdatePosition=function (useTransition) {
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
		me._schloss.appendChild(me._schlossstation0);
		el=me._schlossstation1=document.createElement('div');
		els=me._schlossstation1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schlossstation1__img.setAttribute('src',basePath + 'images/schlossstation1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schlossstation1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schlossstation1__imgo.setAttribute('src',basePath + 'images/schlossstation1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SchlossStation1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schlossstation1.ggIsActive=function() {
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
		me._schlossstation1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Schloss4') == true)) && 
				((player.getVariableValue('Schloss2') == true)) && 
				((player.getVariableValue('Schloss5') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._schlossstation1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._schlossstation1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._schlossstation1.style[domTransition]='opacity 0s';
				if (me._schlossstation1.ggCurrentLogicStateAlpha == 0) {
					me._schlossstation1.style.visibility=me._schlossstation1.ggVisible?'inherit':'hidden';
					me._schlossstation1.style.opacity=1;
				}
				else {
					me._schlossstation1.style.visibility="hidden";
					me._schlossstation1.style.opacity=0;
				}
			}
		}
		me._schlossstation1.onclick=function (e) {
			player.setVariableValue('Station', Number("1"));
			player.setVariableValue('Schloss1', false);
			player.setVariableValue('Schloss2', false);
			player.setVariableValue('Schloss3', false);
			player.setVariableValue('Schloss4', false);
			player.setVariableValue('Schloss5', false);
			player.setVariableValue('Schloss6', false);
			me._schloss11.style[domTransition]='none';
			me._schloss11.style.visibility='hidden';
			me._schloss11.ggVisible=false;
			me._schloss22.style[domTransition]='none';
			me._schloss22.style.visibility='hidden';
			me._schloss22.ggVisible=false;
			me._schloss32.style[domTransition]='none';
			me._schloss32.style.visibility='hidden';
			me._schloss32.ggVisible=false;
			me._schloss42.style[domTransition]='none';
			me._schloss42.style.visibility='hidden';
			me._schloss42.ggVisible=false;
			me._schloss52.style[domTransition]='none';
			me._schloss52.style.visibility='hidden';
			me._schloss52.ggVisible=false;
			me._schloss62.style[domTransition]='none';
			me._schloss62.style.visibility='hidden';
			me._schloss62.ggVisible=false;
		}
		me._schlossstation1.onmouseover=function (e) {
			me._schlossstation1__img.style.visibility='hidden';
			me._schlossstation1__imgo.style.visibility='inherit';
		}
		me._schlossstation1.onmouseout=function (e) {
			me._schlossstation1__img.style.visibility='inherit';
			me._schlossstation1__imgo.style.visibility='hidden';
		}
		me._schlossstation1.ggUpdatePosition=function (useTransition) {
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
		me._schloss.appendChild(me._schlossstation1);
		el=me._schlossstation2=document.createElement('div');
		els=me._schlossstation2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schlossstation2__img.setAttribute('src',basePath + 'images/schlossstation2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schlossstation2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schlossstation2__imgo.setAttribute('src',basePath + 'images/schlossstation2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="SchlossStation2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schlossstation2.ggIsActive=function() {
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
		me._schlossstation2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Schloss1') == true)) && 
				((player.getVariableValue('Schloss2') == true)) && 
				((player.getVariableValue('Schloss3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._schlossstation2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._schlossstation2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._schlossstation2.style[domTransition]='opacity 0s';
				if (me._schlossstation2.ggCurrentLogicStateAlpha == 0) {
					me._schlossstation2.style.visibility=me._schlossstation2.ggVisible?'inherit':'hidden';
					me._schlossstation2.style.opacity=1;
				}
				else {
					me._schlossstation2.style.visibility="hidden";
					me._schlossstation2.style.opacity=0;
				}
			}
		}
		me._schlossstation2.onclick=function (e) {
			player.setVariableValue('Station', Number("2"));
			player.setVariableValue('Schloss1', false);
			player.setVariableValue('Schloss2', false);
			player.setVariableValue('Schloss3', false);
			player.setVariableValue('Schloss4', false);
			player.setVariableValue('Schloss5', false);
			player.setVariableValue('Schloss6', false);
			me._schloss11.style[domTransition]='none';
			me._schloss11.style.visibility='hidden';
			me._schloss11.ggVisible=false;
			me._schloss22.style[domTransition]='none';
			me._schloss22.style.visibility='hidden';
			me._schloss22.ggVisible=false;
			me._schloss32.style[domTransition]='none';
			me._schloss32.style.visibility='hidden';
			me._schloss32.ggVisible=false;
			me._schloss42.style[domTransition]='none';
			me._schloss42.style.visibility='hidden';
			me._schloss42.ggVisible=false;
			me._schloss52.style[domTransition]='none';
			me._schloss52.style.visibility='hidden';
			me._schloss52.ggVisible=false;
			me._schloss62.style[domTransition]='none';
			me._schloss62.style.visibility='hidden';
			me._schloss62.ggVisible=false;
		}
		me._schlossstation2.onmouseover=function (e) {
			me._schlossstation2__img.style.visibility='hidden';
			me._schlossstation2__imgo.style.visibility='inherit';
		}
		me._schlossstation2.onmouseout=function (e) {
			me._schlossstation2__img.style.visibility='inherit';
			me._schlossstation2__imgo.style.visibility='hidden';
		}
		me._schlossstation2.ggUpdatePosition=function (useTransition) {
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
		me._schloss.appendChild(me._schlossstation2);
		me._linkmenu.appendChild(me._schloss);
		el=me._zahlen=document.createElement('div');
		el.ggId="Zahlen";
		el.ggDx=0;
		el.ggDy=-109;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 237px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 234px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zahlen.ggIsActive=function() {
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
		me._zahlen.ggUpdatePosition=function (useTransition) {
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
		el=me._schloss1=document.createElement('div');
		els=me._schloss1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss1__img.setAttribute('src',basePath + 'images/schloss1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss1__imgo.setAttribute('src',basePath + 'images/schloss1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._schloss1__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._schloss1__imga.setAttribute('src',basePath + 'images/schloss1__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Schloss1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss1.ggIsActive=function() {
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
		me._schloss1.onclick=function (e) {
			player.setVariableValue('Schloss1', true);
			me._schloss1.style[domTransition]='none';
			me._schloss1.style.visibility=(Number(me._schloss1.style.opacity)>0||!me._schloss1.style.opacity)?'inherit':'hidden';
			me._schloss1.ggVisible=true;
		}
		me._schloss1.onmouseover=function (e) {
			me._schloss1__img.style.visibility='hidden';
			me._schloss1__imgo.style.visibility='inherit';
		}
		me._schloss1.onmouseout=function (e) {
			me._schloss1__img.style.visibility='inherit';
			me._schloss1__imgo.style.visibility='hidden';
			me._schloss1__imga.style.visibility='hidden';
		}
		me._schloss1.onmousedown=function (e) {
			me._schloss1__imga.style.visibility='inherit';
			me._schloss1__imgo.style.visibility='hidden';
		}
		me._schloss1.onmouseup=function (e) {
			me._schloss1__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._schloss1__img.style.visibility='inherit';
			} else {
				me._schloss1__imgo.style.visibility='inherit';
			}
		}
		me._schloss1.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss1);
		el=me._schloss2=document.createElement('div');
		els=me._schloss2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss2__img.setAttribute('src',basePath + 'images/schloss2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss2__imgo.setAttribute('src',basePath + 'images/schloss2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._schloss2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._schloss2__imga.setAttribute('src',basePath + 'images/schloss2__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Schloss2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss2.ggIsActive=function() {
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
		me._schloss2.onclick=function (e) {
			me._schloss22.style[domTransition]='none';
			me._schloss22.style.visibility=(Number(me._schloss22.style.opacity)>0||!me._schloss22.style.opacity)?'inherit':'hidden';
			me._schloss22.ggVisible=true;
		}
		me._schloss2.onmouseover=function (e) {
			me._schloss2__img.style.visibility='hidden';
			me._schloss2__imgo.style.visibility='inherit';
		}
		me._schloss2.onmouseout=function (e) {
			me._schloss2__img.style.visibility='inherit';
			me._schloss2__imgo.style.visibility='hidden';
			me._schloss2__imga.style.visibility='hidden';
			me.elementMouseDown['schloss2']=false;
		}
		me._schloss2.onmousedown=function (e) {
			me._schloss2__imga.style.visibility='inherit';
			me._schloss2__imgo.style.visibility='hidden';
			me.elementMouseDown['schloss2']=true;
		}
		me._schloss2.onmouseup=function (e) {
			me._schloss2__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._schloss2__img.style.visibility='inherit';
			} else {
				me._schloss2__imgo.style.visibility='inherit';
			}
			me.elementMouseDown['schloss2']=false;
		}
		me._schloss2.ontouchend=function (e) {
			me.elementMouseDown['schloss2']=false;
		}
		me._schloss2.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss2);
		el=me._schloss3=document.createElement('div');
		els=me._schloss3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss3__img.setAttribute('src',basePath + 'images/schloss3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss3__imgo.setAttribute('src',basePath + 'images/schloss3__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._schloss3__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._schloss3__imga.setAttribute('src',basePath + 'images/schloss3__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Schloss3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss3.ggIsActive=function() {
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
		me._schloss3.onclick=function (e) {
			player.setVariableValue('Schloss3', true);
			me._schloss32.style[domTransition]='none';
			me._schloss32.style.visibility=(Number(me._schloss32.style.opacity)>0||!me._schloss32.style.opacity)?'inherit':'hidden';
			me._schloss32.ggVisible=true;
		}
		me._schloss3.onmouseover=function (e) {
			me._schloss3__img.style.visibility='hidden';
			me._schloss3__imgo.style.visibility='inherit';
		}
		me._schloss3.onmouseout=function (e) {
			me._schloss3__img.style.visibility='inherit';
			me._schloss3__imgo.style.visibility='hidden';
			me._schloss3__imga.style.visibility='hidden';
		}
		me._schloss3.onmousedown=function (e) {
			me._schloss3__imga.style.visibility='inherit';
			me._schloss3__imgo.style.visibility='hidden';
		}
		me._schloss3.onmouseup=function (e) {
			me._schloss3__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._schloss3__img.style.visibility='inherit';
			} else {
				me._schloss3__imgo.style.visibility='inherit';
			}
		}
		me._schloss3.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss3);
		el=me._schloss4=document.createElement('div');
		els=me._schloss4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss4__img.setAttribute('src',basePath + 'images/schloss4.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss4__imgo.setAttribute('src',basePath + 'images/schloss4__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._schloss4__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._schloss4__imga.setAttribute('src',basePath + 'images/schloss4__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Schloss4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 123px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss4.ggIsActive=function() {
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
		me._schloss4.onclick=function (e) {
			me._schloss42.style[domTransition]='none';
			me._schloss42.style.visibility=(Number(me._schloss42.style.opacity)>0||!me._schloss42.style.opacity)?'inherit':'hidden';
			me._schloss42.ggVisible=true;
		}
		me._schloss4.onmouseover=function (e) {
			me._schloss4__img.style.visibility='hidden';
			me._schloss4__imgo.style.visibility='inherit';
		}
		me._schloss4.onmouseout=function (e) {
			me._schloss4__img.style.visibility='inherit';
			me._schloss4__imgo.style.visibility='hidden';
			me._schloss4__imga.style.visibility='hidden';
			me.elementMouseDown['schloss4']=false;
		}
		me._schloss4.onmousedown=function (e) {
			me._schloss4__imga.style.visibility='inherit';
			me._schloss4__imgo.style.visibility='hidden';
			me.elementMouseDown['schloss4']=true;
		}
		me._schloss4.onmouseup=function (e) {
			me._schloss4__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._schloss4__img.style.visibility='inherit';
			} else {
				me._schloss4__imgo.style.visibility='inherit';
			}
			me.elementMouseDown['schloss4']=false;
		}
		me._schloss4.ontouchend=function (e) {
			me.elementMouseDown['schloss4']=false;
		}
		me._schloss4.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss4);
		el=me._schloss5=document.createElement('div');
		els=me._schloss5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss5__img.setAttribute('src',basePath + 'images/schloss5.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss5__imgo.setAttribute('src',basePath + 'images/schloss5__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._schloss5__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._schloss5__imga.setAttribute('src',basePath + 'images/schloss5__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Schloss5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss5.ggIsActive=function() {
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
		me._schloss5.onclick=function (e) {
			me._schloss52.style[domTransition]='none';
			me._schloss52.style.visibility=(Number(me._schloss52.style.opacity)>0||!me._schloss52.style.opacity)?'inherit':'hidden';
			me._schloss52.ggVisible=true;
		}
		me._schloss5.onmouseover=function (e) {
			me._schloss5__img.style.visibility='hidden';
			me._schloss5__imgo.style.visibility='inherit';
		}
		me._schloss5.onmouseout=function (e) {
			me._schloss5__img.style.visibility='inherit';
			me._schloss5__imgo.style.visibility='hidden';
			me._schloss5__imga.style.visibility='hidden';
			me.elementMouseDown['schloss5']=false;
		}
		me._schloss5.onmousedown=function (e) {
			me._schloss5__imga.style.visibility='inherit';
			me._schloss5__imgo.style.visibility='hidden';
			me.elementMouseDown['schloss5']=true;
		}
		me._schloss5.onmouseup=function (e) {
			me._schloss5__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._schloss5__img.style.visibility='inherit';
			} else {
				me._schloss5__imgo.style.visibility='inherit';
			}
			me.elementMouseDown['schloss5']=false;
		}
		me._schloss5.ontouchend=function (e) {
			me.elementMouseDown['schloss5']=false;
		}
		me._schloss5.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss5);
		el=me._schloss6=document.createElement('div');
		els=me._schloss6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss6__img.setAttribute('src',basePath + 'images/schloss6.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._schloss6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._schloss6__imgo.setAttribute('src',basePath + 'images/schloss6__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Schloss6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss6.ggIsActive=function() {
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
		me._schloss6.onclick=function (e) {
			player.setVariableValue('Schloss6', true);
			me._schloss62.style[domTransition]='none';
			me._schloss62.style.visibility=(Number(me._schloss62.style.opacity)>0||!me._schloss62.style.opacity)?'inherit':'hidden';
			me._schloss62.ggVisible=true;
		}
		me._schloss6.onmouseover=function (e) {
			me._schloss6__img.style.visibility='hidden';
			me._schloss6__imgo.style.visibility='inherit';
		}
		me._schloss6.onmouseout=function (e) {
			me._schloss6__img.style.visibility='inherit';
			me._schloss6__imgo.style.visibility='hidden';
		}
		me._schloss6.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss6);
		el=me._schloss62=document.createElement('div');
		els=me._schloss62__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss62__img.setAttribute('src',basePath + 'images/schloss62.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss62";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss62.ggIsActive=function() {
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
		me._schloss62.onclick=function (e) {
			player.setVariableValue('Schloss6', false);
			me._schloss62.style[domTransition]='none';
			me._schloss62.style.visibility='hidden';
			me._schloss62.ggVisible=false;
		}
		me._schloss62.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss62);
		el=me._schloss52=document.createElement('div');
		els=me._schloss52__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss52__img.setAttribute('src',basePath + 'images/schloss52.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss52";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 82px;';
		hs+='position : absolute;';
		hs+='top : 161px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss52.ggIsActive=function() {
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
		me._schloss52.onclick=function (e) {
			player.setVariableValue('Schloss5', false);
			me._schloss52.style[domTransition]='none';
			me._schloss52.style.visibility='hidden';
			me._schloss52.ggVisible=false;
		}
		me._schloss52.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss52);
		el=me._schloss42=document.createElement('div');
		els=me._schloss42__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss42__img.setAttribute('src',basePath + 'images/schloss42.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss42.ggIsActive=function() {
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
		me._schloss42.onclick=function (e) {
			player.setVariableValue('Schloss4', false);
			me._schloss42.style[domTransition]='none';
			me._schloss42.style.visibility='hidden';
			me._schloss42.ggVisible=false;
		}
		me._schloss42.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss42);
		el=me._schloss32=document.createElement('div');
		els=me._schloss32__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss32__img.setAttribute('src',basePath + 'images/schloss32.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss32";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss32.ggIsActive=function() {
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
		me._schloss32.onclick=function (e) {
			player.setVariableValue('Schloss3', false);
			me._schloss32.style[domTransition]='none';
			me._schloss32.style.visibility='hidden';
			me._schloss32.ggVisible=false;
		}
		me._schloss32.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss32);
		el=me._schloss22=document.createElement('div');
		els=me._schloss22__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss22__img.setAttribute('src',basePath + 'images/schloss22.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss22.ggIsActive=function() {
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
		me._schloss22.onclick=function (e) {
			player.setVariableValue('Schloss2', false);
			me._schloss22.style[domTransition]='none';
			me._schloss22.style.visibility='hidden';
			me._schloss22.ggVisible=false;
		}
		me._schloss22.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss22);
		el=me._schloss11=document.createElement('div');
		els=me._schloss11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._schloss11__img.setAttribute('src',basePath + 'images/schloss11.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Schloss11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 74px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._schloss11.ggIsActive=function() {
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
		me._schloss11.onclick=function (e) {
			player.setVariableValue('Schloss1', false);
			me._schloss11.style[domTransition]='none';
			me._schloss11.style.visibility='hidden';
			me._schloss11.ggVisible=false;
		}
		me._schloss11.ggUpdatePosition=function (useTransition) {
		}
		me._zahlen.appendChild(me._schloss11);
		me._linkmenu.appendChild(me._zahlen);
		el=me._linkmenuoben=document.createElement('div');
		els=me._linkmenuoben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._linkmenuoben__img.setAttribute('src',basePath + 'images/linkmenuoben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="LinkMenuOben";
		el.ggDx=0;
		el.ggDy=-263;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkmenuoben.ggIsActive=function() {
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
		me._linkmenuoben.ggUpdatePosition=function (useTransition) {
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
		me._linkmenu.appendChild(me._linkmenuoben);
		me.divSkin.appendChild(me._linkmenu);
		el=me._forschungsmenu=document.createElement('div');
		el.ggId="ForschungsMenu";
		el.ggDx=0;
		el.ggDy=67;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._forschungsmenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Forschungsmenu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._forschungsmenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._forschungsmenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._forschungsmenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._forschungsmenu.ggCurrentLogicStateVisible == 0) {
					me._forschungsmenu.style.visibility="hidden";
					me._forschungsmenu.ggVisible=false;
				}
				else {
					me._forschungsmenu.style.visibility=(Number(me._forschungsmenu.style.opacity)>0||!me._forschungsmenu.style.opacity)?'inherit':'hidden';
					me._forschungsmenu.ggVisible=true;
				}
			}
		}
		me._forschungsmenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Forschungsmenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._forschungsmenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._forschungsmenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._forschungsmenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._forschungsmenu.ggCurrentLogicStateAlpha == 0) {
					me._forschungsmenu.style.visibility=me._forschungsmenu.ggVisible?'inherit':'hidden';
					me._forschungsmenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._forschungsmenu.style.opacity == 0.0) { me._forschungsmenu.style.visibility="hidden"; } }, 705);
					me._forschungsmenu.style.opacity=0;
				}
			}
		}
		me._forschungsmenu.ggUpdatePosition=function (useTransition) {
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
		el=me._forschungsfeld=document.createElement('div');
		els=me._forschungsfeld__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungsfeld__img.setAttribute('src',basePath + 'images/forschungsfeld.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ForschungsFeld";
		el.ggDx=0;
		el.ggDy=78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 236px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsfeld.ggIsActive=function() {
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
		me._forschungsfeld.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._forschungsfeld);
		el=me._fsschlieen=document.createElement('div');
		els=me._fsschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._fsschlieen__img.setAttribute('src',basePath + 'images/fsschlieen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fsschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._fsschlieen__imgo.setAttribute('src',basePath + 'images/fsschlieen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="FSschlie\xdfen";
		el.ggDx=0;
		el.ggDy=192;
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
			player.setVariableValue('Forschungsmenu', false);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility=(Number(me._sensimenu.style.opacity)>0||!me._sensimenu.style.opacity)?'inherit':'hidden';
			me._sensimenu.ggVisible=true;
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
		me._forschungsmenu.appendChild(me._fsschlieen);
		el=me._forschung=document.createElement('div');
		el.ggId="Forschung";
		el.ggDx=5;
		el.ggDy=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 247px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschung.ggIsActive=function() {
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
		me._forschung.ggUpdatePosition=function (useTransition) {
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
		me._station0__img.setAttribute('src',basePath + 'images/station0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station0__imgo.setAttribute('src',basePath + 'images/station0__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station0";
		el.ggDx=-5;
		el.ggDy=-41;
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
		me._station0.onclick=function (e) {
			me._station0oben.style[domTransition]='none';
			me._station0oben.style.visibility=(Number(me._station0oben.style.opacity)>0||!me._station0oben.style.opacity)?'inherit':'hidden';
			me._station0oben.ggVisible=true;
			me._station2oben.style[domTransition]='none';
			me._station2oben.style.visibility='hidden';
			me._station2oben.ggVisible=false;
			me._station1oben.style[domTransition]='none';
			me._station1oben.style.visibility='hidden';
			me._station1oben.ggVisible=false;
			me._station1gedruckt.style[domTransition]='none';
			me._station1gedruckt.style.visibility='hidden';
			me._station1gedruckt.ggVisible=false;
			me._station2gedruckt.style[domTransition]='none';
			me._station2gedruckt.style.visibility='hidden';
			me._station2gedruckt.ggVisible=false;
			me._station0gedruckt.style[domTransition]='none';
			me._station0gedruckt.style.visibility=(Number(me._station0gedruckt.style.opacity)>0||!me._station0gedruckt.style.opacity)?'inherit':'hidden';
			me._station0gedruckt.ggVisible=true;
			me._station2up1.style[domTransition]='none';
			me._station2up1.style.visibility='hidden';
			me._station2up1.ggVisible=false;
			me._station2up2.style[domTransition]='none';
			me._station2up2.style.visibility='hidden';
			me._station2up2.ggVisible=false;
			me._station2q.style[domTransition]='none';
			me._station2q.style.visibility='hidden';
			me._station2q.ggVisible=false;
			me._station1up1.style[domTransition]='none';
			me._station1up1.style.visibility='hidden';
			me._station1up1.ggVisible=false;
			me._station1up2.style[domTransition]='none';
			me._station1up2.style.visibility='hidden';
			me._station1up2.ggVisible=false;
			me._station1q.style[domTransition]='none';
			me._station1q.style.visibility='hidden';
			me._station1q.ggVisible=false;
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
		el=me._station0gedruckt=document.createElement('div');
		els=me._station0gedruckt__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station0gedruckt__img.setAttribute('src',basePath + 'images/station0gedruckt.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station0gedruckt";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station0gedruckt.ggIsActive=function() {
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
		me._station0gedruckt.ggUpdatePosition=function (useTransition) {
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
		me._station0.appendChild(me._station0gedruckt);
		me._forschung.appendChild(me._station0);
		el=me._station1up1=document.createElement('div');
		els=me._station1up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1up1__img.setAttribute('src',basePath + 'images/station1up1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1up1__imgo.setAttribute('src',basePath + 'images/station1up1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1UP1";
		el.ggDx=-73;
		el.ggDy=-38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
					me._station1up1.style.opacity=1;
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
		me._forschung.appendChild(me._station1up1);
		el=me._station1up2=document.createElement('div');
		els=me._station1up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1up2__img.setAttribute('src',basePath + 'images/station1up2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1up2__imgo.setAttribute('src',basePath + 'images/station1up2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1UP2";
		el.ggDx=-48;
		el.ggDy=-53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station1up2);
		el=me._station1q=document.createElement('div');
		els=me._station1q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1q__img.setAttribute('src',basePath + 'images/station1q.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1q__imgo.setAttribute('src',basePath + 'images/station1q__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1Q";
		el.ggDx=-72;
		el.ggDy=-64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station1q);
		el=me._station1=document.createElement('div');
		els=me._station1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1__img.setAttribute('src',basePath + 'images/station1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1__imgo.setAttribute('src',basePath + 'images/station1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1";
		el.ggDx=-44;
		el.ggDy=-17;
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
					me._station1.style.opacity=1;
				}
			}
		}
		me._station1.onclick=function (e) {
			me._station1oben.style[domTransition]='none';
			me._station1oben.style.visibility=(Number(me._station1oben.style.opacity)>0||!me._station1oben.style.opacity)?'inherit':'hidden';
			me._station1oben.ggVisible=true;
			me._station2oben.style[domTransition]='none';
			me._station2oben.style.visibility='hidden';
			me._station2oben.ggVisible=false;
			me._station0oben.style[domTransition]='none';
			me._station0oben.style.visibility='hidden';
			me._station0oben.ggVisible=false;
			me._station0gedruckt.style[domTransition]='none';
			me._station0gedruckt.style.visibility='hidden';
			me._station0gedruckt.ggVisible=false;
			me._station2gedruckt.style[domTransition]='none';
			me._station2gedruckt.style.visibility='hidden';
			me._station2gedruckt.ggVisible=false;
			me._station1gedruckt.style[domTransition]='none';
			me._station1gedruckt.style.visibility=(Number(me._station1gedruckt.style.opacity)>0||!me._station1gedruckt.style.opacity)?'inherit':'hidden';
			me._station1gedruckt.ggVisible=true;
			me._station1up1.style[domTransition]='none';
			me._station1up1.style.visibility=(Number(me._station1up1.style.opacity)>0||!me._station1up1.style.opacity)?'inherit':'hidden';
			me._station1up1.ggVisible=true;
			me._station1up2.style[domTransition]='none';
			me._station1up2.style.visibility=(Number(me._station1up2.style.opacity)>0||!me._station1up2.style.opacity)?'inherit':'hidden';
			me._station1up2.ggVisible=true;
			me._station1q.style[domTransition]='none';
			me._station1q.style.visibility=(Number(me._station1q.style.opacity)>0||!me._station1q.style.opacity)?'inherit':'hidden';
			me._station1q.ggVisible=true;
			me._station2up1.style[domTransition]='none';
			me._station2up1.style.visibility='hidden';
			me._station2up1.ggVisible=false;
			me._station2up2.style[domTransition]='none';
			me._station2up2.style.visibility='hidden';
			me._station2up2.ggVisible=false;
			me._station2q.style[domTransition]='none';
			me._station2q.style.visibility='hidden';
			me._station2q.ggVisible=false;
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
		el=me._station1gedruckt=document.createElement('div');
		els=me._station1gedruckt__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1gedruckt__img.setAttribute('src',basePath + 'images/station1gedruckt.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station1gedruckt";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1gedruckt.ggIsActive=function() {
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
		me._station1gedruckt.ggUpdatePosition=function (useTransition) {
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
		me._station1.appendChild(me._station1gedruckt);
		me._forschung.appendChild(me._station1);
		el=me._station2up1=document.createElement('div');
		els=me._station2up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2up1__img.setAttribute('src',basePath + 'images/station2up1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2up1__imgo.setAttribute('src',basePath + 'images/station2up1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2UP1";
		el.ggDx=39;
		el.ggDy=-52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station2up1);
		el=me._station2up2=document.createElement('div');
		els=me._station2up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2up2__img.setAttribute('src',basePath + 'images/station2up2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2up2__imgo.setAttribute('src',basePath + 'images/station2up2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2UP2";
		el.ggDx=63;
		el.ggDy=-39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station2up2);
		el=me._station2q=document.createElement('div');
		els=me._station2q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2q__img.setAttribute('src',basePath + 'images/station2q.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2q__imgo.setAttribute('src',basePath + 'images/station2q__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2Q";
		el.ggDx=63;
		el.ggDy=-65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station2q);
		el=me._station2=document.createElement('div');
		els=me._station2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2__img.setAttribute('src',basePath + 'images/station2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2__imgo.setAttribute('src',basePath + 'images/station2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2";
		el.ggDx=35;
		el.ggDy=-17;
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
		me._station2.onclick=function (e) {
			me._station1oben.style[domTransition]='none';
			me._station1oben.style.visibility='hidden';
			me._station1oben.ggVisible=false;
			me._station0oben.style[domTransition]='none';
			me._station0oben.style.visibility='hidden';
			me._station0oben.ggVisible=false;
			me._station2oben.style[domTransition]='none';
			me._station2oben.style.visibility=(Number(me._station2oben.style.opacity)>0||!me._station2oben.style.opacity)?'inherit':'hidden';
			me._station2oben.ggVisible=true;
			me._station1gedruckt.style[domTransition]='none';
			me._station1gedruckt.style.visibility='hidden';
			me._station1gedruckt.ggVisible=false;
			me._station0gedruckt.style[domTransition]='none';
			me._station0gedruckt.style.visibility='hidden';
			me._station0gedruckt.ggVisible=false;
			me._station2gedruckt.style[domTransition]='none';
			me._station2gedruckt.style.visibility=(Number(me._station2gedruckt.style.opacity)>0||!me._station2gedruckt.style.opacity)?'inherit':'hidden';
			me._station2gedruckt.ggVisible=true;
			me._station2up1.style[domTransition]='none';
			me._station2up1.style.visibility=(Number(me._station2up1.style.opacity)>0||!me._station2up1.style.opacity)?'inherit':'hidden';
			me._station2up1.ggVisible=true;
			me._station2up2.style[domTransition]='none';
			me._station2up2.style.visibility=(Number(me._station2up2.style.opacity)>0||!me._station2up2.style.opacity)?'inherit':'hidden';
			me._station2up2.ggVisible=true;
			me._station2q.style[domTransition]='none';
			me._station2q.style.visibility=(Number(me._station2q.style.opacity)>0||!me._station2q.style.opacity)?'inherit':'hidden';
			me._station2q.ggVisible=true;
			me._station1up1.style[domTransition]='none';
			me._station1up1.style.visibility='hidden';
			me._station1up1.ggVisible=false;
			me._station1up2.style[domTransition]='none';
			me._station1up2.style.visibility='hidden';
			me._station1up2.ggVisible=false;
			me._station1q.style[domTransition]='none';
			me._station1q.style.visibility='hidden';
			me._station1q.ggVisible=false;
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
		el=me._station2gedruckt=document.createElement('div');
		els=me._station2gedruckt__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2gedruckt__img.setAttribute('src',basePath + 'images/station2gedruckt.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Station2gedruckt";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2gedruckt.ggIsActive=function() {
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
		me._station2gedruckt.ggUpdatePosition=function (useTransition) {
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
		me._station2.appendChild(me._station2gedruckt);
		me._forschung.appendChild(me._station2);
		el=me._station3up1=document.createElement('div');
		els=me._station3up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3up1__img.setAttribute('src',basePath + 'images/station3up1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3up1__imgo.setAttribute('src',basePath + 'images/station3up1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3UP1";
		el.ggDx=-77;
		el.ggDy=14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station3up1);
		el=me._station3up2=document.createElement('div');
		els=me._station3up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3up2__img.setAttribute('src',basePath + 'images/station3up2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3up2__imgo.setAttribute('src',basePath + 'images/station3up2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3UP2";
		el.ggDx=-77;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station3up2);
		el=me._station3q=document.createElement('div');
		els=me._station3q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3q__img.setAttribute('src',basePath + 'images/station3q.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3q__imgo.setAttribute('src',basePath + 'images/station3q__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3Q";
		el.ggDx=-101;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station3q);
		el=me._station3=document.createElement('div');
		els=me._station3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3__img.setAttribute('src',basePath + 'images/station3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3__imgo.setAttribute('src',basePath + 'images/station3__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3";
		el.ggDx=-44;
		el.ggDy=28;
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
		me._forschung.appendChild(me._station3);
		el=me._station4up1=document.createElement('div');
		els=me._station4up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4up1__img.setAttribute('src',basePath + 'images/station4up1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4up1__imgo.setAttribute('src',basePath + 'images/station4up1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4UP1";
		el.ggDx=67;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station4up1);
		el=me._station4up2=document.createElement('div');
		els=me._station4up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4up2__img.setAttribute('src',basePath + 'images/station4up2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4up2__imgo.setAttribute('src',basePath + 'images/station4up2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4UP2";
		el.ggDx=67;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station4up2);
		el=me._station4q=document.createElement('div');
		els=me._station4q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4q__img.setAttribute('src',basePath + 'images/station4q.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4q__imgo.setAttribute('src',basePath + 'images/station4q__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4Q";
		el.ggDx=91;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station4q);
		el=me._station4=document.createElement('div');
		els=me._station4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4__img.setAttribute('src',basePath + 'images/station4.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4__imgo.setAttribute('src',basePath + 'images/station4__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4";
		el.ggDx=34;
		el.ggDy=28;
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
		me._forschung.appendChild(me._station4);
		el=me._station5up1=document.createElement('div');
		els=me._station5up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5up1__img.setAttribute('src',basePath + 'images/station5up1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5up1__imgo.setAttribute('src',basePath + 'images/station5up1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5UP1";
		el.ggDx=-34;
		el.ggDy=71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station5up1);
		el=me._station5up2=document.createElement('div');
		els=me._station5up2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5up2__img.setAttribute('src',basePath + 'images/station5up2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5up2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5up2__imgo.setAttribute('src',basePath + 'images/station5up2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5UP2";
		el.ggDx=23;
		el.ggDy=71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station5up2);
		el=me._station5q=document.createElement('div');
		els=me._station5q__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5q__img.setAttribute('src',basePath + 'images/station5q.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5q__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5q__imgo.setAttribute('src',basePath + 'images/station5q__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5Q";
		el.ggDx=-6;
		el.ggDy=85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
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
		me._forschung.appendChild(me._station5q);
		el=me._station5=document.createElement('div');
		els=me._station5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5__img.setAttribute('src',basePath + 'images/station5.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5__imgo.setAttribute('src',basePath + 'images/station5__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5";
		el.ggDx=-5;
		el.ggDy=50;
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
		me._forschung.appendChild(me._station5);
		el=me._station6=document.createElement('div');
		els=me._station6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station6__img.setAttribute('src',basePath + 'images/station6.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station6__imgo.setAttribute('src',basePath + 'images/station6__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station6";
		el.ggDx=-5;
		el.ggDy=5;
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
		me._forschung.appendChild(me._station6);
		me._forschungsmenu.appendChild(me._forschung);
		el=me._forschungsfeldoben=document.createElement('div');
		els=me._forschungsfeldoben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungsfeldoben__img.setAttribute('src',basePath + 'images/forschungsfeldoben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ForschungsFeldOben";
		el.ggDx=1;
		el.ggDy=-189;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 291px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsfeldoben.ggIsActive=function() {
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
		me._forschungsfeldoben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._forschungsfeldoben);
		el=me._station0oben=document.createElement('div');
		els=me._station0oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station0oben__img.setAttribute('src',basePath + 'images/station0oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station0oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station0oben__imgo.setAttribute('src',basePath + 'images/station0oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station0oben";
		el.ggDx=0;
		el.ggDy=-330;
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
		me._station0oben.ggIsActive=function() {
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
		me._station0oben.onmouseover=function (e) {
			me._station0oben__img.style.visibility='hidden';
			me._station0oben__imgo.style.visibility='inherit';
		}
		me._station0oben.onmouseout=function (e) {
			me._station0oben__img.style.visibility='inherit';
			me._station0oben__imgo.style.visibility='hidden';
		}
		me._station0oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station0oben);
		el=me._station1oben=document.createElement('div');
		els=me._station1oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1oben__img.setAttribute('src',basePath + 'images/station1oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1oben__imgo.setAttribute('src',basePath + 'images/station1oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station1oben.ggIsActive=function() {
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
		me._station1oben.onmouseover=function (e) {
			me._station1oben__img.style.visibility='hidden';
			me._station1oben__imgo.style.visibility='inherit';
		}
		me._station1oben.onmouseout=function (e) {
			me._station1oben__img.style.visibility='inherit';
			me._station1oben__imgo.style.visibility='hidden';
		}
		me._station1oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station1oben);
		el=me._station2oben=document.createElement('div');
		els=me._station2oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station2oben__img.setAttribute('src',basePath + 'images/station2oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station2oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station2oben__imgo.setAttribute('src',basePath + 'images/station2oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station2oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station2oben.ggIsActive=function() {
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
		me._station2oben.onmouseover=function (e) {
			me._station2oben__img.style.visibility='hidden';
			me._station2oben__imgo.style.visibility='inherit';
		}
		me._station2oben.onmouseout=function (e) {
			me._station2oben__img.style.visibility='inherit';
			me._station2oben__imgo.style.visibility='hidden';
		}
		me._station2oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station2oben);
		el=me._station3oben=document.createElement('div');
		els=me._station3oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station3oben__img.setAttribute('src',basePath + 'images/station3oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station3oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station3oben__imgo.setAttribute('src',basePath + 'images/station3oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station3oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station3oben.ggIsActive=function() {
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
		me._station3oben.onmouseover=function (e) {
			me._station3oben__img.style.visibility='hidden';
			me._station3oben__imgo.style.visibility='inherit';
		}
		me._station3oben.onmouseout=function (e) {
			me._station3oben__img.style.visibility='inherit';
			me._station3oben__imgo.style.visibility='hidden';
		}
		me._station3oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station3oben);
		el=me._station4oben=document.createElement('div');
		els=me._station4oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station4oben__img.setAttribute('src',basePath + 'images/station4oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station4oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station4oben__imgo.setAttribute('src',basePath + 'images/station4oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station4oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station4oben.ggIsActive=function() {
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
		me._station4oben.onmouseover=function (e) {
			me._station4oben__img.style.visibility='hidden';
			me._station4oben__imgo.style.visibility='inherit';
		}
		me._station4oben.onmouseout=function (e) {
			me._station4oben__img.style.visibility='inherit';
			me._station4oben__imgo.style.visibility='hidden';
		}
		me._station4oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station4oben);
		el=me._station5oben=document.createElement('div');
		els=me._station5oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station5oben__img.setAttribute('src',basePath + 'images/station5oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station5oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station5oben__imgo.setAttribute('src',basePath + 'images/station5oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station5oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station5oben.ggIsActive=function() {
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
		me._station5oben.onmouseover=function (e) {
			me._station5oben__img.style.visibility='hidden';
			me._station5oben__imgo.style.visibility='inherit';
		}
		me._station5oben.onmouseout=function (e) {
			me._station5oben__img.style.visibility='inherit';
			me._station5oben__imgo.style.visibility='hidden';
		}
		me._station5oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station5oben);
		el=me._station6oben=document.createElement('div');
		els=me._station6oben__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station6oben__img.setAttribute('src',basePath + 'images/station6oben.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station6oben__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station6oben__imgo.setAttribute('src',basePath + 'images/station6oben__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station6oben";
		el.ggDx=0;
		el.ggDy=-330;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._station6oben.ggIsActive=function() {
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
		me._station6oben.onmouseover=function (e) {
			me._station6oben__img.style.visibility='hidden';
			me._station6oben__imgo.style.visibility='inherit';
		}
		me._station6oben.onmouseout=function (e) {
			me._station6oben__img.style.visibility='inherit';
			me._station6oben__imgo.style.visibility='hidden';
		}
		me._station6oben.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._station6oben);
		el=me._fortschritt=document.createElement('div');
		els=me._fortschritt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Fortschritt";
		el.ggDx=50;
		el.ggDy=-177;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 219px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 230px;';
		hs+='height: 219px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... Fortschritt an Station X... ";
		el.appendChild(els);
		me._fortschritt.ggIsActive=function() {
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
		me._fortschritt.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._fortschritt);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_4__img.setAttribute('src',basePath + 'images/svg_4.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._svg_4__imgo.setAttribute('src',basePath + 'images/svg_4__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -133px;';
		hs+='position : absolute;';
		hs+='top : -214px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
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
		me._svg_4.onmouseover=function (e) {
			me._svg_4__img.style.visibility='hidden';
			me._svg_4__imgo.style.visibility='inherit';
		}
		me._svg_4.onmouseout=function (e) {
			me._svg_4__img.style.visibility='inherit';
			me._svg_4__imgo.style.visibility='hidden';
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._forschungsmenu.appendChild(me._svg_4);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_5__img.setAttribute('src',basePath + 'images/svg_5.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._svg_5__imgo.setAttribute('src',basePath + 'images/svg_5__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 5";
		el.ggDx=-134;
		el.ggDy=-268;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
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
		me._svg_5.onmouseover=function (e) {
			me._svg_5__img.style.visibility='hidden';
			me._svg_5__imgo.style.visibility='inherit';
		}
		me._svg_5.onmouseout=function (e) {
			me._svg_5__img.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._svg_5);
		me.divSkin.appendChild(me._forschungsmenu);
		el=me._kartenmenu=document.createElement('div');
		el.ggId="KartenMenu";
		el.ggDx=0;
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 600px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kartenmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._kartenmenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('KartenMenu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._kartenmenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._kartenmenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._kartenmenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._kartenmenu.ggCurrentLogicStateVisible == 0) {
					me._kartenmenu.style.visibility="hidden";
					me._kartenmenu.ggVisible=false;
				}
				else {
					me._kartenmenu.style.visibility=(Number(me._kartenmenu.style.opacity)>0||!me._kartenmenu.style.opacity)?'inherit':'hidden';
					me._kartenmenu.ggVisible=true;
				}
			}
		}
		me._kartenmenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('KartenMenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._kartenmenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._kartenmenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._kartenmenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._kartenmenu.ggCurrentLogicStateAlpha == 0) {
					me._kartenmenu.style.visibility=me._kartenmenu.ggVisible?'inherit':'hidden';
					me._kartenmenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._kartenmenu.style.opacity == 0.0) { me._kartenmenu.style.visibility="hidden"; } }, 705);
					me._kartenmenu.style.opacity=0;
				}
			}
		}
		me._kartenmenu.ggUpdatePosition=function (useTransition) {
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
		els.className='ggskin ggskin_svg';
		me._grundkarte__img.setAttribute('src',basePath + 'images/grundkarte.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Grundkarte";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 555px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
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
		me._kartenmenu.appendChild(me._grundkarte);
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
		me._kartenmenu.appendChild(me._transekten);
		el=me._temp=document.createElement('div');
		els=me._temp__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGlkPSJzdmcxNjQzIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1xtYXgta1xEZXNrdG9wXFNFTlNPLVRyYWlsXEthcnRlblwrVHJhbnNla3Rlbi5wbm'+
			'ciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9Ijk2IiBzb2RpcG9kaTpkb2NuYW1lPSIrVGVtcC5zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIHZpZXdCb3g9IjAgMCAyOTguNzQ4'+
			'ODggNDU2LjA1MTQyIiB3aWR0aD0iMjk4Ljc0ODg3bW0iIGhlaWdodD0iNDU2LjA1MTQybW0iIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiA8ZGVmcyBpZD0iZGVmczE2MzciPgogIDxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJsaW5lYXJHcmFkaWVudDE0MzUiPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojZmY2NjAwO3N0b3Atb3BhY2l0eToxOyIgb2Zmc2V0PSIwIiBpZD0ic3RvcDE0MzEiLz4KICAgPHN0b3Agc3R5bGU9In'+
			'N0b3AtY29sb3I6I2ZmNjYwMDtzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIgaWQ9InN0b3AxNDMzIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQxMzQyIj4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzVmZDNiYztzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AxMzM4Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZmQzYmM7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTM0MCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVh'+
			'ckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50MTMxMC03Ij4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzgwMDAwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AxMzA2Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM4MDAwMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTMwOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPG1hcmtlciByZWZYPSIwIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIgb3JpZW50PSJhdXRvIiByZWZZPSIwIiBpbmtzY2FwZTpzdG9ja2lkPSJBcnJvdzFMZW5kIi'+
			'BpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIiBpZD0iQXJyb3cxTGVuZCI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44LDAsMCwtMC44LC0xMCwwKSIgZD0iTSAwLDAgNSwtNSAtMTIuNSwwIDUsNSBaIiBpZD0icGF0aDE3ODEiLz4KICA8L21hcmtlcj4KICA8bWFya2VyIHJlZlg9IjAiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIiBv'+
			'cmllbnQ9ImF1dG8iIHJlZlk9IjAiIGlua3NjYXBlOnN0b2NraWQ9IkFycm93MUxzdGFydCIgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSIgaWQ9IkFycm93MUxzdGFydCI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgsMCwwLDAuOCwxMCwwKSIgZD0iTSAwLDAgNSwtNSAtMTIuNSwwIDUsNSBaIiBpZD0icGF0aDE3NzgiLz4KICA8L2'+
			'1hcmtlcj4KICA8aW5rc2NhcGU6cGF0aC1lZmZlY3QgZWZmZWN0PSJza2VsZXRhbCIgdGFuZ19vZmZzZXQ9IjAiIHBhdHRlcm49Ik0gMCw1IEMgMCwyLjI0IDIuMjQsMCA1LDAgNy43NiwwIDEwLDIuMjQgMTAsNSAxMCw3Ljc2IDcuNzYsMTAgNSwxMCAyLjI0LDEwIDAsNy43NiAwLDUgWiIgcHJvcF9zY2FsZT0iMC4yNjQ1ODMzMyIgdmVydGljYWxfcGF0dGVybj0iZmFsc2UiIGZ1c2VfdG9sZXJhbmNlPSIwIiBjb3B5dHlwZT0ic2luZ2xlX3N0cmV0Y2hlZCIgaXNfdmlzaWJsZT0idHJ1ZSIgbm9ybWFsX29mZnNldD0iMCIgc3BhY2luZz0iMCIgc2NhbGVfeV9yZWw9ImZhbHNlIiBpZD0icGF0aC1l'+
			'ZmZlY3QxMzcwIiBwcm9wX3VuaXRzPSJmYWxzZSIvPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTQ0NSI+CiAgIDxyZWN0IHg9Ii00LjQwOTk0NjkiIHdpZHRoPSI2LjkzMjMwMzQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMzM4MTM3NDg7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MC45OTMwNTU1OCIgcng9IjAiIGhlaWdodD0iNC4xOTI3OTEiIHJ5PSIwIiB5PSIyODYuOTQzOTciIGlkPSJyZWN0MTQ0NyIvPg'+
			'ogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgzMzIxIj4KICAgPHJlY3QgeD0iNzUzLjkwNzI5IiB3aWR0aD0iMjAuMDAzOTczIiBzdHlsZT0ib3BhY2l0eTowLjUxMDk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MjU1ODYxMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGhlaWdodD0iMjAuMzI2NjE2IiByeD0iMi42Mjg2Njc2IiByeT0iMS41ODA5Mzc5IiBp'+
			'ZD0icmVjdDMzMjMiIHk9IjM4Ni4wNDIzIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDEwOTciPgogICA8cmVjdCB4PSI1MzYuMjcwODEiIHdpZHRoPSIyMC4wMDM5NzMiIHN0eWxlPSJvcGFjaXR5OjAuNTEwOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjQyNTU4NjEzO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSIyMC4zMjY2MTYiIHJ4PS'+
			'IyLjYyODY2NzYiIHJ5PSIxLjU4MDkzNzkiIGlkPSJyZWN0MTA5OSIgeT0iLTEyMi4zNTAzMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxMTE5Ij4KICAgPHJlY3QgeD0iMzMwLjk5ODcyIiB3aWR0aD0iMjAuMDAzOTczIiBzdHlsZT0ib3BhY2l0eTowLjUxMDk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MjU1ODYxMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFj'+
			'aXR5OjEiIHJ4PSIyLjYyODY2NzYiIGhlaWdodD0iMjAuMzI2NjE2IiByeT0iMS41ODA5Mzc5IiB5PSI3NC4zNDYxNTMiIGlkPSJyZWN0MTEyMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxNDExIj4KICAgPHJlY3QgeD0iNzk5LjQ4Mjg1IiB3aWR0aD0iOTQuNjY2ODYyIiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6IzAwODhhYTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzQ0NzgyMTtzdHJva2Utd2lkdGg6My42ODcwMDAwNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MS44ND'+
			'M1MDAwNSwgMS44NDM1MDAwNTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIGhlaWdodD0iNjcuMzUxOTIxIiB5PSI1NjUuODY2MDkiIGlkPSJyZWN0MTQxMyIvPgogIDwvY2xpcFBhdGg+CiAgPHJhZGlhbEdyYWRpZW50IGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGN5PSIxMTYuNDAzODIiIGZ4PSItMTg5LjU3MDYyIiByPSI0OS40OTk3MjciIGlkPSJyYWRpYWxHcmFkaWVudDEzMTIiIGZ5PSIxMTYuNDAzODIiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEzMTAtNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJp'+
			'eCgxLDAsMCwwLjgxODU3OTcsMjY0LjA2NjU4LC0xOTkuMDcwMjEpIiBjeD0iLTE4OS41NzA2MiIvPgogIDxyYWRpYWxHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBjeT0iMTQwLjcyNTM1IiBmeD0iMTg2LjQ3NzU4IiByPSI0OS40OTk3MjciIGlkPSJyYWRpYWxHcmFkaWVudDEzNDQiIGZ5PSIxNDAuNzI1MzUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEzNDIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMC44MTg1Nzk3OCwtMzUuMjc1MjY3LC0zMDMuMTY5MjEpIiBjeD0iMTg2LjQ3NzU4Ii8+CiAgPH'+
			'JhZGlhbEdyYWRpZW50IGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGN5PSIyMTUuNTYwODEiIGZ4PSI4My4yMDQ2NDMiIHI9IjQ5LjAxNzIyNyIgaWQ9InJhZGlhbEdyYWRpZW50MTQzNyIgZnk9IjIxNS41NjA4MSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50MTQzNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwwLjgxNjc5NDA1LDEzMi4zNTYxNywtMjU5LjI3MzQzKSIgY3g9IjgzLjIwNDY0MyIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpzbmFwLW5vZGVzPSJ0cnVlIiBpZD0iYmFzZSIg'+
			'Zml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjQ3Ny41ODg1NSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3k9Ijk4Ny40NTcyNyIgaW5rc2NhcGU6c25hcC1vdGhlcnM9InRydWUiIHNob3dncmlkPSJmYWxzZSIgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6d2luZG93LXk9Ii05IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpndWlkZS1iYm'+
			'94PSJ0cnVlIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiIHNob3dndWlkZXM9InRydWUiIGZpdC1tYXJnaW4tbGVmdD0iMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp6b29tPSIwLjM1MzU1MzQiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTpzbmFwLWdsb2JhbD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy14PSItOSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNjQwIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0'+
			'PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjMxOTkzNyw3NS4xMDQyMykiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiBpZD0ibGF5ZXIxIj4KICA8Zmxvd1Jvb3QgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybW'+
			'FsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDAsMTQ5KSIgaWQ9ImZsb3dSb290MjM0NCI+CiAgIDxmbG93UmVnaW9uIGlkPSJmbG93UmVnaW9uMjM0NiI+CiAgICA8cmVjdCB4PSI1Mi4xNDI4NTciIHdpZHRoPSIxMzIuODU3MTUiIGhlaWdodD0iNDUuNzE0Mjg3IiBpZD0icmVjdDIzNDgiIHk9'+
			'IjMzNS43OTg2MSIvPgogICA8L2Zsb3dSZWdpb24+CiAgIDxmbG93UGFyYSBpZD0iZmxvd1BhcmEyMzUwIi8+CiAgPC9mbG93Um9vdD4KICA8Zmxvd1Jvb3QgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J3NhbnMtc2VyaWYsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YX'+
			'JpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41MjkwNjAyLDAsMCwwLjUyOTA2MDIsMC45MDg3NzY5NCwxMDMuMzQ1NDcpIiBpZD0iZmxvd1Jvb3QyNDIyLTQtMS02LTEiPgogICA8Zmxvd1JlZ2lvbiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7'+
			'Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTZweDtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J3NhbnMtc2VyaWYsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0IiBpZD0iZmxvd1JlZ2lvbjI0MTgtNy03LT'+
			'ItOCI+CiAgICA8cmVjdCB4PSI1MC43MTQyODciIHdpZHRoPSIxNzIuMTQyODUiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2Fucy1zZXJpZiwgTm9ybWFsJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1h'+
			'bGlnbjpzdGFydDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQiIGhlaWdodD0iMjQuOTk5OTk2IiB5PSIyNy4yMjcxOTgiIGlkPSJyZWN0MjQxNi02LTUtMS01Ii8+CiAgIDwvZmxvd1JlZ2lvbj4KICAgPGZsb3dQYXJhIGlkPSJmbG93UGFyYTI0MzgtMy05LTctOSIvPgogIDwvZmxvd1Jvb3Q+CiAgPHJlY3QgeD0iMjUuNDc4NzM3IiB3aWR0aD0iOTguMDM0NDU0IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDEzMTIpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk2NDk5OTk3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3'+
			'Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI4MC4wNzM5NDQiIHJ4PSIxLjcwMTQzNzYiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgcnk9IjEuNzAxNDM3NiIgaWQ9InJlY3QxMjg4IiB5PSItMTQzLjgyMTM4Ii8+CiAgPHJlY3QgeD0iMTAyLjE4NTA5IiB3aWR0aD0iOTguMDM0NDU0IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDEzNDQpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk2NDk5OTk3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpu'+
			'b25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaGVpZ2h0PSI4MC4wNzM5NTIiIHJ4PSIxLjcwMTQzNzYiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgcnk9IjEuNzAxNDM3NiIgaWQ9InJlY3QxMjg4LTUiIHk9Ii0yMjguMDExMjYiLz4KICA8cmVjdCB4PSIxNjYuNTQzNTgiIHdpZHRoPSI5OC4wMzQ0NTQiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDp1cmwoI3JhZGlhbEdyYWRpZW50MTQzNyk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTY0OTk5OTc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2'+
			'hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjgwLjA3Mzk1OSIgcng9IjEuNzAxNDM3NiIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiByeT0iMS43MDE0Mzc2IiBpZD0icmVjdDEyODgtNS05IiB5PSItMTIzLjI0MTYyIi8+CiA8L2c+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiM0NjQ2NDY7fQoJLnN0MXtmaWxsOiNEMUQxRDE7fQo8L3N0eWxlPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ic3R5bGUxMTE1Ij4KCS5zdDB7ZmlsbDojNDY0NjQ2O30KCS5zdDF7ZmlsbDojRDFEMUQxO30KPC9zdHlsZT4KIDxzdHlsZSB0eXBlPSJ0ZXh0'+
			'L2NzcyIgaWQ9InN0eWxlMTEzMyI+Cgkuc3Qwe2ZpbGw6I0QxRDFEMTt9Cgkuc3Qxe2ZpbGw6IzQ1NDU0NTt9Cjwvc3R5bGU+Cjwvc3ZnPgo=';
		me._temp__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+Temp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 456px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : 299px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._temp.ggIsActive=function() {
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
		me._temp.ggUpdatePosition=function (useTransition) {
		}
		me._kartenmenu.appendChild(me._temp);
		el=me._tt=document.createElement('div');
		els=me._tt__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._tt__img.setAttribute('src',basePath + 'images/tt.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+TT";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 456px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : hidden;';
		hs+='width : 299px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tt.ggIsActive=function() {
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
		me._tt.ggUpdatePosition=function (useTransition) {
		}
		me._kartenmenu.appendChild(me._tt);
		el=me._karteschlieen=document.createElement('div');
		els=me._karteschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._karteschlieen__img.setAttribute('src',basePath + 'images/karteschlieen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._karteschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._karteschlieen__imgo.setAttribute('src',basePath + 'images/karteschlieen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Karteschlie\xdfen";
		el.ggDx=0;
		el.ggDy=285;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
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
			player.setVariableValue('KartenMenu', false);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility=(Number(me._sensimenu.style.opacity)>0||!me._sensimenu.style.opacity)?'inherit':'hidden';
			me._sensimenu.ggVisible=true;
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
		me._kartenmenu.appendChild(me._karteschlieen);
		el=me._transektenzeigen=document.createElement('div');
		els=me._transektenzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._transektenzeigen__img.setAttribute('src',basePath + 'images/transektenzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._transektenzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._transektenzeigen__imgo.setAttribute('src',basePath + 'images/transektenzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TransektenZeigen";
		el.ggDx=51;
		el.ggDy=282;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
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
		me._kartenmenu.appendChild(me._transektenzeigen);
		el=me._transektenzeigen2=document.createElement('div');
		els=me._transektenzeigen2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._transektenzeigen2__img.setAttribute('src',basePath + 'images/transektenzeigen2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TransektenZeigen2";
		el.ggDx=51;
		el.ggDy=282;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
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
		me._kartenmenu.appendChild(me._transektenzeigen2);
		el=me._tempzeigen=document.createElement('div');
		els=me._tempzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._tempzeigen__img.setAttribute('src',basePath + 'images/tempzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._tempzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._tempzeigen__imgo.setAttribute('src',basePath + 'images/tempzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="+TempZeigen";
		el.ggDx=103;
		el.ggDy=278;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._tempzeigen.ggIsActive=function() {
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
		me._tempzeigen.onclick=function (e) {
			me._temp.style[domTransition]='none';
			me._temp.style.visibility=(Number(me._temp.style.opacity)>0||!me._temp.style.opacity)?'inherit':'hidden';
			me._temp.ggVisible=true;
			me._tempzeigen2.style[domTransition]='none';
			me._tempzeigen2.style.visibility=(Number(me._tempzeigen2.style.opacity)>0||!me._tempzeigen2.style.opacity)?'inherit':'hidden';
			me._tempzeigen2.ggVisible=true;
		}
		me._tempzeigen.onmouseover=function (e) {
			me._tempzeigen__img.style.visibility='hidden';
			me._tempzeigen__imgo.style.visibility='inherit';
		}
		me._tempzeigen.onmouseout=function (e) {
			me._tempzeigen__img.style.visibility='inherit';
			me._tempzeigen__imgo.style.visibility='hidden';
		}
		me._tempzeigen.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._tempzeigen);
		el=me._tempzeigen2=document.createElement('div');
		els=me._tempzeigen2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._tempzeigen2__img.setAttribute('src',basePath + 'images/tempzeigen2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+TempZeigen2";
		el.ggDx=103;
		el.ggDy=278;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._tempzeigen2.ggIsActive=function() {
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
		me._tempzeigen2.onclick=function (e) {
			me._temp.style[domTransition]='none';
			me._temp.style.visibility='hidden';
			me._temp.ggVisible=false;
			me._tempzeigen2.style[domTransition]='none';
			me._tempzeigen2.style.visibility='hidden';
			me._tempzeigen2.ggVisible=false;
		}
		me._tempzeigen2.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._tempzeigen2);
		el=me._ttzeigen=document.createElement('div');
		els=me._ttzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ttzeigen__img.setAttribute('src',basePath + 'images/ttzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ttzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ttzeigen__imgo.setAttribute('src',basePath + 'images/ttzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="+TTZeigen";
		el.ggDx=153;
		el.ggDy=274;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ttzeigen.ggIsActive=function() {
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
		me._ttzeigen.onclick=function (e) {
			me._tt.style[domTransition]='none';
			me._tt.style.visibility=(Number(me._tt.style.opacity)>0||!me._tt.style.opacity)?'inherit':'hidden';
			me._tt.ggVisible=true;
			me._ttzeigen2.style[domTransition]='none';
			me._ttzeigen2.style.visibility=(Number(me._ttzeigen2.style.opacity)>0||!me._ttzeigen2.style.opacity)?'inherit':'hidden';
			me._ttzeigen2.ggVisible=true;
		}
		me._ttzeigen.onmouseover=function (e) {
			me._ttzeigen__img.style.visibility='hidden';
			me._ttzeigen__imgo.style.visibility='inherit';
		}
		me._ttzeigen.onmouseout=function (e) {
			me._ttzeigen__img.style.visibility='inherit';
			me._ttzeigen__imgo.style.visibility='hidden';
		}
		me._ttzeigen.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._ttzeigen);
		el=me._ttzeigen2=document.createElement('div');
		els=me._ttzeigen2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ttzeigen2__img.setAttribute('src',basePath + 'images/ttzeigen2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="+TTZeigen2";
		el.ggDx=153;
		el.ggDy=274;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ttzeigen2.ggIsActive=function() {
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
		me._ttzeigen2.onclick=function (e) {
			me._tt.style[domTransition]='none';
			me._tt.style.visibility='hidden';
			me._tt.ggVisible=false;
			me._ttzeigen2.style[domTransition]='none';
			me._ttzeigen2.style.visibility='hidden';
			me._ttzeigen2.ggVisible=false;
		}
		me._ttzeigen2.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._ttzeigen2);
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_21__img.setAttribute('src',basePath + 'images/svg_21.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-51;
		el.ggDy=283;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_21.ggIsActive=function() {
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
		me._svg_21.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._svg_21);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_20__img.setAttribute('src',basePath + 'images/svg_20.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-103;
		el.ggDy=279;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
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
		me._svg_20.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._svg_20);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-153;
		el.ggDy=274;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
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
		me._svg_2.ggUpdatePosition=function (useTransition) {
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
		me._kartenmenu.appendChild(me._svg_2);
		me.divSkin.appendChild(me._kartenmenu);
		el=me._kommenu=document.createElement('div');
		el.ggId="KomMenu";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 582px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 342px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kommenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._kommenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('KomMenu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._kommenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._kommenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._kommenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._kommenu.ggCurrentLogicStateVisible == 0) {
					me._kommenu.style.visibility="hidden";
					me._kommenu.ggVisible=false;
				}
				else {
					me._kommenu.style.visibility=(Number(me._kommenu.style.opacity)>0||!me._kommenu.style.opacity)?'inherit':'hidden';
					me._kommenu.ggVisible=true;
				}
			}
		}
		me._kommenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('KomMenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._kommenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._kommenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._kommenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._kommenu.ggCurrentLogicStateAlpha == 0) {
					me._kommenu.style.visibility=me._kommenu.ggVisible?'inherit':'hidden';
					me._kommenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._kommenu.style.opacity == 0.0) { me._kommenu.style.visibility="hidden"; } }, 705);
					me._kommenu.style.opacity=0;
				}
			}
		}
		me._kommenu.ggUpdatePosition=function (useTransition) {
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
		el=me._auftragfeld=document.createElement('div');
		els=me._auftragfeld__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._auftragfeld__img.setAttribute('src',basePath + 'images/auftragfeld.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="AuftragFeld";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 280px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 287px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._auftragfeld.ggIsActive=function() {
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
		me._auftragfeld.ggUpdatePosition=function (useTransition) {
		}
		me._kommenu.appendChild(me._auftragfeld);
		el=me._nachrichtentextordner1=document.createElement('div');
		el.ggId="NachrichtenTextOrdner1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 234px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : inherit;';
		hs+='width : 304px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtentextordner1.ggIsActive=function() {
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
		me._nachrichtentextordner1.ggUpdatePosition=function (useTransition) {
		}
		el=me._nachricht3text_o1=document.createElement('div');
		els=me._nachricht3text_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht3Text O1";
		el.ggDx=-13;
		el.ggDy=239;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 192px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... ";
		el.appendChild(els);
		me._nachricht3text_o1.ggIsActive=function() {
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
		me._nachricht3text_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtentextordner1.appendChild(me._nachricht3text_o1);
		el=me._nachricht2text_o1=document.createElement('div');
		els=me._nachricht2text_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht2Text O1";
		el.ggDx=-13;
		el.ggDy=239;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 192px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... ";
		el.appendChild(els);
		me._nachricht2text_o1.ggIsActive=function() {
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
		me._nachricht2text_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtentextordner1.appendChild(me._nachricht2text_o1);
		el=me._nachricht1text_o1=document.createElement('div');
		els=me._nachricht1text_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht1Text O1";
		el.ggDx=-13;
		el.ggDy=239;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 192px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... Hallo ich bin SENSI, ich nerve Menschen in dem ich ihnen immer wieder die selben Dinge erz\xe4hle... ";
		el.appendChild(els);
		me._nachricht1text_o1.ggIsActive=function() {
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
		me._nachricht1text_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtentextordner1.appendChild(me._nachricht1text_o1);
		me._kommenu.appendChild(me._nachrichtentextordner1);
		el=me._aktuellerauftragordner=document.createElement('div');
		el.ggId="AktuellerAuftragOrdner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 238px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 326px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aktuellerauftragordner.ggIsActive=function() {
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
		me._aktuellerauftragordner.ggUpdatePosition=function (useTransition) {
		}
		el=me._aktuellerauftraguberschrift=document.createElement('div');
		els=me._aktuellerauftraguberschrift__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="AktuellerAuftragUberschrift";
		el.ggDx=-1;
		el.ggDy=-112;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Aktueller Auftrag";
		el.appendChild(els);
		me._aktuellerauftraguberschrift.ggIsActive=function() {
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
		me._aktuellerauftraguberschrift.ggUpdatePosition=function (useTransition) {
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
		me._aktuellerauftragordner.appendChild(me._aktuellerauftraguberschrift);
		el=me._aktuellerauftrag=document.createElement('div');
		els=me._aktuellerauftrag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="AktuellerAuftrag";
		el.ggDx=0;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 178px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 178px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... Hier k\xf6nnte ihr Aktueller Auftrag stehen... ";
		el.appendChild(els);
		me._aktuellerauftrag.ggIsActive=function() {
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
		me._aktuellerauftrag.ggUpdatePosition=function (useTransition) {
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
		me._aktuellerauftragordner.appendChild(me._aktuellerauftrag);
		me._kommenu.appendChild(me._aktuellerauftragordner);
		el=me._kommenuschlieen=document.createElement('div');
		els=me._kommenuschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._kommenuschlieen__img.setAttribute('src',basePath + 'images/kommenuschlieen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._kommenuschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._kommenuschlieen__imgo.setAttribute('src',basePath + 'images/kommenuschlieen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="KomMenuSchlie\xdfen";
		el.ggDx=0;
		el.ggDy=263;
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
		me._kommenuschlieen.ggIsActive=function() {
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
		me._kommenuschlieen.onclick=function (e) {
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility=(Number(me._sensimenu.style.opacity)>0||!me._sensimenu.style.opacity)?'inherit':'hidden';
			me._sensimenu.ggVisible=true;
			player.setVariableValue('KomMenu', false);
			player.setVariableValue('SENSI', false);
		}
		me._kommenuschlieen.onmouseover=function (e) {
			me._kommenuschlieen__img.style.visibility='hidden';
			me._kommenuschlieen__imgo.style.visibility='inherit';
		}
		me._kommenuschlieen.onmouseout=function (e) {
			me._kommenuschlieen__img.style.visibility='inherit';
			me._kommenuschlieen__imgo.style.visibility='hidden';
		}
		me._kommenuschlieen.ggUpdatePosition=function (useTransition) {
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
		me._kommenu.appendChild(me._kommenuschlieen);
		el=me._nachrichtenfeld=document.createElement('div');
		els=me._nachrichtenfeld__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtenfeld__img.setAttribute('src',basePath + 'images/nachrichtenfeld.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtenFeld";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 258px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtenfeld.ggIsActive=function() {
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
		me._nachrichtenfeld.ggUpdatePosition=function (useTransition) {
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
		me._kommenu.appendChild(me._nachrichtenfeld);
		el=me._nachrichtenordner2=document.createElement('div');
		el.ggId="NachrichtenOrdner2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 234px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : inherit;';
		hs+='width : 304px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtenordner2.ggIsActive=function() {
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
		me._nachrichtenordner2.ggUpdatePosition=function (useTransition) {
		}
		el=me._nachrichboxt3_o10=document.createElement('div');
		els=me._nachrichboxt3_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichboxt3_o10__img.setAttribute('src',basePath + 'images/nachrichboxt3_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichBoxt3 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichboxt3_o10.ggIsActive=function() {
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
		me._nachrichboxt3_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._nachrichboxt3_o10);
		el=me._nachricht3_o10=document.createElement('div');
		els=me._nachricht3_o10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht3 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht6";
		el.appendChild(els);
		me._nachricht3_o10.ggIsActive=function() {
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
		me._nachricht3_o10.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner2.appendChild(me._nachricht3_o10);
		el=me._textknopf3_o10=document.createElement('div');
		els=me._textknopf3_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf3_o10__img.setAttribute('src',basePath + 'images/textknopf3_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf3_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf3_o10__imgo.setAttribute('src',basePath + 'images/textknopf3_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf3 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf3_o10.ggIsActive=function() {
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
		me._textknopf3_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht3text_o1.style[domTransition]='none';
			me._nachricht3text_o1.style.visibility=(Number(me._nachricht3text_o1.style.opacity)>0||!me._nachricht3text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht3text_o1.ggVisible=true;
			me._textknopf32_o10.style[domTransition]='none';
			me._textknopf32_o10.style.visibility=(Number(me._textknopf32_o10.style.opacity)>0||!me._textknopf32_o10.style.opacity)?'inherit':'hidden';
			me._textknopf32_o10.ggVisible=true;
		}
		me._textknopf3_o10.onmouseover=function (e) {
			me._textknopf3_o10__img.style.visibility='hidden';
			me._textknopf3_o10__imgo.style.visibility='inherit';
		}
		me._textknopf3_o10.onmouseout=function (e) {
			me._textknopf3_o10__img.style.visibility='inherit';
			me._textknopf3_o10__imgo.style.visibility='hidden';
		}
		me._textknopf3_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf3_o10);
		el=me._textknopf32_o10=document.createElement('div');
		els=me._textknopf32_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf32_o10__img.setAttribute('src',basePath + 'images/textknopf32_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf32 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf32_o10.ggIsActive=function() {
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
		me._textknopf32_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht3text_o1.style[domTransition]='none';
			me._nachricht3text_o1.style.visibility='hidden';
			me._nachricht3text_o1.ggVisible=false;
			me._textknopf32_o10.style[domTransition]='none';
			me._textknopf32_o10.style.visibility='hidden';
			me._textknopf32_o10.ggVisible=false;
		}
		me._textknopf32_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf32_o10);
		el=me._play3_o10=document.createElement('div');
		els=me._play3_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play3_o10__img.setAttribute('src',basePath + 'images/play3_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play3_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play3_o10__imgo.setAttribute('src',basePath + 'images/play3_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play3 O1";
		el.ggDx=115;
		el.ggDy=17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play3_o10.ggIsActive=function() {
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
		me._play3_o10.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play3_o10.onmouseover=function (e) {
			me._play3_o10__img.style.visibility='hidden';
			me._play3_o10__imgo.style.visibility='inherit';
		}
		me._play3_o10.onmouseout=function (e) {
			me._play3_o10__img.style.visibility='inherit';
			me._play3_o10__imgo.style.visibility='hidden';
		}
		me._play3_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._play3_o10);
		el=me._nachrichtbox2_o10=document.createElement('div');
		els=me._nachrichtbox2_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox2_o10__img.setAttribute('src',basePath + 'images/nachrichtbox2_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox2 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtbox2_o10.ggIsActive=function() {
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
		me._nachrichtbox2_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._nachrichtbox2_o10);
		el=me._nachricht2_o10=document.createElement('div');
		els=me._nachricht2_o10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht2 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht5";
		el.appendChild(els);
		me._nachricht2_o10.ggIsActive=function() {
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
		me._nachricht2_o10.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner2.appendChild(me._nachricht2_o10);
		el=me._textknopf2_o10=document.createElement('div');
		els=me._textknopf2_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf2_o10__img.setAttribute('src',basePath + 'images/textknopf2_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf2_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf2_o10__imgo.setAttribute('src',basePath + 'images/textknopf2_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf2 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf2_o10.ggIsActive=function() {
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
		me._textknopf2_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht2text_o1.style[domTransition]='none';
			me._nachricht2text_o1.style.visibility=(Number(me._nachricht2text_o1.style.opacity)>0||!me._nachricht2text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht2text_o1.ggVisible=true;
			me._textknopf22_o10.style[domTransition]='none';
			me._textknopf22_o10.style.visibility=(Number(me._textknopf22_o10.style.opacity)>0||!me._textknopf22_o10.style.opacity)?'inherit':'hidden';
			me._textknopf22_o10.ggVisible=true;
		}
		me._textknopf2_o10.onmouseover=function (e) {
			me._textknopf2_o10__img.style.visibility='hidden';
			me._textknopf2_o10__imgo.style.visibility='inherit';
		}
		me._textknopf2_o10.onmouseout=function (e) {
			me._textknopf2_o10__img.style.visibility='inherit';
			me._textknopf2_o10__imgo.style.visibility='hidden';
		}
		me._textknopf2_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf2_o10);
		el=me._textknopf22_o10=document.createElement('div');
		els=me._textknopf22_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf22_o10__img.setAttribute('src',basePath + 'images/textknopf22_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf22 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf22_o10.ggIsActive=function() {
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
		me._textknopf22_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht2text_o1.style[domTransition]='none';
			me._nachricht2text_o1.style.visibility='hidden';
			me._nachricht2text_o1.ggVisible=false;
			me._textknopf22_o10.style[domTransition]='none';
			me._textknopf22_o10.style.visibility='hidden';
			me._textknopf22_o10.ggVisible=false;
		}
		me._textknopf22_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf22_o10);
		el=me._play2_o10=document.createElement('div');
		els=me._play2_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play2_o10__img.setAttribute('src',basePath + 'images/play2_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play2_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play2_o10__imgo.setAttribute('src',basePath + 'images/play2_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play2 O1";
		el.ggDx=115;
		el.ggDy=-27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play2_o10.ggIsActive=function() {
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
		me._play2_o10.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play2_o10.onmouseover=function (e) {
			me._play2_o10__img.style.visibility='hidden';
			me._play2_o10__imgo.style.visibility='inherit';
		}
		me._play2_o10.onmouseout=function (e) {
			me._play2_o10__img.style.visibility='inherit';
			me._play2_o10__imgo.style.visibility='hidden';
		}
		me._play2_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._play2_o10);
		el=me._nachrichtbox1_o10=document.createElement('div');
		els=me._nachrichtbox1_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox1_o10__img.setAttribute('src',basePath + 'images/nachrichtbox1_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox1 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtbox1_o10.ggIsActive=function() {
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
		me._nachrichtbox1_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._nachrichtbox1_o10);
		el=me._nachricht1_o10=document.createElement('div');
		els=me._nachricht1_o10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht1 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht3";
		el.appendChild(els);
		me._nachricht1_o10.ggIsActive=function() {
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
		me._nachricht1_o10.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner2.appendChild(me._nachricht1_o10);
		el=me._textknopf1_o10=document.createElement('div');
		els=me._textknopf1_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf1_o10__img.setAttribute('src',basePath + 'images/textknopf1_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf1_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf1_o10__imgo.setAttribute('src',basePath + 'images/textknopf1_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf1 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf1_o10.ggIsActive=function() {
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
		me._textknopf1_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht1text_o1.style[domTransition]='none';
			me._nachricht1text_o1.style.visibility=(Number(me._nachricht1text_o1.style.opacity)>0||!me._nachricht1text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht1text_o1.ggVisible=true;
			me._textknopf12_o10.style[domTransition]='none';
			me._textknopf12_o10.style.visibility=(Number(me._textknopf12_o10.style.opacity)>0||!me._textknopf12_o10.style.opacity)?'inherit':'hidden';
			me._textknopf12_o10.ggVisible=true;
		}
		me._textknopf1_o10.onmouseover=function (e) {
			me._textknopf1_o10__img.style.visibility='hidden';
			me._textknopf1_o10__imgo.style.visibility='inherit';
		}
		me._textknopf1_o10.onmouseout=function (e) {
			me._textknopf1_o10__img.style.visibility='inherit';
			me._textknopf1_o10__imgo.style.visibility='hidden';
		}
		me._textknopf1_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf1_o10);
		el=me._textknopf12_o10=document.createElement('div');
		els=me._textknopf12_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf12_o10__img.setAttribute('src',basePath + 'images/textknopf12_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf12 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf12_o10.ggIsActive=function() {
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
		me._textknopf12_o10.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht1text_o1.style[domTransition]='none';
			me._nachricht1text_o1.style.visibility='hidden';
			me._nachricht1text_o1.ggVisible=false;
			me._textknopf12_o10.style[domTransition]='none';
			me._textknopf12_o10.style.visibility='hidden';
			me._textknopf12_o10.ggVisible=false;
		}
		me._textknopf12_o10.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner2.appendChild(me._textknopf12_o10);
		el=me._play1_o10=document.createElement('div');
		els=me._play1_o10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play1_o10__img.setAttribute('src',basePath + 'images/play1_o10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play1_o10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play1_o10__imgo.setAttribute('src',basePath + 'images/play1_o10__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play1 O1";
		el.ggDx=115;
		el.ggDy=-70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play1_o10.ggIsActive=function() {
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
		me._play1_o10.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play1_o10.onmouseover=function (e) {
			me._play1_o10__img.style.visibility='hidden';
			me._play1_o10__imgo.style.visibility='inherit';
		}
		me._play1_o10.onmouseout=function (e) {
			me._play1_o10__img.style.visibility='inherit';
			me._play1_o10__imgo.style.visibility='hidden';
		}
		me._play1_o10.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner2.appendChild(me._play1_o10);
		me._kommenu.appendChild(me._nachrichtenordner2);
		el=me._nachrichtenordner1=document.createElement('div');
		el.ggId="NachrichtenOrdner1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 234px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : inherit;';
		hs+='width : 304px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtenordner1.ggIsActive=function() {
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
		me._nachrichtenordner1.ggUpdatePosition=function (useTransition) {
		}
		el=me._nachrichboxt3_o1=document.createElement('div');
		els=me._nachrichboxt3_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichboxt3_o1__img.setAttribute('src',basePath + 'images/nachrichboxt3_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichBoxt3 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichboxt3_o1.ggIsActive=function() {
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
		me._nachrichboxt3_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachrichboxt3_o1);
		el=me._nachricht3_o1=document.createElement('div');
		els=me._nachricht3_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht3 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht3";
		el.appendChild(els);
		me._nachricht3_o1.ggIsActive=function() {
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
		me._nachricht3_o1.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner1.appendChild(me._nachricht3_o1);
		el=me._textknopf3_o1=document.createElement('div');
		els=me._textknopf3_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf3_o1__img.setAttribute('src',basePath + 'images/textknopf3_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf3_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf3_o1__imgo.setAttribute('src',basePath + 'images/textknopf3_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf3 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf3_o1.ggIsActive=function() {
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
		me._textknopf3_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht3text_o1.style[domTransition]='none';
			me._nachricht3text_o1.style.visibility=(Number(me._nachricht3text_o1.style.opacity)>0||!me._nachricht3text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht3text_o1.ggVisible=true;
			me._textknopf32_o1.style[domTransition]='none';
			me._textknopf32_o1.style.visibility=(Number(me._textknopf32_o1.style.opacity)>0||!me._textknopf32_o1.style.opacity)?'inherit':'hidden';
			me._textknopf32_o1.ggVisible=true;
		}
		me._textknopf3_o1.onmouseover=function (e) {
			me._textknopf3_o1__img.style.visibility='hidden';
			me._textknopf3_o1__imgo.style.visibility='inherit';
		}
		me._textknopf3_o1.onmouseout=function (e) {
			me._textknopf3_o1__img.style.visibility='inherit';
			me._textknopf3_o1__imgo.style.visibility='hidden';
		}
		me._textknopf3_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf3_o1);
		el=me._textknopf32_o1=document.createElement('div');
		els=me._textknopf32_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf32_o1__img.setAttribute('src',basePath + 'images/textknopf32_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf32 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf32_o1.ggIsActive=function() {
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
		me._textknopf32_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht3text_o1.style[domTransition]='none';
			me._nachricht3text_o1.style.visibility='hidden';
			me._nachricht3text_o1.ggVisible=false;
			me._textknopf32_o1.style[domTransition]='none';
			me._textknopf32_o1.style.visibility='hidden';
			me._textknopf32_o1.ggVisible=false;
		}
		me._textknopf32_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf32_o1);
		el=me._play3_o1=document.createElement('div');
		els=me._play3_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play3_o1__img.setAttribute('src',basePath + 'images/play3_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play3_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play3_o1__imgo.setAttribute('src',basePath + 'images/play3_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play3 O1";
		el.ggDx=115;
		el.ggDy=17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play3_o1.ggIsActive=function() {
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
		me._play3_o1.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play3_o1.onmouseover=function (e) {
			me._play3_o1__img.style.visibility='hidden';
			me._play3_o1__imgo.style.visibility='inherit';
		}
		me._play3_o1.onmouseout=function (e) {
			me._play3_o1__img.style.visibility='inherit';
			me._play3_o1__imgo.style.visibility='hidden';
		}
		me._play3_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._play3_o1);
		el=me._nachrichtbox2_o1=document.createElement('div');
		els=me._nachrichtbox2_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox2_o1__img.setAttribute('src',basePath + 'images/nachrichtbox2_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox2 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtbox2_o1.ggIsActive=function() {
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
		me._nachrichtbox2_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachrichtbox2_o1);
		el=me._nachricht2_o1=document.createElement('div');
		els=me._nachricht2_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht2 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht2";
		el.appendChild(els);
		me._nachricht2_o1.ggIsActive=function() {
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
		me._nachricht2_o1.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner1.appendChild(me._nachricht2_o1);
		el=me._textknopf2_o1=document.createElement('div');
		els=me._textknopf2_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf2_o1__img.setAttribute('src',basePath + 'images/textknopf2_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf2_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf2_o1__imgo.setAttribute('src',basePath + 'images/textknopf2_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf2 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf2_o1.ggIsActive=function() {
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
		me._textknopf2_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht2text_o1.style[domTransition]='none';
			me._nachricht2text_o1.style.visibility=(Number(me._nachricht2text_o1.style.opacity)>0||!me._nachricht2text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht2text_o1.ggVisible=true;
			me._textknopf22_o1.style[domTransition]='none';
			me._textknopf22_o1.style.visibility=(Number(me._textknopf22_o1.style.opacity)>0||!me._textknopf22_o1.style.opacity)?'inherit':'hidden';
			me._textknopf22_o1.ggVisible=true;
		}
		me._textknopf2_o1.onmouseover=function (e) {
			me._textknopf2_o1__img.style.visibility='hidden';
			me._textknopf2_o1__imgo.style.visibility='inherit';
		}
		me._textknopf2_o1.onmouseout=function (e) {
			me._textknopf2_o1__img.style.visibility='inherit';
			me._textknopf2_o1__imgo.style.visibility='hidden';
		}
		me._textknopf2_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf2_o1);
		el=me._textknopf22_o1=document.createElement('div');
		els=me._textknopf22_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf22_o1__img.setAttribute('src',basePath + 'images/textknopf22_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf22 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf22_o1.ggIsActive=function() {
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
		me._textknopf22_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht2text_o1.style[domTransition]='none';
			me._nachricht2text_o1.style.visibility='hidden';
			me._nachricht2text_o1.ggVisible=false;
			me._textknopf22_o1.style[domTransition]='none';
			me._textknopf22_o1.style.visibility='hidden';
			me._textknopf22_o1.ggVisible=false;
		}
		me._textknopf22_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf22_o1);
		el=me._play2_o1=document.createElement('div');
		els=me._play2_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play2_o1__img.setAttribute('src',basePath + 'images/play2_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play2_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play2_o1__imgo.setAttribute('src',basePath + 'images/play2_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play2 O1";
		el.ggDx=115;
		el.ggDy=-27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play2_o1.ggIsActive=function() {
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
		me._play2_o1.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play2_o1.onmouseover=function (e) {
			me._play2_o1__img.style.visibility='hidden';
			me._play2_o1__imgo.style.visibility='inherit';
		}
		me._play2_o1.onmouseout=function (e) {
			me._play2_o1__img.style.visibility='inherit';
			me._play2_o1__imgo.style.visibility='hidden';
		}
		me._play2_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._play2_o1);
		el=me._nachrichtbox1_o1=document.createElement('div');
		els=me._nachrichtbox1_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox1_o1__img.setAttribute('src',basePath + 'images/nachrichtbox1_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox1 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nachrichtbox1_o1.ggIsActive=function() {
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
		me._nachrichtbox1_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachrichtbox1_o1);
		el=me._nachricht1_o1=document.createElement('div');
		els=me._nachricht1_o1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht1 O1";
		el.ggDx=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Nachricht1";
		el.appendChild(els);
		me._nachricht1_o1.ggIsActive=function() {
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
		me._nachricht1_o1.ggUpdatePosition=function (useTransition) {
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
			}
		}
		me._nachrichtenordner1.appendChild(me._nachricht1_o1);
		el=me._textknopf1_o1=document.createElement('div');
		els=me._textknopf1_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf1_o1__img.setAttribute('src',basePath + 'images/textknopf1_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf1_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf1_o1__imgo.setAttribute('src',basePath + 'images/textknopf1_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf1 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf1_o1.ggIsActive=function() {
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
		me._textknopf1_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility='hidden';
			me._aktuellerauftragordner.ggVisible=false;
			me._nachricht1text_o1.style[domTransition]='none';
			me._nachricht1text_o1.style.visibility=(Number(me._nachricht1text_o1.style.opacity)>0||!me._nachricht1text_o1.style.opacity)?'inherit':'hidden';
			me._nachricht1text_o1.ggVisible=true;
			me._textknopf12_o1.style[domTransition]='none';
			me._textknopf12_o1.style.visibility=(Number(me._textknopf12_o1.style.opacity)>0||!me._textknopf12_o1.style.opacity)?'inherit':'hidden';
			me._textknopf12_o1.ggVisible=true;
		}
		me._textknopf1_o1.onmouseover=function (e) {
			me._textknopf1_o1__img.style.visibility='hidden';
			me._textknopf1_o1__imgo.style.visibility='inherit';
		}
		me._textknopf1_o1.onmouseout=function (e) {
			me._textknopf1_o1__img.style.visibility='inherit';
			me._textknopf1_o1__imgo.style.visibility='hidden';
		}
		me._textknopf1_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf1_o1);
		el=me._textknopf12_o1=document.createElement('div');
		els=me._textknopf12_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf12_o1__img.setAttribute('src',basePath + 'images/textknopf12_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TextKnopf12 O1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textknopf12_o1.ggIsActive=function() {
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
		me._textknopf12_o1.onclick=function (e) {
			me._aktuellerauftragordner.style[domTransition]='none';
			me._aktuellerauftragordner.style.visibility=(Number(me._aktuellerauftragordner.style.opacity)>0||!me._aktuellerauftragordner.style.opacity)?'inherit':'hidden';
			me._aktuellerauftragordner.ggVisible=true;
			me._nachricht1text_o1.style[domTransition]='none';
			me._nachricht1text_o1.style.visibility='hidden';
			me._nachricht1text_o1.ggVisible=false;
			me._textknopf12_o1.style[domTransition]='none';
			me._textknopf12_o1.style.visibility='hidden';
			me._textknopf12_o1.ggVisible=false;
		}
		me._textknopf12_o1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf12_o1);
		el=me._play1_o1=document.createElement('div');
		els=me._play1_o1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play1_o1__img.setAttribute('src',basePath + 'images/play1_o1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play1_o1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play1_o1__imgo.setAttribute('src',basePath + 'images/play1_o1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play1 O1";
		el.ggDx=115;
		el.ggDy=-70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play1_o1.ggIsActive=function() {
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
		me._play1_o1.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play1_o1.onmouseover=function (e) {
			me._play1_o1__img.style.visibility='hidden';
			me._play1_o1__imgo.style.visibility='inherit';
		}
		me._play1_o1.onmouseout=function (e) {
			me._play1_o1__img.style.visibility='inherit';
			me._play1_o1__imgo.style.visibility='hidden';
		}
		me._play1_o1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._play1_o1);
		me._kommenu.appendChild(me._nachrichtenordner1);
		el=me._play=document.createElement('div');
		els=me._play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play__img.setAttribute('src',basePath + 'images/play.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Play";
		el.ggDx=0;
		el.ggDy=-261;
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
		me._kommenu.appendChild(me._play);
		el=me._vor=document.createElement('div');
		els=me._vor__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._vor__img.setAttribute('src',basePath + 'images/vor.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vor__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._vor__imgo.setAttribute('src',basePath + 'images/vor__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Vor";
		el.ggDx=43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vor.ggIsActive=function() {
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
		me._vor.onclick=function (e) {
			me._nachrichtenordner2.style[domTransition]='none';
			me._nachrichtenordner2.style.visibility=(Number(me._nachrichtenordner2.style.opacity)>0||!me._nachrichtenordner2.style.opacity)?'inherit':'hidden';
			me._nachrichtenordner2.ggVisible=true;
			me._nachrichtenordner1.style[domTransition]='none';
			me._nachrichtenordner1.style.visibility='hidden';
			me._nachrichtenordner1.ggVisible=false;
		}
		me._vor.onmouseover=function (e) {
			me._vor__img.style.visibility='hidden';
			me._vor__imgo.style.visibility='inherit';
		}
		me._vor.onmouseout=function (e) {
			me._vor__img.style.visibility='inherit';
			me._vor__imgo.style.visibility='hidden';
		}
		me._vor.ggUpdatePosition=function (useTransition) {
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
		me._kommenu.appendChild(me._vor);
		el=me._zuruck=document.createElement('div');
		els=me._zuruck__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._zuruck__img.setAttribute('src',basePath + 'images/zuruck.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zuruck__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._zuruck__imgo.setAttribute('src',basePath + 'images/zuruck__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Zuruck";
		el.ggDx=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zuruck.ggIsActive=function() {
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
		me._zuruck.onclick=function (e) {
			me._nachrichtenordner1.style[domTransition]='none';
			me._nachrichtenordner1.style.visibility=(Number(me._nachrichtenordner1.style.opacity)>0||!me._nachrichtenordner1.style.opacity)?'inherit':'hidden';
			me._nachrichtenordner1.ggVisible=true;
			me._nachrichtenordner2.style[domTransition]='none';
			me._nachrichtenordner2.style.visibility='hidden';
			me._nachrichtenordner2.ggVisible=false;
		}
		me._zuruck.onmouseover=function (e) {
			me._zuruck__img.style.visibility='hidden';
			me._zuruck__imgo.style.visibility='inherit';
		}
		me._zuruck.onmouseout=function (e) {
			me._zuruck__img.style.visibility='inherit';
			me._zuruck__imgo.style.visibility='hidden';
		}
		me._zuruck.ggUpdatePosition=function (useTransition) {
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
		me._kommenu.appendChild(me._zuruck);
		me.divSkin.appendChild(me._kommenu);
		el=me._hilfeordner=document.createElement('div');
		el.ggId="HilfeOrdner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 592px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 351px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hilfeordner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hilfeordner.ggUpdatePosition=function (useTransition) {
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
		el=me._hilfesensimenu=document.createElement('div');
		els=me._hilfesensimenu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hilfesensimenu__img.setAttribute('src',basePath + 'images/hilfesensimenu.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hilfesensimenu__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._hilfesensimenu__imgo.setAttribute('src',basePath + 'images/hilfesensimenu__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="HilfeSENSIMenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -2px;';
		hs+='height : 20px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hilfesensimenu.ggIsActive=function() {
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
		me._hilfesensimenu.onclick=function (e) {
			me._hilfesensimenufelder.style[domTransition]='none';
			me._hilfesensimenufelder.style.visibility=(Number(me._hilfesensimenufelder.style.opacity)>0||!me._hilfesensimenufelder.style.opacity)?'inherit':'hidden';
			me._hilfesensimenufelder.ggVisible=true;
			me._hilfesensimenu2.style[domTransition]='none';
			me._hilfesensimenu2.style.visibility=(Number(me._hilfesensimenu2.style.opacity)>0||!me._hilfesensimenu2.style.opacity)?'inherit':'hidden';
			me._hilfesensimenu2.ggVisible=true;
		}
		me._hilfesensimenu.onmouseover=function (e) {
			me._hilfesensimenu__img.style.visibility='hidden';
			me._hilfesensimenu__imgo.style.visibility='inherit';
		}
		me._hilfesensimenu.onmouseout=function (e) {
			me._hilfesensimenu__img.style.visibility='inherit';
			me._hilfesensimenu__imgo.style.visibility='hidden';
		}
		me._hilfesensimenu.ggUpdatePosition=function (useTransition) {
		}
		me._hilfeordner.appendChild(me._hilfesensimenu);
		el=me._hilfesensimenu2=document.createElement('div');
		els=me._hilfesensimenu2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hilfesensimenu2__img.setAttribute('src',basePath + 'images/hilfesensimenu2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HilfeSENSIMenu2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -2px;';
		hs+='height : 20px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hilfesensimenu2.ggIsActive=function() {
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
		me._hilfesensimenu2.onclick=function (e) {
			me._hilfesensimenufelder.style[domTransition]='none';
			me._hilfesensimenufelder.style.visibility='hidden';
			me._hilfesensimenufelder.ggVisible=false;
			me._hilfesensimenu2.style[domTransition]='none';
			me._hilfesensimenu2.style.visibility='hidden';
			me._hilfesensimenu2.ggVisible=false;
		}
		me._hilfesensimenu2.ggUpdatePosition=function (useTransition) {
		}
		me._hilfeordner.appendChild(me._hilfesensimenu2);
		el=me._hilfesensimenufelder=document.createElement('div');
		el.ggId="HilfeSENSIMenuFelder";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 585px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 348px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hilfesensimenufelder.ggIsActive=function() {
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
		me._hilfesensimenufelder.ggUpdatePosition=function (useTransition) {
		}
		el=me._forschungsmenuhilfe=document.createElement('div');
		el.ggId="ForschungsmenuHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 316px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._forschungsmenuhilfe.ggIsActive=function() {
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
		me._forschungsmenuhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._forschungsmenuhilfe);
		el=me._vollbildhilfe=document.createElement('div');
		el.ggId="VollbildHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 406px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vollbildhilfe.ggIsActive=function() {
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
		me._vollbildhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._vollbildhilfe);
		el=me._datenlinkhilfe=document.createElement('div');
		el.ggId="DatenLinkHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 449px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._datenlinkhilfe.ggIsActive=function() {
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
		me._datenlinkhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._datenlinkhilfe);
		el=me._infohilfe=document.createElement('div');
		el.ggId="InfoHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 216px;';
		hs+='position : absolute;';
		hs+='top : 406px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infohilfe.ggIsActive=function() {
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
		me._infohilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._infohilfe);
		el=me._kartehilfe=document.createElement('div');
		el.ggId="KarteHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 215px;';
		hs+='position : absolute;';
		hs+='top : 315px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kartehilfe.ggIsActive=function() {
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
		me._kartehilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._kartehilfe);
		el=me._playhilfe=document.createElement('div');
		el.ggId="PlayHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 135px;';
		hs+='position : absolute;';
		hs+='top : 272px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._playhilfe.ggIsActive=function() {
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
		me._playhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._playhilfe);
		el=me._datenhilfe=document.createElement('div');
		el.ggId="DatenHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 39px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._datenhilfe.ggIsActive=function() {
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
		me._datenhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._datenhilfe);
		el=me._aktuellenachrichthilfe=document.createElement('div');
		el.ggId="AktuelleNachrichtHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 39px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aktuellenachrichthilfe.ggIsActive=function() {
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
		me._aktuellenachrichthilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._aktuellenachrichthilfe);
		el=me._hilfebox1=document.createElement('div');
		els=me._hilfebox1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 111px;';
		hs+='visibility : hidden;';
		hs+='width : 303px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 307px;';
		hs+='height: auto;';
		hs+='background: #7c7c7c;';
		hs+='border: 2px solid #3a3a3a;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Die aktuelle Station an der du dich befindendest";
		el.appendChild(els);
		me._hilfebox1.ggIsActive=function() {
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
		me._hilfebox1.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox1);
		el=me._aktuellestationhilfe=document.createElement('div');
		el.ggId="AktuelleStationHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 39px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aktuellestationhilfe.ggIsActive=function() {
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
		me._aktuellestationhilfe.onmousedown=function (e) {
			me._hilfebox1.style[domTransition]='none';
			me._hilfebox1.style.visibility=(Number(me._hilfebox1.style.opacity)>0||!me._hilfebox1.style.opacity)?'inherit':'hidden';
			me._hilfebox1.ggVisible=true;
		}
		me._aktuellestationhilfe.onmouseup=function (e) {
			me._hilfebox1.style[domTransition]='none';
			me._hilfebox1.style.visibility='hidden';
			me._hilfebox1.ggVisible=false;
		}
		me._aktuellestationhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._aktuellestationhilfe);
		el=me._sensihilfe=document.createElement('div');
		el.ggId="SENSIHilfe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : 135px;';
		hs+='position : absolute;';
		hs+='top : 359px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sensihilfe.ggIsActive=function() {
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
		me._sensihilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._sensihilfe);
		me._hilfeordner.appendChild(me._hilfesensimenufelder);
		me.divSkin.appendChild(me._hilfeordner);
		el=me._infomenu=document.createElement('div');
		el.ggId="InfoMenu";
		el.ggDx=7;
		el.ggDy=116;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 285px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 306px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infomenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infomenu.logicBlock_alpha = function() {
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
			if (me._infomenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._infomenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._infomenu.style[domTransition]='opacity 700ms ease 0ms';
				if (me._infomenu.ggCurrentLogicStateAlpha == 0) {
					me._infomenu.style.visibility=me._infomenu.ggVisible?'inherit':'hidden';
					me._infomenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._infomenu.style.opacity == 0.0) { me._infomenu.style.visibility="hidden"; } }, 705);
					me._infomenu.style.opacity=0;
				}
			}
		}
		me._infomenu.ggUpdatePosition=function (useTransition) {
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
		el=me._natur40=document.createElement('div');
		els=me._natur40__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._natur40__img.setAttribute('src',basePath + 'images/natur40.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._natur40__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._natur40__imgo.setAttribute('src',basePath + 'images/natur40__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Natur40";
		el.ggDx=-7;
		el.ggDy=-97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._natur40.ggIsActive=function() {
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
		me._natur40.onclick=function (e) {
			player.openUrl("https:\/\/www.uni-marburg.de\/de\/fb19\/natur40","");
		}
		me._natur40.onmouseover=function (e) {
			me._natur40__img.style.visibility='hidden';
			me._natur40__imgo.style.visibility='inherit';
		}
		me._natur40.onmouseout=function (e) {
			me._natur40__img.style.visibility='inherit';
			me._natur40__imgo.style.visibility='hidden';
		}
		me._natur40.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._natur40);
		el=me._tipp2=document.createElement('div');
		els=me._tipp2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._tipp2__img.setAttribute('src',basePath + 'images/tipp2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Tipp2";
		el.ggDx=71;
		el.ggDy=-53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tipp2.ggIsActive=function() {
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
		me._tipp2.onclick=function (e) {
			player.setVariableValue('HilfeModus', false);
		}
		me._tipp2.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._tipp2);
		el=me._tipp=document.createElement('div');
		els=me._tipp__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._tipp__img.setAttribute('src',basePath + 'images/tipp.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._tipp__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._tipp__imgo.setAttribute('src',basePath + 'images/tipp__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Tipp";
		el.ggDx=71;
		el.ggDy=-53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tipp.ggIsActive=function() {
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
		me._tipp.onclick=function (e) {
			player.setVariableValue('HilfeModus', true);
		}
		me._tipp.onmouseover=function (e) {
			me._tipp__img.style.visibility='hidden';
			me._tipp__imgo.style.visibility='inherit';
		}
		me._tipp.onmouseout=function (e) {
			me._tipp__img.style.visibility='inherit';
			me._tipp__imgo.style.visibility='hidden';
		}
		me._tipp.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._tipp);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_11__img.setAttribute('src',basePath + 'images/svg_11.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-84;
		el.ggDy=-52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
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
		me._svg_11.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._svg_11);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_10__img.setAttribute('src',basePath + 'images/svg_10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-84;
		el.ggDy=37;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
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
		me._svg_10.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._svg_10);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-7;
		el.ggDy=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
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
		me._svg_1.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._svg_1);
		el=me._linkoffnen2=document.createElement('div');
		els=me._linkoffnen2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+Cjxzdmcgd2lkdGg9Ijc0LjM3OTQ3OCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mbzIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC'+
			'5kdGQiIGhlaWdodD0iNjQuNDE0NTIiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcyIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOmN4PSItNC4zNzc5MDQ0IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiBvYmpl'+
			'Y3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjeT0iNTUuMTQ1ODQ3IiBzaG93Z3JpZD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOnpvb209IjUuMTgxMzUzNSIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp3aW5kb3ctd2'+
			'lkdGg9IjE5MjAiIGd1aWRldG9sZXJhbmNlPSIxMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IHg9Ii03MTUuMTU2OCIgd2lkdGg9IjIwMy4xNDQyNyIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiBoZWlnaHQ9IjIwMy4xNDQyNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjMxNTMxNSkiIHk9IjY3LjgwNDk5MyIgaWQ9InJlY3QxNDUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdH'+
			'Jva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBkPSJtIC0xMjguNzMwODMsLTguMTUzMzkwOSAyMy43Mzg5NiwtMjMuNzM4OTcyMSAtMTkuMTA2OTgsLTguNDkxOTg4IC0xOC41Mjc5OCw3LjMzMzk5MSAxMy44OTYsMjQuODk2OTY5MSIgaWQ9InBhdGg0NTU0Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCB4PSItMTEwLjk0MzkiIHdpZHRoPSIyOC4wOTgzNzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzA2'+
			'NzM3MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBoZWlnaHQ9IjI3Ljk1NTAyMSIgcnk9IjIuODk0OTk2NCIgeT0iLTI3LjQxNjUwNCIgaWQ9InJlY3Q0NzAxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMzNDY2OTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm'+
			'9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGQ9Im0gLTEwNi42MDcyNiwtMTMuODA1NTQ0IDMuMzEwMjksMi41MDI5MDUgOS41MjcxODcsMi41MDI5MDU1IDEuOTM3NzM0LDMuNzEzOTg4MSAtMTUuMTc4OTExLDIuNzQ1MTIxNyAtOS4yODQ5NywtNi4yOTc2MzIxIHoiIGlkPSJwYXRoNDkzOSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0'+
			'cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDoxLjMzODUyOTk0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgY3k9Ii01NC4xMzQ3ODkiIHI9IjI0LjI4MzU3OSIgaWQ9ImNpcmNsZTQ5MTUiIGN4PSItODguNTc5NDc1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiIHJ5PS'+
			'IwLjQwNzQ0OTAxIiBpZD0icmVjdDQ3MjEiIHk9IjI1LjcxODA2OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiIHJ5PSIwLjQwNzQ0OTAxIiBpZD0icmVjdDg5NCIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg5OSIgY3g9Ii01Mi42NDgyMjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIGlkPSJjaXJjbGU0ODk1IiBjeD0iLTUyLjY0ODIyOCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4OTEiIGN4PSItNTIuNjQ4MjI4Ii8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg4NyIgY3g9Ii01Mi42NDgyMjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgeD0iLTM0LjU0Njk1OSIgd2lkdG'+
			'g9IjguODc3OTg4OCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1IiByeT0iMC40MDc0NDkwMSIgaWQ9InJlY3Q0NzIxLTIiIHk9IjI1LjcxODA2OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCB4PSItMzQuNTQ2OTU5IiB3aWR0aD0iOC44Nzc5ODg4IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIu'+
			'NDcwODUiIHJ5PSIwLjQwNzQ0OTAxIiBpZD0icmVjdDkzMCIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0NDcyMS0wIiB5PSIyNS43MTgwNjkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IHg9Ii0zNC41NDY5NTkiIHdpZHRoPSI4Ljg3Nzk4ODgiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIgcnk9IjAuNDA3NDQ5MDEiIGlkPSJyZWN0MTk3NyIgeT0iMjUuNzE4MDY5Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTgzNzg5OTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtz'+
			'dHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjc5MjgxODEsLTMuMTA1MjUxOSwzLjEwNTI1MTksMS43OTI4MTgxLC04MzQuNTg2NjMsNTU2LjQzMTk5KSIgZD0ibSAyNTcuOTgzMDMsMTM3LjQ1NjI1IC00LjkwMTk0LDguNDkwNDEgaCAtOS44MDM4NyBsIC00LjkwMTk0LC04LjQ5MDQxIDQuOTAxOTQsLTguNDkwNCBoIDkuODAzODcgeiIgaWQ9InBhdGgyMDM4Ii8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIyOC4yNzA0NzciIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbn'+
			'Q6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NTMuMzMzMzMyMDZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNvbnN0YW50aWE7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ29uc3RhbnRpYSwgQm9sZCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxy'+
			'LXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeT0iNTAuODQwMDY1IiBpZD0idGV4dDg0OCI+CiAgPHRzcGFuIHg9IjI4LjI3MDQ3NyIgc29kaXBvZGk6cm9sZT0ibGluZSIgaWQ9InRzcGFuODQ2IiB5PSI1MC44NDAwNjUiPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
		me._linkoffnen2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="LinkOffnen2";
		el.ggDx=71;
		el.ggDy=37;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkoffnen2.ggIsActive=function() {
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
		me._linkoffnen2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SENSI') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._linkoffnen2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._linkoffnen2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._linkoffnen2.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._linkoffnen2.ggCurrentLogicStateVisible == 0) {
					me._linkoffnen2.style.visibility="hidden";
					me._linkoffnen2.ggVisible=false;
				}
				else {
					me._linkoffnen2.style.visibility=(Number(me._linkoffnen2.style.opacity)>0||!me._linkoffnen2.style.opacity)?'inherit':'hidden';
					me._linkoffnen2.ggVisible=true;
				}
			}
		}
		me._linkoffnen2.logicBlock_alpha = function() {
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
			if (me._linkoffnen2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._linkoffnen2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._linkoffnen2.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._linkoffnen2.ggCurrentLogicStateAlpha == 0) {
					me._linkoffnen2.style.visibility=me._linkoffnen2.ggVisible?'inherit':'hidden';
					me._linkoffnen2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._linkoffnen2.style.opacity == 0.0) { me._linkoffnen2.style.visibility="hidden"; } }, 1005);
					me._linkoffnen2.style.opacity=0;
				}
			}
		}
		me._linkoffnen2.onclick=function (e) {
			player.setVariableValue('Infomenu', false);
		}
		me._linkoffnen2.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._linkoffnen2);
		me.divSkin.appendChild(me._infomenu);
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
		if (me.elementMouseOver['forschungspunktebutton']) {
			player.setVariableValue('aktuellerText', "Erzeugte Forschungsdaten");
		}
		if (me.elementMouseDown['schloss2']) {
			player.setVariableValue('Schloss2', true);
		}
		if (me.elementMouseDown['schloss4']) {
			player.setVariableValue('Schloss4', true);
		}
		if (me.elementMouseDown['schloss5']) {
			player.setVariableValue('Schloss5', true);
		}
		if (me.elementMouseOver['station5q']) {
			player.setVariableValue('aktuellerTextFM', "Quiz bestanden");
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._station1up1.logicBlock_alpha();
	me._station1up2.logicBlock_alpha();
	me._station1q.logicBlock_alpha();
	me._station1.logicBlock_alpha();
	me._sensimenu2.logicBlock_visible();
	me._vollbild.logicBlock_visible();
	me._vollbild.logicBlock_alpha();
	me._vollbildaus.logicBlock_visible();
	me._vollbildaus.logicBlock_alpha();
	me._kommunikation.logicBlock_visible();
	me._kommunikation.logicBlock_alpha();
	me._linkoffnen.logicBlock_visible();
	me._linkoffnen.logicBlock_alpha();
	me._kartenmenuzeigen.logicBlock_visible();
	me._kartenmenuzeigen.logicBlock_alpha();
	me._datenlink.logicBlock_visible();
	me._datenlink.logicBlock_alpha();
	me._forschungsmenuzeigen.logicBlock_visible();
	me._forschungsmenuzeigen.logicBlock_alpha();
	me._st0.logicBlock_alpha();
	me._st1.logicBlock_alpha();
	me._st2.logicBlock_alpha();
	me._linkmenu.logicBlock_visible();
	me._linkmenu.logicBlock_alpha();
	me._station0offen.logicBlock_visible();
	me._station1offen.logicBlock_visible();
	me._station2offen.logicBlock_visible();
	me._schlossstation0.logicBlock_alpha();
	me._schlossstation1.logicBlock_alpha();
	me._schlossstation2.logicBlock_alpha();
	me._forschungsmenu.logicBlock_visible();
	me._forschungsmenu.logicBlock_alpha();
	me._kartenmenu.logicBlock_visible();
	me._kartenmenu.logicBlock_alpha();
	me._kommenu.logicBlock_visible();
	me._kommenu.logicBlock_alpha();
	me._infomenu.logicBlock_alpha();
	me._linkoffnen2.logicBlock_visible();
	me._linkoffnen2.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._station1.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._sensimenu2.logicBlock_visible();me._vollbild.logicBlock_visible();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._kommunikation.logicBlock_visible();me._kommunikation.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._kartenmenuzeigen.logicBlock_visible();me._kartenmenuzeigen.logicBlock_alpha();me._datenlink.logicBlock_visible();me._datenlink.logicBlock_alpha();me._forschungsmenuzeigen.logicBlock_visible();me._forschungsmenuzeigen.logicBlock_alpha();me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._st2.logicBlock_alpha();me._linkmenu.logicBlock_visible();me._linkmenu.logicBlock_alpha();me._station0offen.logicBlock_visible();me._station1offen.logicBlock_visible();me._station2offen.logicBlock_visible();me._schlossstation0.logicBlock_alpha();me._schlossstation1.logicBlock_alpha();me._schlossstation2.logicBlock_alpha();me._forschungsmenu.logicBlock_visible();me._forschungsmenu.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._station1.logicBlock_alpha();me._kartenmenu.logicBlock_visible();me._kartenmenu.logicBlock_alpha();me._kommenu.logicBlock_visible();me._kommenu.logicBlock_alpha();me._infomenu.logicBlock_alpha();me._linkoffnen2.logicBlock_visible();me._linkoffnen2.logicBlock_alpha(); });
	player.addListener('varchanged_LinkMenu', function(args) { me._linkmenu.logicBlock_visible();me._linkmenu.logicBlock_alpha(); });
	player.addListener('varchanged_Forschungsmenu', function(args) { me._forschungsmenu.logicBlock_visible();me._forschungsmenu.logicBlock_alpha(); });
	player.addListener('varchanged_KartenMenu', function(args) { me._kartenmenu.logicBlock_visible();me._kartenmenu.logicBlock_alpha(); });
	player.addListener('varchanged_KomMenu', function(args) { me._kommenu.logicBlock_visible();me._kommenu.logicBlock_alpha(); });
	player.addListener('varchanged_Infomenu', function(args) { me._infomenu.logicBlock_alpha(); });
	player.addListener('varchanged_SENSI', function(args) { me._sensimenu2.logicBlock_visible();me._vollbild.logicBlock_visible();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._kommunikation.logicBlock_visible();me._kommunikation.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._kartenmenuzeigen.logicBlock_visible();me._kartenmenuzeigen.logicBlock_alpha();me._datenlink.logicBlock_visible();me._datenlink.logicBlock_alpha();me._forschungsmenuzeigen.logicBlock_visible();me._forschungsmenuzeigen.logicBlock_alpha();me._linkoffnen2.logicBlock_visible();me._linkoffnen2.logicBlock_alpha(); });
	player.addListener('varchanged_Station', function(args) { me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._st2.logicBlock_alpha();me._station0offen.logicBlock_visible();me._station1offen.logicBlock_visible();me._station2offen.logicBlock_visible(); });
	player.addListener('varchanged_Schloss6', function(args) { me._schlossstation0.logicBlock_alpha(); });
	player.addListener('varchanged_Schloss1', function(args) { me._schlossstation0.logicBlock_alpha();me._schlossstation2.logicBlock_alpha(); });
	player.addListener('varchanged_Schloss3', function(args) { me._schlossstation0.logicBlock_alpha();me._schlossstation2.logicBlock_alpha(); });
	player.addListener('varchanged_Schloss4', function(args) { me._schlossstation1.logicBlock_alpha(); });
	player.addListener('varchanged_Schloss2', function(args) { me._schlossstation1.logicBlock_alpha();me._schlossstation2.logicBlock_alpha(); });
	player.addListener('varchanged_Schloss5', function(args) { me._schlossstation1.logicBlock_alpha(); });
	me.skinTimerEvent();
};