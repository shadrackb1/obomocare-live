import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Download } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useImages } from '../components/ImageProvider';
import { usePageTitle } from '../components/SEO';

export default function Transparency() {
  usePageTitle('Transparency');
  const IMAGES = useImages();

  return (
    <>
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-surface-container-low overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            imgSrc={IMAGES.transparency}
            fallbackLabel="transparency"
            alt="Background"
            className="w-full h-full object-cover"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-12 text-center mt-20">
          <div className="bg-white/90 backdrop-blur-md inline-block p-8 md:p-12 rounded-xl max-w-3xl border border-outline-variant/30 shadow-md">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6 leading-tight">Radical Transparency. <br/> Zero Admin Fees.</h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">We believe trust is earned through complete openness. See exactly how every dollar is deployed to maximize impact in the communities we serve.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 max-w-container-max mx-auto px-4 md:px-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary-container mb-6">The 100% Pledge</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">Private donors cover our operating costs so 100% of your public donation goes directly to the field. We operate with lean administration to ensure maximum resources reach the programs that need them most.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary-container shrink-0 mt-1" size={24} /><span className="text-lg text-on-background">Zero overhead deducted from public funds.</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary-container shrink-0 mt-1" size={24} /><span className="text-lg text-on-background">Independent annual audits by top-tier firms.</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary-container shrink-0 mt-1" size={24} /><span className="text-lg text-on-background">Real-time tracking of project expenditures.</span></li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-white border border-outline-variant/30 shadow-sm">
            <PlaceholderImage
              imgSrc={IMAGES.transparencyInner}
              fallbackLabel="transparencyInner"
              alt="Financial Ledger"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary-container mb-4">2024 Operating Budget</h2>
            <p className="text-lg text-on-surface-variant">Total Projected: USD 1.8M</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-sm">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-3"><span className="font-semibold text-primary-container">Food Security Initiatives</span><span className="text-on-surface-variant font-medium">$810,000 (45%)</span></div>
                <div className="w-full bg-surface-variant rounded-full h-4"><div className="bg-primary-container h-4 rounded-full" style={{width: '45%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-3"><span className="font-semibold text-primary-container">Clean Water Infrastructure</span><span className="text-on-surface-variant font-medium">$540,000 (30%)</span></div>
                <div className="w-full bg-surface-variant rounded-full h-4"><div className="bg-secondary-container h-4 rounded-full" style={{width: '30%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-3"><span className="font-semibold text-primary-container">Medical Relief</span><span className="text-on-surface-variant font-medium">$360,000 (20%)</span></div>
                <div className="w-full bg-surface-variant rounded-full h-4"><div className="bg-surface-tint h-4 rounded-full" style={{width: '20%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-3"><span className="font-semibold text-primary-container">Admin & Ops (Privately Funded)</span><span className="text-on-surface-variant font-medium">$90,000 (5%)</span></div>
                <div className="w-full bg-surface-variant rounded-full h-4"><div className="bg-outline-variant h-4 rounded-full" style={{width: '5%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 max-w-container-max mx-auto px-4 md:px-12 bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary-container mb-4">Audit Reports</h2>
          <p className="text-lg text-on-surface-variant">Review our verified financial statements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <FileText className="text-secondary-container mb-6" size={40} />
            <h3 className="font-display text-2xl font-bold text-primary-container mb-3">Q4 2023 Audit</h3>
            <p className="text-on-surface-variant mb-8 flex-grow">Independent review of end-of-year financials.</p>
            <a href="/reports/q4-2023-audit.pdf" download className="inline-flex items-center text-secondary-container font-semibold hover:opacity-80 transition-opacity">Download PDF <Download className="ml-2" size={16} /></a>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <FileText className="text-secondary-container mb-6" size={40} />
            <h3 className="font-display text-2xl font-bold text-primary-container mb-3">Q3 2023 Audit</h3>
            <p className="text-on-surface-variant mb-8 flex-grow">Quarterly review of program expenditures.</p>
            <a href="/reports/q3-2023-audit.pdf" download className="inline-flex items-center text-secondary-container font-semibold hover:opacity-80 transition-opacity">Download PDF <Download className="ml-2" size={16} /></a>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <FileText className="text-secondary-container mb-6" size={40} />
            <h3 className="font-display text-2xl font-bold text-primary-container mb-3">2022 Annual Report</h3>
            <p className="text-on-surface-variant mb-8 flex-grow">Comprehensive yearly financial breakdown.</p>
            <a href="/reports/2022-annual-report.pdf" download className="inline-flex items-center text-secondary-container font-semibold hover:opacity-80 transition-opacity">Download PDF <Download className="ml-2" size={16} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
