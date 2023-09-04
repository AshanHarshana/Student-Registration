using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using StudentRegistration.DAL;

namespace StudentRegistration.Controllers
{
    public class StudentController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Student
        public System.Object GetStudentDetail()
        {
            var result = db.StudentDetail.Where(i => i.IsActive == true).ToList();
            foreach (var x in result)
            {
                if (x.DateOfBirth != null)
                {
                    DateTime DOB = DateTime.Parse(x.DateOfBirth.ToString());
                    string date = DOB.ToString("MM/dd/yyy");
                    x.DateOfBirth = DateTime.Parse(date);
                }
            }
            return result;
        }

        // GET: api/Student/5
        [ResponseType(typeof(StudentDetail))]
        public IHttpActionResult GetStudentDetail(long ID)
        {
            var result = db.StudentDetail.Where(i => i.StudentID == ID).SingleOrDefault();
            return Ok(new { result });
        }

        //POST: api/Student
        [ResponseType(typeof(StudentDetail))]
        public IHttpActionResult PostStudent(StudentDetail Student)
        {
            try
            {
                DateTime now = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Sri Lanka Standard Time"));

                if (Student.StudentID == 0 || Student.StudentID == null)
                {
                    Student.IsActive = true;
                    Student.IsDelete = false;
                    Student.AddDate = now;
                    Student.AddUser = "Admin";
                    Student.ModDate = now;
                    Student.ModUser = "Admin";

                    db.StudentDetail.Add(Student);
                    db.SaveChanges();

                    return CreatedAtRoute("DefaultApi", new { id = Student.StudentID }, Student);
                }
                else
                {
                    var extStudent = db.StudentDetail.Where(i => i.StudentID == Student.StudentID).SingleOrDefault();

                    extStudent.FirstName = Student.FirstName;
                    extStudent.LastName = Student.LastName;
                    extStudent.Mobile = Student.Mobile;
                    extStudent.Email = Student.Email;
                    extStudent.DateOfBirth = Student.DateOfBirth;
                    extStudent.AddUser = Student.Address;
                    extStudent.AddDate = now;
                    extStudent.AddUser = "Admin";

                    db.SaveChanges();

                    return CreatedAtRoute("DefaultApi", new { id = Student.StudentID }, Student);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //POST: api/Student
        public IHttpActionResult Student(long ID, string Delcomment)
        {
            StudentDetail Student = new StudentDetail();
            try
            {
                DateTime now = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Sri Lanka Standard Time"));

                var extStudent = db.StudentDetail.Where(i => i.StudentID == ID).SingleOrDefault();

                extStudent.IsActive = false;
                extStudent.IsDelete = true;
                extStudent.DelDate = now;
                extStudent.DelUser = "Admin";
                extStudent.DelComment = Delcomment;

                db.SaveChanges();

                return CreatedAtRoute("DefaultApi", new { id = ID }, Student);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}