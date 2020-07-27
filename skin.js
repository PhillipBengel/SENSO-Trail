// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: SENSO-Trail Skin.ggsk
// Generated 2020-07-27T17:00:45

function pano2vrSkin(player,base) {
	player.addVariable('Station', 1, 0);
	player.addVariable('Forschungspunkte', 0, "0");
	player.addVariable('SENSI', 2, false);
	player.addVariable('Forschungsmenu', 2, false);
	player.addVariable('KomMenu', 2, false);
	player.addVariable('KartenMenu', 2, false);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiIHdpZHRoPSIxOS42Nzk1NjdtbSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGQuc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaWQ9InN2ZzE4ODEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgogIDxj'+
			'bGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB5PSI3LjgzOTc2MTMiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0NTgwMS0xIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIvPgogIDwvY2xpcFBhdGg+Ci'+
			'AgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB5PSI3LjgzOTc2MTMiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0MTg2MyIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRoPgog'+
			'PC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOmN5PSIyOC4wMDcwNDEiIGlua3NjYXBlOndpbmRvdy14PSItOSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpZD0iYmFzZSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBzaG93Z3JpZD'+
			'0iZmFsc2UiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6Y3g9IjQxLjYwOTAyMyIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBmaXQtbWFyZ2luLXRvcD0iMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBl'+
			'IHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45MzMzMjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaG'+
			'FycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0MjQtMCIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIvPgogIDxyZWN0IHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ry'+
			'b2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjY3ODAyMTg1IiB4PSI0OS43NjkyOTUiIHk9IjE2Ni44Mjc1NiIgd2lkdGg9IjEwLjgzMDQ1MiIgaWQ9InJlY3QxODA4IiBoZWlnaHQ9IjcuODU2NzciLz4KICA8cmVjdCByeT0iMC43NDQ4MzkyNSIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMzI0OTk5OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTY2LjgyNzU2IiB4PSI0OS43NjkyOTUiIHdpZH'+
			'RoPSIxMC44MzA0NTIiIGlkPSJyZWN0MjQ1NCIgaGVpZ2h0PSI3Ljg1Njc3Ii8+CiAgPHJlY3Qgcnk9IjEuMDgyMDExMyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMDkxNDA4Mjk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMjc0MjI0ODcsIDAuMjc0MjI0ODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSIxNjguNzA4NjgiIHg9IjUwLjI1MzQ4NyIgd2lkdGg9IjguMDU4ODQ2NSIgaWQ9InJlY3QxODUxIiBoZWlnaHQ9IjUuNjI1MTE0Ii8+CiAgPGcgc3R5'+
			'bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODY0LTAiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjA1NzQ3MTg0LC0wLjA1OTYxMDQsMC4wNTk2MTA0LC0wLjA1NzQ3MTg0LDU2LjM0NzMxMywxNjcuMjM2NjYpIj4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiByeT0iMi41MDM2MDMyIiB4PSItMzkuNTEwNTU5IiB5PSItMTguODMzMDU5IiB3aWR0aD0iMTUuNTU3NzQ0IiBpZD0icmVjdDU4NTYtNSIgaGVpZ2h0PSI1MS4xNzY3ODgiLz4KICAgPG'+
			'cgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODYyLTciIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNTg1OC0yIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4z'+
			'MzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdH'+
			'k6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNTg2MC0zIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45'+
			'NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbild__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbild__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiIHdpZHRoPSIxOS42Nzk1NjdtbSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGQyLnN2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'IwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIGlkPSJzdmcxODgxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIGhlaWdodD0iMTcuMDQzMDExbW0iIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4KICA8'+
			'Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeD0iLTg5LjUxMzM1MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRoPg'+
			'ogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeD0iLTg5LjUxMzM1MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiIGhlaWdodD0iMjkuMzU3MjYyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIi8+CiAgPC9jbGlwUGF0aD4K'+
			'IDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IiBpbmtzY2FwZTpjeT0iMjguMDA3MDQxIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGJvcmRlcm9wYWNpdHk9IjEuMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaWQ9ImJhc2UiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgc2hvd2dyaW'+
			'Q9ImZhbHNlIiBpbmtzY2FwZTpzbmFwLWdsb2JhbD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN4PSI0MS42MDkwMjMiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgZml0LW1hcmdpbi10b3A9IjAiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlw'+
			'ZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiPgogIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2'+
			'hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NDI0LTAiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC04LjA1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiLz4KICA8cmVjdCBzdHlsZT0ib3BhY2l0eTowLjQ3MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0'+
			'cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iMC42NzgwMjE4NSIgeD0iNDkuNzY5Mjk1IiB5PSIxNjYuODI3NTYiIHdpZHRoPSIxMC44MzA0NTIiIGlkPSJyZWN0MTgwOCIgaGVpZ2h0PSI3Ljg1Njc3Ii8+CiAgPHJlY3Qgcnk9IjAuNzQ0ODM5MjUiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2Ni44Mjc1NiIgeD0iNDkuNzY5Mjk1IiB3aW'+
			'R0aD0iMTAuODMwNDUyIiBpZD0icmVjdDI0NTQiIGhlaWdodD0iNy44NTY3NyIvPgogIDxyZWN0IHJ5PSIxLjA4MjAxMTMiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjA5MTQwODI5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTowLjI3NDIyNDg3LCAwLjI3NDIyNDg3O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTY4LjcwODY4IiB4PSI1MC4yNTM0ODciIHdpZHRoPSI4LjA1ODg0NjUiIGlkPSJyZWN0MTg1MSIgaGVpZ2h0PSI1LjYyNTExNCIvPgogIDxnIHN0'+
			'eWxlPSJmaWxsOiM0ZDRkNGQiIGlkPSJnNTg2NC0wIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wNTc0NzE4NCwtMC4wNTk2MTA0LDAuMDU5NjEwNCwtMC4wNTc0NzE4NCw1Ni4zNDczMTMsMTY3LjIzNjY2KSI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgcnk9IjIuNTAzNjAzMiIgeD0iLTM5LjUxMDU1OSIgeT0iLTE4LjgzMzA1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgaWQ9InJlY3Q1ODU2LTUiIGhlaWdodD0iNTEuMTc2Nzg4Ii8+CiAgID'+
			'xnIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGlkPSJnNTg2Mi03IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUsLTYzLjk0MjUxNywyOS44NjI2MTkpIj4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDU4NTgtMiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgZD0ibSAtNDAu'+
			'MzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiLz4KICAgIDxwYXRoIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaX'+
			'R5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDU4NjAtMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEu'+
			'OTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiIHdpZHRoPSIxOS42Nzk1NjdtbSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGRBdXMuc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcm'+
			'cvMjAwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaWQ9InN2ZzE4ODEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgog'+
			'IDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB5PSI3LjgzOTc2MTMiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0NTgwMS0xIiBoZWlnaHQ9IjI5LjM1NzI2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIvPgogIDwvY2xpcFBhdG'+
			'g+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB5PSI3LjgzOTc2MTMiIHdpZHRoPSIyOS43MjU3NjMiIGlkPSJyZWN0MTg2MyIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYXRo'+
			'PgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOmN5PSIzMi45OTk0NzkiIGlua3NjYXBlOndpbmRvdy14PSItOSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpZD0iYmFzZSIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBzaG93Z3'+
			'JpZD0iZmFsc2UiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6Y3g9IjMyLjA3MjUyMyIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBmaXQtbWFyZ2luLXRvcD0iMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0'+
			'eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45MzMzMjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZG'+
			'FzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ0MjQtMCIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIvPgogIDxyZWN0IHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjIxNjE3OTgyO3N0cm9rZS1taXRlcmxpbWl0OjQ7'+
			'c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjQ1MDk5ODkiIHg9IjUwLjE0NTE0NSIgeT0iMTY5LjEwNjAzIiB3aWR0aD0iNy4yMDQwNzc3IiBpZD0icmVjdDE4MDgiIGhlaWdodD0iNS4yMjYwNzc2Ii8+CiAgPHJlY3Qgcnk9IjAuOTU2NzU2MjMiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjEyNTc5Mjg2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTowLjM3NzM3ODYsIDAuMzc3Mzc4NjtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIH'+
			'k9IjE2Ni44NTc3NiIgeD0iNDkuNzY5NTQ3IiB3aWR0aD0iMTAuODMwNzkxIiBpZD0icmVjdDE4NTEiIGhlaWdodD0iNy45MjY1NjE4Ii8+CiAgPHJlY3Qgcnk9IjAuNDk4NjM3NSIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMjE3NTczMzQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTY5LjA5NjcxIiB4PSI1MC4xMjkxNDMiIHdpZHRoPSI3LjI1MDUxNTkiIGlkPSJyZWN0MjQ1NCIgaGVpZ2h0PSI1LjI1OTc2NTYiLz4KICA8'+
			'ZyBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBpZD0iZzU4NjQtMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNTc0NzE4NCwwLjA1OTYxMDQsLTAuMDU5NjEwNCwwLjA1NzQ3MTg0LDYxLjUwMzg0MSwxNjkuNTQyMykiPgogICA8cmVjdCBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHJ5PSIyLjUwMzYwMzIiIHg9Ii0zOS41MTA1NTkiIHk9Ii0xOC44MzMwNTkiIHdpZHRoPSIxNS41NTc3NDQiIGlkPSJyZWN0NTg1Ni01IiBoZWlnaHQ9IjUxLjE3Njc4OCIvPgogIC'+
			'A8ZyBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBpZD0iZzU4NjItNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg1ODU4LTIiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIGQ9Im0gLTQw'+
			'LjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5Ii8+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2'+
			'l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg1ODYwLTMiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDEx'+
			'Ljk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._vollbildaus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbildaus__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5LjY3OTU2NyAxNy4wNDMwMTEiIHdpZHRoPSIxOS42Nzk1NjdtbSIgc29kaXBvZGk6ZG9jbmFtZT0iVm9sbGJpbGRBdXMyLnN2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIGlkPSJzdmcxODgxIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIGhlaWdodD0iMTcuMDQzMDExbW0iIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4K'+
			'ICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeD0iLTg5LjUxMzM1MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIgaGVpZ2h0PSIyOS4zNTcyNjIiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiLz4KICA8L2NsaXBQYX'+
			'RoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeD0iLTg5LjUxMzM1MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiIGhlaWdodD0iMjkuMzU3MjYyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIi8+CiAgPC9jbGlwUGF0'+
			'aD4KIDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IiBpbmtzY2FwZTpjeT0iMzIuOTk5NDc5IiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGJvcmRlcm9wYWNpdHk9IjEuMCIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIgaWQ9ImJhc2UiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgc2hvd2'+
			'dyaWQ9ImZhbHNlIiBpbmtzY2FwZTpzbmFwLWdsb2JhbD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgZml0LW1hcmdpbi1ib3R0b209IjAiIGlua3NjYXBlOmN4PSIzMi4wNzI1MjMiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgZml0LW1hcmdpbi10b3A9IjAiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6'+
			'dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiPgogIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW'+
			'Rhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0NDI0LTAiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC04LjA1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiLz4KICA8cmVjdCBzdHlsZT0ib3BhY2l0eTowLjQ3MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yMTYxNzk4MjtzdHJva2UtbWl0ZXJsaW1pdDo0'+
			'O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iMC40NTA5OTg5IiB4PSI1MC4xNDUxNDUiIHk9IjE2OS4xMDYwMyIgd2lkdGg9IjcuMjA0MDc3NyIgaWQ9InJlY3QxODA4IiBoZWlnaHQ9IjUuMjI2MDc3NiIvPgogIDxyZWN0IHJ5PSIwLjk1Njc1NjIzIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4xMjU3OTI4NjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4zNzczNzg2LCAwLjM3NzM3ODY7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIi'+
			'B5PSIxNjYuODU3NzYiIHg9IjQ5Ljc2OTU0NyIgd2lkdGg9IjEwLjgzMDc5MSIgaWQ9InJlY3QxODUxIiBoZWlnaHQ9IjcuOTI2NTYxOCIvPgogIDxyZWN0IHJ5PSIwLjQ5ODYzNzUiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjIxNzU3MzM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2OS4wOTY3MSIgeD0iNTAuMTI5MTQzIiB3aWR0aD0iNy4yNTA1MTU5IiBpZD0icmVjdDI0NTQiIGhlaWdodD0iNS4yNTk3NjU2Ii8+CiAg'+
			'PGcgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODY0LTAiIHRyYW5zZm9ybT0ibWF0cml4KDAuMDU3NDcxODQsMC4wNTk2MTA0LC0wLjA1OTYxMDQsMC4wNTc0NzE4NCw2MS41MDM4NDEsMTY5LjU0MjMpIj4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiByeT0iMi41MDM2MDMyIiB4PSItMzkuNTEwNTU5IiB5PSItMTguODMzMDU5IiB3aWR0aD0iMTUuNTU3NzQ0IiBpZD0icmVjdDU4NTYtNSIgaGVpZ2h0PSI1MS4xNzY3ODgiLz4KIC'+
			'AgPGcgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODYyLTciIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNTg1OC0yIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00'+
			'MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIvPgogICAgPHBhdGggc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYW'+
			'NpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNTg2MC0zIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAx'+
			'MS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIiB3aWR0aD0iNzQuMzc5NDc4IiBzb2RpcG9kaTpkb2NuYW1lPSJJbmZvLnN2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIGlkPSJzdmcyIiB4bW'+
			'xuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIGhlaWdodD0iNjQuNDE0NTIiIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSI1LjE4MTM1MzUiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGlua3NjYXBlOndpbmRvdy14PSItOSIgYm9y'+
			'ZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzkiIGd1aWRldG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgc2hvd2dyaWQ9ImZhbHNlIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOmN4PSItNC4zNzc5MDQ0Ii'+
			'BpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIi8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRo'+
			'MTQzIj4KICAgPHJlY3Qgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiB5PSI2Ny44MDQ5OTMiIHg9Ii03MTUuMTU2OCIgd2lkdGg9IjIwMy4xNDQyNyIgaWQ9InJlY3QxNDUiIGhlaWdodD0iMjAzLjE0NDI3IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm'+
			'9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNDU1NCIgZD0ibSAtMTI4LjczMDgzLC04LjE1MzM5MDkgMjMuNzM4OTYsLTIzLjczODk3MjEgLTE5LjEwNjk4LC04LjQ5MTk4OCAtMTguNTI3OTgsNy4zMzM5OTEgMTMuODk2LDI0Ljg5Njk2OTEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IHJ5PSIyLjg5NDk5NjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzA2NzM3MDc7c3Ryb2tlLW1pdGVy'+
			'bGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSItMjcuNDE2NTA0IiB4PSItMTEwLjk0MzkiIHdpZHRoPSIyOC4wOTgzNzkiIGlkPSJyZWN0NDcwMSIgaGVpZ2h0PSIyNy45NTUwMjEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2'+
			'tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaWQ9InBhdGg0OTM5IiBkPSJtIC0xMDYuNjA3MjYsLTEzLjgwNTU0NCAzLjMxMDI5LDIuNTAyOTA1IDkuNTI3MTg3LDIuNTAyOTA1NSAxLjkzNzczNCwzLjcxMzk4ODEgLTE1LjE3ODkxMSwyLjc0NTEyMTcgLTkuMjg0OTcsLTYuMjk3NjMyMSB6Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ry'+
			'b2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIHI9IjI0LjI4MzU3OSIgaWQ9ImNpcmNsZTQ5MTUiIGN4PSItODguNTc5NDc1IiBjeT0iLTU0LjEzNDc4OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiB5PSIyNS43MTgwNjkiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZW'+
			'N0NDcyMSIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiB5PSIyNS43MTgwNjkiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0ODk0IiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VP'+
			'blVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg5OSIgY3g9Ii01Mi42NDgyMjgiIGN5PSItMjguMDAxMzg3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiByPSIxMC'+
			'45Mjk5MDciIGlkPSJjaXJjbGU0ODk1IiBjeD0iLTUyLjY0ODIyOCIgY3k9Ii0yOC4wMDEzODciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4OTEiIGN4PSItNTIuNjQ4MjI4IiBjeT0iLTI4LjAwMTM4NyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQ'+
			'YXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgcj0iMTAuOTI5OTA3IiBpZD0iY2lyY2xlNDg4NyIgY3g9Ii01Mi42NDgyMjgiIGN5PSItMjguMDAxMzg3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCBzdHlsZT0iZmlsbDojMDAwMDAwO2'+
			'ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgeT0iMjUuNzE4MDY5IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEtMiIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiB5PSIyNS43MTgwNjkiIHdpZHRoPSI4Ljg3Nzk4'+
			'ODgiIGlkPSJyZWN0OTMwIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHk9IjI1LjcxODA2OSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTAiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHk9IjI1LjcxODA2OSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3QxOTc3IiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45ODM3ODk5MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0'+
			'cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGlkPSJwYXRoMjAzOCIgdHJhbnNmb3JtPSJtYXRyaXgoMS43OTI4MTgxLC0zLjEwNTI1MTksMy4xMDUyNTE5LDEuNzkyODE4MSwtODM0LjU4NjYzLDU1Ni40MzE5OSkiIGQ9Im0gMjU3Ljk4MzAzLDEzNy40NTYyNSAtNC45MDE5NCw4LjQ5MDQxIGggLTkuODAzODcgbCAtNC45MDE5NCwtOC40OTA0MSA0LjkwMTk0LC04LjQ5MDQgaCA5LjgwMzg3IHoiLz4KIDx0ZXh0IHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldG'+
			'NoOm5vcm1hbDtmb250LXNpemU6NTMuMzMzMzMyMDZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNvbnN0YW50aWE7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ29uc3RhbnRpYSwgQm9sZCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzMzMzMzMztm'+
			'aWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeD0iMjguMjcwNDc3IiB5PSI1MC44NDAwNjUiIGlkPSJ0ZXh0ODQ4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8dHNwYW4geD0iMjguMjcwNDc3IiB5PSI1MC44NDAwNjUiIGlkPSJ0c3Bhbjg0NiIgc29kaXBvZGk6cm9sZT0ibGluZSI+aTwvdHNwYW4+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._linkoffnen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkoffnen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIiB3aWR0aD0iNzQuMzc5NDc4IiBzb2RpcG9kaTpkb2NuYW1lPSJJbmZvMi5zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBpZD0ic3ZnMiIgeG'+
			'1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiBoZWlnaHQ9IjY0LjQxNDUyIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBpbmtzY2FwZTpjeT0iNTUuMTQ1ODQ3IiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGJv'+
			'cmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXc5IiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIHNob3dncmlkPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpjeD0iLTQuMzc3OTA0NC'+
			'IgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IHN0eWxlPSJzdHJva2Utd2lkdGg6MS43MTIxMjg2NCIgeT0iNjcuODA0OTkzIiB4PSItNzE1LjE1NjgiIHdpZHRoPSIyMDMuMTQ0MjciIGlkPSJyZWN0MTQ1IiBoZWlnaHQ9IjIwMy4xNDQyNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjMxNTMxNSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdH'+
			'Jva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDQ1NTQiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5ODggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCByeT0iMi44OTQ5OTY0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMwNjczNzA3O3N0cm9rZS1taXRl'+
			'cmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iLTI3LjQxNjUwNCIgeD0iLTExMC45NDM5IiB3aWR0aD0iMjguMDk4Mzc5IiBpZD0icmVjdDQ3MDEiIGhlaWdodD0iMjcuOTU1MDIxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMzNDY2OTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm'+
			'9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlkPSJwYXRoNDkzOSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0'+
			'cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDoxLjMzODUyOTk0IiByPSIyNC4yODM1NzkiIGlkPSJjaXJjbGU0OTE1IiBjeD0iLTg4LjU3OTQ3NSIgY3k9Ii01NC4xMzQ3ODkiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgeT0iMjUuNzE4MDY5IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icm'+
			'VjdDQ3MjEiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgeT0iMjUuNzE4MDY5IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDg5NCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4OTkiIGN4PSItNTIuNjQ4MjI4IiBjeT0iLTI4LjAwMTM4NyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgcj0iMT'+
			'AuOTI5OTA3IiBpZD0iY2lyY2xlNDg5NSIgY3g9Ii01Mi42NDgyMjgiIGN5PSItMjguMDAxMzg3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiByPSIxMC45Mjk5MDciIGlkPSJjaXJjbGU0ODkxIiBjeD0iLTUyLjY0ODIyOCIgY3k9Ii0yOC4wMDEzODciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIHI9IjEwLjkyOTkwNyIgaWQ9ImNpcmNsZTQ4ODciIGN4PSItNTIuNjQ4MjI4IiBjeT0iLTI4LjAwMTM4NyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3Qgc3R5bGU9ImZpbGw6IzAwMDAwMD'+
			'tmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHk9IjI1LjcxODA2OSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTIiIGhlaWdodD0iNDIuOTQyNDQ4IiByeD0iMi40NzA4NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgeT0iMjUuNzE4MDY5IiB3aWR0aD0iOC44Nzc5'+
			'ODg4IiBpZD0icmVjdDkzMCIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiB5PSIyNS43MTgwNjkiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMS0wIiBoZWlnaHQ9IjQyLjk0MjQ0OCIgcng9IjIuNDcwODUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiB5PSIyNS43MTgwNjkiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0MTk3NyIgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ4PSIyLjQ3MDg1Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTgzNzg5OTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtz'+
			'dHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBpZD0icGF0aDIwMzgiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIiBkPSJtIDI1Ny45ODMwMywxMzcuNDU2MjUgLTQuOTAxOTQsOC40OTA0MSBoIC05LjgwMzg3IGwgLTQuOTAxOTQsLTguNDkwNDEgNC45MDE5NCwtOC40OTA0IGggOS44MDM4NyB6Ii8+CiA8dGV4dCBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZX'+
			'RjaDpub3JtYWw7Zm9udC1zaXplOjUzLjMzMzMzMjA2cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpDb25zdGFudGlhOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0NvbnN0YW50aWEsIEJvbGQnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMzMzMzMzM7'+
			'ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHg9IjI4LjI3MDQ3NyIgeT0iNTAuODQwMDY1IiBpZD0idGV4dDg0OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHRzcGFuIHg9IjI4LjI3MDQ3NyIgeT0iNTAuODQwMDY1IiBpZD0idHNwYW44NDYiIHNvZGlwb2RpOnJvbGU9ImxpbmUiPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
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
			player.setVariableValue('SENSI', false);
			player.openUrl("https:\/\/www.uni-marburg.de\/de\/fb19\/natur40","");
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			me._vollbildaus.style[domTransition]='none';
			me._vollbildaus.style.visibility='hidden';
			me._vollbildaus.ggVisible=false;
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
			me._daten.style[domTransition]='none';
			me._daten.style.visibility=(Number(me._daten.style.opacity)>0||!me._daten.style.opacity)?'inherit':'hidden';
			me._daten.ggVisible=true;
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('SENSI', false);
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
		me._linkmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
		me._linkmenu.appendChild(me._daten);
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
		el.ggDx=3;
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
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
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
		me._kartenmenu.appendChild(me._svg_1);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iNDU2LjA1MTQybW0iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgd2lkdGg9IjI5OC43NDg4N21tIiBpbmtzY2FwZTp2ZXJzaW'+
			'9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHNvZGlwb2RpOmRvY25hbWU9IitUZW1wLnN2ZyIgaWQ9InN2ZzE2NDMiIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcbWF4LWtcRGVza3RvcFxTRU5TTy1UcmFpbFxLYXJ0ZW5cK1RyYW5zZWt0ZW4ucG5nIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgdmlld0Jv'+
			'eD0iMCAwIDI5OC43NDg4OCA0NTYuMDUxNDIiIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5NiIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcyBpZD0iZGVmczE2MzciPgogIDxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJsaW5lYXJHcmFkaWVudDE0MzUiPgogICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojZmY2NjAwO3N0b3Atb3BhY2l0eToxOyIgb2Zmc2V0PSIwIiBpZD0ic3RvcDE0MzEiLz4KICAgPHN0b3Agc3R5bGU9In'+
			'N0b3AtY29sb3I6I2ZmNjYwMDtzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIgaWQ9InN0b3AxNDMzIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQxMzQyIj4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzVmZDNiYztzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AxMzM4Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM1ZmQzYmM7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTM0MCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVh'+
			'ckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50MTMxMC03Ij4KICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzgwMDAwMDtzdG9wLW9wYWNpdHk6MTsiIG9mZnNldD0iMCIgaWQ9InN0b3AxMzA2Ii8+CiAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiM4MDAwMDA7c3RvcC1vcGFjaXR5OjA7IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMTMwOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPG1hcmtlciBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIgcmVmWD0iMCIgb3JpZW50PSJhdXRvIiByZWZZPSIwIiBpZD0iQXJyb3cxTGVuZCIgaW5rc2NhcGU6aXNzdG'+
			'9jaz0idHJ1ZSIgaW5rc2NhcGU6c3RvY2tpZD0iQXJyb3cxTGVuZCI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDE3ODEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjgsMCwwLC0wLjgsLTEwLDApIiBkPSJNIDAsMCA1LC01IC0xMi41LDAgNSw1IFoiLz4KICA8L21hcmtlcj4KICA8bWFya2VyIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIiByZWZYPSIwIiBv'+
			'cmllbnQ9ImF1dG8iIHJlZlk9IjAiIGlkPSJBcnJvdzFMc3RhcnQiIGlua3NjYXBlOmlzc3RvY2s9InRydWUiIGlua3NjYXBlOnN0b2NraWQ9IkFycm93MUxzdGFydCI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpZD0icGF0aDE3NzgiIHRyYW5zZm9ybT0ibWF0cml4KDAuOCwwLDAsMC44LDEwLDApIiBkPSJNIDAsMCA1LC01IC0xMi41LDAgNSw1IFoiLz4KICA8L2'+
			'1hcmtlcj4KICA8aW5rc2NhcGU6cGF0aC1lZmZlY3QgdmVydGljYWxfcGF0dGVybj0iZmFsc2UiIHByb3BfdW5pdHM9ImZhbHNlIiBwcm9wX3NjYWxlPSIwLjI2NDU4MzMzIiBjb3B5dHlwZT0ic2luZ2xlX3N0cmV0Y2hlZCIgdGFuZ19vZmZzZXQ9IjAiIGlkPSJwYXRoLWVmZmVjdDEzNzAiIHNwYWNpbmc9IjAiIHBhdHRlcm49Ik0gMCw1IEMgMCwyLjI0IDIuMjQsMCA1LDAgNy43NiwwIDEwLDIuMjQgMTAsNSAxMCw3Ljc2IDcuNzYsMTAgNSwxMCAyLjI0LDEwIDAsNy43NiAwLDUgWiIgZnVzZV90b2xlcmFuY2U9IjAiIGlzX3Zpc2libGU9InRydWUiIHNjYWxlX3lfcmVsPSJmYWxzZSIgbm9ybWFs'+
			'X29mZnNldD0iMCIgZWZmZWN0PSJza2VsZXRhbCIvPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTQ0NSI+CiAgIDxyZWN0IHJ5PSIwIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMzODEzNzQ4O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuOTkzMDU1NTgiIHk9IjI4Ni45NDM5NyIgeD0iLTQuNDA5OTQ2OSIgd2lkdGg9IjYuOTMyMzAzNCIgaWQ9InJlY3QxNDQ3IiBoZWlnaHQ9IjQuMTkyNzkxIiByeD0iMCIvPg'+
			'ogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgzMzIxIj4KICAgPHJlY3Qgc3R5bGU9Im9wYWNpdHk6MC41MTA5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDI1NTg2MTM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiByeT0iMS41ODA5Mzc5IiB4PSI3NTMuOTA3MjkiIHk9IjM4Ni4wNDIzIiB3aWR0aD0iMjAuMDAzOTczIiBpZD0icmVjdDMzMjMiIGhlaWdodD0i'+
			'MjAuMzI2NjE2IiByeD0iMi42Mjg2Njc2Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDEwOTciPgogICA8cmVjdCBzdHlsZT0ib3BhY2l0eTowLjUxMDk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MjU1ODYxMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjU4MDkzNzkiIHg9IjUzNi4yNzA4MSIgeT0iLTEyMi4zNTAzMSIgd2lkdGg9IjIwLj'+
			'AwMzk3MyIgaWQ9InJlY3QxMDk5IiBoZWlnaHQ9IjIwLjMyNjYxNiIgcng9IjIuNjI4NjY3NiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxMTE5Ij4KICAgPHJlY3Qgcnk9IjEuNTgwOTM3OSIgc3R5bGU9Im9wYWNpdHk6MC41MTA5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDI1NTg2MTM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSI3NC4zNDYx'+
			'NTMiIHg9IjMzMC45OTg3MiIgd2lkdGg9IjIwLjAwMzk3MyIgaWQ9InJlY3QxMTIxIiBoZWlnaHQ9IjIwLjMyNjYxNiIgcng9IjIuNjI4NjY3NiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxNDExIj4KICAgPHJlY3Qgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOiMwMDg4YWE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM0NDc4MjE7c3Ryb2tlLXdpZHRoOjMuNjg3MDAwMDQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjEuODQzNTAwMDUsIDEuODQzNTAwMDU7c3Ryb2tlLWRhc2hvZm'+
			'ZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiB5PSI1NjUuODY2MDkiIHg9Ijc5OS40ODI4NSIgd2lkdGg9Ijk0LjY2Njg2MiIgaWQ9InJlY3QxNDEzIiBoZWlnaHQ9IjY3LjM1MTkyMSIvPgogIDwvY2xpcFBhdGg+CiAgPHJhZGlhbEdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgZng9Ii0xODkuNTcwNjIiIHI9IjQ5LjQ5OTcyNyIgaWQ9InJhZGlhbEdyYWRpZW50MTMxMiIgY3g9Ii0xODkuNTcwNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeT0iMTE2LjQwMzgyIiB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMzEwLTciIGZ5PSIxMTYuNDAzODIiIGdyYWRpZW50'+
			'VHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMC44MTg1Nzk3LDI2NC4wNjY1OCwtMTk5LjA3MDIxKSIvPgogIDxyYWRpYWxHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGZ4PSIxODYuNDc3NTgiIHI9IjQ5LjQ5OTcyNyIgaWQ9InJhZGlhbEdyYWRpZW50MTM0NCIgY3g9IjE4Ni40Nzc1OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSIxNDAuNzI1MzUiIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEzNDIiIGZ5PSIxNDAuNzI1MzUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMC44MTg1Nzk3OCwtMzUuMjc1MjY3LC0zMDMuMTY5MjEpIi8+CiAgPH'+
			'JhZGlhbEdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgZng9IjgzLjIwNDY0MyIgcj0iNDkuMDE3MjI3IiBpZD0icmFkaWFsR3JhZGllbnQxNDM3IiBjeD0iODMuMjA0NjQzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3k9IjIxNS41NjA4MSIgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50MTQzNSIgZnk9IjIxNS41NjA4MSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwwLjgxNjc5NDA1LDEzMi4zNTYxNywtMjU5LjI3MzQzKSIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp6b29tPSIwLjM1MzU1MzQiIGlua3NjYXBlOmN5'+
			'PSI5ODcuNDU3MjciIGlua3NjYXBlOndpbmRvdy14PSItOSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTp3aW5kb3cteT0iLTkiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnNuYXAtb3RoZXJzPSJ0cnVlIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlkPSJiYXNlIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIHNob3dndWlkZXM9InRydWUiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIHNob3'+
			'dncmlkPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTpzbmFwLWdsb2JhbD0iZmFsc2UiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiIGlua3NjYXBlOmN4PSI0NzcuNTg4NTUiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6c25hcC1ub2Rlcz0idHJ1ZSIgZml0LW1hcmdpbi10b3A9IjAiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNjQwIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0'+
			'PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjMxOTkzNyw3NS4xMDQyMykiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIj4KICA8Zmxvd1Jvb3Qgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbD'+
			'tmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiBpZD0iZmxvd1Jvb3QyMzQ0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDAsMTQ5KSI+CiAgIDxmbG93UmVnaW9uIGlkPSJmbG93UmVnaW9uMjM0NiI+CiAgICA8cmVjdCB4PSI1Mi4xNDI4NTciIHk9IjMzNS43OTg2MSIgd2lkdGg9IjEzMi44NTcxNSIgaWQ9InJlY3QyMzQ4IiBoZWlnaHQ9'+
			'IjQ1LjcxNDI4NyIvPgogICA8L2Zsb3dSZWdpb24+CiAgIDxmbG93UGFyYSBpZD0iZmxvd1BhcmEyMzUwIi8+CiAgPC9mbG93Um9vdD4KICA8Zmxvd1Jvb3Qgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J3NhbnMtc2VyaWYsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2Zvbn'+
			'QtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgaWQ9ImZsb3dSb290MjQyMi00LTEtNi0xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUyOTA2MDIsMCwwLDAuNTI5MDYwMiwwLjkwODc3Njk0LDEwMy4zNDU0NykiPgogICA8Zmxvd1JlZ2lvbiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7'+
			'Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTZweDtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J3NhbnMtc2VyaWYsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0IiBpZD0iZmxvd1JlZ2lvbjI0MTgtNy03LT'+
			'ItOCI+CiAgICA8cmVjdCBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTZweDtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J3NhbnMtc2VyaWYsIE5vcm1hbCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7d3JpdGluZy1tb2RlOmxyLXRiO3Rl'+
			'eHQtYW5jaG9yOnN0YXJ0IiB5PSIyNy4yMjcxOTgiIHg9IjUwLjcxNDI4NyIgd2lkdGg9IjE3Mi4xNDI4NSIgaWQ9InJlY3QyNDE2LTYtNS0xLTUiIGhlaWdodD0iMjQuOTk5OTk2Ii8+CiAgIDwvZmxvd1JlZ2lvbj4KICAgPGZsb3dQYXJhIGlkPSJmbG93UGFyYTI0MzgtMy05LTctOSIvPgogIDwvZmxvd1Jvb3Q+CiAgPHJlY3Qgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQxMzEyKTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45NjQ5OTk5NztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG'+
			'9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjcwMTQzNzYiIHg9IjI1LjQ3ODczNyIgeT0iLTE0My44MjEzOCIgd2lkdGg9Ijk4LjAzNDQ1NCIgaWQ9InJlY3QxMjg4IiBoZWlnaHQ9IjgwLjA3Mzk0NCIgcng9IjEuNzAxNDM3NiIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIi8+CiAgPHJlY3Qgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQxMzQ0KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45NjQ5OTk5NztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1v'+
			'cGFjaXR5OjEiIHJ5PSIxLjcwMTQzNzYiIHg9IjEwMi4xODUwOSIgeT0iLTIyOC4wMTEyNiIgd2lkdGg9Ijk4LjAzNDQ1NCIgaWQ9InJlY3QxMjg4LTUiIGhlaWdodD0iODAuMDczOTUyIiByeD0iMS43MDE0Mzc2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiLz4KICA8cmVjdCBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDE0MzcpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk2NDk5OTk3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9Ij'+
			'EuNzAxNDM3NiIgeD0iMTY2LjU0MzU4IiB5PSItMTIzLjI0MTYyIiB3aWR0aD0iOTguMDM0NDU0IiBpZD0icmVjdDEyODgtNS05IiBoZWlnaHQ9IjgwLjA3Mzk1OSIgcng9IjEuNzAxNDM3NiIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIi8+CiA8L2c+CiA8c3R5bGUgaWQ9InN0eWxlMiIgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0NjQ2NDY7fQoJLnN0MXtmaWxsOiNEMUQxRDE7fQo8L3N0eWxlPgogPHN0eWxlIGlkPSJzdHlsZTExMTUiIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDY0NjQ2O30KCS5zdDF7ZmlsbDojRDFEMUQxO30KPC9zdHlsZT4KIDxzdHlsZSBpZD0ic3R5bGUx'+
			'MTMzIiB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0QxRDFEMTt9Cgkuc3Qxe2ZpbGw6IzQ1NDU0NTt9Cjwvc3R5bGU+Cjwvc3ZnPgo=';
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
		me._play.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('KomMenu', true);
			me._statusleisteordner.style[domTransition]='none';
			me._statusleisteordner.style.visibility='hidden';
			me._statusleisteordner.ggVisible=false;
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
		el=me._hilfe=document.createElement('div');
		els=me._hilfe__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hilfe__img.setAttribute('src',basePath + 'images/hilfe.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hilfe__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._hilfe__imgo.setAttribute('src',basePath + 'images/hilfe__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Hilfe";
		el.ggDx=171;
		el.ggDy=-292;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hilfe.ggIsActive=function() {
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
		me._hilfe.onmouseover=function (e) {
			me._hilfe__img.style.visibility='hidden';
			me._hilfe__imgo.style.visibility='inherit';
		}
		me._hilfe.onmouseout=function (e) {
			me._hilfe__img.style.visibility='inherit';
			me._hilfe__imgo.style.visibility='hidden';
		}
		me._hilfe.ggUpdatePosition=function (useTransition) {
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
		me._hilfeordner.appendChild(me._hilfe);
		me.divSkin.appendChild(me._hilfeordner);
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
		if (me.elementMouseOver['st0']) {
			player.setVariableValue('aktuellerText', "Aktueller Standort");
		}
		if (me.elementMouseOver['st1']) {
			player.setVariableValue('aktuellerText', "Aktueller Standort");
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
	me._forschungsmenu.logicBlock_visible();
	me._forschungsmenu.logicBlock_alpha();
	me._kartenmenu.logicBlock_visible();
	me._kartenmenu.logicBlock_alpha();
	me._kommenu.logicBlock_visible();
	me._kommenu.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._station1.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._sensimenu2.logicBlock_visible();me._vollbild.logicBlock_visible();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._kommunikation.logicBlock_visible();me._kommunikation.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._kartenmenuzeigen.logicBlock_visible();me._kartenmenuzeigen.logicBlock_alpha();me._datenlink.logicBlock_visible();me._datenlink.logicBlock_alpha();me._forschungsmenuzeigen.logicBlock_visible();me._forschungsmenuzeigen.logicBlock_alpha();me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._forschungsmenu.logicBlock_visible();me._forschungsmenu.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._station1.logicBlock_alpha();me._kartenmenu.logicBlock_visible();me._kartenmenu.logicBlock_alpha();me._kommenu.logicBlock_visible();me._kommenu.logicBlock_alpha(); });
	player.addListener('varchanged_Forschungsmenu', function(args) { me._forschungsmenu.logicBlock_visible();me._forschungsmenu.logicBlock_alpha(); });
	player.addListener('varchanged_KartenMenu', function(args) { me._kartenmenu.logicBlock_visible();me._kartenmenu.logicBlock_alpha(); });
	player.addListener('varchanged_KomMenu', function(args) { me._kommenu.logicBlock_visible();me._kommenu.logicBlock_alpha(); });
	player.addListener('varchanged_SENSI', function(args) { me._sensimenu2.logicBlock_visible();me._vollbild.logicBlock_visible();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._kommunikation.logicBlock_visible();me._kommunikation.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._kartenmenuzeigen.logicBlock_visible();me._kartenmenuzeigen.logicBlock_alpha();me._datenlink.logicBlock_visible();me._datenlink.logicBlock_alpha();me._forschungsmenuzeigen.logicBlock_visible();me._forschungsmenuzeigen.logicBlock_alpha(); });
	player.addListener('varchanged_Station', function(args) { me._st0.logicBlock_alpha();me._st1.logicBlock_alpha(); });
	me.skinTimerEvent();
};