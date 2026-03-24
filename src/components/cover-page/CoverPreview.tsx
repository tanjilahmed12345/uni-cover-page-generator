import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { CoverPageData, VisibilityState, DesignTemplate } from '@/types/cover-page';

interface CoverPreviewProps {
  previewRef: React.RefObject<HTMLDivElement>;
  coverData: CoverPageData;
  visibility: VisibilityState;
  template: DesignTemplate;
  universityNameFontSize: string;
  universityNameFontFamily: string;
  universityNameFontStyle: string;
  projectTitleFontSize: string;
  projectTitleFontFamily: string;
  projectTitleFontStyle: string;
  showSubmissionDateBorder: boolean;
}

const CoverPreview: React.FC<CoverPreviewProps> = ({
  previewRef,
  coverData,
  visibility,
  template,
  universityNameFontSize,
  universityNameFontFamily,
  universityNameFontStyle,
  projectTitleFontSize,
  projectTitleFontFamily,
  projectTitleFontStyle,
  showSubmissionDateBorder,
}) => {
  const { styles } = template;
  const textColor = styles.isDark ? 'text-gray-100' : 'text-gray-800';
  const subtextColor = styles.isDark ? 'text-gray-300' : 'text-gray-600';
  const isLeftAligned = styles.layout === 'left-aligned';
  const isModernGrid = styles.layout === 'modern-grid';
  const alignment = isLeftAligned ? 'text-left' : 'text-center';

  const [logoError, setLogoError] = useState(false);
  useEffect(() => { setLogoError(false); }, [coverData.logoUrl]);

  const renderHeader = () => (
    <div className={`${alignment} space-y-4`}>
      {styles.decorativeElements && (
        <div className={`${styles.borderStyle} ${isModernGrid ? 'border-l-4 pl-4' : 'border-t-4 border-b-4 py-4'}`}>
          {renderUniversityAndLogo()}
        </div>
      )}
      {!styles.decorativeElements && renderUniversityAndLogo()}

      {visibility.documentType && (
        <div className={`${styles.decorativeElements ? `border-b-2 ${styles.borderStyle} pb-3` : 'pb-2'}`}>
          <h2 className={`${coverData.styles.fontSize.heading} font-semibold ${styles.primaryColor} uppercase tracking-wider`}>
            {coverData.documentType}
          </h2>
        </div>
      )}
    </div>
  );

  const renderUniversityAndLogo = () => (
    <>
      {visibility.universityName && (
        <h1 className={`${universityNameFontSize} ${universityNameFontFamily} ${universityNameFontStyle} font-bold ${styles.primaryColor} tracking-wide`}>
          {coverData.universityName}
        </h1>
      )}
      {visibility.logo && coverData.logoUrl && !logoError && (
        <div className={`${isLeftAligned ? '' : 'flex justify-center'} my-4`}>
          <img
            src={coverData.logoUrl}
            alt="University Logo"
            onError={() => setLogoError(true)}
            style={{
              width: `${coverData.logoWidth}px`,
              height: `${coverData.logoHeight}px`,
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );

  const renderCourseAndProject = () => (
    <div className={`${alignment} space-y-4`}>
      <div>
        {visibility.courseCode && (
          <p className={`${coverData.styles.fontSize.body} ${textColor} font-medium`}>
            Course Code: <span className={`${styles.primaryColor} font-semibold`}>{coverData.courseCode}</span>
          </p>
        )}
        {visibility.courseTitle && (
          <p className={`${coverData.styles.fontSize.body} ${textColor} font-medium mt-1`}>
            Course Title: <span className={`${styles.primaryColor} font-semibold`}>{coverData.courseTitle}</span>
          </p>
        )}
      </div>

      {visibility.projectTitle && (
        <div className={`pt-4 ${styles.decorativeElements && isModernGrid ? `border-l-4 ${styles.borderStyle} pl-4` : ''}`}>
          <h3 className={`${projectTitleFontSize} ${projectTitleFontFamily} ${projectTitleFontStyle} font-bold ${styles.primaryColor} leading-tight`}>
            {coverData.projectTitle}
          </h3>
        </div>
      )}
    </div>
  );

  const submittedByFields: { key: keyof VisibilityState; label?: string; value: string; isName?: boolean }[] = [
    { key: 'submittedByName', value: coverData.submittedBy.name, isName: true },
    { key: 'submittedById', label: 'ID', value: coverData.submittedBy.id },
    { key: 'submittedBySection', label: 'Section', value: coverData.submittedBy.section },
    { key: 'submittedBySession', label: 'Session', value: coverData.submittedBy.session },
    { key: 'submittedByProgram', label: 'Dept', value: coverData.submittedBy.program },
  ];

  const submittedToFields: { key: keyof VisibilityState; value: string; isName?: boolean; suffix?: string }[] = [
    { key: 'submittedToName', value: coverData.submittedTo.name, isName: true },
    { key: 'submittedToDesignation', value: coverData.submittedTo.designation, suffix: ',' },
    { key: 'submittedToDepartment', value: coverData.submittedTo.department, suffix: ',' },
    { key: 'submittedToUniversity', value: coverData.submittedTo.university },
  ];

  const renderSubmissionInfo = () => (
    <div className={`grid grid-cols-2 gap-0 border ${styles.borderStyle}`}>
      <div className={`text-left p-4 border-r ${styles.borderStyle}`}>
        <h4 className={`${coverData.styles.fontSize.body} font-bold ${styles.primaryColor} mb-3 pb-1 border-b ${styles.borderStyle}`}>
          Submitted By:
        </h4>
        <div className="space-y-1">
          {submittedByFields.map(({ key, label, value, isName }) =>
            visibility[key] && (
              <p key={key} className={isName ? `${coverData.styles.fontSize.body} font-semibold ${textColor}` : `text-sm ${subtextColor}`}>
                {label && <span className="text-[13px] font-semibold">{label}: </span>}
                {value}
              </p>
            )
          )}
        </div>
      </div>

      <div className="text-left p-4">
        <h4 className={`${coverData.styles.fontSize.body} font-bold ${styles.primaryColor} mb-3 pb-1 border-b ${styles.borderStyle}`}>
          Submitted To:
        </h4>
        <div className="space-y-1">
          {submittedToFields.map(({ key, value, isName, suffix }) =>
            visibility[key] && (
              <p key={key} className={isName ? `${coverData.styles.fontSize.body} font-semibold ${textColor}` : `text-sm ${subtextColor}`}>
                {value}{suffix}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <div className={alignment}>
      {visibility.submissionDate && (
        <div className={showSubmissionDateBorder ? `border-t ${styles.borderStyle} pt-4` : ''}>
          <p className={`${coverData.styles.fontSize.body} ${textColor} font-medium`}>
            <span className={`${styles.primaryColor} font-semibold`}>Submission Date:</span> {coverData.submissionDate}
          </p>
        </div>
      )}
    </div>
  );

  // ─── Modern Grid Layout ───
  if (isModernGrid) {
    return (
      <div className="lg:sticky">
        <Card className="shadow-professional">
          <CardContent className="p-2">
            <div className="aspect-[210/297] max-h-[800px]">
              <div
                ref={previewRef}
                className={`w-full h-full ${styles.backgroundColor} ${coverData.styles.fontFamily} flex`}
                style={{ minHeight: '842px' }}
              >
                {/* Accent sidebar */}
                <div className={`w-2 ${styles.accentBgColor}`} />

                <div className="flex-1 p-10 flex flex-col justify-between">
                  {renderHeader()}

                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {renderCourseAndProject()}
                    <div className={`w-16 h-1 ${styles.accentBgColor}`} />
                    {renderSubmissionInfo()}
                  </div>

                  {renderFooter()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ─── Centered & Left-Aligned Layouts ───
  return (
    <div className="lg:sticky">
      <Card className="shadow-professional">
        <CardContent className="p-2">
          <div className="aspect-[210/297] max-h-[800px]">
            <div
              ref={previewRef}
              className={`w-full h-full p-12 ${styles.backgroundColor} ${coverData.styles.fontFamily} flex flex-col justify-between`}
              style={{ minHeight: '842px' }}
            >
              {renderHeader()}

              <div className="space-y-8 flex-1 flex flex-col justify-center">
                {renderCourseAndProject()}

                {styles.decorativeElements ? (
                  <div className="flex items-center gap-3 my-4">
                    <div className={`flex-1 h-px ${styles.accentBgColor}`} />
                    <div className={`w-2 h-2 rounded-full ${styles.accentBgColor}`} />
                    <div className={`flex-1 h-px ${styles.accentBgColor}`} />
                  </div>
                ) : (
                  <div className={`h-px ${styles.accentBgColor} my-4`} />
                )}

                {renderSubmissionInfo()}
              </div>

              {renderFooter()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverPreview;
