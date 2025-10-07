using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayLesson
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[5];
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write("Enter a number: ");
                numbers[i] = Convert.ToInt32(Console.ReadLine());

            }

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"{numbers[i]} ");
            }

            int[] num = { 1, 2, 3, 4, 5 };

            // Array methods

            // Reversing an array

            Array.Reverse(numbers);
            int[] revArray = numbers;

            Console.WriteLine("\nReversed Array:");
            foreach (int item in revArray)
            {
                Console.Write($"{item} ");
            }

            // Sorting an array

            Array.Sort(numbers);
            Console.WriteLine("\nSorted Array:");
            foreach (int item in numbers)
            {
                Console.Write($"{item} ");
            }

            // Finding the index of an element
            int index = Array.IndexOf(numbers, 3);
            Console.WriteLine($"\nIndex of 3: {index}");

            // Resizing an array
            Array.Resize(ref numbers, 10);
            Console.WriteLine("\nResized Array Length: " + numbers.Length);
            Console.WriteLine("Elements in Resized Array:");
            foreach (int item in numbers)
            {
                Console.Write($"{item} ");
            }

            // Finding the length of an array
            Console.WriteLine("\nLength of Array: " + numbers.Length);

            // Copying an array

            int[] copyArray = new int[numbers.Length];
            Array.Copy(numbers, copyArray, numbers.Length);
            Console.WriteLine("\nCopied Array:");
            foreach (int item in copyArray)
            {
                Console.Write($"{item} ");
            }

            // Finding an element in an array
            bool containsThree = Array.Exists(numbers, element => element == 3);
            Console.WriteLine($"\nArray contains 3: {containsThree}");

            // Finding the maximum and minimum values in an array
            int max = numbers.Max();
            int min = numbers.Min();
            Console.WriteLine($"Max: {max}, Min: {min}");


            // Clearing an array
            Array.Clear(numbers, 0, numbers.Length);
            Console.WriteLine("\nCleared Array:");
            foreach (int item in numbers)
            {
                Console.Write($"{item} ");
            }




            Console.ReadLine();
        }
    }
}
