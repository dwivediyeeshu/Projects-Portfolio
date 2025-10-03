using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumericFormatting
{
    internal class Program
    {
        static void Main(string[] args)
        {

            double value = 1000D / 12.34D;
            Console.WriteLine(value);
            Console.WriteLine(string.Format("{0:0.00}", value));
            Console.WriteLine(string.Format("{0:0.0}", value));
            Console.WriteLine(string.Format("{0:0.000}", value));

            double money = 10D / 3D;
            Console.WriteLine(money);

            Console.WriteLine(string.Format("${0:0.00}", money));

            // TryParse example

            Console.Write("Enter a number: ");
            string numInput = Console.ReadLine();
            int num = 0;

            int.TryParse(numInput, out num);
            Console.WriteLine("You entered: " + num);

            Console.ReadLine();
        }
    }
}
