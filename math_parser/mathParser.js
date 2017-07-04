MathParser = function() {
	var o = this, p = o.operator = {};
	p["+"] = function(n, m){return n + m;}
	p["-"] = function(n, m){return n - m;}
	p["*"] = function(n, m){return n * m;}
	p["/"] = function(m, n){return n / m;}

	o.custom = {}, 
	o.add = function(n, f){this.custom[n] = f;}
}

MathParser.prototype.eval = function(e) {
	var v = [], p = [], i, _, a, c = 0, s = 0, x, d = null;
	var cp = e, e = e.split(""), n = "0123456789.", o = "+-/*", f = this.operator;
	
	for(i = 0, l = e.length; i < l; i++){
		if(o.indexOf(e[i]) > -1)
			e[i] == "-" && (s > 1 || d === null) && ++s, !s && d !== null && (p.push(e[i]), s = 2), "+-".indexOf(e[i]) < (d = null) && (c = 1);
		else if(a = n.indexOf(e[i]) + 1 ? e[i++] : ""){
			while(n.indexOf(e[i]) + 1) a += e[i++];
			v.push(d = (s & 1 ? -1 : 1) * a), c && v.push(f[p.pop()](v.pop(), v.pop())) && (c = 0), --i, s = 0;
		}
	}
	for(c = v[0], i = 0, l = p.length; l--; c = f[p[i]](c, v[++i]));
		return c;
}

MathParser.prototype.parse = function(e) {
	var p = [], f = [], ag, n, c, a, o = this, v = "0123456789.+-*/(, )";
	for(var x, i = 0, l = e.length; i < l; i++){
		if(v.indexOf(c = e.charAt(i)) < 0){
			for(a = c; v.indexOf(c = e.charAt(++i)) < 0; a += c); f.push((--i, a));
		}
	else if(!(c == "(" && p.push(i)) && c == ")"){
		if(a = e.slice(0, (n = p.pop()) - (x = v.indexOf(e.charAt(n - 1)) < 0 ? y = (c = f.pop()).length : 0)), x)
			for(var j = (ag = e.slice(n, ++i).split(",")).length; j--; ag[j] = o.eval(ag[j]));
				l = (e = a + (x ? o.operator.f(c, ag) : o.eval(e.slice(n, ++i))) + e.slice(i)).length, i -= i - n + c.length;
		}
	}
	return o.eval(e);
}