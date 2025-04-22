
import { MCPToolDefinition } from './types';

/**
 * Standard tool definitions for the GHS Agent Command Center
 * These define the interface and schema for each tool
 */

export const TicketTool: MCPToolDefinition = {
  name: 'create_ticket',
  description: 'Creates a support ticket in the system',
  inputs: {
    type: 'object',
    properties: {
      subject: { type: 'string', description: 'Ticket subject or title' },
      description: { type: 'string', description: 'Detailed description of the issue' },
      priority: { 
        type: 'string', 
        description: 'Ticket priority level',
        enum: ['low', 'medium', 'high', 'critical']
      },
      client_email: { type: 'string', description: 'Email of the client' },
      client_name: { type: 'string', description: 'Name of the client' },
      tags: { 
        type: 'array', 
        description: 'Tags to categorize the ticket',
        items: { type: 'string' }
      }
    },
    required: ['subject', 'description', 'client_email']
  },
  outputs: {
    type: 'object',
    properties: {
      ticket_id: { type: 'string', description: 'ID of the created ticket' },
      status: { type: 'string', description: 'Status of the ticket' },
      created_at: { type: 'string', description: 'Timestamp when the ticket was created' },
      assigned_to: { type: 'string', description: 'Agent the ticket is assigned to' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.8,
    fallbackMessage: "I'm unable to create a ticket at this moment. Please try again later or contact support directly.",
    maxRetries: 2,
    timeoutMs: 5000
  }
};

export const AppointmentTool: MCPToolDefinition = {
  name: 'schedule_appointment',
  description: 'Schedules an appointment with a healthcare provider',
  inputs: {
    type: 'object',
    properties: {
      patient_id: { type: 'string', description: 'Patient identifier' },
      provider_id: { type: 'string', description: 'Provider identifier (optional)' },
      appointment_type: { 
        type: 'string', 
        description: 'Type of appointment',
        enum: ['check-up', 'follow-up', 'specialist', 'emergency', 'wellness']
      },
      preferred_date: { type: 'string', description: 'Preferred date (ISO format)' },
      preferred_time: { type: 'string', description: 'Preferred time of day' },
      notes: { type: 'string', description: 'Additional notes or context' }
    },
    required: ['patient_id', 'appointment_type']
  },
  outputs: {
    type: 'object',
    properties: {
      appointment_id: { type: 'string', description: 'Unique identifier for the appointment' },
      scheduled_time: { type: 'string', description: 'Confirmed date and time (ISO format)' },
      provider: { type: 'string', description: 'Name of the assigned provider' },
      location: { type: 'string', description: 'Location details for the appointment' },
      prep_instructions: { type: 'string', description: 'Any preparation instructions' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.9,
    fallbackMessage: "I couldn't schedule your appointment. Please call our scheduling line directly.",
    requiresHumanApproval: true
  }
};

export const WellnessMetricTool: MCPToolDefinition = {
  name: 'record_wellness_metric',
  description: 'Records a wellness metric for a patient',
  inputs: {
    type: 'object',
    properties: {
      patient_id: { type: 'string', description: 'Patient identifier' },
      metric_type: { 
        type: 'string', 
        description: 'Type of wellness metric',
        enum: ['blood_pressure', 'weight', 'glucose', 'heart_rate', 'oxygen', 'steps', 'sleep', 'mood']
      },
      value: { type: 'string', description: 'Metric value' },
      units: { type: 'string', description: 'Units of measurement' },
      timestamp: { type: 'string', description: 'When the measurement was taken (ISO format)' },
      notes: { type: 'string', description: 'Additional context or notes' }
    },
    required: ['patient_id', 'metric_type', 'value']
  },
  outputs: {
    type: 'object',
    properties: {
      record_id: { type: 'string', description: 'Unique identifier for the recorded metric' },
      status: { type: 'string', description: 'Status of the recording' },
      trend: { type: 'string', description: 'Trend compared to previous recordings' },
      recommendations: { type: 'string', description: 'Automated recommendations based on the metric' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.85,
    outputFilters: {
      recommendations: (value: string) => {
        // Ensure recommendations don't contain medical diagnoses
        if (value.toLowerCase().includes('diagnos')) {
          return 'Please consult with your healthcare provider for personalized advice.';
        }
        return value;
      }
    }
  }
};

export const EmailTool: MCPToolDefinition = {
  name: 'send_email',
  description: 'Sends an email to a patient or provider',
  inputs: {
    type: 'object',
    properties: {
      to: { 
        type: 'array', 
        description: 'Email recipients',
        items: { type: 'string' }
      },
      cc: { 
        type: 'array', 
        description: 'CC recipients',
        items: { type: 'string' }
      },
      subject: { type: 'string', description: 'Email subject' },
      body: { type: 'string', description: 'Email body content' },
      template_id: { type: 'string', description: 'Optional template identifier' },
      template_data: { 
        type: 'object', 
        description: 'Data to populate the template' 
      },
      attachment_ids: { 
        type: 'array', 
        description: 'IDs of attachments to include',
        items: { type: 'string' }
      }
    },
    required: ['to', 'subject', 'body']
  },
  outputs: {
    type: 'object',
    properties: {
      message_id: { type: 'string', description: 'ID of the sent email' },
      status: { type: 'string', description: 'Delivery status' },
      timestamp: { type: 'string', description: 'When the email was sent' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.95,
    fallbackMessage: "I couldn't send your email. Please try again or contact support.",
    inputValidation: {
      body: (value: string) => {
        // Check for sensitive information patterns
        const hasSensitiveInfo = /\b(?:\d{3}-\d{2}-\d{4}|\d{9})\b/.test(value); // SSN pattern
        return !hasSensitiveInfo;
      }
    }
  }
};

export const PatientSummaryTool: MCPToolDefinition = {
  name: 'fetch_patient_summary',
  description: 'Retrieves a summary of patient information',
  inputs: {
    type: 'object',
    properties: {
      patient_id: { type: 'string', description: 'Patient identifier' },
      patient_name: { type: 'string', description: 'Patient name for verification' },
      dob: { type: 'string', description: 'Date of birth for verification' },
      include_sections: { 
        type: 'array', 
        description: 'Specific sections to include in the summary',
        items: { 
          type: 'string',
          enum: [
            'demographics', 
            'medications', 
            'allergies', 
            'conditions', 
            'recent_visits', 
            'upcoming_appointments'
          ]
        }
      }
    },
    required: ['patient_id']
  },
  outputs: {
    type: 'object',
    properties: {
      patient_name: { type: 'string', description: 'Full name of the patient' },
      age: { type: 'number', description: 'Patient age' },
      gender: { type: 'string', description: 'Patient gender' },
      active_medications: { 
        type: 'array', 
        description: 'List of current medications',
        items: { type: 'string' }
      },
      allergies: { 
        type: 'array', 
        description: 'List of allergies',
        items: { type: 'string' }
      },
      conditions: { 
        type: 'array', 
        description: 'List of medical conditions',
        items: { type: 'string' }
      },
      recent_visits: { type: 'number', description: 'Number of visits in the last 6 months' },
      upcoming_appointments: { 
        type: 'array', 
        description: 'List of upcoming appointments',
        items: { 
          type: 'object',
          description: 'Appointment details',
          properties: {
            date: { type: 'string' },
            provider: { type: 'string' },
            reason: { type: 'string' }
          }
        }
      }
    }
  },
  guardrails: {
    confidenceThreshold: 0.97,
    requiresHumanApproval: true,
    fallbackMessage: "I'm unable to access patient records at this time. This may require authorized personnel.",
    outputFilters: {
      // Sanitize all outputs to avoid leaking sensitive information
      conditions: (conditions: string[]) => {
        // Redact sensitive conditions for non-medical staff
        const sensitiveConditions = ['HIV', 'mental health', 'substance abuse'];
        return conditions.map(c => 
          sensitiveConditions.some(sc => c.toLowerCase().includes(sc.toLowerCase())) 
            ? '[REDACTED - Requires Medical Access]' 
            : c
        );
      }
    }
  }
};

export const VoiceTranscriptionTool: MCPToolDefinition = {
  name: 'transcribe_voice',
  description: 'Transcribes voice input to text',
  inputs: {
    type: 'object',
    properties: {
      audio_data: { type: 'string', description: 'Base64 encoded audio data' },
      audio_format: { type: 'string', description: 'Format of the audio (e.g., wav, mp3)' },
      language: { type: 'string', description: 'Language code (e.g., en-US)' },
      duration_seconds: { type: 'number', description: 'Duration of the audio in seconds' }
    },
    required: ['audio_data']
  },
  outputs: {
    type: 'object',
    properties: {
      transcript: { type: 'string', description: 'Transcribed text' },
      confidence: { type: 'number', description: 'Confidence score (0-1)' },
      language_detected: { type: 'string', description: 'Detected language' },
      segments: { 
        type: 'array', 
        description: 'Text segments with timestamps',
        items: { 
          type: 'object',
          description: 'Segment details',
          properties: {
            text: { type: 'string' },
            start_time: { type: 'number' },
            end_time: { type: 'number' }
          }
        }
      }
    }
  },
  guardrails: {
    confidenceThreshold: 0.6,
    fallbackMessage: "I couldn't understand the audio clearly. Could you please speak more clearly or try again in a quieter environment?"
  }
};

export const DocumentGenerationTool: MCPToolDefinition = {
  name: 'generate_document',
  description: 'Generates a document based on a template and data',
  inputs: {
    type: 'object',
    properties: {
      document_type: { 
        type: 'string', 
        description: 'Type of document to generate',
        enum: [
          'after_visit_summary', 
          'prescription', 
          'referral', 
          'medical_certificate',
          'care_plan',
          'consent_form'
        ]
      },
      patient_id: { type: 'string', description: 'Patient identifier' },
      provider_id: { type: 'string', description: 'Provider identifier' },
      template_data: { type: 'object', description: 'Data to populate the template' },
      format: { 
        type: 'string', 
        description: 'Output format',
        enum: ['pdf', 'docx', 'html', 'text']
      }
    },
    required: ['document_type', 'patient_id']
  },
  outputs: {
    type: 'object',
    properties: {
      document_id: { type: 'string', description: 'ID of the generated document' },
      url: { type: 'string', description: 'URL to access the document' },
      filename: { type: 'string', description: 'Name of the generated file' },
      expiry: { type: 'string', description: 'When the document URL expires' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.9,
    requiresHumanApproval: true,
    fallbackMessage: "I couldn't generate the document. This may require review by a healthcare professional."
  }
};

export const CallLoggingTool: MCPToolDefinition = {
  name: 'log_call',
  description: 'Logs details of a voice or video call',
  inputs: {
    type: 'object',
    properties: {
      call_id: { type: 'string', description: 'Unique call identifier' },
      patient_id: { type: 'string', description: 'Patient identifier' },
      agent_id: { type: 'string', description: 'Agent identifier' },
      call_type: { 
        type: 'string', 
        description: 'Type of call',
        enum: ['wellness_check', 'medication_reminder', 'appointment_follow_up', 'technical_support', 'general_inquiry']
      },
      start_time: { type: 'string', description: 'Call start time (ISO format)' },
      end_time: { type: 'string', description: 'Call end time (ISO format)' },
      duration_seconds: { type: 'number', description: 'Call duration in seconds' },
      summary: { type: 'string', description: 'Brief summary of the call' },
      outcomes: { 
        type: 'array', 
        description: 'Outcomes or actions from the call',
        items: { type: 'string' }
      },
      follow_up_required: { type: 'boolean', description: 'Whether follow-up is needed' }
    },
    required: ['call_id', 'patient_id', 'agent_id', 'start_time']
  },
  outputs: {
    type: 'object',
    properties: {
      record_id: { type: 'string', description: 'ID of the call log record' },
      status: { type: 'string', description: 'Status of the logging operation' }
    }
  },
  guardrails: {
    confidenceThreshold: 0.8,
    fallbackMessage: "I couldn't log the call details. Please ensure all required information is provided."
  }
};

// Export all tools
export const MCP_TOOLS = {
  TicketTool,
  AppointmentTool,
  WellnessMetricTool,
  EmailTool,
  PatientSummaryTool,
  VoiceTranscriptionTool,
  DocumentGenerationTool,
  CallLoggingTool
};
