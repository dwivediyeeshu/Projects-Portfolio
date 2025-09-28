using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            // Data Types -

            int age;
            age = 23;   //or
            int age2 = 23;

            int x = 5, 
                y = 6, 
                z = 50;


            Console.WriteLine(x+y+z);

            Console.WriteLine(age);
            Console.WriteLine(age2 + age);
            Console.WriteLine(int.MaxValue);
            Console.WriteLine(int.MinValue);
             
            long bigNumber = 123456789012345L;  // add L at the end to indicate it's a long
            Console.WriteLine(bigNumber);
            Console.WriteLine(long.MaxValue);
            Console.WriteLine(long.MinValue);

            double price = -10.99;
            Console.WriteLine(price);
            Console.WriteLine(double.MaxValue);
            Console.WriteLine(double.MinValue);

            float price2 = 12.99F;    // add F at the end to indicate it's a float
            Console.WriteLine(price2);
            Console.WriteLine(float.MaxValue);
            Console.WriteLine(float.MinValue);

            decimal money = 1000.5M;      // add M at the end to indicate it's a decimal
            Console.WriteLine(money);
            Console.WriteLine(decimal.MaxValue);
            Console.WriteLine(decimal.MinValue);

            string name = "John";
            char letter = 'A';
            Console.WriteLine(name);
            Console.WriteLine("Your Name is: " + name);
            Console.WriteLine(letter);

            bool isWorking = true;   // or false
            Console.WriteLine(isWorking);

            // Conversion between data types

            string strNumber = "1234";
            int intNumber = Convert.ToInt32(strNumber);
            Console.WriteLine(intNumber);


            Console.ReadLine();
        }
    }
}
