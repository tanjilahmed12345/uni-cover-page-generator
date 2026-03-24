import React from 'react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';

interface InstructorInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

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
        <FormFieldWithVisibility
          id="to-name"
          label="Name"
          value={coverData.submittedTo.name}
          onChange={(v) => onUpdateCoverData('submittedTo.name', v)}
          visibilityChecked={visibility.submittedToName}
          onVisibilityChange={(c) => onUpdateVisibility('submittedToName', c)}
        />
        <FormFieldWithVisibility
          id="to-designation"
          label="Designation"
          value={coverData.submittedTo.designation}
          onChange={(v) => onUpdateCoverData('submittedTo.designation', v)}
          visibilityChecked={visibility.submittedToDesignation}
          onVisibilityChange={(c) => onUpdateVisibility('submittedToDesignation', c)}
        />
        <FormFieldWithVisibility
          id="to-department"
          label="Department"
          value={coverData.submittedTo.department}
          onChange={(v) => onUpdateCoverData('submittedTo.department', v)}
          visibilityChecked={visibility.submittedToDepartment}
          onVisibilityChange={(c) => onUpdateVisibility('submittedToDepartment', c)}
        />
        <FormFieldWithVisibility
          id="to-university"
          label="University"
          value={coverData.submittedTo.university}
          onChange={(v) => onUpdateCoverData('submittedTo.university', v)}
          visibilityChecked={visibility.submittedToUniversity}
          onVisibilityChange={(c) => onUpdateVisibility('submittedToUniversity', c)}
        />
      </div>
    </div>
  );
};

export default InstructorInformation;
