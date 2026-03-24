import React from 'react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';

interface StudentInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
}

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
        <FormFieldWithVisibility
          id="by-name"
          label="Name"
          value={coverData.submittedBy.name}
          onChange={(v) => onUpdateCoverData('submittedBy.name', v)}
          visibilityChecked={visibility.submittedByName}
          onVisibilityChange={(c) => onUpdateVisibility('submittedByName', c)}
        />
        <FormFieldWithVisibility
          id="by-id"
          label="Student ID"
          value={coverData.submittedBy.id}
          onChange={(v) => onUpdateCoverData('submittedBy.id', v)}
          visibilityChecked={visibility.submittedById}
          onVisibilityChange={(c) => onUpdateVisibility('submittedById', c)}
        />
        <FormFieldWithVisibility
          id="by-section"
          label="Section"
          value={coverData.submittedBy.section}
          onChange={(v) => onUpdateCoverData('submittedBy.section', v)}
          visibilityChecked={visibility.submittedBySection}
          onVisibilityChange={(c) => onUpdateVisibility('submittedBySection', c)}
        />
        <FormFieldWithVisibility
          id="by-session"
          label="Session"
          value={coverData.submittedBy.session}
          onChange={(v) => onUpdateCoverData('submittedBy.session', v)}
          visibilityChecked={visibility.submittedBySession}
          onVisibilityChange={(c) => onUpdateVisibility('submittedBySession', c)}
        />
        <FormFieldWithVisibility
          id="by-program"
          label="Department"
          value={coverData.submittedBy.program}
          onChange={(v) => onUpdateCoverData('submittedBy.program', v)}
          visibilityChecked={visibility.submittedByProgram}
          onVisibilityChange={(c) => onUpdateVisibility('submittedByProgram', c)}
        />
      </div>
    </div>
  );
};

export default StudentInformation;
