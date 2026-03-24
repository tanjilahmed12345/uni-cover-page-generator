import { useState } from 'react';
import type { CoverPageData, DesignTemplate } from '@/types/cover-page';
import { designTemplates, getTemplateById } from '@/data/design-templates';

export function useTemplateManager(
  setCoverData: React.Dispatch<React.SetStateAction<CoverPageData>>
) {
  const [selectedTemplate, setSelectedTemplate] = useState('classic-1');
  const [currentTemplate, setCurrentTemplate] = useState<DesignTemplate>(designTemplates[0]);

  const handleTemplateChange = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setCurrentTemplate(template);
      setCoverData(prev => ({
        ...prev,
        styles: {
          ...prev.styles,
          fontSize: template.styles.fontSize,
          fontFamily: template.styles.fontFamily,
          primaryColor: template.styles.primaryColor,
          accentColor: template.styles.accentColor,
        },
      }));
    }
  };

  return { selectedTemplate, currentTemplate, handleTemplateChange };
}
