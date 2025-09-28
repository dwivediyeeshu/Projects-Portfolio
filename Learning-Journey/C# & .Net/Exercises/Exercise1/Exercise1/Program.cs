using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercises
{
    class Program
    {
        /*
         * Define a variable to hold your name
         * Define a variable to hold your phone number
         * Define a variable to hold your age
         * Print variables line by line to the screen
         * Extra: define variables using the var keyword
         */
        static void Main(string[] args)
        {
            string name = "John Cena";
            var number = "123-456-7890";
            int age = 44;

            Console.WriteLine(name);
            Console.WriteLine(number);
            Console.WriteLine(age);


            Console.ReadLine();
        }
    }
}
