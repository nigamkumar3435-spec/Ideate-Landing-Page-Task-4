import React, { useState } from 'react';
import { Clock, MapPin, Bookmark, BookmarkCheck, Search, Radio } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/techfestData';
import { soundFx } from '../lib/sound';

const DAYS = ['Day 01', 'Day 02', 'Day 03'] as const;
const CATEGORIES = ['All', 'Competitions', 'Robowars', 'Workshops', 'Lectures', 'Technoholix', 'Drone Show'] as const;

export const ScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'Day 01' | 'Day 02' | 'Day 03'>('Day 01');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mySchedule, setMySchedule] = useState<string[]>([]);
  const [showMyScheduleOnly, setShowMyScheduleOnly] = useState<boolean>(false);

  const toggleBookmark = (id: string) => {
    soundFx.playSelect();
    if (mySchedule.includes(id)) {
      setMySchedule(mySchedule.filter(item => item !== id));
    } else {
      setMySchedule([...mySchedule, id]);
    }
  };

  const filteredSchedule = SCHEDULE_DATA.filter(item => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.venue.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmarked = !showMyScheduleOnly || mySchedule.includes(item.id);
    return matchesDay && matchesCategory && matchesSearch && matchesBookmarked;
  });

  const liveNowItem = SCHEDULE_DATA.find(i => i.isLive);

  return (
    <section id="schedule" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Live Now Indicator Bar */}
        {liveNowItem && (
          <div className="w-full mb-12 p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CCFF00] text-black font-bold uppercase animate-pulse">
                <Radio size={14} /> LIVE NOW
              </span>
              <span className="text-white font-bold">{liveNowItem.title}</span>
              <span className="text-neutral-400">@ {liveNowItem.venue}</span>
            </div>
            <div className="text-[#CCFF00] uppercase font-bold">
              30TH EDITION LIVE CONTROL CENTER
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // INTERACTIVE FESTIVAL PROGRAM
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              FESTIVAL<br />
              <span className="text-[#CCFF00]">SCHEDULE.</span>
            </h2>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search schedule..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-neutral-900 border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#CCFF00]"
              />
            </div>

            <button
              onClick={() => {
                soundFx.playSelect();
                setShowMyScheduleOnly(!showMyScheduleOnly);
              }}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase transition-all flex items-center justify-center gap-2 border ${
                showMyScheduleOnly
                  ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <Bookmark size={14} />
              <span>MY SCHEDULE ({mySchedule.length})</span>
            </button>
          </div>
        </div>

        {/* Days Switcher */}
        <div className="flex items-center gap-4 mb-8">
          {DAYS.map(day => (
            <button
              key={day}
              onClick={() => {
                soundFx.playSelect();
                setSelectedDay(day);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-8 py-3 rounded-full font-display font-bold text-sm tracking-wider uppercase transition-all border ${
                selectedDay === day
                  ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-neon-lime'
                  : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playSelect();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-neutral-200 text-black border-white font-bold'
                  : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="flex flex-col gap-4">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map(item => {
              const isBookmarked = mySchedule.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    item.isLive
                      ? 'bg-[#CCFF00]/5 border-[#CCFF00]'
                      : 'bg-[#090909] border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-start md:items-center gap-6">
                    <div className="font-mono text-sm text-[#CCFF00] font-bold w-24 shrink-0 flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{item.time}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[10px] text-[#CCFF00] uppercase bg-black px-2 py-0.5 rounded border border-[#CCFF00]/30">
                          {item.category}
                        </span>
                        {item.isLive && (
                          <span className="font-mono text-[10px] text-[#CCFF00] font-bold uppercase animate-pulse">
                            ● LIVE NOW
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-neutral-400 mt-1 max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-800">
                    <div className="flex items-center gap-1 font-mono text-xs text-neutral-400">
                      <MapPin size={14} className="text-[#CCFF00]" />
                      <span>{item.venue}</span>
                    </div>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-2 rounded-full border transition-colors ${
                        isBookmarked
                          ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
                          : 'border-neutral-700 text-neutral-400 hover:text-white hover:border-white'
                      }`}
                      title={isBookmarked ? 'Remove from My Schedule' : 'Add to My Schedule'}
                    >
                      {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center font-mono text-xs text-neutral-500 bg-[#090909] border border-neutral-800 rounded-2xl">
              No events found matching your filter criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
