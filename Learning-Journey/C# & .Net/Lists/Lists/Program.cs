using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lists
{
     class Program
    {
        static void Main(string[] args)
        {
            List<int> listNumbers = new List<int>();
            listNumbers.Add(1);
            listNumbers.Add(2);
            listNumbers.Add(3);

            listNumbers.GroupBy(x => x % 2 == 0).ToList().ForEach(g =>
            {
                Console.WriteLine(g.Key ? "Even numbers:" : "Odd numbers:");
                foreach (var number in g)
                {
                    Console.WriteLine(number);
                }
            });

            Console.ReadLine();
        }
    }
}
