---
title: "A Simple Example of a Workflow"
sidebar_position: 6
---
import corepro from '../../static/img/corepro.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';

# A Simple Example of a Workflow

<!--  -->

## Purpose
The purpose of this workflow is to clearly define each step of the project lifecycle, assigning responsibilities and setting expectations for all involved. The workflow is tailored for project managers and creative leads looking to enhance efficiency, improve communication, and ensure timely delivery of project deliverables.

## Audience
This workflow is intended for:

- **Project Managers (PMs):** Responsible for overseeing the project's progress, monitoring tasks' deadlines, ensuring communication between team members is clear and effective, and the quality of the output meets client expectations.
- **Creative Leads (CLs):** Guide the creative aspects of the project, make decisions on the creative direction, and ensure the quality of the output meets internal and client expectations.

## Benefits

- **Enhance Collaboration:** With clearly defined roles and responsibilities, team members can collaborate more effectively, ensuring smooth transitions between different phases of the project.
- **Increase Transparency:** The use of status updates and @mentions keeps everyone informed about task progress and changes, fostering an environment of transparency.
- **Streamline Processes:** Automated task movements based on status updates reduce manual work and potential errors, allowing the team to focus on their core responsibilities.
- **Improve Project Tracking:** Clearly outline each phase of the project, making it easier to track overall progress and identify any bottlenecks early on.


## Example Workflow
:::info Notice
*In this example, Asana moves tasks based on the **Status** custom field.*
:::
### Initiation
Start of workflow.  

**1.** The Project Manager (PM) creates tasks, writes instructions, and adds resources to tasks.  
**2.** PM **@mentions** and assigns the tasks to the relevant Creative Lead (CL).  
**3.** CL reviews tasks then takes the following actions:  

:::tip Actions
<Tabs>
  <TabItem value="Sufficient" label="Sufficient Instructions" default>
  **1.** CL @mentions the PM with an assignee for the task.  
  **2.** PM sets the following fields:  
        - Due Date
        - Creative Team
        - Assignee
        - Status: **Production**  

  **3.** Asana moves the task into the Production section.  
  </TabItem>
  <TabItem value="Insufficient" label="Insufficient Instructions">
  **1.** CL **@mentions** PM with adjustments and resources needed.  
  **2.** CL sets **Status** to **Insufficient.**  
  **3.** Asana reassigns task to PM and leaves a comment.  
  </TabItem>
</Tabs> 
::::

### Production
Work in progress.

**1.** Assignees work on tasks.  
**2.** Assignees set **Status** to **Review** upon completing the task.  
**3.** Asana removes assignee, notifies CL, and moves task into the Review section.  

### Review
First QC check.  

**1.** Asana generates an **Approval Request**, assigns a CL, and sets due date. 
**2.** CL reviews completed work then takes the following actions:  

:::tip Actions
<Tabs>
  <TabItem value="Approved" label="Approved" default>
 **1.** Check mark request **Approved**.  
 **2.** Asana sets **Status** to **Approval**, notifies PM, and moves task into the Review section.  
  
  </TabItem>
  <TabItem value="NOT Approved" label="NOT Approved">
 **1.** Check mark request **NOT Approved**.  
 **2.** @mention assignee and PM with adjustments, and reassign task back to assignee.  
 **2.** Set **Status** to **Production**.  
 **3.** Asana moves task back to the Production section.  
  </TabItem>
</Tabs>  
::::

### Approval
Second QC Check. 

**1.** Asana generates an **Approval Request**, assigns PM, and sets due date.  
**2.** PM reviews completed work then takes the following actions:

:::tip Actions
<Tabs>
  <TabItem value="Approved" label="Approved" default>
  **1.** Check mark request **Approved**.  
  **2.** Asana sets **Status** to **Evaluation**, generates a subtask assigned to PM, and sets due date.  
  **3.** PM submits work to the customer then marks subtask complete.  
  **4.** Asana moves task to the Evaluation section.  
  
  </TabItem>
  <TabItem value="NOT Approved" label="NOT Approved">
  **1.** Check mark request **NOT Approved**.  
  **2.** @mention assignee and CL with adjustments, and reassign task back to assignee.   
  **3.** Update due date and set **Status** to **Production**.   
  **4.** Asana moves task back to the Production section.  
  </TabItem>
</Tabs>  
::::

### Evaluation
Customer reviews work and provides feedback.  

**1.** Asana assigns task to PM and sets due date for customer's review.   
**2.** PM takes one of the following actions:  

:::tip Actions
<Tabs>
  <TabItem value="Modifications Requested" label="Revision" default>
  **1.** Set **Status** to **Revision**.  
  **2.** Asana moves the task to the Revisions section.  
  
  </TabItem>
  <TabItem value="No Modifications" label="Done">
  **1.** PM marks the task **Complete**.  
  **2.** Asana sets **Status** to **Done** and moves task to the Done section.  
  </TabItem>
</Tabs>  
::::

### Revisions
Customer requests modifications to deliverable.  

**1.** Asana generates a subtask assigned to PM and adjusts due date.  
**2.** PM processes customer's feedback and updates task instructions with revisions.  
**3.** PM sets due date, reassigns task, and updates **Status** to **Production**.  
**4.** Asana moves task to the Production section.  

### Done
Work on deliverables complete.  

**1.** Asana moves tasks marked as complete to this section.  
**2.** End of workflow.  

## Error Handling and Troubleshooting
During the lifecycle of a project, various issues may arise that can disrupt the smooth flow of tasks. Here are some common issues you might encounter in this workflow, along with guidance on how to handle them:

### Insufficient Task Details
- **Problem:** A task may occasionally be assigned with insufficient details, leading to confusion or delays.  

- **Solution:** Creative Leads should use the “Insufficient Instructions” status to flag these tasks. It triggers a notification to the Project Manager to add the required details. Always specify what additional information is needed to avoid back-and-forth communication.

### Missed Deadlines
- **Problem:** Tasks may not be completed on time, impacting subsequent phases of the project.  

- **Solution:** Set realistic deadlines and use Asana’s reminder features to keep tasks on track. If a deadline is missed, reassess the task’s timeline and update the due date accordingly. Communicate openly about delays in the designated Asana comment sections to keep all stakeholders informed.

### Incorrect Task Assignments
- **Problem:** Tasks mistakenly assigned to the wrong team member, causing delays or incorrect work.  

- **Solution:** Regularly review task assignments during team meetings. If a task is found to be incorrectly assigned, the Project Manager should immediately reassign it to the correct individual and update the status to reflect the change.

### Technology Issues
- **Problem:** Users may experience technical difficulties with Asana, such as login problems or syncing issues.  

- **Solution:** Ensure all team members have access to Asana’s support resources. Create a quick reference guide with solutions to common technical problems and share it with the team. For persistent issues, contact Asana’s technical support team.


&nbsp;  
&nbsp;  

<DocCardList />