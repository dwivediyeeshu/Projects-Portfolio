using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace String_part2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string message = "C# is awesome!";
            //char[] 

            Console.WriteLine(message);
            Console.WriteLine(message[0]); //C
            Console.WriteLine(message[1]); // #
            Console.WriteLine(message[2]); // (space)
            //Console.WriteLine(message[15]); // System.IndexOutOfRangeException: 'Index was outside the bounds of the array.'
            Console.WriteLine(message.Length);

            for (int i = 0; i < message.Length; i++)
            {
                Console.Write(message[i] + " ");
                Thread.Sleep(250);     //1000ms = 1sec

            }

            Console.WriteLine("Enter your name:");
            string name = Console.ReadLine();

            Console.WriteLine($"Hello {name}, welcome to C# programming!");

            if(name != "")
            {
                Console.WriteLine("0");
            }

            if(!string.IsNullOrEmpty(name))
            { 
                Console.WriteLine("1");    ////null "
            }

            if(!name.Equals(""))    
            {
                Console.WriteLine("2");
            }

            Console.ReadLine();
        }
    }
}
