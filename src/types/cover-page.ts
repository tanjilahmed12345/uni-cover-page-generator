export type TemplateCategory = 'Classic' | 'Modern' | 'Creative' | 'Professional' | 'Minimalist';

export interface DesignTemplate {
  id: string;
  name: string;
  category: TemplateCategory;
  styles: {
    fontSize: {
      title: string;
      heading: string;
      body: string;
    };
    fontFamily: string;
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    borderStyle: string;
    accentBgColor: string;
    layout: 'centered' | 'left-aligned' | 'modern-grid';
    decorativeElements: boolean;
  };
}

export interface CoverPageData {
  universityName: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  documentType: string;
  courseCode: string;
  courseTitle: string;
  projectTitle: string;
  submittedBy: {
    name: string;
    id: string;
    section: string;
    session: string;
    program: string;
  };
  submittedTo: {
    name: string;
    designation: string;
    department: string;
    university: string;
  };
  submissionDate: string;
  styles: {
    fontSize: {
      title: string;
      heading: string;
      body: string;
    };
    fontFamily: string;
    primaryColor: string;
    accentColor: string;
  };
}

export interface VisibilityState {
  universityName: boolean;
  logo: boolean;
  documentType: boolean;
  courseCode: boolean;
  courseTitle: boolean;
  projectTitle: boolean;
  submittedByName: boolean;
  submittedById: boolean;
  submittedBySection: boolean;
  submittedBySession: boolean;
  submittedByProgram: boolean;
  submittedToName: boolean;
  submittedToDesignation: boolean;
  submittedToDepartment: boolean;
  submittedToUniversity: boolean;
  submissionDate: boolean;
}
