import React from 'react';
import { useCoverData } from '@/hooks/useCoverData';
import { useTemplateManager } from '@/hooks/useTemplateManager';
import { useCoverExport } from '@/hooks/useCoverExport';

import TemplateSelector from './cover-page/TemplateSelector';
import BasicInformation from './cover-page/BasicInformation';
import CourseDetails from './cover-page/CourseDetails';
import StudentInstructorSection from './cover-page/StudentInstructorSection';
import DownloadOptions from './cover-page/DownloadOptions';
import CoverPreview from './cover-page/CoverPreview';

const CoverPage: React.FC = () => {
  const {
    coverData,
    setCoverData,
    visibility,
    updateCoverData,
    updateVisibility,
    handleLogoUpload,
    logoInputRef,
    universityNameFontSize,
    universityNameFontFamily,
    universityNameFontStyle,
    handleUniversityNameFontChange,
    projectTitleFontSize,
    projectTitleFontFamily,
    projectTitleFontStyle,
    handleProjectTitleFontChange,
    showSubmissionDateBorder,
    setShowSubmissionDateBorder,
  } = useCoverData();

  const { selectedTemplate, currentTemplate, handleTemplateChange } =
    useTemplateManager(setCoverData);

  const { previewRef, downloadAsPDF, downloadAsImage, isExporting } =
    useCoverExport(coverData.projectTitle);

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            University Cover Page Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Create professional cover pages for your academic projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 h-screen">
          <div className="overflow-y-auto max-h-full pr-2 space-y-6">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              currentTemplate={currentTemplate}
              onTemplateChange={handleTemplateChange}
            />

            <DownloadOptions
              onDownloadPDF={downloadAsPDF}
              onDownloadImage={downloadAsImage}
              isExporting={isExporting}
            />

            <BasicInformation
              coverData={coverData}
              visibility={visibility}
              logoInputRef={logoInputRef}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
              onLogoUpload={handleLogoUpload}
              universityNameFontSize={universityNameFontSize}
              universityNameFontFamily={universityNameFontFamily}
              universityNameFontStyle={universityNameFontStyle}
              onUniversityNameFontChange={handleUniversityNameFontChange}
            />

            <CourseDetails
              coverData={coverData}
              visibility={visibility}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
              projectTitleFontSize={projectTitleFontSize}
              projectTitleFontFamily={projectTitleFontFamily}
              projectTitleFontStyle={projectTitleFontStyle}
              onProjectTitleFontChange={handleProjectTitleFontChange}
              showSubmissionDateBorder={showSubmissionDateBorder}
              onSubmissionDateBorderChange={setShowSubmissionDateBorder}
            />

            <StudentInstructorSection
              coverData={coverData}
              visibility={visibility}
              onUpdateCoverData={updateCoverData}
              onUpdateVisibility={updateVisibility}
            />

          </div>

          <div className="overflow-y-auto max-h-full">
            <CoverPreview
              previewRef={previewRef}
              coverData={coverData}
              visibility={visibility}
              template={currentTemplate}
              universityNameFontSize={universityNameFontSize}
              universityNameFontFamily={universityNameFontFamily}
              universityNameFontStyle={universityNameFontStyle}
              projectTitleFontSize={projectTitleFontSize}
              projectTitleFontFamily={projectTitleFontFamily}
              projectTitleFontStyle={projectTitleFontStyle}
              showSubmissionDateBorder={showSubmissionDateBorder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
