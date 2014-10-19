var RTL$ = {
    extend: function extend(methods){
        function Type(){
            for(var m in methods)
                this[m] = methods[m];
        }
        Type.prototype = this.prototype;

        var result = methods.init;
        result.prototype = new Type(); // inherit this.prototype
        result.prototype.constructor = result; // to see constructor name in diagnostic
        
        result.extend = extend;
        return result;
    }
};
var m = function (){
var T = RTL$.extend({
	init: function T(){
		this.i = 0;
	}
});
var D = T.extend({
	init: function D(){
		T.prototype.init.call(this);
	}
});
var dp = null;
T.prototype.p = function(){
	this.i = 123;
}
T.prototype.p2 = function(i/*INTEGER*/){
	return i;
}

function acceptPointer(p/*PT*/){
}

function acceptReferenace(p/*VAR T*/){
}

function acceptConstReferenace(p/*T*/){
}
T.prototype.useSelfAsPointer = function(){
	var pVar = null;
	pVar = this;
	acceptPointer(this);
	acceptReferenace(this);
	acceptConstReferenace(this);
}
D.prototype.p = function(){
	T.prototype.p.call(this);
}
D.prototype.p2 = function(i/*INTEGER*/){
	return T.prototype.p2.call(this, i);
}
dp = new D();
dp.p();
dp.p();
}();
