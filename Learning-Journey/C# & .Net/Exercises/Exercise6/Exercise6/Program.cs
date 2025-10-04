using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise6
{
    internal class Program
    {
        /*
         *Ask user to enter password, and store
         *Ask user to re-enter password, and store
         * Check if they are both contain something
         * if so check if they are the same
         * if they are, print "Password set"
         * if they are not, print "Passwords do not match"
         * if they are empty, print "Password cannot be empty"
         */

        static void Main(string[] args)
        {

            Console.Write("Please enter a password:");
            string password = Console.ReadLine();

            Console.Write("Please re-enter your password:");
            string password2 = Console.ReadLine();

            if(!string.IsNullOrEmpty(password))
            {
                if(!string.IsNullOrEmpty(password2))
                {
                    // Both passwords contain something
                }
                else
                {
                    Console.WriteLine("Please re-enter your password");
                    return;
                }
                if (password.Equals(password2))
                {
                    Console.WriteLine("Password set");
                }
                else
                {
                    Console.WriteLine("Passwords do not match");
                }
            }

            else
            {
                Console.WriteLine("Please enter a password");
            }

                Console.ReadLine();

        }
    }
}
