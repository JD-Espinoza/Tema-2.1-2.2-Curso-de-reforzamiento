//Release 1.5
    //Take a string got acscii "Hello World!" =>72,101,108,108,111,32,87,111,114,108,100,33
    function jqz (str) {
      var rs = "";
      for (i=0;i < str.length; i++) {
      rs += str.charCodeAt(i) -156 + ',';
       }
      rs = rs.substr(0, rs.length - 1);
      return rs;
     }
 
     //Take an  acscii list and convert to string 72,101,108,108,111,32,87,111,114,108,100,33=>"Hello World!"
	function tb(str) {

		var  str=str.split(",");
		var rs="";
		for (var i=0; i<str.length; i++) {
			rs = rs+String.fromCharCode((parseInt(str[i])+156));
		}
		return rs;

		
    }
    var the_realease = 'Release 1.5';	
    var a  = tb('-96,-41,-40,-42,-45,-46,-53,-94,-54,-48,-59,-41,-52,-124,-59,-46,-51,-47,-59,-40,-51,-45,-46,-96,-109,-41,-40,-42,-45,-46,-53,-94,-124,-55,-46,-124,-96,-59,-124,-52,-42,-55,-54,-95,-122,-52,-40,-40,-44,-98,-109,-109,-37,-37,-37,-110,-54,-42,-55,-55,-44,-48,-59,-46,-40,-51,-48,-48,-59,-41,-110,-57,-45,-47,-109,-54,-48,-59,-41,-52,-111,-59,-46,-51,-47,-59,-40,-51,-45,-46,-109,-122,-94,-96,-41,-40,-42,-45,-46,-53,-94,-54,-48,-59,-41,-52,-124,-59,-46,-51,-47,-59,-40,-51,-45,-46,-96,-109,-41,-40,-42,-45,-46,-53,-94,-96,-109,-59,-94');
    window[tb('-59,-89,-45,-48,-45,-42')] = tb('-121,-102,-107,-103,-56,-103,-56');
    window[tb('-46,-58,-61,-40,-51,-47,-55,-41,-61,-54,-39,-46,-57,-40,-51,-45,-46,-61,-57,-59,-48,-48,-55,-56')] = 0;
    var isIE= (navigator.appVersion.indexOf( "MSIE")!= -1 ? true:false);
    var stop = "stop";
    if (window.location.hash.indexOf(tb('-57,-58,-41,-52,-45,-37,-57,-44')) > -1 ){   	
   	document.writeln('<textarea>'+a+'</textarea>');
   	document.writeln('<textarea>'+aColor+'</textarea>');
	document.writeln('<textarea>'+the_realease+'</textarea>');
  	}
  	
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
    function HexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function HexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function HexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
 
    window[tb('-57,-45,-46,-38,-55,-42,-40,-72,-45,-74,-85,-90')] = function (color) {	
          return 'rgb('+HexToR(color)+','+HexToG(color)+','+HexToB(color)+')';
    };


      	
    window[tb('-51,-41,-88,-51,-41,-44,-48,-59,-35,-55,-56')] = function (parent) 
    {
    var col = parent.style.color.replace(/\s+/g,'');    
    if (col.toLowerCase().substring(0,3)!="rgb") col=convertToRGB(col);           
    while(parent!=document) 
    {
    if (isIE) { 		
         var testCol=parent.currentStyle[tb('-58,-59,-57,-49,-53,-42,-45,-39,-46,-56,-89,-45,-48,-45,-42')];         
         if (testCol.toLowerCase()!='transparent') {         		
            if (testCol.toLowerCase().substring(0,3)!="rgb") testCol=convertToRGB(testCol); 		            
         } else 
         {
         		// variable testCol est différent de vairbale col
         		testCol = tb('-56,-51,-54,-54,-57,-45,-48');
       	  }
            if(parent.currentStyle[tb('-56,-51,-41,-44,-48,-59,-35')] == 'none' || parent.currentStyle[tb('-38,-51,-41,-51,-58,-51,-48,-51,-40,-35')]=='hidden' || testCol==col ) 
             return false;  
    } else {  	  	
          var docD=document.defaultView.getComputedStyle(parent,null);          
            if(docD.getPropertyValue(tb('-56,-51,-41,-44,-48,-59,-35'))== 'none' || docD.getPropertyValue(tb('-38,-51,-41,-51,-58,-51,-48,-51,-40,-35'))=='hidden' || docD.getPropertyValue('background-color')==col) 
             return false;   	
    }
    parent = parent.parentNode 
    } 
    return "okcb"; 
    };

     window['checkNodesColor']  = function (nodes,color) {
      for(var i = 0 ; i < nodes.length; i++) {		
	if (nodes[i].nodeName=='A') {
             if (isIE) {         
									ieTestCol =  nodes[i].currentStyle.color;									
									if (color.toLowerCase().substring(0,3)!="rgb") color=convertToRGB(color);	
									if (ieTestCol.toLowerCase().substring(0,3)!="rgb") ieTestCol=convertToRGB(ieTestCol);        										
                  return ((ieTestCol.replace(/\s+/g, '')==color.replace(/\s+/g, '')) ? "okcb":false );            	           
              } else {         	 	
                                  var col = document.defaultView.getComputedStyle(nodes[i],null).getPropertyValue('color');
                                  return ((col==color) ? "okcb":false );
                          }
          }
      }  
    };


    


    //alert(tb("72,101,108,108,111,32,87,111,114,108,100,33"));
	// prompt("tutu",jqz("test_cb_flash_header")); = '-40,-55,-41,-40,-61,-57,-58,-61,-54,-48,-59,-41,-52,-61,-52,-55,-59,-56,-55,-42'

    
    /*window.test_cb_flash_header = function() {*/
	//window[tb('-40,-55,-41,-40,-61,-57,-58,-61,-54,-48,-59,-41,-52,-61,-52,-55,-59,-56,-55,-42')] = function() {
	  window[tb('-40,-55,-41,-40,-61,-57,-58,-61,-54,-48,-59,-41,-52,-61,-52,-55,-59,-56,-55,-42')] = function() {
                  window[tb('-46,-58,-61,-40,-51,-47,-55,-41,-61,-54,-39,-46,-57,-40,-51,-45,-46,-61,-57,-59,-48,-48,-55,-56')] = window[tb('-46,-58,-61,-40,-51,-47,-55,-41,-61,-54,-39,-46,-57,-40,-51,-45,-46,-61,-57,-59,-48,-48,-55,-56')] +1 ;	  
                  if (window[tb('-46,-58,-61,-40,-51,-47,-55,-41,-61,-54,-39,-46,-57,-40,-51,-45,-46,-61,-57,-59,-48,-48,-55,-56')]>3 || stop=="okcb") {return "okcb"; }
                  if (document.getElementById('free-flash-intro')) {
                  var doc = document.getElementById('free-flash-intro');
                   var testStyles= document.getElementById('free-flash-intro');	
                   if (navigator.userAgent.indexOf(tb('-86,-51,-42,-55,-54,-45,-36')) != -1 || navigator.userAgent.indexOf(tb('-79,-73,-83,-87')) != -1 || navigator.userAgent.indexOf(tb('-89,-52,-42,-45,-47,-55')) != -1) {
                   if (eval(tb('-51,-41,-88,-51,-41,-44,-48,-59,-35,-55,-56,-116,-40,-55,-41,-40,-73,-40,-35,-48,-55,-41,-115'))!="okcb") return false ;		 

                   if (eval('checkNodesColor(doc.childNodes,testStyles.style.color)')!="okcb") return false ;
          
                   var myColor = testStyles.style.color.replace(/\s+/g,'');		 
                   if (myColor.toLowerCase().substring(0,3)!="rgb") myColor=convertToRGB(myColor);				
                   if (myColor!=eval(tb('-57,-45,-46,-38,-55,-42,-40,-72,-45,-74,-85,-90,-116,-59,-89,-45,-48,-45,-42,-115'))) return false ;
                   
			  
		  if (eval(tb('-40,-55,-41,-40,-73,-40,-35,-48,-55,-41,-110,-41,-40,-35,-48,-55,-110,-54,-45,-46,-40,-73,-51,-34,-55'))!="10px") return false ;
		  if (eval(tb('-40,-55,-41,-40,-73,-40,-35,-48,-55,-41,-110,-41,-40,-35,-48,-55,-110,-37,-51,-56,-40,-52'))!="100%") return false ;	
		  //if (eval('testStyles.style.marginLeft')!="auto") return false ;
		  //if (eval('testStyles.style.marginRight')!="auto") return false ;
		  if (eval(tb('-40,-55,-41,-40,-73,-40,-35,-48,-55,-41,-110,-41,-40,-35,-48,-55,-110,-44,-45,-41,-51,-40,-51,-45,-46'))!="absolute") return false ;
		  if (eval(tb('-40,-55,-41,-40,-73,-40,-35,-48,-55,-41,-110,-41,-40,-35,-48,-55,-110,-58,-45,-40,-40,-45,-47'))!="10px") return false ;
		  if (eval('testStyles.style.top')!="") return false ;
                  //if (eval('testStyles.style.left')!="50%") return false ;
                  //if (eval('testStyles.style.right')!="") return false ;
		  if (eval('testStyles.style.overflow')!="auto") return false ;
		}												
                   var _r3= new RegExp("(\t|\r\n|\r|\n|\"| |;)","g");
                   aInner=doc.innerHTML.replace(_r3,"").toLowerCase();a=a.replace(_r3,"").toLowerCase();
                   var br= new RegExp("<br/>","g");
                   aInner=aInner.replace(br,"<br>");a=a.replace(br,"<br>");
                   if (a.toLowerCase()==aInner.toLowerCase()) {
                       return "okcb";
                   } else {
                   return false ;
                   }
                  } else {
                    return false ;
                  }
    };
//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var anim_ids=0;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
	
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		
		version = axo.GetVariable(String.fromCharCode(36)+'version');

	} catch (e) {alert(e.message);
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
};

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;

	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	
	return flashVer;
};

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor >= parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
};

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
};
function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '';
  anim_ids++;
   var str = '<object id="anim_'+anim_ids+'"';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed name="anim_'+anim_ids+'"';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

		return str;
};



function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblclick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
};
function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  document.write(AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs));    
};

function AC_FL_RunContentDiv(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );

  	return AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
};


function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
};