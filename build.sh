# Notes on building
# Windows - requires cygwin installed and cygwin/bin in PATH



# Not currently necessary as courses is all set
# rm $(find ./pages/ -name "*courses*")
# cd coursework
# g++ -std=c++11 main.cpp -o o
# ./o <courses.txt >../pages/04courses.html
# cd ..

echo "starting build :)"
echo "Ready.				RRRAAAAWWWRRR"
echo "Set.  				RRRAAAAWWWRRR"
echo "Go.   				RRRAAAAWWWRRR"

echo " "
echo "------------------------------------"
echo "Files completed"
echo " "

# Actual Stuff
rm *.html

for file in pages/*.html; do
	TEMP="$(basename $file | head -c 2)"
	if [ "$TEMP" = "99" ]
	then
		continue
	fi
	name="$(basename $file | cut -c 3-)"
	echo "$name"
	echo "<li><a href='#${name%%.*}'>${name%%.*}</a></li>" >> link.html
	echo "<div class='outer'><div class='content' id='${name%%.*}'>" >> content.html
	cat < "$file" >> "content.html"
	echo "</div></div>" >> content.html
done

cat < base/header.html > index.html
#echo "<nav><ul>" >> ../index.html
cat < link.html >> index.html
echo "</ul></nav><div id='content'>" >> index.html
cat < content.html >> index.html
echo "</div>" >> index.html
cat < base/footer.html >> index.html

rm link.html
rm content.html