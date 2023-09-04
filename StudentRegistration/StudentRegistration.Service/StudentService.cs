using System;
using StudentRegistration.DAL;
using StudentRegistration.Common;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace StudentRegistration.Service
{
    public class StudentService
    {
        DBModel DB;
        Mapper AutoMap;

        public StudentService()
        {
            if(DB is null)
            {
                DB = new DBModel();
            }
            AutoMap = StudentRegistration.Common.AutoMapperConfig.AutoMap;
        }

        public StudentService(DBModel DB)
        {
            this.DB = DB;
            AutoMap = StudentRegistration.Common.AutoMapperConfig.AutoMap;
        }
    }
}
