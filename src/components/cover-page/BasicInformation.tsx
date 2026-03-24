import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import type { CoverPageData, VisibilityState } from '@/types/cover-page';
import { DOCUMENT_TYPES, UNIVERSITY_NAME_FONT_SIZES } from '@/constants/cover-page';
import FormFieldWithVisibility from './FormFieldWithVisibility';
import FontCustomizer from './FontCustomizer';

interface BasicInformationProps {
  coverData: CoverPageData;
  visibility: VisibilityState;
  logoInputRef: React.RefObject<HTMLInputElement>;
  onUpdateCoverData: (path: string, value: string | number | boolean) => void;
  onUpdateVisibility: (key: keyof VisibilityState, value: boolean) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  universityNameFontSize: string;
  universityNameFontFamily: string;
  universityNameFontStyle: string;
  onUniversityNameFontChange: (property: string, value: string) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  coverData,
  visibility,
  logoInputRef,
  onUpdateCoverData,
  onUpdateVisibility,
  onLogoUpload,
  universityNameFontSize,
  universityNameFontFamily,
  universityNameFontStyle,
  onUniversityNameFontChange,
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Basic Information</h2>

        <div className="space-y-4">
          <FormFieldWithVisibility
            id="universityName"
            label="University Name"
            value={coverData.universityName}
            onChange={(v) => onUpdateCoverData('universityName', v)}
            visibilityChecked={visibility.universityName}
            onVisibilityChange={(c) => onUpdateVisibility('universityName', c)}
            labelSize="sm"
          />

          <FontCustomizer
            fontSizeOptions={UNIVERSITY_NAME_FONT_SIZES}
            currentFontSize={universityNameFontSize}
            currentFontFamily={universityNameFontFamily}
            currentFontStyle={universityNameFontStyle}
            onFontChange={onUniversityNameFontChange}
          />

          {/* Logo Size Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="logoWidth" className="text-sm font-medium text-foreground">Logo Width (px)</Label>
              <Input
                id="logoWidth"
                type="number"
                value={coverData.logoWidth}
                onChange={(e) => onUpdateCoverData('logoWidth', parseInt(e.target.value) || 120)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="logoHeight" className="text-sm font-medium text-foreground">Logo Height (px)</Label>
              <Input
                id="logoHeight"
                type="number"
                value={coverData.logoHeight}
                onChange={(e) => onUpdateCoverData('logoHeight', parseInt(e.target.value) || 120)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Logo Upload Section */}
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <Label className="text-sm font-medium text-foreground">University Logo</Label>
              <div className="mt-1 flex gap-2">
                <Input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={onLogoUpload}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={() => logoInputRef.current?.click()}
                  className="flex-1"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-logo"
                checked={visibility.logo}
                onCheckedChange={(checked) => onUpdateVisibility('logo', checked as boolean)}
              />
              <Label htmlFor="show-logo" className="text-sm">Show</Label>
            </div>
          </div>

          {/* Document Type Section */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Label htmlFor="documentType" className="text-sm font-medium text-foreground">Document Type</Label>
              <Select value={coverData.documentType} onValueChange={(value) => onUpdateCoverData('documentType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DOCUMENT_TYPES.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="show-document-type"
                checked={visibility.documentType}
                onCheckedChange={(checked) => onUpdateVisibility('documentType', checked as boolean)}
              />
              <Label htmlFor="show-document-type" className="text-sm">Show</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInformation;
