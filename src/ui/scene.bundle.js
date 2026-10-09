(()=>{var yg=0,eo=1,Mg=2;var Cs=1,Sr=2,Pi=3,un=0,Re=1,Ve=2,dn=0,Di=1,no=2,io=3,so=4,Sg=5;var ii=100,bg=101,Eg=102,wg=103,Tg=104,Rg=200,Pg=201,Dg=202,Lg=203,ro=204,ao=205,Ng=206,Ug=207,Fg=208,Og=209,Bg=210,zg=211,Gg=212,Vg=213,kg=214,Ys=0,Js=1,js=2,Mi=3,Ks=4,qs=5,Qs=6,$s=7,br=0,Hg=1,Wg=2,tn=0,oo=1,go=2,Ao=3,Co=4,Io=5,lo=6,co=7;var ho=300,Xn=301,si=302,Er=303,wr=304,Is=306,tr=1e3,on=1001,er=1002,ce=1003,Xg=1004;var ls=1005;var _e=1006,Tr=1007;var Zn=1008;var Ue=1009,uo=1010,fo=1011,Li=1012,Rr=1013,en=1014,Xe=1015,nn=1016,Pr=1017,Dr=1018,Ni=1020,po=35902,mo=35899,xo=1021,vo=1022,Ze=1023,An=1026,Yn=1027,Lr=1028,Nr=1029,Jn=1030,Ur=1031;var Fr=1033,cs=33776,hs=33777,us=33778,ds=33779,Or=35840,Br=35841,zr=35842,Gr=35843,Vr=36196,kr=37492,Hr=37496,Wr=37488,Xr=37489,fs=37490,Zr=37491,Yr=37808,Jr=37809,jr=37810,Kr=37811,qr=37812,Qr=37813,$r=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,oa=36492,ga=36494,Aa=36495,Ca=36283,Ia=36284,ps=36285,la=36286;var Zi=2300,nr=2301,Xs=2302,Ja=2303,ja=2400,Ka=2401,qa=2402;var Zg=3200;var ca=0,Yg=1,wn="",ve="srgb",Yi="srgb-linear",Ji="linear",jt="srgb";var Zs=7680;var Jg=519,jg=512,Kg=513,qg=514,ha=515,Qg=516,$g=517,ua=518,tA=519,eA=35044;var _o="300 es",$e=2e3,Si=2001;function tC(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eC(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nA(){let i=ji("canvas");return i.style.display="block",i}var tg={},bi=null;function yo(...i){let t="THREE."+i.shift();bi?bi("log",t,...i):console.log(t,...i)}function iA(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function wt(...i){i=iA(i);let t="THREE."+i.shift();if(bi)bi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Tt(...i){i=iA(i);let t="THREE."+i.shift();if(bi)bi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ti(...i){let t=i.join(" ");t in tg||(tg[t]=!0,wt(...i))}function sA(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var rA={[Ys]:Js,[js]:Qs,[Ks]:$s,[Mi]:qs,[Js]:Ys,[Qs]:js,[$s]:Ks,[qs]:Mi},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sa=Math.PI/180,ir=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function nC(i,t){return(i%t+t)%t}function ba(i,t,e){return(1-e)*i+e*t}function zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let g=n[s+0],A=n[s+1],l=n[s+2],h=n[s+3],C=r[a+0],u=r[a+1],m=r[a+2],y=r[a+3];if(h!==y||g!==C||A!==u||l!==m){let d=g*C+A*u+l*m+h*y;d<0&&(C=-C,u=-u,m=-m,y=-y,d=-d);let I=1-o;if(d<.9995){let M=Math.acos(d),w=Math.sin(M);I=Math.sin(I*M)/w,o=Math.sin(o*M)/w,g=g*I+C*o,A=A*I+u*o,l=l*I+m*o,h=h*I+y*o}else{g=g*I+C*o,A=A*I+u*o,l=l*I+m*o,h=h*I+y*o;let M=1/Math.sqrt(g*g+A*A+l*l+h*h);g*=M,A*=M,l*=M,h*=M}}t[e]=g,t[e+1]=A,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],g=n[s+1],A=n[s+2],l=n[s+3],h=r[a],C=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+l*h+g*u-A*C,t[e+1]=g*m+l*C+A*h-o*u,t[e+2]=A*m+l*u+o*C-g*h,t[e+3]=l*m-o*h-g*C-A*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,g=Math.sin,A=o(n/2),l=o(s/2),h=o(r/2),C=g(n/2),u=g(s/2),m=g(r/2);switch(a){case"XYZ":this._x=C*l*h+A*u*m,this._y=A*u*h-C*l*m,this._z=A*l*m+C*u*h,this._w=A*l*h-C*u*m;break;case"YXZ":this._x=C*l*h+A*u*m,this._y=A*u*h-C*l*m,this._z=A*l*m-C*u*h,this._w=A*l*h+C*u*m;break;case"ZXY":this._x=C*l*h-A*u*m,this._y=A*u*h+C*l*m,this._z=A*l*m+C*u*h,this._w=A*l*h-C*u*m;break;case"ZYX":this._x=C*l*h-A*u*m,this._y=A*u*h+C*l*m,this._z=A*l*m-C*u*h,this._w=A*l*h+C*u*m;break;case"YZX":this._x=C*l*h+A*u*m,this._y=A*u*h+C*l*m,this._z=A*l*m-C*u*h,this._w=A*l*h-C*u*m;break;case"XZY":this._x=C*l*h-A*u*m,this._y=A*u*h-C*l*m,this._z=A*l*m+C*u*h,this._w=A*l*h+C*u*m;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],g=e[9],A=e[2],l=e[6],h=e[10],C=n+o+h;if(C>0){let u=.5/Math.sqrt(C+1);this._w=.25/u,this._x=(l-g)*u,this._y=(r-A)*u,this._z=(a-s)*u}else if(n>o&&n>h){let u=2*Math.sqrt(1+n-o-h);this._w=(l-g)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+A)/u}else if(o>h){let u=2*Math.sqrt(1+o-n-h);this._w=(r-A)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(g+l)/u}else{let u=2*Math.sqrt(1+h-n-o);this._w=(a-s)/u,this._x=(r+A)/u,this._y=(g+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,g=e._y,A=e._z,l=e._w;return this._x=n*l+a*o+s*A-r*g,this._y=s*l+a*g+r*o-n*A,this._z=r*l+a*A+n*g-s*o,this._w=a*l-n*o-s*g-r*A,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let g=1-e;if(o<.9995){let A=Math.acos(o),l=Math.sin(A);g=Math.sin(g*A)/l,e=Math.sin(e*A)/l,this._x=this._x*g+n*e,this._y=this._y*g+s*e,this._z=this._z*g+r*e,this._w=this._w*g+a*e,this._onChangeCallback()}else this._x=this._x*g+n*e,this._y=this._y*g+s*e,this._z=this._z*g+r*e,this._w=this._w*g+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,g=t.w,A=2*(a*s-o*n),l=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+g*A+a*h-o*l,this.y=n+g*l+o*A-r*h,this.z=s+g*h+r*l-a*A,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,g=e.z;return this.x=s*g-r*o,this.y=r*a-n*g,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new G,eg=new In,Rt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,g,A){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,g,A)}set(t,e,n,s,r,a,o,g,A){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=g,l[6]=n,l[7]=a,l[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],g=n[6],A=n[1],l=n[4],h=n[7],C=n[2],u=n[5],m=n[8],y=s[0],d=s[3],I=s[6],M=s[1],w=s[4],x=s[7],v=s[2],_=s[5],E=s[8];return r[0]=a*y+o*M+g*v,r[3]=a*d+o*w+g*_,r[6]=a*I+o*x+g*E,r[1]=A*y+l*M+h*v,r[4]=A*d+l*w+h*_,r[7]=A*I+l*x+h*E,r[2]=C*y+u*M+m*v,r[5]=C*d+u*w+m*_,r[8]=C*I+u*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],g=t[6],A=t[7],l=t[8];return e*a*l-e*o*A-n*r*l+n*o*g+s*r*A-s*a*g}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],g=t[6],A=t[7],l=t[8],h=l*a-o*A,C=o*g-l*r,u=A*r-a*g,m=e*h+n*C+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=h*y,t[1]=(s*A-l*n)*y,t[2]=(o*n-s*a)*y,t[3]=C*y,t[4]=(l*e-s*g)*y,t[5]=(s*r-o*e)*y,t[6]=u*y,t[7]=(n*g-A*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let g=Math.cos(r),A=Math.sin(r);return this.set(n*g,n*A,-n*(g*a+A*o)+a+t,-s*A,s*g,-s*(-A*a+g*o)+o+e,0,0,1),this}scale(t,e){return ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wa.makeScale(t,e)),this}rotate(t){return ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Rt,ng=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iC(){let i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Ji:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:t,whitePoint:n,transfer:Ji,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),i}var Gt=iC();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=ji("canvas")),Ai.width=t.width,Ai.height=t.height;let s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ji("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sC=0,Ei=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sC++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var rC=0,Ra=new G,Te=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=on,s=on,r=_e,a=Zn,o=Ze,g=Ue,A=i.DEFAULT_ANISOTROPY,l=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=ms(),this.name="",this.source=new Ei(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=A,this.format=o,this.internalFormat=null,this.type=g,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=ho;Te.DEFAULT_ANISOTROPY=1;var oe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,g=t.elements,A=g[0],l=g[4],h=g[8],C=g[1],u=g[5],m=g[9],y=g[2],d=g[6],I=g[10];if(Math.abs(l-C)<.01&&Math.abs(h-y)<.01&&Math.abs(m-d)<.01){if(Math.abs(l+C)<.1&&Math.abs(h+y)<.1&&Math.abs(m+d)<.1&&Math.abs(A+u+I-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(A+1)/2,x=(u+1)/2,v=(I+1)/2,_=(l+C)/4,E=(h+y)/4,f=(m+d)/4;return w>x&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=_/n,r=E/n):x>v?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=_/s,r=f/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=f/r),this.set(n,s,r,e),this}let M=Math.sqrt((d-m)*(d-m)+(h-y)*(h-y)+(C-l)*(C-l));return Math.abs(M)<.001&&(M=1),this.x=(d-m)/M,this.y=(h-y)/M,this.z=(C-l)/M,this.w=Math.acos((A+u+I-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rr=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Te(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ei(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ki=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ce,this.minFilter=ce,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ar=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ce,this.minFilter=ce,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ie=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,g,A,l,h,C,u,m,y,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,g,A,l,h,C,u,m,y,d)}set(t,e,n,s,r,a,o,g,A,l,h,C,u,m,y,d){let I=this.elements;return I[0]=t,I[4]=e,I[8]=n,I[12]=s,I[1]=r,I[5]=a,I[9]=o,I[13]=g,I[2]=A,I[6]=l,I[10]=h,I[14]=C,I[3]=u,I[7]=m,I[11]=y,I[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),g=Math.cos(s),A=Math.sin(s),l=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let C=a*l,u=a*h,m=o*l,y=o*h;e[0]=g*l,e[4]=-g*h,e[8]=A,e[1]=u+m*A,e[5]=C-y*A,e[9]=-o*g,e[2]=y-C*A,e[6]=m+u*A,e[10]=a*g}else if(t.order==="YXZ"){let C=g*l,u=g*h,m=A*l,y=A*h;e[0]=C+y*o,e[4]=m*o-u,e[8]=a*A,e[1]=a*h,e[5]=a*l,e[9]=-o,e[2]=u*o-m,e[6]=y+C*o,e[10]=a*g}else if(t.order==="ZXY"){let C=g*l,u=g*h,m=A*l,y=A*h;e[0]=C-y*o,e[4]=-a*h,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*l,e[9]=y-C*o,e[2]=-a*A,e[6]=o,e[10]=a*g}else if(t.order==="ZYX"){let C=a*l,u=a*h,m=o*l,y=o*h;e[0]=g*l,e[4]=m*A-u,e[8]=C*A+y,e[1]=g*h,e[5]=y*A+C,e[9]=u*A-m,e[2]=-A,e[6]=o*g,e[10]=a*g}else if(t.order==="YZX"){let C=a*g,u=a*A,m=o*g,y=o*A;e[0]=g*l,e[4]=y-C*h,e[8]=m*h+u,e[1]=h,e[5]=a*l,e[9]=-o*l,e[2]=-A*l,e[6]=u*h+m,e[10]=C-y*h}else if(t.order==="XZY"){let C=a*g,u=a*A,m=o*g,y=o*A;e[0]=g*l,e[4]=-h,e[8]=A*l,e[1]=C*h+y,e[5]=a*l,e[9]=u*h-m,e[2]=m*h-u,e[6]=o*l,e[10]=y*h+C}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aC,t,oC)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Dn.crossVectors(n,Fe),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Dn.crossVectors(n,Fe)),Dn.normalize(),Ss.crossVectors(Fe,Dn),s[0]=Dn.x,s[4]=Ss.x,s[8]=Fe.x,s[1]=Dn.y,s[5]=Ss.y,s[9]=Fe.y,s[2]=Dn.z,s[6]=Ss.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],g=n[8],A=n[12],l=n[1],h=n[5],C=n[9],u=n[13],m=n[2],y=n[6],d=n[10],I=n[14],M=n[3],w=n[7],x=n[11],v=n[15],_=s[0],E=s[4],f=s[8],b=s[12],D=s[1],U=s[5],z=s[9],H=s[13],L=s[2],V=s[6],j=s[10],J=s[14],nt=s[3],X=s[7],$=s[11],et=s[15];return r[0]=a*_+o*D+g*L+A*nt,r[4]=a*E+o*U+g*V+A*X,r[8]=a*f+o*z+g*j+A*$,r[12]=a*b+o*H+g*J+A*et,r[1]=l*_+h*D+C*L+u*nt,r[5]=l*E+h*U+C*V+u*X,r[9]=l*f+h*z+C*j+u*$,r[13]=l*b+h*H+C*J+u*et,r[2]=m*_+y*D+d*L+I*nt,r[6]=m*E+y*U+d*V+I*X,r[10]=m*f+y*z+d*j+I*$,r[14]=m*b+y*H+d*J+I*et,r[3]=M*_+w*D+x*L+v*nt,r[7]=M*E+w*U+x*V+v*X,r[11]=M*f+w*z+x*j+v*$,r[15]=M*b+w*H+x*J+v*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],g=t[9],A=t[13],l=t[2],h=t[6],C=t[10],u=t[14],m=t[3],y=t[7],d=t[11],I=t[15],M=g*u-A*C,w=o*u-A*h,x=o*C-g*h,v=a*u-A*l,_=a*C-g*l,E=a*h-o*l;return e*(y*M-d*w+I*x)-n*(m*M-d*v+I*_)+s*(m*w-y*v+I*E)-r*(m*x-y*_+d*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],g=t[2],A=t[6],l=t[10];return e*(a*l-o*A)-n*(r*l-o*g)+s*(r*A-a*g)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],g=t[6],A=t[7],l=t[8],h=t[9],C=t[10],u=t[11],m=t[12],y=t[13],d=t[14],I=t[15],M=e*o-n*a,w=e*g-s*a,x=e*A-r*a,v=n*g-s*o,_=n*A-r*o,E=s*A-r*g,f=l*y-h*m,b=l*d-C*m,D=l*I-u*m,U=h*d-C*y,z=h*I-u*y,H=C*I-u*d,L=M*H-w*z+x*U+v*D-_*b+E*f;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(o*H-g*z+A*U)*V,t[1]=(s*z-n*H-r*U)*V,t[2]=(y*E-d*_+I*v)*V,t[3]=(C*_-h*E-u*v)*V,t[4]=(g*D-a*H-A*b)*V,t[5]=(e*H-s*D+r*b)*V,t[6]=(d*x-m*E-I*w)*V,t[7]=(l*E-C*x+u*w)*V,t[8]=(a*z-o*D+A*f)*V,t[9]=(n*D-e*z-r*f)*V,t[10]=(m*_-y*x+I*M)*V,t[11]=(h*x-l*_-u*M)*V,t[12]=(o*b-a*U-g*f)*V,t[13]=(e*U-n*b+s*f)*V,t[14]=(y*w-m*v-d*M)*V,t[15]=(l*v-h*w+C*M)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,g=t.z,A=r*a,l=r*o;return this.set(A*a+n,A*o-s*g,A*g+s*o,0,A*o+s*g,l*o+n,l*g-s*a,0,A*g-s*o,l*g+s*a,r*g*g+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,g=e._w,A=r+r,l=a+a,h=o+o,C=r*A,u=r*l,m=r*h,y=a*l,d=a*h,I=o*h,M=g*A,w=g*l,x=g*h,v=n.x,_=n.y,E=n.z;return s[0]=(1-(y+I))*v,s[1]=(u+x)*v,s[2]=(m-w)*v,s[3]=0,s[4]=(u-x)*_,s[5]=(1-(C+I))*_,s[6]=(d+M)*_,s[7]=0,s[8]=(m+w)*E,s[9]=(d-M)*E,s[10]=(1-(C+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),g=Ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),je.copy(this);let A=1/a,l=1/o,h=1/g;return je.elements[0]*=A,je.elements[1]*=A,je.elements[2]*=A,je.elements[4]*=l,je.elements[5]*=l,je.elements[6]*=l,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=a,n.y=o,n.z=g,this}makePerspective(t,e,n,s,r,a,o=$e,g=!1){let A=this.elements,l=2*r/(e-t),h=2*r/(n-s),C=(e+t)/(e-t),u=(n+s)/(n-s),m,y;if(g)m=r/(a-r),y=a*r/(a-r);else if(o===$e)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Si)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return A[0]=l,A[4]=0,A[8]=C,A[12]=0,A[1]=0,A[5]=h,A[9]=u,A[13]=0,A[2]=0,A[6]=0,A[10]=m,A[14]=y,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,g=!1){let A=this.elements,l=2/(e-t),h=2/(n-s),C=-(e+t)/(e-t),u=-(n+s)/(n-s),m,y;if(g)m=1/(a-r),y=a/(a-r);else if(o===$e)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Si)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return A[0]=l,A[4]=0,A[8]=0,A[12]=C,A[1]=0,A[5]=h,A[9]=0,A[13]=u,A[2]=0,A[6]=0,A[10]=m,A[14]=y,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new G,je=new ie,aC=new G(0,0,0),oC=new G(1,1,1),Dn=new G,Ss=new G,Fe=new G,sg=new ie,rg=new In,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],g=s[1],A=s[5],l=s[9],h=s[2],C=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(C,A),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(g,A)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(C,-1,1)),Math.abs(C)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-a,A)):(this._y=0,this._z=Math.atan2(g,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(C,u),this._z=Math.atan2(g,r)):(this._x=0,this._z=Math.atan2(-a,A));break;case"YZX":this._z=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-l,A),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(C,A),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rg.setFromEuler(this),this.setFromQuaternion(rg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gC=0,ag=new G,Ii=new In,mn=new ie,bs=new G,Gi=new G,AC=new G,CC=new In,og=new G(1,0,0),gg=new G(0,1,0),Ag=new G(0,0,1),Cg={type:"added"},IC={type:"removed"},li={type:"childadded",child:null},Pa={type:"childremoved",child:null},xe=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Sn,n=new In,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Rt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(og,t)}rotateY(t){return this.rotateOnAxis(gg,t)}rotateZ(t){return this.rotateOnAxis(Ag,t)}translateOnAxis(t,e){return ag.copy(t).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(og,t)}translateY(t){return this.translateOnAxis(gg,t)}translateZ(t){return this.translateOnAxis(Ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Gi,bs,this.up):mn.lookAt(bs,Gi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(mn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Tt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cg),li.child=t,this.dispatchEvent(li),li.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(IC),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cg),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,AC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,CC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,g){return o[g.uuid]===void 0&&(o[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let g=o.shapes;if(Array.isArray(g))for(let A=0,l=g.length;A<l;A++){let h=g[A];r(t.shapes,h)}else r(t.shapes,g)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let g=0,A=this.material.length;g<A;g++)o.push(r(t.materials,this.material[g]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let g=this.animations[o];s.animations.push(r(t.animations,g))}}if(e){let o=a(t.geometries),g=a(t.materials),A=a(t.textures),l=a(t.images),h=a(t.shapes),C=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),g.length>0&&(n.materials=g),A.length>0&&(n.textures=A),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),C.length>0&&(n.skeletons=C),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let g=[];for(let A in o){let l=o[A];delete l.metadata,g.push(l)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xe.DEFAULT_UP=new G(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},lC={type:"move"},wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,g=this._grip,A=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(A&&t.hand){a=!0;for(let y of t.hand.values()){let d=e.getJointPose(y,n),I=this._getHandJoint(A,y);d!==null&&(I.matrix.fromArray(d.transform.matrix),I.matrix.decompose(I.position,I.rotation,I.scale),I.matrixWorldNeedsUpdate=!0,I.jointRadius=d.radius),I.visible=d!==null}let l=A.joints["index-finger-tip"],h=A.joints["thumb-tip"],C=l.position.distanceTo(h.position),u=.02,m=.005;A.inputState.pinching&&C>u+m?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!A.inputState.pinching&&C<=u-m&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(g.matrix.fromArray(r.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,r.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(r.linearVelocity)):g.hasLinearVelocity=!1,r.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(r.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lC)))}return o!==null&&(o.visible=s!==null),g!==null&&(g.visible=r!==null),A!==null&&(A.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},aA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=nC(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=aA[t.toLowerCase()];return n!==void 0?this.setHex(n,e):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Gt.workingToColorSpace(be.copy(this),t),Math.round(Vt(be.r*255,0,255))*65536+Math.round(Vt(be.g*255,0,255))*256+Math.round(Vt(be.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),g,A,l=(o+a)/2;if(o===a)g=0,A=0;else{let h=a-o;switch(A=l<=.5?h/(a+o):h/(2-a-o),a){case n:g=(s-r)/h+(s<r?6:0);break;case s:g=(r-n)/h+2;break;case r:g=(n-s)/h+4;break}g/=6}return t.h=g,t.s=A,t.l=l,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ve){Gt.workingToColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Es);let n=ba(Ln.h,Es.h,e),s=ba(Ln.s,Es.s,e),r=ba(Ln.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Ut;Ut.NAMES=aA;var Qi=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new G,xn=new G,La=new G,vn=new G,ci=new G,hi=new G,Ig=new G,Na=new G,Ua=new G,Fa=new G,Oa=new oe,Ba=new oe,za=new oe,On=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),xn.subVectors(n,e),La.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(xn),g=Ke.dot(La),A=xn.dot(xn),l=xn.dot(La),h=a*A-o*o;if(h===0)return r.set(0,0,0),null;let C=1/h,u=(A*g-o*l)*C,m=(a*l-o*g)*C;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,g){return this.getBarycoord(t,e,n,s,vn)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(r,vn.x),g.addScaledVector(a,vn.y),g.addScaledVector(o,vn.z),g)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(za,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),xn.subVectors(t,e),Ke.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Ke.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ci.subVectors(s,n),hi.subVectors(r,n),Na.subVectors(t,n);let g=ci.dot(Na),A=hi.dot(Na);if(g<=0&&A<=0)return e.copy(n);Ua.subVectors(t,s);let l=ci.dot(Ua),h=hi.dot(Ua);if(l>=0&&h<=l)return e.copy(s);let C=g*h-l*A;if(C<=0&&g>=0&&l<=0)return a=g/(g-l),e.copy(n).addScaledVector(ci,a);Fa.subVectors(t,r);let u=ci.dot(Fa),m=hi.dot(Fa);if(m>=0&&u<=m)return e.copy(r);let y=u*A-g*m;if(y<=0&&A>=0&&m<=0)return o=A/(A-m),e.copy(n).addScaledVector(hi,o);let d=l*m-u*h;if(d<=0&&h-l>=0&&u-m>=0)return Ig.subVectors(r,s),o=(h-l)/(h-l+(u-m)),e.copy(s).addScaledVector(Ig,o);let I=1/(d+y+C);return a=y*I,o=C*I,e.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ln=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),Ts.subVectors(this.max,Vi),ui.subVectors(t.a,Vi),di.subVectors(t.b,Vi),fi.subVectors(t.c,Vi),Nn.subVectors(di,ui),Un.subVectors(fi,di),Kn.subVectors(ui,fi);let e=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!Ga(e,ui,di,fi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,ui,di,fi,Ts))?!1:(Rs.crossVectors(Nn,Un),e=[Rs.x,Rs.y,Rs.z],Ga(e,ui,di,fi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_n=[new G,new G,new G,new G,new G,new G,new G,new G],qe=new G,ws=new ln,ui=new G,di=new G,fi=new G,Nn=new G,Un=new G,Kn=new G,Vi=new G,Ts=new G,Rs=new G,qn=new G;function Ga(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);let o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),g=t.dot(qn),A=e.dot(qn),l=n.dot(qn);if(Math.max(-Math.max(g,A,l),Math.min(g,A,l))>o)return!1}return!0}var le=new G,Ps=new kt,cC=0,Be=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cC++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eA,this.updateRanges=[],this.gpuType=Xe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $i=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ts=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var We=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},hC=new ln,ki=new G,Va=new G,Bn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hC.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);let e=ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Va)),this.expandByPoint(ki.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},uC=0,He=new ie,ka=new xe,pi=new G,Oe=new ln,Hi=new ln,me=new G,cn=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tC(t)?ts:$i)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Oe.min,Hi.min),Oe.expandByPoint(me),me.addVectors(Oe.max,Hi.max),Oe.expandByPoint(me)):(Oe.expandByPoint(Hi.min),Oe.expandByPoint(Hi.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],g=this.morphTargetsRelative;for(let A=0,l=o.count;A<l;A++)me.fromBufferAttribute(o,A),g&&(pi.fromBufferAttribute(t,A),me.add(pi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],g=[];for(let f=0;f<n.count;f++)o[f]=new G,g[f]=new G;let A=new G,l=new G,h=new G,C=new kt,u=new kt,m=new kt,y=new G,d=new G;function I(f,b,D){A.fromBufferAttribute(n,f),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,D),C.fromBufferAttribute(r,f),u.fromBufferAttribute(r,b),m.fromBufferAttribute(r,D),l.sub(A),h.sub(A),u.sub(C),m.sub(C);let U=1/(u.x*m.y-m.x*u.y);isFinite(U)&&(y.copy(l).multiplyScalar(m.y).addScaledVector(h,-u.y).multiplyScalar(U),d.copy(h).multiplyScalar(u.x).addScaledVector(l,-m.x).multiplyScalar(U),o[f].add(y),o[b].add(y),o[D].add(y),g[f].add(d),g[b].add(d),g[D].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let f=0,b=M.length;f<b;++f){let D=M[f],U=D.start,z=D.count;for(let H=U,L=U+z;H<L;H+=3)I(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new G,x=new G,v=new G,_=new G;function E(f){v.fromBufferAttribute(s,f),_.copy(v);let b=o[f];w.copy(b),w.sub(v.multiplyScalar(v.dot(b))).normalize(),x.crossVectors(_,b);let U=x.dot(g[f])<0?-1:1;a.setXYZW(f,w.x,w.y,w.z,U)}for(let f=0,b=M.length;f<b;++f){let D=M[f],U=D.start,z=D.count;for(let H=U,L=U+z;H<L;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let C=0,u=n.count;C<u;C++)n.setXYZ(C,0,0,0);let s=new G,r=new G,a=new G,o=new G,g=new G,A=new G,l=new G,h=new G;if(t)for(let C=0,u=t.count;C<u;C+=3){let m=t.getX(C+0),y=t.getX(C+1),d=t.getX(C+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,d),l.subVectors(a,r),h.subVectors(s,r),l.cross(h),o.fromBufferAttribute(n,m),g.fromBufferAttribute(n,y),A.fromBufferAttribute(n,d),o.add(l),g.add(l),A.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,g.x,g.y,g.z),n.setXYZ(d,A.x,A.y,A.z)}else for(let C=0,u=e.count;C<u;C+=3)s.fromBufferAttribute(e,C+0),r.fromBufferAttribute(e,C+1),a.fromBufferAttribute(e,C+2),l.subVectors(a,r),h.subVectors(s,r),l.cross(h),n.setXYZ(C+0,l.x,l.y,l.z),n.setXYZ(C+1,l.x,l.y,l.z),n.setXYZ(C+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,g){let A=o.array,l=o.itemSize,h=o.normalized,C=new A.constructor(g.length*l),u=0,m=0;for(let y=0,d=g.length;y<d;y++){o.isInterleavedBufferAttribute?u=g[y]*o.data.stride+o.offset:u=g[y]*l;for(let I=0;I<l;I++)C[m++]=A[u++]}return new Be(C,l,h)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let g=s[o],A=t(g,n);e.setAttribute(o,A)}let r=this.morphAttributes;for(let o in r){let g=[],A=r[o];for(let l=0,h=A.length;l<h;l++){let C=A[l],u=t(C,n);g.push(u)}e.morphAttributes[o]=g}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,g=a.length;o<g;o++){let A=a[o];e.addGroup(A.start,A.count,A.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let g=this.parameters;for(let A in g)g[A]!==void 0&&(t[A]=g[A]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let g in n){let A=n[g];t.data.attributes[g]=A.toJSON(t.data)}let s={},r=!1;for(let g in this.morphAttributes){let A=this.morphAttributes[g],l=[];for(let h=0,C=A.length;h<C;h++){let u=A[h];l.push(u.toJSON(t.data))}l.length>0&&(s[g]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let A in s){let l=s[A];this.setAttribute(A,l.clone(e))}let r=t.morphAttributes;for(let A in r){let l=[],h=r[A];for(let C=0,u=h.length;C<u;C++)l.push(h[C].clone(e));this.morphAttributes[A]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let A=0,l=a.length;A<l;A++){let h=a[A];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=new G,dC=new G,fC=new Rt,Qe=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ha.subVectors(n,e).cross(dC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ha),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fC.getNormalMatrix(t),s=this.coplanarPoint(Ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pC=0,zn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Di,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let g=r[o];delete g.metadata,a.push(g)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qe().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yn=new G,Wa=new G,Ds=new G,Ls=new G,or=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wa.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Ls.copy(this.origin).sub(Wa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=Ls.dot(this.direction),g=-Ls.dot(Ds),A=Ls.lengthSq(),l=Math.abs(1-a*a),h,C,u,m;if(l>0)if(h=a*g-o,C=a*o-g,m=r*l,h>=0)if(C>=-m)if(C<=m){let y=1/l;h*=y,C*=y,u=h*(h+a*C+2*o)+C*(a*h+C+2*g)+A}else C=r,h=Math.max(0,-(a*C+o)),u=-h*h+C*(C+2*g)+A;else C=-r,h=Math.max(0,-(a*C+o)),u=-h*h+C*(C+2*g)+A;else C<=-m?(h=Math.max(0,-(-a*r+o)),C=h>0?-r:Math.min(Math.max(-r,-g),r),u=-h*h+C*(C+2*g)+A):C<=m?(h=0,C=Math.min(Math.max(-r,-g),r),u=C*(C+2*g)+A):(h=Math.max(0,-(a*r+o)),C=h>0?r:Math.min(Math.max(-r,-g),r),u=-h*h+C*(C+2*g)+A);else C=a>0?-r:r,h=Math.max(0,-(a*C+o)),u=-h*h+C*(C+2*g)+A;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wa).addScaledVector(Ds,C),u}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,g=n+a;return g<0?null:o<0?this.at(g,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,g,A=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,C=this.origin;return A>=0?(n=(t.min.x-C.x)*A,s=(t.max.x-C.x)*A):(n=(t.max.x-C.x)*A,s=(t.min.x-C.x)*A),l>=0?(r=(t.min.y-C.y)*l,a=(t.max.y-C.y)*l):(r=(t.max.y-C.y)*l,a=(t.min.y-C.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-C.z)*h,g=(t.max.z-C.z)*h):(o=(t.max.z-C.z)*h,g=(t.min.z-C.z)*h),n>g||o>s)||((o>n||n!==n)&&(n=o),(g<s||s!==s)&&(s=g),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,g=o.x,A=o.y,l=o.z,h=t.x-a.x,C=t.y-a.y,u=t.z-a.z,m=e.x-a.x,y=e.y-a.y,d=e.z-a.z,I=n.x-a.x,M=n.y-a.y,w=n.z-a.z,x=Math.abs(g),v=Math.abs(A),_=Math.abs(l),E,f,b,D,U,z,H,L,V,j,J,nt;if(x>=v&&x>=_?(b=g,z=h,V=m,nt=I,g>=0?(E=A,f=l,D=C,U=u,H=y,L=d,j=M,J=w):(E=l,f=A,D=u,U=C,H=d,L=y,j=w,J=M)):v>=_?(b=A,z=C,V=y,nt=M,A>=0?(E=l,f=g,D=u,U=h,H=d,L=m,j=w,J=I):(E=g,f=l,D=h,U=u,H=m,L=d,j=I,J=w)):(b=l,z=u,V=d,nt=w,l>=0?(E=g,f=A,D=h,U=C,H=m,L=y,j=I,J=M):(E=A,f=g,D=C,U=h,H=y,L=m,j=M,J=I)),b===0)return null;let X=E/b,$=f/b,et=1/b,bt=D-X*z,Mt=U-$*z,$t=H-X*V,Ht=L-$*V,Zt=j-X*nt,Z=J-$*nt,Q=Zt*Ht-Z*$t,ft=bt*Z-Mt*Zt,Pt=$t*Mt-Ht*bt;if(s){if(Q<0||ft<0||Pt<0)return null}else if((Q<0||ft<0||Pt<0)&&(Q>0||ft>0||Pt>0))return null;let ut=Q+ft+Pt;if(ut===0)return null;let Ft=et*(Q*z+ft*V+Pt*nt);return(ut>0?Ft<0:Ft>0)?null:this.at(Ft/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lg=new ie,Qn=new or,Ns=new Bn,cg=new G,Us=new G,Fs=new G,Os=new G,Xa=new G,Bs=new G,hg=new G,zs=new G,he=class extends xe{constructor(t=new cn,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let g=0,A=r.length;g<A;g++){let l=o[g],h=r[g];l!==0&&(Xa.fromBufferAttribute(h,t),a?Bs.addScaledVector(Xa,l):Bs.addScaledVector(Xa.sub(e),l))}e.add(Bs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ns,cg)===null||Qn.origin.distanceToSquared(cg)>(t.far-t.near)**2))&&(lg.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(lg),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,g=r.attributes.position,A=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,C=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=C.length;m<y;m++){let d=C[m],I=a[d.materialIndex],M=Math.max(d.start,u.start),w=Math.min(o.count,Math.min(d.start+d.count,u.start+u.count));for(let x=M,v=w;x<v;x+=3){let _=o.getX(x),E=o.getX(x+1),f=o.getX(x+2);s=Gs(this,I,t,n,A,l,h,_,E,f),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let d=m,I=y;d<I;d+=3){let M=o.getX(d),w=o.getX(d+1),x=o.getX(d+2);s=Gs(this,a,t,n,A,l,h,M,w,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(g!==void 0)if(Array.isArray(a))for(let m=0,y=C.length;m<y;m++){let d=C[m],I=a[d.materialIndex],M=Math.max(d.start,u.start),w=Math.min(g.count,Math.min(d.start+d.count,u.start+u.count));for(let x=M,v=w;x<v;x+=3){let _=x,E=x+1,f=x+2;s=Gs(this,I,t,n,A,l,h,_,E,f),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let d=m,I=y;d<I;d+=3){let M=d,w=d+1,x=d+2;s=Gs(this,a,t,n,A,l,h,M,w,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function mC(i,t,e,n,s,r,a,o){let g;if(t.side===Re?g=n.intersectTriangle(a,r,s,!0,o):g=n.intersectTriangle(s,r,a,t.side===un,o),g===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let A=e.ray.origin.distanceTo(zs);return A<e.near||A>e.far?null:{distance:A,point:zs.clone(),object:i}}function Gs(i,t,e,n,s,r,a,o,g,A){i.getVertexPosition(o,Us),i.getVertexPosition(g,Fs),i.getVertexPosition(A,Os);let l=mC(i,t,e,n,Us,Fs,Os,hg);if(l){let h=new G;On.getBarycoord(hg,Us,Fs,Os,h),s&&(l.uv=On.getInterpolatedAttribute(s,o,g,A,h,new kt)),r&&(l.uv1=On.getInterpolatedAttribute(r,o,g,A,h,new kt)),a&&(l.normal=On.getInterpolatedAttribute(a,o,g,A,h,new G),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let C={a:o,b:g,c:A,normal:new G,materialIndex:0};On.getNormal(Us,Fs,Os,C.normal),l.face=C,l.barycoord=h}return l}var es=class extends Te{constructor(t=null,e=1,n=1,s,r,a,o,g,A=ce,l=ce,h,C){super(null,a,o,g,A,l,s,r,h,C),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mi=new ie,ug=new ie,Vs=[],dg=new ln,xC=new ie,Wi=new he,Xi=new Bn,is=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xC)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),dg.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(dg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Xi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mi),ug.multiplyMatrices(n,mi),Wi.matrixWorld=ug,Wi.raycast(t,Vs);for(let a=0,o=Vs.length;a<o;a++){let g=Vs[a];g.instanceId=r,g.object=this,e.push(g)}Vs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(s*this.count),s,this.count,Lr,Xe));let r=this.morphTexture.source.data.data,a=0;for(let A=0;A<n.length;A++)a+=n[A];let o=this.geometry.morphTargetsRelative?1:1-a,g=s*t;return r[g]=o,r.set(n,g+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$n=new Bn,vC=new kt(.5,.5),ks=new G,Ti=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],g=r[2],A=r[3],l=r[4],h=r[5],C=r[6],u=r[7],m=r[8],y=r[9],d=r[10],I=r[11],M=r[12],w=r[13],x=r[14],v=r[15];if(s[0].setComponents(A-a,u-l,I-m,v-M).normalize(),s[1].setComponents(A+a,u+l,I+m,v+M).normalize(),s[2].setComponents(A+o,u+h,I+y,v+w).normalize(),s[3].setComponents(A-o,u-h,I-y,v-w).normalize(),n)s[4].setComponents(g,C,d,x).normalize(),s[5].setComponents(A-g,u-C,I-d,v-x).normalize();else if(s[4].setComponents(A-g,u-C,I-d,v-x).normalize(),e===$e)s[5].setComponents(A+g,u+C,I+d,v+x).normalize();else if(e===Si)s[5].setComponents(g,C,d,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=vC.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ss=class extends Te{constructor(t=[],e=Xn,n,s,r,a,o,g,A,l){super(t,e,n,s,r,a,o,g,A,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ni=class extends Te{constructor(t,e,n,s,r,a,o,g,A){super(t,e,n,s,r,a,o,g,A),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gn=class extends Te{constructor(t,e,n=en,s,r,a,o=ce,g=ce,A,l=An,h=1){if(l!==An&&l!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let C={width:t,height:e,depth:h};super(C,s,r,a,o,g,l,n,A),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ei(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gr=class extends Gn{constructor(t,e=en,n=Xn,s,r,a=ce,o=ce,g,A=An){let l={width:t,height:t,depth:1},h=[l,l,l,l,l,l];super(t,t,e,n,s,r,a,o,g,A),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},rs=class extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hn=class i extends cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let g=[],A=[],l=[],h=[],C=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(g),this.setAttribute("position",new We(A,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(h,2));function m(y,d,I,M,w,x,v,_,E,f,b){let D=x/E,U=v/f,z=x/2,H=v/2,L=_/2,V=E+1,j=f+1,J=0,nt=0,X=new G;for(let $=0;$<j;$++){let et=$*U-H;for(let bt=0;bt<V;bt++){let Mt=bt*D-z;X[y]=Mt*M,X[d]=et*w,X[I]=L,A.push(X.x,X.y,X.z),X[y]=0,X[d]=0,X[I]=_>0?1:-1,l.push(X.x,X.y,X.z),h.push(bt/E),h.push(1-$/f),J+=1}}for(let $=0;$<f;$++)for(let et=0;et<E;et++){let bt=C+et+V*$,Mt=C+et+V*($+1),$t=C+(et+1)+V*($+1),Ht=C+(et+1)+V*$;g.push(bt,Mt,Ht),g.push(Mt,$t,Ht),nt+=6}o.addGroup(u,nt,b),u+=nt,C+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bn=class i extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),g=Math.floor(s),A=o+1,l=g+1,h=t/o,C=e/g,u=[],m=[],y=[],d=[];for(let I=0;I<l;I++){let M=I*C-a;for(let w=0;w<A;w++){let x=w*h-r;m.push(x,-M,0),y.push(0,0,1),d.push(w/o),d.push(1-I/g)}}for(let I=0;I<g;I++)for(let M=0;M<o;M++){let w=M+A*I,x=M+A*(I+1),v=M+1+A*(I+1),_=M+1+A*I;u.push(w,x,_),u.push(x,v,_)}this.setIndex(u),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(y,3)),this.setAttribute("uv",new We(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ri(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fg(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fg(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=ri(i[e]);for(let s in n)t[s]=n[s]}return t}function fg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _C(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var oA={clone:ri,merge:Ee},yC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yC,this.fragmentShader=MC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ri(t.uniforms),this.uniformsGroups=_C(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ar=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var En=class extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=br,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cr=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ir=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Za(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let g=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===g)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ja,endingEnd:ja}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],g=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ka:r=t,o=2*e-n;break;case qa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(g===void 0)switch(this.getSettings_().endingEnd){case Ka:a=t,g=2*n-e;break;case qa:a=1,g=n+s[1]-s[0];break;default:a=t-1,g=e}let A=(n-e)*.5,l=this.valueSize;this._weightPrev=A/(e-o),this._weightNext=A/(g-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=t*o,A=g-o,l=this._offsetPrev,h=this._offsetNext,C=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),y=m*m,d=y*m,I=-C*d+2*C*y-C*m,M=(1+C)*d+(-1.5-2*C)*y+(-.5+C)*m+1,w=(-1-u)*d+(1.5+u)*y+.5*m,x=u*d-u*y;for(let v=0;v!==o;++v)r[v]=I*a[l+v]+M*a[A+v]+w*a[g+v]+x*a[h+v];return r}},cr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=t*o,A=g-o,l=(n-e)/(s-e),h=1-l;for(let C=0;C!==o;++C)r[C]=a[A+C]*h+a[g+C]*l;return r}},hr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ur=class extends Vn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=t*o,A=g-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let m=(n-e)/(s-e),y=1-m;for(let d=0;d!==o;++d)r[d]=a[A+d]*y+a[g+d]*m;return r}let C=o*2,u=t-1;for(let m=0;m!==o;++m){let y=a[A+m],d=a[g+m],I=u*C+m*2,M=h[I],w=h[I+1],x=t*C+m*2,v=l[x],_=l[x+1],E=bC(n,e,M,v,s);r[m]=gA(E,y,w,_,d)}return r}};function gA(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function SC(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bC(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gA(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let g=SC(r,t,e,n,s);if(Math.abs(g)<1e-10)break;r=Math.max(0,Math.min(1,r-o/g))}return r}var Ge=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xi(e,this.TimeBufferType),this.values=xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xi(t.times,Array),values:xi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Za(t.settings)&&(n.settings={inTangents:xi(t.settings.inTangents,Array),outTangents:xi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ur(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zi:e=this.InterpolantFactoryMethodDiscrete;break;case nr:e=this.InterpolantFactoryMethodLinear;break;case Xs:e=this.InterpolantFactoryMethodSmooth;break;case Ja:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return Xs;case this.InterpolantFactoryMethodBezier:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Za(this.settings)&&(pg(this.settings.inTangents,t),pg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Tt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Tt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let g=n[o];if(typeof g=="number"&&isNaN(g)){Tt("KeyframeTrack: Time is not a valid number.",this,o,g),t=!1;break}if(a!==null&&a>g){Tt("KeyframeTrack: Out of order keys.",this,o,g,a),t=!1;break}a=g}if(s!==void 0&&eC(s))for(let o=0,g=s.length;o!==g;++o){let A=s[o];if(isNaN(A)){Tt("KeyframeTrack: Value is not a valid number.",this,o,A),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xs,r=t.length-1,a=1;for(let o=1;o<r;++o){let g=!1,A=t[o],l=t[o+1];if(A!==l&&(o!==1||A!==t[0]))if(s)g=!0;else{let h=o*n,C=h-n,u=h+n;for(let m=0;m!==n;++m){let y=e[h+m];if(y!==e[C+m]||y!==e[u+m]){g=!0;break}}}if(g){if(o!==a){t[a]=t[o];let h=o*n,C=a*n;for(let u=0;u!==n;++u)e[C+u]=e[h+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,g=a*n,A=0;A!==n;++A)e[g+A]=e[o+A];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pg(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ge.prototype.ValueTypeName="";Ge.prototype.TimeBufferType=Float32Array;Ge.prototype.ValueBufferType=Float32Array;Ge.prototype.DefaultInterpolation=nr;var kn=class extends Ge{constructor(t,e,n){super(t,e,n)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Zi;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};dr.prototype.ValueTypeName="color";var fr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};fr.prototype.ValueTypeName="number";var pr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=(n-e)/(s-e),A=t*o;for(let l=A+o;A!==l;A+=4)In.slerpFlat(r,0,a,A-o,a,A,g);return r}},as=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pr(this.times,this.values,this.getValueSize(),t)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Zi;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};mr.prototype.ValueTypeName="vector";var xr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,g,A=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),g?g(l):l},this.setURLModifier=function(l){return g=l,this},this.addHandler=function(l,h){return A.push(l,h),this},this.removeHandler=function(l){let h=A.indexOf(l);return h!==-1&&A.splice(h,2),this},this.getHandler=function(l){for(let h=0,C=A.length;h<C;h+=2){let u=A[h],m=A[h+1];if(u.global&&(u.lastIndex=0),u.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},AA=new xr,vr=class{constructor(t){this.manager=t!==void 0?t:AA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gs=class extends os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ya=new ie,mg=new G,xg=new G,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Ue,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mg.setFromMatrixPosition(t.matrixWorld),e.position.copy(mg),xg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,g=s?s.x/r.x:0,A=s?s.y/r.y:0;t.coordinateSystem===Si||t.reversedDepth?e.set(.5*a,0,0,.5*a+g,0,.5*o,0,.5*o+A,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+g,0,.5*o,0,.5*o+A,0,0,.5,.5,0,0,0,1),e.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hs=new G,Ws=new In,an=new G,As=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hs,Ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,an.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hs,Ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fn=new G,vg=new kt,_g=new kt,Le=class extends As{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,vg,_g),e.subVectors(_g,vg)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let g=a.fullWidth,A=a.fullHeight;r+=a.offsetX*s/g,e-=a.offsetY*n/A,s*=a.width/g,n*=a.height/A}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wn=class extends As{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,g=s-e;if(this.view!==null&&this.view.enabled){let A=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=A*this.view.offsetX,a=r+A*this.view.width,o-=l*this.view.offsetY,g=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qa=class extends _r{constructor(){super(new Wn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Qa}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vi=-90,_i=1,yr=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(vi,_i,t,e);s.layers=this.layers,this.add(s);let r=new Le(vi,_i,t,e);r.layers=this.layers,this.add(r);let a=new Le(vi,_i,t,e);a.layers=this.layers,this.add(a);let o=new Le(vi,_i,t,e);o.layers=this.layers,this.add(o);let g=new Le(vi,_i,t,e);g.layers=this.layers,this.add(g);let A=new Le(vi,_i,t,e);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,g]=e;for(let A of e)this.remove(A);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Si)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let A of e)this.add(A),A.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,g,A,l]=this.children,h=t.getRenderTarget(),C=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,A),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(h,C,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Mr=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var So="\\[\\]\\.:\\/",EC=new RegExp("["+So+"]","g"),bo="[^"+So+"]",wC="[^"+So.replace("\\.","")+"]",TC=/((?:WC+[\/:])*)/.source.replace("WC",bo),RC=/(WCOD+)?/.source.replace("WCOD",wC),PC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bo),DC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bo),LC=new RegExp("^"+TC+RC+PC+DC+"$"),NC=["material","materials","bones","map"],$a=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(EC,"")}static parseTrackName(t){let e=LC.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);NC.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let g=n(o.children);if(g)return g}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let A=e.objectIndex;switch(n){case"materials":if(!t.material){Tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===A){A=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(A!==void 0){if(t[A]===void 0){Tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[A]}}let a=t[s];if(a===void 0){let A=e.nodeName;Tt("PropertyBinding: Trying to update property for track: "+A+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let g=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}g=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(g=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(g=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[g],this.setValue=this.SetterByBindingTypeAndVersioning[g][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=$a;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ru=new Float32Array(1);var to=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Eo(i,t,e,n){let s=UC(n);switch(e){case xo:return i*t;case Lr:return i*t/s.components*s.byteLength;case Nr:return i*t/s.components*s.byteLength;case Jn:return i*t*2/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case vo:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case Fr:return i*t*4/s.components*s.byteLength;case cs:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case us:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:case Gr:return Math.max(i,16)*Math.max(t,8)/4;case Or:case zr:return Math.max(i,8)*Math.max(t,8)/2;case Vr:case kr:case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case fs:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case ga:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ca:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ps:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function UC(i){switch(i){case Ue:case uo:return{byteLength:1,components:1};case Li:case fo:case nn:return{byteLength:2,components:1};case Pr:case Dr:return{byteLength:2,components:4};case en:case Rr:case Xe:return{byteLength:4,components:1};case po:case mo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function PA(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function OC(i){let t=new WeakMap;function e(o,g){let A=o.array,l=o.usage,h=A.byteLength,C=i.createBuffer();i.bindBuffer(g,C),i.bufferData(g,A,l),o.onUploadCallback();let u;if(A instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&A instanceof Float16Array)u=i.HALF_FLOAT;else if(A instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(A instanceof Int16Array)u=i.SHORT;else if(A instanceof Uint32Array)u=i.UNSIGNED_INT;else if(A instanceof Int32Array)u=i.INT;else if(A instanceof Int8Array)u=i.BYTE;else if(A instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:C,type:u,bytesPerElement:A.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,g,A){let l=g.array,h=g.updateRanges;if(i.bindBuffer(A,o),h.length===0)i.bufferSubData(A,0,l);else{h.sort((u,m)=>u.start-m.start);let C=0;for(let u=1;u<h.length;u++){let m=h[C],y=h[u];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++C,h[C]=y)}h.length=C+1;for(let u=0,m=h.length;u<m;u++){let y=h[u];i.bufferSubData(A,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}g.clearUpdateRanges()}g.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let g=t.get(o);g&&(i.deleteBuffer(g.buffer),t.delete(o))}function a(o,g){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let A=t.get(o);if(A===void 0)t.set(o,e(o,g));else if(A.version<o.version){if(A.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(A.buffer,o,g),A.version=o.version}}return{get:s,remove:r,update:a}}var BC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,II=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hI="gl_FragColor = linearToOutputTexel( gl_FragColor );",uI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_I=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,PI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FI=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GI=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,VI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$I=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,el=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,il=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,al=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ol=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Al=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Il=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ll=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ul=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ml=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_l=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ml=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,El=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ll=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ul=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ol=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ql=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ql=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$l=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ec=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ic=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ac=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ac=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ic=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:BC,alphahash_pars_fragment:zC,alphamap_fragment:GC,alphamap_pars_fragment:VC,alphatest_fragment:kC,alphatest_pars_fragment:HC,aomap_fragment:WC,aomap_pars_fragment:XC,batching_pars_vertex:ZC,batching_vertex:YC,begin_vertex:JC,beginnormal_vertex:jC,bsdfs:KC,iridescence_fragment:qC,bumpmap_pars_fragment:QC,clipping_planes_fragment:$C,clipping_planes_pars_fragment:tI,clipping_planes_pars_vertex:eI,clipping_planes_vertex:nI,color_fragment:iI,color_pars_fragment:sI,color_pars_vertex:rI,color_vertex:aI,common:oI,cube_uv_reflection_fragment:gI,defaultnormal_vertex:AI,displacementmap_pars_vertex:CI,displacementmap_vertex:II,emissivemap_fragment:lI,emissivemap_pars_fragment:cI,colorspace_fragment:hI,colorspace_pars_fragment:uI,envmap_fragment:dI,envmap_common_pars_fragment:fI,envmap_pars_fragment:pI,envmap_pars_vertex:mI,envmap_physical_pars_fragment:RI,envmap_vertex:xI,fog_vertex:vI,fog_pars_vertex:_I,fog_fragment:yI,fog_pars_fragment:MI,gradientmap_pars_fragment:SI,lightmap_pars_fragment:bI,lights_lambert_fragment:EI,lights_lambert_pars_fragment:wI,lights_pars_begin:TI,lights_toon_fragment:PI,lights_toon_pars_fragment:DI,lights_phong_fragment:LI,lights_phong_pars_fragment:NI,lights_physical_fragment:UI,lights_physical_pars_fragment:FI,lights_fragment_begin:OI,lights_fragment_maps:BI,lights_fragment_end:zI,lightprobes_pars_fragment:GI,logdepthbuf_fragment:VI,logdepthbuf_pars_fragment:kI,logdepthbuf_pars_vertex:HI,logdepthbuf_vertex:WI,map_fragment:XI,map_pars_fragment:ZI,map_particle_fragment:YI,map_particle_pars_fragment:JI,metalnessmap_fragment:jI,metalnessmap_pars_fragment:KI,morphinstance_vertex:qI,morphcolor_vertex:QI,morphnormal_vertex:$I,morphtarget_pars_vertex:tl,morphtarget_vertex:el,normal_fragment_begin:nl,normal_fragment_maps:il,normal_pars_fragment:sl,normal_pars_vertex:rl,normal_vertex:al,normalmap_pars_fragment:ol,clearcoat_normal_fragment_begin:gl,clearcoat_normal_fragment_maps:Al,clearcoat_pars_fragment:Cl,iridescence_pars_fragment:Il,opaque_fragment:ll,packing:cl,premultiplied_alpha_fragment:hl,project_vertex:ul,dithering_fragment:dl,dithering_pars_fragment:fl,roughnessmap_fragment:pl,roughnessmap_pars_fragment:ml,shadowmap_pars_fragment:xl,shadowmap_pars_vertex:vl,shadowmap_vertex:_l,shadowmask_pars_fragment:yl,skinbase_vertex:Ml,skinning_pars_vertex:Sl,skinning_vertex:bl,skinnormal_vertex:El,specularmap_fragment:wl,specularmap_pars_fragment:Tl,tonemapping_fragment:Rl,tonemapping_pars_fragment:Pl,transmission_fragment:Dl,transmission_pars_fragment:Ll,uv_pars_fragment:Nl,uv_pars_vertex:Ul,uv_vertex:Fl,worldpos_vertex:Ol,background_vert:Bl,background_frag:zl,backgroundCube_vert:Gl,backgroundCube_frag:Vl,cube_vert:kl,cube_frag:Hl,depth_vert:Wl,depth_frag:Xl,distance_vert:Zl,distance_frag:Yl,equirect_vert:Jl,equirect_frag:jl,linedashed_vert:Kl,linedashed_frag:ql,meshbasic_vert:Ql,meshbasic_frag:$l,meshlambert_vert:tc,meshlambert_frag:ec,meshmatcap_vert:nc,meshmatcap_frag:ic,meshnormal_vert:sc,meshnormal_frag:rc,meshphong_vert:ac,meshphong_frag:oc,meshphysical_vert:gc,meshphysical_frag:Ac,meshtoon_vert:Cc,meshtoon_frag:Ic,points_vert:lc,points_frag:cc,shadow_vert:hc,shadow_frag:uc,sprite_vert:dc,sprite_frag:fc},Ct={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},pn={basic:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ee([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ee([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ee([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ee([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ee([Ct.points,Ct.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ee([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ee([Ct.common,Ct.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ee([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ee([Ct.sprite,Ct.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Ee([Ct.common,Ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Ee([Ct.lights,Ct.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};pn.physical={uniforms:Ee([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var da={r:0,b:0,g:0},pc=new ie,DA=new Rt;DA.set(-1,0,0,0,1,0,0,0,1);function mc(i,t,e,n,s,r){let a=new Ut(0),o=s===!0?0:1,g,A,l=null,h=0,C=null;function u(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let x=M.backgroundBlurriness>0;w=t.get(w,x)}return w}function m(M){let w=!1,x=u(M);x===null?d(a,o):x&&x.isColor&&(d(x,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,w){let x=u(w);x&&(x.isCubeTexture||x.mapping===Is)?(A===void 0&&(A=new he(new hn(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ri(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(v,_,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(A)),A.material.uniforms.envMap.value=x,A.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,A.material.uniforms.backgroundRotation.value.setFromMatrix4(pc.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&A.material.uniforms.backgroundRotation.value.premultiply(DA),A.material.toneMapped=Gt.getTransfer(x.colorSpace)!==jt,(l!==x||h!==x.version||C!==i.toneMapping)&&(A.material.needsUpdate=!0,l=x,h=x.version,C=i.toneMapping),A.layers.enableAll(),M.unshift(A,A.geometry,A.material,0,0,null)):x&&x.isTexture&&(g===void 0&&(g=new he(new bn(2,2),new ze({name:"BackgroundMaterial",uniforms:ri(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(g)),g.material.uniforms.t2D.value=x,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Gt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),g.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||h!==x.version||C!==i.toneMapping)&&(g.material.needsUpdate=!0,l=x,h=x.version,C=i.toneMapping),g.layers.enableAll(),M.unshift(g,g.geometry,g.material,0,0,null))}function d(M,w){M.getRGB(da,Mo(i)),e.buffers.color.setClear(da.r,da.g,da.b,w,r)}function I(){A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,d(a,o)},render:m,addToRenderList:y,dispose:I}}function xc(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=C(null),r=s,a=!1;function o(U,z,H,L,V){let j=!1,J=h(U,L,H,z);r!==J&&(r=J,A(r.object)),j=u(U,L,H,V),j&&m(U,L,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(U,z,H,L),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function g(){return i.createVertexArray()}function A(U){return i.bindVertexArray(U)}function l(U){return i.deleteVertexArray(U)}function h(U,z,H,L){let V=L.wireframe===!0,j=n[z.id];j===void 0&&(j={},n[z.id]=j);let J=U.isInstancedMesh===!0?U.id:0,nt=j[J];nt===void 0&&(nt={},j[J]=nt);let X=nt[H.id];X===void 0&&(X={},nt[H.id]=X);let $=X[V];return $===void 0&&($=C(g()),X[V]=$),$}function C(U){let z=[],H=[],L=[];for(let V=0;V<e;V++)z[V]=0,H[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:L,object:U,attributes:{},index:null}}function u(U,z,H,L){let V=r.attributes,j=z.attributes,J=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=V[X],bt=j[X];if(bt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function m(U,z,H,L){let V={},j=z.attributes,J=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=j[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),V[X]=bt,J++}r.attributes=V,r.attributesNum=J,r.index=L}function y(){let U=r.newAttributes;for(let z=0,H=U.length;z<H;z++)U[z]=0}function d(U){I(U,0)}function I(U,z){let H=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;H[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),V[U]!==z&&(i.vertexAttribDivisor(U,z),V[U]=z)}function M(){let U=r.newAttributes,z=r.enabledAttributes;for(let H=0,L=z.length;H<L;H++)z[H]!==U[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function w(U,z,H,L,V,j,J){J===!0?i.vertexAttribIPointer(U,z,H,V,j):i.vertexAttribPointer(U,z,H,L,V,j)}function x(U,z,H,L){y();let V=L.attributes,j=H.getAttributes(),J=z.defaultAttributeValues;for(let nt in j){let X=j[nt];if(X.location>=0){let $=V[nt];if($===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let et=$.normalized,bt=$.itemSize,Mt=t.get($);if(Mt===void 0)continue;let $t=Mt.buffer,Ht=Mt.type,Zt=Mt.bytesPerElement,Z=Ht===i.INT||Ht===i.UNSIGNED_INT||$.gpuType===Rr;if($.isInterleavedBufferAttribute){let Q=$.data,ft=Q.stride,Pt=$.offset;if(Q.isInstancedInterleavedBuffer){for(let ut=0;ut<X.locationSize;ut++)I(X.location+ut,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<X.locationSize;ut++)d(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ut=0;ut<X.locationSize;ut++)w(X.location+ut,bt/X.locationSize,Ht,et,ft*Zt,(Pt+bt/X.locationSize*ut)*Zt,Z)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)I(X.location+Q,$.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Q=0;Q<X.locationSize;Q++)w(X.location+Q,bt/X.locationSize,Ht,et,bt*Zt,bt/X.locationSize*Q*Zt,Z)}}else if(J!==void 0){let et=J[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}M()}function v(){b();for(let U in n){let z=n[U];for(let H in z){let L=z[H];for(let V in L){let j=L[V];for(let J in j)l(j[J].object),delete j[J];delete L[V]}}delete n[U]}}function _(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let H in z){let L=z[H];for(let V in L){let j=L[V];for(let J in j)l(j[J].object),delete j[J];delete L[V]}}delete n[U.id]}function E(U){for(let z in n){let H=n[z];for(let L in H){let V=H[L];if(V[U.id]===void 0)continue;let j=V[U.id];for(let J in j)l(j[J].object),delete j[J];delete V[U.id]}}}function f(U){for(let z in n){let H=n[z],L=U.isInstancedMesh===!0?U.id:0,V=H[L];if(V!==void 0){for(let j in V){let J=V[j];for(let nt in J)l(J[nt].object),delete J[nt];delete V[j]}delete H[L],Object.keys(H).length===0&&delete n[z]}}}function b(){D(),a=!0,r!==s&&(r=s,A(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:_,releaseStatesOfObject:f,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:d,disableUnusedAttributes:M}}function vc(i,t,e){let n;function s(g){n=g}function r(g,A){i.drawArrays(n,g,A),e.update(A,n,1)}function a(g,A,l){l!==0&&(i.drawArraysInstanced(n,g,A,l),e.update(A,n,l))}function o(g,A,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,g,0,A,0,l);let C=0;for(let u=0;u<l;u++)C+=A[u];e.update(C,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _c(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ze&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let f=E===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ue&&E!==Xe&&!f&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function g(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=e.precision!==void 0?e.precision:"highp",l=g(A);l!==A&&(wt("WebGLRenderer:",A,"not supported, using",l,"instead."),A=l);let h=e.logarithmicDepthBuffer===!0,C=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&C===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),I=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),_=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:g,textureFormatReadable:a,textureTypeReadable:o,precision:A,logarithmicDepthBuffer:h,reversedDepthBuffer:C,maxTextures:u,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:d,maxAttributes:I,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:v,samples:_}}function yc(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new Rt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(h,C){let u=h.length!==0||C||n!==0||s;return s=C,n=h.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,C){e=l(h,C,0)},this.setState=function(h,C,u){let m=h.clippingPlanes,y=h.clipIntersection,d=h.clipShadows,I=i.get(h);if(!s||m===null||m.length===0||r&&!d)r?l(null):A();else{let M=r?0:n,w=M*4,x=I.clippingState||null;g.value=x,x=l(m,C,w,u);for(let v=0;v!==w;++v)x[v]=e[v];I.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function A(){g.value!==e&&(g.value=e,g.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,C,u,m){let y=h!==null?h.length:0,d=null;if(y!==0){if(d=g.value,m!==!0||d===null){let I=u+y*4,M=C.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<I)&&(d=new Float32Array(I));for(let w=0,x=u;w!==y;++w,x+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(d,x),d[x+3]=a.constant}g.value=d,g.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}var Fi=4,Mc=6,Sc=20,bc=256,xs=new Wn,CA=new Ut,wo=null,To=0,Ro=0,Po=!1,Ec=new G,ai=new G,pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ec}=r;wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,n,s,g,o),e>0&&this._blur(g,0,0,e),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,To,Ro),this._renderer.xr.enabled=Po,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_e,minFilter:_e,generateMipmaps:!1,type:nn,format:Ze,colorSpace:Yi,depthBuffer:!1},s=IA(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=IA(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wc(r)),this._blurMaterial=Rc(r,t,e),this._ggxMaterial=Tc(r,t,e)}return s}_compileMaterial(t){let e=new he(new cn,t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,s,r){let g=new Le(90,1,e,n),A=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,C=h.autoClear,u=h.toneMapping;h.getClearColor(CA),h.toneMapping=tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new hn,new ei({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,d=y.material,I=!1,M=t.background;M?M.isColor&&(d.color.copy(M),t.background=null,I=!0):(d.color.copy(CA),I=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(g.up.set(0,A[w],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x+l[w],r.y,r.z)):x===1?(g.up.set(0,0,A[w]),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y+l[w],r.z)):(g.up.set(0,A[w],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y,r.z+l[w]));let v=this._cubeSize;Ui(s,x*v,w>2?v:0,v,v),h.setRenderTarget(s),I&&h.render(y,g),h.render(t,g)}h.toneMapping=u,h.autoClear=C,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xn||t.mapping===si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cA()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lA());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let g=this._cubeSize;Ui(e,0,0,3*g,2*g),n.setRenderTarget(e),n.render(a,xs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let g=a.uniforms,A=n/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),h=Math.sqrt(A*A-l*l),C=A*1.25,u=h*C,{_lodMax:m}=this,y=this._sizeLods[n],d=3*y*(n>m-Fi?n-m+Fi:0),I=4*(this._cubeSize-y);g.envMap.value=t.texture,g.roughness.value=u,g.mipInt.value=m-e,Ui(r,d,I,3*y,2*y),s.setRenderTarget(r),s.render(o,xs),g.envMap.value=r.texture,g.roughness.value=0,g.mipInt.value=m-n,Ui(t,d,I,3*y,2*y),s.setRenderTarget(t),s.render(o,xs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,g=this._lodMeshes[s];g.material=o;let A=o.uniforms;A.envMap.value=t.texture,A.sigma.value=r,A.mipInt.value=this._lodMax-n;let l=this._sizeLods[s],h=3*l*(s>this._lodMax-Fi?s-this._lodMax+Fi:0),C=4*(this._cubeSize-l);Ui(e,h,C,3*l,2*l),a.setRenderTarget(e),a.render(g,xs)}};function wc(i){let t=[],e=[],n=i,s=i-Fi+1+Mc;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),g=-o,A=1+o,l=[g,g,A,g,A,A,g,g,A,A,g,A],h=6,C=6,u=3,m=new Float32Array(u*C*h),y=new Float32Array(u*C*h);for(let I=0;I<h;I++){let M=I%3*2/3-1,w=I>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];m.set(x,u*C*I);for(let v=0;v<C;v++){let _=l[v*2]*2-1,E=l[v*2+1]*2-1;I===0?ai.set(1,E,_):I===1?ai.set(-_,1,-E):I===2?ai.set(-_,E,1):I===3?ai.set(-1,E,-_):I===4?ai.set(-_,-1,E):ai.set(_,E,-1),ai.toArray(y,(I*C+v)*u)}}let d=new cn;d.setAttribute("position",new Be(m,u)),d.setAttribute("outputDirection",new Be(y,u)),e.push(new he(d,null)),n>Fi&&n--}return{lodMeshes:e,sizeLods:t}}function IA(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tc(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Rc(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Sc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function lA(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function cA(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ma=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ss(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hn(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:dn});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=_e),new yr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Pc(i){let t=new WeakMap,e=new WeakMap,n=null;function s(C,u=!1){return C==null?null:u?a(C):r(C)}function r(C){if(C&&C.isTexture){let u=C.mapping;if(u===Er||u===wr)if(t.has(C)){let m=t.get(C).texture;return o(m,C.mapping)}else{let m=C.image;if(m&&m.height>0){let y=new ma(m.height);return y.fromEquirectangularTexture(i,C),t.set(C,y),C.addEventListener("dispose",A),o(y.texture,C.mapping)}else return null}}return C}function a(C){if(C&&C.isTexture){let u=C.mapping,m=u===Er||u===wr,y=u===Xn||u===si;if(m||y){let d=e.get(C),I=d!==void 0?d.texture.pmremVersion:0;if(C.isRenderTargetTexture&&C.pmremVersion!==I)return n===null&&(n=new pa(i)),d=m?n.fromEquirectangular(C,d):n.fromCubemap(C,d),d.texture.pmremVersion=C.pmremVersion,e.set(C,d),d.texture;if(d!==void 0)return d.texture;{let M=C.image;return m&&M&&M.height>0||y&&M&&g(M)?(n===null&&(n=new pa(i)),d=m?n.fromEquirectangular(C):n.fromCubemap(C),d.texture.pmremVersion=C.pmremVersion,e.set(C,d),C.addEventListener("dispose",l),d.texture):null}}}return C}function o(C,u){return u===Er?C.mapping=Xn:u===wr&&(C.mapping=si),C}function g(C){let u=0,m=6;for(let y=0;y<m;y++)C[y]!==void 0&&u++;return u===m}function A(C){let u=C.target;u.removeEventListener("dispose",A);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function l(C){let u=C.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Dc(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ti("WebGLRenderer: "+n+" extension not supported."),s}}}function Lc(i,t,e,n){let s={},r=new WeakMap;function a(h){let C=h.target;C.index!==null&&t.remove(C.index);for(let m in C.attributes)t.remove(C.attributes[m]);C.removeEventListener("dispose",a),delete s[C.id];let u=r.get(C);u&&(t.remove(u),r.delete(C)),n.releaseStatesOfGeometry(C),C.isInstancedBufferGeometry===!0&&delete C._maxInstanceCount,e.memory.geometries--}function o(h,C){return s[C.id]===!0||(C.addEventListener("dispose",a),s[C.id]=!0,e.memory.geometries++),C}function g(h){let C=h.attributes;for(let u in C)t.update(C[u],i.ARRAY_BUFFER)}function A(h){let C=[],u=h.index,m=h.attributes.position,y=0;if(m===void 0)return;if(u!==null){let M=u.array;y=u.version;for(let w=0,x=M.length;w<x;w+=3){let v=M[w+0],_=M[w+1],E=M[w+2];C.push(v,_,_,E,E,v)}}else{let M=m.array;y=m.version;for(let w=0,x=M.length/3-1;w<x;w+=3){let v=w+0,_=w+1,E=w+2;C.push(v,_,_,E,E,v)}}let d=new(m.count>=65535?ts:$i)(C,1);d.version=y;let I=r.get(h);I&&t.remove(I),r.set(h,d)}function l(h){let C=r.get(h);if(C){let u=h.index;u!==null&&C.version<u.version&&A(h)}else A(h);return r.get(h)}return{get:o,update:g,getWireframeAttribute:l}}function Nc(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function g(h,C){i.drawElements(n,C,r,h*a),e.update(C,n,1)}function A(h,C,u){u!==0&&(i.drawElementsInstanced(n,C,r,h*a,u),e.update(C,n,u))}function l(h,C,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,C,0,r,h,0,u);let y=0;for(let d=0;d<u;d++)y+=C[d];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=g,this.renderInstances=A,this.renderMultiDraw=l}function Uc(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fc(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,g){let A=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,C=n.get(o);if(C===void 0||C.count!==h){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};C!==void 0&&C.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],I=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let x=o.attributes.position.count*w,v=1;x>t.maxTextureSize&&(v=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let _=new Float32Array(x*v*4*h),E=new Ki(_,x,v,h);E.type=Xe,E.needsUpdate=!0;let f=w*4;for(let D=0;D<h;D++){let U=d[D],z=I[D],H=M[D],L=x*v*4*D;for(let V=0;V<U.count;V++){let j=V*f;u===!0&&(s.fromBufferAttribute(U,V),_[L+j+0]=s.x,_[L+j+1]=s.y,_[L+j+2]=s.z,_[L+j+3]=0),m===!0&&(s.fromBufferAttribute(z,V),_[L+j+4]=s.x,_[L+j+5]=s.y,_[L+j+6]=s.z,_[L+j+7]=0),y===!0&&(s.fromBufferAttribute(H,V),_[L+j+8]=s.x,_[L+j+9]=s.y,_[L+j+10]=s.z,_[L+j+11]=H.itemSize===4?s.w:1)}}C={count:h,texture:E,size:new kt(x,v)},n.set(o,C),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)g.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let y=0;y<A.length;y++)u+=A[y];let m=o.morphTargetsRelative?1:1-u;g.getUniforms().setValue(i,"morphTargetBaseInfluence",m),g.getUniforms().setValue(i,"morphTargetInfluences",A)}g.getUniforms().setValue(i,"morphTargetsTexture",C.texture,e),g.getUniforms().setValue(i,"morphTargetsTextureSize",C.size)}return{update:r}}function Oc(i,t,e,n,s){let r=new WeakMap;function a(A){let l=s.render.frame,h=A.geometry,C=t.get(A,h);if(r.get(C)!==l&&(t.update(C),r.set(C,l)),A.isInstancedMesh&&(A.hasEventListener("dispose",g)===!1&&A.addEventListener("dispose",g),r.get(A)!==l&&(e.update(A.instanceMatrix,i.ARRAY_BUFFER),A.instanceColor!==null&&e.update(A.instanceColor,i.ARRAY_BUFFER),r.set(A,l))),A.isSkinnedMesh){let u=A.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return C}function o(){r=new WeakMap}function g(A){let l=A.target;l.removeEventListener("dispose",g),n.releaseStatesOfObject(l),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}var Bc={[oo]:"LINEAR_TONE_MAPPING",[go]:"REINHARD_TONE_MAPPING",[Ao]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function zc(i,t,e,n,s,r){let a=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,g=null,A=new cn;A.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),A.setAttribute("uv",new We([0,2,0,0,2,0],2));let l=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new he(A,l),C=new Wn(-1,1,1,-1,0,1),u=null,m=null,y=!1,d,I=null,M=[],w=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),g!==null&&g.setSize(x,v);for(let _=0;_<M.length;_++){let E=M[_];E.setSize&&E.setSize(x,v)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;let v=a.width,_=a.height;M.length>0&&o===null&&(o=new Ne(v,_,{type:nn,depthBuffer:!1,stencilBuffer:!1}),g=new Ne(v,_,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let f=M[E];f.setSize&&f.setSize(v,_)}},this.begin=function(x,v){if(y||x.toneMapping===tn&&M.length===0)return!1;if(I=v,v!==null){let _=v.width,E=v.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return w===!1&&x.setRenderTarget(a),d=x.toneMapping,x.toneMapping=tn,!0},this.hasRenderPass=function(){return w},this.end=function(x,v){x.toneMapping=d,y=!0;let _=a,E=o;for(let f=0;f<M.length;f++){let b=M[f];b.enabled!==!1&&(b.render(x,E,_,v),b.needsSwap!==!1&&(_=E,E=E===o?g:o))}if(u!==x.outputColorSpace||m!==x.toneMapping){u=x.outputColorSpace,m=x.toneMapping,l.defines={},Gt.getTransfer(u)===jt&&(l.defines.SRGB_TRANSFER="");let f=Bc[m];f&&(l.defines[f]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(I),x.render(h,C),I=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),g!==null&&g.dispose(),A.dispose(),l.dispose()}}var LA=new Te,No=new Gn(1,1),NA=new Ki,UA=new ar,FA=new ss,hA=[],uA=[],dA=new Float32Array(16),fA=new Float32Array(9),pA=new Float32Array(4);function Bi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hA[s];if(r===void 0&&(r=new Float32Array(s),hA[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=uA[t];e===void 0&&(e=new Int32Array(t),uA[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function kc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function Hc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function Wc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;pA.set(n),i.uniformMatrix2fv(this.addr,!1,pA),fe(e,n)}}function Xc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;fA.set(n),i.uniformMatrix3fv(this.addr,!1,fA),fe(e,n)}}function Zc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;dA.set(n),i.uniformMatrix4fv(this.addr,!1,dA),fe(e,n)}}function Yc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function jc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function Kc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function qc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function $c(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function th(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function eh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(No.compareFunction=e.isReversedDepthBuffer()?ua:ha,r=No):r=LA,e.setTexture2D(t||r,s)}function nh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||UA,s)}function ih(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||FA,s)}function sh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||NA,s)}function rh(i){switch(i){case 5126:return Gc;case 35664:return Vc;case 35665:return kc;case 35666:return Hc;case 35674:return Wc;case 35675:return Xc;case 35676:return Zc;case 5124:case 35670:return Yc;case 35667:case 35671:return Jc;case 35668:case 35672:return jc;case 35669:case 35673:return Kc;case 5125:return qc;case 36294:return Qc;case 36295:return $c;case 36296:return th;case 35678:case 36198:case 36298:case 36306:case 35682:return eh;case 35679:case 36299:case 36307:return nh;case 35680:case 36300:case 36308:case 36293:return ih;case 36289:case 36303:case 36311:case 36292:return sh}}function ah(i,t){i.uniform1fv(this.addr,t)}function oh(i,t){let e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function gh(i,t){let e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ah(i,t){let e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ch(i,t){let e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ih(i,t){let e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lh(i,t){let e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ch(i,t){i.uniform1iv(this.addr,t)}function hh(i,t){i.uniform2iv(this.addr,t)}function uh(i,t){i.uniform3iv(this.addr,t)}function dh(i,t){i.uniform4iv(this.addr,t)}function fh(i,t){i.uniform1uiv(this.addr,t)}function ph(i,t){i.uniform2uiv(this.addr,t)}function mh(i,t){i.uniform3uiv(this.addr,t)}function xh(i,t){i.uniform4uiv(this.addr,t)}function vh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=No:a=LA;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function _h(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||UA,r[a])}function yh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||FA,r[a])}function Mh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||NA,r[a])}function Sh(i){switch(i){case 5126:return ah;case 35664:return oh;case 35665:return gh;case 35666:return Ah;case 35674:return Ch;case 35675:return Ih;case 35676:return lh;case 5124:case 35670:return ch;case 35667:case 35671:return hh;case 35668:case 35672:return uh;case 35669:case 35673:return dh;case 5125:return fh;case 36294:return ph;case 36295:return mh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return vh;case 35679:case 36299:case 36307:return _h;case 35680:case 36300:case 36308:case 36293:return yh;case 36289:case 36303:case 36311:case 36292:return Mh}}var Uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rh(e.type)}},Fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sh(e.type)}},Oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Do=/(\w+)(\])?(\[|\.)?/g;function mA(i,t){i.seq.push(t),i.map[t.id]=t}function bh(i,t,e){let n=i.name,s=n.length;for(Do.lastIndex=0;;){let r=Do.exec(n),a=Do.lastIndex,o=r[1],g=r[2]==="]",A=r[3];if(g&&(o=o|0),A===void 0||A==="["&&a+2===s){mA(e,A===void 0?new Uo(o,i,t):new Fo(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Oo(o),mA(e,h)),e=h}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),g=t.getUniformLocation(e,o.name);bh(o,g,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],g=n[o.id];g.needsUpdate!==!1&&o.setValue(t,g.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function xA(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Eh=37297,wh=0;function Th(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var vA=new Rt;function Rh(i){Gt._getMatrix(vA,Gt.workingColorSpace,i);let t=`mat3( ${vA.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Ji:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _A(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Th(i.getShaderSource(t),o)}else return r}function Ph(i,t){let e=Rh(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Dh={[oo]:"Linear",[go]:"Reinhard",[Ao]:"Cineon",[Co]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[Io]:"Custom"};function Lh(i,t){let e=Dh[t];return e===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fa=new G;function Nh(){Gt.getLuminanceCoefficients(fa);let i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Fh(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Oh(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _s(i){return i!==""}function yA(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function MA(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(Bh,Gh)}var zh=new Map;function Gh(i,t){let e=Nt[t];if(e===void 0){let n=zh.get(t);if(n!==void 0)e=Nt[n],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bo(e)}var Vh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SA(i){return i.replace(Vh,kh)}function kh(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bA(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hh={[Cs]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function Wh(i){return Hh[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xh={[Xn]:"ENVMAP_TYPE_CUBE",[si]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function Zh(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xh[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yh={[si]:"ENVMAP_MODE_REFRACTION"};function Jh(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yh[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jh={[br]:"ENVMAP_BLENDING_MULTIPLY",[Hg]:"ENVMAP_BLENDING_MIX",[Wg]:"ENVMAP_BLENDING_ADD"};function Kh(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jh[i.combine]||"ENVMAP_BLENDING_NONE"}function qh(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qh(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,g=Wh(e),A=Zh(e),l=Jh(e),h=Kh(e),C=qh(e),u=Uh(e),m=Fh(r),y=s.createProgram(),d,I,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_s).join(`
`),d.length>0&&(d+=`
`),I=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_s).join(`
`),I.length>0&&(I+=`
`)):(d=[bA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),I=[bA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+A:"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",C?"#define CUBEUV_TEXEL_WIDTH "+C.texelWidth:"",C?"#define CUBEUV_TEXEL_HEIGHT "+C.texelHeight:"",C?"#define CUBEUV_MAX_MIP "+C.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tn?"#define TONE_MAPPING":"",e.toneMapping!==tn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==tn?Lh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Ph("linearToOutputTexel",e.outputColorSpace),Nh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=Bo(a),a=yA(a,e),a=MA(a,e),o=Bo(o),o=yA(o,e),o=MA(o,e),a=SA(a),o=SA(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,I=["#define varying in",e.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);let w=M+d+a,x=M+I+o,v=xA(s,s.VERTEX_SHADER,w),_=xA(s,s.FRAGMENT_SHADER,x);s.attachShader(y,v),s.attachShader(y,_),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(v)||"",L=s.getShaderInfoLog(_)||"",V=z.trim(),j=H.trim(),J=L.trim(),nt=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,_);else{let $=_A(s,v,"vertex"),et=_A(s,_,"fragment");Tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+$+`
`+et)}else V!==""?wt("WebGLProgram: Program Info Log:",V):(j===""||J==="")&&(X=!1);X&&(U.diagnostics={runnable:nt,programLog:V,vertexShader:{log:j,prefix:d},fragmentShader:{log:J,prefix:I}})}s.deleteShader(v),s.deleteShader(_),f=new Oi(s,y),b=Oh(s,y)}let f;this.getUniforms=function(){return f===void 0&&E(this),f};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,Eh)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wh++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=_,this}var $h=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Go(t),e.set(t,n)),n}},Go=class{constructor(t){this.id=$h++,this.code=t,this.usedTimes=0}};function tu(i){return i===Jn||i===fs||i===ps}function eu(i,t,e,n,s,r){let a=new qi,o=new zo,g=new Set,A=[],l=new Map,h=n.logarithmicDepthBuffer,C=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return g.add(f),f===0?"uv":`uv${f}`}function y(f,b,D,U,z,H){let L=U.fog,V=z.geometry,j=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?U.environment:null,J=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,nt=t.get(f.envMap||j,J),X=nt&&nt.mapping===Is?nt.image.height:null,$=u[f.type];f.precision!==null&&(C=n.getMaxPrecision(f.precision),C!==f.precision&&wt("WebGLProgram.getParameters:",f.precision,"not supported, using",C,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,bt=et!==void 0?et.length:0,Mt=0;V.morphAttributes.position!==void 0&&(Mt=1),V.morphAttributes.normal!==void 0&&(Mt=2),V.morphAttributes.color!==void 0&&(Mt=3);let $t,Ht,Zt,Z;if($){let ee=pn[$];$t=ee.vertexShader,Ht=ee.fragmentShader}else{$t=f.vertexShader,Ht=f.fragmentShader;let ee=o.getVertexShaderStage(f),Yt=o.getFragmentShaderStage(f);o.update(f,ee,Yt),Zt=ee.id,Z=Yt.id}let Q=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,ut=z.isBatchedMesh===!0,Ft=!!f.map,ue=!!f.matcap,Ot=!!nt,Xt=!!f.aoMap,te=!!f.lightMap,zt=!!f.bumpMap&&f.wireframe===!1,ae=!!f.normalMap,pe=!!f.displacementMap,Pe=!!f.emissiveMap,ge=!!f.metalnessMap,Ce=!!f.roughnessMap,P=f.anisotropy>0,ye=f.clearcoat>0,Kt=f.dispersion>0,S=f.retroreflectivity>0,c=f.iridescence>0,N=f.sheen>0,B=f.transmission>0,W=P&&!!f.anisotropyMap,it=ye&&!!f.clearcoatMap,st=ye&&!!f.clearcoatNormalMap,Y=ye&&!!f.clearcoatRoughnessMap,q=c&&!!f.iridescenceMap,rt=c&&!!f.iridescenceThicknessMap,_t=N&&!!f.sheenColorMap,At=N&&!!f.sheenRoughnessMap,at=!!f.specularMap,yt=!!f.specularColorMap,Et=!!f.specularIntensityMap,Dt=B&&!!f.transmissionMap,R=B&&!!f.thicknessMap,ot=!!f.gradientMap,K=!!f.alphaMap,gt=f.alphaTest>0,ct=!!f.alphaHash,tt=!!f.extensions,St=tn;f.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(St=i.toneMapping);let xt={shaderID:$,shaderType:f.type,shaderName:f.name,vertexShader:$t,fragmentShader:Ht,defines:f.defines,customVertexShaderID:Zt,customFragmentShaderID:Z,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:C,batching:ut,batchingColor:ut&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ft,matcap:ue,envMap:Ot,envMapMode:Ot&&nt.mapping,envMapCubeUVHeight:X,aoMap:Xt,lightMap:te,bumpMap:zt,normalMap:ae,displacementMap:pe,emissiveMap:Pe,normalMapObjectSpace:ae&&f.normalMapType===Yg,normalMapTangentSpace:ae&&f.normalMapType===ca,packedNormalMap:ae&&f.normalMapType===ca&&tu(f.normalMap.format),metalnessMap:ge,roughnessMap:Ce,anisotropy:P,anisotropyMap:W,clearcoat:ye,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Y,dispersion:Kt,retroreflection:S,iridescence:c,iridescenceMap:q,iridescenceThicknessMap:rt,sheen:N,sheenColorMap:_t,sheenRoughnessMap:At,specularMap:at,specularColorMap:yt,specularIntensityMap:Et,transmission:B,transmissionMap:Dt,thicknessMap:R,gradientMap:ot,opaque:f.transparent===!1&&f.blending===Di&&f.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:ct,combine:f.combine,mapUv:Ft&&m(f.map.channel),aoMapUv:Xt&&m(f.aoMap.channel),lightMapUv:te&&m(f.lightMap.channel),bumpMapUv:zt&&m(f.bumpMap.channel),normalMapUv:ae&&m(f.normalMap.channel),displacementMapUv:pe&&m(f.displacementMap.channel),emissiveMapUv:Pe&&m(f.emissiveMap.channel),metalnessMapUv:ge&&m(f.metalnessMap.channel),roughnessMapUv:Ce&&m(f.roughnessMap.channel),anisotropyMapUv:W&&m(f.anisotropyMap.channel),clearcoatMapUv:it&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(f.sheenRoughnessMap.channel),specularMapUv:at&&m(f.specularMap.channel),specularColorMapUv:yt&&m(f.specularColorMap.channel),specularIntensityMapUv:Et&&m(f.specularIntensityMap.channel),transmissionMapUv:Dt&&m(f.transmissionMap.channel),thicknessMapUv:R&&m(f.thicknessMap.channel),alphaMapUv:K&&m(f.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ae||P),vertexNormals:!!V.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Ft||K),fog:!!L,useFog:f.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||V.attributes.normal===void 0&&ae===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:Ft&&f.map.isVideoTexture===!0&&Gt.getTransfer(f.map.colorSpace)===jt,decodeVideoTextureEmissive:Pe&&f.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(f.emissiveMap.colorSpace)===jt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ve,flipSided:f.side===Re,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:tt&&f.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&f.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return xt.vertexUv1s=g.has(1),xt.vertexUv2s=g.has(2),xt.vertexUv3s=g.has(3),g.clear(),xt}function d(f){let b=[];if(f.shaderID?b.push(f.shaderID):(b.push(f.customVertexShaderID),b.push(f.customFragmentShaderID)),f.defines!==void 0)for(let D in f.defines)b.push(D),b.push(f.defines[D]);return f.isRawShaderMaterial===!1&&(I(b,f),M(b,f),b.push(i.outputColorSpace)),b.push(f.customProgramCacheKey),b.join()}function I(f,b){f.push(b.precision),f.push(b.outputColorSpace),f.push(b.envMapMode),f.push(b.envMapCubeUVHeight),f.push(b.mapUv),f.push(b.alphaMapUv),f.push(b.lightMapUv),f.push(b.aoMapUv),f.push(b.bumpMapUv),f.push(b.normalMapUv),f.push(b.displacementMapUv),f.push(b.emissiveMapUv),f.push(b.metalnessMapUv),f.push(b.roughnessMapUv),f.push(b.anisotropyMapUv),f.push(b.clearcoatMapUv),f.push(b.clearcoatNormalMapUv),f.push(b.clearcoatRoughnessMapUv),f.push(b.iridescenceMapUv),f.push(b.iridescenceThicknessMapUv),f.push(b.sheenColorMapUv),f.push(b.sheenRoughnessMapUv),f.push(b.specularMapUv),f.push(b.specularColorMapUv),f.push(b.specularIntensityMapUv),f.push(b.transmissionMapUv),f.push(b.thicknessMapUv),f.push(b.combine),f.push(b.fogExp2),f.push(b.sizeAttenuation),f.push(b.morphTargetsCount),f.push(b.morphAttributeCount),f.push(b.numSunLights),f.push(b.numDirLights),f.push(b.numPointLights),f.push(b.numSpotLights),f.push(b.numSpotLightMaps),f.push(b.numHemiLights),f.push(b.numRectAreaLights),f.push(b.numSunLightShadows),f.push(b.numDirLightShadows),f.push(b.numPointLightShadows),f.push(b.numSpotLightShadows),f.push(b.numSpotLightShadowsWithMaps),f.push(b.numLightProbes),f.push(b.shadowMapType),f.push(b.toneMapping),f.push(b.numClippingPlanes),f.push(b.numClipIntersection),f.push(b.depthPacking)}function M(f,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),f.push(a.mask)}function w(f){let b=u[f.type],D;if(b){let U=pn[b];D=oA.clone(U.uniforms)}else D=f.uniforms;return D}function x(f,b){let D=l.get(b);return D!==void 0?++D.usedTimes:(D=new Qh(i,b,f,s),A.push(D),l.set(b,D)),D}function v(f){if(--f.usedTimes===0){let b=A.indexOf(f);A[b]=A[A.length-1],A.pop(),l.delete(f.cacheKey),f.destroy()}}function _(f){o.remove(f)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:d,getUniforms:w,acquireProgram:x,releaseProgram:v,releaseShaderCache:_,programs:A,dispose:E}}function nu(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,g){i.get(a)[o]=g}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function EA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wA(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(C){let u=0;return C.isInstancedMesh&&(u+=2),C.isSkinnedMesh&&(u+=1),u}function o(C,u,m,y,d,I){let M=i[t];return M===void 0?(M={id:C.id,object:C,geometry:u,material:m,materialVariant:a(C),groupOrder:y,renderOrder:C.renderOrder,z:d,group:I},i[t]=M):(M.id=C.id,M.object=C,M.geometry=u,M.material=m,M.materialVariant=a(C),M.groupOrder=y,M.renderOrder=C.renderOrder,M.z=d,M.group=I),t++,M}function g(C,u,m,y,d,I,M){M.reversedDepth===!0&&(d=-d);let w=o(C,u,m,y,d,I);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function A(C,u,m,y,d,I){let M=o(C,u,m,y,d,I);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function l(C,u){e.length>1&&e.sort(C||iu),n.length>1&&n.sort(u||EA),s.length>1&&s.sort(u||EA)}function h(){for(let C=t,u=i.length;C<u;C++){let m=i[C];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:g,unshift:A,finish:h,sort:l}}function su(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wA,i.set(n,[a])):s>=r.length?(a=new wA,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ru(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Ut};break;case"SpotLight":e={position:new G,direction:new G,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function au(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ou=0;function gu(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Au(i){let t=new ru,e=au(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)n.probe.push(new G);let s=new G,r=new ie,a=new ie;function o(A){let l=0,h=0,C=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let u=0,m=0,y=0,d=0,I=0,M=0,w=0,x=0,v=0,_=0,E=0,f=0,b=0,D=0;A.sort(gu);for(let z=0,H=A.length;z<H;z++){let L=A[z],V=L.color,j=L.intensity,J=L.distance,nt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Jn?nt=L.shadow.map.texture:nt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)l+=V.r*j,h+=V.g*j,C+=V.b*j;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],j);D++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,et=e.get(L);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=nt;let bt=$.getViewportCount();for(let Mt=0;Mt<bt;Mt++)n.sunShadowMatrix[y+Mt]=$.getMatrix(Mt),n.sunShadowCascade[y+Mt]=$._cascadeData[Mt];y+=bt,m++}n.sun[u]=X,u++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,et=e.get(L);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[d]=et,n.directionalShadowMap[d]=nt,n.directionalShadowMatrix[d]=L.shadow.matrix,v++}n.directional[d]=X,d++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(V).multiplyScalar(j),X.distance=J,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[M]=X;let $=L.shadow;if(L.map&&(n.spotLightMap[f]=L.map,f++,$.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[M]=$.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=nt,E++}M++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(V).multiplyScalar(j),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=X,w++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let $=L.shadow,et=e.get(L);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[I]=et,n.pointShadowMap[I]=nt,n.pointShadowMatrix[I]=L.shadow.matrix,_++}n.point[I]=X,I++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(j),X.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[x]=X,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=C;let U=n.hash;(U.sunLength!==u||U.directionalLength!==d||U.pointLength!==I||U.spotLength!==M||U.rectAreaLength!==w||U.hemiLength!==x||U.numSunShadows!==m||U.numDirectionalShadows!==v||U.numPointShadows!==_||U.numSpotShadows!==E||U.numSpotMaps!==f||U.numLightProbes!==D)&&(n.sun.length=u,n.directional.length=d,n.spot.length=M,n.rectArea.length=w,n.point.length=I,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.pointShadowMatrix.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+f-b,n.spotLightMap.length=f,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,U.sunLength=u,U.directionalLength=d,U.pointLength=I,U.spotLength=M,U.rectAreaLength=w,U.hemiLength=x,U.numSunShadows=m,U.numDirectionalShadows=v,U.numPointShadows=_,U.numSpotShadows=E,U.numSpotMaps=f,U.numLightProbes=D,n.version=ou++)}function g(A,l){let h=0,C=0,u=0,m=0,y=0,d=0,I=l.matrixWorldInverse;for(let M=0,w=A.length;M<w;M++){let x=A[M];if(x.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(I),h++}else if(x.isDirectionalLight){let v=n.directional[C];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(I),C++}else if(x.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(I),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(I),m++}else if(x.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(I),a.identity(),r.copy(x.matrixWorld),r.premultiply(I),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(I),u++}else if(x.isHemisphereLight){let v=n.hemi[d];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(I),d++}}}return{setup:o,setupView:g,state:n}}function TA(i){let t=new Au(i),e=[],n=[],s=[];function r(C){h.camera=C,e.length=0,n.length=0,s.length=0}function a(C){e.push(C)}function o(C){n.push(C)}function g(C){s.push(C)}function A(){t.setup(e)}function l(C){t.setupView(e,C)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:A,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:g}}function Cu(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new TA(i),t.set(s,[o])):r>=a.length?(o=new TA(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Iu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cu=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],hu=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],RA=new ie,vs=new G,Lo=new G;function uu(i,t,e){let n=new Ti,s=new kt,r=new kt,a=new oe,o=new Cr,g=new Ir,A={},l=e.maxTextureSize,h={[un]:Re,[Re]:un,[Ve]:Ve},C=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Iu,fragmentShader:lu}),u=C.clone();u.defines.HORIZONTAL_PASS=1;let m=new cn;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new he(m,C),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let I=this.type;this.render=function(_,E,f){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;this.type===Sr&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let b=i.getRenderTarget(),D=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=I!==this.type;H&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=_.length;L<V;L++){let j=_[L],J=j.shadow;if(J===void 0){wt("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let nt=J.getFrameExtents();s.multiply(nt),r.copy(J.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/nt.x),s.x=r.x*nt.x,J.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/nt.y),s.y=r.y*nt.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Pi){if(j.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ne(s.x,s.y,{format:Jn,type:nn,minFilter:_e,magFilter:_e,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new Gn(s.x,s.y,Xe),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=An,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ce,J.map.depthTexture.magFilter=ce}else j.isPointLight?(J.map=new ma(s.x),J.map.depthTexture=new gr(s.x,en)):(J.map=new Ne(s.x,s.y),J.map.depthTexture=new Gn(s.x,s.y,en)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=An,this.type===Cs?(J.map.depthTexture.compareFunction=X?ua:ha,J.map.depthTexture.minFilter=_e,J.map.depthTexture.magFilter=_e):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ce,J.map.depthTexture.magFilter=ce);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let $=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,f);for(let et=0;et<$;et++){let bt=J.getCamera(et);if(j.isPointLight){let Mt=J.camera,$t=J.matrix,Ht=j.distance||Mt.far;Ht!==Mt.far&&(Mt.far=Ht,Mt.updateProjectionMatrix()),vs.setFromMatrixPosition(j.matrixWorld),Mt.position.copy(vs),Lo.copy(Mt.position),Lo.add(cu[et]),Mt.up.copy(hu[et]),Mt.lookAt(Lo),Mt.updateMatrixWorld(),$t.makeTranslation(-vs.x,-vs.y,-vs.z),RA.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(RA,Mt.coordinateSystem,Mt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,et),i.clear();else{et===0&&(i.setRenderTarget(J.map),i.clear());let Mt=J.getViewport(et);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),z.viewport(a)}n=J.getFrustum(et),x(E,f,bt,j,this.type)}J.isPointLightShadow!==!0&&this.type===Pi&&M(J,f),J.needsUpdate=!1}I=this.type,d.needsUpdate=!1,i.setRenderTarget(b,D,U)};function M(_,E){let f=t.update(y);C.defines.VSM_SAMPLES!==_.blurSamples&&(C.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,C.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null?_.mapPass=new Ne(s.x,s.y,{format:Jn,type:nn}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),C.uniforms.shadow_pass.value=_.map.depthTexture,C.uniforms.resolution.value.set(_.map.width,_.map.height),C.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(E,null,f,C,y,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(E,null,f,u,y,null)}function w(_,E,f,b){let D=null,U=f.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(U!==void 0)D=U;else if(D=f.isPointLight===!0?g:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let z=D.uuid,H=E.uuid,L=A[z];L===void 0&&(L={},A[z]=L);let V=L[H];V===void 0&&(V=D.clone(),L[H]=V,E.addEventListener("dispose",v)),D=V}if(D.visible=E.visible,D.wireframe=E.wireframe,b===Pi?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,f.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=i.properties.get(D);z.light=f}return D}function x(_,E,f,b,D){if(_.visible===!1)return;if(_.layers.test(E.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&D===Pi)&&(!_.frustumCulled||_.intersectsFrustum(n))){_.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,_.matrixWorld);let H=t.update(_),L=_.material;if(Array.isArray(L)){let V=H.groups;for(let j=0,J=V.length;j<J;j++){let nt=V[j],X=L[nt.materialIndex];if(X&&X.visible){let $=w(_,X,b,D);_.onBeforeShadow(i,_,E,f,H,$,nt),i.renderBufferDirect(f,null,H,$,_,nt),_.onAfterShadow(i,_,E,f,H,$,nt)}}}else if(L.visible){let V=w(_,L,b,D);_.onBeforeShadow(i,_,E,f,H,V,null),i.renderBufferDirect(f,null,H,V,_,null),_.onAfterShadow(i,_,E,f,H,V,null)}}let z=_.children;for(let H=0,L=z.length;H<L;H++)x(z[H],E,f,b,D)}function v(_){_.target.removeEventListener("dispose",v);for(let f in A){let b=A[f],D=_.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function du(i,t){function e(){let R=!1,ot=new oe,K=null,gt=new oe(0,0,0,0);return{setMask:function(ct){K!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){R=ct},setClear:function(ct,tt,St,xt,ee){ee===!0&&(ct*=xt,tt*=xt,St*=xt),ot.set(ct,tt,St,xt),gt.equals(ot)===!1&&(i.clearColor(ct,tt,St,xt),gt.copy(ot))},reset:function(){R=!1,K=null,gt.set(-1,0,0,0)}}}function n(){let R=!1,ot=!1,K=null,gt=null,ct=null;return{setReversed:function(tt){if(ot!==tt){let St=t.get("EXT_clip_control");tt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let xt=ct;ct=null,this.setClear(xt)}},getReversed:function(){return ot},setTest:function(tt){tt?Q(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(tt){K!==tt&&!R&&(i.depthMask(tt),K=tt)},setFunc:function(tt){if(ot&&(tt=rA[tt]),gt!==tt){switch(tt){case Ys:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case js:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Ks:i.depthFunc(i.EQUAL);break;case qs:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case $s:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=tt}},setLocked:function(tt){R=tt},setClear:function(tt){ct!==tt&&(ct=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){R=!1,K=null,gt=null,ct=null,ot=!1}}}function s(){let R=!1,ot=null,K=null,gt=null,ct=null,tt=null,St=null,xt=null,ee=null;return{setTest:function(Yt){R||(Yt?Q(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Yt){ot!==Yt&&!R&&(i.stencilMask(Yt),ot=Yt)},setFunc:function(Yt,Je,sn){(K!==Yt||gt!==Je||ct!==sn)&&(i.stencilFunc(Yt,Je,sn),K=Yt,gt=Je,ct=sn)},setOp:function(Yt,Je,sn){(tt!==Yt||St!==Je||xt!==sn)&&(i.stencilOp(Yt,Je,sn),tt=Yt,St=Je,xt=sn)},setLocked:function(Yt){R=Yt},setClear:function(Yt){ee!==Yt&&(i.clearStencil(Yt),ee=Yt)},reset:function(){R=!1,ot=null,K=null,gt=null,ct=null,tt=null,St=null,xt=null,ee=null}}}let r=new e,a=new n,o=new s,g=new WeakMap,A=new WeakMap,l={},h={},C={},u=new WeakMap,m=[],y=null,d=!1,I=null,M=null,w=null,x=null,v=null,_=null,E=null,f=new Ut(0,0,0),b=0,D=!1,U=null,z=null,H=null,L=null,V=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=nt>=2);let $=null,et={},bt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),$t=new oe().fromArray(bt),Ht=new oe().fromArray(Mt);function Zt(R,ot,K,gt){let ct=new Uint8Array(4),tt=i.createTexture();i.bindTexture(R,tt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<K;St++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ot+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return tt}let Z={};Z[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Mi),zt(!1),ae(eo),Q(i.CULL_FACE),Xt(dn);function Q(R){l[R]!==!0&&(i.enable(R),l[R]=!0)}function ft(R){l[R]!==!1&&(i.disable(R),l[R]=!1)}function Pt(R,ot){return C[R]!==ot?(i.bindFramebuffer(R,ot),C[R]=ot,R===i.DRAW_FRAMEBUFFER&&(C[i.FRAMEBUFFER]=ot),R===i.FRAMEBUFFER&&(C[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function ut(R,ot){let K=m,gt=!1;if(R){K=u.get(ot),K===void 0&&(K=[],u.set(ot,K));let ct=R.textures;if(K.length!==ct.length||K[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,St=ct.length;tt<St;tt++)K[tt]=i.COLOR_ATTACHMENT0+tt;K.length=ct.length,gt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,gt=!0);gt&&i.drawBuffers(K)}function Ft(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let ue={[ii]:i.FUNC_ADD,[bg]:i.FUNC_SUBTRACT,[Eg]:i.FUNC_REVERSE_SUBTRACT};ue[wg]=i.MIN,ue[Tg]=i.MAX;let Ot={[Rg]:i.ZERO,[Pg]:i.ONE,[Dg]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[Bg]:i.SRC_ALPHA_SATURATE,[Fg]:i.DST_COLOR,[Ng]:i.DST_ALPHA,[Lg]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[Og]:i.ONE_MINUS_DST_COLOR,[Ug]:i.ONE_MINUS_DST_ALPHA,[zg]:i.CONSTANT_COLOR,[Gg]:i.ONE_MINUS_CONSTANT_COLOR,[Vg]:i.CONSTANT_ALPHA,[kg]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(R,ot,K,gt,ct,tt,St,xt,ee,Yt){if(R===dn){d===!0&&(ft(i.BLEND),d=!1);return}if(d===!1&&(Q(i.BLEND),d=!0),R!==Sg){if(R!==I||Yt!==D){if((M!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),M=ii,v=ii),Yt)switch(R){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Tt("WebGLState: Invalid blending: ",R);break}else switch(R){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case io:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case so:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",R);break}w=null,x=null,_=null,E=null,f.set(0,0,0),b=0,I=R,D=Yt}return}ct=ct||ot,tt=tt||K,St=St||gt,(ot!==M||ct!==v)&&(i.blendEquationSeparate(ue[ot],ue[ct]),M=ot,v=ct),(K!==w||gt!==x||tt!==_||St!==E)&&(i.blendFuncSeparate(Ot[K],Ot[gt],Ot[tt],Ot[St]),w=K,x=gt,_=tt,E=St),(xt.equals(f)===!1||ee!==b)&&(i.blendColor(xt.r,xt.g,xt.b,ee),f.copy(xt),b=ee),I=R,D=!1}function te(R,ot){R.side===Ve?ft(i.CULL_FACE):Q(i.CULL_FACE);let K=R.side===Re;ot&&(K=!K),zt(K),R.blending===Di&&R.transparent===!1?Xt(dn):Xt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let gt=R.stencilWrite;o.setTest(gt),gt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function ae(R){R!==yg?(Q(i.CULL_FACE),R!==z&&(R===eo?i.cullFace(i.BACK):R===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),z=R}function pe(R){R!==H&&(J&&i.lineWidth(R),H=R)}function Pe(R,ot,K){R?(Q(i.POLYGON_OFFSET_FILL),(L!==ot||V!==K)&&(L=ot,V=K,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,K))):ft(i.POLYGON_OFFSET_FILL)}function ge(R){R?Q(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ce(R){R===void 0&&(R=i.TEXTURE0+j-1),$!==R&&(i.activeTexture(R),$=R)}function P(R,ot,K){K===void 0&&($===null?K=i.TEXTURE0+j-1:K=$);let gt=et[K];gt===void 0&&(gt={type:void 0,texture:void 0},et[K]=gt),(gt.type!==R||gt.texture!==ot)&&($!==K&&(i.activeTexture(K),$=K),i.bindTexture(R,ot||Z[R]),gt.type=R,gt.texture=ot)}function ye(){let R=et[$];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(R){Tt("WebGLState:",R)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(R){Tt("WebGLState:",R)}}function c(){try{i.texSubImage2D(...arguments)}catch(R){Tt("WebGLState:",R)}}function N(){try{i.texSubImage3D(...arguments)}catch(R){Tt("WebGLState:",R)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Tt("WebGLState:",R)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Tt("WebGLState:",R)}}function it(){try{i.texStorage2D(...arguments)}catch(R){Tt("WebGLState:",R)}}function st(){try{i.texStorage3D(...arguments)}catch(R){Tt("WebGLState:",R)}}function Y(){try{i.texImage2D(...arguments)}catch(R){Tt("WebGLState:",R)}}function q(){try{i.texImage3D(...arguments)}catch(R){Tt("WebGLState:",R)}}function rt(R){return h[R]!==void 0?h[R]:i.getParameter(R)}function _t(R,ot){h[R]!==ot&&(i.pixelStorei(R,ot),h[R]=ot)}function At(R){$t.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$t.copy(R))}function at(R){Ht.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ht.copy(R))}function yt(R,ot){let K=A.get(ot);K===void 0&&(K=new WeakMap,A.set(ot,K));let gt=K.get(R);gt===void 0&&(gt=i.getUniformBlockIndex(ot,R.name),K.set(R,gt))}function Et(R,ot){let gt=A.get(ot).get(R);g.get(ot)!==gt&&(i.uniformBlockBinding(ot,gt,R.__bindingPointIndex),g.set(ot,gt))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},$=null,et={},C={},u=new WeakMap,m=[],y=null,d=!1,I=null,M=null,w=null,x=null,v=null,_=null,E=null,f=new Ut(0,0,0),b=0,D=!1,U=null,z=null,H=null,L=null,V=null,$t.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ft,bindFramebuffer:Pt,drawBuffers:ut,useProgram:Ft,setBlending:Xt,setMaterial:te,setFlipSided:zt,setCullFace:ae,setLineWidth:pe,setPolygonOffset:Pe,setScissorTest:ge,activeTexture:Ce,bindTexture:P,unbindTexture:ye,compressedTexImage2D:Kt,compressedTexImage3D:S,texImage2D:Y,texImage3D:q,pixelStorei:_t,getParameter:rt,updateUBOMapping:yt,uniformBlockBinding:Et,texStorage2D:it,texStorage3D:st,texSubImage2D:c,texSubImage3D:N,compressedTexSubImage2D:B,compressedTexSubImage3D:W,scissor:At,viewport:at,reset:Dt}}function fu(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new kt,l=new WeakMap,h=new Set,C,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,c){return m?new OffscreenCanvas(S,c):ji("canvas")}function d(S,c,N){let B=1,W=Kt(S);if((W.width>N||W.height>N)&&(B=N/Math.max(W.width,W.height)),B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let it=Math.floor(B*W.width),st=Math.floor(B*W.height);C===void 0&&(C=y(it,st));let Y=c?y(it,st):C;return Y.width=it,Y.height=st,Y.getContext("2d").drawImage(S,0,0,it,st),wt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+it+"x"+st+")."),Y}else return"data"in S&&wt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function I(S){return S.generateMipmaps}function M(S){i.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(S,c,N,B,W,it=!1){if(S!==null){if(i[S]!==void 0)return i[S];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st;B&&(st=t.get("EXT_texture_norm16"),st||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=c;if(c===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8),N===i.UNSIGNED_SHORT&&st&&(Y=st.R16_EXT),N===i.SHORT&&st&&(Y=st.R16_SNORM_EXT)),c===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),c===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8),N===i.UNSIGNED_SHORT&&st&&(Y=st.RG16_EXT),N===i.SHORT&&st&&(Y=st.RG16_SNORM_EXT)),c===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),c===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),c===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),c===i.RGB&&(N===i.UNSIGNED_SHORT&&st&&(Y=st.RGB16_EXT),N===i.SHORT&&st&&(Y=st.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),c===i.RGBA){let q=it?Ji:Gt.getTransfer(W);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=q===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&st&&(Y=st.RGBA16_EXT),N===i.SHORT&&st&&(Y=st.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(S,c){let N;return S?c===null||c===en||c===Ni?N=i.DEPTH24_STENCIL8:c===Xe?N=i.DEPTH32F_STENCIL8:c===Li&&(N=i.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===en||c===Ni?N=i.DEPTH_COMPONENT24:c===Xe?N=i.DEPTH_COMPONENT32F:c===Li&&(N=i.DEPTH_COMPONENT16),N}function _(S,c){return I(S)===!0||S.isFramebufferTexture&&S.minFilter!==ce&&S.minFilter!==_e?Math.log2(Math.max(c.width,c.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?c.mipmaps.length:1}function E(S){let c=S.target;c.removeEventListener("dispose",E),b(c),c.isVideoTexture&&l.delete(c),c.isHTMLTexture&&h.delete(c)}function f(S){let c=S.target;c.removeEventListener("dispose",f),U(c)}function b(S){let c=n.get(S);if(c.__webglInit===void 0)return;let N=S.source,B=u.get(N);if(B){let W=B[c.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(S),Object.keys(B).length===0&&u.delete(N)}n.remove(S)}function D(S){let c=n.get(S);i.deleteTexture(c.__webglTexture);let N=S.source,B=u.get(N);delete B[c.__cacheKey],a.memory.textures--}function U(S){let c=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(c.__webglFramebuffer[B]))for(let W=0;W<c.__webglFramebuffer[B].length;W++)i.deleteFramebuffer(c.__webglFramebuffer[B][W]);else i.deleteFramebuffer(c.__webglFramebuffer[B]);c.__webglDepthbuffer&&i.deleteRenderbuffer(c.__webglDepthbuffer[B])}else{if(Array.isArray(c.__webglFramebuffer))for(let B=0;B<c.__webglFramebuffer.length;B++)i.deleteFramebuffer(c.__webglFramebuffer[B]);else i.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&i.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&i.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let B=0;B<c.__webglColorRenderbuffer.length;B++)c.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(c.__webglColorRenderbuffer[B]);c.__webglDepthRenderbuffer&&i.deleteRenderbuffer(c.__webglDepthRenderbuffer)}let N=S.textures;for(let B=0,W=N.length;B<W;B++){let it=n.get(N[B]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(N[B])}n.remove(S)}let z=0;function H(){z=0}function L(){return z}function V(S){z=S}function j(){let S=z;return S>=s.maxTextures&&wt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,S}function J(S){let c=[];return c.push(S.wrapS),c.push(S.wrapT),c.push(S.wrapR||0),c.push(S.magFilter),c.push(S.minFilter),c.push(S.anisotropy),c.push(S.internalFormat),c.push(S.format),c.push(S.type),c.push(S.generateMipmaps),c.push(S.premultiplyAlpha),c.push(S.flipY),c.push(S.unpackAlignment),c.push(S.colorSpace),c.join()}function nt(S,c){let N=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let B=S.image;if(B===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(N,S,c);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+c)}function X(S,c){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){ft(N,S,c);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+c)}function $(S,c){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){ft(N,S,c);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+c)}function et(S,c){let N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Pt(N,S,c);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+c)}let bt={[tr]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[er]:i.MIRRORED_REPEAT},Mt={[ce]:i.NEAREST,[Xg]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[_e]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},$t={[jg]:i.NEVER,[tA]:i.ALWAYS,[Kg]:i.LESS,[ha]:i.LEQUAL,[qg]:i.EQUAL,[ua]:i.GEQUAL,[Qg]:i.GREATER,[$g]:i.NOTEQUAL};function Ht(S,c){if(c.type===Xe&&t.has("OES_texture_float_linear")===!1&&(c.magFilter===_e||c.magFilter===Tr||c.magFilter===ls||c.magFilter===Zn||c.minFilter===_e||c.minFilter===Tr||c.minFilter===ls||c.minFilter===Zn)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,bt[c.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,bt[c.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,bt[c.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Mt[c.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Mt[c.minFilter]),c.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,$t[c.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===ce||c.minFilter!==ls&&c.minFilter!==Zn||c.type===Xe&&t.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||n.get(c).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,s.getMaxAnisotropy())),n.get(c).__currentAnisotropy=c.anisotropy}}}function Zt(S,c){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,c.addEventListener("dispose",E));let B=c.source,W=u.get(B);W===void 0&&(W={},u.set(B,W));let it=J(c);if(it!==S.__cacheKey){W[it]===void 0&&(W[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),W[it].usedTimes++;let st=W[S.__cacheKey];st!==void 0&&(W[S.__cacheKey].usedTimes--,st.usedTimes===0&&D(c)),S.__cacheKey=it,S.__webglTexture=W[it].texture}return N}function Z(S,c,N){return Math.floor(Math.floor(S/N)/c)}function Q(S,c,N,B){let it=S.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,c.width,c.height,N,B,c.data);else{it.sort((_t,At)=>_t.start-At.start);let st=0;for(let _t=1;_t<it.length;_t++){let At=it[st],at=it[_t],yt=At.start+At.count,Et=Z(at.start,c.width,4),Dt=Z(At.start,c.width,4);at.start<=yt+1&&Et===Dt&&Z(at.start+at.count-1,c.width,4)===Et?At.count=Math.max(At.count,at.start+at.count-At.start):(++st,it[st]=at)}it.length=st+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),q=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,c.width);for(let _t=0,At=it.length;_t<At;_t++){let at=it[_t],yt=Math.floor(at.start/4),Et=Math.ceil(at.count/4),Dt=yt%c.width,R=Math.floor(yt/c.width),ot=Et,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,Dt,R,ot,K,N,B,c.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,q),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function ft(S,c,N){let B=i.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),c.isData3DTexture&&(B=i.TEXTURE_3D);let W=Zt(S,c),it=c.source;e.bindTexture(B,S.__webglTexture,i.TEXTURE0+N);let st=n.get(it);if(it.version!==st.__version||W===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&c.image instanceof ImageBitmap)===!1){let K=Gt.getPrimaries(Gt.workingColorSpace),gt=c.colorSpace===wn?null:Gt.getPrimaries(c.colorSpace),ct=c.colorSpace===wn||K===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,c.unpackAlignment);let q=d(c.image,!1,s.maxTextureSize);q=ye(c,q);let rt=r.convert(c.format,c.colorSpace),_t=r.convert(c.type),At=x(c.internalFormat,rt,_t,c.normalized,c.colorSpace,c.isVideoTexture);Ht(B,c);let at,yt=c.mipmaps,Et=c.isVideoTexture!==!0,Dt=st.__version===void 0||W===!0,R=it.dataReady,ot=_(c,q);if(c.isDepthTexture)At=v(c.format===Yn,c.type),Dt&&(Et?e.texStorage2D(i.TEXTURE_2D,1,At,q.width,q.height):e.texImage2D(i.TEXTURE_2D,0,At,q.width,q.height,0,rt,_t,null));else if(c.isDataTexture)if(yt.length>0){Et&&Dt&&e.texStorage2D(i.TEXTURE_2D,ot,At,yt[0].width,yt[0].height);for(let K=0,gt=yt.length;K<gt;K++)at=yt[K],Et?R&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,rt,_t,at.data):e.texImage2D(i.TEXTURE_2D,K,At,at.width,at.height,0,rt,_t,at.data);c.generateMipmaps=!1}else Et?(Dt&&e.texStorage2D(i.TEXTURE_2D,ot,At,q.width,q.height),R&&Q(c,q,rt,_t)):e.texImage2D(i.TEXTURE_2D,0,At,q.width,q.height,0,rt,_t,q.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){Et&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,At,yt[0].width,yt[0].height,q.depth);for(let K=0,gt=yt.length;K<gt;K++)if(at=yt[K],c.format!==Ze)if(rt!==null)if(Et){if(R)if(c.layerUpdates.size>0){let ct=Eo(at.width,at.height,c.format,c.type);for(let tt of c.layerUpdates){let St=at.data.subarray(tt*ct/at.data.BYTES_PER_ELEMENT,(tt+1)*ct/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,tt,at.width,at.height,1,rt,St)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,q.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,At,at.width,at.height,q.depth,0,at.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,q.depth,rt,_t,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,At,at.width,at.height,q.depth,0,rt,_t,at.data);c.layerUpdates.size>0&&c.clearLayerUpdates()}else{Et&&Dt&&e.texStorage2D(i.TEXTURE_2D,ot,At,yt[0].width,yt[0].height);for(let K=0,gt=yt.length;K<gt;K++)at=yt[K],c.format!==Ze?rt!==null?Et?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,K,At,at.width,at.height,0,at.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?R&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,rt,_t,at.data):e.texImage2D(i.TEXTURE_2D,K,At,at.width,at.height,0,rt,_t,at.data)}else if(c.isDataArrayTexture)if(Et){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,At,q.width,q.height,q.depth),R)if(c.layerUpdates.size>0){let K=Eo(q.width,q.height,c.format,c.type);for(let gt of c.layerUpdates){let ct=q.data.subarray(gt*K/q.data.BYTES_PER_ELEMENT,(gt+1)*K/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,q.width,q.height,1,rt,_t,ct)}c.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,rt,_t,q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,q.width,q.height,q.depth,0,rt,_t,q.data);else if(c.isData3DTexture)Et?(Dt&&e.texStorage3D(i.TEXTURE_3D,ot,At,q.width,q.height,q.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,rt,_t,q.data)):e.texImage3D(i.TEXTURE_3D,0,At,q.width,q.height,q.depth,0,rt,_t,q.data);else if(c.isFramebufferTexture){if(Dt)if(Et)e.texStorage2D(i.TEXTURE_2D,ot,At,q.width,q.height);else{let K=q.width,gt=q.height;for(let ct=0;ct<ot;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,K,gt,0,rt,_t,null),K>>=1,gt>>=1}}else if(c.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),q.parentNode!==K){K.appendChild(q),h.add(c),K.onpaint=gt=>{let ct=gt.changedElements;for(let tt of h)ct.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let ct=i.RGBA,tt=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ct,tt,St,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(Et&&Dt){let K=Kt(yt[0]);e.texStorage2D(i.TEXTURE_2D,ot,At,K.width,K.height)}for(let K=0,gt=yt.length;K<gt;K++)at=yt[K],Et?R&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,rt,_t,at):e.texImage2D(i.TEXTURE_2D,K,At,rt,_t,at);c.generateMipmaps=!1}else if(Et){if(Dt){let K=Kt(q);e.texStorage2D(i.TEXTURE_2D,ot,At,K.width,K.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,_t,q)}else e.texImage2D(i.TEXTURE_2D,0,At,rt,_t,q);I(c)&&M(B),st.__version=it.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function Pt(S,c,N){if(c.image.length!==6)return;let B=Zt(S,c),W=c.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let it=n.get(W);if(W.version!==it.__version||B===!0){e.activeTexture(i.TEXTURE0+N);let st=Gt.getPrimaries(Gt.workingColorSpace),Y=c.colorSpace===wn?null:Gt.getPrimaries(c.colorSpace),q=c.colorSpace===wn||st===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let rt=c.isCompressedTexture||c.image[0].isCompressedTexture,_t=c.image[0]&&c.image[0].isDataTexture,At=[];for(let tt=0;tt<6;tt++)!rt&&!_t?At[tt]=d(c.image[tt],!0,s.maxCubemapSize):At[tt]=_t?c.image[tt].image:c.image[tt],At[tt]=ye(c,At[tt]);let at=At[0],yt=r.convert(c.format,c.colorSpace),Et=r.convert(c.type),Dt=x(c.internalFormat,yt,Et,c.normalized,c.colorSpace),R=c.isVideoTexture!==!0,ot=it.__version===void 0||B===!0,K=W.dataReady,gt=_(c,at);Ht(i.TEXTURE_CUBE_MAP,c);let ct;if(rt){R&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,at.width,at.height);for(let tt=0;tt<6;tt++){ct=At[tt].mipmaps;for(let St=0;St<ct.length;St++){let xt=ct[St];c.format!==Ze?yt!==null?R?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Dt,xt.width,xt.height,0,xt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,xt.width,xt.height,yt,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Dt,xt.width,xt.height,0,yt,Et,xt.data)}}}else{if(ct=c.mipmaps,R&&ot){ct.length>0&&gt++;let tt=Kt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(_t){R?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At[tt].width,At[tt].height,yt,Et,At[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,At[tt].width,At[tt].height,0,yt,Et,At[tt].data);for(let St=0;St<ct.length;St++){let ee=ct[St].image[tt].image;R?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,ee.width,ee.height,yt,Et,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Dt,ee.width,ee.height,0,yt,Et,ee.data)}}else{R?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt,Et,At[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,yt,Et,At[tt]);for(let St=0;St<ct.length;St++){let xt=ct[St];R?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,yt,Et,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Dt,yt,Et,xt.image[tt])}}}I(c)&&M(i.TEXTURE_CUBE_MAP),it.__version=W.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function ut(S,c,N,B,W,it){let st=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),q=x(N.internalFormat,st,Y,N.normalized,N.colorSpace),rt=n.get(c),_t=n.get(N);if(_t.__renderTarget=c,!rt.__hasExternalTextures){let At=Math.max(1,c.width>>it),at=Math.max(1,c.height>>it);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,it,q,At,at,c.depth,0,st,Y,null):e.texImage2D(W,it,q,At,at,0,st,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Ce(c)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,W,_t.__webglTexture,0,ge(c)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,W,_t.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(S,c,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),c.depthBuffer){let B=c.depthTexture,W=B&&B.isDepthTexture?B.type:null,it=v(c.stencilBuffer,W),st=c.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(c)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(c),it,c.width,c.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(c),it,c.width,c.height):i.renderbufferStorage(i.RENDERBUFFER,it,c.width,c.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,S)}else{let B=c.textures;for(let W=0;W<B.length;W++){let it=B[W],st=r.convert(it.format,it.colorSpace),Y=r.convert(it.type),q=x(it.internalFormat,st,Y,it.normalized,it.colorSpace);Ce(c)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(c),q,c.width,c.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(c),q,c.width,c.height):i.renderbufferStorage(i.RENDERBUFFER,q,c.width,c.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(S,c,N){let B=c.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(c.depthTexture);if(W.__renderTarget=c,(!W.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),B){if(W.__webglInit===void 0&&(W.__webglInit=!0,c.depthTexture.addEventListener("dispose",E)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,c.depthTexture);let rt=r.convert(c.depthTexture.format),_t=r.convert(c.depthTexture.type),At;c.depthTexture.format===An?At=i.DEPTH_COMPONENT24:c.depthTexture.format===Yn&&(At=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,At,c.width,c.height,0,rt,_t,null)}}else nt(c.depthTexture,0);let it=W.__webglTexture,st=ge(c),Y=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,q=c.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(c.depthTexture.format===An)Ce(c)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Y,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,q,Y,it,0);else if(c.depthTexture.format===Yn)Ce(c)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Y,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,q,Y,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(S){let c=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==S.depthTexture){let B=S.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),B){let W=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,B.removeEventListener("dispose",W)};B.addEventListener("dispose",W),c.__depthDisposeCallback=W}c.__boundDepthTexture=B}if(S.depthTexture&&!c.__autoAllocateDepthBuffer)if(N)for(let B=0;B<6;B++)ue(c.__webglFramebuffer[B],S,B);else{let B=S.texture.mipmaps;B&&B.length>0?ue(c.__webglFramebuffer[0],S,0):ue(c.__webglFramebuffer,S,0)}else if(N){c.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,c.__webglFramebuffer[B]),c.__webglDepthbuffer[B]===void 0)c.__webglDepthbuffer[B]=i.createRenderbuffer(),Ft(c.__webglDepthbuffer[B],S,!1);else{let W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=c.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}else{let B=S.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(i.FRAMEBUFFER,c.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=i.createRenderbuffer(),Ft(c.__webglDepthbuffer,S,!1);else{let W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=c.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(S,c,N){let B=n.get(S);c!==void 0&&ut(B.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ot(S)}function te(S){let c=S.texture,N=n.get(S),B=n.get(c);S.addEventListener("dispose",f);let W=S.textures,it=S.isWebGLCubeRenderTarget===!0,st=W.length>1;if(st||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=c.version,a.memory.textures++),it){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(c.mipmaps&&c.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let q=0;q<c.mipmaps.length;q++)N.__webglFramebuffer[Y][q]=i.createFramebuffer()}else N.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<c.mipmaps.length;Y++)N.__webglFramebuffer[Y]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(st)for(let Y=0,q=W.length;Y<q;Y++){let rt=n.get(W[Y]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Ce(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let q=W[Y];N.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let rt=r.convert(q.format,q.colorSpace),_t=r.convert(q.type),At=x(q.internalFormat,rt,_t,q.normalized,q.colorSpace,S.isXRRenderTarget===!0),at=ge(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,At,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,c);for(let Y=0;Y<6;Y++)if(c.mipmaps&&c.mipmaps.length>0)for(let q=0;q<c.mipmaps.length;q++)ut(N.__webglFramebuffer[Y][q],S,c,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,q);else ut(N.__webglFramebuffer[Y],S,c,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);I(c)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Y=0,q=W.length;Y<q;Y++){let rt=W[Y],_t=n.get(rt),At=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(At=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,_t.__webglTexture),Ht(At,rt),ut(N.__webglFramebuffer,S,rt,i.COLOR_ATTACHMENT0+Y,At,0),I(rt)&&M(At)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Y=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,B.__webglTexture),Ht(Y,c),c.mipmaps&&c.mipmaps.length>0)for(let q=0;q<c.mipmaps.length;q++)ut(N.__webglFramebuffer[q],S,c,i.COLOR_ATTACHMENT0,Y,q);else ut(N.__webglFramebuffer,S,c,i.COLOR_ATTACHMENT0,Y,0);I(c)&&M(Y),e.unbindTexture()}S.depthBuffer&&Ot(S)}function zt(S){let c=S.textures;for(let N=0,B=c.length;N<B;N++){let W=c[N];if(I(W)){let it=w(S),st=n.get(W).__webglTexture;e.bindTexture(it,st),M(it),e.unbindTexture()}}}let ae=[],pe=[];function Pe(S){if(S.samples>0){if(Ce(S)===!1){let c=S.textures,N=S.width,B=S.height,W=i.COLOR_BUFFER_BIT,it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(S),Y=c.length>1;if(Y)for(let rt=0;rt<c.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let q=S.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<c.length;rt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let _t=n.get(c[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,W,i.NEAREST),g===!0&&(ae.length=0,pe.length=0,ae.push(i.COLOR_ATTACHMENT0+rt),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(ae.push(it),pe.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let rt=0;rt<c.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let _t=n.get(c[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&g){let c=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[c])}}}function ge(S){return Math.min(s.maxSamples,S.samples)}function Ce(S){let c=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function P(S){let c=a.render.frame;l.get(S)!==c&&(l.set(S,c),S.update())}function ye(S,c){let N=S.colorSpace,B=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==Yi&&N!==wn&&(Gt.getTransfer(N)===jt?(B!==Ze||W!==Ue)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",N)),c}function Kt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(A.width=S.naturalWidth||S.width,A.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(A.width=S.displayWidth,A.height=S.displayHeight):(A.width=S.width,A.height=S.height),A}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=Xt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pu(i,t){function e(n,s=wn){let r,a=Gt.getTransfer(s);if(n===Ue)return i.UNSIGNED_BYTE;if(n===Pr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===po)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uo)return i.BYTE;if(n===fo)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===Rr)return i.INT;if(n===en)return i.UNSIGNED_INT;if(n===Xe)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===xo)return i.ALPHA;if(n===vo)return i.RGB;if(n===Ze)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===Lr)return i.RED;if(n===Nr)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===Ur)return i.RG_INTEGER;if(n===Fr)return i.RGBA_INTEGER;if(n===cs||n===hs||n===us||n===ds)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Br||n===zr||n===Gr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===kr||n===Hr||n===Wr||n===Xr||n===fs||n===Zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vr||n===kr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wr)return r.COMPRESSED_R11_EAC;if(n===Xr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fs)return r.COMPRESSED_RG11_EAC;if(n===Zr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yr||n===Jr||n===jr||n===Kr||n===qr||n===Qr||n===$r||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===ga||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ia||n===ps||n===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:mu,fragmentShader:xu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ko=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",g=1,A=null,l=null,h=null,C=null,u=null,m=null,y=typeof XRWebGLBinding<"u",d=new Vo,I={},M=e.getContextAttributes(),w=null,x=null,v=[],_=[],E=new kt,f=null,b=null,D=new Le;D.viewport=new oe;let U=new Le;U.viewport=new oe;let z=[D,U],H=new Mr,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=v[Z];return Q===void 0&&(Q=new wi,v[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=v[Z];return Q===void 0&&(Q=new wi,v[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=v[Z];return Q===void 0&&(Q=new wi,v[Z]=Q),Q.getHandSpace()};function j(Z){let Q=_.indexOf(Z.inputSource);if(Q===-1)return;let ft=v[Q];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,A||a),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<v.length;Z++){let Q=_[Z];Q!==null&&(_[Z]=null,v[Z].disconnect(Q))}L=null,V=null,d.reset();for(let Z in I)delete I[Z];if(t.setRenderTarget(w),u=null,C=null,h=null,s=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(f),t.setSize(E.width,E.height,!1),b!==null){let Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||a},this.setReferenceSpace=function(Z){A=Z},this.getBaseLayer=function(){return C!==null?C:u},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),f=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Pt=null,ut=null;M.depth&&(ut=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=M.stencil?Yn:An,Pt=M.stencil?Ni:en);let Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=this.getBinding(),C=h.createProjectionLayer(Ft),s.updateRenderState({layers:[C]}),t.setPixelRatio(1),t.setSize(C.textureWidth,C.textureHeight,!1),x=new Ne(C.textureWidth,C.textureHeight,{format:Ze,type:Ue,depthTexture:new Gn(C.textureWidth,C.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:C.ignoreDepthValues===!1,resolveStencilBuffer:C.ignoreDepthValues===!1,storeMultisampledDepthBuffer:C.ignoreDepthValues===!1,storeMultisampledStencilBuffer:C.ignoreDepthValues===!1})}else{let ft={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Ne(u.framebufferWidth,u.framebufferHeight,{format:Ze,type:Ue,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(g),A=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function nt(Z){for(let Q=0;Q<Z.removed.length;Q++){let ft=Z.removed[Q],Pt=_.indexOf(ft);Pt>=0&&(_[Pt]=null,v[Pt].disconnect(ft))}for(let Q=0;Q<Z.added.length;Q++){let ft=Z.added[Q],Pt=_.indexOf(ft);if(Pt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=_.length){_.push(ft),Pt=Ft;break}else if(_[Ft]===null){_[Ft]=ft,Pt=Ft;break}if(Pt===-1)break}let ut=v[Pt];ut&&ut.connect(ft)}}let X=new G,$=new G;function et(Z,Q,ft){X.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);let Pt=X.distanceTo($),ut=Q.projectionMatrix.elements,Ft=ft.projectionMatrix.elements,ue=ut[14]/(ut[10]-1),Ot=ut[14]/(ut[10]+1),Xt=(ut[9]+1)/ut[5],te=(ut[9]-1)/ut[5],zt=(ut[8]-1)/ut[0],ae=(Ft[8]+1)/Ft[0],pe=ue*zt,Pe=ue*ae,ge=Pt/(-zt+ae),Ce=ge*-zt;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ce),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ut[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let P=ue+ge,ye=Ot+ge,Kt=pe-Ce,S=Pe+(Pt-Ce),c=Xt*Ot/ye*P,N=te*Ot/ye*P;Z.projectionMatrix.makePerspective(Kt,S,c,N,P,ye),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function bt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,ft=Z.far;d.texture!==null&&(d.depthNear>0&&(Q=d.depthNear),d.depthFar>0&&(ft=d.depthFar)),H.near=U.near=D.near=Q,H.far=U.far=D.far=ft,(L!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,V=H.far),H.layers.mask=Z.layers.mask|6,D.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Pt=Z.parent,ut=H.cameras;bt(H,Pt);for(let Ft=0;Ft<ut.length;Ft++)bt(ut[Ft],Pt);ut.length===2?et(H,D,U):H.projectionMatrix.copy(D.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Mt(Z,H,Pt)};function Mt(Z,Q,ft){ft===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(C===null&&u===null))return g},this.setFoveation=function(Z){g=Z,C!==null&&(C.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(H)},this.getCameraTexture=function(Z){return I[Z]};let $t=null;function Ht(Z,Q){if(l=Q.getViewerPose(A||a),m=Q,l!==null){let ft=l.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let Pt=!1;ft.length!==H.cameras.length&&(H.cameras.length=0,Pt=!0);for(let Ot=0;Ot<ft.length;Ot++){let Xt=ft[Ot],te=null;if(u!==null)te=u.getViewport(Xt);else{let ae=h.getViewSubImage(C,Xt);te=ae.viewport,Ot===0&&(t.setRenderTargetTextures(x,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(x))}let zt=z[Ot];zt===void 0&&(zt=new Le,zt.layers.enable(Ot),zt.viewport=new oe,z[Ot]=zt),zt.matrix.fromArray(Xt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Xt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(H.matrix.copy(zt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Pt===!0&&H.cameras.push(zt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ot=h.getDepthInformation(ft[0]);Ot&&Ot.isValid&&Ot.texture&&d.init(Ot,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let Ot=0;Ot<ft.length;Ot++){let Xt=ft[Ot].camera;if(Xt){let te=I[Xt];te||(te=new rs,I[Xt]=te);let zt=h.getCameraImage(Xt);te.sourceTexture=zt}}}}for(let ft=0;ft<v.length;ft++){let Pt=_[ft],ut=v[ft];Pt!==null&&ut!==void 0&&ut.update(Pt,Q,A||a)}$t&&$t(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Zt=new PA;Zt.setAnimationLoop(Ht),this.setAnimationLoop=function(Z){$t=Z},this.dispose=function(){}}},vu=new ie,OA=new Rt;OA.set(-1,0,0,0,1,0,0,0,1);function _u(i,t){function e(d,I){d.matrixAutoUpdate===!0&&d.updateMatrix(),I.value.copy(d.matrix)}function n(d,I){I.color.getRGB(d.fogColor.value,Mo(i)),I.isFog?(d.fogNear.value=I.near,d.fogFar.value=I.far):I.isFogExp2&&(d.fogDensity.value=I.density)}function s(d,I,M,w,x){I.isNodeMaterial?I.uniformsNeedUpdate=!1:I.isMeshBasicMaterial?r(d,I):I.isMeshLambertMaterial?(r(d,I),I.envMap&&(d.envMapIntensity.value=I.envMapIntensity)):I.isMeshToonMaterial?(r(d,I),h(d,I)):I.isMeshPhongMaterial?(r(d,I),l(d,I),I.envMap&&(d.envMapIntensity.value=I.envMapIntensity)):I.isMeshStandardMaterial?(r(d,I),C(d,I),I.isMeshPhysicalMaterial&&u(d,I,x)):I.isMeshMatcapMaterial?(r(d,I),m(d,I)):I.isMeshDepthMaterial?r(d,I):I.isMeshDistanceMaterial?(r(d,I),y(d,I)):I.isMeshNormalMaterial?r(d,I):I.isLineBasicMaterial?(a(d,I),I.isLineDashedMaterial&&o(d,I)):I.isPointsMaterial?g(d,I,M,w):I.isSpriteMaterial?A(d,I):I.isShadowMaterial?(d.color.value.copy(I.color),d.opacity.value=I.opacity):I.isShaderMaterial&&(I.uniformsNeedUpdate=!1)}function r(d,I){d.opacity.value=I.opacity,I.color&&d.diffuse.value.copy(I.color),I.emissive&&d.emissive.value.copy(I.emissive).multiplyScalar(I.emissiveIntensity),I.map&&(d.map.value=I.map,e(I.map,d.mapTransform)),I.alphaMap&&(d.alphaMap.value=I.alphaMap,e(I.alphaMap,d.alphaMapTransform)),I.bumpMap&&(d.bumpMap.value=I.bumpMap,e(I.bumpMap,d.bumpMapTransform),d.bumpScale.value=I.bumpScale,I.side===Re&&(d.bumpScale.value*=-1)),I.normalMap&&(d.normalMap.value=I.normalMap,e(I.normalMap,d.normalMapTransform),d.normalScale.value.copy(I.normalScale),I.side===Re&&d.normalScale.value.negate()),I.displacementMap&&(d.displacementMap.value=I.displacementMap,e(I.displacementMap,d.displacementMapTransform),d.displacementScale.value=I.displacementScale,d.displacementBias.value=I.displacementBias),I.emissiveMap&&(d.emissiveMap.value=I.emissiveMap,e(I.emissiveMap,d.emissiveMapTransform)),I.specularMap&&(d.specularMap.value=I.specularMap,e(I.specularMap,d.specularMapTransform)),I.alphaTest>0&&(d.alphaTest.value=I.alphaTest);let M=t.get(I),w=M.envMap,x=M.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(vu.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(OA),d.reflectivity.value=I.reflectivity,d.ior.value=I.ior,d.refractionRatio.value=I.refractionRatio),I.lightMap&&(d.lightMap.value=I.lightMap,d.lightMapIntensity.value=I.lightMapIntensity,e(I.lightMap,d.lightMapTransform)),I.aoMap&&(d.aoMap.value=I.aoMap,d.aoMapIntensity.value=I.aoMapIntensity,e(I.aoMap,d.aoMapTransform))}function a(d,I){d.diffuse.value.copy(I.color),d.opacity.value=I.opacity,I.map&&(d.map.value=I.map,e(I.map,d.mapTransform))}function o(d,I){d.dashSize.value=I.dashSize,d.totalSize.value=I.dashSize+I.gapSize,d.scale.value=I.scale}function g(d,I,M,w){d.diffuse.value.copy(I.color),d.opacity.value=I.opacity,d.size.value=I.size*M,d.scale.value=w*.5,I.map&&(d.map.value=I.map,e(I.map,d.uvTransform)),I.alphaMap&&(d.alphaMap.value=I.alphaMap,e(I.alphaMap,d.alphaMapTransform)),I.alphaTest>0&&(d.alphaTest.value=I.alphaTest)}function A(d,I){d.diffuse.value.copy(I.color),d.opacity.value=I.opacity,d.rotation.value=I.rotation,I.map&&(d.map.value=I.map,e(I.map,d.mapTransform)),I.alphaMap&&(d.alphaMap.value=I.alphaMap,e(I.alphaMap,d.alphaMapTransform)),I.alphaTest>0&&(d.alphaTest.value=I.alphaTest)}function l(d,I){d.specular.value.copy(I.specular),d.shininess.value=Math.max(I.shininess,1e-4)}function h(d,I){I.gradientMap&&(d.gradientMap.value=I.gradientMap)}function C(d,I){d.metalness.value=I.metalness,I.metalnessMap&&(d.metalnessMap.value=I.metalnessMap,e(I.metalnessMap,d.metalnessMapTransform)),d.roughness.value=I.roughness,I.roughnessMap&&(d.roughnessMap.value=I.roughnessMap,e(I.roughnessMap,d.roughnessMapTransform)),I.envMap&&(d.envMapIntensity.value=I.envMapIntensity)}function u(d,I,M){d.ior.value=I.ior,I.sheen>0&&(d.sheenColor.value.copy(I.sheenColor).multiplyScalar(I.sheen),d.sheenRoughness.value=I.sheenRoughness,I.sheenColorMap&&(d.sheenColorMap.value=I.sheenColorMap,e(I.sheenColorMap,d.sheenColorMapTransform)),I.sheenRoughnessMap&&(d.sheenRoughnessMap.value=I.sheenRoughnessMap,e(I.sheenRoughnessMap,d.sheenRoughnessMapTransform))),I.clearcoat>0&&(d.clearcoat.value=I.clearcoat,d.clearcoatRoughness.value=I.clearcoatRoughness,I.clearcoatMap&&(d.clearcoatMap.value=I.clearcoatMap,e(I.clearcoatMap,d.clearcoatMapTransform)),I.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=I.clearcoatRoughnessMap,e(I.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),I.clearcoatNormalMap&&(d.clearcoatNormalMap.value=I.clearcoatNormalMap,e(I.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(I.clearcoatNormalScale),I.side===Re&&d.clearcoatNormalScale.value.negate())),I.dispersion>0&&(d.dispersion.value=I.dispersion),I.retroreflectivity>0&&(d.retroreflectivity.value=I.retroreflectivity),I.iridescence>0&&(d.iridescence.value=I.iridescence,d.iridescenceIOR.value=I.iridescenceIOR,d.iridescenceThicknessMinimum.value=I.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=I.iridescenceThicknessRange[1],I.iridescenceMap&&(d.iridescenceMap.value=I.iridescenceMap,e(I.iridescenceMap,d.iridescenceMapTransform)),I.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=I.iridescenceThicknessMap,e(I.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),I.transmission>0&&(d.transmission.value=I.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),I.transmissionMap&&(d.transmissionMap.value=I.transmissionMap,e(I.transmissionMap,d.transmissionMapTransform)),d.thickness.value=I.thickness,I.thicknessMap&&(d.thicknessMap.value=I.thicknessMap,e(I.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=I.attenuationDistance,d.attenuationColor.value.copy(I.attenuationColor)),I.anisotropy>0&&(d.anisotropyVector.value.set(I.anisotropy*Math.cos(I.anisotropyRotation),I.anisotropy*Math.sin(I.anisotropyRotation)),I.anisotropyMap&&(d.anisotropyMap.value=I.anisotropyMap,e(I.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=I.specularIntensity,d.specularColor.value.copy(I.specularColor),I.specularColorMap&&(d.specularColorMap.value=I.specularColorMap,e(I.specularColorMap,d.specularColorMapTransform)),I.specularIntensityMap&&(d.specularIntensityMap.value=I.specularIntensityMap,e(I.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,I){I.matcap&&(d.matcap.value=I.matcap)}function y(d,I){let M=t.get(I).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yu(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function g(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function A(x,v){let _=s[x.id];_===void 0&&(d(x),_=l(x),s[x.id]=_,x.addEventListener("dispose",M));let E=v.program;n.updateUBOMapping(x,E);let f=t.render.frame;r[x.id]!==f&&(C(x),r[x.id]=f)}function l(x){let v=h();x.__bindingPointIndex=v;let _=i.createBuffer(),E=x.__size,f=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,f),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function C(x){let v=s[x.id],_=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let f=0,b=_.length;f<b;f++){let D=_[f];if(Array.isArray(D))for(let U=0,z=D.length;U<z;U++)u(D[U],f,U,E);else u(D,f,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,v,_,E){if(y(x,v,_,E)===!0){let f=x.__offset,b=x.value;if(Array.isArray(b)){let D=0;for(let U=0;U<b.length;U++){let z=b[U],H=I(z);m(z,x.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,f,x.__data)}}function m(x,v,_){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,_)}function y(x,v,_,E){let f=x.value,b=v+"_"+_;if(E[b]===void 0)return typeof f=="number"||typeof f=="boolean"?E[b]=f:ArrayBuffer.isView(f)?E[b]=f.slice():E[b]=f.clone(),!0;{let D=E[b];if(typeof f=="number"||typeof f=="boolean"){if(D!==f)return E[b]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(D.equals(f)===!1)return D.copy(f),!0}}return!1}function d(x){let v=x.uniforms,_=0,E=16;for(let b=0,D=v.length;b<D;b++){let U=Array.isArray(v[b])?v[b]:[v[b]];for(let z=0,H=U.length;z<H;z++){let L=U[z],V=Array.isArray(L.value)?L.value:[L.value];for(let j=0,J=V.length;j<J;j++){let nt=V[j],X=I(nt),$=_%E,et=$%X.boundary,bt=$+et;_+=et,bt!==0&&E-bt<X.storage&&(_+=E-bt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=X.storage}}}let f=_%E;return f>0&&(_+=E-f),x.__size=_,x.__cache={},this}function I(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",x),v}function M(x){let v=x.target;v.removeEventListener("dispose",M);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:g,update:A,dispose:w}}var Mu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function Su(){return fn===null&&(fn=new es(Mu,16,16,Jn,nn),fn.name="DFG_LUT",fn.minFilter=_e,fn.magFilter=_e,fn.wrapS=on,fn.wrapT=on,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}var xa=class{constructor(t={}){let{canvas:e=nA(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:A=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:C=!1,outputBufferType:u=Ue}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=u,d=new Set([Fr,Ur,Nr]),I=new Set([Ue,en,Li,Ni,Pr,Dr]),M=new Uint32Array(4),w=new Int32Array(4),x=new G,v=null,_=null,E=[],f=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,U=!1,z=null,H=null,L=null,V=null;this._outputColorSpace=ve;let j=0,J=0,nt=null,X=-1,$=null,et=new oe,bt=new oe,Mt=null,$t=new Ut(0),Ht=0,Zt=e.width,Z=e.height,Q=1,ft=null,Pt=null,ut=new oe(0,0,Zt,Z),Ft=new oe(0,0,Zt,Z),ue=!1,Ot=new Ti,Xt=!1,te=!1,zt=new ie,ae=new G,pe=new oe,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Ce(){return nt===null?Q:1}let P=n;function ye(p,T){return e.getContext(p,T)}let Kt,S,c,N,B,W,it,st,Y,q,rt,_t,At,at,yt,Et,Dt,R,ot,K,gt,ct,tt;try{let p={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:g,preserveDrawingBuffer:A,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",Je,!1),P===null){let T="webgl2";if(P=ye(T,p),P===null)throw ye(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(p){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Tt("WebGLRenderer: "+p.message),p}function St(){Kt=new Dc(P),Kt.init(),gt=new pu(P,Kt),S=new _c(P,Kt,t,gt),c=new du(P,Kt),S.reversedDepthBuffer&&C&&c.buffers.depth.setReversed(!0),H=P.createFramebuffer(),L=P.createFramebuffer(),V=P.createFramebuffer(),N=new Uc(P),B=new nu,W=new fu(P,Kt,c,B,S,gt,N),it=new Pc(D),st=new OC(P),ct=new xc(P,st),Y=new Lc(P,st,N,ct),q=new Oc(P,Y,st,ct,N),R=new Fc(P,S,W),yt=new yc(B),rt=new eu(D,it,Kt,S,ct,yt),_t=new _u(D,B),At=new su,at=new Cu(Kt),Dt=new mc(D,it,c,q,m,g),Et=new uu(D,q,S),tt=new yu(P,N,S,c),ot=new vc(P,Kt,N),K=new Nc(P,Kt,N),N.programs=rt.programs,D.capabilities=S,D.extensions=Kt,D.properties=B,D.renderLists=At,D.shadowMap=Et,D.state=c,D.info=N}y!==Ue&&(b=new zc(y,e.width,e.height,o,s,r));let xt=new ko(D,P);this.xr=xt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let p=Kt.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){let p=Kt.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(p){p!==void 0&&(Q=p,this.setSize(Zt,Z,!1))},this.getSize=function(p){return p.set(Zt,Z)},this.setSize=function(p,T,k=!0){if(xt.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=p,Z=T,e.width=Math.floor(p*Q),e.height=Math.floor(T*Q),k===!0&&(e.style.width=p+"px",e.style.height=T+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,p,T)},this.getDrawingBufferSize=function(p){return p.set(Zt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(p,T,k){Zt=p,Z=T,Q=k,e.width=Math.floor(p*k),e.height=Math.floor(T*k),this.setViewport(0,0,p,T)},this.setEffects=function(p){if(y===Ue){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(p){for(let T=0;T<p.length;T++)if(p[T].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(p||[])},this.getCurrentViewport=function(p){return p.copy(et)},this.getViewport=function(p){return p.copy(ut)},this.setViewport=function(p,T,k,F){p.isVector4?ut.set(p.x,p.y,p.z,p.w):ut.set(p,T,k,F),c.viewport(et.copy(ut).multiplyScalar(Q).round())},this.getScissor=function(p){return p.copy(Ft)},this.setScissor=function(p,T,k,F){p.isVector4?Ft.set(p.x,p.y,p.z,p.w):Ft.set(p,T,k,F),c.scissor(bt.copy(Ft).multiplyScalar(Q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(p){c.setScissorTest(ue=p)},this.setOpaqueSort=function(p){ft=p},this.setTransparentSort=function(p){Pt=p},this.getClearColor=function(p){return p.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(p=!0,T=!0,k=!0){let F=0;if(p){let O=!1;if(nt!==null){let lt=nt.texture.format;O=d.has(lt)}if(O){let lt=nt.texture.type,dt=I.has(lt),It=Dt.getClearColor(),pt=Dt.getClearAlpha(),vt=It.r,Lt=It.g,Bt=It.b;dt?(M[0]=vt,M[1]=Lt,M[2]=Bt,M[3]=pt,P.clearBufferuiv(P.COLOR,0,M)):(w[0]=vt,w[1]=Lt,w[2]=Bt,w[3]=pt,P.clearBufferiv(P.COLOR,0,w))}else F|=P.COLOR_BUFFER_BIT}T&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(p){p.setRenderer(this),z=p},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Dt.dispose(),At.dispose(),at.dispose(),B.dispose(),it.dispose(),q.dispose(),ct.dispose(),tt.dispose(),rt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Xo),xt.removeEventListener("sessionend",Zo),jn.stop()};function ee(p){p.preventDefault(),yo("WebGLRenderer: Context Lost."),U=!0}function Yt(){yo("WebGLRenderer: Context Restored."),U=!1;let p=N.autoReset,T=Et.enabled,k=Et.autoUpdate,F=Et.needsUpdate,O=Et.type;St(),N.autoReset=p,Et.enabled=T,Et.autoUpdate=k,Et.needsUpdate=F,Et.type=O}function Je(p){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function sn(p){let T=p.target;T.removeEventListener("dispose",sn),YA(T)}function YA(p){JA(p),B.remove(p)}function JA(p){let T=B.get(p).programs;T!==void 0&&(T.forEach(function(k){rt.releaseProgram(k)}),p.isShaderMaterial&&rt.releaseShaderCache(p))}this.renderBufferDirect=function(p,T,k,F,O,lt){T===null&&(T=Pe);let dt=O.isMesh&&O.matrixWorld.determinantAffine()<0,It=qA(p,T,k,F,O);c.setMaterial(F,dt);let pt=k.index,vt=1;if(F.wireframe===!0){if(pt=Y.getWireframeAttribute(k),pt===void 0)return;vt=2}let Lt=k.drawRange,Bt=k.attributes.position,mt=Lt.start*vt,Jt=(Lt.start+Lt.count)*vt;lt!==null&&(mt=Math.max(mt,lt.start*vt),Jt=Math.min(Jt,(lt.start+lt.count)*vt)),pt!==null?(mt=Math.max(mt,0),Jt=Math.min(Jt,pt.count)):Bt!=null&&(mt=Math.max(mt,0),Jt=Math.min(Jt,Bt.count));let Ie=Jt-mt;if(Ie<0||Ie===1/0)return;ct.setup(O,F,It,k,pt);let se,Qt=ot;if(pt!==null&&(se=st.get(pt),Qt=K,Qt.setIndex(se)),O.isMesh)F.wireframe===!0?(c.setLineWidth(F.wireframeLinewidth*Ce()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(O.isLine){let Me=F.linewidth;Me===void 0&&(Me=1),c.setLineWidth(Me*Ce()),O.isLineSegments?Qt.setMode(P.LINES):O.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else O.isPoints?Qt.setMode(P.POINTS):O.isSprite&&Qt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Me=O._multiDrawStarts,ht=O._multiDrawCounts,we=O._multiDrawCount,Wt=pt?st.get(pt).bytesPerElement:1,ke=B.get(F).currentProgram.getUniforms();for(let rn=0;rn<we;rn++)ke.setValue(P,"_gl_DrawID",rn),Qt.render(Me[rn]/Wt,ht[rn])}else if(O.isInstancedMesh)Qt.renderInstances(mt,Ie,O.count);else if(k.isInstancedBufferGeometry){let Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ht=Math.min(k.instanceCount,Me);Qt.renderInstances(mt,Ie,ht)}else Qt.render(mt,Ie)};function Wo(p,T,k,F){z!==null&&p.isNodeMaterial&&z.setObject(F,p),Xt===!0&&yt.setState(p,k,!1),p.transparent===!0&&p.side===Ve&&p.forceSinglePass===!1?(p.side=Re,p.needsUpdate=!0,Ms(p,T,F),p.side=un,p.needsUpdate=!0,Ms(p,T,F),p.side=Ve):Ms(p,T,F)}this.compile=function(p,T,k=null){k===null&&(k=p),z!==null&&z.renderStart(p,T,k),_=at.get(k),_.init(T),f.push(_),k.traverseVisible(function(O){O.isLight&&O.layers.test(T.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),p!==k&&p.traverseVisible(function(O){O.isLight&&O.layers.test(T.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(),z!==null&&z.updateLights(_.state.lightsArray),te=this.localClippingEnabled,Xt=yt.init(this.clippingPlanes,te),Xt===!0&&yt.setGlobalState(this.clippingPlanes,T),z!==null&&Et.render(_.state.shadowsArray,k,T);let F=new Set;return p.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let lt=O.material;if(lt)if(Array.isArray(lt))for(let dt=0;dt<lt.length;dt++){let It=lt[dt];Wo(It,k,T,O),F.add(It)}else Wo(lt,k,T,O),F.add(lt)}),_=f.pop(),z!==null&&z.renderEnd(),F},this.compileAsync=function(p,T,k=null){let F=this.compile(p,T,k);return new Promise(O=>{function lt(){if(F.forEach(function(dt){let pt=B.get(dt).currentProgram;(pt===void 0||pt.isReady())&&F.delete(dt)}),F.size===0){O(p);return}setTimeout(lt,10)}Kt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ya=null;function jA(p){ya&&ya(p)}function Xo(){jn.stop()}function Zo(){jn.start()}let jn=new PA;jn.setAnimationLoop(jA),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(p){ya=p,xt.setAnimationLoop(p),p===null?jn.stop():jn.start()},xt.addEventListener("sessionstart",Xo),xt.addEventListener("sessionend",Zo),this.render=function(p,T){if(T!==void 0&&T.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(p,T);let k=xt.enabled===!0&&xt.isPresenting===!0,F=b!==null&&(nt===null||k)&&b.begin(D,nt);if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(T),T=xt.getCamera()),p.isScene===!0&&p.onBeforeRender(D,p,T,nt),_=at.get(p,f.length),_.init(T),_.state.textureUnits=W.getTextureUnits(),f.push(_),zt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),Ot.setFromProjectionMatrix(zt,$e,T.reversedDepth),te=this.localClippingEnabled,Xt=yt.init(this.clippingPlanes,te),v=At.get(p,E.length),v.init(),E.push(v),xt.enabled===!0&&xt.isPresenting===!0){let dt=D.xr.getDepthSensingMesh();dt!==null&&Ma(dt,T,-1/0,D.sortObjects)}Ma(p,T,0,D.sortObjects),v.finish(),z!==null&&z.updateLights(_.state.lightsArray),D.sortObjects===!0&&v.sort(ft,Pt),ge=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ge&&Dt.addToRenderList(v,p),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&yt.beginShadows();let O=_.state.shadowsArray;if(Et.render(O,p,T),Xt===!0&&yt.endShadows(),(F&&b.hasRenderPass())===!1){let dt=v.opaque,It=v.transmissive;if(_.setupLights(),T.isArrayCamera){let pt=T.cameras;if(It.length>0)for(let vt=0,Lt=pt.length;vt<Lt;vt++){let Bt=pt[vt];Jo(dt,It,p,Bt)}ge&&Dt.render(p);for(let vt=0,Lt=pt.length;vt<Lt;vt++){let Bt=pt[vt];Yo(v,p,Bt,Bt.viewport)}}else It.length>0&&Jo(dt,It,p,T),ge&&Dt.render(p),Yo(v,p,T)}nt!==null&&J===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),F&&b.end(D),p.isScene===!0&&p.onAfterRender(D,p,T),ct.resetDefaultState(),X=-1,$=null,f.pop(),f.length>0?(_=f[f.length-1],W.setTextureUnits(_.state.textureUnits),Xt===!0&&yt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,z!==null&&z.renderEnd()};function Ma(p,T,k,F){if(p.visible===!1)return;if(p.layers.test(T.layers)){if(p.isGroup)k=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(T);else if(p.isLightProbeGrid)_.pushLightProbeGrid(p);else if(p.isLight)_.pushLight(p),p.castShadow&&_.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||p.intersectsFrustum(Ot)){F&&pe.setFromMatrixPosition(p.matrixWorld).applyMatrix4(zt);let dt=q.update(p),It=p.material;It.visible&&v.push(p,dt,It,k,pe.z,null,T)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||p.intersectsFrustum(Ot))){let dt=q.update(p),It=p.material;if(F&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),pe.copy(p.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),pe.copy(dt.boundingSphere.center)),pe.applyMatrix4(p.matrixWorld).applyMatrix4(zt)),Array.isArray(It)){let pt=dt.groups;for(let vt=0,Lt=pt.length;vt<Lt;vt++){let Bt=pt[vt],mt=It[Bt.materialIndex];mt&&mt.visible&&v.push(p,dt,mt,k,pe.z,Bt,T)}}else It.visible&&v.push(p,dt,It,k,pe.z,null,T)}}let lt=p.children;for(let dt=0,It=lt.length;dt<It;dt++)Ma(lt[dt],T,k,F)}function Yo(p,T,k,F){let{opaque:O,transmissive:lt,transparent:dt}=p;_.setupLightsView(k),Xt===!0&&yt.setGlobalState(D.clippingPlanes,k),F&&c.viewport(et.copy(F)),O.length>0&&ys(O,T,k),lt.length>0&&ys(lt,T,k),dt.length>0&&ys(dt,T,k),c.buffers.depth.setTest(!0),c.buffers.depth.setMask(!0),c.buffers.color.setMask(!0),c.setPolygonOffset(!1)}function Jo(p,T,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[F.id]===void 0){let mt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[F.id]=new Ne(1,1,{generateMipmaps:!0,type:mt?nn:Ue,minFilter:Zn,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let lt=_.state.transmissionRenderTarget[F.id],dt=F.viewport||et;lt.setSize(dt.z*D.transmissionResolutionScale,dt.w*D.transmissionResolutionScale);let It=D.getRenderTarget(),pt=D.getActiveCubeFace(),vt=D.getActiveMipmapLevel();D.setRenderTarget(lt),D.getClearColor($t),Ht=D.getClearAlpha(),Ht<1&&D.setClearColor(16777215,.5),D.clear(),ge&&Dt.render(k);let Lt=D.toneMapping;D.toneMapping=tn;let Bt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),_.setupLightsView(F),Xt===!0&&yt.setGlobalState(D.clippingPlanes,F),ys(p,k,F),W.updateMultisampleRenderTarget(lt),W.updateRenderTargetMipmap(lt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Jt=0,Ie=T.length;Jt<Ie;Jt++){let se=T[Jt],{object:Qt,geometry:Me,material:ht,group:we}=se;if(ht.side===Ve&&Qt.layers.test(F.layers)){let Wt=ht.side;ht.side=Re,ht.needsUpdate=!0,jo(Qt,k,F,Me,ht,we),ht.side=Wt,ht.needsUpdate=!0,mt=!0}}mt===!0&&(W.updateMultisampleRenderTarget(lt),W.updateRenderTargetMipmap(lt))}D.setRenderTarget(It,pt,vt),D.setClearColor($t,Ht),Bt!==void 0&&(F.viewport=Bt),D.toneMapping=Lt}function ys(p,T,k){let F=T.isScene===!0?T.overrideMaterial:null;for(let O=0,lt=p.length;O<lt;O++){let dt=p[O],{object:It,geometry:pt,group:vt}=dt,Lt=dt.material;Lt.allowOverride===!0&&F!==null&&(Lt=F),It.layers.test(k.layers)&&jo(It,T,k,pt,Lt,vt)}}function jo(p,T,k,F,O,lt){z!==null&&O.isNodeMaterial&&z.setObject(p,O),p.onBeforeRender(D,T,k,F,O,lt),p.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),O.onBeforeRender(D,T,k,F,p,lt),O.transparent===!0&&O.side===Ve&&O.forceSinglePass===!1?(O.side=Re,O.needsUpdate=!0,D.renderBufferDirect(k,T,F,O,p,lt),O.side=un,O.needsUpdate=!0,D.renderBufferDirect(k,T,F,O,p,lt),O.side=Ve):D.renderBufferDirect(k,T,F,O,p,lt),p.onAfterRender(D,T,k,F,O,lt)}function Ms(p,T,k){T.isScene!==!0&&(T=Pe);let F=B.get(p),O=_.state.lights,lt=_.state.shadowsArray,dt=O.state.version,It=rt.getParameters(p,O.state,lt,T,k,_.state.lightProbeGridArray),pt=rt.getProgramCacheKey(It),vt=F.programs;F.environment=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?T.environment:null,F.fog=T.fog;let Lt=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap;F.envMap=it.get(p.envMap||F.environment,Lt),F.envMapRotation=F.environment!==null&&p.envMap===null?T.environmentRotation:p.envMapRotation,vt===void 0&&(p.addEventListener("dispose",sn),vt=new Map,F.programs=vt);let Bt=vt.get(pt);if(Bt!==void 0){if(F.currentProgram===Bt&&F.lightsStateVersion===dt)return qo(p,It),Bt}else It.uniforms=rt.getUniforms(p),z!==null&&p.isNodeMaterial&&z.build(p,k,It),p.onBeforeCompile(It,D),Bt=rt.acquireProgram(It,pt),vt.set(pt,Bt),F.uniforms=It.uniforms;let mt=F.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(mt.clippingPlanes=yt.uniform),qo(p,It),F.needsLights=$A(p),F.lightsStateVersion=dt,F.needsLights&&(mt.ambientLightColor.value=O.state.ambient,mt.lightProbe.value=O.state.probe,mt.sunLights.value=O.state.sun,mt.sunLightShadows.value=O.state.sunShadow,mt.directionalLights.value=O.state.directional,mt.directionalLightShadows.value=O.state.directionalShadow,mt.spotLights.value=O.state.spot,mt.spotLightShadows.value=O.state.spotShadow,mt.rectAreaLights.value=O.state.rectArea,mt.ltc_1.value=O.state.rectAreaLTC1,mt.ltc_2.value=O.state.rectAreaLTC2,mt.pointLights.value=O.state.point,mt.pointLightShadows.value=O.state.pointShadow,mt.hemisphereLights.value=O.state.hemi,mt.sunShadowMatrix.value=O.state.sunShadowMatrix,mt.sunShadowCascade.value=O.state.sunShadowCascade,mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,mt.spotLightMatrix.value=O.state.spotLightMatrix,mt.spotLightMap.value=O.state.spotLightMap,mt.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=_.state.lightProbeGridArray.length>0,F.currentProgram=Bt,F.uniformsList=null,Bt}function Ko(p){if(p.uniformsList===null){let T=p.currentProgram.getUniforms();p.uniformsList=Oi.seqWithValue(T.seq,p.uniforms)}return p.uniformsList}function qo(p,T){let k=B.get(p);k.outputColorSpace=T.outputColorSpace,k.batching=T.batching,k.batchingColor=T.batchingColor,k.instancing=T.instancing,k.instancingColor=T.instancingColor,k.instancingMorph=T.instancingMorph,k.skinning=T.skinning,k.morphTargets=T.morphTargets,k.morphNormals=T.morphNormals,k.morphColors=T.morphColors,k.morphTargetsCount=T.morphTargetsCount,k.numClippingPlanes=T.numClippingPlanes,k.numIntersection=T.numClipIntersection,k.vertexAlphas=T.vertexAlphas,k.vertexTangents=T.vertexTangents,k.toneMapping=T.toneMapping}function KA(p,T){if(p.length===0)return null;if(p.length===1)return p[0].texture!==null?p[0]:null;x.setFromMatrixPosition(T.matrixWorld);for(let k=0,F=p.length;k<F;k++){let O=p[k];if(O.texture!==null&&O.boundingBox.containsPoint(x))return O}return null}function qA(p,T,k,F,O){T.isScene!==!0&&(T=Pe),W.resetTextureUnits();let lt=T.fog,dt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?T.environment:null,It=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Gt.workingColorSpace,pt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,vt=it.get(F.envMap||dt,pt),Lt=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),mt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,Ie=!!k.morphAttributes.color,se=tn;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(se=D.toneMapping);let Qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Me=Qt!==void 0?Qt.length:0,ht=B.get(F),we=_.state.lights;if(Xt===!0&&(te===!0||p!==$)){let ne=p===$&&F.id===X;yt.setState(F,p,ne)}let Wt=!1;F.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==we.state.version||ht.outputColorSpace!==It||O.isBatchedMesh&&ht.batching===!1||!O.isBatchedMesh&&ht.batching===!0||O.isBatchedMesh&&ht.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&ht.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&ht.instancing===!1||!O.isInstancedMesh&&ht.instancing===!0||O.isSkinnedMesh&&ht.skinning===!1||!O.isSkinnedMesh&&ht.skinning===!0||O.isInstancedMesh&&ht.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ht.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ht.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ht.instancingMorph===!1&&O.morphTexture!==null||ht.envMap!==vt||F.fog===!0&&ht.fog!==lt||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==yt.numPlanes||ht.numIntersection!==yt.numIntersection)||ht.vertexAlphas!==Lt||ht.vertexTangents!==Bt||ht.morphTargets!==mt||ht.morphNormals!==Jt||ht.morphColors!==Ie||ht.toneMapping!==se||ht.morphTargetsCount!==Me||!!ht.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,ht.__version=F.version);let ke=ht.currentProgram;Wt===!0&&(ke=Ms(F,T,O),z&&F.isNodeMaterial&&z.onUpdateProgram(F,ke,ht));let rn=!1,Tn=!1,oi=!1,qt=ke.getUniforms(),Ae=ht.uniforms;if(c.useProgram(ke.program)&&(rn=!0,Tn=!0,oi=!0),F.id!==X&&(X=F.id,Tn=!0),ht.needsLights){let ne=KA(_.state.lightProbeGridArray,O);ht.lightProbeGrid!==ne&&(ht.lightProbeGrid=ne,Tn=!0)}if(rn||$!==p){c.buffers.depth.getReversed()&&p.reversedDepth!==!0&&(p._reversedDepth=!0,p.updateProjectionMatrix()),qt.setValue(P,"projectionMatrix",p.projectionMatrix),qt.setValue(P,"viewMatrix",p.matrixWorldInverse);let Pn=qt.map.cameraPosition;Pn!==void 0&&Pn.setValue(P,ae.setFromMatrixPosition(p.matrixWorld)),S.logarithmicDepthBuffer&&qt.setValue(P,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&qt.setValue(P,"isOrthographic",p.isOrthographicCamera===!0),$!==p&&($=p,Tn=!0,oi=!0)}if(ht.needsLights&&(we.state.sunShadowMap.length>0&&qt.setValue(P,"sunShadowMap",we.state.sunShadowMap,W),we.state.directionalShadowMap.length>0&&qt.setValue(P,"directionalShadowMap",we.state.directionalShadowMap,W),we.state.spotShadowMap.length>0&&qt.setValue(P,"spotShadowMap",we.state.spotShadowMap,W),we.state.pointShadowMap.length>0&&qt.setValue(P,"pointShadowMap",we.state.pointShadowMap,W)),O.isSkinnedMesh){qt.setOptional(P,O,"bindMatrix"),qt.setOptional(P,O,"bindMatrixInverse");let ne=O.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),qt.setValue(P,"boneTexture",ne.boneTexture,W))}O.isBatchedMesh&&(qt.setOptional(P,O,"batchingTexture"),qt.setValue(P,"batchingTexture",O._matricesTexture,W),qt.setOptional(P,O,"batchingIdTexture"),qt.setValue(P,"batchingIdTexture",O._indirectTexture,W),qt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&qt.setValue(P,"batchingColorTexture",O._colorsTexture,W));let Rn=k.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&R.update(O,k,ke),(Tn||ht.receiveShadow!==O.receiveShadow)&&(ht.receiveShadow=O.receiveShadow,qt.setValue(P,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&T.environment!==null&&(Ae.envMapIntensity.value=T.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=Su()),Tn){if(qt.setValue(P,"toneMappingExposure",D.toneMappingExposure),ht.needsLights&&QA(Ae,oi),lt&&F.fog===!0&&_t.refreshFogUniforms(Ae,lt),_t.refreshMaterialUniforms(Ae,F,Q,Z,_.state.transmissionRenderTarget[p.id]),ht.needsLights&&ht.lightProbeGrid){let ne=ht.lightProbeGrid;Ae.probesSH.value=ne.texture,Ae.probesMin.value.copy(ne.boundingBox.min),Ae.probesMax.value.copy(ne.boundingBox.max),Ae.probesResolution.value.copy(ne.resolution)}Oi.upload(P,Ko(ht),Ae,W)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Oi.upload(P,Ko(ht),Ae,W),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&qt.setValue(P,"center",O.center),qt.setValue(P,"modelViewMatrix",O.modelViewMatrix),qt.setValue(P,"normalMatrix",O.normalMatrix),qt.setValue(P,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let ne=F.uniformsGroups;for(let Pn=0,gi=ne.length;Pn<gi;Pn++){let $o=ne[Pn];tt.update($o,ke),tt.bind($o,ke)}}return ke}function QA(p,T){p.ambientLightColor.needsUpdate=T,p.lightProbe.needsUpdate=T,p.sunLights.needsUpdate=T,p.sunLightShadows.needsUpdate=T,p.directionalLights.needsUpdate=T,p.directionalLightShadows.needsUpdate=T,p.pointLights.needsUpdate=T,p.pointLightShadows.needsUpdate=T,p.spotLights.needsUpdate=T,p.spotLightShadows.needsUpdate=T,p.rectAreaLights.needsUpdate=T,p.hemisphereLights.needsUpdate=T}function $A(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(p,T,k){let F=B.get(p);F.__autoAllocateDepthBuffer=p.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),B.get(p.texture).__webglTexture=T,B.get(p.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(p,T){let k=B.get(p);k.__webglFramebuffer=T,k.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(p,T=0,k=0){nt=p,j=T,J=k;let F=null,O=!1,lt=!1;if(p){let It=B.get(p);if(It.__useDefaultFramebuffer!==void 0){c.bindFramebuffer(P.FRAMEBUFFER,It.__webglFramebuffer),et.copy(p.viewport),bt.copy(p.scissor),Mt=p.scissorTest,c.viewport(et),c.scissor(bt),c.setScissorTest(Mt),X=-1;return}else if(It.__webglFramebuffer===void 0)W.setupRenderTarget(p);else if(It.__hasExternalTextures)W.rebindTextures(p,B.get(p.texture).__webglTexture,B.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){let Lt=p.depthTexture;if(It.__boundDepthTexture!==Lt){if(Lt!==null&&B.has(Lt)&&(p.width!==Lt.image.width||p.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(p)}}let pt=p.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(lt=!0);let vt=B.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(vt[T])?F=vt[T][k]:F=vt[T],O=!0):p.samples>0&&W.useMultisampledRTT(p)===!1?F=B.get(p).__webglMultisampledFramebuffer:Array.isArray(vt)?F=vt[k]:F=vt,et.copy(p.viewport),bt.copy(p.scissor),Mt=p.scissorTest}else et.copy(ut).multiplyScalar(Q).floor(),bt.copy(Ft).multiplyScalar(Q).floor(),Mt=ue;if(k!==0&&(F=H),c.bindFramebuffer(P.FRAMEBUFFER,F)&&c.drawBuffers(p,F),c.viewport(et),c.scissor(bt),c.setScissorTest(Mt),O){let It=B.get(p.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+T,It.__webglTexture,k)}else if(lt){let It=T;for(let pt=0;pt<p.textures.length;pt++){let vt=B.get(p.textures[pt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+pt,vt.__webglTexture,k,It)}}else if(p!==null&&k!==0){let It=B.get(p.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,It.__webglTexture,k)}X=-1};function Qo(p){let T=B.get(p);return(T.__readFormat!==p.format||T.__readType!==p.type)&&(T.__readFormat=p.format,T.__readType=p.type,T.__formatReadable=S.textureFormatReadable(p.format),T.__typeReadable=S.textureTypeReadable(p.type)),T}this.readRenderTargetPixels=function(p,T,k,F,O,lt,dt,It=0){if(!(p&&p.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=B.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){c.bindFramebuffer(P.FRAMEBUFFER,pt);try{let vt=p.textures[It],Lt=vt.format,Bt=vt.type;p.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It);let mt=Qo(vt);if(mt.__formatReadable===!1){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(mt.__typeReadable===!1){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=p.width-F&&k>=0&&k<=p.height-O&&P.readPixels(T,k,F,O,gt.convert(Lt),gt.convert(Bt),lt)}finally{let vt=nt!==null?B.get(nt).__webglFramebuffer:null;c.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(p,T,k,F,O,lt,dt,It=0){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=B.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt)if(T>=0&&T<=p.width-F&&k>=0&&k<=p.height-O){c.bindFramebuffer(P.FRAMEBUFFER,pt);let vt=p.textures[It],Lt=vt.format,Bt=vt.type;p.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It);let mt=Qo(vt);if(mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Jt),P.bufferData(P.PIXEL_PACK_BUFFER,lt.byteLength,P.STREAM_READ),P.readPixels(T,k,F,O,gt.convert(Lt),gt.convert(Bt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ie=nt!==null?B.get(nt).__webglFramebuffer:null;c.bindFramebuffer(P.FRAMEBUFFER,Ie);let se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sA(P,se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Jt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,lt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Jt),P.deleteSync(se),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(p,T=null,k=0){let F=Math.pow(2,-k),O=Math.floor(p.image.width*F),lt=Math.floor(p.image.height*F),dt=T!==null?T.x:0,It=T!==null?T.y:0;W.setTexture2D(p,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,dt,It,O,lt),c.unbindTexture()},this.copyTextureToTexture=function(p,T,k=null,F=null,O=0,lt=0){let dt,It,pt,vt,Lt,Bt,mt,Jt,Ie,se=p.isCompressedTexture?p.mipmaps[lt]:p.image;if(k!==null)dt=k.max.x-k.min.x,It=k.max.y-k.min.y,pt=k.isBox3?k.max.z-k.min.z:1,vt=k.min.x,Lt=k.min.y,Bt=k.isBox3?k.min.z:0;else{let Ae=Math.pow(2,-O);dt=Math.floor(se.width*Ae),It=Math.floor(se.height*Ae),p.isDataArrayTexture?pt=se.depth:p.isData3DTexture?pt=Math.floor(se.depth*Ae):pt=1,vt=0,Lt=0,Bt=0}F!==null?(mt=F.x,Jt=F.y,Ie=F.z):(mt=0,Jt=0,Ie=0);let Qt=gt.convert(T.format),Me=gt.convert(T.type),ht;T.isData3DTexture?(W.setTexture3D(T,0),ht=P.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(W.setTexture2DArray(T,0),ht=P.TEXTURE_2D_ARRAY):(W.setTexture2D(T,0),ht=P.TEXTURE_2D),c.activeTexture(P.TEXTURE0),c.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,T.flipY),c.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),c.pixelStorei(P.UNPACK_ALIGNMENT,T.unpackAlignment);let we=c.getParameter(P.UNPACK_ROW_LENGTH),Wt=c.getParameter(P.UNPACK_IMAGE_HEIGHT),ke=c.getParameter(P.UNPACK_SKIP_PIXELS),rn=c.getParameter(P.UNPACK_SKIP_ROWS),Tn=c.getParameter(P.UNPACK_SKIP_IMAGES);c.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),c.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),c.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),c.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),c.pixelStorei(P.UNPACK_SKIP_IMAGES,Bt);let oi=p.isDataArrayTexture||p.isData3DTexture,qt=T.isDataArrayTexture||T.isData3DTexture;if(p.isDepthTexture){let Ae=B.get(p),Rn=B.get(T),ne=B.get(Ae.__renderTarget),Pn=B.get(Rn.__renderTarget);c.bindFramebuffer(P.READ_FRAMEBUFFER,ne.__webglFramebuffer),c.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let gi=0;gi<pt;gi++)oi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(p).__webglTexture,O,Bt+gi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(T).__webglTexture,lt,Ie+gi)),P.blitFramebuffer(vt,Lt,dt,It,mt,Jt,dt,It,P.DEPTH_BUFFER_BIT,P.NEAREST);c.bindFramebuffer(P.READ_FRAMEBUFFER,null),c.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||p.isRenderTargetTexture||B.has(p)){let Ae=B.get(p),Rn=B.get(T);c.bindFramebuffer(P.READ_FRAMEBUFFER,L),c.bindFramebuffer(P.DRAW_FRAMEBUFFER,V);for(let ne=0;ne<pt;ne++)oi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.__webglTexture,O,Bt+ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ae.__webglTexture,O),qt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rn.__webglTexture,lt,Ie+ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rn.__webglTexture,lt),O!==0?P.blitFramebuffer(vt,Lt,dt,It,mt,Jt,dt,It,P.COLOR_BUFFER_BIT,P.NEAREST):qt?P.copyTexSubImage3D(ht,lt,mt,Jt,Ie+ne,vt,Lt,dt,It):P.copyTexSubImage2D(ht,lt,mt,Jt,vt,Lt,dt,It);c.bindFramebuffer(P.READ_FRAMEBUFFER,null),c.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else qt?p.isDataTexture||p.isData3DTexture?P.texSubImage3D(ht,lt,mt,Jt,Ie,dt,It,pt,Qt,Me,se.data):T.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,lt,mt,Jt,Ie,dt,It,pt,Qt,se.data):P.texSubImage3D(ht,lt,mt,Jt,Ie,dt,It,pt,Qt,Me,se):p.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,lt,mt,Jt,dt,It,Qt,Me,se.data):p.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,lt,mt,Jt,se.width,se.height,Qt,se.data):P.texSubImage2D(P.TEXTURE_2D,lt,mt,Jt,dt,It,Qt,Me,se);c.pixelStorei(P.UNPACK_ROW_LENGTH,we),c.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Wt),c.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),c.pixelStorei(P.UNPACK_SKIP_ROWS,rn),c.pixelStorei(P.UNPACK_SKIP_IMAGES,Tn),lt===0&&T.generateMipmaps&&P.generateMipmap(ht),c.unbindTexture()},this.initRenderTarget=function(p){B.get(p).__webglFramebuffer===void 0&&W.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?W.setTextureCube(p,0):p.isData3DTexture?W.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?W.setTexture2DArray(p,0):W.setTexture2D(p,0),c.unbindTexture()},this.resetState=function(){j=0,J=0,nt=null,c.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var zA={source:"minecraft",version:"1.21.1",textures:{grass_block_top:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjMtMDYtMDdUMDc6MjI6MTMrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyNS0wNy0wNlQxMTozMzo0MiswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjUtMDctMDZUMTE6MzM6NDIrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjI8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MTQwYTVmMjAtNjNmMi05MTQyLWJiZjktNTZjYTc5OGQ0NWE0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjE0MGE1ZjIwLTYzZjItOTE0Mi1iYmY5LTU2Y2E3OThkNDVhNDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjE0MGE1ZjIwLTYzZjItOTE0Mi1iYmY5LTU2Y2E3OThkNDVhNDwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxNDBhNWYyMC02M2YyLTkxNDItYmJmOS01NmNhNzk4ZDQ1YTQ8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjMtMDYtMDdUMDc6MjI6MTMrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PijIJcgAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRFv7+/ra2tAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////e2r5XAAAACZJREFUeNpiYEQDDAwMqDwGDBXkCDCgmkSCGQxQreRYCwdEawEMAHzkAOgRjJLJAAAAAElFTkSuQmCC",grass_block_side:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACVBMVEWgkYR4rDCfaTQ5/c+uAAAAM0lEQVR42qXMAQYAAQgF0flz/0OvtHwWCw0lD5FPCxYkTHlXEI0zccJG4U/3vgAFzk/rD9KOAbmGcYxqAAAAAElFTkSuQmCC",grass_block_side_overlay:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAKklEQVR42mNY+x8/RFbAgF0BQgKJDWcxMKyFwf8wGoJhkOE/fkg/BaMKABSUF2MFHsPCAAAAAElFTkSuQmCC",dirt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEWgkYSfaTRR4lx7AAAAH0lEQVR42mP4/x+K9gPJ9yDGdyADjv4y/K9HcP/+BwDqIh8FAvt7tAAAAABJRU5ErkJggg==",sand:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEXn5Lvaz6PRuorg7rCAAAAAMklEQVR42k3IMQ1EIQBAsWcCSQgguZKcACTh968sHRpmDB1+QQbZxJLpBi+OruW9v/0BPj0VPk/bAdEAAAAASUVORK5CYII=",stone:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjEtMDMtMTRUMDI6MDY6MDIrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyNS0wNi0wOFQyMzoxNzo1NyswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjUtMDYtMDhUMjM6MTc6NTcrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MGJkMjRlNWItZDJmNi0yMDRjLWJkYTktYjhlMjcxNDM1MDBmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjBiZDI0ZTViLWQyZjYtMjA0Yy1iZGE5LWI4ZTI3MTQzNTAwZjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjBiZDI0ZTViLWQyZjYtMjA0Yy1iZGE5LWI4ZTI3MTQzNTAwZjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowYmQyNGU1Yi1kMmY2LTIwNGMtYmRhOS1iOGUyNzE0MzUwMGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDMtMTRUMDI6MDY6MDIrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Po3rwMwAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAEhJREFUeNp0j8kRwDAIA1X6trAd52HHxNjhwTAIHYRWAVVgdLLB1mLAQFyjqo0yNfSFgeB58XHR/ASrZKEFuVDUctpEb88BzwDIq4MgbLsTVwAAAABJRU5ErkJggg==",oak_log:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjMtMDYtMDdUMDc6MjI6MTMrMDI6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyNS0wNy0wM1QxMDo0ODoxNCswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjUtMDctMDNUMTA6NDg6MTQrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjI8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MWJkYzdhZGQtM2U4OS1iODRjLWIwNmQtNTkwZDc5Yzk5YTU3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjFiZGM3YWRkLTNlODktYjg0Yy1iMDZkLTU5MGQ3OWM5OWE1NzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFiZGM3YWRkLTNlODktYjg0Yy1iMDZkLTU5MGQ3OWM5OWE1NzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxYmRjN2FkZC0zZTg5LWI4NGMtYjA2ZC01OTBkNzljOTlhNTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjMtMDYtMDdUMDc6MjI6MTMrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pt45B8UAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRFdFo2TD0mAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////iP65qwAAADxJREFUeNp8zkEKADAIA8HN/z/dQzHGIkUFGUQFQZXzBccEFkCAccLtGvLaD1QSl/rLBXIeNtD8pjboDAAuoQBSsYpc2QAAAABJRU5ErkJggg==",oak_log_top:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAADFBMVEW4lF+WdEF0WjZMPSbjBhurAAAAQ0lEQVR42o2PgwEAUQzF0rz9Zz6bvzbQqGZhkRNIqAMgUnu+yDXgHJjr50CmwJzeW/aAzYF96H1tuN9xAHJ/bv98Vj1pZwDF5vVWVAAAAABJRU5ErkJggg==",oak_leaves:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA1BMVEWJkYm1oJ0KAAAAC0lEQVR42mMgEQAAADAAAW6mDz8AAAAASUVORK5CYII=",water_still:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjEtMDMtMTRUMDI6MDY6MDIrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyNS0wNS0yNVQxOTozMzo0NiswMjowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjUtMDUtMjVUMTk6MzM6NDYrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZGEzNDQ5YTktNjZiOC05ZDRhLWI4ZWYtOWY1ZTVlYzcyY2E2PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmRhMzQ0OWE5LTY2YjgtOWQ0YS1iOGVmLTlmNWU1ZWM3MmNhNjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmRhMzQ0OWE5LTY2YjgtOWQ0YS1iOGVmLTlmNWU1ZWM3MmNhNjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpkYTM0NDlhOS02NmI4LTlkNGEtYjhlZi05ZjVlNWVjNzJjYTY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDMtMTRUMDI6MDY6MDIrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjkXVd4AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABlJREFUeNpi2HYGP2QYVTCSFAAAAAD//wMAHmKCEK5ME30AAAAASUVORK5CYII=",short_grass:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAX0lEQVR42oWPAQrAMAgD/T/gT/rGjJKUHWVDJFrwEmlpqBlYp/TZDQARXwREEUAgACTF39XafWOeVgMor/6As1IyAGjFxUOeLQLIIY7LN+D+JkCsOLgg5l/ADYAJN0A9oCM7n32JheQAAAAASUVORK5CYII=",poppy:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEX///9Kjyi1ISUAAABKjyjtMCwrcCq1ISXXv3+9AAAABHRSTlMAAAAAs5NmmgAAADtJREFUeNpjIBEwG4crQxjhpUVgBms5jBEargRmMJY4QRlKTopQhqMghCEIZbA4OrpARBxToFIiLkAGANLpCEv0Q990AAAAAElFTkSuQmCC",oxeye_daisy:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARElEQVR42mMYvOD79+//YZgCzQhMsuZ/1yzhGCZGsgH/3/ijGECxCygKA3rGAgIEzdL7D8SUGUC2Riim3PnUcMkgD0QAf5Wl6Fax23QAAAAASUVORK5CYII=",crafting_table_top:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAADFBMVEW4lF+uaTxVOCQZFAw8dju8AAAANklEQVR42nSLgwEAMBADg/1nro17I/ABDJiN3GfjoIymBnS5a/HPYkoYRxMtmA7DdDqm59AAAPEwAcXPwWf9AAAAAElFTkSuQmCC",crafting_table_side:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEXt6+va2Ni4lF+WdEFzOSAZFAxP9wpKAAAAN0lEQVR42mMIUlJ1cQESQIZSiKsShKEKwgzBxsamIIwQCVJVhTNgaoShahQUwCIQBgFzgAQONQAnzRlDfYruVgAAAABJRU5ErkJggg==",crafting_table_front:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEXa2Ni4lF+WdEFzOSAZFAwZXdZtAAAAT0lEQVR42lSOAQqAQBAC3Zr/vzk3u0CD9AaRFWNxW0kBQ94BCcfF9Qo7/lWD/RZwADSQlA2+DYNsoDQmDVsDhwb/HZb6jq0+QxYg5BcYDQAbmQIG7C78eAAAAABJRU5ErkJggg==",oak_planks:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEW4lF+WdEFnUCwvtsgLAAAAL0lEQVR42j3KgQWAUBiAwfueBvhHCk3bjCHkBXDOhfVgceoGxQQd20YoaL/5n++91MoEgJqQFc4AAAAASUVORK5CYII=",steve:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX////immsAzcqEhIRPQrAAAAD////immv2gl8AzcqEhISsVjNPQrBQP65AOI5YMQ9UxuqpAAAABnRSTlMAAAAAAABupgeRAAAA4ElEQVR42uXUIWjFMBDG8Xi1iefnbbyrZyZezpt9PMaoV5OPg3oRD/OycNTO+xKbue66XmFNSaDrum3sb2J+IgS+GCcNEiS3zIz9FzAkfQ5EoC4CSAUQ6/uXx7tY5wHw8AxkQQTw+gQVa4DpApjPFbCW2XsrXYAzS1XlHBFw+jbAGhEBtCwFl3MZSDtACPQhaAq6vgy0A4FnyXufBxqPUcPcEudBy1KzBDapktzU9W5gDgRG+9vATf0+oCMW8D7c/eDWSNtAuo+bHwMhQLtag64vA+3rwCl96vmfyANtM3gDGP0Cdrv5iKwAAAAASUVORK5CYII=",minecraft_logo:"data:image/png;base64,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",java_logo:"data:image/png;base64,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",minecraft_font:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAtJJREFUeNrtk6GPG1cQxj90eqBSnoIWVPKoCgg02qtK7oECwyXlBgcMH+vCAQWjolWRoVUVWEUGBQUBgYaBkUL2L4gWXQZEt5l5jq3bVZILDMjn2efVb3+aefukxffMwruGhJh4B0sooO0aTikRgGgAypHAtLuAJtPGABQKKkZIBwduJFiaYdUhpTNg2JQNiP2WeboDWDLlXOlSc/YRnCFrkeecRAQgJMGWQlgNHESYk1LAnpZLCUPMLcCIEUdKQYOQBJ9JBCER80kiQJqArJpDtllr5gim2TY8eciDait9EBbJaMXCzJJCx6+Pgj90YOn7rabQ834v+E/MNKEYshX8cwGlh+CFWAqQE2DxKZylz6JlCmax562KR3vuCfAOZEvTBE7UmGE9HBBFAwKwSCgGERPhDJq9UOJYQCdi4LUQfwQbyeRdSPvQA/MoGIyAJZgDs6PkoKw4AeRD3thuDxw6fjVkIBxlK0mOHHa8FwFaYVF/9/DyBMTCyfGOpRhDbttyXJ15+XIKQMYlCSXEfDsBidMWOGwObS8eNQDguD1y8vOQyEzwqZwN7EnoZAwth2QH1LTpBDjwQC21EpSYC7js5NvNEogTsAKeT0ACCJ7Jwc6NLwMFdgDmUsl6jWlih5Jn3Xngx5vVCqfkdWmJ7hlwSXhoDIOD0uPx/PTbm6qqaqCurSpA/v19CoqhNfSuvr+r1Y23xaiu6qurs6F6d2/G3f296rlHbVUDqNyYAO8xBZUVnKD8PgsW9fXNu/F6fDdejOUSsAIW4+h1fWOPi4HiVKWBL4+DUpVdhkcMT8ZPAKvFwv4mRvXAGMfxZrG4GUe17QxPfEjtl7/EV4Jpfvl5Bn5NM/Anz8BfOgN/82M9/i9T5qEUf4jAGvjRF7wnoqeRbjsg9p0C0JieRmwddKQnI0bFujKQ9NQjRtyiQtcNbqC4WwAN4Iaqxg6eJc6JDz6OD74blGMNvZoZAAAAAElFTkSuQmCC"},resourcePack:"Bare Bones 1.21.11"};async function VA(){let i=zA,t={};return await Promise.all(Object.entries(i.textures).map(async([e,n])=>{let s=new Image,r=new Promise(a=>{s.onload=()=>a(!0),s.onerror=()=>a(!1)});s.src=n,await r&&(t[e]=s)})),{images:t,source:i.source,version:i.version}}function Ho(i){let t=new ni(i);return t.colorSpace=ve,t.magFilter=t.minFilter=ce,t}function kA(i,t){if(!i)return t;let e=document.createElement("canvas");e.width=e.height=1;let n=e.getContext("2d");n.drawImage(i,0,0,1,1);let[s,r,a]=n.getImageData(0,0,1,1).data;return Math.max(s,r,a)-Math.min(s,r,a)>12?"#ffffff":t}function GA(i,t,e,n){let s=document.createElement("canvas");s.width=s.height=16;let r=s.getContext("2d");if(r.imageSmoothingEnabled=!1,i)r.drawImage(i,0,0,i.width,Math.min(i.width,i.height),0,0,16,16);else{let a=new Ut(t);for(let o=0;o<16;o++)for(let g=0;g<16;g++){let A=(Math.imul(g+3,1247)^Math.imul(o+9,3673)^Math.imul(g*o,637))>>>0;r.fillStyle="#"+a.clone().multiplyScalar(.75+A%100/200).getHexString(),r.fillRect(g,o,1,1)}}if(e){let a=document.createElement("canvas");a.width=a.height=16;let o=a.getContext("2d");o.drawImage(e,0,0,16,16),o.globalCompositeOperation="multiply",o.fillStyle=kA(e,n),o.fillRect(0,0,16,16),o.globalCompositeOperation="destination-in",o.drawImage(e,0,0,16,16),r.drawImage(a,0,0)}return s}function HA(i){let t=new gn;function e(I,M,w="#ffffff",x=!1){return new En({map:Ho(GA(i[I],M)),color:i[I]?kA(i[I],w):"#ffffff",alphaTest:x?.5:0,side:x?Ve:un})}let n={dirt:e("dirt","#866043"),sand:e("sand","#dbd3a0"),stone:e("stone","#838383"),grassTop:e("grass_block_top","#7fa743","#91bd59"),grassSide:new En({map:Ho(GA(i.grass_block_side,"#866043",i.grass_block_side_overlay,"#91bd59"))}),leaf:e("oak_leaves","#529134","#77ab2f",!0),logSide:e("oak_log","#6b5432"),logTop:e("oak_log_top","#a38450"),water:e("water_still","#366dc2","#3f76e4"),tableTop:e("crafting_table_top","#af8150"),tableSide:e("crafting_table_side","#a07847"),tableFront:e("crafting_table_front","#a07847"),planks:e("oak_planks","#b68d55"),poppy:e("poppy","#df5442","#ffffff",!0),daisy:e("oxeye_daisy","#f4edcd","#ffffff",!0),tallGrass:e("short_grass","#7ba63b","#91bd59",!0)};n.grass=[n.grassSide,n.grassSide,n.grassTop,n.dirt,n.grassSide,n.grassSide],n.log=[n.logSide,n.logSide,n.logTop,n.logTop,n.logSide,n.logSide],n.table=[n.tableSide,n.tableSide,n.tableTop,n.planks,n.tableFront,n.tableFront];let s=new hn(1,1,1),r=new Map;function a(I,M,w,x,v=1,_=1,E=1){r.has(I)||r.set(I,[]),r.get(I).push([M,w,x,v,_,E])}let o=new Map;for(let I=-8;I<=8;I++)for(let M=-6;M<=6;M++){if(I*I/70+M*M/38>1)continue;let w=(I+.25)**2/37+(M+.15)**2/20;if(w>1){a("water",I,-.5,M);continue}if(a("sand",I,-.5,M),w>.76||I<-3&&M>0)continue;let x=(I-1.3)**2/11+(M+.6)**2/7,v=x<.28?3:x<1?2:1;o.set(`${I},${M}`,v);for(let _=0;_<v;_++)a(_===v-1?"grass":"dirt",I,_+.5,M)}let g=(I,M)=>o.get(`${Math.round(I)},${Math.round(M)}`)??0;function A(I,M,w){let x=g(I,M);for(let v=0;v<w;v++)a("log",I,x+v+.5,M);for(let v=0;v<4;v++){let _=v<2?2:1;for(let E=-_;E<=_;E++)for(let f=-_;f<=_;f++)Math.abs(E)===_&&Math.abs(f)===_&&(v===3||(E+f+v)%2===0)||E===0&&f===0&&v<2||a("leaf",I+E,x+w-2+v+.5,M+f)}}A(-2,-1,4),A(2,-2,4),a("table",-3,g(-3,1)+.5,1);let l=new xe;for(let[I,M]of r){let w=new is(s,n[I],M.length);M.forEach(([x,v,_,E,f,b],D)=>{l.position.set(x,v,_),l.scale.set(E,f,b),l.updateMatrix(),w.setMatrixAt(D,l.matrix)}),w.castShadow=I!=="water",w.receiveShadow=!0,t.add(w)}function h(I,M,w,x=1){for(let v of[Math.PI/4,-Math.PI/4]){let _=new he(new bn(x,x),n[I]);_.position.set(M,g(M,w)+x/2,w),_.rotation.y=v,_.castShadow=!0,t.add(_)}}[[-3,2],[-2,3],[3,2],[4,0],[0,-3],[-3,-2],[1,3]].forEach(([I,M],w)=>h(w%3?"daisy":"poppy",I+.1,M)),[[-4,-1],[4,1],[-1,2],[2,-3],[3,1]].forEach(([I,M])=>h("tallGrass",I+.15,M,.8));let C=Eu(i.steve);C.position.set(-.7,g(-1,3),3.1),C.rotation.y=-.06,t.add(C);let u=i.water_still,m=-1,y=n.water.map.image;function d(I){if(!u||u.height<=u.width)return;let M=Math.floor(I*8)%Math.floor(u.height/u.width);if(M===m)return;m=M,y.getContext("2d").drawImage(u,0,M*u.width,u.width,u.width,0,0,16,16),n.water.map.needsUpdate=!0}return{island:t,animateWater:d}}function Eu(i){let t=new gn;if(!i){let a={skin:"#b8835d",shirt:"#22adb1",pants:"#4d4894",hair:"#3d2b1f"};for(let[o,g,A,l,h,C]of[["pants",-.125,.375,.25,.75,.25],["pants",.125,.375,.25,.75,.25],["shirt",0,1.125,.5,.75,.25],["skin",-.375,1.125,.25,.75,.25],["skin",.375,1.125,.25,.75,.25],["skin",0,1.75,.5,.5,.5],["hair",0,1.98,.51,.08,.51]]){let u=new he(new hn(l,h,C),new En({color:a[o]}));u.position.set(g,A,0),u.castShadow=!0,t.add(u)}return t}let e=Ho(i),n=new En({map:e,alphaTest:.5}),s=new En({map:e,alphaTest:.5,side:Ve});function r(a,o,g,A,l,h,C,u,m=!1){let y=new hn(g/16+(m?.012:0),A/16+(m?.012:0),l/16+(m?.012:0)),d=[[a+l+g,o+l,l,A],[a,o+l,l,A],[a+l,o,g,l],[a+l+g,o,g,l],[a+l,o+l,g,A],[a+l+g+l,o+l,g,A]],I=y.attributes.uv;for(let w=0;w<6;w++){let[x,v,_,E]=d[w];for(let f=0;f<4;f++){let b=w*4+f,D=I.getX(b),U=I.getY(b);I.setXY(b,(x+D*_)/i.width,1-(v+(1-U)*E)/i.height)}}let M=new he(y,m?s:n);M.position.set(h,C,u),M.castShadow=!0,t.add(M)}return r(0,0,8,8,8,0,1.75,0),r(32,0,8,8,8,0,1.75,0,!0),r(16,16,8,12,4,0,1.125,0),r(16,32,8,12,4,0,1.125,0,!0),r(40,16,4,12,4,-.375,1.125,0),r(32,48,4,12,4,.375,1.125,0),r(0,16,4,12,4,-.125,.375,0),r(16,48,4,12,4,.125,.375,0),t}function wu(i){let t=document.createElement("canvas");t.width=i.width,t.height=i.height;let e=t.getContext("2d");e.drawImage(i,0,0);let n=e.getImageData(0,0,t.width,t.height).data,s=t.width,r=t.height,a=0,o=0;for(let A=0;A<t.height;A++)for(let l=0;l<t.width;l++)n[(A*t.width+l)*4+3]>0&&(s=Math.min(s,l),a=Math.max(a,l),r=Math.min(r,A),o=Math.max(o,A));if(s>a)return i.src;let g=document.createElement("canvas");return g.width=a-s+1,g.height=o-r+1,g.getContext("2d").drawImage(t,s,r,g.width,g.height,0,0,g.width,g.height),g.toDataURL("image/png")}function WA(i){for(let[t,e]of[["minecraft_logo",["minecraft-logo","mods-minecraft-logo"]],["java_logo",["java-logo","mods-java-logo"]]]){if(!i[t])continue;let n=wu(i[t]);for(let s of e){let r=document.getElementById(s);r.src=n,r.hidden=!1,r.dataset.source="minecraft"}}}var Ye=document.getElementById("world-canvas"),XA=document.getElementById("world-stage"),ZA=window.matchMedia("(prefers-reduced-motion: reduce)");async function Tu(){let i=await VA();WA(i.images),Ye.dataset.textures=i.source,Ye.dataset.textureVersion=i.version||"";let t=new xa({canvas:Ye,alpha:!0,antialias:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setClearColor(0,0),t.outputColorSpace=ve,t.shadowMap.enabled=!0,t.shadowMap.type=Sr;let e=new Qi,n=new Wn(-12,12,7,-7,.1,80);n.position.set(12,10,23),n.lookAt(0,3,0),e.add(new gs("#e9f5ff","#98a078",1.65));let s=new Ri("#fff1d0",1.65);s.position.set(-9,14,8),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-12,right:12,top:12,bottom:-12}),s.shadow.normalBias=.06,s.shadow.bias=-2e-4,e.add(s);let r=new Ri("#a9c8ff",.3);r.position.set(8,5,-9),e.add(r);let{island:a,animateWater:o}=HA(i.images);e.add(a),a.rotation.y=-.22;let g=document.createElement("canvas");g.width=g.height=128;let A=g.getContext("2d"),l=A.createRadialGradient(64,64,3,64,64,64);l.addColorStop(0,"rgba(0,0,0,.38)"),l.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=l,A.fillRect(0,0,128,128);let h=new he(new bn(20,14),new ei({map:new ni(g),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=-2.1,e.add(h);function C(){let{width:E,height:f}=XA.getBoundingClientRect();if(!E||!f)return;let b=Math.max(6.5,9*f/E),D=E/f;n.left=-b*D,n.right=b*D,n.top=b,n.bottom=-b,n.updateProjectionMatrix(),t.setSize(E,f,!1)}let u=new ResizeObserver(C);u.observe(XA),C();let m=0,y=0,d=!0,I=!1,M=null,w=!1;window.addEventListener("launch-transition",E=>{M=E.detail?performance.now():null,w=!!E.detail,E.detail||(n.zoom=1,C(),t.render(e,n),Ye.dataset.zoom="1.00")}),window.addEventListener("game-running",E=>{I=E.detail});let x=new IntersectionObserver(E=>{d=E[0].isIntersecting});x.observe(Ye);let v=0;function _(E){if(requestAnimationFrame(_),!d||document.hidden||I&&!w){m=E;return}if(E-m<1e3/30)return;let f=Math.min((E-m)/1e3,.05);if(m=E,I||(y+=f,a.rotation.y+=f*.22,ZA.matches||o(y)),w){let b=ZA.matches?1:Math.min(1,(E-M)/1500);n.zoom=1+1.8*(1-(1-b)**3),n.updateProjectionMatrix(),b===1&&(w=!1)}t.render(e,n),v++,Ye.dataset.frames=String(v),Ye.dataset.angle=a.rotation.y.toFixed(3),Ye.dataset.ready="true",Ye.dataset.zoom=n.zoom.toFixed(2)}requestAnimationFrame(_),Ye.addEventListener("webglcontextlost",E=>{E.preventDefault(),document.getElementById("scene-fallback").hidden=!1}),Ye.addEventListener("webglcontextrestored",()=>document.getElementById("scene-fallback").hidden=!0),window.addEventListener("pagehide",()=>{u.disconnect(),x.disconnect(),t.dispose()},{once:!0})}Tu().catch(i=>{console.error("World scene:",i),document.getElementById("scene-fallback").hidden=!1,Ye.hidden=!0});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
