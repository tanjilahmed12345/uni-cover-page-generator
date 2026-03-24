import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';
import { CANVAS_OPTIONS } from '@/constants/cover-page';

export function useCoverExport(projectTitle: string) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const downloadAsPDF = async () => {
    if (!previewRef.current) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, CANVAS_OPTIONS);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${projectTitle.replace(/\s+/g, '_')}_cover.pdf`);
      toast.success('PDF downloaded successfully!');
    } catch {
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const downloadAsImage = async (format: 'png' | 'jpg' | 'webp') => {
    if (!previewRef.current) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, CANVAS_OPTIONS);

      const link = document.createElement('a');
      link.download = `${projectTitle.replace(/\s+/g, '_')}_cover.${format}`;
      link.href = canvas.toDataURL(`image/${format}`, 0.9);
      link.click();
      toast.success(`${format.toUpperCase()} image downloaded successfully!`);
    } catch {
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return { previewRef, downloadAsPDF, downloadAsImage, isExporting };
}
