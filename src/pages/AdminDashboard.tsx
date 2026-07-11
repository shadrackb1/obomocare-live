import { Wallet, FileText, Users, ArrowUpRight, PlusCircle, Edit, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May', donations: 250 },
  { month: 'Jun', donations: 310 },
  { month: 'Jul', donations: 280 },
  { month: 'Aug', donations: 420 },
  { month: 'Sep', donations: 380 },
  { month: 'Oct', donations: 520 },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant text-sm font-medium">Total Donations YTD</span>
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary-container">
              <Wallet size={16} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-container">$2.4M</h2>
            <span className="text-sm text-secondary-container font-semibold flex items-center gap-1 mt-1">
              <ArrowUpRight size={14} /> +14% vs last year
            </span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant text-sm font-medium">Active Programs</span>
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
              <FileText size={16} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-container">24</h2>
            <span className="text-sm text-on-surface-variant font-medium mt-1 inline-block">
              Across 12 regions
            </span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant text-sm font-medium">Active Volunteers</span>
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
              <Users size={16} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-container">842</h2>
            <span className="text-sm text-secondary-container font-semibold flex items-center gap-1 mt-1">
              <ArrowUpRight size={14} /> +5% this month
            </span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant text-sm font-medium">Stories Drafted</span>
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
              <FileText size={16} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-container">12</h2>
            <span className="text-sm text-on-surface-variant font-medium mt-1 inline-block">
              Pending review
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-xl font-bold text-primary-container">Donation Trends</h3>
            <select className="bg-surface border border-outline-variant/50 rounded-lg px-3 py-1 text-sm text-on-surface-variant focus:border-primary-container outline-none">
              <option>Last 6 months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#75777e'}} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#75777e'}} 
                  tickFormatter={(val) => `$${val}k`}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                  formatter={(val: number) => [`$${val}k`, 'Donations']}
                />
                <Line type="monotone" dataKey="donations" stroke="#fd761a" strokeWidth={3} dot={{r: 4, fill: '#0b1f3a', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex flex-col gap-4">
          <h3 className="font-display text-xl font-bold text-primary-container mb-2">Quick Actions</h3>
          <button className="w-full bg-secondary-container text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-sm">
            <PlusCircle size={18} /> Launch Campaign
          </button>
          <button className="w-full bg-transparent border border-primary-container text-primary-container font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <Edit size={18} /> Create New Story
          </button>
          
          <div className="mt-4 pt-4 border-t border-outline-variant/30">
            <h4 className="text-sm font-semibold text-on-surface-variant mb-3">System Status</h4>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Payment Gateway: Operational
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> API Services: Operational
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden mb-12">
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
          <h3 className="font-display text-xl font-bold text-primary-container">Recent Approvals</h3>
          <button className="text-secondary-container text-sm font-semibold hover:text-[#9d4300] transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-sm border-b border-outline-variant/30">
                <th className="py-4 px-6 font-semibold">Item</th>
                <th className="py-4 px-6 font-semibold">Type</th>
                <th className="py-4 px-6 font-semibold">Submitted By</th>
                <th className="py-4 px-6 font-semibold">Date</th>
                <th className="py-4 px-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-highest/30 transition-colors">
                <td className="py-4 px-6 font-medium text-primary-container">Q3 Impact Report - Southeast Asia</td>
                <td className="py-4 px-6 text-on-surface-variant">Report</td>
                <td className="py-4 px-6 text-on-surface-variant">Sarah Jenkins</td>
                <td className="py-4 px-6 text-on-surface-variant">Oct 24, 2024</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary-container hover:text-secondary-container transition-colors"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-highest/30 transition-colors">
                <td className="py-4 px-6 font-medium text-primary-container">Clean Water Initiative - Expansion</td>
                <td className="py-4 px-6 text-on-surface-variant">Program</td>
                <td className="py-4 px-6 text-on-surface-variant">David Chen</td>
                <td className="py-4 px-6 text-on-surface-variant">Oct 23, 2024</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary-container hover:text-secondary-container transition-colors"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-highest/30 transition-colors">
                <td className="py-4 px-6 font-medium text-primary-container">Story: A Day in the Clinic</td>
                <td className="py-4 px-6 text-on-surface-variant">Story</td>
                <td className="py-4 px-6 text-on-surface-variant">Maria Garcia</td>
                <td className="py-4 px-6 text-on-surface-variant">Oct 22, 2024</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary-container hover:text-secondary-container transition-colors"><MoreVertical size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
