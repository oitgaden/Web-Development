using System.Collections.Generic;

namespace Database
{
    public static class InMemory
    {
        public static List<Student> Students = new List<Student> {
            new Student {
                Id = 1,
                FirstName = "Tom",
                LastName = "Jones"
            },
            new Student {
                Id = 2,
                FirstName = "Mary",
                LastName = "Smith"
            }
        };
    }
}