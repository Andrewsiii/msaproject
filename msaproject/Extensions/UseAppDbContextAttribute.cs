using HotChocolate.Types;
using HotChocolate.Types.Descriptors;
using msaproject.Data;
using System.Reflection;

namespace msaproject.Extensions
{
    public class UseAppDbContextAttribute : ObjectFieldDescriptorAttribute
    {
        public override void OnConfigure(
            IDescriptorContext context,
            IObjectFieldDescriptor descriptor,
            MemberInfo member)
        {
            descriptor.UseDbContext<AppDbContext>();
        }
    }
}
