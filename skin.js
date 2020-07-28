// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: SENSO-Trail Skin.ggsk
// Generated 2020-07-28T17:42:33

function pano2vrSkin(player,base) {
	player.addVariable('HilfeModus', 2, false);
	player.addVariable('Station', 1, 0);
	player.addVariable('Forschungspunkte', 0, "0");
	player.addVariable('SENSI', 2, false);
	player.addVariable('Forschungsmenu', 2, false);
	player.addVariable('KomMenu', 2, false);
	player.addVariable('LinkMenu', 2, false);
	player.addVariable('LernMenu', 2, false);
	player.addVariable('KartenMenu', 2, false);
	player.addVariable('Vollbild', 2, false);
	player.addVariable('Infomenu', 2, false);
	player.addVariable('Schloss6', 2, false);
	player.addVariable('Schloss5', 2, false);
	player.addVariable('Schloss4', 2, false);
	player.addVariable('Schloss3', 2, false);
	player.addVariable('Schloss2', 2, false);
	player.addVariable('Schloss1', 2, false);
	player.addVariable('Schloss', 0, "");
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
			player.setVariableValue('Infomenu', false);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIGlkPSJzdmcxODgxIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbW'+
			'U9IlZvbGxiaWxkLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS42Nzk1NjdtbSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgogIDxj'+
			'bGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIGlkPSJyZWN0NTgwMS0xIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSI1Ljg4OTE1MjUiIHk9IjcuODM5NzYxMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgd2lkdGg9IjI5LjcyNTc2MyIgeD0iLTg5LjUxMzM1MSIvPgogIDwvY2xpcFBhdGg+Ci'+
			'AgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIGlkPSJyZWN0MTg2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHdpZHRoPSIyOS43MjU3NjMiIHg9Ii04OS41MTMzNTEiLz4KICA8L2NsaXBQYXRoPgog'+
			'PC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJvcGFjaXR5PSIxLjAiIHNob3dncmlkPSJmYWxzZSIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjQxLjYwOTAyMyIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOmN5PSIyOC4wMDcwNDEiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTpkb2N1bW'+
			'VudC11bml0cz0ibW0iIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBl'+
			'IHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSI+CiAgPHBhdGggaWQ9InBhdGg0NDI0LTAiIHN0eWxlPSJmaWxsOiMwMGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcmxpbW'+
			'l0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDxyZWN0IGhlaWdodD0iNy44NTY3NyIgaWQ9InJlY3QxODA4IiBzdHlsZT0ib3BhY2l0eTowLjQ3MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4z'+
			'MjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iMC42NzgwMjE4NSIgeT0iMTY2LjgyNzU2IiB3aWR0aD0iMTAuODMwNDUyIiB4PSI0OS43NjkyOTUiLz4KICA8cmVjdCBoZWlnaHQ9IjcuODU2NzciIGlkPSJyZWN0MjQ1NCIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMzI0OTk5OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjAuNzQ0ODM5MjUiIH'+
			'k9IjE2Ni44Mjc1NiIgd2lkdGg9IjEwLjgzMDQ1MiIgeD0iNDkuNzY5Mjk1Ii8+CiAgPHJlY3QgaGVpZ2h0PSI1LjYyNTExNCIgaWQ9InJlY3QxODUxIiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4wOTE0MDgyOTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4yNzQyMjQ4NywgMC4yNzQyMjQ4NztzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjA4MjAxMTMiIHk9IjE2OC43MDg2OCIgd2lkdGg9IjguMDU4ODQ2NSIgeD0iNTAuMjUzNDg3Ii8+CiAgPGcgaWQ9'+
			'Imc1ODY0LTAiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjA1NzQ3MTg0LC0wLjA1OTYxMDQsMC4wNTk2MTA0LC0wLjA1NzQ3MTg0LDU2LjM0NzMxMywxNjcuMjM2NjYpIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIGlkPSJyZWN0NTg1Ni01IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHJ5PSIyLjUwMzYwMzIiIHk9Ii0xOC44MzMwNTkiIHdpZHRoPSIxNS41NTc3NDQiIHg9Ii0zOS41MTA1NTkiLz4KICAgPG'+
			'cgaWQ9Imc1ODYyLTciIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgaWQ9InBhdGg1ODU4LTIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5'+
			'MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KS'+
			'IgaWQ9InBhdGg1ODYwLTMiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAz'+
			'NzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbild__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbild__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIGlkPSJzdmcxODgxIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbW'+
			'U9IlZvbGxiaWxkMi5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTkuNjc5NTY3bW0iPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4KICA8'+
			'Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiBpZD0icmVjdDU4MDEtMSIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHdpZHRoPSIyOS43MjU3NjMiIHg9Ii04OS41MTMzNTEiLz4KICA8L2NsaXBQYXRoPg'+
			'ogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiBpZD0icmVjdDE4NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiB3aWR0aD0iMjkuNzI1NzYzIiB4PSItODkuNTEzMzUxIi8+CiAgPC9jbGlwUGF0aD4K'+
			'IDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBzaG93Z3JpZD0iZmFsc2UiIGlkPSJiYXNlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOmN4PSI0MS42MDkwMjMiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTpjeT0iMjguMDA3MDQxIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgZml0LW1hcmdpbi1ib3R0b209IjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6ZG9jdW'+
			'1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgZml0LW1hcmdpbi1yaWdodD0iMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlw'+
			'ZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMzQ0NzQsLTE2Mi4yMzQ0NSkiPgogIDxwYXRoIGlkPSJwYXRoNDQyNC0wIiBzdHlsZT0iZmlsbDojMDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjkzMzMyMTtzdHJva2UtbWl0ZXJsaW'+
			'1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC04LjA1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8cmVjdCBoZWlnaHQ9IjcuODU2NzciIGlkPSJyZWN0MTgwOCIgc3R5bGU9Im9wYWNpdHk6MC40NzMwMDAwMjtmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAu'+
			'MzI0OTk5OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjAuNjc4MDIxODUiIHk9IjE2Ni44Mjc1NiIgd2lkdGg9IjEwLjgzMDQ1MiIgeD0iNDkuNzY5Mjk1Ii8+CiAgPHJlY3QgaGVpZ2h0PSI3Ljg1Njc3IiBpZD0icmVjdDI0NTQiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjc0NDgzOTI1Ii'+
			'B5PSIxNjYuODI3NTYiIHdpZHRoPSIxMC44MzA0NTIiIHg9IjQ5Ljc2OTI5NSIvPgogIDxyZWN0IGhlaWdodD0iNS42MjUxMTQiIGlkPSJyZWN0MTg1MSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMDkxNDA4Mjk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMjc0MjI0ODcsIDAuMjc0MjI0ODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiByeT0iMS4wODIwMTEzIiB5PSIxNjguNzA4NjgiIHdpZHRoPSI4LjA1ODg0NjUiIHg9IjUwLjI1MzQ4NyIvPgogIDxnIGlk'+
			'PSJnNTg2NC0wIiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wNTc0NzE4NCwtMC4wNTk2MTA0LDAuMDU5NjEwNCwtMC4wNTc0NzE4NCw1Ni4zNDczMTMsMTY3LjIzNjY2KSI+CiAgIDxyZWN0IGhlaWdodD0iNTEuMTc2Nzg4IiBpZD0icmVjdDU4NTYtNSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiByeT0iMi41MDM2MDMyIiB5PSItMTguODMzMDU5IiB3aWR0aD0iMTUuNTU3NzQ0IiB4PSItMzkuNTEwNTU5Ii8+CiAgID'+
			'xnIGlkPSJnNTg2Mi03IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUsLTYzLjk0MjUxNywyOS44NjI2MTkpIj4KICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGlkPSJwYXRoNTg1OC0yIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4x'+
			'OTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOC'+
			'kiIGlkPSJwYXRoNTg2MC0zIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUw'+
			'Mzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIGlkPSJzdmcxODgxIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbW'+
			'U9IlZvbGxiaWxkQXVzLnN2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS42Nzk1NjdtbSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgog'+
			'IDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIGlkPSJyZWN0NTgwMS0xIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSI1Ljg4OTE1MjUiIHk9IjcuODM5NzYxMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSIgd2lkdGg9IjI5LjcyNTc2MyIgeD0iLTg5LjUxMzM1MSIvPgogIDwvY2xpcFBhdG'+
			'g+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIGlkPSJyZWN0MTg2MyIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHdpZHRoPSIyOS43MjU3NjMiIHg9Ii04OS41MTMzNTEiLz4KICA8L2NsaXBQYXRo'+
			'PgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJvcGFjaXR5PSIxLjAiIHNob3dncmlkPSJmYWxzZSIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjMyLjA3MjUyMyIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOmN5PSIzMi45OTk0NzkiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBpbmtzY2FwZTpkb2'+
			'N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBwYWdlY29sb3I9IiNmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0'+
			'eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgaWQ9ImxheWVyMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSI+CiAgPHBhdGggaWQ9InBhdGg0NDI0LTAiIHN0eWxlPSJmaWxsOiMwMGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMzIxO3N0cm9rZS1taXRlcm'+
			'xpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDxyZWN0IGhlaWdodD0iNS4yMjYwNzc2IiBpZD0icmVjdDE4MDgiIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0'+
			'aDowLjIxNjE3OTgyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjQ1MDk5ODkiIHk9IjE2OS4xMDYwMyIgd2lkdGg9IjcuMjA0MDc3NyIgeD0iNTAuMTQ1MTQ1Ii8+CiAgPHJlY3QgaGVpZ2h0PSI3LjkyNjU2MTgiIGlkPSJyZWN0MTg1MSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMTI1NzkyODY7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMzc3Mzc4NiwgMC4zNzczNzg2O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3'+
			'Ryb2tlLW9wYWNpdHk6MSIgcnk9IjAuOTU2NzU2MjMiIHk9IjE2Ni44NTc3NiIgd2lkdGg9IjEwLjgzMDc5MSIgeD0iNDkuNzY5NTQ3Ii8+CiAgPHJlY3QgaGVpZ2h0PSI1LjI1OTc2NTYiIGlkPSJyZWN0MjQ1NCIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMjE3NTczMzQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjAuNDk4NjM3NSIgeT0iMTY5LjA5NjcxIiB3aWR0aD0iNy4yNTA1MTU5IiB4PSI1MC4xMjkxNDMiLz4KICA8'+
			'ZyBpZD0iZzU4NjQtMCIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNTc0NzE4NCwwLjA1OTYxMDQsLTAuMDU5NjEwNCwwLjA1NzQ3MTg0LDYxLjUwMzg0MSwxNjkuNTQyMykiPgogICA8cmVjdCBoZWlnaHQ9IjUxLjE3Njc4OCIgaWQ9InJlY3Q1ODU2LTUiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgcnk9IjIuNTAzNjAzMiIgeT0iLTE4LjgzMzA1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgeD0iLTM5LjUxMDU1OSIvPgogIC'+
			'A8ZyBpZD0iZzU4NjItNyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSI+CiAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBpZD0icGF0aDU4NTgtMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAu'+
			'MTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgICA8cGF0aCBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LT'+
			'gpIiBpZD0icGF0aDU4NjAtMyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41'+
			'MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._vollbildaus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbildaus__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIGhlaWdodD0iMTcuMDQzMDExbW0iIGlkPSJzdmcxODgxIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbW'+
			'U9IlZvbGxiaWxkQXVzMi5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTkuNjc5NTY3bW0iPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4K'+
			'ICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiBpZD0icmVjdDU4MDEtMSIgc3R5bGU9ImZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNTQ1Nzc5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iNS44ODkxNTI1IiB5PSI3LjgzOTc2MTMiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHdpZHRoPSIyOS43MjU3NjMiIHg9Ii04OS41MTMzNTEiLz4KICA8L2NsaXBQYX'+
			'RoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiBpZD0icmVjdDE4NjMiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjUuODg5MTUyNSIgeT0iNy44Mzk3NjEzIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiB3aWR0aD0iMjkuNzI1NzYzIiB4PSItODkuNTEzMzUxIi8+CiAgPC9jbGlwUGF0'+
			'aD4KIDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBzaG93Z3JpZD0iZmFsc2UiIGlkPSJiYXNlIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIGlua3NjYXBlOmN4PSIzMi4wNzI1MjMiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTpjeT0iMzIuOTk5NDc5IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgZml0LW1hcmdpbi1ib3R0b209IjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6ZG'+
			'9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgZml0LW1hcmdpbi1yaWdodD0iMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6'+
			'dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMzQ0NzQsLTE2Mi4yMzQ0NSkiPgogIDxwYXRoIGlkPSJwYXRoNDQyNC0wIiBzdHlsZT0iZmlsbDojMDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjkzMzMyMTtzdHJva2UtbWl0ZX'+
			'JsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gNTkuODM0OTg4LDE2Mi43MDExMSA0LjY1MDQ2Nyw4LjA1NDg1IC00LjY1MDQ2Miw4LjA1NDg0IGggLTkuMzAwOTM4IGwgLTQuNjUwNDYyLC04LjA1NDg1IDQuNjUwNDY1LC04LjA1NDg0IHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8cmVjdCBoZWlnaHQ9IjUuMjI2MDc3NiIgaWQ9InJlY3QxODA4IiBzdHlsZT0ib3BhY2l0eTowLjQ3MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lk'+
			'dGg6MC4yMTYxNzk4MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiByeT0iMC40NTA5OTg5IiB5PSIxNjkuMTA2MDMiIHdpZHRoPSI3LjIwNDA3NzciIHg9IjUwLjE0NTE0NSIvPgogIDxyZWN0IGhlaWdodD0iNy45MjY1NjE4IiBpZD0icmVjdDE4NTEiIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjEyNTc5Mjg2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTowLjM3NzM3ODYsIDAuMzc3Mzc4NjtzdHJva2UtZGFzaG9mZnNldDowO3'+
			'N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjk1Njc1NjIzIiB5PSIxNjYuODU3NzYiIHdpZHRoPSIxMC44MzA3OTEiIHg9IjQ5Ljc2OTU0NyIvPgogIDxyZWN0IGhlaWdodD0iNS4yNTk3NjU2IiBpZD0icmVjdDI0NTQiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjIxNzU3MzM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIwLjQ5ODYzNzUiIHk9IjE2OS4wOTY3MSIgd2lkdGg9IjcuMjUwNTE1OSIgeD0iNTAuMTI5MTQzIi8+CiAg'+
			'PGcgaWQ9Imc1ODY0LTAiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0ibWF0cml4KDAuMDU3NDcxODQsMC4wNTk2MTA0LC0wLjA1OTYxMDQsMC4wNTc0NzE4NCw2MS41MDM4NDEsMTY5LjU0MjMpIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIGlkPSJyZWN0NTg1Ni01IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHJ5PSIyLjUwMzYwMzIiIHk9Ii0xOC44MzMwNTkiIHdpZHRoPSIxNS41NTc3NDQiIHg9Ii0zOS41MTA1NTkiLz4KIC'+
			'AgPGcgaWQ9Imc1ODYyLTciIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiPgogICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgaWQ9InBhdGg1ODU4LTIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAw'+
			'LjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS'+
			'04KSIgaWQ9InBhdGg1ODYwLTMiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTku'+
			'NTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgaWQ9InN2ZzIiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZlcnNpb249IjEuMSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mby5zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC'+
			'9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NC4zNzk0NzgiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBib3JkZXJvcGFjaXR5PSIxIiBzaG93Z3JpZD0iZmFs'+
			'c2UiIGlkPSJuYW1lZHZpZXc5IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiBpbmtzY2FwZTpjeD0iLTQuMzc3OTA0NCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgaW5rc2NhcGU6Y3k9IjU1LjE0NTg0NyIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGdyaWR0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTp6b29tPSI1LjE4MTM1MzUiIHBhZ2Vjb2xvcj0iI2'+
			'ZmZmZmZiIgaW5rc2NhcGU6d2luZG93LXg9Ii05Ii8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRo'+
			'MTQzIj4KICAgPHJlY3QgaGVpZ2h0PSIyMDMuMTQ0MjciIGlkPSJyZWN0MTQ1IiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjEuNzEyMTI4NjQiIHRyYW5zZm9ybT0icm90YXRlKC00My4zMTUzMTUpIiB5PSI2Ny44MDQ5OTMiIHdpZHRoPSIyMDMuMTQ0MjciIHg9Ii03MTUuMTU2OCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggaWQ9InBhdGg0NTU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZW'+
			'pvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAtMTI4LjczMDgzLC04LjE1MzM5MDkgMjMuNzM4OTYsLTIzLjczODk3MjEgLTE5LjEwNjk4LC04LjQ5MTk4OCAtMTguNTI3OTgsNy4zMzM5OTEgMTMuODk2LDI0Ljg5Njk2OTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IGhlaWdodD0iMjcuOTU1MDIxIiBpZD0icmVjdDQ3MDEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzA2'+
			'NzM3MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiByeT0iMi44OTQ5OTY0IiB5PSItMjcuNDE2NTA0IiB3aWR0aD0iMjguMDk4Mzc5IiB4PSItMTEwLjk0MzkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIGlkPSJwYXRoNDkzOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4zMzQ2NjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam'+
			'9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJtIC0xMDYuNjA3MjYsLTEzLjgwNTU0NCAzLjMxMDI5LDIuNTAyOTA1IDkuNTI3MTg3LDIuNTAyOTA1NSAxLjkzNzczNCwzLjcxMzk4ODEgLTE1LjE3ODkxMSwyLjc0NTEyMTcgLTkuMjg0OTcsLTYuMjk3NjMyMSB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0OTE1IiBjeD0i'+
			'LTg4LjU3OTQ3NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MS4zMzg1Mjk5NCIgY3k9Ii01NC4xMzQ3ODkiIHI9IjI0LjI4MzU3OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDQ3MjEiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLj'+
			'Q3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDg5NCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIHg9Ii0zNC41NDY5NTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VP'+
			'blVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgaWQ9ImNpcmNsZTQ4OTkiIGN4PSItNTIuNjQ4MjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSBpZD0iY2lyY2xlNDg5NSIgY3g9Ii01Mi42NDgyMjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNG'+
			'Q7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0ODkxIiBjeD0iLTUyLjY0ODIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQ'+
			'YXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgaWQ9ImNpcmNsZTQ4ODciIGN4PSItNTIuNjQ4MjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaW'+
			'Q9InJlY3Q0NzIxLTIiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDkzMCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2'+
			'OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIHg9Ii0zNC41NDY5NTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIGlkPSJyZWN0NDcyMS0wIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgeD0iLTM0LjU0Njk1OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIGlkPSJyZWN0MTk3NyIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIHg9Ii0zNC41NDY5NTkiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggaWQ9InBhdGgyMDM4IiBzdHlsZT0iZmlsbDojMDBhYTg4O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjk4Mzc4OTkyO3N0cm9rZS1t'+
			'aXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAyNTcuOTgzMDMsMTM3LjQ1NjI1IC00LjkwMTk0LDguNDkwNDEgaCAtOS44MDM4NyBsIC00LjkwMTk0LC04LjQ5MDQxIDQuOTAxOTQsLTguNDkwNCBoIDkuODAzODcgeiIgdHJhbnNmb3JtPSJtYXRyaXgoMS43OTI4MTgxLC0zLjEwNTI1MTksMy4xMDUyNTE5LDEuNzkyODE4MSwtODM0LjU4NjYzLDU1Ni40MzE5OSkiLz4KIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJ0ZXh0ODQ4IiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om'+
			'5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjUzLjMzMzMzMjA2cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpDb25zdGFudGlhOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0NvbnN0YW50aWEsIEJvbGQnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10'+
			'Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIHk9IjUwLjg0MDA2NSIgeD0iMjguMjcwNDc3Ij4KICA8dHNwYW4gaWQ9InRzcGFuODQ2IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiB5PSI1MC44NDAwNjUiIHg9IjI4LjI3MDQ3NyI+aTwvdHNwYW4+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._linkoffnen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkoffnen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgaWQ9InN2ZzIiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZlcnNpb249IjEuMSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mbzIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVE'+
			'Qvc29kaXBvZGktMC5kdGQiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmlld0JveD0iMCAwIDc0LjM3OTQ4IDY0LjQxNDUyMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNzQuMzc5NDc4Ij4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgYm9yZGVyb3BhY2l0eT0iMSIgc2hvd2dyaWQ9ImZh'+
			'bHNlIiBpZD0ibmFtZWR2aWV3OSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgaW5rc2NhcGU6Y3g9Ii00LjM3NzkwNDQiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBwYWdlY29sb3I9Ii'+
			'NmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IGhlaWdodD0iMjAzLjE0NDI3IiBpZD0icmVjdDE0NSIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIgeT0iNjcuODA0OTkzIiB3aWR0aD0iMjAzLjE0NDI3IiB4PSItNzE1LjE1NjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIGlkPSJwYXRoNDU1NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbm'+
			'Vqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5ODggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCBoZWlnaHQ9IjI3Ljk1NTAyMSIgaWQ9InJlY3Q0NzAxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMw'+
			'NjczNzA3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjIuODk0OTk2NCIgeT0iLTI3LjQxNjUwNCIgd2lkdGg9IjI4LjA5ODM3OSIgeD0iLTExMC45NDM5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBpZD0icGF0aDQ5MzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZW'+
			'pvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBpZD0iY2lyY2xlNDkxNSIgY3g9'+
			'Ii04OC41Nzk0NzUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIGN5PSItNTQuMTM0Nzg5IiByPSIyNC4yODM1NzkiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q0NzIxIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi'+
			'40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgeD0iLTM0LjU0Njk1OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q4OTQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0ODk5IiBjeD0iLTUyLjY0ODIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgaWQ9ImNpcmNsZTQ4OTUiIGN4PSItNTIuNjQ4MjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZD'+
			'RkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBpZD0iY2lyY2xlNDg5MSIgY3g9Ii01Mi42NDgyMjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0ODg3IiBjeD0iLTUyLjY0ODIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIG'+
			'lkPSJyZWN0NDcyMS0yIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgeD0iLTM0LjU0Njk1OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q5MzAiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgw'+
			'NjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDQ3MjEtMCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIHg9Ii0zNC41NDY5NTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDE5NzciIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIGlkPSJwYXRoMjAzOCIgc3R5bGU9ImZpbGw6IzAwZmZjYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45ODM3ODk5MjtzdHJva2Ut'+
			'bWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gMjU3Ljk4MzAzLDEzNy40NTYyNSAtNC45MDE5NCw4LjQ5MDQxIGggLTkuODAzODcgbCAtNC45MDE5NCwtOC40OTA0MSA0LjkwMTk0LC04LjQ5MDQgaCA5LjgwMzg3IHoiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0idGV4dDg0OCIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudD'+
			'pub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1My4zMzMzMzIwNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q29uc3RhbnRpYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidDb25zdGFudGlhLCBCb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHIt'+
			'dGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI1MC44NDAwNjUiIHg9IjI4LjI3MDQ3NyI+CiAgPHRzcGFuIGlkPSJ0c3Bhbjg0NiIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iNTAuODQwMDY1IiB4PSIyOC4yNzA0NzciPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
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
		el.ggDx=-120;
		el.ggDy=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 42px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(77,77,77,1);';
		hs+='font-size: 32px;';
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
		elo=me._station1offen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1offen__imgo.setAttribute('src',basePath + 'images/station1offen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
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
		me._station1offen.onclick=function (e) {
			player.setVariableValue('LernMenu', true);
			player.setVariableValue('LinkMenu', false);
		}
		me._station1offen.onmouseover=function (e) {
			me._station1offen__img.style.visibility='hidden';
			me._station1offen__imgo.style.visibility='inherit';
		}
		me._station1offen.onmouseout=function (e) {
			me._station1offen__img.style.visibility='inherit';
			me._station1offen__imgo.style.visibility='hidden';
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
		el=me._team40=document.createElement('div');
		els=me._team40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Team4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 51px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 370px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Station 0 = 613<br\/>Station 1 = 425<br\/>Station 2 = 123";
		el.appendChild(els);
		me._team40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team40.ggUpdatePosition=function (useTransition) {
		}
		me._linkmenu.appendChild(me._team40);
		me.divSkin.appendChild(me._linkmenu);
		el=me._lernmenu=document.createElement('div');
		el.ggId="LernMenu";
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
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lernmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lernmenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('LernMenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._lernmenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._lernmenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._lernmenu.style[domTransition]='';
				if (me._lernmenu.ggCurrentLogicStateVisible == 0) {
					me._lernmenu.style.visibility=(Number(me._lernmenu.style.opacity)>0||!me._lernmenu.style.opacity)?'inherit':'hidden';
					me._lernmenu.ggVisible=true;
				}
				else {
					me._lernmenu.style.visibility="hidden";
					me._lernmenu.ggVisible=false;
				}
			}
		}
		me._lernmenu.ggUpdatePosition=function (useTransition) {
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
		el=me._lernfeld=document.createElement('div');
		els=me._lernfeld__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._lernfeld__img.setAttribute('src',basePath + 'images/lernfeld.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Lernfeld";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 539px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 345px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lernfeld.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lernfeld.ggUpdatePosition=function (useTransition) {
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
		me._lernmenu.appendChild(me._lernfeld);
		el=me._lernmenuschlieen=document.createElement('div');
		els=me._lernmenuschlieen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._lernmenuschlieen__img.setAttribute('src',basePath + 'images/lernmenuschlieen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._lernmenuschlieen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._lernmenuschlieen__imgo.setAttribute('src',basePath + 'images/lernmenuschlieen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="LernMenuschlie\xdfen";
		el.ggDx=0;
		el.ggDy=264;
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
		me._lernmenuschlieen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lernmenuschlieen.onclick=function (e) {
			player.setVariableValue('LernMenu', false);
			me._sensimenu.style[domTransition]='none';
			me._sensimenu.style.visibility=(Number(me._sensimenu.style.opacity)>0||!me._sensimenu.style.opacity)?'inherit':'hidden';
			me._sensimenu.ggVisible=true;
		}
		me._lernmenuschlieen.onmouseover=function (e) {
			me._lernmenuschlieen__img.style.visibility='hidden';
			me._lernmenuschlieen__imgo.style.visibility='inherit';
		}
		me._lernmenuschlieen.onmouseout=function (e) {
			me._lernmenuschlieen__img.style.visibility='inherit';
			me._lernmenuschlieen__imgo.style.visibility='hidden';
		}
		me._lernmenuschlieen.ggUpdatePosition=function (useTransition) {
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
		me._lernmenu.appendChild(me._lernmenuschlieen);
		el=me._saftfluss=document.createElement('div');
		el.ggId="Saftfluss";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 431px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 299px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._saftfluss.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._saftfluss.ggUpdatePosition=function (useTransition) {
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
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_6__img.setAttribute('src',basePath + 'images/svg_6.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
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
		me._saftfluss.appendChild(me._svg_6);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_7__img.setAttribute('src',basePath + 'images/svg_7.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
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
		me._saftfluss.appendChild(me._svg_7);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_8__img.setAttribute('src',basePath + 'images/svg_8.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
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
		me._saftfluss.appendChild(me._svg_8);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_9__img.setAttribute('src',basePath + 'images/svg_9.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
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
		me._saftfluss.appendChild(me._svg_9);
		el=me._svg_100=document.createElement('div');
		els=me._svg_100__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_100__img.setAttribute('src',basePath + 'images/svg_100.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_100.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_100.ggUpdatePosition=function (useTransition) {
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
		me._saftfluss.appendChild(me._svg_100);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_11__img.setAttribute('src',basePath + 'images/svg_11.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
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
		me._saftfluss.appendChild(me._svg_11);
		me._lernmenu.appendChild(me._saftfluss);
		el=me._station1lern=document.createElement('div');
		els=me._station1lern__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._station1lern__img.setAttribute('src',basePath + 'images/station1lern.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._station1lern__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._station1lern__imgo.setAttribute('src',basePath + 'images/station1lern__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Station1Lern";
		el.ggDx=0;
		el.ggDy=-266;
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
		me._station1lern.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._station1lern.onmouseover=function (e) {
			me._station1lern__img.style.visibility='hidden';
			me._station1lern__imgo.style.visibility='inherit';
		}
		me._station1lern.onmouseout=function (e) {
			me._station1lern__img.style.visibility='inherit';
			me._station1lern__imgo.style.visibility='hidden';
		}
		me._station1lern.ggUpdatePosition=function (useTransition) {
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
		me._lernmenu.appendChild(me._station1lern);
		me.divSkin.appendChild(me._lernmenu);
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
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
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
		el.ggDx=-44;
		el.ggDy=-306;
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
		el=me._forschungsgegenstand=document.createElement('div');
		els=me._forschungsgegenstand__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Forschungsgegenstand";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -221px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 183px;';
		hs+='height: 24px;';
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
		els.innerHTML="- Forschungsgegenstand -";
		el.appendChild(els);
		me._forschungsgegenstand.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._forschungsgegenstand.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._forschungsgegenstand);
		el=me._gegenstandtext=document.createElement('div');
		els=me._gegenstandtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="GegenstandText";
		el.ggDx=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 110px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -196px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 267px;';
		hs+='height: 110px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Das einzelne Lebewesen in seinem Lebensraum mit den individuellen Bed\xfcrfnissen, Funktionen und Ziele zu verstehen";
		el.appendChild(els);
		me._gegenstandtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gegenstandtext.ggUpdatePosition=function (useTransition) {
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
		me._forschungsmenu.appendChild(me._gegenstandtext);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9Ijk2IiBoZWlnaHQ9IjQ1Ni4wNTE0Mm1tIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIGlkPSJzdmcxNjQzIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIGlua3NjYXBlOn'+
			'ZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgc29kaXBvZGk6ZG9jbmFtZT0iK1RlbXAuc3ZnIiB2aWV3Qm94PSIwIDAgMjk4Ljc0ODg4IDQ1Ni4wNTE0MiIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB3aWR0aD0iMjk4Ljc0ODg3bW0iIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcbWF4LWtcRGVza3RvcFxTRU5TTy1UcmFpbFxLYXJ0ZW5cK1RyYW5z'+
			'ZWt0ZW4ucG5nIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcyBpZD0iZGVmczE2MzciPgogIDxsaW5lYXJHcmFkaWVudCBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJsaW5lYXJHcmFkaWVudDE0MzUiPgogICA8c3RvcCBpZD0ic3RvcDE0MzEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjY2MDA7c3RvcC1vcGFjaXR5OjE7IiBvZmZzZXQ9IjAiLz4KICAgPHN0b3AgaWQ9InN0b3'+
			'AxNDMzIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2NjAwO3N0b3Atb3BhY2l0eTowOyIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0ibGluZWFyR3JhZGllbnQxMzQyIj4KICAgPHN0b3AgaWQ9InN0b3AxMzM4IiBzdHlsZT0ic3RvcC1jb2xvcjojNWZkM2JjO3N0b3Atb3BhY2l0eToxOyIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIGlkPSJzdG9wMTM0MCIgc3R5bGU9InN0b3AtY29sb3I6IzVmZDNiYztzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVh'+
			'ckdyYWRpZW50IGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9ImxpbmVhckdyYWRpZW50MTMxMC03Ij4KICAgPHN0b3AgaWQ9InN0b3AxMzA2IiBzdHlsZT0ic3RvcC1jb2xvcjojODAwMDAwO3N0b3Atb3BhY2l0eToxOyIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIGlkPSJzdG9wMTMwOCIgc3R5bGU9InN0b3AtY29sb3I6IzgwMDAwMDtzdG9wLW9wYWNpdHk6MDsiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPG1hcmtlciBpZD0iQXJyb3cxTGVuZCIgb3JpZW50PSJhdXRvIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIgaW5rc2NhcGU6c3RvY2tpZD0iQXJyb3cxTGVuZCIgaW'+
			'5rc2NhcGU6aXNzdG9jaz0idHJ1ZSIgcmVmWT0iMCIgcmVmWD0iMCI+CiAgIDxwYXRoIGlkPSJwYXRoMTc4MSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0gMCwwIDUsLTUgLTEyLjUsMCA1LDUgWiIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuOCwwLDAsLTAuOCwtMTAsMCkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L21hcmtlcj4KICA8bWFya2VyIGlkPSJBcnJvdzFMc3RhcnQiIG9yaWVudD0iYXV0byIgc3R5'+
			'bGU9Im92ZXJmbG93OnZpc2libGUiIGlua3NjYXBlOnN0b2NraWQ9IkFycm93MUxzdGFydCIgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSIgcmVmWT0iMCIgcmVmWD0iMCI+CiAgIDxwYXRoIGlkPSJwYXRoMTc3OCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0gMCwwIDUsLTUgLTEyLjUsMCA1LDUgWiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44LDAsMCwwLjgsMTAsMCkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICA8L2'+
			'1hcmtlcj4KICA8aW5rc2NhcGU6cGF0aC1lZmZlY3QgdmVydGljYWxfcGF0dGVybj0iZmFsc2UiIHByb3BfdW5pdHM9ImZhbHNlIiBjb3B5dHlwZT0ic2luZ2xlX3N0cmV0Y2hlZCIgdGFuZ19vZmZzZXQ9IjAiIGlkPSJwYXRoLWVmZmVjdDEzNzAiIGVmZmVjdD0ic2tlbGV0YWwiIHNwYWNpbmc9IjAiIHByb3Bfc2NhbGU9IjAuMjY0NTgzMzMiIGlzX3Zpc2libGU9InRydWUiIHBhdHRlcm49Ik0gMCw1IEMgMCwyLjI0IDIuMjQsMCA1LDAgNy43NiwwIDEwLDIuMjQgMTAsNSAxMCw3Ljc2IDcuNzYsMTAgNSwxMCAyLjI0LDEwIDAsNy43NiAwLDUgWiIgc2NhbGVfeV9yZWw9ImZhbHNlIiBmdXNlX3Rv'+
			'bGVyYW5jZT0iMCIgbm9ybWFsX29mZnNldD0iMCIvPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTQ0NSI+CiAgIDxyZWN0IGhlaWdodD0iNC4xOTI3OTEiIGlkPSJyZWN0MTQ0NyIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zMzgxMzc0ODtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjk5MzA1NTU4IiByeT0iMCIgcng9IjAiIHk9IjI4Ni45NDM5NyIgd2lkdGg9IjYuOTMyMzAzNCIgeD0iLTQuNDA5OTQ2OSIvPg'+
			'ogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgzMzIxIj4KICAgPHJlY3QgaGVpZ2h0PSIyMC4zMjY2MTYiIGlkPSJyZWN0MzMyMyIgc3R5bGU9Im9wYWNpdHk6MC41MTA5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDI1NTg2MTM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiByeT0iMS41ODA5Mzc5IiB5PSIzODYuMDQyMyIgcng9IjIuNjI4NjY3NiIgd2lkdGg9'+
			'IjIwLjAwMzk3MyIgeD0iNzUzLjkwNzI5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDEwOTciPgogICA8cmVjdCBoZWlnaHQ9IjIwLjMyNjYxNiIgaWQ9InJlY3QxMDk5IiBzdHlsZT0ib3BhY2l0eTowLjUxMDk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC40MjU1ODYxMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjU4MDkzNzkiIHk9Ii0xMj'+
			'IuMzUwMzEiIHJ4PSIyLjYyODY2NzYiIHdpZHRoPSIyMC4wMDM5NzMiIHg9IjUzNi4yNzA4MSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxMTE5Ij4KICAgPHJlY3QgaGVpZ2h0PSIyMC4zMjY2MTYiIGlkPSJyZWN0MTEyMSIgc3R5bGU9Im9wYWNpdHk6MC41MTA5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDI1NTg2MTM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3Bh'+
			'Y2l0eToxIiByeT0iMS41ODA5Mzc5IiByeD0iMi42Mjg2Njc2IiB5PSI3NC4zNDYxNTMiIHdpZHRoPSIyMC4wMDM5NzMiIHg9IjMzMC45OTg3MiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxNDExIj4KICAgPHJlY3QgaGVpZ2h0PSI2Ny4zNTE5MjEiIGlkPSJyZWN0MTQxMyIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOiMwMDg4YWE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM0NDc4MjE7c3Ryb2tlLXdpZHRoOjMuNjg3MDAwMDQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjEuOD'+
			'QzNTAwMDUsIDEuODQzNTAwMDU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiB5PSI1NjUuODY2MDkiIHdpZHRoPSI5NC42NjY4NjIiIHg9Ijc5OS40ODI4NSIvPgogIDwvY2xpcFBhdGg+CiAgPHJhZGlhbEdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEzMTAtNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIgaWQ9InJhZGlhbEdyYWRpZW50MTMxMiIgY3g9Ii0xODkuNTcwNjIiIGN5PSIxMTYuNDAzODIiIGZ5PSIxMTYuNDAzODIiIHI9IjQ5LjQ5OTcyNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJp'+
			'eCgxLDAsMCwwLjgxODU3OTcsMjY0LjA2NjU4LC0xOTkuMDcwMjEpIiBmeD0iLTE4OS41NzA2MiIvPgogIDxyYWRpYWxHcmFkaWVudCB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMzQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiBpZD0icmFkaWFsR3JhZGllbnQxMzQ0IiBjeD0iMTg2LjQ3NzU4IiBjeT0iMTQwLjcyNTM1IiBmeT0iMTQwLjcyNTM1IiByPSI0OS40OTk3MjciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMC44MTg1Nzk3OCwtMzUuMjc1MjY3LC0zMDMuMTY5MjEpIiBmeD0iMTg2LjQ3NzU4Ii8+CiAgPH'+
			'JhZGlhbEdyYWRpZW50IHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDE0MzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiIGlkPSJyYWRpYWxHcmFkaWVudDE0MzciIGN4PSI4My4yMDQ2NDMiIGN5PSIyMTUuNTYwODEiIGZ5PSIyMTUuNTYwODEiIHI9IjQ5LjAxNzIyNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwwLjgxNjc5NDA1LDEzMi4zNTYxNywtMjU5LjI3MzQzKSIgZng9IjgzLjIwNDY0MyIvPgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTp3aW5kb3cteT0iLTkiIGlua3NjYXBlOnNuYXAt'+
			'Z2xvYmFsPSJmYWxzZSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiIHNob3dncmlkPSJmYWxzZSIgaWQ9ImJhc2UiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaW5rc2NhcGU6Y3g9IjQ3Ny41ODg1NSIgaW5rc2NhcGU6c25hcC1vdGhlcnM9InRydWUiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOnNuYXAtbm9kZXM9InRydWUiIGlua3NjYXBlOmN5PSI5ODcuNDU3MjciIGZpdC1tYXJnaW4tdG9wPSIwIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIgZml0LW1hcmdpbi1sZWZ0PS'+
			'IwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIHNob3dndWlkZXM9InRydWUiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnpvb209IjAuMzUzNTUzNCIgZml0LW1hcmdpbi1yaWdodD0iMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExNjQwIj4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0'+
			'PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIGlkPSJsYXllcjEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4zMTk5MzcsNzUuMTA0MjMpIj4KICA8Zmxvd1Jvb3QgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZsb3dSb290MjM0NCIgc3R5bG'+
			'U9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDAsMTQ5KSI+CiAgIDxmbG93UmVnaW9uIGlkPSJmbG93UmVnaW9uMjM0NiI+CiAgICA8cmVjdCBoZWlnaHQ9IjQ1LjcxNDI4NyIgaWQ9InJlY3QyMzQ4IiB5PSIzMzUuNzk4NjEiIHdpZHRoPSIxMzIuODU3MTUiIHg9'+
			'IjUyLjE0Mjg1NyIvPgogICA8L2Zsb3dSZWdpb24+CiAgIDxmbG93UGFyYSBpZD0iZmxvd1BhcmEyMzUwIi8+CiAgPC9mbG93Um9vdD4KICA8Zmxvd1Jvb3QgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZsb3dSb290MjQyMi00LTEtNi0xIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2Fucy1zZXJpZiwgTm9ybWFsJztmb250LXZhcmlhbn'+
			'QtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUyOTA2MDIsMCwwLDAuNTI5MDYwMiwwLjkwODc3Njk0LDEwMy4zNDU0NykiPgogICA8Zmxvd1JlZ2lvbiBpZD0iZmxvd1JlZ2lvbjI0MTgtNy03LTIt'+
			'OCIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE2cHg7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidzYW5zLXNlcmlmLCBOb3JtYWwnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdG'+
			'FydCI+CiAgICA8cmVjdCBoZWlnaHQ9IjI0Ljk5OTk5NiIgaWQ9InJlY3QyNDE2LTYtNS0xLTUiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2Fucy1zZXJpZiwgTm9ybWFsJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3Jt'+
			'YWw7dGV4dC1hbGlnbjpzdGFydDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQiIHk9IjI3LjIyNzE5OCIgd2lkdGg9IjE3Mi4xNDI4NSIgeD0iNTAuNzE0Mjg3Ii8+CiAgIDwvZmxvd1JlZ2lvbj4KICAgPGZsb3dQYXJhIGlkPSJmbG93UGFyYTI0MzgtMy05LTctOSIvPgogIDwvZmxvd1Jvb3Q+CiAgPHJlY3QgaGVpZ2h0PSI4MC4wNzM5NDQiIGlkPSJyZWN0MTI4OCIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQxMzEyKTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45NjQ5OTk5NztzdHJva2UtbWl0ZXJsaW1pdDo0O3'+
			'N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjcwMTQzNzYiIHk9Ii0xNDMuODIxMzgiIHJ4PSIxLjcwMTQzNzYiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgd2lkdGg9Ijk4LjAzNDQ1NCIgeD0iMjUuNDc4NzM3Ii8+CiAgPHJlY3QgaGVpZ2h0PSI4MC4wNzM5NTIiIGlkPSJyZWN0MTI4OC01IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNyYWRpYWxHcmFkaWVudDEzNDQpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjk2NDk5OTk3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJh'+
			'eTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjEuNzAxNDM3NiIgeT0iLTIyOC4wMTEyNiIgcng9IjEuNzAxNDM3NiIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiB3aWR0aD0iOTguMDM0NDU0IiB4PSIxMDIuMTg1MDkiLz4KICA8cmVjdCBoZWlnaHQ9IjgwLjA3Mzk1OSIgaWQ9InJlY3QxMjg4LTUtOSIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjcmFkaWFsR3JhZGllbnQxNDM3KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45NjQ5OTk5NztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2'+
			'UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHJ5PSIxLjcwMTQzNzYiIHk9Ii0xMjMuMjQxNjIiIHJ4PSIxLjcwMTQzNzYiIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgd2lkdGg9Ijk4LjAzNDQ1NCIgeD0iMTY2LjU0MzU4Ii8+CiA8L2c+CiA8c3R5bGUgaWQ9InN0eWxlMiIgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0NjQ2NDY7fQoJLnN0MXtmaWxsOiNEMUQxRDE7fQo8L3N0eWxlPgogPHN0eWxlIGlkPSJzdHlsZTExMTUiIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDY0NjQ2O30KCS5zdDF7ZmlsbDojRDFEMUQxO30KPC9zdHlsZT4KIDxzdHlsZSBpZD0ic3R5bGUx'+
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
		hs+='bottom : 1px;';
		hs+='height : 20px;';
		hs+='left : 1px;';
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
		hs+='bottom : 1px;';
		hs+='height : 20px;';
		hs+='left : 1px;';
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
		el=me._hilfebox9=document.createElement('div');
		els=me._hilfebox9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="\xd6ffnet das Forschungsmen\xfc";
		el.appendChild(els);
		me._hilfebox9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox9.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox9);
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
		me._forschungsmenuhilfe.onmousedown=function (e) {
			me._hilfebox9.style[domTransition]='none';
			me._hilfebox9.style.visibility=(Number(me._hilfebox9.style.opacity)>0||!me._hilfebox9.style.opacity)?'inherit':'hidden';
			me._hilfebox9.ggVisible=true;
		}
		me._forschungsmenuhilfe.onmouseup=function (e) {
			me._hilfebox9.style[domTransition]='none';
			me._hilfebox9.style.visibility='hidden';
			me._hilfebox9.ggVisible=false;
		}
		me._forschungsmenuhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._forschungsmenuhilfe);
		el=me._hilfebox8=document.createElement('div');
		els=me._hilfebox8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="Schaltet den Vollbildmodus an und aus";
		el.appendChild(els);
		me._hilfebox8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox8.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox8);
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
		me._vollbildhilfe.onmousedown=function (e) {
			me._hilfebox8.style[domTransition]='none';
			me._hilfebox8.style.visibility=(Number(me._hilfebox8.style.opacity)>0||!me._hilfebox8.style.opacity)?'inherit':'hidden';
			me._hilfebox8.ggVisible=true;
		}
		me._vollbildhilfe.onmouseup=function (e) {
			me._hilfebox8.style[domTransition]='none';
			me._hilfebox8.style.visibility='hidden';
			me._hilfebox8.ggVisible=false;
		}
		me._vollbildhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._vollbildhilfe);
		el=me._hilfebox7=document.createElement('div');
		els=me._hilfebox7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="Der Datenlink verbindet dich mit Stationen und wissenschaftlichen Ger\xe4ten";
		el.appendChild(els);
		me._hilfebox7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox7.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox7);
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
		me._datenlinkhilfe.onmousedown=function (e) {
			me._hilfebox7.style[domTransition]='none';
			me._hilfebox7.style.visibility=(Number(me._hilfebox7.style.opacity)>0||!me._hilfebox7.style.opacity)?'inherit':'hidden';
			me._hilfebox7.ggVisible=true;
		}
		me._datenlinkhilfe.onmouseup=function (e) {
			me._hilfebox7.style[domTransition]='none';
			me._hilfebox7.style.visibility='hidden';
			me._hilfebox7.ggVisible=false;
		}
		me._datenlinkhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._datenlinkhilfe);
		el=me._hilfebox6=document.createElement('div');
		els=me._hilfebox6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 78px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="\xd6ffnet das Informationsmen\xfc. Hier findest du weitere Dinge, wie weitere Infos, die AGB\'s und das Impressum ";
		el.appendChild(els);
		me._hilfebox6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox6.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox6);
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
		me._infohilfe.onmousedown=function (e) {
			me._hilfebox6.style[domTransition]='none';
			me._hilfebox6.style.visibility=(Number(me._hilfebox6.style.opacity)>0||!me._hilfebox6.style.opacity)?'inherit':'hidden';
			me._hilfebox6.ggVisible=true;
		}
		me._infohilfe.onmouseup=function (e) {
			me._hilfebox6.style[domTransition]='none';
			me._hilfebox6.style.visibility='hidden';
			me._hilfebox6.ggVisible=false;
		}
		me._infohilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._infohilfe);
		el=me._hilfebox5=document.createElement('div');
		els=me._hilfebox5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="\xd6ffnet das Kartenmen\xfc";
		el.appendChild(els);
		me._hilfebox5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox5.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox5);
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
		me._kartehilfe.onmousedown=function (e) {
			me._hilfebox5.style[domTransition]='none';
			me._hilfebox5.style.visibility=(Number(me._hilfebox5.style.opacity)>0||!me._hilfebox5.style.opacity)?'inherit':'hidden';
			me._hilfebox5.ggVisible=true;
		}
		me._kartehilfe.onmouseup=function (e) {
			me._hilfebox5.style[domTransition]='none';
			me._hilfebox5.style.visibility='hidden';
			me._hilfebox5.ggVisible=false;
		}
		me._kartehilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._kartehilfe);
		el=me._hilfebox4=document.createElement('div');
		els=me._hilfebox4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
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
		els.innerHTML="\xd6ffnet das Kommunikationsmen\xfc";
		el.appendChild(els);
		me._hilfebox4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox4.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox4);
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
		me._playhilfe.onmousedown=function (e) {
			me._hilfebox4.style[domTransition]='none';
			me._hilfebox4.style.visibility=(Number(me._hilfebox4.style.opacity)>0||!me._hilfebox4.style.opacity)?'inherit':'hidden';
			me._hilfebox4.ggVisible=true;
		}
		me._playhilfe.onmouseup=function (e) {
			me._hilfebox4.style[domTransition]='none';
			me._hilfebox4.style.visibility='hidden';
			me._hilfebox4.ggVisible=false;
		}
		me._playhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._playhilfe);
		el=me._hilfebox3=document.createElement('div');
		els=me._hilfebox3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 26px;';
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
		els.innerHTML="Deine bisher generierte Forschungsdaten";
		el.appendChild(els);
		me._hilfebox3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox3.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox3);
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
		me._datenhilfe.onmousedown=function (e) {
			me._hilfebox3.style[domTransition]='none';
			me._hilfebox3.style.visibility=(Number(me._hilfebox3.style.opacity)>0||!me._hilfebox3.style.opacity)?'inherit':'hidden';
			me._hilfebox3.ggVisible=true;
		}
		me._datenhilfe.onmouseup=function (e) {
			me._hilfebox3.style[domTransition]='none';
			me._hilfebox3.style.visibility='hidden';
			me._hilfebox3.ggVisible=false;
		}
		me._datenhilfe.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._datenhilfe);
		el=me._hilfebox2=document.createElement('div');
		els=me._hilfebox2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HilfeBox2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 38px;';
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
		els.innerHTML="Hier siehst du ob es aktuelle Nachrichten oder Auftr\xe4ge von SENSI gibt.";
		el.appendChild(els);
		me._hilfebox2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hilfebox2.ggUpdatePosition=function (useTransition) {
		}
		me._hilfesensimenufelder.appendChild(me._hilfebox2);
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
		me._aktuellenachrichthilfe.onmousedown=function (e) {
			me._hilfebox2.style[domTransition]='none';
			me._hilfebox2.style.visibility=(Number(me._hilfebox2.style.opacity)>0||!me._hilfebox2.style.opacity)?'inherit':'hidden';
			me._hilfebox2.ggVisible=true;
		}
		me._aktuellenachrichthilfe.onmouseup=function (e) {
			me._hilfebox2.style[domTransition]='none';
			me._hilfebox2.style.visibility='hidden';
			me._hilfebox2.ggVisible=false;
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
			me._tipps.style[domTransition]='none';
			me._tipps.style.visibility=(Number(me._tipps.style.opacity)>0||!me._tipps.style.opacity)?'inherit':'hidden';
			me._tipps.ggVisible=true;
			me._tipp2.style[domTransition]='none';
			me._tipp2.style.visibility=(Number(me._tipp2.style.opacity)>0||!me._tipp2.style.opacity)?'inherit':'hidden';
			me._tipp2.ggVisible=true;
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
			me._tipps.style[domTransition]='none';
			me._tipps.style.visibility='hidden';
			me._tipps.ggVisible=false;
			me._tipp2.style[domTransition]='none';
			me._tipp2.style.visibility='hidden';
			me._tipp2.ggVisible=false;
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
		el=me._tipps=document.createElement('div');
		els=me._tipps__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Tipps";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : -107px;';
		hs+='visibility : hidden;';
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
		els.innerHTML="Hier soll es Tipps geben";
		el.appendChild(els);
		me._tipps.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tipps.ggUpdatePosition=function (useTransition) {
		}
		me._infomenu.appendChild(me._tipps);
		el=me._hhv=document.createElement('div');
		els=me._hhv__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hhv__img.setAttribute('src',basePath + 'images/hhv.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hhv__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._hhv__imgo.setAttribute('src',basePath + 'images/hhv__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="HHV";
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
		me._hhv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hhv.onclick=function (e) {
			me._team.style[domTransition]='none';
			me._team.style.visibility=(Number(me._team.style.opacity)>0||!me._team.style.opacity)?'inherit':'hidden';
			me._team.ggVisible=true;
			me._hhv2.style[domTransition]='none';
			me._hhv2.style.visibility=(Number(me._hhv2.style.opacity)>0||!me._hhv2.style.opacity)?'inherit':'hidden';
			me._hhv2.ggVisible=true;
		}
		me._hhv.onmouseover=function (e) {
			me._hhv__img.style.visibility='hidden';
			me._hhv__imgo.style.visibility='inherit';
		}
		me._hhv.onmouseout=function (e) {
			me._hhv__img.style.visibility='inherit';
			me._hhv__imgo.style.visibility='hidden';
		}
		me._hhv.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._hhv);
		el=me._hhv2=document.createElement('div');
		els=me._hhv2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._hhv2__img.setAttribute('src',basePath + 'images/hhv2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HHV2";
		el.ggDx=-84;
		el.ggDy=-52;
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
		me._hhv2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hhv2.onclick=function (e) {
			me._team.style[domTransition]='none';
			me._team.style.visibility='hidden';
			me._team.ggVisible=false;
			me._hhv2.style[domTransition]='none';
			me._hhv2.style.visibility='hidden';
			me._hhv2.ggVisible=false;
		}
		me._hhv2.ggUpdatePosition=function (useTransition) {
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
		me._infomenu.appendChild(me._hhv2);
		el=me._team=document.createElement('div');
		els=me._team__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._team__img.setAttribute('src',basePath + 'images/team.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Team";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -161px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._team.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team.ggUpdatePosition=function (useTransition) {
		}
		el=me._team1=document.createElement('div');
		els=me._team1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Team1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
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
		els.innerHTML="Phillip als Dr. SENSO,";
		el.appendChild(els);
		me._team1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team1.ggUpdatePosition=function (useTransition) {
		}
		me._team.appendChild(me._team1);
		el=me._team2=document.createElement('div');
		els=me._team2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Team2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 139px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
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
		els.innerHTML="Max als NERD und";
		el.appendChild(els);
		me._team2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team2.ggUpdatePosition=function (useTransition) {
		}
		me._team.appendChild(me._team2);
		el=me._team3=document.createElement('div');
		els=me._team3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Team3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 25px;';
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
		els.innerHTML="Bella als ";
		el.appendChild(els);
		me._team3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team3.ggUpdatePosition=function (useTransition) {
		}
		me._team.appendChild(me._team3);
		el=me._team4=document.createElement('div');
		els=me._team4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Team4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 119px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 213px;';
		hs+='height: 21px;';
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
		els.innerHTML="\" Hallo ich bin SENSIiii....\"";
		el.appendChild(els);
		me._team4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._team4.ggUpdatePosition=function (useTransition) {
		}
		me._team.appendChild(me._team4);
		me._infomenu.appendChild(me._team);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI2NC40MTQ1MiIgaWQ9InN2ZzIiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZlcnNpb249IjEuMSIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc29kaXBvZGk6ZG9jbmFtZT0iSW5mbzIuc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVE'+
			'Qvc29kaXBvZGktMC5kdGQiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmlld0JveD0iMCAwIDc0LjM3OTQ4IDY0LjQxNDUyMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNzQuMzc5NDc4Ij4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGd1aWRldG9sZXJhbmNlPSIxMCIgYm9yZGVyb3BhY2l0eT0iMSIgc2hvd2dyaWQ9ImZh'+
			'bHNlIiBpZD0ibmFtZWR2aWV3OSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgaW5rc2NhcGU6Y3g9Ii00LjM3NzkwNDQiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBncmlkdG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBwYWdlY29sb3I9Ii'+
			'NmZmZmZmYiIGlua3NjYXBlOndpbmRvdy14PSItOSIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IGhlaWdodD0iMjAzLjE0NDI3IiBpZD0icmVjdDE0NSIgc3R5bGU9InN0cm9rZS13aWR0aDoxLjcxMjEyODY0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDMuMzE1MzE1KSIgeT0iNjcuODA0OTkzIiB3aWR0aD0iMjAzLjE0NDI3IiB4PSItNzE1LjE1NjgiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIGlkPSJwYXRoNDU1NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbm'+
			'Vqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5ODggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCBoZWlnaHQ9IjI3Ljk1NTAyMSIgaWQ9InJlY3Q0NzAxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMw'+
			'NjczNzA3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjIuODk0OTk2NCIgeT0iLTI3LjQxNjUwNCIgd2lkdGg9IjI4LjA5ODM3OSIgeD0iLTExMC45NDM5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBpZD0icGF0aDQ5MzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZW'+
			'pvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSBpZD0iY2lyY2xlNDkxNSIgY3g9'+
			'Ii04OC41Nzk0NzUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIGN5PSItNTQuMTM0Nzg5IiByPSIyNC4yODM1NzkiIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q0NzIxIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi'+
			'40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgeD0iLTM0LjU0Njk1OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q4OTQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0ODk5IiBjeD0iLTUyLjY0ODIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgaWQ9ImNpcmNsZTQ4OTUiIGN4PSItNTIuNjQ4MjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZD'+
			'RkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSBpZD0iY2lyY2xlNDg5MSIgY3g9Ii01Mi42NDgyMjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiByPSIxMC45Mjk5MDciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIi8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIGlkPSJjaXJjbGU0ODg3IiBjeD0iLTUyLjY0ODIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIG'+
			'lkPSJyZWN0NDcyMS0yIiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiByeT0iMC40MDc0NDkwMSIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgeD0iLTM0LjU0Njk1OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgaWQ9InJlY3Q5MzAiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgw'+
			'NjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDQ3MjEtMCIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgcnk9IjAuNDA3NDQ5MDEiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIHg9Ii0zNC41NDY5NTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiBpZD0icmVjdDE5NzciIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHJ5PSIwLjQwNzQ0OTAxIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiB4PSItMzQuNTQ2OTU5Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIGlkPSJwYXRoMjAzOCIgc3R5bGU9ImZpbGw6IzAwZmZjYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45ODM3ODk5MjtzdHJva2Ut'+
			'bWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gMjU3Ljk4MzAzLDEzNy40NTYyNSAtNC45MDE5NCw4LjQ5MDQxIGggLTkuODAzODcgbCAtNC45MDE5NCwtOC40OTA0MSA0LjkwMTk0LC04LjQ5MDQgaCA5LjgwMzg3IHoiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIi8+CiA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0idGV4dDg0OCIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudD'+
			'pub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1My4zMzMzMzIwNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q29uc3RhbnRpYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidDb25zdGFudGlhLCBCb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHIt'+
			'dGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB5PSI1MC44NDAwNjUiIHg9IjI4LjI3MDQ3NyI+CiAgPHRzcGFuIGlkPSJ0c3Bhbjg0NiIgc29kaXBvZGk6cm9sZT0ibGluZSIgeT0iNTAuODQwMDY1IiB4PSIyOC4yNzA0NzciPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
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
	me._lernmenu.logicBlock_visible();
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
	player.addListener('changenode', function(args) { me._sensimenu2.logicBlock_visible();me._vollbild.logicBlock_visible();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._kommunikation.logicBlock_visible();me._kommunikation.logicBlock_alpha();me._linkoffnen.logicBlock_visible();me._linkoffnen.logicBlock_alpha();me._kartenmenuzeigen.logicBlock_visible();me._kartenmenuzeigen.logicBlock_alpha();me._datenlink.logicBlock_visible();me._datenlink.logicBlock_alpha();me._forschungsmenuzeigen.logicBlock_visible();me._forschungsmenuzeigen.logicBlock_alpha();me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._st2.logicBlock_alpha();me._linkmenu.logicBlock_visible();me._linkmenu.logicBlock_alpha();me._station0offen.logicBlock_visible();me._station1offen.logicBlock_visible();me._station2offen.logicBlock_visible();me._schlossstation0.logicBlock_alpha();me._schlossstation1.logicBlock_alpha();me._schlossstation2.logicBlock_alpha();me._lernmenu.logicBlock_visible();me._forschungsmenu.logicBlock_visible();me._forschungsmenu.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._station1.logicBlock_alpha();me._kartenmenu.logicBlock_visible();me._kartenmenu.logicBlock_alpha();me._kommenu.logicBlock_visible();me._kommenu.logicBlock_alpha();me._infomenu.logicBlock_alpha();me._linkoffnen2.logicBlock_visible();me._linkoffnen2.logicBlock_alpha(); });
	player.addListener('varchanged_LinkMenu', function(args) { me._linkmenu.logicBlock_visible();me._linkmenu.logicBlock_alpha(); });
	player.addListener('varchanged_LernMenu', function(args) { me._lernmenu.logicBlock_visible(); });
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