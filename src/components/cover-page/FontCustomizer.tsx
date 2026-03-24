import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FONT_FAMILY_OPTIONS, FONT_STYLE_OPTIONS } from '@/constants/cover-page';

interface FontCustomizerProps {
  fontSizeOptions: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  currentFontSize: string;
  currentFontFamily: string;
  currentFontStyle: string;
  onFontChange: (property: string, value: string) => void;
}

const FontCustomizer: React.FC<FontCustomizerProps> = ({
  fontSizeOptions,
  currentFontSize,
  currentFontFamily,
  currentFontStyle,
  onFontChange,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 ml-4 p-3 bg-muted/30 rounded">
      <div>
        <Label className="text-xs font-medium text-foreground">Font Size</Label>
        <Select value={currentFontSize} onValueChange={(value) => onFontChange('fontSize', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontSizeOptions.map(opt => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs font-medium text-foreground">Font Family</Label>
        <Select value={currentFontFamily} onValueChange={(value) => onFontChange('fontFamily', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {FONT_FAMILY_OPTIONS.map(opt => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs font-medium text-foreground">Font Style</Label>
        <Select value={currentFontStyle} onValueChange={(value) => onFontChange('fontStyle', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {FONT_STYLE_OPTIONS.map(opt => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FontCustomizer;
