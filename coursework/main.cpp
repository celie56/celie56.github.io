
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main(){
	ifstream input ("courses.txt");
	string temp = "";
	string term = "";
	string school = "";
	string department = "";
	string number = "";
	string desc = "";
	cout << "<h2>University Courses</h2>";
	cout << "<table><thead>";
	cout << "<tr><th class='sort' data-sort='term'>Term</th>";
	cout << "<th class='sort' data-sort='department'>Department</th>";
	cout << "<th class='sort' data-sort='num'>Course Number</th>";
	cout << "<th class='' data-sort=''><input class='search' placeholder='Search for something specific'></th></tr></thead>\n";
	cout << "<tbody class='list'>";
	while (true){
		input >> temp;
		input >> term;
		term += " " + temp;
		input.ignore();
		getline(input, school);
		while (true){
			input >> temp;
			if (temp == "end"){
				cout << "</tbody></table>";
				// cout << "<script src='http://listjs.com/no-cdn/list.js'></script>\n";
				cout << "<script>var options = { valueNames:['term', 'department', 'desc', 'num']};";
				cout << "var courses = new List('courses', options);</script>\n";
				return 0;
			}
			if (temp == "---"){
				input.ignore();
				break;
			}
			department = temp;
			input >> number;
			getline(input, desc);
			cout << "<tr><td class='term'>";
			cout << term + "</td><td class='department'>" + department + "</td><td class='num'>" ;
			cout << number + "</td><td class='desc'>" + desc;
			cout << "</td></tr>\n";
		}
		//cout << term + "\t" + department + "\t" + number + '\n';
	}
	return 0;
}
