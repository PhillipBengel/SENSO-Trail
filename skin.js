// Garden Gnome Software - Skin
// Pano2VR 6.1.5/17926
// Filename: SENSO-Trail Skin.ggsk
// Generated 2020-07-26T02:51:15

function pano2vrSkin(player,base) {
	player.addVariable('Station', 1, 0);
	player.addVariable('Forschungspunkte', 0, "0");
	player.addVariable('SENSI', 2, false);
	player.addVariable('Vollbild', 2, false);
	player.addVariable('Infomenu', 2, false);
	player.addVariable('Einstellungen', 2, false);
	player.addVariable('KomMenu', 2, false);
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
		el=me._statusleisteordner=document.createElement('div');
		el.ggId="StatusleisteOrdner";
		el.ggDx=-26;
		el.ggDy=-210;
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
		me.divSkin.appendChild(me._statusleisteordner);
		el=me._sensiordner=document.createElement('div');
		el.ggId="SENSIOrdner";
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
		me._sensimenu__img.setAttribute('src',basePath + 'images/sensimenu.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sensimenu__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._sensimenu__imgo.setAttribute('src',basePath + 'images/sensimenu__o.svg');
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
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		me._sensimenu2__img.setAttribute('src',basePath + 'images/sensimenu2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sensimenu2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._sensimenu2__imgo.setAttribute('src',basePath + 'images/sensimenu2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
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
		el=me._vollbild=document.createElement('div');
		els=me._vollbild__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzb2RpcG9kaTpkb2NuYW1lPSJWb2xsYmlsZC5zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiB2ZXJzaW9uPSIxLj'+
			'EiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgd2lkdGg9IjE5LjY3OTU2N21tIiBpZD0ic3ZnMTg4MSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgogIDxj'+
			'bGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHJ5PSI1Ljg4OTE1MjUiIHg9Ii04OS41MTMzNTEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIvPgogIDwvY2xpcFBhdGg+Ci'+
			'AgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHJ5PSI1Ljg4OTE1MjUiIHg9Ii04OS41MTMzNTEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiLz4KICA8L2NsaXBQYXRoPgog'+
			'PC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOmN5PSIyOC4wMDcwNDEiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBzaG93Z3JpZD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJjb2xvcj0iIzY2Nj'+
			'Y2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpZD0iYmFzZSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBib3JkZXJvcGFjaXR5PSIxLjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6Y3g9IjQxLjYwOTAyMyIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBl'+
			'IHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSI+CiAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45MzMzMj'+
			'E7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2MiwtOC4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBpZD0icGF0aDQ0MjQtMCIvPgogIDxyZWN0IGhlaWdodD0iNy44NTY3NyIgcnk9IjAuNjc4MDIxODUiIHg9IjQ5Ljc2OTI5NSIgc3R5bGU9Im9wYWNpdHk6MC40NzMwMDAwMjtmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7'+
			'c3Ryb2tlLXdpZHRoOjAuMzI0OTk5OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTY2LjgyNzU2IiB3aWR0aD0iMTAuODMwNDUyIiBpZD0icmVjdDE4MDgiLz4KICA8cmVjdCByeT0iMC43NDQ4MzkyNSIgaGVpZ2h0PSI3Ljg1Njc3IiB4PSI0OS43NjkyOTUiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIH'+
			'k9IjE2Ni44Mjc1NiIgd2lkdGg9IjEwLjgzMDQ1MiIgaWQ9InJlY3QyNDU0Ii8+CiAgPHJlY3Qgcnk9IjEuMDgyMDExMyIgaGVpZ2h0PSI1LjYyNTExNCIgeD0iNTAuMjUzNDg3IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4wOTE0MDgyOTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4yNzQyMjQ4NywgMC4yNzQyMjQ4NztzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2OC43MDg2OCIgd2lkdGg9IjguMDU4ODQ2NSIgaWQ9InJlY3QxODUxIi8+CiAgPGcgdHJh'+
			'bnNmb3JtPSJtYXRyaXgoLTAuMDU3NDcxODQsLTAuMDU5NjEwNCwwLjA1OTYxMDQsLTAuMDU3NDcxODQsNTYuMzQ3MzEzLDE2Ny4yMzY2NikiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGlkPSJnNTg2NC0wIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIHJ5PSIyLjUwMzYwMzIiIHg9Ii0zOS41MTA1NTkiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgeT0iLTE4LjgzMzA1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgaWQ9InJlY3Q1ODU2LTUiLz4KICAgPG'+
			'cgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODYyLTciPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1Mzgg'+
			'YyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NTgtMiIvPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMC'+
			'Igc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkg'+
			'YyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg2MC0zIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._vollbild__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbild__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzb2RpcG9kaTpkb2NuYW1lPSJWb2xsYmlsZDIuc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgdmVyc2lvbj0iMS'+
			'4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHdpZHRoPSIxOS42Nzk1NjdtbSIgaWQ9InN2ZzE4ODEiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4KICA8'+
			'Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjcuODM5NzYxMyIgd2lkdGg9IjI5LjcyNTc2MyIgaWQ9InJlY3Q1ODAxLTEiLz4KICA8L2NsaXBQYXRoPg'+
			'ogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjcuODM5NzYxMyIgd2lkdGg9IjI5LjcyNTc2MyIgaWQ9InJlY3QxODYzIi8+CiAgPC9jbGlwUGF0aD4K'+
			'IDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTpjeT0iMjguMDA3MDQxIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgc2hvd2dyaWQ9ImZhbHNlIiBwYWdlY29sb3I9IiNmZmZmZmYiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyY29sb3I9IiM2Nj'+
			'Y2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaWQ9ImJhc2UiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGlua3NjYXBlOmN4PSI0MS42MDkwMjMiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlw'+
			'ZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiPgogIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTMzMz'+
			'IxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaWQ9InBhdGg0NDI0LTAiLz4KICA8cmVjdCBoZWlnaHQ9IjcuODU2NzciIHJ5PSIwLjY3ODAyMTg1IiB4PSI0OS43NjkyOTUiIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAw'+
			'O3N0cm9rZS13aWR0aDowLjMyNDk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2Ni44Mjc1NiIgd2lkdGg9IjEwLjgzMDQ1MiIgaWQ9InJlY3QxODA4Ii8+CiAgPHJlY3Qgcnk9IjAuNzQ0ODM5MjUiIGhlaWdodD0iNy44NTY3NyIgeD0iNDkuNzY5Mjk1IiBzdHlsZT0ib3BhY2l0eTowLjk5MTk5OTk3O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4zMjQ5OTk5OTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi'+
			'B5PSIxNjYuODI3NTYiIHdpZHRoPSIxMC44MzA0NTIiIGlkPSJyZWN0MjQ1NCIvPgogIDxyZWN0IHJ5PSIxLjA4MjAxMTMiIGhlaWdodD0iNS42MjUxMTQiIHg9IjUwLjI1MzQ4NyIgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMDkxNDA4Mjk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjAuMjc0MjI0ODcsIDAuMjc0MjI0ODc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSIxNjguNzA4NjgiIHdpZHRoPSI4LjA1ODg0NjUiIGlkPSJyZWN0MTg1MSIvPgogIDxnIHRy'+
			'YW5zZm9ybT0ibWF0cml4KC0wLjA1NzQ3MTg0LC0wLjA1OTYxMDQsMC4wNTk2MTA0LC0wLjA1NzQ3MTg0LDU2LjM0NzMxMywxNjcuMjM2NjYpIiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBpZD0iZzU4NjQtMCI+CiAgIDxyZWN0IGhlaWdodD0iNTEuMTc2Nzg4IiByeT0iMi41MDM2MDMyIiB4PSItMzkuNTEwNTU5IiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHk9Ii0xOC44MzMwNTkiIHdpZHRoPSIxNS41NTc3NDQiIGlkPSJyZWN0NTg1Ni01Ii8+CiAgID'+
			'xnIHRyYW5zZm9ybT0icm90YXRlKC00NSwtNjMuOTQyNTE3LDI5Ljg2MjYxOSkiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGlkPSJnNTg2Mi03Ij4KICAgIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4'+
			'IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaWQ9InBhdGg1ODU4LTIiLz4KICAgIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9Ij'+
			'AiIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3Nzc3Nzc2MiIHRyYW5zZm9ybT0ibWF0cml4KDAsLTEsLTEsMCwxMS40NzMwOTcsMTEuNDczMDk3KSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5'+
			'IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NjAtMyIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		me._sensiordner.appendChild(me._vollbild);
		el=me._vollbildaus=document.createElement('div');
		els=me._vollbildaus__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzb2RpcG9kaTpkb2NuYW1lPSJWb2xsYmlsZEF1cy5zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHZpZXdCb3g9IjAgMCAxOS42Nzk1NjcgMTcuMDQzMDExIiB2ZXJzaW9uPS'+
			'IxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgd2lkdGg9IjE5LjY3OTU2N21tIiBpZD0ic3ZnMTg4MSI+CiA8ZGVmcyBpZD0iZGVmczE4NzUiPgog'+
			'IDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNTc5OS04Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHJ5PSI1Ljg4OTE1MjUiIHg9Ii04OS41MTMzNTEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDU4MDEtMSIvPgogIDwvY2xpcFBhdG'+
			'g+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxODY1Ij4KICAgPHJlY3QgaGVpZ2h0PSIyOS4zNTcyNjIiIHJ5PSI1Ljg4OTE1MjUiIHg9Ii04OS41MTMzNTEiIHRyYW5zZm9ybT0icm90YXRlKC00NSkiIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU0NTc3OTk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iNy44Mzk3NjEzIiB3aWR0aD0iMjkuNzI1NzYzIiBpZD0icmVjdDE4NjMiLz4KICA8L2NsaXBQYXRo'+
			'PgogPC9kZWZzPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOmN5PSIzMi45OTk0NzkiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBzaG93Z3JpZD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgZml0LW1hcmdpbi10b3A9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIgaW5rc2NhcGU6c25hcC1nbG9iYWw9ImZhbHNlIiBib3JkZXJjb2xvcj0iIz'+
			'Y2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiBpZD0iYmFzZSIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBib3JkZXJvcGFjaXR5PSIxLjAiIGZpdC1tYXJnaW4tbGVmdD0iMCIgaW5rc2NhcGU6Y3g9IjMyLjA3MjUyMyIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTE4NzgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0'+
			'eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjM0NDc0LC0xNjIuMjM0NDUpIiBpbmtzY2FwZTpsYWJlbD0iRWJlbmUgMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSI+CiAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6IzAwYWE4ODtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC45Mz'+
			'MzMjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBkPSJtIDU5LjgzNDk4OCwxNjIuNzAxMTEgNC42NTA0NjcsOC4wNTQ4NSAtNC42NTA0NjIsOC4wNTQ4NCBoIC05LjMwMDkzOCBsIC00LjY1MDQ2MiwtOC4wNTQ4NSA0LjY1MDQ2NSwtOC4wNTQ4NCB6IiBpZD0icGF0aDQ0MjQtMCIvPgogIDxyZWN0IGhlaWdodD0iNS4yMjYwNzc2IiByeT0iMC40NTA5OTg5IiB4PSI1MC4xNDUxNDUiIHN0eWxlPSJvcGFjaXR5OjAuNDczMDAwMDI7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAw'+
			'MDAwO3N0cm9rZS13aWR0aDowLjIxNjE3OTgyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2OS4xMDYwMyIgd2lkdGg9IjcuMjA0MDc3NyIgaWQ9InJlY3QxODA4Ii8+CiAgPHJlY3Qgcnk9IjAuOTU2NzU2MjMiIGhlaWdodD0iNy45MjY1NjE4IiB4PSI0OS43Njk1NDciIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjEyNTc5Mjg2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTowLjM3NzM3ODYsIDAuMzc3Mzc4NjtzdHJva2'+
			'UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2Ni44NTc3NiIgd2lkdGg9IjEwLjgzMDc5MSIgaWQ9InJlY3QxODUxIi8+CiAgPHJlY3Qgcnk9IjAuNDk4NjM3NSIgaGVpZ2h0PSI1LjI1OTc2NTYiIHg9IjUwLjEyOTE0MyIgc3R5bGU9Im9wYWNpdHk6MC45OTE5OTk5NztmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMjE3NTczMzQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTY5LjA5NjcxIiB3aWR0aD0iNy4yNTA1MTU5IiBpZD0icmVjdDI0NTQiLz4KICA8'+
			'ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjA1NzQ3MTg0LDAuMDU5NjEwNCwtMC4wNTk2MTA0LDAuMDU3NDcxODQsNjEuNTAzODQxLDE2OS41NDIzKSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODY0LTAiPgogICA8cmVjdCBoZWlnaHQ9IjUxLjE3Njc4OCIgcnk9IjIuNTAzNjAzMiIgeD0iLTM5LjUxMDU1OSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiB5PSItMTguODMzMDU5IiB3aWR0aD0iMTUuNTU3NzQ0IiBpZD0icmVjdDU4NTYtNSIvPgogIC'+
			'A8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtNDUsLTYzLjk0MjUxNywyOS44NjI2MTkpIiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBpZD0iZzU4NjItNyI+CiAgICA8cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUz'+
			'OCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41MjkyNzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg1OC0yIi8+CiAgICA8cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPS'+
			'IwIiBzb2RpcG9kaTpub2RldHlwZXM9ImNzc3Nzc3NjIiB0cmFuc2Zvcm09Im1hdHJpeCgwLC0xLC0xLDAsMTEuNDczMDk3LDExLjQ3MzA5NykiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg1Nzk5LTgpIiBkPSJtIC00MC4zMzE1NTMsNDkuMzYwNTM4IGMgMi41NjMxMzUsMCAwLjE5MzM1OCwtMi4yNzc2MDIgMi4xMTc2MDEsLTAuNTg0Mzk1IGwgMTEuOTY1OTg1LDEwLjUyOTI3'+
			'OSBjIDEuOTI0MjQ0LDEuNjkzMjA3IC0xLjI4OTEzNiw3LjkyNjAxNyAtNS4wMTI1OTcsNy45MDc1OTQgbCAtMTkuNTAzNzY4LC0wLjA5NjUgYyAtMi41NjMxMDQsLTAuMDEyNjggLTQuNjI2NTk4LC0yLjA2MzQ2MyAtNC42MjY1OTgsLTQuNjI2NTk4IHYgLTE3Ljc2Njc3IGMgMCwtMi41NjMxMzUgMTAuOTQxNDUyLDUuNjAyMzg5IDEzLjUwNDU4Nyw1LjYwMjM4OSIgaWQ9InBhdGg1ODYwLTMiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._vollbildaus__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vollbildaus__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaGVpZ2h0PSIxNy4wNDMwMTFtbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzb2RpcG9kaTpkb2NuYW1lPSJWb2xsYmlsZEF1czIuc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgMTkuNjc5NTY3IDE3LjA0MzAxMSIgdmVyc2lvbj'+
			'0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHdpZHRoPSIxOS42Nzk1NjdtbSIgaWQ9InN2ZzE4ODEiPgogPGRlZnMgaWQ9ImRlZnMxODc1Ij4K'+
			'ICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDU3OTktOCI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjcuODM5NzYxMyIgd2lkdGg9IjI5LjcyNTc2MyIgaWQ9InJlY3Q1ODAxLTEiLz4KICA8L2NsaXBQYX'+
			'RoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTg2NSI+CiAgIDxyZWN0IGhlaWdodD0iMjkuMzU3MjYyIiByeT0iNS44ODkxNTI1IiB4PSItODkuNTEzMzUxIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIiBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI1NDU3Nzk5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjcuODM5NzYxMyIgd2lkdGg9IjI5LjcyNTc2MyIgaWQ9InJlY3QxODYzIi8+CiAgPC9jbGlwUGF0'+
			'aD4KIDwvZGVmcz4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiBpbmtzY2FwZTpjeT0iMzIuOTk5NDc5IiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgZml0LW1hcmdpbi1yaWdodD0iMCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIgc2hvd2dyaWQ9ImZhbHNlIiBwYWdlY29sb3I9IiNmZmZmZmYiIGZpdC1tYXJnaW4tdG9wPSIwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgYm9yZGVyY29sb3I9Ii'+
			'M2NjY2NjYiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgaWQ9ImJhc2UiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgaW5rc2NhcGU6d2luZG93LXg9Ii05IiBpbmtzY2FwZTp3aW5kb3cteT0iMTA3MSIgYm9yZGVyb3BhY2l0eT0iMS4wIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGlua3NjYXBlOmN4PSIzMi4wNzI1MjMiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxtZXRhZGF0YSBpZD0ibWV0YWRhdGExODc4Ij4KICA8cmRmOlJERj4KICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6'+
			'dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8ZGM6dGl0bGUvPgogICA8L2NjOldvcms+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4zNDQ3NCwtMTYyLjIzNDQ1KSIgaW5rc2NhcGU6bGFiZWw9IkViZW5lIDEiIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiIGlkPSJsYXllcjEiPgogIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiMwMGZmY2M7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOT'+
			'MzMzIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSA1OS44MzQ5ODgsMTYyLjcwMTExIDQuNjUwNDY3LDguMDU0ODUgLTQuNjUwNDYyLDguMDU0ODQgaCAtOS4zMDA5MzggbCAtNC42NTA0NjIsLTguMDU0ODUgNC42NTA0NjUsLTguMDU0ODQgeiIgaWQ9InBhdGg0NDI0LTAiLz4KICA8cmVjdCBoZWlnaHQ9IjUuMjI2MDc3NiIgcnk9IjAuNDUwOTk4OSIgeD0iNTAuMTQ1MTQ1IiBzdHlsZT0ib3BhY2l0eTowLjQ3MzAwMDAyO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAw'+
			'MDAwMDtzdHJva2Utd2lkdGg6MC4yMTYxNzk4MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiB5PSIxNjkuMTA2MDMiIHdpZHRoPSI3LjIwNDA3NzciIGlkPSJyZWN0MTgwOCIvPgogIDxyZWN0IHJ5PSIwLjk1Njc1NjIzIiBoZWlnaHQ9IjcuOTI2NTYxOCIgeD0iNDkuNzY5NTQ3IiBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC4xMjU3OTI4NjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6MC4zNzczNzg2LCAwLjM3NzM3ODY7c3Ryb2'+
			'tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSIxNjYuODU3NzYiIHdpZHRoPSIxMC44MzA3OTEiIGlkPSJyZWN0MTg1MSIvPgogIDxyZWN0IHJ5PSIwLjQ5ODYzNzUiIGhlaWdodD0iNS4yNTk3NjU2IiB4PSI1MC4xMjkxNDMiIHN0eWxlPSJvcGFjaXR5OjAuOTkxOTk5OTc7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjIxNzU3MzM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHk9IjE2OS4wOTY3MSIgd2lkdGg9IjcuMjUwNTE1OSIgaWQ9InJlY3QyNDU0Ii8+CiAg'+
			'PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNTc0NzE4NCwwLjA1OTYxMDQsLTAuMDU5NjEwNCwwLjA1NzQ3MTg0LDYxLjUwMzg0MSwxNjkuNTQyMykiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGlkPSJnNTg2NC0wIj4KICAgPHJlY3QgaGVpZ2h0PSI1MS4xNzY3ODgiIHJ5PSIyLjUwMzYwMzIiIHg9Ii0zOS41MTA1NTkiIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgeT0iLTE4LjgzMzA1OSIgd2lkdGg9IjE1LjU1Nzc0NCIgaWQ9InJlY3Q1ODU2LTUiLz4KIC'+
			'AgPGcgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LC02My45NDI1MTcsMjkuODYyNjE5KSIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIgaWQ9Imc1ODYyLTciPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDU3OTktOCkiIGQ9Im0gLTQwLjMzMTU1Myw0OS4zNjA1'+
			'MzggYyAyLjU2MzEzNSwwIDAuMTkzMzU4LC0yLjI3NzYwMiAyLjExNzYwMSwtMC41ODQzOTUgbCAxMS45NjU5ODUsMTAuNTI5Mjc5IGMgMS45MjQyNDQsMS42OTMyMDcgLTEuMjg5MTM2LDcuOTI2MDE3IC01LjAxMjU5Nyw3LjkwNzU5NCBsIC0xOS41MDM3NjgsLTAuMDk2NSBjIC0yLjU2MzEwNCwtMC4wMTI2OCAtNC42MjY1OTgsLTIuMDYzNDYzIC00LjYyNjU5OCwtNC42MjY1OTggdiAtMTcuNzY2NzcgYyAwLC0yLjU2MzEzNSAxMC45NDE0NTIsNS42MDIzODkgMTMuNTA0NTg3LDUuNjAyMzg5IiBpZD0icGF0aDU4NTgtMiIvPgogICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT'+
			'0iMCIgc29kaXBvZGk6bm9kZXR5cGVzPSJjc3Nzc3NzYyIgdHJhbnNmb3JtPSJtYXRyaXgoMCwtMSwtMSwwLDExLjQ3MzA5NywxMS40NzMwOTcpIiBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNTc5OS04KSIgZD0ibSAtNDAuMzMxNTUzLDQ5LjM2MDUzOCBjIDIuNTYzMTM1LDAgMC4xOTMzNTgsLTIuMjc3NjAyIDIuMTE3NjAxLC0wLjU4NDM5NSBsIDExLjk2NTk4NSwxMC41Mjky'+
			'NzkgYyAxLjkyNDI0NCwxLjY5MzIwNyAtMS4yODkxMzYsNy45MjYwMTcgLTUuMDEyNTk3LDcuOTA3NTk0IGwgLTE5LjUwMzc2OCwtMC4wOTY1IGMgLTIuNTYzMTA0LC0wLjAxMjY4IC00LjYyNjU5OCwtMi4wNjM0NjMgLTQuNjI2NTk4LC00LjYyNjU5OCB2IC0xNy43NjY3NyBjIDAsLTIuNTYzMTM1IDEwLjk0MTQ1Miw1LjYwMjM4OSAxMy41MDQ1ODcsNS42MDIzODkiIGlkPSJwYXRoNTg2MC0zIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
				((player.getVariableValue('Vollbild') == true))
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
					me._vollbildaus.style.visibility=(Number(me._vollbildaus.style.opacity)>0||!me._vollbildaus.style.opacity)?'inherit':'hidden';
					me._vollbildaus.ggVisible=true;
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
		me._sensiordner.appendChild(me._vollbildaus);
		el=me._play=document.createElement('div');
		els=me._play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play__img.setAttribute('src',basePath + 'images/play.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play__imgo.setAttribute('src',basePath + 'images/play__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play";
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
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
			player.setVariableValue('KomMenu', true);
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility='hidden';
			me._sensiordner.ggVisible=false;
			me._statusleisteordner.style[domTransition]='none';
			me._statusleisteordner.style.visibility='hidden';
			me._statusleisteordner.ggVisible=false;
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
		el=me._linkoffnen=document.createElement('div');
		els=me._linkoffnen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBoZWlnaHQ9IjY0LjQxNDUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbWU9IkluZm8uc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB2aWV3Qm94PSIwIDAgNzQuMzc5NDggNjQuNDE0NTIyIiB2ZXJzaW9uPSIxLjEiIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiIHhtbG5zOnJkZj0iaH'+
			'R0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgd2lkdGg9Ijc0LjM3OTQ3OCIgaWQ9InN2ZzIiPgogPHNvZGlwb2RpOm5hbWVkdmlldyBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOmN5PSI1NS4xNDU4NDciIGlua3NjYXBl'+
			'OndpbmRvdy1oZWlnaHQ9IjEwMDEiIHNob3dncmlkPSJmYWxzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTp6b29tPSI1LjE4MTM1MzUiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiBncmlkdG9sZXJhbmNlPSIxMCIgaWQ9Im5hbWVkdmlldzkiIGlua3NjYXBlOndpbmRvdy14PSItOSIgaW5rc2NhcGU6d2luZG93LXk9IjEwNzEiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIgYm9yZGVyb3BhY2l0eT0iMSIgaW5rc2NhcGU6Y3g9Ii00LjM3Nz'+
			'kwNDQiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIi8+CiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOCI+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZGVmcyBpZD0iZGVmczYiPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRo'+
			'MTQzIj4KICAgPHJlY3QgaGVpZ2h0PSIyMDMuMTQ0MjciIHg9Ii03MTUuMTU2OCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjMxNTMxNSkiIHN0eWxlPSJzdHJva2Utd2lkdGg6MS43MTIxMjg2NCIgeT0iNjcuODA0OTkzIiB3aWR0aD0iMjAzLjE0NDI3IiBpZD0icmVjdDE0NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NTUyIj4KICAgPHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2'+
			'FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gLTEyOC43MzA4MywtOC4xNTMzOTA5IDIzLjczODk2LC0yMy43Mzg5NzIxIC0xOS4xMDY5OCwtOC40OTE5ODggLTE4LjUyNzk4LDcuMzMzOTkxIDEzLjg5NiwyNC44OTY5NjkxIiBpZD0icGF0aDQ1NTQiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDY5OSI+CiAgIDxyZWN0IHJ5PSIyLjg5NDk5NjQiIGhlaWdodD0iMjcuOTU1MDIxIiB4PSItMTEwLjk0MzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ry'+
			'b2tlLXdpZHRoOjAuMzA2NzM3MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB5PSItMjcuNDE2NTA0IiB3aWR0aD0iMjguMDk4Mzc5IiBpZD0icmVjdDQ3MDEiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDkzNyI+CiAgIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMzM0NjY5MzI7c3Ryb2tlLWxpbmVjYX'+
			'A6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAtMTA2LjYwNzI2LC0xMy44MDU1NDQgMy4zMTAyOSwyLjUwMjkwNSA5LjUyNzE4NywyLjUwMjkwNTUgMS45Mzc3MzQsMy43MTM5ODgxIC0xNS4xNzg5MTEsMi43NDUxMjE3IC05LjI4NDk3LC02LjI5NzYzMjEgeiIgaWQ9InBhdGg0OTM5Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MTMiPgogICA8Y2lyY2xlIHI9IjI0LjI4MzU3OSIgdHJhbnNm'+
			'b3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjEuMzM4NTI5OTQiIGN5PSItNTQuMTM0Nzg5IiBjeD0iLTg4LjU3OTQ3NSIgaWQ9ImNpcmNsZTQ5MTUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgeT0iMjUuNzE4MDY5IiByeD0iMi'+
			'40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDg5NiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q4OTQiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VP'+
			'blVzZSIgaWQ9ImNsaXBQYXRoNDg5NyI+CiAgIDxjaXJjbGUgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIGN4PSItNTIuNjQ4MjI4IiBpZD0iY2lyY2xlNDg5OSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODkzIj4KICAgPGNpcmNsZSByPSIxMC45Mjk5MDciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBzdHlsZT0iZmlsbDpub25lO3'+
			'N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgY3g9Ii01Mi42NDgyMjgiIGlkPSJjaXJjbGU0ODk1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODkiPgogICA8Y2lyY2xlIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiBjeD0iLTUyLjY0ODIyOCIgaWQ9ImNpcmNsZTQ4OTEiLz4KICA8L2NsaXBQ'+
			'YXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg4NSI+CiAgIDxjaXJjbGUgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIGN4PSItNTIuNjQ4MjI4IiBpZD0iY2lyY2xlNDg4NyIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0NzE5LTUiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgcn'+
			'k9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMS0yIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDkzMiI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgeT0iMjUuNzE4'+
			'MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q5MzAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS00Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEtMCIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxOTc5Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIHJ5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDE5NzciLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS43OTI4MTgxLC0zLjEwNTI1MTksMy4xMDUyNTE5LDEuNzkyODE4MSwtODM0LjU4NjYzLDU1Ni40MzE5OSkiIHN0eWxlPSJmaWxsOiMw'+
			'MGFhODg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuOTgzNzg5OTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiBkPSJtIDI1Ny45ODMwMywxMzcuNDU2MjUgLTQuOTAxOTQsOC40OTA0MSBoIC05LjgwMzg3IGwgLTQuOTAxOTQsLTguNDkwNDEgNC45MDE5NCwtOC40OTA0IGggOS44MDM4NyB6IiBpZD0icGF0aDIwMzgiLz4KIDx0ZXh0IHg9IjI4LjI3MDQ3NyIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym'+
			'9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1My4zMzMzMzIwNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6Q29uc3RhbnRpYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidDb25zdGFudGlhLCBCb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7'+
			'ZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSI1MC44NDAwNjUiIGlkPSJ0ZXh0ODQ4Ij4KICA8dHNwYW4geD0iMjguMjcwNDc3IiB5PSI1MC44NDAwNjUiIHNvZGlwb2RpOnJvbGU9ImxpbmUiIGlkPSJ0c3Bhbjg0NiI+aTwvdHNwYW4+CiA8L3RleHQ+Cjwvc3ZnPgo=';
		me._linkoffnen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkoffnen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiBoZWlnaHQ9IjY0LjQxNDUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHNvZGlwb2RpOmRvY25hbWU9IkluZm8yLnN2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgdmlld0JveD0iMCAwIDc0LjM3OTQ4IDY0LjQxNDUyMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIiB4bWxuczpyZGY9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHdpZHRoPSI3NC4zNzk0NzgiIGlkPSJzdmcyIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpjeT0iNTUuMTQ1ODQ3IiBpbmtzY2Fw'+
			'ZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIiBzaG93Z3JpZD0iZmFsc2UiIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgaW5rc2NhcGU6em9vbT0iNS4xODEzNTM1IiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgZ3JpZHRvbGVyYW5jZT0iMTAiIGlkPSJuYW1lZHZpZXc5IiBpbmtzY2FwZTp3aW5kb3cteD0iLTkiIGlua3NjYXBlOndpbmRvdy15PSIxMDcxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGJvcmRlcm9wYWNpdHk9IjEiIGlua3NjYXBlOmN4PSItNC4zNz'+
			'c5MDQ0IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIvPgogPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTgiPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGRlZnMgaWQ9ImRlZnM2Ij4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0'+
			'aDE0MyI+CiAgIDxyZWN0IGhlaWdodD0iMjAzLjE0NDI3IiB4PSItNzE1LjE1NjgiIHRyYW5zZm9ybT0icm90YXRlKC00My4zMTUzMTUpIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOjEuNzEyMTI4NjQiIHk9IjY3LjgwNDk5MyIgd2lkdGg9IjIwMy4xNDQyNyIgaWQ9InJlY3QxNDUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDU1MiI+CiAgIDxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZW'+
			'NhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIiBkPSJtIC0xMjguNzMwODMsLTguMTUzMzkwOSAyMy43Mzg5NiwtMjMuNzM4OTcyMSAtMTkuMTA2OTgsLTguNDkxOTg4IC0xOC41Mjc5OCw3LjMzMzk5MSAxMy44OTYsMjQuODk2OTY5MSIgaWQ9InBhdGg0NTU0Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ2OTkiPgogICA8cmVjdCByeT0iMi44OTQ5OTY0IiBoZWlnaHQ9IjI3Ljk1NTAyMSIgeD0iLTExMC45NDM5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0'+
			'cm9rZS13aWR0aDowLjMwNjczNzA3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgeT0iLTI3LjQxNjUwNCIgd2lkdGg9IjI4LjA5ODM3OSIgaWQ9InJlY3Q0NzAxIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ5MzciPgogICA8cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjMzNDY2OTMyO3N0cm9rZS1saW5lY2'+
			'FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Im0gLTEwNi42MDcyNiwtMTMuODA1NTQ0IDMuMzEwMjksMi41MDI5MDUgOS41MjcxODcsMi41MDI5MDU1IDEuOTM3NzM0LDMuNzEzOTg4MSAtMTUuMTc4OTExLDIuNzQ1MTIxNyAtOS4yODQ5NywtNi4yOTc2MzIxIHoiIGlkPSJwYXRoNDkzOSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0OTEzIj4KICAgPGNpcmNsZSByPSIyNC4yODM1NzkiIHRyYW5z'+
			'Zm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDoxLjMzODUyOTk0IiBjeT0iLTU0LjEzNDc4OSIgY3g9Ii04OC41Nzk0NzUiIGlkPSJjaXJjbGU0OTE1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTkiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHk9IjI1LjcxODA2OSIgcng9Ij'+
			'IuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0NDcyMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg4OTYiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHk9IjI1LjcxODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0ODk0Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNl'+
			'T25Vc2UiIGlkPSJjbGlwUGF0aDQ4OTciPgogICA8Y2lyY2xlIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiBjeD0iLTUyLjY0ODIyOCIgaWQ9ImNpcmNsZTQ4OTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDg5MyI+CiAgIDxjaXJjbGUgcj0iMTAuOTI5OTA3IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzguNDE5MTQxKSIgc3R5bGU9ImZpbGw6bm9uZT'+
			'tzdHJva2U6IzRkNGQ0ZDtzdHJva2Utd2lkdGg6MC42MDI0NjUwMyIgY3k9Ii0yOC4wMDEzODciIGN4PSItNTIuNjQ4MjI4IiBpZD0iY2lyY2xlNDg5NSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg0ODg5Ij4KICAgPGNpcmNsZSByPSIxMC45Mjk5MDciIHRyYW5zZm9ybT0icm90YXRlKC0zOC40MTkxNDEpIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGQ0ZDRkO3N0cm9rZS13aWR0aDowLjYwMjQ2NTAzIiBjeT0iLTI4LjAwMTM4NyIgY3g9Ii01Mi42NDgyMjgiIGlkPSJjaXJjbGU0ODkxIi8+CiAgPC9jbGlw'+
			'UGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ4ODUiPgogICA8Y2lyY2xlIHI9IjEwLjkyOTkwNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM4LjQxOTE0MSkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0ZDRkNGQ7c3Ryb2tlLXdpZHRoOjAuNjAyNDY1MDMiIGN5PSItMjguMDAxMzg3IiBjeD0iLTUyLjY0ODIyOCIgaWQ9ImNpcmNsZTQ4ODciLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoNDcxOS01Ij4KICAgPHJlY3QgaGVpZ2h0PSI0Mi45NDI0NDgiIH'+
			'J5PSIwLjQwNzQ0OTAxIiB4PSItMzQuNTQ2OTU5IiBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwIiB5PSIyNS43MTgwNjkiIHJ4PSIyLjQ3MDg1IiB3aWR0aD0iOC44Nzc5ODg4IiBpZD0icmVjdDQ3MjEtMiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGg5MzIiPgogICA8cmVjdCBoZWlnaHQ9IjQyLjk0MjQ0OCIgcnk9IjAuNDA3NDQ5MDEiIHg9Ii0zNC41NDY5NTkiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDAiIHk9IjI1Ljcx'+
			'ODA2OSIgcng9IjIuNDcwODUiIHdpZHRoPSI4Ljg3Nzk4ODgiIGlkPSJyZWN0OTMwIi8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDQ3MTktNCI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3Q0NzIxLTAiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBjbGlwUGF0aF'+
			'VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMTk3OSI+CiAgIDxyZWN0IGhlaWdodD0iNDIuOTQyNDQ4IiByeT0iMC40MDc0NDkwMSIgeD0iLTM0LjU0Njk1OSIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMCIgeT0iMjUuNzE4MDY5IiByeD0iMi40NzA4NSIgd2lkdGg9IjguODc3OTg4OCIgaWQ9InJlY3QxOTc3Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNzkyODE4MSwtMy4xMDUyNTE5LDMuMTA1MjUxOSwxLjc5MjgxODEsLTgzNC41ODY2Myw1NTYuNDMxOTkpIiBzdHlsZT0iZmlsbDoj'+
			'MDBmZmNjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDowLjk4Mzc4OTkyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgZD0ibSAyNTcuOTgzMDMsMTM3LjQ1NjI1IC00LjkwMTk0LDguNDkwNDEgaCAtOS44MDM4NyBsIC00LjkwMTk0LC04LjQ5MDQxIDQuOTAxOTQsLTguNDkwNCBoIDkuODAzODcgeiIgaWQ9InBhdGgyMDM4Ii8+CiA8dGV4dCB4PSIyOC4yNzA0NzciIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om'+
			'JvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NTMuMzMzMzMyMDZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OkNvbnN0YW50aWE7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQ29uc3RhbnRpYSwgQm9sZCc7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0'+
			'O2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iNTAuODQwMDY1IiBpZD0idGV4dDg0OCI+CiAgPHRzcGFuIHg9IjI4LjI3MDQ3NyIgeT0iNTAuODQwMDY1IiBzb2RpcG9kaTpyb2xlPSJsaW5lIiBpZD0idHNwYW44NDYiPmk8L3RzcGFuPgogPC90ZXh0Pgo8L3N2Zz4K';
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
		me._sensiordner.appendChild(me._linkoffnen);
		el=me._karte=document.createElement('div');
		els=me._karte__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._karte__img.setAttribute('src',basePath + 'images/karte.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._karte__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._karte__imgo.setAttribute('src',basePath + 'images/karte__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Karte";
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
				me._datenlink.style[domTransition]='opacity 500ms ease 0ms';
				if (me._datenlink.ggCurrentLogicStateAlpha == 0) {
					me._datenlink.style.visibility=me._datenlink.ggVisible?'inherit':'hidden';
					me._datenlink.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._datenlink.style.opacity == 0.0) { me._datenlink.style.visibility="hidden"; } }, 505);
					me._datenlink.style.opacity=0;
				}
			}
		}
		me._datenlink.onclick=function (e) {
			player.setVariableValue('SENSI', false);
			me._daten.style[domTransition]='none';
			me._daten.style.visibility=(Number(me._daten.style.opacity)>0||!me._daten.style.opacity)?'inherit':'hidden';
			me._daten.ggVisible=true;
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
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
		me._sensiordner.appendChild(me._datenlink);
		el=me._forschungsdaten_anzeigen=document.createElement('div');
		els=me._forschungsdaten_anzeigen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._forschungsdaten_anzeigen__img.setAttribute('src',basePath + 'images/forschungsdaten_anzeigen.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._forschungsdaten_anzeigen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._forschungsdaten_anzeigen__imgo.setAttribute('src',basePath + 'images/forschungsdaten_anzeigen__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Forschungsdaten anzeigen";
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
			me._statusleisteordner.style[domTransition]='none';
			me._statusleisteordner.style.visibility='hidden';
			me._statusleisteordner.ggVisible=false;
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
		el.ggDy=68;
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
		me._forschungssystemordner.appendChild(me._forschungsfeld);
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
		el.ggDx=2;
		el.ggDy=182;
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
			me._statusleisteordner.style[domTransition]='none';
			me._statusleisteordner.style.visibility=(Number(me._statusleisteordner.style.opacity)>0||!me._statusleisteordner.style.opacity)?'inherit':'hidden';
			me._statusleisteordner.ggVisible=true;
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
		el=me._forschung=document.createElement('div');
		el.ggId="Forschung";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 247px;';
		hs+='left : -146px;';
		hs+='position : absolute;';
		hs+='top : -56px;';
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
		me._forschung.appendChild(me._station0);
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
		me._forschung.appendChild(me._station1);
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
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
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
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
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
		me._forschung.appendChild(me._station2);
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
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.39999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
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
		me._forschungssystemordner.appendChild(me._forschung);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=1;
		el.ggDy=-198;
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
		me._forschungssystemordner.appendChild(me._svg_1);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station0oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station1oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station2oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station3oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station4oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station5oben);
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
		el.ggDx=-1;
		el.ggDy=-341;
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
		me._forschungssystemordner.appendChild(me._station6oben);
		el=me._fortschritt=document.createElement('div');
		els=me._fortschritt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Fortschritt";
		el.ggDx=3;
		el.ggDy=-196;
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
		me._forschungssystemordner.appendChild(me._fortschritt);
		el=me._forschungsfortschritt=document.createElement('div');
		els=me._forschungsfortschritt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Forschungsfortschritt";
		el.ggDx=0;
		el.ggDy=-308;
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
		els.innerHTML="Forschungsfortschritt";
		el.appendChild(els);
		me._forschungsfortschritt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._forschungsfortschritt.ggUpdatePosition=function (useTransition) {
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
		me._forschungssystemordner.appendChild(me._forschungsfortschritt);
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
		me._transektenzeigen2__img.setAttribute('src',basePath + 'images/transektenzeigen2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._transektenzeigen2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._transektenzeigen2__imgo.setAttribute('src',basePath + 'images/transektenzeigen2__o.svg');
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
				me._kommenu.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._kommenu.ggCurrentLogicStateAlpha == 0) {
					me._kommenu.style.visibility=me._kommenu.ggVisible?'inherit':'hidden';
					me._kommenu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._kommenu.style.opacity == 0.0) { me._kommenu.style.visibility="hidden"; } }, 1005);
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
		el.ggDx=0;
		el.ggDy=123;
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
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._kommenu.appendChild(me._auftragfeld);
		el=me._aktuellerauftrag=document.createElement('div');
		els=me._aktuellerauftrag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="AktuellerAuftrag";
		el.ggDx=2;
		el.ggDy=132;
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
		me._kommenu.appendChild(me._aktuellerauftrag);
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
		el.ggDy=239;
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
			me._sensiordner.style[domTransition]='none';
			me._sensiordner.style.visibility=(Number(me._sensiordner.style.opacity)>0||!me._sensiordner.style.opacity)?'inherit':'hidden';
			me._sensiordner.ggVisible=true;
			player.setVariableValue('SENSI', false);
			player.setVariableValue('KomMenu', false);
			me._statusleisteordner.style[domTransition]='none';
			me._statusleisteordner.style.visibility=(Number(me._statusleisteordner.style.opacity)>0||!me._statusleisteordner.style.opacity)?'inherit':'hidden';
			me._statusleisteordner.ggVisible=true;
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
		el=me._aktuellerauftraguberschrift=document.createElement('div');
		els=me._aktuellerauftraguberschrift__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="AktuellerAuftragUberschrift";
		el.ggDx=0;
		el.ggDy=26;
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
		me._kommenu.appendChild(me._aktuellerauftraguberschrift);
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
		el.ggDy=-160;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 218px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
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
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._kommenu.appendChild(me._nachrichtenfeld);
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
		el=me._nachrichtenordner1=document.createElement('div');
		el.ggId="NachrichtenOrdner1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 234px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
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
		el=me._nachrichboxt3=document.createElement('div');
		els=me._nachrichboxt3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichboxt3__img.setAttribute('src',basePath + 'images/nachrichboxt3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichBoxt3";
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
		me._nachrichboxt3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachrichboxt3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
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
		me._nachrichtenordner1.appendChild(me._nachrichboxt3);
		el=me._nachricht3=document.createElement('div');
		els=me._nachricht3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht3";
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
		me._nachricht3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachricht3.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachricht3);
		el=me._textknopf3=document.createElement('div');
		els=me._textknopf3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf3__img.setAttribute('src',basePath + 'images/textknopf3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf3__imgo.setAttribute('src',basePath + 'images/textknopf3__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf3";
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
		me._textknopf3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textknopf3.onmouseover=function (e) {
			me._textknopf3__img.style.visibility='hidden';
			me._textknopf3__imgo.style.visibility='inherit';
		}
		me._textknopf3.onmouseout=function (e) {
			me._textknopf3__img.style.visibility='inherit';
			me._textknopf3__imgo.style.visibility='hidden';
		}
		me._textknopf3.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf3);
		el=me._play3=document.createElement('div');
		els=me._play3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play3__img.setAttribute('src',basePath + 'images/play3.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play3__imgo.setAttribute('src',basePath + 'images/play3__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play3";
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
		me._play3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play3.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play3.onmouseover=function (e) {
			me._play3__img.style.visibility='hidden';
			me._play3__imgo.style.visibility='inherit';
		}
		me._play3.onmouseout=function (e) {
			me._play3__img.style.visibility='inherit';
			me._play3__imgo.style.visibility='hidden';
		}
		me._play3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nachrichtenordner1.appendChild(me._play3);
		el=me._nachrichtbox2=document.createElement('div');
		els=me._nachrichtbox2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox2__img.setAttribute('src',basePath + 'images/nachrichtbox2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox2";
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
		me._nachrichtbox2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachrichtbox2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
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
		me._nachrichtenordner1.appendChild(me._nachrichtbox2);
		el=me._nachricht2=document.createElement('div');
		els=me._nachricht2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht2";
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
		me._nachricht2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachricht2.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachricht2);
		el=me._textknopf2=document.createElement('div');
		els=me._textknopf2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf2__img.setAttribute('src',basePath + 'images/textknopf2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf2__imgo.setAttribute('src',basePath + 'images/textknopf2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf2";
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
		me._textknopf2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textknopf2.onmouseover=function (e) {
			me._textknopf2__img.style.visibility='hidden';
			me._textknopf2__imgo.style.visibility='inherit';
		}
		me._textknopf2.onmouseout=function (e) {
			me._textknopf2__img.style.visibility='inherit';
			me._textknopf2__imgo.style.visibility='hidden';
		}
		me._textknopf2.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf2);
		el=me._play2=document.createElement('div');
		els=me._play2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play2__img.setAttribute('src',basePath + 'images/play2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play2__imgo.setAttribute('src',basePath + 'images/play2__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play2";
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
		me._play2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play2.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play2.onmouseover=function (e) {
			me._play2__img.style.visibility='hidden';
			me._play2__imgo.style.visibility='inherit';
		}
		me._play2.onmouseout=function (e) {
			me._play2__img.style.visibility='inherit';
			me._play2__imgo.style.visibility='hidden';
		}
		me._play2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nachrichtenordner1.appendChild(me._play2);
		el=me._nachrichtbox1=document.createElement('div');
		els=me._nachrichtbox1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._nachrichtbox1__img.setAttribute('src',basePath + 'images/nachrichtbox1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NachrichtBox1";
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
		me._nachrichtbox1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachrichtbox1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
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
		me._nachrichtenordner1.appendChild(me._nachrichtbox1);
		el=me._nachricht1=document.createElement('div');
		els=me._nachricht1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Nachricht1";
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
		me._nachricht1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nachricht1.ggUpdatePosition=function (useTransition) {
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
		me._nachrichtenordner1.appendChild(me._nachricht1);
		el=me._textknopf1=document.createElement('div');
		els=me._textknopf1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._textknopf1__img.setAttribute('src',basePath + 'images/textknopf1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._textknopf1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._textknopf1__imgo.setAttribute('src',basePath + 'images/textknopf1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TextKnopf1";
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
		me._textknopf1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textknopf1.onmouseover=function (e) {
			me._textknopf1__img.style.visibility='hidden';
			me._textknopf1__imgo.style.visibility='inherit';
		}
		me._textknopf1.onmouseout=function (e) {
			me._textknopf1__img.style.visibility='inherit';
			me._textknopf1__imgo.style.visibility='hidden';
		}
		me._textknopf1.ggUpdatePosition=function (useTransition) {
		}
		me._nachrichtenordner1.appendChild(me._textknopf1);
		el=me._play1=document.createElement('div');
		els=me._play1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._play1__img.setAttribute('src',basePath + 'images/play1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._play1__imgo.setAttribute('src',basePath + 'images/play1__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Play1";
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
		me._play1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play1.onclick=function (e) {
				player.playPauseSound("SehrGut","1");
			player.setVariableValue('SENSI', false);
			player.setVariableValue('SENSI', false);
			me._sensimenu2.style[domTransition]='none';
			me._sensimenu2.style.visibility='hidden';
			me._sensimenu2.ggVisible=false;
		}
		me._play1.onmouseover=function (e) {
			me._play1__img.style.visibility='hidden';
			me._play1__imgo.style.visibility='inherit';
		}
		me._play1.onmouseout=function (e) {
			me._play1__img.style.visibility='inherit';
			me._play1__imgo.style.visibility='hidden';
		}
		me._play1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nachrichtenordner1.appendChild(me._play1);
		me._kommenu.appendChild(me._nachrichtenordner1);
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
	me._station1.logicBlock_alpha();
	me._station1up1.logicBlock_alpha();
	me._station1up2.logicBlock_alpha();
	me._station1q.logicBlock_alpha();
	me._st0.logicBlock_alpha();
	me._st1.logicBlock_alpha();
	me._vollbild.logicBlock_alpha();
	me._vollbildaus.logicBlock_visible();
	me._vollbildaus.logicBlock_alpha();
	me._play.logicBlock_alpha();
	me._linkoffnen.logicBlock_alpha();
	me._karte.logicBlock_alpha();
	me._datenlink.logicBlock_alpha();
	me._forschungsdaten_anzeigen.logicBlock_alpha();
	me._kommenu.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._station1.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._st0.logicBlock_alpha();me._st1.logicBlock_alpha();me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_visible();me._vollbildaus.logicBlock_alpha();me._play.logicBlock_alpha();me._linkoffnen.logicBlock_alpha();me._karte.logicBlock_alpha();me._datenlink.logicBlock_alpha();me._forschungsdaten_anzeigen.logicBlock_alpha();me._station1.logicBlock_alpha();me._station1up1.logicBlock_alpha();me._station1up2.logicBlock_alpha();me._station1q.logicBlock_alpha();me._kommenu.logicBlock_alpha(); });
	player.addListener('varchanged_KomMenu', function(args) { me._kommenu.logicBlock_alpha(); });
	player.addListener('varchanged_SENSI', function(args) { me._vollbild.logicBlock_alpha();me._vollbildaus.logicBlock_alpha();me._play.logicBlock_alpha();me._linkoffnen.logicBlock_alpha();me._karte.logicBlock_alpha();me._datenlink.logicBlock_alpha();me._forschungsdaten_anzeigen.logicBlock_alpha(); });
	player.addListener('varchanged_Vollbild', function(args) { me._vollbildaus.logicBlock_visible(); });
	player.addListener('varchanged_Station', function(args) { me._st0.logicBlock_alpha();me._st1.logicBlock_alpha(); });
	me.skinTimerEvent();
};