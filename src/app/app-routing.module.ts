// admin Routes
import { AddsubjectComponent } from './admin/component/addsubject/addsubject.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
// Doctors Routes
import { ResetpasswordComponent as reset} from './doctor/components/Authentication/resetpassword/resetpassword.component';
import { SignUpComponent} from './doctor/components/Authentication/register/register.component';
import { SignInComponent } from './doctor/components/Authentication/login/login.component';
import { NewpassComponent as Newpass } from './doctor/components/Authentication/newpass/newpass.component';
import { CreateTableComponent } from './doctor/components/ShowTables/timetable/timetable.component';
import { AddsceduleComponent } from './doctor/components/ShowTables/addscedule/addscedule.component';
import { StudentAttendanceComponent } from './doctor/components/attendance/attendance.component';
import { CreateQuizComponent } from './doctor/components/create-quiz/create-quiz.component';
import { StudentQuizComponent } from './doctor/components/quiz/quiz.component';
import { StudentResultComponent } from './doctor/components/student-result/student-result.component';
import { DocHomeComponent } from './doctor/components/home/home.component';
import { MeetingsComponent } from './doctor/components/meetings/meetings.component';
import { QRlistComponent } from './doctor/components/qrlist/qrlist.component';
import { QrscannerComponent } from './doctor/components/qrscanner/qrscanner.component';
import { CreatemeetingComponent } from './doctor/components/createmeeting/createmeeting.component';
import { MakepostComponent } from './doctor/components/makepost/makepost.component';
import { ExamComponent } from './doctor/components/exam/exam.component';
import { SavedattachmentComponent } from './doctor/components/savedattachment/savedattachment.component';
import { AddattachmentComponent } from './doctor/components/addattachment/addattachment.component';
import { CoursematerialdetailsComponent } from './doctor/components/coursematerialdetails/coursematerialdetails.component';
// Student Routes
import { RegisterComponent } from './studentapp/components/Authentication/register/register.component';
import { StartquizComponent } from './studentapp/components/Exam/startquiz/startquiz.component';
import { CoursematerialComponent } from './studentapp/components/coursematerial/coursematerial.component';
import { QuizComponent } from './studentapp/components/Exam/quiz/quiz.component';
import { EditprofileComponent } from './studentapp/components/stuprofile/editprofile/editprofile.component';
import { ProfileComponent } from './studentapp/components/stuprofile/profile/profile.component';
import { HomeComponent } from './studentapp/components/home/home.component';
import { TimetableComponent } from './studentapp/components/Timetable/timetable/timetable.component';
import { AddtableComponent } from './studentapp/components/Timetable/addtable/addtable.component';
import { EnrollmentComponent } from './studentapp/components/enrollment/enrollment.component';
import { LogInComponent } from './studentapp/components/Authentication/login/login.component';
import { AnimationComponent } from './animation/animation.component';
import { ResetpasswordComponent } from './studentapp/components/Authentication/resetpassword/resetpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { VerificationComponent } from './studentapp/components/Authentication/verification/verification.component';
import { NewpassComponent } from './studentapp/components/Authentication/newpass/newpass.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './studentapp/components/notifications/notifications.component';
import { FeedbackComponent } from './studentapp/components/feedbackComponent/feedback/feedback.component';
import { AddfeedbackComponent } from './studentapp/components/feedbackComponent/addfeedback/addfeedback.component';
import { AttendancereportComponent } from './studentapp/components/attendancereport/attendancereport.component';
import { ResultsComponent } from './studentapp/components/results/results.component';
import { PostsComponent } from './studentapp/components/posts/posts.component';
import { MeetingComponent } from './studentapp/components/meeting/meeting.component';
import { AssignmentComponent } from './studentapp/components/assignment/assignment.component';
import { AttachmentComponent } from './studentapp/components/attachment/attachment.component';
import { AtaachmentmaterialComponent } from './studentapp/components/AttachmentComponent/ataachmentmaterial/ataachmentmaterial.component';
import { AttachmentsComponent } from './studentapp/components/AttachmentComponent/attachments/attachments.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsubjectComponent } from './admin/component/editsubject/editsubject.component';
import { StaffmemberComponent } from './admin/component/staffmember/staffmember.component';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'login' ,component: LogInComponent },
  {path:'startquiz', component:StartquizComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'addfeedback', component: AddfeedbackComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'enrollment', component: EnrollmentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'timetable', component: TimetableComponent},
  {path: 'addtable', component: AddtableComponent},
  {path:'attachment', component: AttachmentComponent},
  {path:'coursematerial', component:CoursematerialComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editprofile', component:EditprofileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'animation' , component: AnimationComponent},
  {path: 'resetpassw', component: ResetpasswordComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'newpass', component: NewpassComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path:'report', component:AttendancereportComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'meeting',component: MeetingComponent },
  {path: 'assignment', component: AssignmentComponent},
  {path: 'attachments', component:AttachmentsComponent},
  {path: 'material', component: AtaachmentmaterialComponent},
  // doctors components
  {path: 'signin', component: SignInComponent},
  {path: 'dochome', component: DocHomeComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Reset', component: reset},
  {path: 'NewPass', component: Newpass},
  {path: 'createtable', component: CreateTableComponent},
  {path: 'studentattendance', component: StudentAttendanceComponent},
  {path: 'create-quiz', component: CreateQuizComponent},
  {path: 'questions', component: StudentQuizComponent },
  {path: 'studentresult', component: StudentResultComponent},
  {path: 'QRlist', component: QRlistComponent},
  {path:'qrscanner', component:QrscannerComponent},
  {path:'createmeeting', component: CreatemeetingComponent},
  {path:'makepost', component: MakepostComponent},
  {path:'exam', component:ExamComponent},
  {path:'addattachment', component:AddattachmentComponent},
  {path:'materialdetails', component:CoursematerialdetailsComponent},
  {path:'savedattachment', component:SavedattachmentComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'addscedule', component: AddsceduleComponent},
  // admin
  {path: 'adminsidebar', component:AdminsidebarComponent},
  {path:'addstaff', component:AddsubjectComponent},
  {path:'editsub' ,component:EditsubjectComponent},
  {path:'staffmember', component:StaffmemberComponent},
  {path: '**', component: NotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
