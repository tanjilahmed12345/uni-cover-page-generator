import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileImage, Loader2 } from 'lucide-react';

interface DownloadOptionsProps {
  onDownloadPDF: () => void;
  onDownloadImage: (format: 'png' | 'jpg' | 'webp') => void;
  isExporting?: boolean;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  onDownloadPDF,
  onDownloadImage,
  isExporting = false,
}) => {
  return (
    <Card className="shadow-professional">
      <CardContent className="p-6">
        <h2 className="text-heading font-semibold text-primary mb-4">Download Options</h2>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onDownloadPDF}
            disabled={isExporting}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            {isExporting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
            {isExporting ? 'Exporting...' : 'Download PDF'}
          </Button>

          <Button variant="outline" onClick={() => onDownloadImage('png')} disabled={isExporting}>
            <FileImage className="w-4 h-4 mr-2" />
            Download PNG
          </Button>

          <Button variant="outline" onClick={() => onDownloadImage('jpg')} disabled={isExporting}>
            <FileImage className="w-4 h-4 mr-2" />
            Download JPG
          </Button>

          <Button variant="outline" onClick={() => onDownloadImage('webp')} disabled={isExporting}>
            <FileImage className="w-4 h-4 mr-2" />
            Download WebP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadOptions;
