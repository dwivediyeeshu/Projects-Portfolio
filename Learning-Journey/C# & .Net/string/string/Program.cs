using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @string
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string path ="C:\\Temp\\MyFile.txt";       // Use double backslashes to escape backslashes in string literals
            // \t is interpreted as a tab character
            // \n is interpreted as a newline character

            string speech = "He said \"something\"";     // Use backslash to escape double quotes in string literals
            string name = "Hello 'World'";      // Single quotes do not need to be escaped in double-quoted string literals

            string verbatimPath = @"C:\Temp\MyFile.txt"; 
            // Use @ to create a verbatim string literal where backslashes are treated as literal characters

            Console.WriteLine(path);
            Console.WriteLine(speech);
            Console.WriteLine(verbatimPath);
            Console.WriteLine("Your name is " + name);

            // $ is used for string interpolation
            // $  +
            //$"Your name is {name}"
            // "Your name is " + name

            string interpolated = $"Your name is {name}";
            Console.WriteLine(interpolated);
            string multiLine = @"This is a
multi-line
string literal.";

            Console.WriteLine(multiLine);

            string multiLineInterpolated = $@"This is a
multi-line
string literal. Your name is {name}";
            Console.WriteLine(multiLineInterpolated);

            string empty = string.Empty; // Preferred way to represent an empty string
            string alsoEmpty = ""; // Valid but less preferred way to represent an empty string
            string nullString = null; // Represents a null string reference

            char firstChar = name[0]; // Accessing the first character of the string
            Console.WriteLine($"The first character of your name is '{firstChar}'");
            Console.WriteLine(empty == alsoEmpty); // True
            Console.WriteLine(empty == nullString); // False

            Console.Write("Enter your name: ");
            string newName = Console.ReadLine();

            if (newName == String.Empty)
            {
                Console.WriteLine("Please Enter a valid name");
            }
            else
            {
                Console.WriteLine($"Hello {newName}");
            }

            // Compare strings

            string a = "Hello";
            string b = "hello";
            string c = "Hello";

            // "Hello" != "hello"   Case Sensitive

            if(a == b)
            {
                Console.WriteLine("a equals b");
            }
            else if(a.Equals(c)){
                Console.WriteLine("a equals c");
            }
            else
            {
                Console.WriteLine("a does not equal b");
            }


            Console.ReadLine();
        }
    }
}
