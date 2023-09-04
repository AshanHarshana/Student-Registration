using AutoMapper;
using StudentRegistration.ViewModel;
using StudentRegistration.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRegistration.Common
{
    public class AutoMapperConfig
    {
        public static Mapper AutoMap;

        public static void InitMapper()
        {

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<StudentDetail,VM_Student>().ReverseMap();
            });

            AutoMap = new Mapper(config);

        }
    }
}
