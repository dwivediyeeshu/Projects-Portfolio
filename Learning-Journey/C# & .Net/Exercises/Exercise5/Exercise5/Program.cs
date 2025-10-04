using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise5
{
    internal class Program
    {

        /*
         * Ask user to input message
         * Print the message in order
         * Print the message in reverse order
         */

        static void Main(string[] args)
        {
            Console.Write("Please enter a message:");
            string message = Console.ReadLine();

            // Print the message in order
            Console.WriteLine("Message in order:");
            Console.WriteLine(message);

            // Print the message in reverse order
            Console.WriteLine("Message in reverse order:");

            for(int i = message.Length - 1; i>=0; i--)
            {
                Console.Write(message[i]);
            }

            Console.ReadLine();
        }
    }
}
