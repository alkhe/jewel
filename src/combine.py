import os, urllib.parse, http.client

if __name__ == "__main__":
	outputFile = "../lib/jewel.js"
	outputFileMin = "../lib/jewel-min.js"
	fout = open(outputFile, "w")
	stack = ["."]
	while len(stack) > 0:
		next = stack.pop(0)
		if os.path.isdir(next):
			newdir = os.listdir(next)
			for name in newdir:
				stack.append(next + "/" + name)
		elif os.path.isfile(next) and next.endswith(".js"):
			fin = open(next, "r")
			fout.write("// %s\n" % next)
			for line in fin:
				fout.write(line)
			fout.write("\n\n")
			fin.close()
	fout.close()

	with open(outputFile, "r") as f:
		fullcode = f.read()

	os.system("java -jar ../compiler.jar ../lib/jewel.js > ../lib/jewel-min.js")

	#fout = open(outputFileMin, "wb");

	#params = urllib.parse.urlencode([
	#('js_code', fullcode),
	#('compilation_level', 'SIMPLE_OPTIMIZATIONS'),
	#('output_format', 'text'),
	#('output_info', 'compiled_code'),
	#])
	#
	#headers = { "Content-type": "application/x-www-form-urlencoded" }
	#conn = http.client.HTTPConnection('closure-compiler.appspot.com')
	#conn.request('POST', '/compile', params, headers)
	#response = conn.getresponse()
	#data = response.read()
	#fout.write(data)
	#conn.close()
	#fout.close()
