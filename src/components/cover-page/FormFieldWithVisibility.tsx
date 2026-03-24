import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface FormFieldWithVisibilityProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  visibilityChecked: boolean;
  onVisibilityChange: (checked: boolean) => void;
  type?: string;
  labelSize?: 'sm' | 'xs';
}

const FormFieldWithVisibility: React.FC<FormFieldWithVisibilityProps> = ({
  id,
  label,
  value,
  onChange,
  visibilityChecked,
  onVisibilityChange,
  type = 'text',
  labelSize = 'xs',
}) => {
  const isCompact = labelSize === 'xs';

  return (
    <div className={`flex items-center ${isCompact ? 'gap-2' : 'gap-3'}`}>
      <div className="flex-1">
        <Label htmlFor={id} className={`text-${labelSize} font-medium text-foreground`}>{label}</Label>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1"
        />
      </div>
      <div className={`flex items-center ${isCompact ? 'space-x-1 mt-4' : 'space-x-2 mt-6'}`}>
        <Checkbox
          id={`show-${id}`}
          checked={visibilityChecked}
          onCheckedChange={(checked) => onVisibilityChange(checked as boolean)}
        />
        <Label htmlFor={`show-${id}`} className={`text-${labelSize}`}>Show</Label>
      </div>
    </div>
  );
};

export default FormFieldWithVisibility;
