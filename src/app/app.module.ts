import { CoursematerialdetailsComponent } from './doctor/components/coursematerialdetails/coursematerialdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
import {MatRadioModule} from '@angular/material/radio' ;
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './studentapp/components/Authentication/login/login.component';
import { HomeComponent } from './studentapp/components/home/home.component';
import { DisplayDirective } from './display.directive';
import { MeetingComponent } from './studentapp/components/meeting/meeting.component';
import { AttachmentComponent } from './studentapp/components/attachment/attachment.component';
import { navbarComponent } from './studentapp/components/topnavbar/navbar.component';
import { ProfileComponent } from './studentapp/components/stuprofile/profile/profile.component';
import { EditprofileComponent } from './studentapp/components/stuprofile/editprofile/editprofile.component';
import { TimetableComponent } from './studentapp/components/Timetable/timetable/timetable.component';
import { AddtableComponent } from './studentapp/components/Timetable/addtable/addtable.component';
import { QuizComponent } from './studentapp/components/Exam/quiz/quiz.component';
import { RegisterComponent } from './studentapp/components/Authentication/register/register.component';
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
import { AssignmentComponent } from './studentapp/components/assignment/assignment.component';

import { SignInComponent } from './doctor/components/Authentication/login/login.component';
import { SignUpComponent } from './doctor/components/Authentication/register/register.component';
import { ResetpasswordComponent as reset } from './doctor/components/Authentication/resetpassword/resetpassword.component';
import { NewpassComponent as Newpass } from './doctor/components/Authentication/newpass/newpass.component';
import { StudentAttendanceComponent } from './doctor/components/attendance/attendance.component';
import { StudentResultComponent } from './doctor/components/student-result/student-result.component';
import { CreateQuizComponent } from './doctor/components/create-quiz/create-quiz.component';
import { StudentQuizComponent} from './doctor/components/quiz/quiz.component';
import { CreateTableComponent } from './doctor/components/ShowTables/timetable/timetable.component';
import { DocHomeComponent } from './doctor/components/home/home.component';
import { QRlistComponent } from './doctor/components/qrlist/qrlist.component';
import { QrscannerComponent } from './doctor/components/qrscanner/qrscanner.component';
import { CreatemeetingComponent } from './doctor/components/createmeeting/createmeeting.component';
import { MakepostComponent } from './doctor/components/makepost/makepost.component';
import { ExamComponent } from './doctor/components/exam/exam.component';
import { AddattachmentComponent } from './doctor/components/addattachment/addattachment.component';
import { MeetingsComponent } from './doctor/components/meetings/meetings.component';
import { SavedattachmentComponent } from './doctor/components/savedattachment/savedattachment.component';
import { AddsceduleComponent } from './doctor/components/ShowTables/addscedule/addscedule.component';

import { CoursematerialComponent } from './studentapp/components/coursematerial/coursematerial.component';
import { CoursesidebarComponent } from './coursesidebar/coursesidebar.component';
import { EnrollmentComponent } from './studentapp/components/enrollment/enrollment.component';
import { StartquizComponent } from './studentapp/components/Exam/startquiz/startquiz.component';
import { QuestionsComponent } from './studentapp/components/Exam/questions/questions.component';
import { QuestionformComponent } from './studentapp/components/Exam/questionform/questionform.component';
import { AttachmentsComponent } from './studentapp/components/AttachmentComponent/attachments/attachments.component';
import { AtaachmentmaterialComponent } from './studentapp/components/AttachmentComponent/ataachmentmaterial/ataachmentmaterial.component';
import { AddsubjectComponent } from './admin/component/addsubject/addsubject.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { EditsubjectComponent } from './admin/component/editsubject/editsubject.component';
import { StaffmemberComponent } from './admin/component/staffmember/staffmember.component';
import { AddstaffComponent } from './admin/component/addstaff/addstaff.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    DisplayDirective,
    TimetableComponent,
    AddtableComponent,
    MeetingComponent,
    AttachmentComponent,
    navbarComponent,
    ProfileComponent,
    EditprofileComponent,
    QuizComponent,
    StartquizComponent,
    RegisterComponent,
    AnimationComponent,
    ResetpasswordComponent,
    NotfoundComponent,
    VerificationComponent,
    NewpassComponent,
    SidebarComponent,
    NotificationsComponent,
    FeedbackComponent,
    AddfeedbackComponent,
    AttendancereportComponent,
    ResultsComponent,
    PostsComponent,
    AssignmentComponent,

    SignInComponent,
    SignUpComponent,
    reset,
    Newpass,
    StudentAttendanceComponent,
    StudentResultComponent,
    CreateQuizComponent,
    StudentQuizComponent,
    CreateTableComponent,
    DocHomeComponent,
    QRlistComponent,
    QrscannerComponent,
    CreatemeetingComponent,
    MakepostComponent,
    ExamComponent,
    AddattachmentComponent,
    MeetingsComponent,
    SavedattachmentComponent,
    CoursematerialComponent,
    CoursematerialdetailsComponent,
    CoursesidebarComponent,
    EnrollmentComponent,
    AddsceduleComponent,
    StartquizComponent,
    QuestionsComponent,
    QuestionformComponent,
    AttachmentsComponent,
    AtaachmentmaterialComponent,
    AddsubjectComponent,
    AdminsidebarComponent,
    EditsubjectComponent,
    StaffmemberComponent,
    AddstaffComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(iconRegisrey: MatIconRegistry, domsanitizer: DomSanitizer){
  //   iconRegisrey.addSvgIconSet(
  //     domsanitizer.bypassSecurityTrustHtml('./assets/mdi.svg')
  //   )
  // }
 }
