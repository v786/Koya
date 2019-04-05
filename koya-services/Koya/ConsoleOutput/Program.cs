using System;
using DataAccessLayer.Dao;
namespace ConsoleOutput
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Bitches!");
            foreach (var i in new EstateDao().getAll()) {
                Console.WriteLine(i._advance);
            }
        }
    }
}
