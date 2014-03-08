import os

if __name__=="__main__":
	outputFile = "../lib/jewel.js";
	fout = open(outputFile, "w");
	stack = ["."]
	while len(stack) > 0:
		next = stack.pop(0)
		if os.path.isdir(next):
			newdir = os.listdir(next)
			for name in newdir:
				stack.append(next + "/" + name)
		elif os.path.isfile(next) and next.endswith(".js"):
			fin = open(next,"r")
			fout.write("// %s\n" % next);
			for line in fin:
				fout.write(line)
			fout.write("\n\n")
			fin.close()
	fout.close();