using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Operators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int age = 25;

            age++;   // age = age + 1;
            Console.WriteLine(age);

            age--;  
            Console.WriteLine(age);

            age = age + 10;  //age += 10;
            Console.WriteLine(age);

            // + - * / %
            /*
             + Addition
             - Subtraction
             * Multiplication
             / Division
             % Modulus (Remainder)
                
            */

            string name = "John";
            name += " Cena"; // name = name + " Cena"

            char ch = 'a';
            ch += 'b'; // ch = (char)(ch + 'b')
            Console.WriteLine(ch);

            Console.WriteLine(name);

            int i = 0;
            Console.WriteLine(i++); // Post Increment   // increment after the statement is executed. Output: 0
            Console.WriteLine(++i); // Pre Increment    // increment before the statement is executed. Output: 2

            int x = 24;
            int y = 9;

            Console.WriteLine(x / y);  // 2
            Console.WriteLine(x % y);  // 6

            Console.ReadLine();

            
        }
    }
}
