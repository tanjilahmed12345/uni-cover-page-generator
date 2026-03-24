import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import universityLogo from '@/assets/university-logo.png';

export const DOCUMENT_TYPES = [
  'Project Report',
  'Assignment',
  'Lab Report',
  'Thesis',
  'Dissertation',
] as const;

export const UNIVERSITY_NAME_FONT_SIZES = [
  { value: 'text-2xl', label: 'Small' },
  { value: 'text-3xl', label: 'Medium' },
  { value: 'text-4xl', label: 'Large' },
  { value: 'text-5xl', label: 'X-Large' },
  { value: 'text-6xl', label: 'XX-Large' },
] as const;

export const PROJECT_TITLE_FONT_SIZES = [
  { value: 'text-xl', label: 'Small' },
  { value: 'text-2xl', label: 'Medium' },
  { value: 'text-3xl', label: 'Large' },
  { value: 'text-4xl', label: 'X-Large' },
  { value: 'text-5xl', label: 'XX-Large' },
] as const;

export const FONT_FAMILY_OPTIONS = [
  { value: 'font-serif', label: 'Serif' },
  { value: 'font-sans', label: 'Sans' },
  { value: 'font-mono', label: 'Mono' },
] as const;

export const FONT_STYLE_OPTIONS = [
  { value: 'not-italic', label: 'Normal' },
  { value: 'italic', label: 'Italic' },
] as const;

export const TEMPLATE_CATEGORIES = [
  'Classic',
  'Modern',
  'Creative',
  'Professional',
  'Minimalist',
] as const;

export const DEFAULT_COVER_DATA: CoverPageData = {
  universityName: 'University of Codeforces',
  logoUrl: universityLogo,
  logoWidth: 140,
  logoHeight: 140,
  documentType: 'Project Report',
  courseCode: 'CSE 401',
  courseTitle: 'Software Engineering',
  projectTitle: 'Design and Development of a University Management System (UMS)',
  submittedBy: {
    name: 'Mr. Programmer',
    id: '2018331546',
    section: 'A',
    session: '2018-19',
    program: 'CSE',
  },
  submittedTo: {
    name: 'Dr. Tanjil Ahmed',
    designation: 'Professor',
    department: 'Department of CSE',
    university: 'University of Codeforces',
  },
  submissionDate: new Date().toLocaleDateString('en-GB'),
  styles: {
    fontSize: {
      title: 'text-4xl',
      heading: 'text-2xl',
      body: 'text-base',
    },
    fontFamily: 'font-serif',
    primaryColor: 'text-primary',
    accentColor: 'text-accent',
  },
};

export const DEFAULT_VISIBILITY: VisibilityState = {
  universityName: true,
  logo: true,
  documentType: true,
  courseCode: true,
  courseTitle: true,
  projectTitle: true,
  submittedByName: true,
  submittedById: true,
  submittedBySection: true,
  submittedBySession: true,
  submittedByProgram: true,
  submittedToName: true,
  submittedToDesignation: true,
  submittedToDepartment: true,
  submittedToUniversity: true,
  submissionDate: true,
};

export const DEFAULT_FONT_STATE = {
  universityNameFontSize: 'text-3xl',
  universityNameFontFamily: 'font-serif',
  universityNameFontStyle: 'not-italic',
  projectTitleFontSize: 'text-xl',
  projectTitleFontFamily: 'font-serif',
  projectTitleFontStyle: 'not-italic',
} as const;

export const CANVAS_OPTIONS = {
  scale: 2,
  backgroundColor: '#ffffff',
  logging: false,
} as const;
