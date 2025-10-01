using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nullable_Non_Nullable
{
    internal class Program
    {
        static void Main(string[] args)
        {
            long mobileNumber = 12399999999;
            // mobileNumber = null; // This line would cause a compile-time error because 'long
            // is a non-nullable value type.
            Console.WriteLine(" Mobile Number = {0}", mobileNumber); 

            long? optionalMobileNumber = null; // This is valid because 'long?' is a nullable value type.
            Console.WriteLine(" Another Mobile Number = {0}", optionalMobileNumber);

            Nullable<long> anotherOptionalMobileNumber = 9876543210; // This is also valid.
            Console.WriteLine(" Yet Another Mobile Number = {0}", anotherOptionalMobileNumber);


            Console.ReadLine();
        }
    }
}
