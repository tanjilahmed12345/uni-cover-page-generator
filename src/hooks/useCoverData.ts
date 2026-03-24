import { useState, useRef } from 'react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import { DEFAULT_COVER_DATA, DEFAULT_VISIBILITY, DEFAULT_FONT_STATE } from '@/constants/cover-page';

export function useCoverData() {
  const logoInputRef = useRef<HTMLInputElement>(null);

  const [coverData, setCoverData] = useState<CoverPageData>(DEFAULT_COVER_DATA);
  const [visibility, setVisibility] = useState<VisibilityState>(DEFAULT_VISIBILITY);

  const [universityNameFontSize, setUniversityNameFontSize] = useState(DEFAULT_FONT_STATE.universityNameFontSize);
  const [universityNameFontFamily, setUniversityNameFontFamily] = useState(DEFAULT_FONT_STATE.universityNameFontFamily);
  const [universityNameFontStyle, setUniversityNameFontStyle] = useState(DEFAULT_FONT_STATE.universityNameFontStyle);

  const [projectTitleFontSize, setProjectTitleFontSize] = useState(DEFAULT_FONT_STATE.projectTitleFontSize);
  const [projectTitleFontFamily, setProjectTitleFontFamily] = useState(DEFAULT_FONT_STATE.projectTitleFontFamily);
  const [projectTitleFontStyle, setProjectTitleFontStyle] = useState(DEFAULT_FONT_STATE.projectTitleFontStyle);

  const [showSubmissionDateBorder, setShowSubmissionDateBorder] = useState(false);

  const updateCoverData = (path: string, value: any) => {
    setCoverData(prev => {
      const keys = path.split('.');
      const newData = { ...prev };
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const updateVisibility = (key: keyof VisibilityState, value: boolean) => {
    setVisibility(prev => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateCoverData('logoUrl', e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUniversityNameFontChange = (property: string, value: string) => {
    if (property === 'fontSize') setUniversityNameFontSize(value);
    if (property === 'fontFamily') setUniversityNameFontFamily(value);
    if (property === 'fontStyle') setUniversityNameFontStyle(value);
  };

  const handleProjectTitleFontChange = (property: string, value: string) => {
    if (property === 'fontSize') setProjectTitleFontSize(value);
    if (property === 'fontFamily') setProjectTitleFontFamily(value);
    if (property === 'fontStyle') setProjectTitleFontStyle(value);
  };

  return {
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
  };
}
