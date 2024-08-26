// Import necessary namespaces
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppCore
{
    // Represents a model used for filtering or searching products
    public class ProductFilterModel
    {
        // Property to store the search string used to filter products based on their name, code, or other attributes
        // The '?' indicates that the string is nullable, meaning it can be null or have no value
        public string? SearchString { get; set; }
    }
}
