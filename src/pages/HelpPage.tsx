
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Help & Documentation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Help & Documentation</h1>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="agent-system">Agent System</TabsTrigger>
            <TabsTrigger value="email-management">Email Management</TabsTrigger>
            <TabsTrigger value="tools-integration">Tools & Integration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to GHS Command - Your Healthcare AI Platform</CardTitle>
                <CardDescription>
                  A comprehensive platform for managing healthcare communications and operations through AI agents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">System Overview</h3>
                <p>
                  The GHS Command platform is a comprehensive healthcare management system that uses AI agents to handle 
                  various aspects of healthcare operations. The platform integrates email management, ticket handling, 
                  and intelligent agent coordination to streamline healthcare workflows.
                </p>
                
                <h3 className="text-lg font-medium mt-4">Key Components</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dashboard:</strong> Central hub providing an overview of all system activities and agent statuses.</li>
                  <li><strong>Command Console:</strong> Interface for directly communicating with Isabella, the command agent.</li>
                  <li><strong>Email Management:</strong> System for handling patient and provider communications.</li>
                  <li><strong>Tickets:</strong> Issue tracking system for patient and staff support requests.</li>
                  <li><strong>Agent Management:</strong> Controls for all AI healthcare agents in the system.</li>
                  <li><strong>Intelligence Center:</strong> Advanced analytics and AI insights for system optimization.</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4">Navigation</h3>
                <p>
                  The sidebar on the left contains links to all major sections of the platform. Click on any menu item 
                  to navigate to that section. The dashboard provides quick access cards to key functions.
                </p>
              </CardContent>
            </Card>
            
            <ScrollArea className="h-[500px] rounded-md border p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to navigate the platform</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The GHS Command platform has a consistent navigation system throughout:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Sidebar Navigation:</strong> The left sidebar contains links to all major sections of the platform. It can be collapsed using the menu button in the top header.</li>
                        <li><strong>Header:</strong> The top header displays your account information, notifications, and system status.</li>
                        <li><strong>Breadcrumbs:</strong> Located below the header, these show your current location in the platform hierarchy and allow for easy navigation back to parent pages.</li>
                        <li><strong>Content Area:</strong> The main content area displays the active page's information and functionality.</li>
                      </ul>
                      <p>
                        To navigate between pages, you can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Click items in the sidebar menu</li>
                        <li>Use breadcrumb links to move up in the hierarchy</li>
                        <li>Click cards and buttons on the dashboard for direct access to key functions</li>
                        <li>Use the search function (where available) to find specific content</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Understanding the Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The Dashboard is your central hub for monitoring the entire GHS Command system. It provides:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>System Stats:</strong> Real-time metrics showing overall platform performance including active conversations, resolved issues, and system health.</li>
                        <li><strong>Command Console:</strong> Direct interface for communicating with Isabella, allowing you to issue system-wide commands and queries.</li>
                        <li><strong>Recent Activity:</strong> Timeline of the most recent actions and events across the platform.</li>
                        <li><strong>Communication Systems:</strong> Cards showing the status of email and ticket management systems with key metrics.</li>
                        <li><strong>Agent Status:</strong> Overview of all active healthcare agents with their current status, workload, and performance metrics.</li>
                      </ul>
                      <p>
                        The dashboard is designed to provide at-a-glance information that helps you monitor the health of your entire healthcare AI ecosystem and quickly identify areas that need attention.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Command Console Basics</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The Command Console is your direct line to Isabella, the system's command agent. Through this interface, you can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Issue Commands:</strong> Type natural language commands to control the system, assign tasks to agents, or request information.</li>
                        <li><strong>Ask Questions:</strong> Request analytics, agent status reports, or system health information.</li>
                        <li><strong>Coordinate Agents:</strong> Direct other healthcare agents to perform specific tasks or handle certain cases.</li>
                        <li><strong>Generate Reports:</strong> Request custom reports on system performance, patient interactions, or other metrics.</li>
                      </ul>
                      <p>
                        <strong>How to use the Command Console:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Click in the text input area at the bottom of the console</li>
                        <li>Type your command or question using natural language (e.g., "Show me all unassigned emails" or "Ask Emma to review the training materials for new nurses")</li>
                        <li>Press Enter or click the send button to submit</li>
                        <li>Isabella will process your request and respond in the conversation area above</li>
                        <li>You can continue the conversation with follow-up questions or new commands</li>
                      </ol>
                      <p>
                        The Command Console maintains a history of your interactions, making it easy to refer back to previous commands and responses.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="agent-system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding the GHS Agent System</CardTitle>
                <CardDescription>
                  Learn about the specialized AI agents in the platform and how they work together
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">The Multi-Agent Healthcare System</h3>
                <p>
                  GHS Command utilizes a multi-agent AI system where each agent has specialized knowledge and capabilities
                  tailored to specific healthcare roles. These agents work together under the coordination of Isabella,
                  the command agent.
                </p>
                
                <h3 className="text-lg font-medium mt-4">Agent Roles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="border rounded-md p-4">
                    <h4 className="font-semibold">Anna (Wellness Assistant)</h4>
                    <p className="text-sm text-muted-foreground">iHealth-Sync Platform</p>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Patient wellness check-ins and basic support</li>
                      <li>Device setup assistance</li>
                      <li>Appointment scheduling</li>
                      <li>Emotional support for patients</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-semibold">Emma (Nurse Assistant)</h4>
                    <p className="text-sm text-muted-foreground">Nurse-Sync Platform</p>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Nurse training and support</li>
                      <li>Care plan assistance</li>
                      <li>Professional healthcare communications</li>
                      <li>Technical nursing questions</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-semibold">Julia (Medical Assistant)</h4>
                    <p className="text-sm text-muted-foreground">Medic-Sync Platform</p>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>Advanced medical documentation</li>
                      <li>Clinical workflow optimization</li>
                      <li>Evidence-based care suggestions</li>
                      <li>Medical protocol updates</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-semibold">Isabella (Command Agent)</h4>
                    <p className="text-sm text-muted-foreground">Command Platform</p>
                    <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                      <li>System-wide coordination and oversight</li>
                      <li>Agent task assignment and monitoring</li>
                      <li>Strategic insights and recommendations</li>
                      <li>Multi-agent workflow orchestration</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mt-4">Agent Capabilities</h3>
                <p>
                  Each agent is specialized in their domain with different capabilities, personality traits, and communication styles.
                  Agents can escalate tasks to more specialized agents when needed, ensuring all healthcare communications are handled
                  at the appropriate level of expertise.
                </p>
              </CardContent>
            </Card>
            
            <ScrollArea className="h-[500px] rounded-md border p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="agent-1">
                  <AccordionTrigger>Agent Escalation System</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The GHS Command platform uses a sophisticated escalation system to ensure that healthcare inquiries are 
                        handled by the appropriate level of expertise:
                      </p>
                      <div className="border rounded-md p-4">
                        <h4 className="font-semibold">Escalation Path</h4>
                        <p className="text-sm mt-1">Anna → Emma → Julia → Human Healthcare Professional</p>
                      </div>
                      <p>
                        <strong>How escalation works:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Initial inquiries are typically handled by Anna, who manages basic patient wellness and administrative tasks</li>
                        <li>If Anna encounters a question beyond her capabilities, she escalates to Emma, who has nursing-level knowledge</li>
                        <li>Emma handles professional healthcare queries but escalates complex medical issues to Julia</li>
                        <li>Julia provides advanced medical assistance but will escalate to human providers when necessary</li>
                        <li>Isabella oversees this process and can directly assign inquiries to the appropriate agent based on content analysis</li>
                      </ol>
                      <p>
                        The escalation metrics are tracked in the Analytics section, allowing administrators to identify patterns and optimize the system.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="agent-2">
                  <AccordionTrigger>Agent Management Controls</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The Agent Management page allows administrators to configure and control all aspects of the AI agents:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personality Settings:</strong> Adjust the tone, communication style, and personality traits of each agent to optimize for specific healthcare contexts.</li>
                        <li><strong>Knowledge Base:</strong> Update the medical knowledge, protocols, and guidelines that inform agent responses.</li>
                        <li><strong>Escalation Rules:</strong> Set the conditions under which agents should escalate inquiries to more specialized agents or human staff.</li>
                        <li><strong>Agent Status:</strong> Activate, deactivate, or place agents in training mode to control their availability in the system.</li>
                        <li><strong>Platform Integration:</strong> Configure how agents connect to different healthcare platforms and communication channels.</li>
                      </ul>
                      <p>
                        <strong>Monitoring agent performance:</strong>
                      </p>
                      <p>
                        The Agent Management interface also provides detailed metrics on each agent's performance, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Active conversations and response times</li>
                        <li>Patient/provider satisfaction scores</li>
                        <li>Escalation rates and reasons</li>
                        <li>Common topics and inquiries handled</li>
                        <li>Knowledge gaps identified</li>
                      </ul>
                      <p>
                        Regular review of these metrics helps optimize the agent system and identify areas for improvement.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="agent-3">
                  <AccordionTrigger>Understanding Agent Communication Styles</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Each agent in the GHS Command system has a distinct communication style tailored to their role:
                      </p>
                      <div className="space-y-4">
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold">Anna</h4>
                          <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                            <li><strong>Tone:</strong> Gentle, warm, emotionally supportive</li>
                            <li><strong>Style:</strong> Conversational and accessible</li>
                            <li><strong>Communication:</strong> Simple explanations with reminders</li>
                            <li><strong>Best for:</strong> Patient-facing communications, wellness support</li>
                          </ul>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold">Emma</h4>
                          <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                            <li><strong>Tone:</strong> Reassuring, focused, professional</li>
                            <li><strong>Style:</strong> Efficient and detail-oriented</li>
                            <li><strong>Communication:</strong> Clear instructions with medical context</li>
                            <li><strong>Best for:</strong> Nursing staff support, care coordination</li>
                          </ul>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold">Julia</h4>
                          <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                            <li><strong>Tone:</strong> Clear, efficient, no-nonsense</li>
                            <li><strong>Style:</strong> Technical and precise</li>
                            <li><strong>Communication:</strong> Medical terminology with evidence-based insights</li>
                            <li><strong>Best for:</strong> Clinical documentation, medical protocols</li>
                          </ul>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold">Isabella</h4>
                          <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                            <li><strong>Tone:</strong> Calm, wise, strategic</li>
                            <li><strong>Style:</strong> Analytical and oversight-focused</li>
                            <li><strong>Communication:</strong> System-level insights and recommendations</li>
                            <li><strong>Best for:</strong> Administrative control, system coordination</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        These communication styles are designed to create appropriate experiences for different healthcare contexts
                        and can be adjusted in the Agent Management section as needed.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="email-management" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Management System</CardTitle>
                <CardDescription>
                  Comprehensive guide to handling healthcare communications through the email system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">Email Management Overview</h3>
                <p>
                  The Email Management system provides a centralized hub for handling all healthcare-related communications.
                  This system allows for proper tracking, prioritization, and assignment of all incoming messages from patients,
                  healthcare providers, and staff.
                </p>
                
                <h3 className="text-lg font-medium mt-4">Key Email Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Inbox Organization:</strong> Emails are organized by status, assignee, and priority for efficient management.</li>
                  <li><strong>Agent Assignment:</strong> Emails can be assigned to specific AI agents based on content and expertise needed.</li>
                  <li><strong>Prioritization:</strong> Critical communications are automatically flagged for immediate attention.</li>
                  <li><strong>Thread Management:</strong> All communications on the same topic are grouped into threads for context.</li>
                  <li><strong>Status Tracking:</strong> Emails progress through various statuses from unread to resolved for complete visibility.</li>
                  <li><strong>AI-Assisted Responses:</strong> Agents can draft or fully automate responses when appropriate.</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4">Email Workflow</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Incoming emails arrive in the unassigned queue</li>
                  <li>Emails are analyzed for content, urgency, and required expertise</li>
                  <li>Isabella assigns emails to the appropriate agent or they can be manually assigned</li>
                  <li>The assigned agent processes the email and drafts a response</li>
                  <li>Complex cases may be escalated to more specialized agents</li>
                  <li>Once resolved, emails are archived with complete thread history</li>
                </ol>
              </CardContent>
            </Card>
            
            <ScrollArea className="h-[500px] rounded-md border p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="email-1">
                  <AccordionTrigger>Navigating the Email Interface</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The Email Management interface is divided into several key sections:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Email Tabs:</strong> Located at the top of the interface, these tabs allow you to filter emails by:
                          <ul className="list-disc pl-6 mt-1">
                            <li>All Emails: Shows all emails in the system</li>
                            <li>Unassigned: Shows emails not yet assigned to an agent</li>
                            <li>Agent-specific tabs: Shows emails assigned to Anna, Emma, Julia, or Isabella</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Filter Bar:</strong> Located below the tabs, this allows you to filter emails by:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Status (unread, assigned, in-progress, waiting, resolved, escalated)</li>
                            <li>Priority (low, medium, high, critical)</li>
                            <li>Custom filters can be added as needed</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Email List:</strong> The main section showing email threads matching your current filters, displaying:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Subject line and preview</li>
                            <li>Sender information</li>
                            <li>Date/time received</li>
                            <li>Status and priority indicators</li>
                            <li>Assigned agent (if any)</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Email Thread View:</strong> When an email is selected, the full thread appears, showing:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Complete message history</li>
                            <li>Patient/client information</li>
                            <li>Status controls and action buttons</li>
                            <li>Response editor</li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        <strong>Navigation tips:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Use the refresh button to update the email list</li>
                        <li>Click "Back to Inbox" to return to the email list after viewing a thread</li>
                        <li>Use the breadcrumb navigation at the top to move between major sections</li>
                        <li>The status and priority filters can be combined for precise filtering</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="email-2">
                  <AccordionTrigger>Managing Email Threads</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        When working with individual email threads, you have several management options:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Assigning Emails:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Click the "Assign" button in the thread view</li>
                            <li>Select the appropriate agent from the dropdown</li>
                            <li>The system will notify the agent of the new assignment</li>
                            <li>Assignment can be changed at any time as needed</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Changing Status:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Use the status dropdown in the thread view</li>
                            <li>Select from: unread, assigned, in-progress, waiting, resolved, or escalated</li>
                            <li>Status changes are tracked in the thread history</li>
                            <li>"Resolved" status will move the thread to the resolved section</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Setting Priority:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Use the priority dropdown in the thread view</li>
                            <li>Select from: low, medium, high, or critical</li>
                            <li>Critical priority emails are highlighted in the system</li>
                            <li>Priority can be adjusted as the situation evolves</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Responding to Emails:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Use the response editor at the bottom of the thread view</li>
                            <li>Draft a manual response or use the AI-suggested responses</li>
                            <li>Review any auto-generated content before sending</li>
                            <li>Attachments can be added if necessary</li>
                            <li>Responses are automatically added to the thread history</li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        <strong>Best practices:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Always update the status to reflect the current state of the communication</li>
                        <li>Assign emails to the agent with the most appropriate expertise</li>
                        <li>Use the "waiting" status when awaiting external input</li>
                        <li>Add internal notes for complex cases to maintain context</li>
                        <li>Check for previous communications with the same patient/client before responding</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="email-3">
                  <AccordionTrigger>Email Status and Priority Explained</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        <strong>Email Status Types:</strong>
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">Unread</h4>
                          <p className="text-sm">New emails that have not been reviewed by any agent or staff member</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">Assigned</h4>
                          <p className="text-sm">Emails that have been assigned to a specific agent but work has not yet begun</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">In-Progress</h4>
                          <p className="text-sm">Emails that are actively being worked on by an agent</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">Waiting</h4>
                          <p className="text-sm">Emails that require external input or information before proceeding</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">Resolved</h4>
                          <p className="text-sm">Emails that have been successfully addressed and completed</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-semibold">Escalated</h4>
                          <p className="text-sm">Emails that have been escalated to a higher-level agent or human staff</p>
                        </div>
                      </div>
                      
                      <p className="mt-4">
                        <strong>Email Priority Levels:</strong>
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-md p-3 border-green-200">
                          <h4 className="font-semibold text-green-700">Low</h4>
                          <p className="text-sm">Routine communications that can be addressed within normal timeframes</p>
                          <p className="text-xs text-muted-foreground mt-1">Example: General inquiries, newsletter signups</p>
                        </div>
                        <div className="border rounded-md p-3 border-blue-200">
                          <h4 className="font-semibold text-blue-700">Medium</h4>
                          <p className="text-sm">Standard communications that should be addressed within 24-48 hours</p>
                          <p className="text-xs text-muted-foreground mt-1">Example: Appointment requests, basic health questions</p>
                        </div>
                        <div className="border rounded-md p-3 border-orange-200">
                          <h4 className="font-semibold text-orange-700">High</h4>
                          <p className="text-sm">Important issues that should be addressed within 24 hours</p>
                          <p className="text-xs text-muted-foreground mt-1">Example: Medication questions, troubleshooting issues</p>
                        </div>
                        <div className="border rounded-md p-3 border-red-200">
                          <h4 className="font-semibold text-red-700">Critical</h4>
                          <p className="text-sm">Urgent matters requiring immediate attention (within hours)</p>
                          <p className="text-xs text-muted-foreground mt-1">Example: Adverse reactions, system downtime affecting patient care</p>
                        </div>
                      </div>
                      
                      <p className="mt-4">
                        <strong>Automatic Prioritization:</strong> The system uses AI analysis to suggest priority levels based on content, but these can be manually adjusted as needed.
                        Critical emails trigger notifications to ensure they are not missed.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="email-4">
                  <AccordionTrigger>Email Analytics and Reporting</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The email system includes built-in analytics to help monitor performance and identify trends:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Email Volume Metrics:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Total email threads in the system</li>
                            <li>Open vs. resolved thread counts</li>
                            <li>Volume trends over time (daily, weekly, monthly)</li>
                            <li>Distribution by category and topic</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Response Performance:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Average response time for different priority levels</li>
                            <li>Average resolution time for complete threads</li>
                            <li>Performance benchmarks by agent and category</li>
                            <li>SLA compliance metrics</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Agent Workload:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Current assignment count by agent</li>
                            <li>Historical workload distribution</li>
                            <li>Specialization patterns (which agents handle which types of queries)</li>
                            <li>Escalation rates between agents</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Content Analysis:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Common themes and topics in incoming emails</li>
                            <li>Sentiment analysis of patient/provider communications</li>
                            <li>Recurring issues that may indicate system problems</li>
                            <li>Keyword and phrase tracking</li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        <strong>Accessing Analytics:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Basic metrics are displayed on the Dashboard in the Email Management card</li>
                        <li>Detailed analytics are available in the Analytics section, under the Communications tab</li>
                        <li>Custom reports can be generated through the Intelligence Center</li>
                        <li>Isabella can provide analytics summaries through the Command Console</li>
                      </ul>
                      <p>
                        These analytics help identify bottlenecks, optimize agent assignments, and improve overall communication efficiency.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="tools-integration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>MCP Tools & Integrations</CardTitle>
                <CardDescription>
                  Understanding the Machine Conversations Protocol (MCP) tools system and integration capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">What is MCP?</h3>
                <p>
                  The Machine Conversations Protocol (MCP) is a framework that enables AI agents to access and use tools
                  to perform specific actions in the healthcare environment. This system allows the agents to extend their
                  capabilities beyond conversation to include creating tickets, scheduling appointments, accessing patient
                  records, and more.
                </p>
                
                <h3 className="text-lg font-medium mt-4">Key MCP Components</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>MCP Host:</strong> The central orchestration layer that manages all tools and their executions.</li>
                  <li><strong>MCP Client:</strong> Implemented by each agent to discover and call tools via the MCP protocol.</li>
                  <li><strong>Tool Definitions:</strong> Standardized descriptions of what each tool does and how to use it.</li>
                  <li><strong>Tool Servers:</strong> Backend services that implement the actual functionality of each tool.</li>
                  <li><strong>Guardrails:</strong> Safety mechanisms to ensure tools are used appropriately and securely.</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4">Available Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="border rounded-md p-3">
                    <h4 className="font-semibold">Create Ticket</h4>
                    <p className="text-sm">Creates support tickets for patient or staff issues</p>
                  </div>
                  <div className="border rounded-md p-3">
                    <h4 className="font-semibold">Schedule Appointment</h4>
                    <p className="text-sm">Books patient appointments with healthcare providers</p>
                  </div>
                  <div className="border rounded-md p-3">
                    <h4 className="font-semibold">Fetch Patient Summary</h4>
                    <p className="text-sm">Retrieves patient information and medical history</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <ScrollArea className="h-[500px] rounded-md border p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tools-1">
                  <AccordionTrigger>How MCP Tools Work</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The MCP tools system follows a standardized workflow:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <strong>Tool Discovery:</strong> Agents can discover available tools by querying the MCP Host.
                          This provides them with a list of tools they can use and their capabilities.
                        </li>
                        <li>
                          <strong>Tool Request:</strong> When an agent needs to perform a specific action, it creates an MCP Tool Request
                          containing the tool name, required inputs, and context information.
                        </li>
                        <li>
                          <strong>Request Validation:</strong> The MCP Host validates the request against the tool's schema
                          to ensure all required inputs are present and properly formatted.
                        </li>
                        <li>
                          <strong>Tool Execution:</strong> If the request is valid, the MCP Host forwards it to the appropriate
                          tool server or implementation for execution.
                        </li>
                        <li>
                          <strong>Output Processing:</strong> The tool's outputs are processed through any defined guardrails
                          and filters to ensure security and data quality.
                        </li>
                        <li>
                          <strong>Response Delivery:</strong> The processed outputs are returned to the requesting agent as an
                          MCP Tool Response, which the agent can then incorporate into its workflow.
                        </li>
                      </ol>
                      <p>
                        <strong>Example scenario:</strong> When Emma (Nurse Assistant) needs to check a patient's medication history,
                        she calls the "fetch_patient_summary" tool with the patient's name or ID. The MCP Host validates the request,
                        executes it through the patient records system, and returns the formatted patient summary to Emma, who can
                        then use this information in her conversation with the nurse.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tools-2">
                  <AccordionTrigger>MCP Tool Monitoring and Analytics</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The Intelligence Center provides detailed monitoring and analytics for all MCP tool usage:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Tool Usage Metrics:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Total calls by tool</li>
                            <li>Success and error rates</li>
                            <li>Average latency and performance</li>
                            <li>Usage patterns by agent</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Execution History:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Complete log of all tool executions</li>
                            <li>Input and output values for debugging</li>
                            <li>Error tracking and analysis</li>
                            <li>Execution timeline visualization</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Quality Monitoring:</strong>
                          <ul className="list-disc pl-6 mt-1">
                            <li>Tool confidence scores</li>
                            <li>Guardrail activation events</li>
                            <li>Output filter effectiveness</li>
                            <li>Data quality metrics</li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        These analytics help administrators identify tools that need improvement, optimize performance,
                        and ensure that agents are using tools effectively.
                      </p>
                      <p>
                        <strong>Accessing MCP Analytics:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Navigate to the Intelligence Center</li>
                        <li>Select the "MCP Tools" tab</li>
                        <li>View the dashboard for overall metrics</li>
                        <li>Select individual tools to see detailed performance data</li>
                        <li>Use the time range selector to analyze trends over different periods</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tools-3">
                  <AccordionTrigger>Extending the Tool System</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        The MCP system is designed to be extensible, allowing administrators to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Register New Tools:</strong> Add new capabilities by defining and implementing new tools
                          with specific healthcare functions.
                        </li>
                        <li>
                          <strong>Connect External Systems:</strong> Integrate with EHR systems, scheduling platforms, billing systems,
                          and other healthcare IT infrastructure.
                        </li>
                        <li>
                          <strong>Customize Guardrails:</strong> Define safety measures and validation rules appropriate for
                          specific healthcare contexts and compliance requirements.
                        </li>
                        <li>
                          <strong>Configure Tool Access:</strong> Control which agents have access to which tools, ensuring
                          appropriate scope of capabilities.
                        </li>
                      </ul>
                      <p>
                        <strong>Adding a new tool:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Define the tool's purpose and functionality</li>
                        <li>Create a schema for the inputs and outputs</li>
                        <li>Implement the tool's backend logic (or connect to an existing service)</li>
                        <li>Register the tool with the MCP Host</li>
                        <li>Configure appropriate guardrails and access controls</li>
                        <li>Test the tool through the Intelligence Center's MCP testing interface</li>
                      </ol>
                      <p>
                        The modular design of the MCP system allows healthcare organizations to adapt and extend the
                        platform's capabilities as their needs evolve.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HelpPage;
