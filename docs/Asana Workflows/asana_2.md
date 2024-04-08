---
title: "Concept to Completion: A Workflow Example"
sidebar_position: 4
---
import corepro from '../../static/img/corepro.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';


The workflow below details each core step, including the processes involved, the parties responsible, and the transition of tasks from one step to the next.

<img src={corepro} alt="An Example of Defined Core Processes Shown in Asana List View"/>     


### Task Start & Scope Definition
- Marks the workflow's starting point.
- The Project Manager creates tasks in this section based on the project's objectives. Each task includes detailed instructions and links to materials or other resources for the Creative Team to begin work. The Project Manager then @mentions and assigns the task to a Creative Lead for review. 
- The relevant Creative Leads review the task descriptions and materials then takes the following actions:
&nbsp;  
<Tabs>
  <TabItem value="Sufficient Task Description" label="Sufficient Task Description" default>
  1. The Creative Lead writes a comment and uses an @mention to notify the Project Manager about the appropriate assignee for production.
  2. The Project Manager assigns the task and sets the Custom Fields as follows:
        - Due Date: Set a specified range for production time.
        - Creative Team: Tags the task for workflow tracking and KPI analysis.
        - Assignee: Assigns the task to a Creative Team member, adding it to their task list.
        - Status: Changes to "production," prompting Asana to move the task to the Production phase
  
  </TabItem>
  <TabItem value="Insufficient Task Description" label="Insufficient Task Description">
  1. The Creative Lead writes a comment and @mentions the Project Manager, detailing the necessary adjustments to the instructions and listing any materials or resources the team needs to start work. 
  2. The Creative Lead sets the "Status" field to "Insufficient."
  3. Asana moves the task to the Insufficient Information section.
  </TabItem>
</Tabs>
&nbsp;  

### Production
- Creative Team members actively work on tasks. 
- Upon completing the work, the task's assignee sets the 'Status' field to "Inspection." This action notifies the relevant Creative Lead that the work is ready for review.
- Asana unassigns the task and moves it to the Inspection step.
&nbsp;  
&nbsp;  
### Inspection
- Asana generates an "Approval Request," sets a due date, and assigns it a Creative Lead. 
- The Creative Lead reviews the completed work then takes the following actions:

<Tabs>
  <TabItem value="Approved" label="Approved" default>
    1. If the Creative Lead marks the request as 'Approved,' they set the 'Status' field to 'Validation.' This notifies the Project Manager that the work is ready for review.
    2. Asana moves the task to the Validation section.
  
  </TabItem>
  <TabItem value="NOT Approved" label="NOT Approved">
  1. If the Creative Lead marks the request as 'NOT Approved,' they write a comment detailing the necessary adjustments, @mention the assignee and Project Manager, and reassign the task to the original assignee. 
  2. The Creative Lead then sets the "Status" field to "Production."
  3. Asana moves the task back to the Production section
  </TabItem>
</Tabs>  

&nbsp;  
### Validation
- Asana generates an "Approval Request," sets a due date, and assigns it to the Project Manager.  
- The Project Manager reviews the completed work then takes the following actions:

<Tabs>
  <TabItem value="Approved" label="Approved" default>
    1. If the Project Manager marks the request as "Approved," they set the "Status" field to "Customer Evaluation." 
    2. Asana generates a subtask, assigns a due date, and sets the assignee as the Project Manager. 
    3. The Project Manager submits the work to the customer then marks this subtask as complete. 
    4. Asana moves the task to the Submitted for Customer Evaluation step.
  
  </TabItem>
  <TabItem value="NOT Approved" label="NOT Approved">
    1. If the Project Manager marks the request as "NOT Approved," they write a comment detailing the necessary adjustments, @mentioning both the assignee and the Creative Lead. 
    2. The Project Manager updates the task's due date, reassigns it accordingly, and sets its "Status" field to "Production." 
    3. Asana moves the task back to the Production step.
  </TabItem>
</Tabs>  

&nbsp;  
### Submitted for Customer Evaluation
 - Asana assigns a task to the Project Manager and sets a due date for the customer(s) to complete their review. 
- The customer(s) review the completed work and provide feedback.
- The Project Manager takes one of the following actions:

<Tabs>
  <TabItem value="Modifications Requested" label="Modifications Requested" default>
    1. When the customer completes their evaluation and requests changes, the Project Manager changes the "Status" field to "Modifications." 
    2. Asana moves the task to the Modification step.
  
  </TabItem>
  <TabItem value="No Modifications" label="No Modifications">
  1. If the customer completes their evaluation and requests no modifications, the Project Manager marks the task as complete. 
  2. Asana updates the "Status" field to "Done" and moves the task to the Done section. 
  </TabItem>
</Tabs>  

&nbsp;  
### Modifications Requested
-  Asana generates a subtask, assigns a due date, and sets the assignee as the Project Manager. 
- The Project Manager processes the customer's feedback. 
- The Project Manager updates the task's description to include the customer's feedback, any requested modifications, and additional resources needed for the adjustments.
- The Project Manager sets a new due date for the task, reassigns it accordingly, and updates the "Status" field to "Production." 
- Asana moves the task back to the Production step.

&nbsp;  
### Done
- Asana unassigns all tasks marked as complete and moves them to this section.


&nbsp;  
### Insufficient Information
- Asana moves tasks labeled "Insufficient" to this section, reassigns these tasks to the Project Manager, and sets a due date for resolution.
- Upon assignment, the Project Manager reviews the tasks for any instructions or materials that are missing.
- They then gather the required information or resources from the customer, and update the task. 
- After updating the task with the necessary details, the Project Manager @mentions and assigns the task to the Creative Lead for review. 
- The Creative Lead repeats the review process as detailed in the Task Start & Scope Definition section.
&nbsp;  
&nbsp;  

<DocCardList />