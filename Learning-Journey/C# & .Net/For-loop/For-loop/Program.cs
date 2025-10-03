using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace For_loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("The Number is {0}", i);
            }

            Console.WriteLine("Enter the number of times you want to loop");
            int loopCounter = Convert.ToInt32(Console.ReadLine());
            Console.Write("What do you want to print? ");
            string userInput = Console.ReadLine();

            if(loopCounter <= 0)
            {
                Console.WriteLine("Sorry, Please enter a number greater than 0");
            }

            else
            {
                for(int i = 0; i< loopCounter; i++)
                {
                    Console.WriteLine(userInput);
                }
            }


            // While Loop -

            int j = 0;

            while (j < 10)
            {
                Console.WriteLine("The Number is {0}", j);
                j++;
            }

            // conditional operator ? :

            int age = -10;
            string eligibility = (age >= 18) ? "You are eligible to vote" : "Invalid age or You are not eligible to vote";
            Console.WriteLine(eligibility);


            Console.ReadLine();
        }
    }
}
