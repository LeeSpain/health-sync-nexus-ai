
import { AgentType } from '../agent-integration/types';
import { EmailMessage, EmailThread, EmailStatus, EmailPriority, EmailAnalytics } from './types';

// Mock data for demonstration purposes
const mockEmailThreads: EmailThread[] = [
  {
    id: '1',
    subject: 'Question about my medication schedule',
    messages: [
      {
        id: '1',
        threadId: '1',
        subject: 'Question about my medication schedule',
        from: {
          email: 'patient@example.com',
          name: 'John Patient'
        },
        to: ['support@health-system.com'],
        body: 'Hello, I\'m a bit confused about my medication schedule. Can you help me understand when I should take my blood pressure medication? Should it be before or after meals?',
        sentAt: new Date(Date.now() - 3600000).toISOString(),
        receivedAt: new Date(Date.now() - 3590000).toISOString(),
        attachments: []
      }
    ],
    status: 'unread',
    priority: 'medium',
    clientEmail: 'patient@example.com',
    clientName: 'John Patient',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 3590000).toISOString(),
    tags: ['medication', 'schedule'],
    category: 'wellness',
    lastMessageAt: new Date(Date.now() - 3600000).toISOString(),
    sentiment: 0.2
  },
  {
    id: '2',
    subject: 'Trouble with nurse portal login',
    messages: [
      {
        id: '2',
        threadId: '2',
        subject: 'Trouble with nurse portal login',
        from: {
          email: 'nurse@hospital.org',
          name: 'Sarah Nurse'
        },
        to: ['support@health-system.com'],
        body: 'I\'ve been trying to log into the nurse portal for the past hour but keep getting an error message. This is urgent as I need to update patient records for today\'s shift.',
        sentAt: new Date(Date.now() - 7200000).toISOString(),
        receivedAt: new Date(Date.now() - 7190000).toISOString(),
        attachments: []
      }
    ],
    status: 'assigned',
    priority: 'high',
    assignedTo: 'emma',
    assignedBy: 'isabella',
    assignedAt: new Date(Date.now() - 7000000).toISOString(),
    clientEmail: 'nurse@hospital.org',
    clientName: 'Sarah Nurse',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    updatedAt: new Date(Date.now() - 7000000).toISOString(),
    tags: ['login', 'portal', 'urgent'],
    category: 'technical',
    lastMessageAt: new Date(Date.now() - 7200000).toISOString(),
    sentiment: -0.5
  },
  {
    id: '3',
    subject: 'Request for patient documentation review',
    messages: [
      {
        id: '3',
        threadId: '3',
        subject: 'Request for patient documentation review',
        from: {
          email: 'doctor@medcenter.com',
          name: 'Dr. Robert Chen'
        },
        to: ['support@health-system.com'],
        body: 'I need assistance with reviewing some patient documentation before our team meeting tomorrow. Can you help analyze these notes and suggest any improvements to our documentation process?',
        sentAt: new Date(Date.now() - 14400000).toISOString(),
        receivedAt: new Date(Date.now() - 14390000).toISOString(),
        attachments: [
          {
            id: '1',
            fileName: 'patient_notes.pdf',
            fileSize: 2500000,
            fileType: 'application/pdf',
            url: '#'
          }
        ]
      }
    ],
    status: 'in-progress',
    priority: 'medium',
    assignedTo: 'julia',
    assignedBy: 'isabella',
    assignedAt: new Date(Date.now() - 14300000).toISOString(),
    clientEmail: 'doctor@medcenter.com',
    clientName: 'Dr. Robert Chen',
    createdAt: new Date(Date.now() - 14400000).toISOString(),
    updatedAt: new Date(Date.now() - 14300000).toISOString(),
    tags: ['documentation', 'review'],
    category: 'medical',
    lastMessageAt: new Date(Date.now() - 14400000).toISOString(),
    sentiment: 0.1
  }
];

// This would be replaced with actual API calls in a real implementation
const mockApiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class EmailService {
  private static instance: EmailService;
  private emailThreads: EmailThread[] = [...mockEmailThreads];
  
  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }
  
  // Get all email threads
  public async getAllThreads(): Promise<EmailThread[]> {
    await mockApiDelay(500);
    return [...this.emailThreads];
  }
  
  // Get email threads assigned to a specific agent
  public async getThreadsByAgent(agentId: string): Promise<EmailThread[]> {
    await mockApiDelay(500);
    return this.emailThreads.filter(thread => thread.assignedTo === agentId);
  }
  
  // Get unassigned email threads
  public async getUnassignedThreads(): Promise<EmailThread[]> {
    await mockApiDelay(500);
    return this.emailThreads.filter(thread => !thread.assignedTo);
  }
  
  // Get a specific email thread
  public async getThreadById(threadId: string): Promise<EmailThread | null> {
    await mockApiDelay(300);
    const thread = this.emailThreads.find(t => t.id === threadId);
    return thread ? {...thread} : null;
  }
  
  // Assign an email thread to an agent
  public async assignThread(threadId: string, agentId: AgentType, assignedBy: AgentType): Promise<EmailThread | null> {
    await mockApiDelay(600);
    
    const threadIndex = this.emailThreads.findIndex(t => t.id === threadId);
    if (threadIndex === -1) return null;
    
    this.emailThreads[threadIndex] = {
      ...this.emailThreads[threadIndex],
      assignedTo: agentId,
      assignedBy,
      assignedAt: new Date().toISOString(),
      status: 'assigned',
      updatedAt: new Date().toISOString()
    };
    
    return {...this.emailThreads[threadIndex]};
  }
  
  // Update the status of an email thread
  public async updateThreadStatus(threadId: string, status: EmailStatus, agentId: AgentType): Promise<EmailThread | null> {
    await mockApiDelay(400);
    
    const threadIndex = this.emailThreads.findIndex(t => t.id === threadId);
    if (threadIndex === -1) return null;
    
    // Additional fields to update based on status
    let additionalFields: Partial<EmailThread> = {
      updatedAt: new Date().toISOString()
    };
    
    if (status === 'resolved') {
      additionalFields = {
        ...additionalFields,
        closedAt: new Date().toISOString(),
        closedBy: agentId
      };
    } else if (status === 'escalated') {
      // In a real implementation, this would also trigger notifications
      additionalFields = {
        ...additionalFields,
        escalationReason: 'Escalated by agent'
      };
    }
    
    this.emailThreads[threadIndex] = {
      ...this.emailThreads[threadIndex],
      status,
      ...additionalFields
    };
    
    return {...this.emailThreads[threadIndex]};
  }
  
  // Add a reply to an email thread
  public async addReply(threadId: string, reply: Omit<EmailMessage, 'id' | 'threadId'>): Promise<EmailThread | null> {
    await mockApiDelay(700);
    
    const threadIndex = this.emailThreads.findIndex(t => t.id === threadId);
    if (threadIndex === -1) return null;
    
    const newMessage: EmailMessage = {
      id: `${Date.now()}`,
      threadId,
      ...reply
    };
    
    this.emailThreads[threadIndex] = {
      ...this.emailThreads[threadIndex],
      messages: [...this.emailThreads[threadIndex].messages, newMessage],
      lastMessageAt: reply.sentAt,
      updatedAt: new Date().toISOString()
    };
    
    return {...this.emailThreads[threadIndex]};
  }
  
  // Update thread priority
  public async updateThreadPriority(threadId: string, priority: EmailPriority): Promise<EmailThread | null> {
    await mockApiDelay(400);
    
    const threadIndex = this.emailThreads.findIndex(t => t.id === threadId);
    if (threadIndex === -1) return null;
    
    this.emailThreads[threadIndex] = {
      ...this.emailThreads[threadIndex],
      priority,
      updatedAt: new Date().toISOString()
    };
    
    return {...this.emailThreads[threadIndex]};
  }
  
  // Get email analytics
  public async getEmailAnalytics(): Promise<EmailAnalytics> {
    await mockApiDelay(800);
    
    // In a real implementation, this would calculate actual metrics
    return {
      totalThreads: this.emailThreads.length,
      openThreads: this.emailThreads.filter(t => t.status !== 'resolved').length,
      resolvedThreads: this.emailThreads.filter(t => t.status === 'resolved').length,
      escalatedThreads: this.emailThreads.filter(t => t.status === 'escalated').length,
      averageResponseTime: 45, // Mock value
      averageResolutionTime: 180, // Mock value
      threadsByAgent: {
        'anna': this.emailThreads.filter(t => t.assignedTo === 'anna').length,
        'emma': this.emailThreads.filter(t => t.assignedTo === 'emma').length,
        'julia': this.emailThreads.filter(t => t.assignedTo === 'julia').length,
        'isabella': this.emailThreads.filter(t => t.assignedTo === 'isabella').length
      },
      threadsByCategory: {
        'wellness': this.emailThreads.filter(t => t.category === 'wellness').length,
        'technical': this.emailThreads.filter(t => t.category === 'technical').length,
        'medical': this.emailThreads.filter(t => t.category === 'medical').length,
        'other': this.emailThreads.filter(t => !t.category).length
      },
      threadsByStatus: {
        'unread': this.emailThreads.filter(t => t.status === 'unread').length,
        'assigned': this.emailThreads.filter(t => t.status === 'assigned').length,
        'in-progress': this.emailThreads.filter(t => t.status === 'in-progress').length,
        'waiting': this.emailThreads.filter(t => t.status === 'waiting').length,
        'resolved': this.emailThreads.filter(t => t.status === 'resolved').length,
        'escalated': this.emailThreads.filter(t => t.status === 'escalated').length
      }
    };
  }
}

export default EmailService.getInstance();
