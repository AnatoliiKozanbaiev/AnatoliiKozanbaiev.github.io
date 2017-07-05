/* Basic operations:
   ( and ) Precedence operator
   + Addition
   - Subtraction
   * Multiplication
   / Division
   */

/* Constructor. Generates an instance of MathParser
 * It defined an "operator" object that lets you define your own operators
 */
 MathParser = function() {
 	var o = this, 
 	p = o.operator = {};

 	p["+"] = function(n, m){return n + m;}
 	p["-"] = function(n, m){return n - m;}
 	p["*"] = function(n, m){return n * m;}
 	p["/"] = function(m, n){return n / m;}

 	o.custom = {}, 

	/* MathParser.add(name: String, handler: Function(args): Number)
	 * Adds a customized function to the parser.
	 * name - name that should be used in the expression to call the user function
	 * handler - function that will receive the arguments, it must return a number
	 */	
	 o.add = function(n, f){this.custom[n] = f;}
	}

	MathParser.prototype.eval = function(e) {
		var v = [], p = [], i, a, c = 0, s = 0, x, d = null;
		// before proceeding directly to parsing the input expression 
		// it is desirable to remove extra characters: spaces
		// compare
		var cp = e, e = e.split(""), 
		// numbers
		n = "0123456789.", 
		// operators
		o = "+-/*", 
		// current operator
		f = this.operator;

		// evaluate a string of JavaScript code in the context of an object
		// do a pass along the entire length of the incoming expression (string)
		for(i = 0, l = e.length; i < l; i++) {
			// look at the number of the character
			// returns the number of the searchElement in the string of operators or -1, if it does not exist
			if(o.indexOf(e[i]) > -1)
				// compare. if current operator equally is '-', pass all conditions, do the increment of var s
				e[i] == "-" && (s > 1 || d === null) && ++s, 
				!s && d !== null && (p.push(e[i]), s = 2),
				// compare string '+-'
				"+-".indexOf(e[i]) < (d = null) && (c = 1);
			// look if in string numbers is searchElement + 1 and then we have condition for ternary operator:
			else if(a = n.indexOf(e[i]) + 1 ? e[i++] : "") {
				// till searchElement in string numbers: make сoncatenation with next character e
				while(n.indexOf(e[i]) + 1) a += e[i++];
				// push in v array after checking the ternary operator and multiplying
				v.push(d = (s & 1 ? -1 : 1) * a), 
				// when value of c is true: 
				// make push this.operator in array v and delete the last element from array v
				c && v.push(f[p.pop()](v.pop(), v.pop())) && (c = 0), --i, s = 0;
			}
		}
		for(c = v[0], i = 0, l = p.length; l--; c = f[p[i]](c, v[++i]));
			return c;
	}

/* MathParser.parse(expression: String): Number
 * Parses a set of pre-defined commands to make a mathematical expression.
 * expression - mathematical expression that will be parsed
 */
 MathParser.prototype.parse = function(e) {
 	var p = [], f = [], ag, n, c, a, 
 	// operator
 	o = this, 
 	// possible values that we will compare
 	// other characters our parser will not perceive
 	v = "0123456789.+-*/(, )";
 	// do a pass along the entire length of the incoming expression (string)
 	for(var x, i = 0, l = e.length; i < l; i++){
 		// in array v check searchElement (at the same time we assign to a variable c value from incoming expressions)
 		// and use charAt(), which returns the specified character from the string
 		if(v.indexOf(c = e.charAt(i)) < 0){
 			// in array v we check next expression searchElement
 			// and push in function array string which have two attributes(after parsing)
 			for(a = c; v.indexOf(c = e.charAt(++i)) < 0; a += c); f.push((--i, a));
 		}
 	// parser of brackets
 	// let's find the occurrence of the symbol "(" in the line:
 	// find the first closing bracket behind the opening one
 	// in array p we'll not push value i if:
 	else if(!(c == "(" && p.push(i)) && c == ")"){
 		// we consider the expression between the brackets:
 		// parse the expression:
 		// extracts a portion of the expression string from first character and returns a new line
 		// quantity of variable n will be the last value of array p
 		if(a = e.slice(0, (n = p.pop()) - (x = v.indexOf(e.charAt(n - 1)) < 0 ? y = (c = f.pop()).length : 0)), x)
 			// do string extracts
 			// splits the string into an array of strings by dividing the string with the "," substring
 			for(var j = (ag = e.slice(n, ++i).split(",")).length; j--; ag[j] = o.eval(ag[j]));
 				l = (e = a + (x ? o.operator.f(c, ag) : o.eval(e.slice(n, ++i))) + e.slice(i)).length, i -= i - n + c.length;
 		}
 	}
 	return o.eval(e);
 }