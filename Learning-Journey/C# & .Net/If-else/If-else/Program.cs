using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace If_else
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter first number: ");
            int firstNumber = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter second number: ");
            int secondNumber = Convert.ToInt32(Console.ReadLine());

            int answer = firstNumber * secondNumber;

            Console.Write("Value of " + firstNumber + " x " + secondNumber + ": ");
            string answerInput = Console.ReadLine();
            int answerOutput = Convert.ToInt32(answerInput);

            if(answer == answerOutput)
            {
                Console.WriteLine("Correct!");
            }
            else
            {
                Console.WriteLine("Incorrect! The correct answer is {0} ",  answer);
            }
        }
    }
}
