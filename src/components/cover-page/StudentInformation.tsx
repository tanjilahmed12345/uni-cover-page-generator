import React from 'react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';

interface StudentInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

const STUDENT_FIELDS: { id: string; label: string; dataKey: keyof CoverPageData['submittedBy']; visibilityKey: keyof VisibilityState }[] = [
  { id: 'by-name', label: 'Name', dataKey: 'name', visibilityKey: 'submittedByName' },
  { id: 'by-id', label: 'Student ID', dataKey: 'id', visibilityKey: 'submittedById' },
  { id: 'by-section', label: 'Section', dataKey: 'section', visibilityKey: 'submittedBySection' },
  { id: 'by-session', label: 'Session', dataKey: 'session', visibilityKey: 'submittedBySession' },
  { id: 'by-program', label: 'Department', dataKey: 'program', visibilityKey: 'submittedByProgram' },
];

const StudentInformation: React.FC<StudentInformationProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility,
}) => {
  return (
    <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        Student Information
      </h3>
      <div className="space-y-3">
        {STUDENT_FIELDS.map(({ id, label, dataKey, visibilityKey }) => (
          <FormFieldWithVisibility
            key={id}
            id={id}
            label={label}
            value={coverData.submittedBy[dataKey]}
            onChange={(v) => onUpdateCoverData(`submittedBy.${dataKey}`, v)}
            visibilityChecked={visibility[visibilityKey]}
            onVisibilityChange={(c) => onUpdateVisibility(visibilityKey, c)}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentInformation;
