import React from 'react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';

interface InstructorInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

const INSTRUCTOR_FIELDS: { id: string; label: string; dataKey: keyof CoverPageData['submittedTo']; visibilityKey: keyof VisibilityState }[] = [
  { id: 'to-name', label: 'Name', dataKey: 'name', visibilityKey: 'submittedToName' },
  { id: 'to-designation', label: 'Designation', dataKey: 'designation', visibilityKey: 'submittedToDesignation' },
  { id: 'to-department', label: 'Department', dataKey: 'department', visibilityKey: 'submittedToDepartment' },
  { id: 'to-university', label: 'University', dataKey: 'university', visibilityKey: 'submittedToUniversity' },
];

const InstructorInformation: React.FC<InstructorInformationProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility,
}) => {
  return (
    <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        Instructor Information
      </h3>
      <div className="space-y-3">
        {INSTRUCTOR_FIELDS.map(({ id, label, dataKey, visibilityKey }) => (
          <FormFieldWithVisibility
            key={id}
            id={id}
            label={label}
            value={coverData.submittedTo[dataKey]}
            onChange={(v) => onUpdateCoverData(`submittedTo.${dataKey}`, v)}
            visibilityChecked={visibility[visibilityKey]}
            onVisibilityChange={(c) => onUpdateVisibility(visibilityKey, c)}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorInformation;
