using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Input_Output
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name:");
            string name = Console.ReadLine();

            Console.Write("Enter your age:");
            string ageInput = Console.ReadLine();
            int age = Convert.ToInt32(ageInput);

            Console.Write("Your name is ");
            Console.Write(name);
            Console.Write(" and you are ");
            Console.Write(age);
            Console.WriteLine();

            // String Concatentation

            Console.WriteLine("Your name is " + name + " and you are " + age);

            // String Interpolation

            Console.WriteLine($"Your name is {name} and you are {age}");





        }
    }
}
