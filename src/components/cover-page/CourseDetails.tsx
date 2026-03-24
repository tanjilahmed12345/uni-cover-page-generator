import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import { PROJECT_TITLE_FONT_SIZES } from '@/constants/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';
import FontCustomizer from './FontCustomizer';

interface CourseDetailsProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
  projectTitleFontSize: string;
  projectTitleFontFamily: string;
  projectTitleFontStyle: string;
  onProjectTitleFontChange: (property: string, value: string) => void;
  showSubmissionDateBorder: boolean;
  onSubmissionDateBorderChange: (value: boolean) => void;
}

const COURSE_FIELDS: { id: string; label: string; dataKey: keyof CoverPageData; visibilityKey: keyof VisibilityState }[] = [
  { id: 'courseCode', label: 'Course Code', dataKey: 'courseCode', visibilityKey: 'courseCode' },
  { id: 'courseTitle', label: 'Course Title', dataKey: 'courseTitle', visibilityKey: 'courseTitle' },
  { id: 'projectTitle', label: 'Project Title', dataKey: 'projectTitle', visibilityKey: 'projectTitle' },
];

const CourseDetails: React.FC<CourseDetailsProps> = ({
  coverData,
  visibility,
  onUpdateCoverData,
  onUpdateVisibility,
  projectTitleFontSize,
  projectTitleFontFamily,
  projectTitleFontStyle,
  onProjectTitleFontChange,
  showSubmissionDateBorder,
  onSubmissionDateBorderChange,
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Course & Project Details</h2>

        <div className="space-y-4">
          {COURSE_FIELDS.map(({ id, label, dataKey, visibilityKey }) => (
            <FormFieldWithVisibility
              key={id}
              id={id}
              label={label}
              value={coverData[dataKey] as string}
              onChange={(v) => onUpdateCoverData(dataKey, v)}
              visibilityChecked={visibility[visibilityKey]}
              onVisibilityChange={(c) => onUpdateVisibility(visibilityKey, c)}
              labelSize="sm"
            />
          ))}

          <FontCustomizer
            fontSizeOptions={PROJECT_TITLE_FONT_SIZES}
            currentFontSize={projectTitleFontSize}
            currentFontFamily={projectTitleFontFamily}
            currentFontStyle={projectTitleFontStyle}
            onFontChange={onProjectTitleFontChange}
          />

          <FormFieldWithVisibility
            id="submissionDate"
            label="Submission Date"
            value={coverData.submissionDate}
            onChange={(v) => onUpdateCoverData('submissionDate', v)}
            visibilityChecked={visibility.submissionDate}
            onVisibilityChange={(c) => onUpdateVisibility('submissionDate', c)}
            labelSize="sm"
          />

          <div className="flex items-center gap-3 ml-4">
            <Checkbox
              id="show-submission-date-border"
              checked={showSubmissionDateBorder}
              onCheckedChange={(checked) => onSubmissionDateBorderChange(checked as boolean)}
            />
            <Label htmlFor="show-submission-date-border" className="text-sm text-foreground">Show border above submission date</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
