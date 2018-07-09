using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactVueDemo.Startup))]
namespace ReactVueDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
