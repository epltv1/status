import React from 'react';
import { Globe, Send, MessageSquare } from 'lucide-react';

const StatusCard = ({ title, url, icon: Icon, status = "Online" }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-500/20 rounded-lg">
        <Icon className="text-blue-400" size={24} />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <a href={url} target="_blank" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
          Visit Link
        </a>
      </div>
    </div>
    
    <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-green-400 text-sm font-medium">{status}</span>
    </div>
  </div>
);

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full space-y-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">System Status</h1>
          <p className="text-gray-500 mt-2">Real-time updates for our platforms</p>
        </header>

        <div className="space-y-4">
          <StatusCard title="Main Website" url="https://futbol-x.site" icon={Globe} />
          <StatusCard title="Telegram Channel" url="https://t.me/+2xTSPt1ZS9pjMTA1" icon={Send} />
          <StatusCard title="Discord Server" url="https://discord.gg/UzHzerb6XY" icon={MessageSquare} />
        </div>

        <footer className="text-center pt-10">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Futbol-X • Updated just now
          </p>
        </footer>
      </div>
    </div>
  );
}
