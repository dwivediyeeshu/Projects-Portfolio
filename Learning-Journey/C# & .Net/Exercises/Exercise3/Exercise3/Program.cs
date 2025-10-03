using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise3
{
    internal class Program
    {
        /*
         * Ask the user for a number for the table
         * Write a For loop to print X times table
         */
        static void Main(string[] args)
        {
            Console.Write("Enter a number to print its multiplication table:");
            int number = Convert.ToInt32(Console.ReadLine());

            for(int i = 1; i <= 10; i++)
            {
                int result = number * i;
                Console.WriteLine($"{number} x {i} = {result}");
            }

            Console.ReadLine();
        }
    }
}
